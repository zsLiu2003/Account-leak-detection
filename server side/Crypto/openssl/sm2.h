#include <cstring>
#include <cstdio>
#include <iostream>
#include <cstdlib>
#include <openssl/evp.h>
#include <openssl/ec.h>
#include <openssl/ecdh.h>
#include <openssl/ecdsa.h>
#include <openssl/objects.h>
#include <openssl/err.h>
#include <openssl/asn1.h>
#include <openssl/asn1t.h>
#include <openssl/bn.h>
extern "C"
{
#include <openssl/applink.c>
}
#define _CRT_SECURE_NO_WARNINGS
typedef struct SM2_Ciphertext_st SM2_Ciphertext;
DECLARE_ASN1_FUNCTIONS(SM2_Ciphertext)

struct SM2_Ciphertext_st
{
    BIGNUM* C1x;
    BIGNUM* C1y;
    ASN1_OCTET_STRING* C3;
    ASN1_OCTET_STRING* C2;
};

ASN1_SEQUENCE(SM2_Ciphertext) = {
    ASN1_SIMPLE(SM2_Ciphertext, C1x, BIGNUM),
    ASN1_SIMPLE(SM2_Ciphertext, C1y, BIGNUM),
    ASN1_SIMPLE(SM2_Ciphertext, C3, ASN1_OCTET_STRING),
    ASN1_SIMPLE(SM2_Ciphertext, C2, ASN1_OCTET_STRING),
} ASN1_SEQUENCE_END(SM2_Ciphertext)

IMPLEMENT_ASN1_FUNCTIONS(SM2_Ciphertext)
/* =========SM2密文解析功能头文件及宏定义引入部分结束========= */

