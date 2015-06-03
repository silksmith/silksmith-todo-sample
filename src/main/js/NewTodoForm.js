goog.provide("todo.NewTodoForm");

/**
 *
 * @param {HTMLFormElement} form
 * @param {todo.NewTodoForm.Delegate} delegate
 * @constructor
 */
todo.NewTodoForm = function (form, delegate) {


    /**
     *
     * @type {jQuery}
     */
    var $form = $(form);
    /**
     *
     * @param {jQuery.Event} event
     */
    var submitHandler = function (event) {

        event.preventDefault();
        /**
         * @type {string}
         */
        var title = /** @type {string} */($form.find("[name=title]").val());
        delegate.onCreate(title);
        form.reset();
    };
    $form.submit(submitHandler);

};
/**
 *
 * @interface
 */
todo.NewTodoForm.Delegate = function () {
};
/**
 * @param {!string} title
 */
todo.NewTodoForm.Delegate.prototype.onCreate = function (title) {
};
