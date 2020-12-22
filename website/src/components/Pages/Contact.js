import React, { Component } from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';


const fields ={
    sections: [
        [
    
            {name:'name', elementName: 'input', type: 'text', placeholder: 'Your Name*'},
            {name:'email', elementName: 'input', type: 'email', placeholder: 'Your Email*'},
            {name:'phone', elementName: 'input', type: 'phone', placeholder: 'Your Phone*'}
        ],
        [
            {name:'message', elementName: 'textarea', type: 'text', placeholder: 'Type Your Message*'}
        ]
        
        
    ]
}

class Contact extends Component {
 
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field 
                                                        {...field} 
                                                        key={i} 
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Name must be longer than three characters").required('You must give us your name.'),
        email: Yup.string().email('Must be an email').required('We need your email'),
        phone: Yup.string()
                  .min(10, "must be more than 10 characters")
                  .max(15, "number is too long")
                  .required("Phone number required"),
        message: Yup.string().min(1, "required")
                    .max(500, "you have exceeded charater limit")
                    .required("message required")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You submitted the form");
    }
})(Contact);