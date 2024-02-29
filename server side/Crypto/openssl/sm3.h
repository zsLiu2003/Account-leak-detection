#ifndef SM3_H
#define SM3_H

#include <cstdio>
#include <cstring>
#include <algorithm>
#include <iostream>
#include <chrono>
#include <openssl/evp.h>


char * tDigest(const char* msg1);

#endif
