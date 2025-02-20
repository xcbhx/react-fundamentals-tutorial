import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import About from './components/About/About';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<POPOSList />} />
            <Route path="about" element={<About />} />
			<Route path="/details/:id" element={<POPOSDetails />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
