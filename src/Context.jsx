import React, {createContext, useReducer, useContext} from 'react'
import { cardImages } from './data'



const Movie = createContext()

const products = cardImages.map((item) => ({
    id: item.id,
    img: item.img,
    backImg: item.backImg,
    title: item.title,
    subTitle: item.subTitle,
    desc: item.desc,
    year: item.year,
    genre: item.genre,
    company: item.company,
    director: item.director,
    awords: item.awords,
    actors: item.actors

}))

const reducer = (state, action) => {
    switch(action.type) {
        case "ABOUT_MOVIE": 
            return  {...state, cart: [{...action.payload}]};
    }
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {products: products, cart: [] } )
    
    console.log(products)
    
    
    
    return (
        <Movie.Provider value = {{state, dispatch}}>
            {children}
        </Movie.Provider>
    )
}

export default Context


export const MovieState = () => {
    return useContext(Movie)
}