import React, {Component} from 'react';
import {news} from '../../storeLOL';
import {Link} from 'react-router-dom';
import './resourcesList.css'

class ResourcesList extends Component{
    state={
        news:news,
    }

    handleDelete = (e) =>{
        e.preventDefault();
        const id = e.target.getAttribute('data-src');
        const arrayIndex = news.findIndex(x => x.id === +id);
        news.splice(arrayIndex, 1);
        this.setState({
            news:news,
        })
    }
    getNewId = () =>{
        if(news.length > 0){
           return Math.max.apply(Math, news.map((o) => { return o.id; })) + 1
        }else{
            return 1
        }
        
    }
        
        
    render(){
        
        return (
            <section>
                <nav>
                    <ul>
                        {news.map(({id,h1})=>(
                            <li key = {id}>
                                <div className="resource">
                                    <Link to={`admin/:${id}`}>{`(${id}) ${h1}`}</Link>
                                    <button data-src={id} style={{display:'block',margin:'10px 0 20px 0'}} onClick={this.handleDelete}>
                                        Delete
                                    </button>
                                </div>  
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='new-resource'>
                    <Link to={`admin/:${this.getNewId()}`}>
                        Create New
                    </Link>
                </div>
                
            </section>
        )
    }
    
}

export default ResourcesList;