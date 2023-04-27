export function TodoItemsComponent({ id, checked, title, toggleTodoList, deleteTodoList }) {
    return (
        <li key={id}>
            <label htmlFor="">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => toggleTodoList(id, e.target.checked)}
                />
                <span>{title}</span>
            </label>
            <button className="btn" onClick={() => deleteTodoList(id)} >삭제하기</button>
        </li>
    )
}