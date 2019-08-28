import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {news} from '../../storeLOL';
class News extends Component{
    
    render(){
        return(
            <section>
                {news.map(({id, h1, description, preview}) => (
                    <Link key={id} to={`/news/:${id}`} >
                        <img src={`/img/${preview}`} alt={h1}/>
                        <h1>{h1}</h1>
                        <p>{description}</p>
                    </Link>
                ))}
            </section>
        );
    }
}
export default News;