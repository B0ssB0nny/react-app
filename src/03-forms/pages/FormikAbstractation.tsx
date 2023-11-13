import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {MyCheckBox, MySelect, MyTextInput} from '../components'

import '../styles/styles.css'

export const FormikAbstractation = () => {

return (
    <div>
        <h1>Formik Abstractation</h1>

    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
        }}
        onSubmit={(values) => {
            console.log(values);        
        }}
        validationSchema={
            Yup.object({
                firstName: Yup.string()
                                .max(15,'Debe tener menos de 15 caracteres')
                                .required('Requerido'),
                lastName: Yup.string()
                                .max(10,'Debe tener menos de 10 caracteres')
                                .required('Requerido'),
                email: Yup.string()
                            .email('Email no Valido')
                            .required('Requerido'),
                terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar las condiciones'),
                jobType: Yup.string()
                            .notOneOf(['it-junior'], 'Opcion no permitida')
                            .required('Requerido')
            })
        }
    >
    {
        (formik) => (
            <Form>
                <MyTextInput label='First Name' name='firstName' placeholder='Name'/>
        
                <MyTextInput label='Last Name' name='lastName' placeholder='Last Name'/>
                
                <MyTextInput label='Email Adress' name='email' placeholder='EMail' type='email'/>        
                
                <MySelect label="job Type" name="jobType">
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-junior">It-Junior</option>
                    <option value="it-senior">It-Senior</option>
                </MySelect>
                
                <MyCheckBox label='Terms & Conditions' name='terms'/>
    
        
                <button type='submit'>Submit</button>
            </Form>
        )
    }
    </Formik>
    </div>
)}