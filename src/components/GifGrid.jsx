import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    //Customs hook que reemplaza todo el codigo comentado
    //Creo carpeta hooks y archivo con el nombre del hook
    const {images, isLoading} = useFetchGifs(category)

    console.log({images, isLoading})

    // const [images, setImages] = useState([])

    // const getImages = async() => {
    //     const newImages = await getGifs(category)
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages()
    // }, [])

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map((image) => (
                    <GifItem 
                        key={image.id}
                        title={image.title}
                        url={image.url}
                        // {..image} Esta tecnica sirve para enviar muchas props de una sola vez
                    />
                    ) 
                )}

            </div>
        </>
    )
}
