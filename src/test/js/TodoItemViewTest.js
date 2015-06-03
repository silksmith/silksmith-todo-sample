goog.require("todo.TodoItemView");


describe("todo.TodoItemView", function () {

    var expect = chai.expect;

    var delegate;
    var item;

    var list;
    var view;
    beforeEach(function (done) {

        delegate = sinon.createStubInstance(todo.TodoItemView.Delegate);
        item = {
            done: false,
            title: "Do foo!"
        };
        list = $("<ul>")[0];

        view = new todo.TodoItemView(list, item, delegate);
        done();
    });
    describe("render", function () {
        it("should append a li item with the given title and two buttons", function () {

            view.render();
            var $list = $(list);
            expect($list).to.have.descendants("li");
            expect($list.find(".js-title")).to.have.text("Do foo!");
            expect($list.find("button.js-done")).to.exist;
            expect($list.find("button.js-delete")).to.exist;
        });
    });
    describe("click", function () {

        beforeEach(function(){
            view.render();
        });

        it("should call the delegate.onDelete if delete button is clicked", function () {

            $(list).find("li button.js-delete").click();
            expect(delegate.onDelete).to.be.calledOnce;
        });
        it("should call the delegate.onDone if done button is clicked", function () {

            $(list).find("li button.js-done").click();
            expect(delegate.onDone).to.be.calledOnce;
        });
    });
});