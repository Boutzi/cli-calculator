// No copilot here, I'm alone in the cockpit.

package main

import "fmt"

var option, result, first, second int = 0, 0, 0, 0

func add(a, b int) int {
	return (a + b)
}

func sub(a, b int) int {
	return (a - b)
}

func multiply(a, b int) int {
	return (a * b)
}

func divide(a, b int) int {
	return (a / b)
}

func main() {
	for true {
		menu := [5]string{"Addition", "Substraction", "Multiplication", "Division", "Exit"}
		fmt.Println("\nSelect an option: ")
		for i := 0; i < 5; i++ {
			fmt.Print((i + 1), ". ", menu[i], "  ")
		}
		fmt.Println("")
		fmt.Scan(&option)
		if option == len(menu) {
			break
		} else if option < 1 || option > len(menu) {
			fmt.Println("Invalid Input !")
			main()
		}
		fmt.Println("First number: ")
		fmt.Scan(&first)
		fmt.Println("Second number: ")
		fmt.Scan(&second)
		if option == 1 {
			result = add(first, second)
			fmt.Println(first, "+", second, "=", result)
		} else if option == 2 {
			result = sub(first, second)
			fmt.Println(first, "-", second, "=", result)
		} else if option == 3 {
			result = multiply(first, second)
			fmt.Println(first, "*", second, "=", result)
		} else if option == 4 {
			result = divide(first, second)
			fmt.Println(first, "/", second, "=", result)
		}
	}
}

/*
Ce que j'ai appris de Go :

    1. import "fmt" = permet d'importer les fonctions d'input/output
    2. package main = permet de rendre mon fichier exécutable grâce à la fonction main()
    3. les déclarations de types sont bizarrement inversés par rapport à d'autres languages
    4. La concaténation de variables et strings dans un print est très simple et rapide à écrire
    5. la boucle "while" n'existe pas, on utilise la boucle "for" à la place...
    6. La déclaration de tableau est très étrange aussi (my_array := [3]string{"","",""}

*/
