import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <div style={{ "marginBottom": '5rem' }}>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                    <Link to='/action' className="navbar-brand" style={{'marginLeft': '20rem'}}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="nav navbar-nav navbar-center mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/action' aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/action' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">General</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/action' style={{"cursor": 'pointer'}}>
                                    <span className="material-icons" onClick={props.mode}>
                                        {props.theme === 'light' ? 'dark_mode' : 'light_mode'}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
