import React, { useEffect, useState } from 'react'
import {comments} from './data'
import pic1 from '../../assets/team.jpg'
function Slider() {
    const [users , setUser]  = useState([])
    const [index , setIndex] = useState(0)
    const {title , job} = comments[index]
    // console.log(comments);

    const nextIndexHandler = ()=>{
        if (index > 12) {
          index = 0
        }
    }
    const previousIndexHandler = ()=>{
      if (index < 0) {
        index = 12
      }
    }
    useEffect(()=>{
      async function fetchUrl(){
          const fUrl = await fetch('https://www.melivecode.com/api/users')
          const res = await fUrl.json()
          setUser(res)
          console.log(users);
      }
      fetchUrl()
    } ,[])
    return (
      <>
        <h1>نظرات مشتریان</h1>
        <div className="container" dir='rtl'>
          <div className="row">
              <div className='col-4'>
                  <div className="card">
                      <img src={pic1} className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">{}</h5>
                          <h5 className="card-title">{job}</h5>
                          <p className="card-text">{title}</p>
                      </div>
                      <div>
                          <span className="material-symbols-outlined" onClick={()=> setIndex(index + 1)} role='button'>arrow_forward</span>
                          <span className="material-symbols-outlined" onClick={()=> setIndex(index - 1)} role='button'>arrow_back</span>
                      </div>
                  </div>
              </div>
            {/* {
              users.length > 0 ? 
              users.map(user => {
                return(
                  <div className='col-4'>
                      <div className="card">
                        <img src={user.avatar} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{user.fname} {user.lname}</h5>
                          <p className="card-text">{}</p>
                        </div>
                      </div>
                  </div>
                )
              })
              :
              <>نظری وجود ندارد</>
            } */}
          </div>
        </div>
      </>
    )
}

export default Slider