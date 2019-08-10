import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'
import PortofolioInput from '../form/PortofolioInput'
import PortofolioDate from '../form/PortofolioDate'

const validateInputs = (values) => {
    let errors = {}
    // debugger

    /** REQUIRED ALL FIELD */
    /** Different Object.keys dan Object.entries, kalo entries dapet smuanya (key n value) */
    const entries = Object.entries(values)
    entries.forEach(([key, value]) => { // dapet key n value sesuai callback
    // entries.forEach((object) => { // dapet key n value di dlm object
        console.log(key)
        if (!values[key]) {
            errors[key] = `${key} is required.`
        }
    })
    // const keyArray = Object.keys(values)
    // keyArray.forEach((key) => {
    //     console.log(key)
    //     if (!values[key]) {
    //         errors[key] = `${key} is required.`
    //     }
    // })

    // if (!values.Type) {
    //     errors.Type = 'Type is required'
    // }

    // if (!values.CategoryId) {
    //     errors.CategoryId = 'CategoryId is required'
    // }
    // if (!values.email) {
    //     errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address'
    // }

    return errors
}

const INITIAL_VALUES = {
    Type: '',
    CategoryId: '',
    Title: '',
    SubTitle: '',
    Body: '',
    Caption: '',
    Description: '',
    CreatedBy: '',
    CreatedAt: ''
    //   Type: 'article',
    //   CategoryId: '1',
    //   Title: 'My Software Engineering Path',
    //   SubTitle: '',
    //   Body: '<p>Can We Treat Acne and Prevent Acne Scar.</p><br/><p>Update on Stretch Marks</p><br/>',
    //   Caption: 'Software Engineering',
    //   Description: 'Topic Software Engineering',
    //   CreatedBy: 'radiliadi'
}

// const PortofolioCreateForm = (props) => ( // onclick
const PortofolioCreateForm = () => (
  <div>
    {/* <h1>Any place in your app!</h1> */}
    {/* auto execute */}
    {/* <button onClick={props.onClick('Just some ordinary string')}> CLICK ME!!! </button> */}
    {/* then shoudl be like below */}
    {/* <button onClick={() => props.onClick('Just some ordinary string')}> CLICK ME!!! </button> */}
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field 
                type="text"
                name="Type"
                label="Type"
                component={PortofolioInput} 
            />
            <Field
                type="text"
                name="CategoryId"
                label="CategoryId"
                component={PortofolioInput}
            />
            <Field
                type="text"
                name="Title"
                label="Title"
                component={PortofolioInput}
            />
            <Field
                type="text"
                name="SubTitle"
                label="SubTitle"
                component={PortofolioInput}
            />
            <Field
                type="textarea"
                name="Body"
                label="Body"
                component={PortofolioInput}
            />
            <Field
                type="text"
                name="Caption"
                label="Caption"
                component={PortofolioInput}
            />
            <Field
                type="text"
                name="Description"
                label="Description"
                component={PortofolioInput}
            />
            <Field
                type="text"
                name="CreatedBy"
                label="CreatedBy"
                component={PortofolioInput}
            />
            <Field
                name="CreatedAt"
                label="CreatedAt"
                component={PortofolioDate}
            />
            <Field
                name="UpdatedAt"
                label="UpdatedAt"
                component={PortofolioDate}
            />
            
            <Button type="submit" disabled={isSubmitting}>
                Submit
            </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortofolioCreateForm

// import React, { Component } from 'react'

// class PortofolioCreateForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: '',
//             description: '',
//             language: ''
//         }
    
//         this.handleChange = this.handleChange.bind(this)
//         // this.handleChangeDesc = this.handleChangeDesc.bind(this)
//         // this.handleChangeLang = this.handleChangeLang.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
  
//     handleChange(event) {
//         const field = event.target.name
//         this.setState({
//             [field]: event.target.value
//         })
//     }

//     // handleChangeDesc(event) {
//     //     this.setState({
//     //         description: event.target.value
//     //     })
//     // }

//     // handleChangeLang(event) {
//     //     this.setState({
//     //         language: event.target.value
//     //     })
//     // }
  
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language)
//         event.preventDefault()
//     }
  
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <Label>
//                     Name:
//                     <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                     Description:
//                     <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                     Pick your favorite Programming Language:
//                     <select name="language" value={this.state.language} onChange={this.handleChange}>
//                         <option value="javascript">Javascript</option>
//                         <option value="java">Java</option>
//                         <option value="c++">C++</option>
//                         <option value="c#">C#</option>
//                     </select>
//                 </Label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }

// export default PortofolioCreateForm

// import React from 'react'
// import { Formik } from 'formik'

// const PortofolioCreateForm = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         let errors = {};
//         if (!values.email) {
//           errors.email = 'Required'
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address'
//         }
//         return errors
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2))
//           setSubmitting(false)
//         }, 400)
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default PortofolioCreateForm