class SM2
{
public:
    EC_KEY* key1, * key2;
    const EC_POINT* pubkey1;
    EC_POINT* pubkey2;
    EC_GROUP* group1, * group2;
    unsigned int ret, nid, size, i, sig_len;
    unsigned char* signature, digest[20];
    BIO* berr;
    EC_builtin_curve* curves;
    int crv_len;
    char shareKey1[128], shareKey2[128];
    int len1, len2;
    EVP_PKEY* pkeySM2;
    SM2()
    {
        CreatePkey();
    }
    /* 构造 EC_KEY 数据结构 */
    int  CreatePkey()
    {

        key1 = EC_KEY_new();
        if (key1 == NULL)
        {
            printf("EC_KEY_new err!\n");
            return -1;
        }
        
        /* 获取实现的椭圆曲线个数 */
        crv_len = EC_get_builtin_curves(NULL, 0);
        curves = (EC_builtin_curve*)malloc(sizeof(EC_builtin_curve) * crv_len);
        /* 获取椭圆曲线列表 */
        EC_get_builtin_curves(curves, crv_len);
        /*
        nid=curves[0].nid;会有错误，原因是密钥太短
        */
        /* 选取一种椭圆曲线 */
        /* SM2貌似是1172,需要验证. 要么就得在comments中判断 */
        nid = 1172; // curves[25].nid;

        /* 根据选择的椭圆曲线生成密钥参数 group */
        group1 = EC_GROUP_new_by_curve_name(nid);
        if (group1 == NULL)
        {
            printf("EC_GROUP_new_by_curve_name err!\n");
            return -1;
        }
       
        /* 设置密钥参数 */
        ret = EC_KEY_set_group(key1, group1);
        if (ret != 1)
        {
            printf("EC_KEY_set_group err.\n");
            return -1;
        }
       
        /* 生成密钥 */
        ret = EC_KEY_generate_key(key1);
        if (ret != 1)
        {
            printf("EC_KEY_generate_key err.\n");
            return -1;
        }
        /* 这里为什么注释?因为在下面获取key2的公钥指针时候,
         * 愕然发现这个函数不需要key2初始化,但是有的函数就需要否则会coredump,很离谱
         * 见下面 注释的EC_KEY_get0_public_key函数 和 EC_KEY_set_public_key函数
         */
         // ret = EC_KEY_generate_key(key2);
         // if (ret != 1)
         // {
         //     printf("EC_KEY_generate_key err.\n");
         //     return -1;
         // }
         /* 检查密钥 */
        ret = EC_KEY_check_key(key1);
        if (ret != 1)
        {
            printf("check key err.\n");
            return -1;
        }
        /* 获取密钥大小 */
        // BIO_set_fp(berr,stdout,BIO_NOCLOSE);

        /* 签名数据，本例未做摘要，可将 digest 中的数据看作是 sha1 摘要结果 */
        /*************** 务必注意，这个函数在openssl3.0下可以正常使用，但在1.1.1下这个函数就只是ECDSA算法的签名而已，不是SM2，1.1.1下的SM2算法需要使用EVP_PKEY_**系列函数才能调用到。具体调用方式参见下面的验签部分。这里我就保留做样例了，需要1.1.1代码的参考下面代码挪动到这里修改下就可以了 ***************/
        /* 另外需要注意的一点是，openssl使用的数据，就是digest的部分，是bin格式的，不是hex格式的，即char digest[]={0x01,0x23,...}而不是char digest[]=“0123...” */
        /* 从key1中提取公钥,注意两个变量的类型定义 */
        pubkey1 = EC_KEY_get0_public_key(key1);
        /* 这个函数定义在ec_key.c中,这个函数上面一个就是get_private_key,如有需要自己研究怎么用吧 */

        /* 公钥结构定义中包含x/y的BIGNUM变量,这里创建两个变量进行承接 */
        BIGNUM* x = BN_new();
        BIGNUM* y = BN_new();
        /* 承接转字符串后的x和y,名字我瞎JB起的,别在意,反正是demo */
        char* xx = NULL;
        char* yy = NULL;

        /* 核心的提取函数,将公钥结构中的x和y提取到后面的两个参数中,类型为BIGNUM,后面注释的函数功能是逆向将XY赋值到公钥中 */
        if (EC_POINT_get_affine_coordinates(group1, pubkey1, x, y, NULL)) // EC_POINT_set_affine_coordinates
        {
            /* 这里输出了BIGNUM形式的X和Y,并一起以16进制字符串形式赋值给字符指针xx,yy. */
            BN_print_fp(stdout, x);
            xx = BN_bn2hex(x);
  //          putc('\n', stdout);
   //         printf("%s\n", xx);

            BN_print_fp(stdout, y);
            yy = BN_bn2hex(y);
 //           putc('\n', stdout);
 //           printf("%s\n", yy);
        }

        /* 进行密钥的传递和转换,这里是承接XY16进制字符串的字符串空间 */
        char x2[128] = { 0 };
        char y2[128] = { 0 };

        /* 密钥传递,我前面使用的nid为1172,即SM2,相应的XY为64字节 */
 //       snprintf(x2, 128, "%s", xx);
//        snprintf(y2, 128, "%s", yy);
        /* 看看对不对 */
 //       printf("x2:%s.\ny2:%s.\n\n", x2, y2);

        /* 字符串转BIGNUM,就是前面公钥提取的逆过程,这里是初始的xy定义,2代表这是承接者 */
        BIGNUM* BNx2 = NULL;
        BIGNUM* BNy2 = NULL;
        /* 字符串转BIGNUM核心函数 */
        BN_hex2bn(&BNx2, x2);
        BN_hex2bn(&BNy2, y2);
   //     /* 看看对不对 */
    //    BN_print_fp(stdout, BNx2);
 //       putc('\n', stdout);
      //  BN_print_fp(stdout, BNy2);
      //  putc('\n', stdout);

        /* 注意这里是要将BIGNUM转换为公钥,
         * 公钥本质上就是椭圆曲线上的一个点,
         * 所以这里就是在曲线上取一个点,当然这个点目前是没有确定的,空点
         * 在曲线2上取,因为这个代码是公钥序列化导出和导入,所以不会直接用原来的1曲线
         * 当然了,因为是同一个算法,所以即使是两条曲线,也是完全相同的
         * 后面注释的内容是另一个方法,从曲线上导出一个密钥,再从密钥中拿到公钥的指针,再用咱的公钥覆盖
         * 这里就不用了,用更加官方的导入方式
         */
      
        /* 将BIGNUM类型的X和Y赋值到获取的点pubkey2中 */
        /* 创建EVP_PKEY */
        this->pkeySM2 = EVP_PKEY_new();
        if (!pkeySM2)
        {
            printf("EVP_PKEY_new() Error.\n");
            return -1;
        }
        /* 将EC_KEY转存入EVP_PKEY中 */
        EVP_PKEY_set1_EC_KEY(pkeySM2, key1);
        /* 设置EVP_PKEY的SM2属性 */
        if ((EVP_PKEY_set_alias_type(pkeySM2, EVP_PKEY_SM2)) != 1)
        {
            printf("EVP_PKEY_set_alias_type() Error.\n");
            return -1;
        }
        /* 创建EVP_PKEY_CTX变量 */
        EVP_PKEY_CTX* ctxSM2 = EVP_PKEY_CTX_new(pkeySM2, NULL);
        if (!ctxSM2)
        {
            printf("EVP_PKEY_CTX_new() Error.\n");
            return -1;
        }
    }


