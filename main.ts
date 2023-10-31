#! /usr/bin/env node
import inquirer from "inquirer";

let todo: string[] = [];
let completed: string[] = [];
let loop = true;

async function main() {
    while (loop) {
        const todos = await inquirer.prompt([{
            type: "list",
            name: "input",
            message: "Select an option",
            choices: ["Add Task", "Mark as done", "Quit"],
        }])

        if (todos.input == "Quit") {
            console.log(`Good Bye`);
            break;
        }

        if (todos.input == "Add Task") {

            const task = await inquirer.prompt([{
                type: "input",
                name: "AddTask",
                message: "Enter the task you want to add",
            }])
            todo.push(task.AddTask)
            console.log(`Task added:`, task.AddTask);

            const addmore = await inquirer.prompt([{
                type: "list",
                name: "Addmore",
                message: "would you like to add more tasks?",
                choices: ["yes", "No"],

            }])
            if (addmore.Addmore == "No") {
                break;
            }
        }
        if (todos.input == "Mark as done")
            if (todo.length === 0) {
                console.log("No tasks to mark as done now.");
            }

            else {
                const markDone = await inquirer.prompt([{
                    type: "input",
                    name: "done",
                    message: "which task you want to mark as done?",
                    choices: todo
                }])

                const taskToMark = markDone.done;
                const index = todo.indexOf(taskToMark);
                if (index !== -1) {
                    todo.splice(index, 1);
                    completed.push(taskToMark);
                    console.log("Task marked as done:", taskToMark);
                } else {
                    console.log("Task not found.");
                }
            }
    }
    console.log('Todo List:', todo);
    console.log('Completed Tasks:', completed);
}


main()