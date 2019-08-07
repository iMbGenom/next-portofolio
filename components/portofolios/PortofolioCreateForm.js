import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, FormGroup, Label } from 'reactstrap'

const validateInputs = (validate) => {
    let errors = {}

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
            <FormGroup>
                <Label>Type</Label>
                <Field className="form-control" type="text" name="Type" />
                <ErrorMessage name="Type" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>CategoryId</Label>
                <Field className="form-control" type="text" name="CategoryId" />
                <ErrorMessage name="CategoryId" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>Title</Label>
                <Field className="form-control" type="text" name="Title" />
                <ErrorMessage name="Title" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>SubTitle</Label>
                <Field className="form-control" type="text" name="SubTitle" />
                <ErrorMessage name="SubTitle" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>Body</Label>
                <Field className="form-control" type="textarea" name="Body" component="textarea" />
                <ErrorMessage name="Body" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>Caption</Label>
                <Field className="form-control" type="text" name="Caption" />
                <ErrorMessage name="Caption" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Field className="form-control" type="text" name="Description" />
                <ErrorMessage name="Description" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>CreatedBy</Label>
                <Field className="form-control" type="text" name="CreatedBy" />
                <ErrorMessage name="CreatedBy" component="div" />
            </FormGroup>
            <FormGroup>
                <Label>CreatedAt</Label>
                <Field className="form-control" type="text" name="CreatedAt" />
                <ErrorMessage name="CreatedAt" component="div" />
            </FormGroup>
            
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