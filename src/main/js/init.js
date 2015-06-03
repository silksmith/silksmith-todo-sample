goog.provide("todo.init");


goog.require("todo.NewTodoItemController");
goog.require("todo.TodoItemController");
goog.require("todo.TodoItem");


jQuery(function ($) {

    /**
     *
     * @type {HTMLUListElement}
     */
    var list = /** @type {HTMLUListElement} */ (document.getElementById("todoList"));

    /**
     *
     * @type {HTMLFormElement}
     */
    var form = /**@type {HTMLFormElement} **/ (document.getElementById("newTodoForm"));


    new todo.NewTodoItemController(list, form);


    //setup some demo todos
    /**
     *
     * @type {Array.<todo.TodoItem>}
     */
    var demoTodos = [
        {title: "Run silksmith todo demo", done: true},
        {title: "Extend demo code", done: false}
    ];

    demoTodos.forEach(function (item) {

        new todo.TodoItemController(list, item);

    });

});

