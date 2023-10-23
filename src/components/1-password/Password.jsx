import React, { useState } from 'react'

function Password() {

  const [show , setShow] = useState(true)

  const hideHandler = ()=>{
    setShow(!show)
  }

  return (
    <main className='d-flex justify-content-center align-items-center ' style={{backgroundColor : '#fff' , height : '100vh'}}>
      <section className='rounded-3' style={{backgroundColor : '#BCA37F' , padding: '30px 20px'}}>
        <h1 className='text-white'>set password</h1>
        <div className='py-3'>
          <input className='w-100 rounded-2 px-3 border-0' type={show ? 'text' : 'password'} placeholder='Enter Your Password' />
        </div>
        <div>
          <button className='w-100 rounded-2 text-white border-0' style={{backgroundColor:'#113946'}} onClick={hideHandler}>{show ? 'hide' : 'show'}</button>
        </div>
      </section>
    </main>
  )
}

export default Password