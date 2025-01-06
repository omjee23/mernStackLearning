import {useFormik } from "formik"
import * as Yup from "yup";
export default function FormikForm(){

    const formik = useFormik({
        initialValues: {userName: "",fullName: "",email: "",password:""},
        validationSchema: Yup.object({
            userName: Yup.string().required("user name is required"),
            fullName: Yup.string().required("full name is required"),
            email: Yup.string().required("email is required"),
            password: Yup.string().min(6).required("password is required")
        }),
        onSubmit: (values , action)=>{
            console.log(values);
            console.log(formik.errors)
            action.resetForm();
        }

    });

    return(
        <>
        <h3>Learn Form</h3>
        <form onSubmit={formik.handleSubmit}>
            <br /><br />
            <label htmlFor="userName">User Name:- </label>
            <input type="text" placeholder="username" id="userName" name="userName" value={formik.values.userName} onChange={formik.handleChange} />
            <br /><br /><br />
            {formik.touched.userName && formik.errors.userName ? (<p style={{color: "red"}}>{formik.errors.userName}</p>): null}        <label htmlFor="fullName">Full Name:- </label>
            <input type="text" placeholder="full name" id="fullName" name="fullName"value={formik.values.fullName} onChange={formik.handleChange}/>
            <br /><br /><br />
            {formik.touched.fullName && formik.errors.fullName ?(<p style={{color: "red"}}>{formik.errors.fullName}</p>): null}
            <label htmlFor="email">Eamil:- </label>
            <input type="email" placeholder="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
            <br /><br /><br />
            {formik.touched.email && formik.errors.email ? (<p style={{color: "red"}}>{formik.errors.email}</p>): null}
            <label htmlFor="password">Password:- </label>
            <input type="password" placeholder="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
            <br /><br /><br />
            {formik.touched.password && formik.errors.password ? (<p style={{color: "red"}}>{formik.errors.password}</p>): null}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}