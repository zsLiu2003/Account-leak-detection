#include "hash_to_curve.h"
#include <chrono>

using namespace std;
int main()
{
    vector<chrono::nanoseconds> duration_time;
    chrono::nanoseconds total_duration = chrono::nanoseconds::zero();
    OpenSSL_add_all_algorithms();
    string error = "WaWaWa!!!";
    
    ifstream dic_file;
    dic_file.open("C:\\Z.Sagapo\\code\\Linux\\Crypto\\openssl\\second.txt");
    if (!dic_file.is_open())
    {
        printf("open file error!");
        return 0;
    }
    string _line;
    int i = 0;
    while (getline(dic_file, _line))
    {
        istringstream _iss(_line);
        _iss >> dic[i];
        i++;
    }
    dic_file.close();
    ofstream out_file;
    out_file.open("C:\\Z.Sagapo\\code\\Linux\\Crypto\\openssl\\out.txt");
    string temp_line;
    for (int j = 0; j < i; j++)
    {
        auto _start = chrono::high_resolution_clock::now();
        char *data = Hash_to_curve(dic[i], error);
        auto _end = chrono::high_resolution_clock::now();
        auto runtime = chrono::duration_cast<chrono::nanoseconds>(_end - _start);
        duration_time.push_back(runtime);
        temp_line = data;
        out_file << temp_line;
    }
    for (auto& duration : duration_time)
    {
        total_duration += duration;
    }

    double total_time = double(total_duration.count()) * chrono::nanoseconds::period::num / (chrono::nanoseconds::period::den);
    cout << "处理时间为" << total_time;
    return 0;
}
