#Simple Todo App with silksmith


##Run
###Dev Server [http://localhost:10101](http://localhost:10101)
```
./gradlew server
```
###Test Server in watch mode(firefox required)
```
./gradlew testJS -Pwatch
```
###Put it all together (custom task)
```
./gradlew putEverythingTogether
```

##JS Overview (src/main/js)

- ```TodoItem.js``` Defines the data structure TodoItem objects
- ```ItemView.js``` renders a todo object and listens for click events on the done/delete
- ```TodoItemController.js``` handles callbacks from the ItemView and updates the Todo Item
- ```NewTodoForm.js``` listens on submit events in the form, resets the form
- ```NewTodoItemController.js``` handles callback from the NewTodoForm and creates new Todo items
- ```init.js``` Glues the initial components together, the entry point of the application





