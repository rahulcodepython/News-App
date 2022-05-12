import React from 'react'

export default function NewsItems(props) {

    return (
        <div className="container">
            <div className="card my-2" style={{ 'width': '18rem' }}>
                <img src={props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body" style={{
                    'backgroundColor': props.color === 'black' ? 'white' : 'black'
                }}>
                    <div className="text">
                        <p className="card-title" style={{
                            textAlign: 'left',
                            color: props.color
                        }}>
                            {props.author} {props.color}
                        </p>
                        <p className="card-title" style={{
                            textAlign: 'right',
                            color: props.color
                        }}>
                            {props.publishedAt}
                        </p>
                    </div>
                    <h5 className="card-title" style={{
                        "justifyContent": 'center',
                        color: props.color
                    }}>
                        {props.title}
                    </h5>
                    <p className="card-text" style={{
                        color: props.color
                    }}>
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