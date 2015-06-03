goog.provide("todo.TodoItemController");
goog.require("todo.TodoItem");
goog.require("todo.TodoItemView");
/**
 * @implements {todo.TodoItemView.Delegate}
 *
 * @param {HTMLUListElement} list
 * @param {todo.TodoItem} item
 * @constructor
 */
todo.TodoItemController = function(list,item){

    /**
     * @type {todo.TodoItemView}
     */
    this.view = new todo.TodoItemView(list,item, this);
    this.view.render();
    /**
     * @type {todo.TodoItem}
     */
    this.todo = item;

};
/**
 * @inheritDoc
 */
todo.TodoItemController.prototype.onDelete = function(){

    if(confirm("Are you sure?")){
        this.view.destroy();
    }
};

/**
 * @inheritDoc
 */
todo.TodoItemController.prototype.onDone = function(){

    this.todo.done = true;
    this.view.render();

};