import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Platos from './Platos'
import { Rating } from "@mui/material"

const PageRestauranteUi = ({ platos }) => {
    const { id } = useParams()



    const location = useLocation()
    const { logo, description, banner, schedule, stars, categorias } = location.state
    return (
        <>
            <img className='mx-auto mb-8' src={logo} alt="logo" width="150" />
            <div className='flex items-center gap-3 mb-4'>
                <img src={banner} alt="img-restaurantes" width="200" />
                <div>
                    <h1>{id}</h1>
                    <p className='text-xs'>{description}</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <Rating name="half-rating" defaultValue={stars} precision={0.5} readOnly />
                <p className="text-xs font-light text-gray-400 bg-gray-200 p-1">{schedule}</p>
            </div>

            <div className='flex items-center mt-4 gap-3 flex-wrap
            '>
                {categorias.map((categoria, index) => (
                    <button key={index} className="py-2 px-4 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">{categoria}</button>
                ))}
            </div>
            <Platos platos={platos} />
        </ >
    )
}

export default PageRestauranteUi
