import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import pic1 from '../../assets/team.jpg'

function Dark() {
    const getMode = ()=> {
        const initialMode = localStorage.getItem('mode')
        if (initialMode == null) {
            if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
                return true
            } else {
                return false
            }
        } else {
            return JSON.parse(localStorage.getItem('mode'))
        }
    }
    const [dark , setDark]= useState(false)
    useEffect(()=>{
        localStorage.setItem('mode' , JSON.stringify(dark))
    } , [dark])
    console.log(dark);
  return (
    <>
    <header className='d-flex align-items-center justify-content-between text-white py-3 px-5' style={{transition:'0.5s' , backgroundColor: dark ? '#000': '#183D3D'}}>
        <ul className='d-none d-md-flex mb-0 list-unstyled'>
            <li className='px-2' role='button'>Home</li>
            <li className='px-2' role='button'>Blogs</li>
            <li className='px-2' role='button'>Shops</li>
            <li className='px-2' role='button'>About Us</li>
        </ul>
        <span class="material-symbols-outlined d-flex d-md-none">menu</span>
        <div className="form-check form-switch">
            <input onChange={()=>{setDark(!dark)}} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        </div>
    </header>
    <main className='py-5' style={{transition:'0.5s' , backgroundColor: dark ? '#040D12': '#fff'}}>
        <h1 className='text-center py-3' style={{color: dark ? '#fff' : '#040D12'}}>{dark ? 'This is dark mode' : 'This is light mode'}</h1>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card" style={{transition:'0.5s' , color: dark? '#fff' : '#000' , backgroundColor: dark ? '#183D3D': '#93B1A6'}}>
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link href="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card" style={{transition:'0.5s' , color: dark? '#fff' : '#000' , backgroundColor: dark ? '#183D3D': '#93B1A6'}}>
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link href="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card" style={{transition:'0.5s' , color: dark? '#fff' : '#000' , backgroundColor: dark ? '#183D3D': '#93B1A6'}}>
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link href="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card" style={{transition:'0.5s' , color: dark? '#fff' : '#000' , backgroundColor: dark ? '#183D3D': '#93B1A6'}}>
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link href="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Dark