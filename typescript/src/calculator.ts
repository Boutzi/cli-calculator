//No copilot here, I'm alone in the cockpit.
import * as readline from 'readline'

type Operation = 'add' | 'substract' | 'multiply' | 'divide' | 'modulo'

class CalculatorClass {
    calculate(numberA: number, numberB: number , operation: string){
        switch(operation){
            case 'add':
                return numberA + numberB;
            case 'substract':
                return numberA - numberB;
            case 'multiply':
                return numberA * numberB;
            case 'divide':
                if (numberB === 0) throw new Error("Invalid operation");
                return numberA / numberB
            case 'modulo':
                return numberA % numberB;
            default:
                throw new Error("Invalid operation")
        }
    }
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const prompt = () => {
    reader.question("Type 'exit' or something else to continue: ", (inputExit) => {
        if (inputExit.toLocaleLowerCase() === 'exit'){
            return reader.close();
        }
        reader.question('Enter the first number: ', (inputNumberA) => {
            const numberA = parseFloat(inputNumberA);
            reader.question('Enter the second number: ' , (inputNumberB) => {
                const numberB = parseFloat(inputNumberB);

                reader.question("Enter the operation 'add' 'substract' 'multiply' 'divide' 'modulo': ", (inputOperation) => {
                    try {
                        const calculatorObject = new CalculatorClass();
                        const result = calculatorObject.calculate(numberA, numberB, inputOperation);
                        console.log(`Result: ${result}`)
                    } catch(error){
                        console.error(`Error: ${(error as Error).message}`)
                    }
                    
                    console.log("\n")
                    prompt();
                });
            });
        });
    });
}

prompt();