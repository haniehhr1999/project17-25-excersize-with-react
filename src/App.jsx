import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
        <div>
            <Link to='/password'         className='app'>project 1 - show/hide password</Link>
        </div>
        <div>
            <Link to='/accordion'        className='app'>project 2 - accordion</Link>
        </div>
        <div>
            <Link to='/loremsaz'         className='app'>project 3 - lorem saz</Link>
        </div>
        <div>
            <Link to='/navbar'           className='app'>project 4 - navbar</Link>
        </div>
        <div>
            <Link to='/slideshow'        className='app'>project 5 - slideshow</Link>
        </div>
        <div>
            <Link to='/scroll-indicator' className='app'>project 6 - scroll indicator</Link>
        </div>
        <div>
            <Link to='/search-image'     className='app'>project 7 - search image from unsplash (with vpn) </Link>
        </div>
        <div>
            <Link to='/send-email'       className='app'>project 8 - send email to somebody</Link>
        </div>
        <div>
            <Link to='/dark-light-theme' className='app'>project 9 - dark & light theme</Link>
        </div>
        <div>
            <Link to='/sidebar'          className='app'>project 10 - sidebar</Link>
        </div>
        <div>
            <Link to='/books'            className='app'>project 11 - add book to library</Link>
        </div>
        <div>
            <Link to='/custom-boxshadow' className='app'>project 12 - box shadow</Link>
        </div>
        <div>
            <Link to='/filter-products'  className='app'>project 13 - filter products</Link>
        </div>
        <div>
            <Link to='/list-of-tasks'  className='app'>project 14 - list of tasks</Link>
        </div>
        
    </>
  );
}

export default App;
