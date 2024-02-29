#include "sm3.h"

char* tDigest(const char* msg1)
{
    unsigned char sm3_value[EVP_MAX_MD_SIZE];   //���������ժҪֵ������
    unsigned int sm3_len;
    EVP_MD_CTX* sm3ctx;                         //EVP��ϢժҪ�ṹ��
    sm3ctx = EVP_MD_CTX_new();//���ú�����ʼ��             //������ժҪ����Ϣ1
    //char msg2[] = "hzx";              //������ժҪ����Ϣ2

    EVP_MD_CTX_init(sm3ctx);                    //��ʼ��ժҪ�ṹ��
    EVP_DigestInit_ex(sm3ctx, EVP_sm3(), NULL); //����ժҪ�㷨�������㷨���棬���������㷨ʹ��sm3���㷨����ʹ��OpenSSLĬ�����漴���㷨
    EVP_DigestUpdate(sm3ctx, msg1, strlen(msg1));//����ժҪUpDate����msg1��ժҪ
    //EVP_DigestUpdate(sm3ctx, msg2, strlen(msg2));//����ժҪUpDate����msg2��ժҪ 
    EVP_DigestFinal_ex(sm3ctx, sm3_value, &sm3_len);//ժҪ���������ժҪֵ   
    EVP_MD_CTX_reset(sm3ctx);   //�ͷ��ڴ�
    char* temp_cipher = (char*)sm3_value;
    return temp_cipher;
}

 