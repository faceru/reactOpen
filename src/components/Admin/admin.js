import React, {Component} from 'react';
import {news} from '../../storeLOL';
import Form from '../Form/form';

class Admin extends Component{
    state={
        form:{
            id: +this.props.match.params.id.match(/\d+$/g)[0],
            h1:'',
            h2:'',
            description:'',
            preview:'',
            detail:'',
            content:'',
        },
        success:'',    
    }

    componentDidMount(){
        const id =  +this.props.match.params.id.match(/\d+$/g)[0];
        const findObj = news.findIndex(x=> x.id === id);
        this.setState({
            form:{
                id: id,
                h1:news[findObj].h1,
                h2:news[findObj].h2,
                description:news[findObj].description,
                preview:news[findObj].preview,
                detail:news[findObj].detail,
                content:news[findObj].content,
            }
        })
        
        
    }

    h1 = React.createRef();
    h2 = React.createRef();
    description = React.createRef();
    preview = React.createRef();
    detail = React.createRef();
    content = React.createRef();

    handlerChange = () =>{
        const id =  +this.props.match.params.id.match(/\d+$/g)[0];
        this.setState({
            form:{
                id: id,
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
        const id = this.props.match.params.id.match(/\d+$/g);
        let findItem = news.findIndex(x => x.id === +id[0]);
        let ourNew = news[findItem];
        
        const {h1, h2, description, preview, detail, content} = this.state.form;
        ourNew.h1 = h1;
        ourNew.h2 = h2;
        ourNew.description = description;
        ourNew.preview = preview;
        ourNew.detail = detail;
        ourNew.content = content;
        
        this.setState({
            success:'Успешное сохранение'
        })
        setTimeout(()=>(
            this.setState({
                success:''
            })
        ), 1000)  
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
        );
    }
}
export default Admin;