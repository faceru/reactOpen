import React, {Component} from 'react';
import Form from '../Form/form';
import { news } from '../../storeLOL';

class NewResource extends Component{
    getNewId = () =>{
        if(news.length > 0){
            return  Math.max.apply(Math, news.map((o) => { return o.id; })) + 1
        } else{
            return 1
        }
    }
       
    state={
        form:{
            id: this.getNewId(),
            h1:'',
            h2:'',
            description:'',
            preview:'',
            detail:'',
            content:'',
        },
        success:'',
        
    }

    h1 = React.createRef();
    h2 = React.createRef();
    description = React.createRef();
    preview = React.createRef();
    detail = React.createRef();
    content = React.createRef();
    
   
    handlerChange = () =>{
       
        this.setState({
            form:{
                id: this.getNewId(),
                h1:this.h1.current.value,
                h2:this.h2.current.value,
                description:this.description.current.value,
                preview:this.preview.current.value,
                detail:this.detail.current.value,
                content:this.content.current.value,
            },
        })
    }
    handleClick = (e) =>{
        e.preventDefault();
 
        news.push(this.state.form);  
    }
    render(){
        
        const {h1, h2, description, preview, detail, content} = this.state.form;
        return(
            <section>
                <Form
                    h1Ref={this.h1}
                    h2Ref={this.h2}
                    descriptionRef={this.description}
                    previewRef={this.preview}
                    detailRef={ this.detail}
                    contentRef={this.content}
                    onClick={this.handleClick}
                    onChange={this.handlerChange}
                    h1={h1}
                    h2={h2}
                    description={description}
                    preview={preview}
                    detail={detail}
                    content={content}
                />
                <div style={{textAlign:'center', color:'green'}}>
                    <p>{this.state.success}</p>
                </div>
            </section>
            
        )
    }
}
export default NewResource;