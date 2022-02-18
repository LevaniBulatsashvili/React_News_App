import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import PageNotFound from './components/PageDoesntExist.component/PageNotFound';
import FullArticlePage from './components/FullArticlePage.component/FullArticlePage';
import Redirect from './Redirect'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/article/*' element={<FullArticlePage />} />
        <Route path='/404' element={<PageNotFound />} />
        <Route path='/*' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root')
);
