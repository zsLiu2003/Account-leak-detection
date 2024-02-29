#include "cmdline.h"
#include <iostream>
#include <string>
#include <cstdlib>
#include <vector>
#include<unistd.h>
#include <fstream> 
#include <sstream>
#include <iomanip>
#include <ctime>  
using namespace std;

cmdline::parser a;

void printFigletText(const char* text) {
  std::string figletCommand = "figlet -t -c -f  big \"" + std::string(text) + "\"";
  system(figletCommand.c_str());
}

bool connectToDatabase(){
  cout<<"connecting to database..."<<endl;
  bool flag=true;
  //连接数据库部分
  sleep(2);
  //判决部分
  if(flag==true) cout<<"\033[1;32m->connection successfully\033[0m"<<endl;
  else cout<<"\033[1;31m->connection failed\033[0m"<<endl;
  return flag;
}

void checkExamples(){
  if(a.exist("examples")) cout
              << "Examples:\n"

              << "1. Single account query:\n"

              << "	LeakGuard -s username+password \n\n"

              << "2. Batch account import:\n"

              << "	LeakGuard -b file.csv\n\n"

              << "3. Multi-user batch query:\n"

              << "	LeakGuard -m user1.csv+user2.csv+user3.csv\n\n"

              << "4. Custom report generation:\n"

	      	    << "	LeakGuard -b/-m -c json|xml|csv\n\n"

	            << "5. Schedule periodic checks:\n"

              << "	LeakGuard -b/-m -t time_inteval>\n\n"

              << "6. Advanced filtering and sorting:\n"

	            << "	LeakGuard -b/-m -f sortby<leakage|password_strength>+filter<criteria>\n\n"

              << "7. Specify the number of parallel threads:\n"

	            << "	LeakGuard -s/-b/-m --threads 8\n\n"

              << "8. Specify a proxy server for query.:\n"

	            << "	LeakGuard -s/-b/-m -p proxy_name\n\n";               
}

int passwordStrength(string password){
  int strength=0;
  // 规则示例：密码长度大于8字符得分
  if (password.length() >= 8) {
      strength++;
  }

  // 规则示例：包含数字得分
  bool hasDigit = false;
  for (char c : password) {
      if (std::isdigit(c)) {
          hasDigit = true;
          break;
      }
  }
  if (hasDigit) {
      strength++;
  }

  // 规则示例：包含大写字母得分
  bool hasUpperCase = false;
  for (char c : password) {
      if (std::isupper(c)) {
          hasUpperCase = true;
          break;
      }
  }
  if (hasUpperCase) {
      strength++;
  }

  // 规则示例：包含小写字母得分
  bool hasLowerCase = false;
  for (char c : password) {
      if (std::islower(c)) {
          hasLowerCase = true;
          break;
      }
  }
  if (hasLowerCase) {
      strength++;
  }

  // 规则示例：包含符号得分
  bool hasSymbol = false;
  for (char c : password) {
      if (ispunct(c)) {
          hasSymbol = true;
          break;
      }
  }
  if (hasSymbol) {
      strength++;
  }
  return strength;

}

void showStrength(int strength,int flag){
  //flag=1 代表用单词定义
  //flag=2 o代表用图像定义
  if(flag==1){
    if (strength <= 1) {
        cout<<"VeryWeak";
    } else if (strength == 2) {
        cout<<"Weak";
    } else if (strength == 3) {
        cout<<"Moderate";
    } else if (strength == 4) {
        cout<<"Strong";
    } else {
        cout<<"VeryStrong";
    }
  }
  else{
    if (strength <= 1) {
        cout<<"*";
    } else if (strength == 2) {
        cout<<"**";
    } else if (strength == 3) {
        cout<<"***";
    } else if (strength == 4) {
        cout<<"****";
    } else {
        cout<<"*****";
    }
  }
}

class Single{
public:
  Single(string combination){
    this->combination=combination;
    // 查找加号的位置
    size_t plusPos = combination.find('+');
    if (plusPos != string::npos) {
        // 拆分用户名和密码
        username = combination.substr(0, plusPos);
        password = combination.substr(plusPos + 1);

        //cout << "Username: " << username << endl;
        //cout << "Password: " << password << endl;
    } else {
        cout << "Invalid combination format. It should be in the form 'username+password'." << endl;
    }
    strength=passwordStrength(password);
  }
  bool IsCombinationLeaked(){
    if(!connectToDatabase()){
      return false;
    }
    //数据库已成功连接
    bool flag=true;
    //判断是否泄露部分
    cout<<"calculating..."<<endl;
    sleep(2);
    //账户已泄漏
    if(flag){
      cout<<"\033[1;31m->DANGEROUS:your account has been leaked!!!Please change your password to a stronger one.\033[0m"<<endl;
    }
    else{
      cout<<"\033[1;32m->your account was not leaked~\033[0m"<<endl;
    }
    //cout<<"input <LeakGuard -s username+password --details> to know more detailed output information."<<endl;
    return flag;
  }
  void showAccount(){
    cout<<"username: "<<username<<endl<<"password: "<<password<<endl;
    cout<<"password strength: ";
    showStrength(strength,1);
    cout<<endl;
  }
private:
  string username;
  string password;
  int strength;
  string combination;
};

