//No copilot here, I'm alone in the cockpit.

import java.util.ArrayList;
import java.util.List;

class Calcul {

    public static Float addition(Float a, Float b) {
        return a + b;
    }
    public static Float sub(Float a, Float b) {
        return a - b;
    }
    public static Float multiply(Float a, Float b) {
        return a * b;
    }
    public static Float divide(Float a, Float b) {
        return a / b;
    } 
    public static void clearScreen() {  
        System.out.print("\033[H\033[2J");  
        System.out.flush();  
    }  

    public static void main(String[] args) {
        clearScreen();
        String str = args[0];
        String add_symbol = "+";
        String sub_symbol = "-";
        String multiply_symbol = "*";
        String divide_symbol = "/";

        List<String> splitted = new ArrayList<String>();

        if (args[0].contains(add_symbol)) {
            String[] numbers = str.split("\\+");
            for (String one : numbers) {
                splitted.add(one);
            }
            System.out.println("\nCalcul: " + splitted.get(0) + " + " + splitted.get(1) + " = " + Calcul.addition(Float.parseFloat(splitted.get(0)), Float.parseFloat(splitted.get(1))) + "\n");
        }
        else if (args[0].contains(sub_symbol)) {
            String[] numbers = str.split("\\-");
            for (String one : numbers) {
                splitted.add(one);
            }
            System.out.println("\nCalcul: " + splitted.get(0) + " - " + splitted.get(1) + " = " + Calcul.sub(Float.parseFloat(splitted.get(0)), Float.parseFloat(splitted.get(1))) + "\n");
        }
        else if (args[0].contains(multiply_symbol)) {
            String[] numbers = str.split("\\*");
            for (String one : numbers) {
                splitted.add(one);
            }
            System.out.println("\nCalcul: " + splitted.get(0) + " * " + splitted.get(1) + " = " + Calcul.multiply(Float.parseFloat(splitted.get(0)), Float.parseFloat(splitted.get(1))) + "\n");
        }
        else if (args[0].contains(divide_symbol)) {
            String[] numbers = str.split("\\/");
            for (String one : numbers) {
                splitted.add(one);
            }
            System.out.println("\nCalcul: " + splitted.get(0) + " / " + splitted.get(1) + " = " + Calcul.divide(Float.parseFloat(splitted.get(0)), Float.parseFloat(splitted.get(1))) + "\n");
        }
        else {
            System.out.println("\nPlease provide the necessary arguments. For example, execute the following command: java Calcul 2+3\n");
        }
    }
}

/*
Ce que j'ai appris de Java :

    1. La précision demandée dans ce language est incroyable, ça nous pousse à toujours être plus précis et strict envers nous-même pour ne pas faire d'erreurs.
    2. Pratiquement tout peut ou doit être typé.
    3. J'ai voulu changer un peu du classique "input/output" où l'utilisateur rentre ses données à calculer en utilisant plutôt des arguments de lancement (String[] args);

*/