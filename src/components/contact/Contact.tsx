import * as yup from 'yup';
import { Formik, Form, Field, FormikValues } from 'formik';
import './contact.css'
import useSubmit from '../../hooks/useSubmit';
import { useAlertContext } from '../../context/alertContext';
import { useEffect } from 'react';

let contactMeSchema = yup.object().shape({
    firstName: yup.string().required('Name required.'),
    email: yup.string().email('Invalid email address.').required('Required.'),
    type: yup.string().required('Required'),
    comment: yup.string().max(500).min(20).required('Required.')
});

const Contact = () => {

    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    useEffect(() => {
        if(response) {
            onOpen(response.type, response.message);
        }
    }, [response]);

    return (
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                type: '',
                comment: ''
            }}
            validationSchema={contactMeSchema}
            onSubmit={(values) => { submit('', values)}}
        >
            { (formik) => (<div id='contact' className="contactSection">
                <h2>Contact me!</h2>
                <form  className="contactForm" onSubmit={formik.handleSubmit}>
                    {/* Name block */}
                    <div className='inputBlock'>
                        <label htmlFor="name">Name</label>
                        <input id="firstName" type="text" {...formik.getFieldProps('firstName')}/>
                        { formik.touched.firstName && formik.errors.firstName ?(
                            <div className='errorBlock'>{formik.errors.firstName}</div>
                        ) : null }
                    </div>

                    {/* Email address block */}
                    <div className='inputBlock'>
                        <label htmlFor='email'>Email address</label>
                        <input id='email' type='text' {...formik.getFieldProps('email')} />
                        { formik.touched.email && formik.errors.email ? (
                            <div className='errorBlock'>{formik.errors.email}</div>
                        ) : null }
                    </div>

                    {/* Type block */}
                    <div className='inputBlock'>
                        <label htmlFor='type'>Type of enquiry</label>
                        <select id='type' {...formik.getFieldProps('type')}>
                            <option value='' label='Select an option'></option>
                            <option value="Freelance project proposal" label='Freelance project proposal'></option>
                            <option value="other" label='Other'></option>
                        </select>
                        { formik.touched.type && formik.errors.type ? (
                            <div className='errorBlock'>{formik.errors.type}</div>
                        ) : null}
                    </div>

                    {/* Comment block */}
                    <div className='inputBlock'>
                        <label htmlFor='comment'>Message</label>
                        <textarea id='comment' minLength={20} maxLength={500} {...formik.getFieldProps('comment')}></textarea>
                        { formik.touched.comment && formik.errors.comment ? (
                            <div className='errorBlock'>{formik.errors.comment}</div>
                        ) : null}
                    </div>

                    <button type='submit'>{!isLoading ? 'Submit' : 'Loading...'}</button>
                </form>
                </div>
            )}
            
        </Formik>
    )

};

export default Contact;