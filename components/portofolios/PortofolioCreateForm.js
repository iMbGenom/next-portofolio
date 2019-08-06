import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
            <div>
                <label>Type</label>
                <Field type="text" name="Type" />
                <ErrorMessage name="Type" component="div" />
            </div>
            <div>
                <label>CategoryId</label>
                <Field type="text" name="CategoryId" />
                <ErrorMessage name="CategoryId" component="div" />
            </div>
            <div>
                <label>Title</label>
                <Field type="text" name="Title" />
                <ErrorMessage name="Title" component="div" />
            </div>
            <div>
                <label>SubTitle</label>
                <Field type="text" name="SubTitle" />
                <ErrorMessage name="SubTitle" component="div" />
            </div>
            <div>
                <label>Body</label>
                <Field type="textarea" name="Body" component="textarea" />
                <ErrorMessage name="Body" component="div" />
            </div>
            <div>
                <label>Caption</label>
                <Field type="text" name="Caption" />
                <ErrorMessage name="Caption" component="div" />
            </div>
            <div>
                <label>Description</label>
                <Field type="text" name="Description" />
                <ErrorMessage name="Description" component="div" />
            </div>
            <div>
                <label>CreatedBy</label>
                <Field type="text" name="CreatedBy" />
                <ErrorMessage name="CreatedBy" component="div" />
            </div>
            <div>
                <label>CreatedAt</label>
                <Field type="text" name="CreatedAt" />
                <ErrorMessage name="CreatedAt" component="div" />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
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
//                 <label>
//                     Name:
//                     <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Description:
//                     <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Pick your favorite Programming Language:
//                     <select name="language" value={this.state.language} onChange={this.handleChange}>
//                         <option value="javascript">Javascript</option>
//                         <option value="java">Java</option>
//                         <option value="c++">C++</option>
//                         <option value="c#">C#</option>
//                     </select>
//                 </label>
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