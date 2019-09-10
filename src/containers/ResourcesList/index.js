import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './resourcesList.css';
import {connect} from 'react-redux';
import {deleteNew, fetchNews} from '../../actions/news/newsActions'
import { Button } from '@material-ui/core';

class ResourcesList extends PureComponent{
    

    handleDelete = (id) =>{
        this.props.deleteNew(+id);
    }
    componentDidMount(){
        this.props.fetchNews()
    }
        
    render(){
        console.log(this.props);
        const {news} = this.props;
        return (
            <section>
                <nav>
                    <ul>
                        {news.map(({id,h1})=>(
                            <li key = {id}>
                                <div className="resource">
                                    <Link to={`admin/${id}`}>{`(${id}) ${h1}`}</Link>
                                    <button data-src={id} style={{display:'block',margin:'10px 0 20px 0'}} onClick={() => this.handleDelete(id)}>
                                        Delete
                                    </button>
                                </div>  
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='new-resource'>
                    <Button variant="contained" color="primary" component={Link} to="/newresource">
                            Create New
                    </Button>
                    
                </div>
                
            </section>
        )
    }
    
}

export default connect(state =>({
    news: state.news,
}), {deleteNew, fetchNews})(ResourcesList);