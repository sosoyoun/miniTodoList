export function TodoItemsComponent({ id, checked, title, toggleTodoList, deleteTodoList }) {
    console.log("[TodoItemsComponent] :", id, checked, title);

    return (
        <li>
            <label htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={e => toggleTodoList(id, e.target.checked)}
                />
                <label htmlFor={id}>{title}</label>
            </label>
            <button className="btn" onClick={() => deleteTodoList(id)} ></button>
        </li>
    )
}