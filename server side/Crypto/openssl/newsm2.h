#ifndef NEWSM2_H
#define NEWSM2_H


#include <cstdio>
#include <cstdlib>
#include <cstring>
#include "openssl/ec.h"
#include "openssl/evp.h"

class SM2 {

	/**************************************************
	* Main function return value:
		0:   main function executes successfully
		-1:  an error occurs
	**************************************************/
	int ret, i;
	EVP_PKEY_CTX* pctx = NULL, * ectx = NULL;
	EVP_PKEY* pkey = NULL;
	size_t message_len;
	unsigned char* message = NULL;
	unsigned char* ciphertext = NULL, * plaintext = NULL;
	size_t ciphertext_len, plaintext_len;
	const EC_KEY* key_pair = NULL;
	const BIGNUM* priv_key = NULL;
	char* priv_key_str = NULL;

	const EC_GROUP* group = NULL;
	const EC_POINT* pub_key = NULL;
	BN_CTX* ctx = NULL;
	BIGNUM* x_coordinate = NULL, * y_coordinate = NULL;
	char* x_coordinate_str = NULL, * y_coordinate_str = NULL;


	SM2(unsigned char* _message)
	{
		ret = -1;
		message = _message;
		message_len = sizeof(message);
		ciphertext_len = 0;
		plaintext_len = 0;
		i = 0;
	}

	int Generate_key_pair()
	{
		/* create SM2 Ellipse Curve parameters and key pair */
		if (!(this->pctx = EVP_PKEY_CTX_new_id(EVP_PKEY_EC, NULL)))
		{
			Clean_up();
		}

		if ((EVP_PKEY_paramgen_init(pctx)) != 1)
		{
			Clean_up();
		}

		if ((EVP_PKEY_CTX_set_ec_paramgen_curve_nid(pctx, NID_sm2)) <= 0)
		{
			Clean_up();
		}

		if ((EVP_PKEY_keygen_init(pctx)) != 1)
		{
			Clean_up();
		}

		if ((EVP_PKEY_keygen(pctx, &pkey)) != 1)
		{
			Clean_up();
		}

		/* print SM2 key pair */
		
		if (!(key_pair = EVP_PKEY_get0_EC_KEY(pkey)))
		{
			Clean_up();
		}

		if (!(priv_key = EC_KEY_get0_private_key(key_pair)))
		{
			Clean_up();
		}

		if (!(priv_key_str = BN_bn2hex(priv_key)))
		{
			Clean_up();
		}
		printf("SM2 private key (in hex form):\n");
		printf("%s\n\n", priv_key_str);

		if (!(pub_key = EC_KEY_get0_public_key(key_pair)))
		{
			Clean_up();
		}

		if (!(group = EC_KEY_get0_group(key_pair)))
		{
			Clean_up();
		}

		if (!(ctx = BN_CTX_new()))
		{
			Clean_up();
		}
		BN_CTX_start(ctx);
		x_coordinate = BN_CTX_get(ctx);
		y_coordinate = BN_CTX_get(ctx);
		if (!(y_coordinate))
		{
			Clean_up();
		}
		if (!(EC_POINT_get_affine_coordinates(group, pub_key, x_coordinate, y_coordinate, ctx)))
		{
			Clean_up();
		}
		if (!(x_coordinate_str = BN_bn2hex(x_coordinate)))
		{
			Clean_up();
		}
		printf("x coordinate in SM2 public key (in hex form):\n");
		printf("%s\n\n", x_coordinate_str);

		if (!(y_coordinate_str = BN_bn2hex(y_coordinate)))
		{
			Clean_up();
		}
		printf("y coordinate in SM2 public key (in hex form):\n");
		printf("%s\n\n", y_coordinate_str);
		
		ret = 0;


		return ret;
	}


	int SM2_encryotion()
	{
		/* compute SM2 encryption */

		if (!(ectx = EVP_PKEY_CTX_new(pkey, NULL)))
		{
			Clean_up();
		}

		if ((EVP_PKEY_encrypt_init(ectx)) != 1)
		{
			Clean_up();
		}

		if ((EVP_PKEY_encrypt(ectx, NULL, &ciphertext_len, message, message_len)) != 1)
		{
			Clean_up();
		}

		if (!(ciphertext = (unsigned char*)malloc(ciphertext_len)))
		{
			Clean_up();
		}

		if ((EVP_PKEY_encrypt(ectx, ciphertext, &ciphertext_len, message, message_len)) != 1)
		{
			Clean_up();
		}

		printf("Message length: %ld bytes.\n", message_len);
		printf("Message:\n");
		for (i = 0; i < (int)message_len; i++)
		{
			printf("0x%x  ", message[i]);
		}
		printf("\n\n");

		printf("Ciphertext length: %ld bytes.\n", ciphertext_len);
		printf("Ciphertext (ASN.1 encode):\n");
		for (i = 0; i < (int)ciphertext_len; i++)
		{
			printf("0x%x  ", ciphertext[i]);
		}
		printf("\n\n");
		ret = 0;


		return ret;
	}
	int SM2_decrypt()
	{
		/* compute SM2 decryption */
		if ((EVP_PKEY_decrypt_init(ectx)) != 1)
		{
			Clean_up();
		}

		if ((EVP_PKEY_decrypt(ectx, NULL, &plaintext_len, ciphertext, ciphertext_len)) != 1)
		{
			Clean_up();
		}

		if (!(plaintext = (unsigned char*)malloc(plaintext_len)))
		{
			Clean_up();
		}

		if ((EVP_PKEY_decrypt(ectx, plaintext, &plaintext_len, ciphertext, ciphertext_len)) != 1)
		{
			Clean_up();
		}

		printf("Decrypted plaintext length: %ld bytes.\n", plaintext_len);
		printf("Decrypted plaintext:\n");
		for (i = 0; i < (int)plaintext_len; i++)
		{
			printf("0x%x  ", plaintext[i]);
		}
		printf("\n\n");

		if (plaintext_len != message_len)
		{
			printf("Decrypted data length error!\n");
			Clean_up();
		}

		if (memcmp(plaintext, message, message_len))
		{
			printf("Decrypt data failed!\n");
			Clean_up();
		}
		else
		{
			printf("Encrypt and decrypt data succeeded!\n");
		}

		ret = 0;
		
		return ret;
	}

	void Clean_up()
	{
		if (pctx)
		{
			EVP_PKEY_CTX_free(pctx);
		}

		if (pkey)
		{
			EVP_PKEY_free(pkey);
		}

		if (priv_key_str)
		{
			OPENSSL_free(priv_key_str);
		}

		if (ctx)
		{
			BN_CTX_end(ctx);
			BN_CTX_free(ctx);
		}

		if (x_coordinate_str)
		{
			OPENSSL_free(x_coordinate_str);
		}

		if (y_coordinate_str)
		{
			OPENSSL_free(y_coordinate_str);
		}

		if (ectx)
		{
			EVP_PKEY_CTX_free(ectx);
		}

		if (ciphertext)
		{
			free(ciphertext);
		}

		if (plaintext)
		{
			free(plaintext);
		}
	}
};

#endif // !NEWSM2_H

