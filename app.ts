#! /usr/bin/env node

          ///////////////////// "The Starting Coding" /////////////////////

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bgGreen.white.bold.underline(
    `\n\t\t\t\t\t*Welcome To Object Oriented Programming*\n`
  )
);
class Person {
  // // Properties
  // name: string;
  // age: number;
  // education1: string;
  // program: string;
  // education2: string;
  // giaic: string;
  // future: string;

  // Constructor
  constructor(
    public name: string,
    public age: number,
    public education1: string,
    public program: string,
    public education2: string,
    public giaic: string,
    public future: string
  ) {
    this.name = name;
    this.age = age;
    this.education1 = education1;
    this.program = program;
    this.education2 = education2;
    this.giaic = giaic;
    this.future = future;
  }

  // Method
  sayHello() {
    console.log(
      chalk.bgRed.white.bold.underline(
        `\nHello, my name is ${this.name} and I am ${this.age} years old.`
      )
    );
    console.log(
      chalk.bgGreen.white.bold.underline(
        `\nMy education is ${this.education1} and currently I am studying IT programs from ${this.program}.`
      )
    );
    console.log(
      chalk.bgRed.white.bold.underline(
        `\nDo you like education at Gov. House Sindh faculty? ${this.education2}.`
      )
    );
    console.log(
      chalk.bgGreen.white.bold.underline(
        `\nAre you pleased with the Governor IT programs at GIAIC? ${this.giaic}.`
      )
    );
    console.log(
      chalk.bgRed.white.bold.underline(
        `\nWhat do you want to do in future? ${this.future}.`
      )
    );
  }
}

async function OOP() {
  let answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: chalk.bgWhite.red.bold.underline(`What's is Your Name : `),
    },
    {
      type: "input",
      name: "age",
      message: chalk.bgRed.white.bold.underline(`How Old Are You : `),
    },
    {
      type: "input",
      name: "education",
      message: chalk.bgGreen.white.bold.underline(
        `What Education Do You Have : `
      ),
    },
    {
      type: "input",
      name: "program",
      message: chalk.bgRed.white.bold.underline(
        `Where Are You Now Studying For IT Programs : `
      ),
    },
    {
      name: "education2",
      type: "input",
      message: chalk.bgGreen.white.bold.underline(
        `Do You Like Education Governor House Sindh Faculty ? , Answer Yes and No ?`
      ),
    },
    {
      name: "giaic",
      type: "input",
      message: chalk.bgRed.white.bold.underline(
        "Are You Pleased With The IT Programs at GIAIC ? Answer Yes and No ?"
      ),
    },
    {
      type: "input",
      name: "future",
      message: chalk.bgGreen.white.bold.underline(
        `What Do You Wish to do in the future ? , Write a Small Sentence : `
      ),
    },
  ]);

  const { name, age, education1, program, education2, giaic, future } = answers;
  const person = new Person(
    name,
    age,
    education1,
    program,
    education2,
    giaic,
    future
  );
  person.sayHello();
  console.log(
    chalk.bgGreen.white.bold.underline(
      "\nMay Allah bless you and your family always, and best wishes for the future.\nGood luck to you."
    )
  );
}

OOP();
          
             /////////////////////// "The Ending Coding" ///////////////////