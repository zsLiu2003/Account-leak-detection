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
/* =========SM2���Ľ�������ͷ�ļ����궨�����벿�ֽ���========= */

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
    /* ���� EC_KEY ���ݽṹ */
    int  CreatePkey()
    {

        key1 = EC_KEY_new();
        if (key1 == NULL)
        {
            printf("EC_KEY_new err!\n");
            return -1;
        }
        
        /* ��ȡʵ�ֵ���Բ���߸��� */
        crv_len = EC_get_builtin_curves(NULL, 0);
        curves = (EC_builtin_curve*)malloc(sizeof(EC_builtin_curve) * crv_len);
        /* ��ȡ��Բ�����б� */
        EC_get_builtin_curves(curves, crv_len);
        /*
        nid=curves[0].nid;���д���ԭ������Կ̫��
        */
        /* ѡȡһ����Բ���� */
        /* SM2ò����1172,��Ҫ��֤. Ҫô�͵���comments���ж� */
        nid = 1172; // curves[25].nid;

        /* ����ѡ�����Բ����������Կ���� group */
        group1 = EC_GROUP_new_by_curve_name(nid);
        if (group1 == NULL)
        {
            printf("EC_GROUP_new_by_curve_name err!\n");
            return -1;
        }
       
        /* ������Կ���� */
        ret = EC_KEY_set_group(key1, group1);
        if (ret != 1)
        {
            printf("EC_KEY_set_group err.\n");
            return -1;
        }
       
        /* ������Կ */
        ret = EC_KEY_generate_key(key1);
        if (ret != 1)
        {
            printf("EC_KEY_generate_key err.\n");
            return -1;
        }
        /* ����Ϊʲôע��?��Ϊ�������ȡkey2�Ĺ�Կָ��ʱ��,
         * �Ȼ���������������Ҫkey2��ʼ��,�����еĺ�������Ҫ�����coredump,������
         * ������ ע�͵�EC_KEY_get0_public_key���� �� EC_KEY_set_public_key����
         */
         // ret = EC_KEY_generate_key(key2);
         // if (ret != 1)
         // {
         //     printf("EC_KEY_generate_key err.\n");
         //     return -1;
         // }
         /* �����Կ */
        ret = EC_KEY_check_key(key1);
        if (ret != 1)
        {
            printf("check key err.\n");
            return -1;
        }
        /* ��ȡ��Կ��С */
        // BIO_set_fp(berr,stdout,BIO_NOCLOSE);

        /* ǩ�����ݣ�����δ��ժҪ���ɽ� digest �е����ݿ����� sha1 ժҪ��� */
        /*************** ���ע�⣬���������openssl3.0�¿�������ʹ�ã�����1.1.1�����������ֻ��ECDSA�㷨��ǩ�����ѣ�����SM2��1.1.1�µ�SM2�㷨��Ҫʹ��EVP_PKEY_**ϵ�к������ܵ��õ���������÷�ʽ�μ��������ǩ���֡������Ҿͱ����������ˣ���Ҫ1.1.1����Ĳο��������Ų���������޸��¾Ϳ����� ***************/
        /* ������Ҫע���һ���ǣ�opensslʹ�õ����ݣ�����digest�Ĳ��֣���bin��ʽ�ģ�����hex��ʽ�ģ���char digest[]={0x01,0x23,...}������char digest[]=��0123...�� */
        /* ��key1����ȡ��Կ,ע���������������Ͷ��� */
        pubkey1 = EC_KEY_get0_public_key(key1);
        /* �������������ec_key.c��,�����������һ������get_private_key,������Ҫ�Լ��о���ô�ð� */

        /* ��Կ�ṹ�����а���x/y��BIGNUM����,���ﴴ�������������гн� */
        BIGNUM* x = BN_new();
        BIGNUM* y = BN_new();
        /* �н�ת�ַ������x��y,������ϹJB���,������,������demo */
        char* xx = NULL;
        char* yy = NULL;

        /* ���ĵ���ȡ����,����Կ�ṹ�е�x��y��ȡ�����������������,����ΪBIGNUM,����ע�͵ĺ�������������XY��ֵ����Կ�� */
        if (EC_POINT_get_affine_coordinates(group1, pubkey1, x, y, NULL)) // EC_POINT_set_affine_coordinates
        {
            /* ���������BIGNUM��ʽ��X��Y,��һ����16�����ַ�����ʽ��ֵ���ַ�ָ��xx,yy. */
            BN_print_fp(stdout, x);
            xx = BN_bn2hex(x);
  //          putc('\n', stdout);
   //         printf("%s\n", xx);

            BN_print_fp(stdout, y);
            yy = BN_bn2hex(y);
 //           putc('\n', stdout);
 //           printf("%s\n", yy);
        }

        /* ������Կ�Ĵ��ݺ�ת��,�����ǳн�XY16�����ַ������ַ����ռ� */
        char x2[128] = { 0 };
        char y2[128] = { 0 };

        /* ��Կ����,��ǰ��ʹ�õ�nidΪ1172,��SM2,��Ӧ��XYΪ64�ֽ� */
 //       snprintf(x2, 128, "%s", xx);
//        snprintf(y2, 128, "%s", yy);
        /* �����Բ��� */
 //       printf("x2:%s.\ny2:%s.\n\n", x2, y2);

        /* �ַ���תBIGNUM,����ǰ�湫Կ��ȡ�������,�����ǳ�ʼ��xy����,2�������ǳн��� */
        BIGNUM* BNx2 = NULL;
        BIGNUM* BNy2 = NULL;
        /* �ַ���תBIGNUM���ĺ��� */
        BN_hex2bn(&BNx2, x2);
        BN_hex2bn(&BNy2, y2);
   //     /* �����Բ��� */
    //    BN_print_fp(stdout, BNx2);
 //       putc('\n', stdout);
      //  BN_print_fp(stdout, BNy2);
      //  putc('\n', stdout);

        /* ע��������Ҫ��BIGNUMת��Ϊ��Կ,
         * ��Կ�����Ͼ�����Բ�����ϵ�һ����,
         * �������������������ȡһ����,��Ȼ�����Ŀǰ��û��ȷ����,�յ�
         * ������2��ȡ,��Ϊ��������ǹ�Կ���л������͵���,���Բ���ֱ����ԭ����1����
         * ��Ȼ��,��Ϊ��ͬһ���㷨,���Լ�ʹ����������,Ҳ����ȫ��ͬ��
         * ����ע�͵���������һ������,�������ϵ���һ����Կ,�ٴ���Կ���õ���Կ��ָ��,�����۵Ĺ�Կ����
         * ����Ͳ�����,�ø��ӹٷ��ĵ��뷽ʽ
         */
      
        /* ��BIGNUM���͵�X��Y��ֵ����ȡ�ĵ�pubkey2�� */
        /* ����EVP_PKEY */
        this->pkeySM2 = EVP_PKEY_new();
        if (!pkeySM2)
        {
            printf("EVP_PKEY_new() Error.\n");
            return -1;
        }
        /* ��EC_KEYת����EVP_PKEY�� */
        EVP_PKEY_set1_EC_KEY(pkeySM2, key1);
        /* ����EVP_PKEY��SM2���� */
        if ((EVP_PKEY_set_alias_type(pkeySM2, EVP_PKEY_SM2)) != 1)
        {
            printf("EVP_PKEY_set_alias_type() Error.\n");
            return -1;
        }
        /* ����EVP_PKEY_CTX���� */
        EVP_PKEY_CTX* ctxSM2 = EVP_PKEY_CTX_new(pkeySM2, NULL);
        if (!ctxSM2)
        {
            printf("EVP_PKEY_CTX_new() Error.\n");
            return -1;
        }
    }


    unsigned char * ECC_Encrypt(unsigned char* data)
    {

        /* ���ݲ���,������ */
        unsigned char out[1024] = { 0 };
        int datasize = sizeof(data);
     //   printf("EVP_DATA len:%d  Out:%s.\n", datasize, data);
       // printf("=================���ܲ���===============\n");

        /* ����EVP_PKEY_CTX������ */
        EVP_PKEY_CTX* ctx = EVP_PKEY_CTX_new(pkeySM2, NULL);
        if (!ctx)
        {
            printf("EVP_PKEY_CTX_new err\n");
            return NULL;
        }
        /* ���ܳ�ʼ�� */
        ret = EVP_PKEY_encrypt_init(ctx);
        if (ret != 1)
        {
     //       printf("EVP_PKEY_encrypt_init err %d\n", ret);
            ERR_print_errors_fp(stderr);
            return NULL;
        }
        /* ���� */
        size_t outlen = sizeof(out);
        EVP_PKEY_encrypt(ctx, out, &outlen, data, datasize);
       // printf("EVP_ENC  len:%d  Out:%s.\n\n\n\n\n\n", int(outlen), out);
        return out;
    }
  
    int ECC_Decrypt(const unsigned char *out)
    {
    //    printf("=================���ܲ���===============\n");
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
        /* ========= SM2���Ľ��������� ========= */
        /* openssl�����sm2���Ľṹ��,��ֱ�������� */
        struct SM2_Ciphertext_st* sm2_ctext = NULL;
        /* �����л�,��ԭ���������ַ���������SM2���Ľṹ���� */
        /* ���л��Ļ��ú���int ASN1_item_i2d(const ASN1_VALUE *val, unsigned char **out, const ASN1_ITEM *it) */
        /* ���������ֱ���tasn_dec.c��tasn_enc.c�� */
        /*
        sm2_ctext = (SM2_Ciphertext*)ASN1_item_d2i(NULL, (const unsigned char**)&out, insize, ASN1_ITEM_rptr(SM2_Ciphertext));
        if (sm2_ctext == NULL)
        {
            printf("Resolve SM2 EncData error.\n");
            return -1;
        }
        */
        /* ������ݼ��һ�� 
        printf("=================���Ľ�������===============\n");*/
        /* �����е�xy,����ΪBIGNUM,��ش���ο�ǰ��Ĵ����� */
        /* ���Ϊ64�ֽ�,��Ϊ��16�������,ʵ������Ӧ����32�ֽڳ��� 
        printf("X:");
        BN_print_fp(stdout, sm2_ctext->C1x);
        putc('\n', stdout);
        printf("Y:");
        BN_print_fp(stdout, sm2_ctext->C1y);
        putc('\n\n\n\n', stdout);*/
        /* �Ӵ�ֵ�����ı�������,������openssl���������,�������ĸ�����,��Ҫ�õ����ǳ��Ⱥ����ݱ���ָ�� */
        /* �Ӵ�ֵ,32�ֽ� 
        printf("Hash  len %d Text:\n%s\n\n\n\n\n", sm2_ctext->C3->length, sm2_ctext->C3->data);*/
        /* ���ı���,���Ⱥ�����һ��
        printf("Enced len %d Text:\n%s\n\n\n\n\n", sm2_ctext->C2->length, sm2_ctext->C2->data);  */
        /* SM2������Ӧ����32+32+32+LenOfText�Ŷ�,����openssl��asn1���л����У��λ�ͳ���λ(���),����ʵ�ʳ��Ȼ�����۳��ȳ�һЩ */
        return 1;
    }
};