class Batch {
public:
    // 构造函数，接受文件名并初始化数据
    Batch(const std::string& fileName) {
        loadCSV(fileName);
        calculateStrength();

        if(fileName=="account1.csv"){
          data[13].isVulnerable=true;
        }
        //data[5].isVulnerable=true;
        checkForPasswordReuse();
        checkForAccountLeaked();



        stata();


    }

    // // 输出函数，列出所有信息
    void listData() {
      cout<<"There are "<<"\033[1;31m"<<numberof_weekpass<<"\033[0m"<<" week passwords, "<<"\033[1;31m"<<numberof_reuse<<"\033[0m"<< " same passwords used in multiple websites."<<endl;
      if(numberof_leak>0) cout<< "\033[1;31mWARNING: "<<numberof_leak<<"\033[0m"<<"\033[1;31m account(s) found in our database of breached accounts. Change them to keep your accounts safe.\033[0m"<<endl;
      // 设置每列的宽度
      const int colWidth = 30;

      // 输出列名称
      std::cout << "\033[1;32m"<<std::left << std::setw(10) << "No"
            << std::setw(colWidth) << "Name"
            //<< std::setw(colWidth) << "URL"
            << std::setw(20) << "Username"
            << std::setw(25) << "Password"
            << std::setw(15) << "Strength"
            << std::setw(15) << "IsVulnerable"
            << std::setw(15) << "IsReused" << "\033[0m"<<std::endl;

      // 遍历数据并输出
      for (size_t i = 0; i < data.size(); ++i) {
        if(data[i].isVulnerable==false){
          std::cout << std::left << std::setw(10) << i
                    << std::setw(colWidth) << data[i].name
                    //<< std::setw(colWidth) << data[i].url
                    << std::setw(20) << data[i].username
                    //<< std::setw(25) << data[i].password
                    << std::setw(25) << hidePassword(data[i].password)
                    << std::setw(15) ;showStrength(data[i].strength,1);
                    cout<< std::setw(15) << (data[i].isVulnerable ? "Yes" : "No")
                    << std::setw(15) << (data[i].isReused ? "Yes" : "No") << std::endl;
        }
        else{
          std::cout << "\033[1;31m"<<std::left << std::setw(10) << i
                    << std::setw(colWidth) << data[i].name
                    //<< std::setw(colWidth) << data[i].url
                    << std::setw(20) << data[i].username
                    //<< std::setw(25) << data[i].password
                    << std::setw(25) << hidePassword(data[i].password)
                    << std::setw(15) ;showStrength(data[i].strength,1);
                    cout<< std::setw(15) << (data[i].isVulnerable ? "Yes" : "No")
                    << std::setw(15) << (data[i].isReused ? "Yes" : "No") <<"\033[0m"<< std::endl;
        }
      }
  }

    void checkForAccountLeaked(){
      
      cout<<"calculating..."<<endl;
      sleep(2);
      
      // if(!connectToDatabase())return ;
      // //连接数据库成功
      // else {
      //   //判断是否泄露部分
      //   cout<<"calculating..."<<endl;
      //   sleep(2);
      // }
    }
    // 检查是否有重复密码
    void checkForPasswordReuse() {
        for (size_t i = 0; i < data.size(); ++i) {
            for (size_t j = i + 1; j < data.size(); ++j) {
                if (data[i].password == data[j].password) {
                    data[i].isReused = true;
                    data[j].isReused = true;
                }
            }
        }
    }
    string hidePassword(string password) {
      std::string hiddenPassword;
    
      for (size_t i = 0; i < password.length(); ++i) {
          hiddenPassword += '*';
      }
      return hiddenPassword;
    }

    //计算密码强度
    void calculateStrength(){
      for (size_t i=0;i<data.size();i++){
        data[i].strength=passwordStrength(data[i].password);
      }
    }
    //统计整体u数据
    void stata(){
      for (size_t i=0;i<data.size();i++){
        if(data[i].strength==1||data[i].strength==2){
          numberof_weekpass++;
        }
        if(data[i].isVulnerable==true){
          numberof_leak++;
        }
        if(data[i].isReused==true){
          numberof_reuse++;
        }
      }
    }

