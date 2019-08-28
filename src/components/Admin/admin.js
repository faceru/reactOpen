import React, {Component} from 'react';
import {news} from '../../storeLOL';

class Admin extends Component{
    state={
        id:news.length+1,
        h1:'',
        h2:'',
        description:'',
        preview:'',
        detail:'',
        content:'',
    }
    
    h1 = React.createRef();
    h2 = React.createRef();
    description = React.createRef();
    preview = React.createRef();
    detail = React.createRef();
    content = React.createRef();

    handlerChange = ({target:{value,name}}) =>{
        this.setState({
            h1:this.h1.current.value,
            h2:this.h2.current.value,
            description:this.description.current.value,
            preview:this.preview.current.value,
            detail:this.detail.current.value,
            content:this.content.current.value,
        })
    }
    handleClick = (e) =>{
        e.preventDefault();
        news.push(this.state);  
    }

    render(){
        console.log(this.state);
        const {h1, h2, description, preview, detail, content} = this.state;
        return(
            <section>
                <form>
                    <input ref={this.h1} type='text' name="h1" placeholder="Заголовок" value={h1} onChange={this.handlerChange}/>
                    <input ref={this.h2} type='text' name="h2" placeholder="Подзаголовок" value={h2} onChange={this.handlerChange}/>
                    <input ref={this.description} type='text' name="description" placeholder="Описание" value={description} onChange={this.handlerChange}/>
                    <input ref={this.preview} type='text' name="preview" placeholder="Превью Картинка" value={preview} onChange={this.handlerChange}/>
                    <input ref={this.detail} type='text' name="detail" placeholder="Детальная картинка" value={detail} onChange={this.handlerChange}/>
                    <textarea ref={this.content} name="content" placeholder="Содержимое" value={content} onChange={this.handlerChange}/>
                    <button onClick={this.handleClick}>Сохранить</button>
                </form>
            </section>
        );
    }
}
export default Admin;