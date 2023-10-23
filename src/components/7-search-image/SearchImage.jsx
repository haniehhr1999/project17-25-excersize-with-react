import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function SearchImage() {
    const [value , setValue] = useState('')
    const [results , setResults] = useState('')

    const fetchData = async ()=>{
        const getData = await fetch(`https://api.unsplash.com/search/photos/?client_id=mufar9h4NwI54RXjFco89DFWSjQus8SzS1z2dlEcKjs&query=${value}`)
        const res = await getData.json()
        setResults(res.results);
    }

    return (
        <>
            <header>
                <input value={value} onChange={(e)=> setValue(e.target.value)} type="search" name="" id="" />
                <button onClick={fetchData}>search</button>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="d-flex">
                            <div className="col-3">
                                {
                                    results && results.map((item) => 
                                        <img className='w-100' key={item.id} alt='unsplash' src={item.urls.regular} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SearchImage