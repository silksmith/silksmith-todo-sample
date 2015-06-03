goog.provide("todo.TodoItemView");
goog.provide("todo.TodoItemView.Delegate");
goog.require("todo.TodoItem");
/**
 * @param {HTMLUListElement} list
 * @param {todo.TodoItem} item
 * @param {todo.TodoItemView.Delegate} delegate
 *
 * @constructor
 */
todo.TodoItemView = function (list, item, delegate) {

    /**
     *
     * @type {todo.TodoItem}
     */
    this.item = item;
    /**
     * @type {jQuery}
     */
    this.$element;
    /**
     * @type {jQuery}
     */
    this.$title;
    /**
     *
     * @type {HTMLUListElement}
     */
    this.list = list;
    /**
     *
     * @type {todo.TodoItemView.Delegate}
     */
    this.delegate = delegate;
};
/**
 * @const
 * @type {string}
 */
todo.TodoItemView.TEMPLATE = '<li class="list-group-item">' +
  '<div class="row">' +
  '<span class="js-title col-xs-9"></span>' +
  '<div class="col-xs-3">' +
  '<button class="js-done btn btn-success btn-xs"><span class="glyphicon glyphicon-ok"></span></button>' +
  '<button class="js-delete btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>' +
  '</div></div>' +
  '</li>';
/**
 * @private
 */
todo.TodoItemView.prototype.init = function () {
    if (!this.$element) {

        this.$element = $(todo.TodoItemView.TEMPLATE).appendTo(this.list);
        this.$title = this.$element.find(".js-title");

        this.$element.on("click", ".js-delete", this.delegate.onDelete.bind(this.delegate));//onDelete needs to be bound otherwise function looses the "this" context
        this.$element.on("click", ".js-done", this.delegate.onDone.bind(this.delegate));

    }
};
/**
 *
 */
todo.TodoItemView.prototype.render = function () {
    this.init();
    this.$title.text(this.item.title);
    this.$title.toggleClass("done", this.item.done);

    this.$element.find(".js-done").prop("disabled", this.item.done);
};
/**
 *
 */
todo.TodoItemView.prototype.destroy = function () {
    this.$element.off("click");
    this.$element.remove();
};
/**
 *
 * @interface
 */
todo.TodoItemView.Delegate = function () {
};

todo.TodoItemView.Delegate.prototype.onDelete = function () {
};
todo.TodoItemView.Delegate.prototype.onDone = function () {
};