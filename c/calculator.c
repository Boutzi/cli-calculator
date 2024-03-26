// No copilot here, I'm alone in the cockpit.
#include<stdio.h>  

int add(a, b) {
    return a + b;
};

int substract(a, b) {
    return a - b;
};

int multiply(a, b) {
    return a * b;
};

int divide(a, b) {
    return a / b;
};

int main() {
    int option = 0;
    int i = 0;
    char* menu[] = {"Addition", "Substraction", "Multiplication", "Division", "Exit"};
    double first;
    double second;
    double result;
    int menu_length = sizeof(menu) / sizeof(menu[0]);

    while(1) {

        for (i = 0, menu[0]; i < 5 ; i++) {
            printf("%d. %s  ", i + 1, menu[i]);
        };
        printf("\nSelect an option: ");
        scanf("%d",&option);
        if (option == menu_length) {
            return 0;
        }
        else if (option < 0 || option > menu_length) {
            printf("Invalid input !");
            main();
        };
        printf("Your first number: ");
        scanf("%ld",&first);
        printf("Your second number: ");
        scanf("%ld",&second);

        

        if (option == 1) {
            int result = add(first, second);
            printf("Result : %f + %f = %f\n", first, second, result);
        }
        else if (option == 2) {
            int result = substract(first, second);
            printf("Result : %d - %d = %d\n", first, second, result);
        }
        else if (option == 3) {
            int result = multiply(first, second);
            printf("Result : %d * %d = %d\n", first, second, result);
        }
        else if (option == 4) {
            int result = divide(first, second);
            printf("Result : %5.2f / %5.2f = %5.2f\n", first, second, result);
        }
        else {
            printf("Wrong input !\n");
        };
    };
}
/*
Ce que j'ai appris de C :

    1. #include<stdio.h>  = permet d'importer les fonctions d'input/output
    2. un programme en C doit être dans la fonction main() pour fonctionner (equiv python (qui lui, n'est pas obligatoire): if __name__ = "__main__":)
    3. true/false est remplacé par 1 ou 0;
    4. faire un tableau se fait à l'aide d'un pointeur: char* menu[] =
    5. Pour déterminer la longueur d'un tableau en C, il faut effectuer le calcul avec "sizeof(TABLEAU) / sizeof(TABLEAU[0]"
        5.a. sizeof(TABLEAU) détermine le poids en octet (8) du tableau
        5.b. sizeof(TABLEAU[0]) détermine le poids en octet du premier élément du tableau
        5.c. sizeof(TABLEAU) / sizeof(TABLEAU[0] divise donc le poids total du tableau par le poids d'un seul élément, on obtient donc le nombre d'éléments.
    6. pour compiler mon fichier .c, j'utilise la commande : gcc .\calculator.c ou gcc .\calculator.c -o nom_de_lexecutable (pour définir le nom du programme)
        6.a. J'execute ensuite mon programme avec la commande : .\a.exe ("a" étant le nom de base du programme s'il n'a pas été défini)
*/
