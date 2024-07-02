#! usr/bin/env node

import inquirer from "inquirer";

const currencies: any = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 74.57,
    PKR: 280,
    RUB: 60
};

let userInput = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message: "Enter Amount: "
    },
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "RUB"],
        message: "From: "
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "RUB"],
        message: "To: "
    }
]);

let fromAmount : number = currencies[userInput.from];
let toAmount = currencies[userInput.to];
let totalAmount = userInput.amount;
let baseAmount = totalAmount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
