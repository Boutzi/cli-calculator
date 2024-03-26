//No copilot here, I'm alone in the cockpit.

namespace calculator_cs
{
    class Program
    {
        static int add(int a, int b)
        {
            return a + b;
        }
        static int sub(int a, int b)
        {
            return a - b;
        }
        static int multiply(int a, int b)
        {
            return a * b;
        }
        static int divide(int a, int b)
        {
            return a / b;
        }

        static void Main()
        {
            while (true) 
            {
                string[] menu = {"Addition", "Substraction", "Multiplication", "Division", "Exit"};
                int option = 0;
                int result = 0;
                int first = 0;
                int second = 0;
                int i = 0;

                for (i = 0; i < 5 ; i++) {
                    Console.Write($"{i + 1}. {menu[i]}  ");
                }
                Console.WriteLine("\nSelect an option: ");
                option = Convert.ToInt32(Console.ReadLine());
                if (option < 0 || option > menu.Length)
                {
                    Console.WriteLine("Invalid input");
                    Main();
                }
                else if (option == menu.Length)
                {
                    return;
                }
                Console.WriteLine("First Number: ");
                first = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Second Number: ");
                second = Convert.ToInt32(Console.ReadLine());

                if (option == 1)
                {
                    result = Program.add(first, second);
                    Console.WriteLine($"{first} + {second} = {result}");
                }
                else if (option == 2)
                {
                    result = Program.sub(first, second);
                    Console.WriteLine($"{first} - {second} = {result}");
                }
                else if (option == 3)
                {
                    result = Program.multiply(first, second);
                    Console.WriteLine($"{first} * {second} = {result}");
                }
                else if (option == 4)
                {
                    result = Program.divide(first, second);
                    Console.WriteLine($"{first} / {second} = {result}");
                }
            }
        }
    }
}
/*
Ce que j'ai appris de C# :

    1. la préparation du "projet" est fastidieuse par rapport à C/C++
    2. la syntaxe main (Hello World) est longue
    3. namespace = je n'ai pas bien compris sont utilité, mais en gros il englobe tout un set d'objets, organise le code
    4. les input d'integer doivent être converties avec "Convert.ToInt32" ou "Convert.ToInt64" (par exemple)
    5. static = permet d'associer la méthode à la Classe plutôt qu'à une instance (objet) de la classe. 
        5.a. Elles peuvent être appelée directement sur la classe sans avoir besoin d'instancier un objet de cette classe.
        5.b. Ces méthodes peuvent être appelées n'importe où dans le programme sans avoir besoin de créer un objet de la classe.
*/
