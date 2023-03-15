import './contact.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, useFormik } from 'formik';
import * as yup from "yup";

const formvalidation = yup.object().shape({
  name:yup
  .string()
  .required("required"),

  email:yup
  .string()
  .required("required")
  .email("please enter the email"),

  number:yup
  .number()
  .required("required")
  .min(10),

  place:yup
  .string()
  .required("required")

})

const onSubmit = (values, action) => {
  console.log(values);
  console.log(action);
}

export function Contact() {
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues:{
      name:"",
      email:"",
      number:"",
      place:"",
    },
    validationSchema:formvalidation,
    onSubmit,
  });
  console.log(errors)
  return (
    <div className='contact'>
      <h2 className="contactpage">Contact Us</h2>
      <div className="contactnumber">
        <p className='callus'><CallIcon />CALL US</p>
        <h2 className='contactphonenumber'>1800 200 9624</h2>
        <p className='avalibaletime'>(Mon to Sat 9:30 AM to 6 PM)</p>
      </div>
      <div className="contactnumber">
        <p className='callus'><EmailIcon />EMAIL</p>
        <h2 className='contactphonenumber'>Santhoshsanjaiyan699@gmail.com</h2>
        <p className='avalibaletime'>(Mon to Sat 9:30 AM to 6 PM)</p>
      </div>
      <div className="contactyou">
        <h2 className="contactyou">LET US CONTACT YOU</h2>
        <div className="conntainer">
            <form onSubmit={handleSubmit} className="add-contact-information">
                <TextField 
                name = "name"
                label="Name" 
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                type="text" 
                className={errors.name && touched.name ? "input-error":""}
                />
                <TextField 
                name = "email"
                label="Email" 
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                type="text" 
                className={errors.email && touched.email ? "input-error":""}
                />
                <TextField 
                name = "number"
                label="Phone Number" 
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.number}
                type="number" 
                className={errors.number && touched.number ? "input-error":""}
                />
                <TextField 
                name = "place"
                label="Place" 
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.place}
                type="text" 
                className={errors.place && touched.place ? "input-error":""}
                />
                <Button 
                variant="contained" 
                color="success">
                  Submit
                </Button>
            </form>
        </div>
      </div>
    </div>
  );
}