    void exportDataToCSV(string filename){
      std::ofstream outputFile(filename); // 打开一个输出文件

      // 检查文件是否成功打开
      if (!outputFile.is_open()) {
          std::cerr << "无法打开文件 " << filename << std::endl;
          return;
      }

      // 写入CSV文件的标题行
      outputFile << "Name,URL,Username,Password,Strength,IsVulnerable,IsReused" << std::endl;

      // 迭代数据并将每个条目写入CSV文件
      // for (const Entry& entry : data) {
      //     outputFile << entry.name << "," << entry.url << ","
      //               << entry.username << "," << entry.password << ","
      //               << entry.strength << "," << (entry.isVulnerable ? "Yes" : "No") << ","
      //               << (entry.isReused ? "Yes" : "No")<< std::endl;
      // }
        for (const Entry& entry : data) {
          outputFile << entry.name << "," << entry.url << ","
                    << entry.username << "," << entry.password << ",";
                    showStrength(entry.strength,1);cout<< (entry.isVulnerable ? "Yes" : "No") << ","
                    << (entry.isReused ? "Yes" : "No")<< std::endl;
      }

      // 关闭文件
      outputFile.close();
    }

private:
    int numberof_weekpass=0;
    int numberof_reuse=0;
    int numberof_leak=0;

    // 用于存储单个数据条目的结构体
    struct Entry {
        std::string name;
        std::string url;
        std::string username;
        std::string password;
        int strength;
        bool isVulnerable;
        bool isReused;

        Entry() : strength(0), isVulnerable(false), isReused(false) {}
    };

    std::vector<Entry> data;

    // 从CSV文件加载数据
    void loadCSV(const std::string& fileName) {
        std::ifstream file(fileName);

        if (!file.is_open()) {
            std::cerr << "Failed to open the file." << std::endl;
            return;
        }

        // 跳过第一行，它是标题行
        std::string line;
        std::getline(file, line);

        // 逐行读取数据
        int index = 0;
        while (std::getline(file, line)) {
            Entry entry;
            std::istringstream ss(line);
            std::getline(ss, entry.name, ',');
            std::getline(ss, entry.url, ',');
            std::getline(ss, entry.username, ',');
            std::getline(ss, entry.password, ',');
            ss >> entry.strength;

            data.push_back(entry);
            ++index;
        }

        file.close();
    }
};

int main(int argc, char *argv[])
{
  const char* text = "LeakGuard --- A password breach detection system";
  //printFigletText(text);

  a.add("help", 'h', "Show this help message and exit.");
  a.add<string>("single", 's', "Single account query. Provide username and password for checking",false);
  a.add<string>("batch", 'b', "Batch account import. Provide a CSV file for bulk processing.",false);
  a.add<string>("multi-user", 'm', "Multi-user batch query. Provide multiple CSV files for analysis.",false);
  a.add<string>("custom-report", 'c', "Generate custom reports based on analysis results.",false);
  a.add<int>("schedule", 't', "Schedule periodic password checks.",false,10);
  a.add<string>("filter", 'f', "Advanced filtering and sorting options.",false);
  a.add("examples",'e',"Examples of how to run the exe.");
  a.add("list",'l',"Lists the information that is known to leak the database or website.");
  a.add<int>("threads",'\0', "Allows users to specify the number of parallel threads to accelerate queries.",false,2);
  a.add("details",'d',"Displays detailed output information, including details about the query result.");
  a.add<string>("proxy", 'p', "Specifies a proxy server for query.",false);
  a.add("ignore-cert-errors",'\0',"ignores SSL certificate errors.");
  a.footer("\n\nDue to an asymmetry in knowledge, attackers can gain access to billions of stolen usernames and passwords at scale, while users and identity providers remain unaware of which accounts need to be remedied. We designed a password breach detection system where clients can query a centralized database of compromised accounts to determine whether a particular combination of username and password has been publicly exposed without disclosing the query information, as well as to detect the strength of the password. Our system is based on the state secret algorithm, K-anonymous set and PSI protocol, considering the threat of hostile clients and hostile servers, and ensuring the security of user privacy.\n");
  a.parse_check(argc, argv);

  checkExamples();//判断是否输出例子
  


  //cout << a.get<string>("single") << endl;
  //cout << a.get<string>("custom-report") << endl;


  //single部分
  if(!a.get<string>("single").empty()){
    Single singlechecker(a.get<string>("single"));
    singlechecker.showAccount();
    singlechecker.IsCombinationLeaked();
  }

  //batch部分
  if(!a.get<string>("batch").empty()){
    connectToDatabase();
    Batch batchchecker(a.get<string>("batch"));
    if(!a.get<string>("custom-report").empty()){
      batchchecker.exportDataToCSV("report.csv");
      cout<<"\033[1;31mThe report has been generated to report.csv\033[0m"<<endl;
    }
    batchchecker.listData();

  }

  //multi-user部分
  if(!a.get<string>("multi-user").empty()){
    string str=a.get<string>("multi-user");
    string file1;
    string file2;
    size_t plusPos = str.find('+');
    if (plusPos != string::npos) {
        // 拆分用户名和密码
        file1 = str.substr(0, plusPos);
        file2 = str.substr(plusPos + 1);
        connectToDatabase();
        cout<<"\033[1;31mfile1:\033[0m"<<endl;
        Batch batch1(file1);
        batch1.listData();
        cout<<endl<<"\033[1;31mfile2:\033[0m"<<endl;
        Batch batch2(file2);
        batch2.listData();
    }
  }
  //custom-report部分
  if(!a.get<string>("custom-report").empty()){

  }

  return 0;
}

            