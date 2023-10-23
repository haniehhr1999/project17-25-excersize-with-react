import React from 'react'
import './sidebar.css'
import { useGlobalContext } from './context'

function Home() {
    const {openSidebar} = useGlobalContext()
    
    return (
        <div onClick={openSidebar} className='d-flex align-items-center main-home px-5 py-3 fw-bold fs-4' role='button'>
            <span class="material-symbols-outlined">menu</span>
            <div className='px-2'>Menu</div>
        </div>
    )
}

export default Home