import React , { useState , useRef , useEffect } from 'react'
import './navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    const [menu , setMenu] = useState(false)

    const clickMenu = ()=>{ setMenu(true) }
    const closeMenu = ()=>{ setMenu(false)}
    const containerRef = useRef(null)

    useEffect(()=>{
        if (menu) {
            containerRef.current.style.width = '187.7px'
            containerRef.current.style.transform ='translateX(0px)'
            containerRef.current.style.transition ='1s'
        }
        // else{
        //     containerRef.current.style.width = '0px'
        //     containerRef.current.style.transform ='translateX(-200px)'
        //     containerRef.current.style.transition ='1s'
        // }
    } , [menu])


    return (
        <>
            <nav className='container-fluid bg-warning py-2'>
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-8 col-md-3 icons">
                            <span role="button" className="mx-1 mx-md-3 material-symbols-outlined">settings</span>
                            <span role="button" className="mx-1 mx-md-3 material-symbols-outlined">home</span>
                            <span role="button" className="mx-1 mx-md-3 material-symbols-outlined">shopping_cart_checkout</span>
                            <span role="button" className="mx-1 mx-md-3 material-symbols-outlined d-inline d-md-none" onClick={clickMenu}>menu</span>
                        </div>
                        <div className="col- col-md-8 lists">
                            <ul className='mb-0 list-unstyled fw-bold d-none d-md-flex'>
                                <li role="button" className='mx-2'>Home</li>
                                <li role="button" className='mx-2'>Blogs</li>
                                <li role="button" className='mx-2'>About</li>
                                <li role="button" className='mx-2'>Shops</li>
                            </ul>
                        </div>
                        <div className="col-4 col-md-1 logo">
                            <img className='w-100' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Coca-Cola_Zero_logo.svg/2560px-Coca-Cola_Zero_logo.svg.png" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
            {
                menu && <div className="vertical-menu bg-info py-3 w-25 position-absolute top-0 rounded-3" ref={containerRef}>
                                <span role="button" onClick={closeMenu} className="material-symbols-outlined position-absolute d-block right-0 top-0">close</span>
                                <ul className='list-unstyled px-3 pt-4'>
                                    <li>Home</li>
                                    <li>Blog</li>
                                    <li>About</li>
                                    <li>Shops</li>
                                </ul>
                            </div>
            }
            
        </>
    )
}

export default Navbar