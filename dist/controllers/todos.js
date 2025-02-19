"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_1 = require("../models/todo");
class TodoController {
    constructor() {
        this.todos = [];
        this.createTodo = (req, res) => {
            try {
                const task = req.body.task;
                const newTodo = new todo_1.Todo(Math.random().toString(), task);
                this.todos.push(newTodo);
                res.status(201).json({
                    message: 'Create new todo',
                    createdTask: newTodo
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.getTodos = (req, res) => {
            try {
                res.status(201).json({
                    tasks: this.todos
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.updateTodo = (req, res) => {
            try {
                const todoId = req.params.id;
                const updatedTask = req.body.task;
                const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
                if (todoIndex < 0) {
                    throw new Error('Could not find todo with such id');
                }
                this.todos[todoIndex] = new todo_1.Todo(this.todos[todoIndex].id, updatedTask);
                res.status(201).json({
                    message: 'todo is updated',
                    updatedTask: this.todos[todoIndex]
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.deleteTodo = (req, res) => {
            try {
                const todoId = req.params.id;
                const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
                if (todoIndex < 0) {
                    throw new Error('Could not find todo with such id');
                }
                this.todos.splice(todoIndex, 1);
                res.status(201).json({
                    message: 'todo is deleted'
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        this.createTodo = this.createTodo.bind(this);
        this.getTodos = this.getTodos.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
}
exports.TodoController = TodoController;
