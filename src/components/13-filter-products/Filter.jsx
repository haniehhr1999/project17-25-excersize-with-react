import React, { useState } from 'react'
import {products}          from './data'
import pic1                from '../../assets/original.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './filter.css'


function Filter() {
    const [mahsool , setMahsool]= useState(products)
    console.log(mahsool);

    const filterProducts = (category)=>{
        if (category === 'همه') {
            setMahsool(products)
            return ;
        }
        const filtered_Products = products.filter(product => product.category === category)
        setMahsool(filtered_Products)
    }
    return (
        <main dir='rtl'>
            <h1 className='pt-4'>محصولات ما</h1>
            <hr className='w-25 m-auto border border-2 border-primary' />
            <ul className='list-unstyled d-flex py-4 justify-content-center'>
                <li onClick={() => filterProducts('همه')} className='px-3 py-1' role='button'>همه</li>
                <li onClick={() => filterProducts('کرمپودر')} className='px-3 py-1' role='button'>کرمپودر</li>
                <li onClick={() => filterProducts('رژ لب')} className='px-3 py-1' role='button'>رژ لب</li>
                <li onClick={() => filterProducts('ماسک مو')} className='px-3 py-1' role='button'>ماسک مو</li>
            </ul>
            <div className="container">
                <div className="row g-3">
                    {
                        mahsool.map(item =>{
                            return(
                                <div className="col-12 col-md-4">
                                    <div className="card" key={item.id}>
                                        <img src={pic1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.desc}</p>
                                            <p className="card-text">{item.price} تومان</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Filter