import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './resourcesList.css';
import {connect} from 'react-redux';
import {deleteNew} from '../../actions/newsActions'
class ResourcesList extends Component{
    

    handleDelete = (e) =>{
         e.preventDefault();
        const id = e.target.getAttribute('data-src');
        const {deleteNew} = this.props;
        deleteNew(+id);
    }
   
        
    render(){
        
        const {news} = this.props;
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
                    <Link to={`/newresource`}>
                        Create New
                    </Link>
                </div>
                
            </section>
        )
    }
    
}

export default connect(state =>({
    news: state.news,
}), {deleteNew})(ResourcesList);