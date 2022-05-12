import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {

    const apikey = '868926d25a164397820fe218e231a31e'

    const [theme, setTheme] = useState("light");
    const [fontColor, setFontColor] = useState("black");
    // const [progress, setProgress] = useState(0)

    let mode = () => {
        if (theme === "light") {
            document.body.style.backgroundColor = "black";
            document.body.style.Color = "white";
            setFontColor("white");
            setTheme("dark");
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.Color = "black";
            setFontColor("black");
            setTheme("light");
        }
    };

    return (
        <Router>
            <div>
                {/* <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                /> */}
                <Navbar theme={theme} mode={mode} />
                <Routes>
                    <Route path='/' element={<News color={fontColor} country='in' key="general" category='general' apiKey={apikey} />} />
                    <Route path='/business' element={<News color={fontColor} country='in' key="business" category='business' apiKey={apikey} />} />
                    <Route path='/entertainment' element={<News color={fontColor} country='in' key="entertainment" category='entertainment' apiKey={apikey} />} />
                    <Route path='/health' element={<News color={fontColor} country='in' key="health" category='health' apiKey={apikey} />} />
                    <Route path='/science' element={<News color={fontColor} country='in' key="science" category='science' apiKey={apikey} />} />
                    <Route path='/sports' element={<News color={fontColor} country='in' key="sports" category='sports' apiKey={apikey} />} />
                    <Route path='/technology' element={<News color={fontColor} country='in' key="technology" category='technology' apiKey={apikey} />} />
                    {/* <News color={fontColor} country='in' key="" category='technology' apiKey={apikey} /> */}
                </Routes>
            </div>
        </Router>
    )
}
