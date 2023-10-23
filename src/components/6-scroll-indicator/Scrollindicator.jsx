import React, { useEffect, useState } from 'react'

function Scrollindicator() {
    const [scrollTop , setScrollTop] = useState(0)
    const scrollElem = ()=>{
        const scTop = document.documentElement.scrollTop;
        const hght = document.documentElement.scrollHeight - document.documentElement.clientHeight ;
        const darsad = ( scTop /hght )* 100
        setScrollTop(darsad)
    }
    useEffect(()=>{
        window.addEventListener('scroll' , scrollElem)
    })
    return (
        <>
            <header style={{zIndex:222 , backgroundColor: 'black' , position: 'fixed' ,top: 0 , height: 52, width: '100%'}}>
                <ul style={{padding: 10 ,listStyle: 'none', color: 'white' , display: 'flex' , margin: 0}}>
                    <li style={{padding: "5px 10px"}}>home</li>
                    <li style={{padding: "5px 10px"}}>blog</li>
                    <li style={{padding: "5px 10px"}}>shop</li>
                    <li style={{padding: "5px 10px"}}>about</li>
                </ul>
                <div style={{height: 10, width: '100%' , backgroundColor: '#ccc'}}>
                    <div style={{height: 10 , width: `${scrollTop}%` , backgroundColor: 'red'}}></div>
                </div>
            </header>
            <main style={{ position: 'relative' , top: 52}}>
                <h2>title 1</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 2</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 3</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 4</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 5</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 6</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 6</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 7</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 8</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 9</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 10</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 11</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
                <h2>title 12</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat ipsum quidem enim, fugiat sunt quod ipsam est ullam consequuntur? Explicabo hic soluta unde minima ipsa odio consequatur libero quisquam debitis. Ipsum soluta praesentium ipsa culpa dolorum, et iste rerum libero tempora at eveniet, magni ex harum, inventore in molestias asperiores animi tenetur ipsam. Odit accusamus consequatur error, placeat dolore reiciendis dignissimos corporis qui dolorem. Reiciendis corrupti dolorem odio sit nihil sunt vel facere beatae fuga nemo laboriosam nisi sapiente reprehenderit suscipit impedit laborum repellendus rem error vero harum, molestias perferendis magnam excepturi. Est repellat non, vel eligendi debitis similique.
                </div>
            </main>
        </>
    )
}

export default Scrollindicator