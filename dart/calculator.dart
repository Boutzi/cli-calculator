// No copilot here, I'm alone in the cockpit.
import 'dart:io';

var menu = ["Addition", "Substraction", "Multiplication", "Division", "Exit"];
int option = 0;
int result = 0;
int first = 0;
int second = 0;
int i = 0;
int running = 0;

int add(a, b) {
    return a + b;
}
int sub(a, b) {
    return a - b;
}
int multiply(a, b) {
    return a * b;
}
int divide(a, b) {
    return a ~/ b;
}

void main() {
    while (running == 0) {
        print("Select an option: ");
        for (i = 0; i < 5; i++) {
            stdout.write("${i + 1}. ${menu[i]}  ");
        }
        option = int.parse(stdin.readLineSync()!);

        if (option == menu.length) {
            running = 1;
            break;
        }
        else if (option < 0 || option > menu.length) {
            print("Invalid input !");
            main();
        }
        print("First number: ");
        first = int.parse(stdin.readLineSync()!);
        print("Second number: ");
        second = int.parse(stdin.readLineSync()!);
        if (option == 1) {
            result = add(first, second);
            print("${first} + ${second} = ${result}");
        }
        else if (option == 2) {
            result = sub(first, second);
            print("${first} - ${second} = ${result}");
        }
        else if (option == 3) {
            result = multiply(first, second);
            print("${first} * ${second} = ${result}");
        }
        else if (option == 4) {
            result = divide(first, second);
            print("${first} / ${second} = ${result}");
        }
    }
    
}


/*
Ce que j'ai appris de Dart :

    1. import 'dart:io'; = cette lib permet d'importer dans ce code des fonctions dérivée d'output "stdin.readLineSync()"
    2. void = définit des fonctions non-typées qui n'ont pas de paramètres, donc ne retournent rien
    3. J'ai du faire un "état" "running" car je n'ai pas su faire true/false dans ma while loop

*/
