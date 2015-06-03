goog.provide("todo.NewTodoItemController");

goog.require("todo.TodoItem");
goog.require("todo.TodoItemController");
goog.require("todo.NewTodoForm");
/**
 *
 * @param {HTMLUListElement} list
 * @param {HTMLFormElement} form
 * @constructor
 * @implements {todo.NewTodoForm.Delegate}
 */
todo.NewTodoItemController = function(list, form){

    /**
     *
     * @type {HTMLUListElement}
     */
    this.list = list;

    /**
     *
     * @type {todo.NewTodoForm}
     */
    this.view = new todo.NewTodoForm(form,this);

};
/**
 *
 * @inheritDoc
 */
todo.NewTodoItemController.prototype.onCreate = function(title){

    /**
     *
     * @type {todo.TodoItem}
     */
    var todoItem = {
        title : title,
        done : false
    };
    new todo.TodoItemController(this.list,todoItem);
};
