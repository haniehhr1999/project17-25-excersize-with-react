import React, { useEffect, useState } from 'react'
import './books.css'
import AddToList from './AddToList'

// array empty or not?----------------------------
function returnArrayOfBooks(){
    const data = localStorage.getItem('books')
    if (data) {
        return JSON.parse(data)
    }else{
        return []
    }
}

function Books() {

    const [books  , setBooks ]  = useState(returnArrayOfBooks())
    const [number , setNumber]  = useState('')
    const [name   , setName  ]  = useState('')
    const [author , setAuthor]  = useState('')

    // add books
    const addToLibraryHandler = () => {
        let book = {
            number,
            name ,
            author
        }
        setBooks([...books , book])
        setNumber('')
        setAuthor('')
        setName('')
    }

    // delete books 
    const deleteBook = (number)=>{
        books.filter((book)=>{
            return book.number !== number
        })
    }
    useEffect(()=>{
        localStorage.setItem('books' , JSON.stringify(books))
    } , [books])
    return (
        <div className='total d-flex align-items-center justify-content-center h-100' dir='rtl'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="add-book-container p-4 text-white">
                            <h2>افزودن کتاب</h2>
                            <input onChange={e => setName(e.target.value)  } className='w-100 my-2 px-3 py-2' placeholder='نام کتاب' type="text" name="" id="" />
                            <input onChange={e => setAuthor(e.target.value)} className='w-100 my-2 px-3 py-2' placeholder='نام نویسنده' type="text" name="" id="" />
                            <input onChange={e => setNumber(e.target.value)} className='w-100 my-2 px-3 py-2' placeholder='شماره کتاب' type="text" name="" id="" />
                            <button onClick={addToLibraryHandler} className='btn-book w-100 my-2 px-3 py-2'>افزودن کتاب</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="list-container p-4 text-white">
                            {
                                books.length > 0  ? 
                                <table className='w-100'>
                                    <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>عنوان کتاب</th>
                                            <th>نویسنده</th>
                                            <th>حذف کتاب</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <AddToList booklist = {books} deleteBook = {deleteBook} />
                                    </tbody>
                                </table>
                                :
                                <>کتابی توی کتابخونه نداریم</>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books