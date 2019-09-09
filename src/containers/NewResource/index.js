import React, {PureComponent} from 'react';
import CustomForm from 'components/Form';
import {connect} from 'react-redux';
import {createNew} from 'actions/newsActions'

class NewResource extends PureComponent{
    getNewId = () =>{
        const {news} = this.props;
        if(news.length > 0){
            return  news[news.length - 1].id + 1
        } else{
            return 1
        }
    }
    handleClick = (values) =>{
        const {createNew} = this.props;
        const { h1, h2, description, preview, detail, content} = values;
        createNew(this.getNewId(), h1, h2, description, preview, detail, content);
    }
    render(){
        return(
            <section>
                
                <CustomForm
                    onSubmit={this.handleClick}
                />
                
            </section>
            
        )
    }
}
export default connect(state =>({
    news: state.news,
}), {createNew})(NewResource);