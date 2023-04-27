import { TodoItemsComponent } from "./TodoItemsComponent";

export function TodoListComponent({ todoList, toggleTodoList, deleteTodoList }) {

    console.log("[ TodoListComponent ]:", todoList);
    return (
        <div className="todoLayout">
            <div>TODO List</div>
            <ul className="todoList">
                {todoList.length === 0 && "리스트가 없습니다"}
                {todoList.map(todo => {
                    console.log("[todo] : ", todo);
                    return (
                        <TodoItemsComponent
                            {...todo}
                            key={todo.id}
                            toggleTodoList={toggleTodoList}
                            deleteTodoList={deleteTodoList}
                        />
                    )
                })}
            </ul>
        </div>

    )
}