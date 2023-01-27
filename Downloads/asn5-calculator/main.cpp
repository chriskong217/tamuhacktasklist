#include <iostream>
#include <string>
#include <limits>
#include "./string_calculator.h"

using std::cin;
using std::cout;
using std::endl;
using std::string;

int main()
{
    cout << "String Calculator" << endl;
    cout << "\"q\" or \"quit\" or ctrl+d to exit" << endl;
    string arg1;
    string op;
    string arg2;

    while (true)
    {
        cout << ">> ";
        cin >> arg1;
        // cout << "inputted:" << arg1 << endl;
        if (arg1 == "quit" || arg1 == "q")
        {
            cout << endl
                 << "farvel!" << endl
                 << endl;
            return 0;
        }
        cin >> op;
        cin >> arg2;

        string answer = "";
        if (op == "+")
        {
            answer = add(arg1, arg2);
        }
        else
        {
            answer = multiply(arg1, arg2);
        }
        cout << endl
             << "ans =" << endl
             << endl
             << "    " << answer << endl
             << endl;
    }
}
