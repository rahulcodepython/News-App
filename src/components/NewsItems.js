import React from 'react'

export default function NewsItems(props) {
    return (
        <div className="container">
            <div className="card" style={{ "width": "18rem" }}>
                <img src={props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="text">
                        <p className="card-title" style={{ textAlign: 'left' }}>
                            {props.author}
                        </p>
                        <p className="card-title" style={{ textAlign: 'right' }}>
                            {props.publishedAt}
                        </p>
                    </div>
                    <h5 className="card-title" style={{ "justifyContent": 'center' }}>
                        {props.title}
                    </h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}