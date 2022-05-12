import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {

    const apikey = '868926d25a164397820fe218e231a31e'

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<News country='in' category='general' apiKey={apikey} />} />
                    <Route path='/business' element={<News country='in' category='business' apiKey={apikey} />} />
                    <Route path='/entertainment' element={<News country='in' category='entertainment' apiKey={apikey} />} />
                    <Route path='/health' element={<News country='in' category='health' apiKey={apikey} />} />
                    <Route path='/science' element={<News country='in' category='science' apiKey={apikey} />} />
                    <Route path='/sports' element={<News country='in' category='sports' apiKey={apikey} />} />
                    <Route path='/technology' element={<News country='in' category='technology' apiKey={apikey} />} /> 
                    {/* <News country='in' category='technology' apiKey={apikey} /> */}
                </Routes>
            </div>
        </Router>
    )
}
