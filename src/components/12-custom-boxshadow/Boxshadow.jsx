import React, { useState } from 'react'
import './box.css'


function myFunction() {
    // Get the text field
    var copyText = document.querySelector(".box-con div").innerHTML;
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    // Alert the copied text
    alert("Copied the text: " + copyText);
}

function Boxshadow() {
    const [horizontal , setHorizontal] = useState(10)
    const [vertical   , setVertical  ] = useState(10)
    const [spread     , setSpread    ] = useState(10)
    const [number     , setNumber    ] = useState(10)
    const [color      , setColor     ] = useState('#000000')
  return (
    <>
    <h1 className='pt-5'>تنظیمات انتخاب سایه برای باکس</h1>
    <div className="container py-5">
        <div className="row py-5">
            <div className="col-12 col-md-6 ">
                <div className="box-left p-5">
                    <div className="box-con bg-success" style={{boxShadow: `${horizontal}px ${vertical}px ${spread}px ${number}px ${color}`}}>
                        <div className='bg-white py-2 px-4'>box-shadow : {horizontal}px {vertical}px {spread}px {number}px {color} ;</div>
                    </div>
                </div>
                <div className="m-auto">
                    <button onClick={myFunction} className='copy'>copy to the clipboard</button>
                </div>
            </div>
            <div className="col-12 col-md-6" dir='rtl'>
                <div className="box-right">
                    <div className="d-flex flex-column py-4">
                        <label htmlFor="">طول افقی</label>
                        <input value={horizontal} 
                               min="-200" max="200" 
                               className='w-100'
                               onChange={e => setHorizontal(e.target.value)} 
                               type="range" name="" id="" role='button' 
                        />
                    </div>
                    <div className="d-flex flex-column py-4">
                        <label htmlFor="">طول عمودی</label>
                        <input value={vertical} 
                               min="-200" max="200" 
                               className='w-100'
                               onChange={e => setVertical(e.target.value)} 
                               type="range" name="" id="" role='button' 
                        />
                    </div>
                    <div className="d-flex flex-column py-4">
                        <label htmlFor="">تاری</label>
                        <input value={spread} 
                               min="0" max="200" 
                               className='w-100'
                               onChange={e => setSpread(e.target.value)} 
                               type="range" name="" id="" role='button' 
                        />
                    </div>
                    <div className="d-flex flex-column py-4">
                        <label htmlFor="">گسترش رنگ</label>
                        <input value={number} 
                               min="-200" max="200" 
                               className='w-100'
                               onChange={e => setNumber(e.target.value)} 
                               type="range" name="" id="" role='button' 
                        />
                    </div>
                    <div className="d-flex flex-column py-4">
                        <label htmlFor="">انتخاب رنگ</label>
                        <input value={color} 
                               min="-200" max="200" 
                               className='w-100'
                               onChange={e => setColor(e.target.value)} 
                               type="color" name="" id="" role='button' 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Boxshadow