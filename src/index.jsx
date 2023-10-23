import React                            from 'react';
import ReactDOM                         from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider }                  from './components/10-sidebar/context';
import App                              from './App';
import './index.css';
// imported components---------------------------------------------------------------
import Password                         from './components/1-password/Password';
import Accordion                        from './components/2-accordion/Accordion';
import Loremsaz                         from './components/3-loremsaz/Loremsaz';
import Navbar                           from './components/4-navbar/Navbar';
import Slideshow                        from './components/5-slide-show/Slideshow';
import Scrollindicator                  from './components/6-scroll-indicator/Scrollindicator';
import SearchImage                      from './components/7-search-image/SearchImage';
import SendEmail                        from './components/8-send-email/SendEmail';
import Dark                             from './components/9-darktheme/Dark';
import Main                             from './components/10-sidebar/Main';
import Boxshadow                        from './components/12-custom-boxshadow/Boxshadow';
import Books                            from './components/11-books/Books';
import Filter                           from './components/13-filter-products/Filter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route path='/'                 element={<App />}>                            </Route>
          <Route path='/password'         element={<Password />}>                       </Route>
          <Route path='/accordion'        element={<Accordion />}>                      </Route>
          <Route path='/loremsaz'         element={<Loremsaz />}>                       </Route>
          <Route path='/navbar'           element={<Navbar />}>                         </Route>
          <Route path='/slideshow'        element={<Slideshow />}>                      </Route>
          <Route path='/scroll-indicator' element={<Scrollindicator />}>                </Route>
          <Route path='/search-image'     element={<SearchImage />}>                    </Route>
          <Route path='/send-email'       element={<SendEmail />}>                      </Route>
          <Route path='/dark-light-theme' element={<Dark />}>                           </Route>
          <Route path='/sidebar'          element={<AppProvider><Main /></AppProvider>}></Route>
          <Route path='/books'            element={<Books />}>                      </Route>
          <Route path='/custom-boxshadow' element={<Boxshadow />}>                      </Route>
          <Route path='/filter-products'  element={<Filter />}>                      </Route>
      </Routes>
    </BrowserRouter>
);

