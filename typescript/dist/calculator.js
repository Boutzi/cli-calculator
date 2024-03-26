"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//No copilot here, I'm alone in the cockpit.
const readline = __importStar(require("readline"));
class CalculatorClass {
    calculate(numberA, numberB, operation) {
        switch (operation) {
            case 'add':
                return numberA + numberB;
            case 'substract':
                return numberA - numberB;
            case 'multiply':
                return numberA * numberB;
            case 'divide':
                if (numberB === 0)
                    throw new Error("Invalid operation");
                return numberA / numberB;
            case 'modulo':
                return numberA % numberB;
            default:
                throw new Error("Invalid operation");
        }
    }
}
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const prompt = () => {
    reader.question("Type 'exit' or something else to continue: ", (inputExit) => {
        if (inputExit.toLocaleLowerCase() === 'exit') {
            return reader.close();
        }
        reader.question('Enter the first number: ', (inputNumberA) => {
            const numberA = parseFloat(inputNumberA);
            reader.question('Enter the second number: ', (inputNumberB) => {
                const numberB = parseFloat(inputNumberB);
                reader.question("Enter the operation 'add' 'substract' 'multiply' 'divide' 'modulo': ", (inputOperation) => {
                    try {
                        const calculatorObject = new CalculatorClass();
                        const result = calculatorObject.calculate(numberA, numberB, inputOperation);
                        console.log(`Result: ${result}`);
                    }
                    catch (error) {
                        console.error(`Error: ${error.message}`);
                    }
                    console.log("\n");
                    prompt();
                });
            });
        });
    });
};
prompt();
