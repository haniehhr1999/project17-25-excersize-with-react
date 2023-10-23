import React, { useState } from 'react'

function Loremsaz() {

  const [lorem , setLorem]= useState([])
  const [number , setNumber]= useState(0)

  //when input changes
  const changeInputHandler = (e)=>{
    const toNumber = parseInt(e.target.value)
    setNumber(toNumber)
    console.log(number);
  }

  //when button clicks
  const createLoremHandler = ()=>{
    
    for (let i = 0; i < number; i++) {
      const paragraph = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.'
      // const addParagraph = [...lorem , paragraph]
      const addParagraph = lorem.push(paragraph)
      // setLorem(addParagraph)
      // setLorem([...lorem , paragraph])
      console.log(lorem);
      // return [...lorem , setLorem(lorem.push(paragraph)) ]
    }
  }
  return (
    <div dir='rtl'>
      <div className="container-fluid bg-danger py-3">
        <div className="d-flex justify-content-evenly">
          <input className='border-0 bg-white fw-bold rounded-pill px-3 py-1' value={number} onChange={e => changeInputHandler(e)} placeholder='pick a number' type="number" name="" id="" />
          <button className='border-0 bg-white fw-bold rounded-pill px-3 py-1' onClick={createLoremHandler}>ایجاد کن!</button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            // lorem.length > 0 ? 
            // lorem.map((item , index) =>{
            //   return(
            //     <div key={index} className='col-12'>{item}</div>
            //   )}
            // ) :
            // <div className='text-center'>لورم بسازید</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Loremsaz