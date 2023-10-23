import React, { useState } from 'react'

function SingleQuestion({id , title , description}) {
    const [show , setShow]= useState(false)

    const showDescription = ()=> {
        setShow(!show)
    }

        return (
                <>
                    <div className='container-2' key={id}>
                        <div className="up">
                            <div className='box-title'>
                                <button className='accordion'>{id}</button>
                                <h3>{title}</h3>
                            </div>
                            <div className='plus' onClick={showDescription}>+</div>
                        </div>
                        {
                            show && 
                            <div className="down" >
                                <div>{description}</div>
                            </div>
                        }
                        
                    </div>
                </>
        )
}

export default SingleQuestion