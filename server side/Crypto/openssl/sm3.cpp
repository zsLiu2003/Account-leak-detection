#include "sm3.h"

char* tDigest(const char* msg1)
{
    unsigned char sm3_value[EVP_MAX_MD_SIZE];   //保存输出的摘要值的数组
    unsigned int sm3_len;
    EVP_MD_CTX* sm3ctx;                         //EVP消息摘要结构体
    sm3ctx = EVP_MD_CTX_new();//调用函数初始化             //待计算摘要的消息1
    //char msg2[] = "hzx";              //待计算摘要的消息2

    EVP_MD_CTX_init(sm3ctx);                    //初始化摘要结构体
    EVP_DigestInit_ex(sm3ctx, EVP_sm3(), NULL); //设置摘要算法和密码算法引擎，这里密码算法使用sm3，算法引擎使用OpenSSL默认引擎即软算法
    EVP_DigestUpdate(sm3ctx, msg1, strlen(msg1));//调用摘要UpDate计算msg1的摘要
    //EVP_DigestUpdate(sm3ctx, msg2, strlen(msg2));//调用摘要UpDate计算msg2的摘要 
    EVP_DigestFinal_ex(sm3ctx, sm3_value, &sm3_len);//摘要结束，输出摘要值   
    EVP_MD_CTX_reset(sm3ctx);   //释放内存
    char* temp_cipher = (char*)sm3_value;
    return temp_cipher;
}

 