import { useState } from "react"

export function FormLayerComponent({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function onClickSubmit(e) {
        e.preventDefault()

        if (newItem === null || "") return
        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <div onSubmit={onClickSubmit} className="formLayout">
            <form className="newItemForm">
                <label htmlFor="item">Input text</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text" id="item" />
            </form>
            <button className="btn">추가</button>
        </div>
    )
}