goog.require("todo.NewTodoItemController")

describe("todo.NewTodoItemController", function () {

    var expect = chai.expect;

    var sut;

    var list;
    var form;
    beforeEach(function () {

        list = $("<ul>")[0];
        form = $("<form>")[0];



    });
    describe("onCreate", function () {
        it("it should create", function () {

            var spy = sinon.spy(todo, "TodoItemController");

            sut = new todo.NewTodoItemController(list, form);

            sut.onCreate("Do something!");


            expect(spy).to.have.been
              .calledOnce
              .and
              .calledWithNew
              .and
              .calledWith(list,{title: "Do something!", done:false});


            spy.restore();


        });
    });

});