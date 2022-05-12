import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default function News(props) {

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true)
    const [dataLength, setDataLength] = useState(0)
    const [page, setPage] = useState(1)

    const takeNews = async () => {
        // props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;
        setLoading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        // props.setProgress(70);
        setArticle(parsedData.articles)
        setDataLength(parsedData.totalResults)
        setLoading(false)
        // props.setProgress(100);
    };

    useEffect(() => {
        takeNews();
    }, []);

    const newData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticle(article.concat(parsedData.articles))
        setDataLength(parsedData.totalResults)
    };

    return (
        <div>
            <div className="container" style={{ "alignItems": "center" }}>
                <div className="container text-center my-3 fs-1 fw-bolder">
                    Top Headlines
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    next={newData}
                    dataLength={article.length}
                    hasMore={article.length !== dataLength}
                    loader={<Spinner />}
                >
                    <div className="container" style={{ marginBottom: "5rem" }}>
                        <div className="row">
                            {article.map((element) => {
                                return <div className="col-md-3" key={element.url} >
                                    <NewsItems author={element.author ? element.author : "none"} title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} publishedAt={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                    {/* {loading && <Spinner />} */}
                </InfiniteScroll>
            </div>
        </div>
    )
}