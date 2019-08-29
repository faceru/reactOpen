import React from 'react';
import {Link} from 'react-router-dom'
import {news} from '../../storeLOL';
import './news.css';
const News = () =>{
    
    
    return(
        <section>
            <div className="container">
                {news.map(({id, h1, description, preview}) => (
                    <Link key={id} to={`/news/:${id}`}  className="news-item">
                        <img src={`/img/${preview}`} alt={h1}/>
                        <h1>{h1}</h1>
                        <p>{description}</p>
                    </Link>
                ))}
            </div>
            
        </section>
    );
}

export default News;