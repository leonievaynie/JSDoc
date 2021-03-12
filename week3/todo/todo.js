
import { ObservableList }           from "../observable/observable.js";
import { Attribute, VALID, VALUE }  from "../presentationModel/presentationModel.js";
import { todoItemProjector }        from "./todoProjector.js";
import { Scheduler }                from "../dataflow/dataflow.js";
import { fortuneService }           from "./fortuneService.js";

/**
 *  
 * jskdjskjfh
 * @module TodoController
 * @module TodoItemsView
 *
 */
export { TodoController, TodoItemsView, TodoTotalView, TodoOpenView}

const TodoController = () => {

    /**
     * Represents the model of our application.
     * @returns {{onTextChanged: onChange, getDone: getValue, getText: getValue, onTextEditableChanged: onChange, onTextValidChanged: onChange, setDone: setValue, onDoneChanged: onChange, setText: (function(*=): undefined)}}
     * @constructor
     */
    const Todo = () => {                               // facade
        const textAttr = Attribute("text");
        const doneAttr = Attribute(false);

        textAttr.setConverter( input => input.toUpperCase() );
        textAttr.setValidator( input => input.length >= 3   );

        // business rules / constraints (the text is only editable if not done)
        doneAttr.getObs(VALUE).onChange( isDone => textAttr.getObs("EDITABLE",!isDone).setValue(!isDone));

        return {
            getDone:            doneAttr.getObs(VALUE).getValue,
            setDone:            doneAttr.getObs(VALUE).setValue,
            onDoneChanged:      doneAttr.getObs(VALUE).onChange,
            getText:            textAttr.getObs(VALUE).getValue,
            setText:            textAttr.setConvertedValue,
            onTextChanged:      textAttr.getObs(VALUE).onChange,
            onTextValidChanged: textAttr.getObs(VALID).onChange,
            onTextEditableChanged: textAttr.getObs("EDITABLE").onChange,
        }
    };

    const todoModel = ObservableList([]); // observable array of Todos, this state is private
    const scheduler = Scheduler();

    /**
     *
     * @returns {{onTextChanged, getDone: getValue, getText, onTextEditableChanged, onTextValidChanged, setDone: setValue, onDoneChanged: onChange, setText}}
     */
    const addTodo = () => {
        const newTodo = Todo();
        todoModel.add(newTodo);
        return newTodo;
    };

    const addFortuneTodo = () => {
        const newTodo = Todo();
        todoModel.add(newTodo);
        newTodo.setText('...');
        scheduler.add( ok =>
           fortuneService( text => {
                   newTodo.setText(text);
                   ok();
               }
           )
        );
    };

    return {
        numberOfTodos:      todoModel.count,
        numberOfopenTasks:  () => todoModel.countIf( todo => ! todo.getDone() ),
        addTodo:            addTodo,
        addFortuneTodo:     addFortuneTodo,
        removeTodo:         todoModel.del,
        onTodoAdd:          todoModel.onAdd,
        onTodoRemove:       todoModel.onDel,
        removeTodoRemoveListener: todoModel.removeDeleteListener, // only for the test case, not used below
    }
};


// View-specific parts

// immer erzeugen einer view und dann binden sie sich
/**
 * Platz für eigene Beschreibung
 * @param todoController
 * @param rootElement
 * @constructor
 */
const TodoItemsView = (todoController, rootElement) => {

    //callback
    const render = todo =>
        todoItemProjector(todoController, rootElement, todo); //mer als das muss ich nicht wissen

    // binding

    todoController.onTodoAdd(render); //sobald neues todowill ich noti

    // we do not expose anything as the view is totally passive.
};

const TodoTotalView = (todoController, numberOfTasksElement) => {

    const render = () =>
        numberOfTasksElement.innerText = "" + todoController.numberOfTodos();

    // binding

    todoController.onTodoAdd(render);
    todoController.onTodoRemove(render);
};

const TodoOpenView = (todoController, numberOfOpenTasksElement) => {

    const render = () =>
        numberOfOpenTasksElement.innerText = "" + todoController.numberOfopenTasks();

    // binding

    todoController.onTodoAdd(todo => {
        render();
        todo.onDoneChanged(render);
    });
    todoController.onTodoRemove(render);
};