    unsigned char * ECC_Encrypt(unsigned char* data)
    {

        /* 数据部分,测试用 */
        unsigned char out[1024] = { 0 };
        int datasize = sizeof(data);
     //   printf("EVP_DATA len:%d  Out:%s.\n", datasize, data);
       // printf("=================加密部分===============\n");

        /* 生成EVP_PKEY_CTX上下文 */
        EVP_PKEY_CTX* ctx = EVP_PKEY_CTX_new(pkeySM2, NULL);
        if (!ctx)
        {
            printf("EVP_PKEY_CTX_new err\n");
            return NULL;
        }
        /* 加密初始化 */
        ret = EVP_PKEY_encrypt_init(ctx);
        if (ret != 1)
        {
     //       printf("EVP_PKEY_encrypt_init err %d\n", ret);
            ERR_print_errors_fp(stderr);
            return NULL;
        }
        /* 加密 */
        size_t outlen = sizeof(out);
        EVP_PKEY_encrypt(ctx, out, &outlen, data, datasize);
       // printf("EVP_ENC  len:%d  Out:%s.\n\n\n\n\n\n", int(outlen), out);
        return out;
    }
  
    int ECC_Decrypt(const unsigned char *out)
    {
    //    printf("=================解密部分===============\n");
        size_t outlen = sizeof(out);
        unsigned char out2[1024] = { 0 };
        if ((EVP_PKEY_set_alias_type(pkeySM2, EVP_PKEY_SM2)) != 1)
        {
            printf("EVP_PKEY_set_alias_type err\n");
            ERR_print_errors_fp(stderr);
            return 0;
        }
        EVP_PKEY_CTX* ctx1 = EVP_PKEY_CTX_new(pkeySM2, NULL);
        if (!ctx1)
        {
            printf("EVP_PKEY_CTX_new err\n");
            return 0;
        }

        ret = EVP_PKEY_decrypt_init(ctx1);
        if (ret != 1)
        {
            printf("EVP_PKEY_Decrypt_init err %d\n", ret);
            return 0;
        }
        int insize = int(outlen);
        outlen = sizeof(out2);
        EVP_PKEY_decrypt(ctx1, out2, &outlen, out, insize);
       // printf("EVP_DEC  len:%d  Out:%s.\n\n", int(outlen), out2);
        //printf("EVP_ENC  len:%d  Out:%s.\n\n\n\n\n\n", insize, out);
        // return 0;
        /* ========= SM2密文解析处理部分 ========= */
        /* openssl定义的sm2密文结构体,我直接拿来用 */
        struct SM2_Ciphertext_st* sm2_ctext = NULL;
        /* 反序列化,把原本的密文字符串解析到SM2密文结构体中 */
        /* 序列化的话用函数int ASN1_item_i2d(const ASN1_VALUE *val, unsigned char **out, const ASN1_ITEM *it) */
        /* 这俩函数分别在tasn_dec.c和tasn_enc.c中 */
        /*
        sm2_ctext = (SM2_Ciphertext*)ASN1_item_d2i(NULL, (const unsigned char**)&out, insize, ASN1_ITEM_rptr(SM2_Ciphertext));
        if (sm2_ctext == NULL)
        {
            printf("Resolve SM2 EncData error.\n");
            return -1;
        }
        */
        /* 输出内容检查一下 
        printf("=================密文解析部分===============\n");*/
        /* 密文中的xy,类型为BIGNUM,相关处理参考前面的处理即可 */
        /* 输出为64字节,因为是16进制输出,实际正常应该是32字节长度 
        printf("X:");
        BN_print_fp(stdout, sm2_ctext->C1x);
        putc('\n', stdout);
        printf("Y:");
        BN_print_fp(stdout, sm2_ctext->C1y);
        putc('\n\n\n\n', stdout);*/
        /* 杂凑值和密文本体的输出,这俩是openssl定义的类型,里面有四个变量,主要用到的是长度和数据本体指针 */
        /* 杂凑值,32字节 
        printf("Hash  len %d Text:\n%s\n\n\n\n\n", sm2_ctext->C3->length, sm2_ctext->C3->data);*/
        /* 密文本体,长度和明文一致
        printf("Enced len %d Text:\n%s\n\n\n\n\n", sm2_ctext->C2->length, sm2_ctext->C2->data);  */
        /* SM2的密文应该是32+32+32+LenOfText才对,但是openssl的asn1序列化会加校验位和长度位(大概),所以实际长度会比理论长度长一些 */
        return 1;
    }
};
