import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pink Floyd'])
    
    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        // console.log(newCategory)
        //Valorant
        // setCategories(['Valorant', ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={setCategories}
                onAddCategory={onAddCategory}
            />

            {categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ) 
            )}
                {/* <li>ABC</li> */}

        </>
    )
}
 