#ifndef DEFAULT_H
#define DEFAULT_H
#include <string>
#include <openssl/err.h>

#define RED_t "\033[31m"
#define YELLOW_t "\033[33m"
#define GREEN_t "\033[32m"
#define WRITE "\033[0m"

#define errorL(msg) \
	std::cout << RED_t <<"Error:["<< __FILE__  << ":"<< __LINE__ << "]:"<< msg << WRITE <<std::endl;
#define debugL(msg) \
	std::cout << YELLOW_t <<"debug:["<< __FILE__ << ":"<< __LINE__ << "]:"<< msg << WRITE << std::endl;
#define infoL(msg) \
	std::cout << GREEN_t <<"infor:["<< __FILE__ << ":" << __LINE__ << "]:"<< msg << WRITE << std::endl;


std::string GetErrorStr() {
    unsigned long er = 0;

    char erbuf[512] = { 0 };

    size_t erlen = 512;

    er = ERR_get_error();
    ERR_error_string_n(er, erbuf, erlen);
    return std::string(erbuf, erlen);
}


#endif // !