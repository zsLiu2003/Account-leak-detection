#ifndef HASH_TO_CURVE_H
#define HASH_TO_CURVE_H

#include <iostream>
#include <fstream>
#include <istream>
#include <sstream>
#include "sm2.h"
#include "sm3.h"
#include <vector>

const int maxsize = 100000;


using namespace std;
vector<string> dic(maxsize);

char * Hash_to_curve(string& plaintext, string& error)
{
	/*
	ifstream dicFile;
	
	dicFile.open("second.txt");
	if (!dicFile.is_open())
	{
		printf("error!!!");
		exit(0);
	}
	string line;
	int i = 0;

	while (getline(dicFile,line))
	{
		istringstream iss(line);
		iss >> dic[i];
		i++;
	}
	*/
	const char* origin_plaintext = plaintext.c_str();
	char* sm3_ciphertext = tDigest(origin_plaintext);
	unsigned char* sm2_plaintext = (unsigned char*)sm3_ciphertext;

	SM2* tempSM2 = new SM2();

	const unsigned char* sm2_ciphertext = tempSM2->ECC_Encrypt(sm2_plaintext);
	tempSM2->ECC_Decrypt(sm2_ciphertext);

	return sm3_ciphertext;
}



#endif // !HASH_TO_CURVE_H

