import React from 'react';
import './detail.css';
import {connect} from 'react-redux'
const Detail = (props) =>{
    const {news} = props;
    const id = props.match.params.id.match(/\d+$/g);
    const result = news.filter(item => item.id === +id[0]);
    const {h1, h2, detail, content} = result[0];
    return(
        <section>
            <div className="wrapper">
                <img src={`/img/${detail}`} alt=""/>
                <h1>{h1}</h1>
                <h2>{h2}</h2>
                <p>{content}</p>
            </div>
        </section>
    )
};

export default connect(state =>({
    news: state.news,
}))(Detail);