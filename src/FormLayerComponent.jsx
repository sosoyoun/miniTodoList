import { useState } from "react"

export function FormLayerComponent({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function onClickSubmit(e) {
        e.preventDefault()

        if (newItem === "") return
        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <div onSubmit={onClickSubmit} className="formLayout">
            <form className="newItemForm">
                <label htmlFor="item">
                    좋은 하루!
                    <span>오늘은 뭐할꺼야?</span>
                </label>
                <input
                    value={newItem}
                    placeholder="오늘 할껄 적어줘,"
                    onChange={e => setNewItem(e.target.value)}
                    type="text" id="item" />
            </form>
        </div>
    )
}