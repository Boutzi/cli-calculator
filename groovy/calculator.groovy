//No copilot here, I'm alone in the cockpit.

class Calculator {

   static int add(int a, int b) {
      return a + b;
   }
   static int sub(int a, int b) {
      return a - b;
   }
   static int multiply(int a, int b) {
      return a * b;
   }
   static int divide(int a, int b) {
      return a / b;
   }

   static void main(String[] args) {
      while (true) {
         def menu = ["Addition", "Soustraction", "Multiplication", "Division", "Exit"];
         menu.eachWithIndex{ it, i -> print((i + 1) + ". $it  ") }

         println("\nSelect an option: ");
         def option = System.in.newReader().readLine() as Integer;
         if (option == menu.size()) {
            break
         }
         else if (option < 0 || option > menu.size()) {
            println "Wrong input"
            Calculator.main()
         }
         println("First number: ");
         def first = System.in.newReader().readLine() as Integer;
         println("Second number: ");
         def second = System.in.newReader().readLine() as Integer;
         if (option == 1) {
            def result = Calculator.add(first, second);
            println first + " + " + second + " = " + result + "\n"
         }
         else if (option == 2) {
            def result = Calculator.sub(first, second);
            println first + " - " + second + " = " + result + "\n"
         }
         else if (option == 3) {
            def result = Calculator.multiply(first, second);
            println first + " * " + second + " = " + result + "\n"
         }
         else if (option == 4) {
            def result = Calculator.divide(first, second);
            println first + " / " + second + " = " + result + "\n"
         }
      }
   }
}

/*
Ce que j'ai appris de Groovy :

    1. String[] args dans la fonction main() sert à permettre à l'utilisateur de mettre des arguments dans la console avant de lancer l'application
    2. pour les prints = pas besoin de paranthèses
    3. pareil qu'en C#, on peut utiliser les fonctions "static".
    4. la création de variable est étrange, on définit une liste avec "def", très perturbant quand on est développeur Python
    5. C'est un language très typés, venant d'Apache, ce n'est pas surprenant. Cela évite les erreurs mais du coup qui est assez stricte.

*/