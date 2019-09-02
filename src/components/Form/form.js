import React from 'react';
import './admin.css';
const Form = ({h1Ref, h2Ref, descriptionRef, previewRef, detailRef, contentRef, h1,h2,description, preview, detail, content, onChange, onClick}) =>(
    <form action="">
        <input ref={h1Ref} type='text' name="h1" placeholder="Заголовок" value={h1} onChange={onChange}/>
        <input ref={h2Ref} type='text' name="h2" placeholder="Подзаголовок" value={h2} onChange={onChange}/>
        <input ref={descriptionRef} type='text' name="description" placeholder="Описание" value={description} onChange={onChange}/>
        <input ref={previewRef} type='text' name="preview" placeholder="Превью Картинка" value={preview} onChange={onChange}/>
        <input ref={detailRef} type='text' name="detail" placeholder="Детальная картинка" value={detail} onChange={onChange}/>
        <textarea ref={contentRef} name="content" placeholder="Содержимое" value={content} onChange={onChange}/>
        <button onClick={onClick}>Сохранить</button>
    </form>
);

export default Form;