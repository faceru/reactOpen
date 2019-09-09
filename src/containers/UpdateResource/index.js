import React, {PureComponent} from 'react';
import CustomForm from 'components/Form';
import {connect} from 'react-redux';
import {updateNew} from 'actions/newsActions';

class UpdateResource extends PureComponent{
    

    handleClick = (values) =>{
        const {updateNew} = this.props;
        const {id, h1, h2, description, preview, detail, content} = values;
        updateNew(id, h1, h2, description, preview, detail, content); 
    }

    render(){
        const {news, match:{params:{id}}} = this.props;   
        const findObj = news.findIndex(x=> x.id === +id);
        
        return(
            <section>
                <CustomForm
                    values={news[findObj]}
                    onSubmit={this.handleClick}
                />
               
            </section>
        );
    }
}
export default connect(state =>({
    news: state.news,
}), {updateNew})(UpdateResource);