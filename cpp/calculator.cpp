// No copilot here, I'm alone in the cockpit.
#include <iostream>  
using namespace std; 

int add(int a, int b) {
    return a + b;
};

int sub(int a, int b) {
    return a - b;
};

int multiply(int a, int b) {
    return a * b;
};

int divide(int a, int b) {
    return a / b;
};


int main() {
    while(true) {
        char* menu[] = {"Addition", "Substraction", "Multiplication", "Division", "Exit"};
        int option = 0;
        int result = 0;
        int first = 0;
        int second = 0;
        int i = 0;

        cout << "Select an option:" << endl;
        for (i = 0; i < 5; i++) {
            cout << (i + 1) << ". " << menu[i] << "  ";
        };
        cout << endl;
        cin >> option;
        if (option == size(menu)) {
            return 0;
        }
        else if (option < 1 || option > size(menu)) {
            cout << "Invalid input" << endl;
            main();
        };
        cout << "Your first number: " << endl;
        cin >> first;
        cout << "Your second number: " << endl;
        cin >> second;

        if (option == 1) {
            result = add(first, second);
            cout << first << " + " << second << " = " << result << endl;
        }
        else if (option == 2) {
            result = sub(first, second);
            cout << first << " - " << second << " = " << result << endl;
        }
        else if (option == 3) {
            result = multiply(first, second);
            cout << first << " * " << second << " = " << result << endl;
        }
        else if (option == 4) {
            result = divide(first, second);
            cout << first << " / " << second << " = " << result << endl;
        }
        else {
            cout << "Invalid input" << endl;
        };
    };
};

/*
Ce que j'ai appris de C++ :

    1. #include <iostream> = permet d'importer les fonctions d'input/output
    2. "using namespace std" = nous permet d'écrire nimporte quel élément défini dans la bibliothèque standard de C++ sans le préfixe "std::" (ex. std::cout << "hello" << std::end1;)
    3. Contrairement à C, ici les booleens sont bien "true et "false"
    4. "endl" = nous permet de terminer la ligne comme "\n" mais nous permet également de flush les entrées utilisateur pour éviter les erreurs de frappe
    5. size() = est une fonction qui permet de déterminer la longueur d'un tableau (beaucoup plus rapide que la méthode sizeof en C)
    6. Pour compiler mon fichier .cpp, j'utilise la commande : g++ .\calculator.cpp ou g++ .\calculator.cpp -o nom_de_lexecutable (pour définir le nom du programme)
        6.a. J'execute ensuite mon programme avec la commande : .\a.exe ("a" étant le nom de base du programme s'il n'a pas été défini)

*/








