import os

option = 0
menu = ["Add", "Substract", "Multiply", "Divide", "Exit"]
first = 0
second = 0

def add(a, b):
    return a + b

def substract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide (a, b):
    return a / b

if __name__ == "__main__":
    while option != len(menu) + 1:
        os.system("cls")
        if second == 0:
            pass
        elif option == 1:
            print(f"{first} + {second} = {add(first, second)}\n")
        elif option == 2:
            print(f"{first} - {second} = {substract(first, second)}\n")
        elif option == 3:
            print(f"{first} * {second} = {multiply(first, second)}\n")
        elif option == 4:
            print(f"{first} / {second} = {divide(first, second)}\n")
        else:
            print("Invalid option")
        for i, e in enumerate(menu):
            print(f"{(i + 1)}. {e}", end="  ")

        option = int(input("\nSelect an option:\n"))
        first = int(input("Select a 1st number:\n"))
        match option:
            case 1:
                second = int(input(f"Select a 2nd one: \n{first} + "))
            case 2:
                second = int(input(f"Select a 2nd one: \n{first} - "))
            case 3:
                second = int(input(f"Select a 2nd one: \n{first} * "))
            case 4:
                second = int(input(f"Select a 2nd one: \n{first} / "))
            case _:
                second = 0

        if option == len(menu) + 1:
            print("Bye!")
        elif option == 1:
            print(f"{first} + {second} = {add(first, second)}")
        elif option == 2:
            print(f"{first} - {second} = {substract(first, second)}")
        elif option == 3:
            print(f"{first} * {second} = {multiply(first, second)}")
        elif option == 4:
            print(f"{first} / {second} = {divide(first, second)}")
        else:
            print("Invalid option")