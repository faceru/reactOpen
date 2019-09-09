import React from 'react';
import { Formik, Field, Form } from 'formik';

import './admin.css';


const CustomForm = ({values = {
    h1:'',
    h2:'',
    description:'',
    preview:'',
    detail:'',
    content:'',
}, onSubmit}) => (
        
        <Formik
            initialValues={values}
            onSubmit={onSubmit}
            
            render={() => (
                <Form>
                    <Field 
                        type="text"
                        name="h1"
                        
                    />
                    <Field 
                        type="text"
                        name="h2"
                    />
                    <Field 
                        type="text"
                        name="description"
                    />
                    <Field 
                        type="text"
                        name="preview"
                    />
                    <Field 
                        type="text"
                        name="detail"
                    />
                    <Field 
                        type="text"
                        name="content"
                    />
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        />
    
)

export default CustomForm;