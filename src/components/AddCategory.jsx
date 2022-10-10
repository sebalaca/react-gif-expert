import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return

        // setCategories(categories => [...categories, inputValue])        
        //Otra solucion seria pasar las categories como props y setear asi
        // setCategories([...categories, inputValue])
        onAddCategory(inputValue.trim())
        setInputValue('')
    }

  return (

    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>

  )
}
