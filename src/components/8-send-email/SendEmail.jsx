import React from 'react'
import emailjs from 'emailjs-com'

function SendEmail() {
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_4lgi3mi' , 'template_wg6ksjl' , e.target , 'GxjgWQGh3o96Jv4xe')
        .then(res => {console.log(res);})
    }
    return (
        <body style={{ display: 'flex' , height: '100vh' , justifyContent: 'center' , alignItems : 'center'}}>
            <form onSubmit={sendEmail} style={{borderRadius: 7 ,backgroundColor : 'pink' , padding: 20 , width: 600}}>
                <h2 className='text-center'>send Email to manager</h2>
                <h6 className='text-center'>you can send me an email with this form:</h6>
                <div>
                    <input className='w-100'style={{border: 'none' , borderBottom: '2px solid #fff' , backgroundColor: 'transparent' , padding: '5px 20px'}} type="text" placeholder='Your Name' />
                </div>
                <div>
                    <input className='w-100'style={{border: 'none' , borderBottom: '2px solid #fff' , backgroundColor: 'transparent' , padding: '5px 20px'}} type="text" placeholder='Your Email' />
                </div>
                <div>
                    <textarea className='w-100'style={{border: 'none' , borderBottom: '2px solid #fff' , backgroundColor: 'transparent' , padding: '5px 20px'}} placeholder='Your Massage' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='w-100 bg-success' style={{border: 'none'}} type="submit">SEND MASSAGE</button>
            </form>
        </body>
    )
}

export default SendEmail