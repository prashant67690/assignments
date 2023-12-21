/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }
  add(todo) {
    this.todo.push(todo);
  }
  remove(indexOfTodo) {
    let ans = [];
    for (let i = 0; i < this.todo.length; i++) {
      if (i != indexOfTodo) {
        ans.push(this.todo[i]);
      }
    }
    this.todo = ans;
    return this.todo;
  }
  update(index, updatedTodo) {
    for (let i = 0; i < this.todo.length; i++) {
      if (i == index) {
        this.todo[i] = updatedTodo;
      }
    }
  }
  getAll() {
    return this.todo;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todo.length) {
      return null;
    }
    return this.todo[indexOfTodo];
  }
  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
