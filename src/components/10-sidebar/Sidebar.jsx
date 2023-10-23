import React from 'react'
import { lists } from './data'
import './sidebar.css'
import { useGlobalContext } from './context'


function Sidebar() {
    const {isOpenSidebar , closeSidebar} = useGlobalContext()

    return (
        <div className={`${isOpenSidebar ? 'main-sidebar-open main-sidebar px-4 py-3' : 'main-sidebar px-4 py-3'}`}>
            <ul className='p-0'>
                <span role='button' onClick={closeSidebar} class="material-symbols-outlined text-white">close</span>
                {
                    lists.map(item => {
                        const {id , title , url , icon} = item
                        return (
                            <li key={id} className='d-flex align-items-center px-3 py-2'>
                                <span class="material-symbols-outlined text-white">{icon}</span>
                                <a className='text-decoration-none fw-bold text-white px-2' href={url}>{title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar