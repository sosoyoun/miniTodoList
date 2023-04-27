import { TodoItemsComponent } from "./TodoItemsComponent";

export function TodoListComponent({ todoList, toggleTodoList, deleteTodoList }) {

    console.log("[ TodoListComponent ]:", todoList);
    return (
        <div className="todoLayout">
            <ul className="todoList">
                <span>{todoList.length === 0 && "오늘의 할일을 추가해주세요"}</span>
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