import { Formik, Form } from 'formik';
import '../styles/styles.css'
import * as Yup from 'yup'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>register Formik Page</h1> 
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                    
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .required('Nombre Requerido')
                                .min(2,'El nombre debe de tener al menos 2 caracteres')
                                .max(15,'El nombre debe tener 15 caracteres como máximo'),
                        email: Yup.string()
                                    .required('Email Requerido')
                                    .email('Revise el formato del correo'),
                                
                        password1: Yup.string()
                                    .required('Contraseña Requerida')
                                    .min(6,'La contraeña debe tener como mínimo 6 caracteres'),
                        password2: Yup.string()
                                    .required('Contraseña Requerida')
                                    .oneOf([Yup.ref('password1')],'Las contraseñas no coinciden')
                    })
                }
            >
                {(formik) => (
                    <Form>
                        <MyTextInput name='name' label='nombre' placeholder='Nombre'/>
                        <MyTextInput name='email' type='email' label='email' placeholder='Email'/>
                        <MyTextInput name='password1' type='password' label='password1' placeholder='Introduce tu password'/>
                        <MyTextInput name='password2' type='password' label='password2' placeholder='Repite el password'/>

                        <button type="submit">Create</button>
                        <button type='button' onClick={formik.handleReset}>Reset</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}