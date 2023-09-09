import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
    companyName: "",
    jobTitle: "",
    name: "",
    number: "",
    email: "",
    description: "",
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const signUpSchema = Yup.object({
    companyName: Yup.string().min(2).max(25).required("Please Enter Your Company Name"),
    jobTitle: Yup.string().min(2).max(50).required("Please Enter Your Job Title"),
    name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    description: Yup.string().min(2).max(100).required("Please Enter Description"),
})

const Validation = () => {

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm();
        }
    })
    // console.log(errors)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h3>Work Experience</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '55ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Company Name" id="companyName" name='companyName' type='text' variant="outlined" value={values.companyName} onChange={handleChange} onBlur={handleBlur} helperText={touched.companyName && errors.companyName} error={Boolean(touched.companyName && errors.companyName)} />
                            {/* {<p>{errors.name}</p>} */}
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '55ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Job Title" id="jobTitle" name='jobTitle' type='text' variant="outlined" value={values.jobTitle} onChange={handleChange} onBlur={handleBlur} helperText={touched.jobTitle && errors.jobTitle} error={Boolean(touched.jobTitle && errors.jobTitle)} />
                            {/* {<p>{errors.name}</p>} */}
                        </Box>
                        <h3>Refrencess</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '55ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Name" id="name" name='name' type='text' variant="outlined" value={values.name} onChange={handleChange} onBlur={handleBlur} helperText={touched.name && errors.name} error={Boolean(touched.name && errors.name)} />
                            {/* {<p>{errors.name}</p>} */}
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '55ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Number" id="number" name='number' type='number' variant="outlined" value={values.number} onChange={handleChange} onBlur={handleBlur} helperText={touched.number && errors.number} error={Boolean(touched.number && errors.number)} />
                            {/* {<p>{errors.name}</p>} */}
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '55ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Email" id="email" name='email' variant="outlined" type='text' value={values.email} onChange={handleChange} onBlur={handleBlur} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
                            {/* {<p>{errors.name}</p>} */}
                        </Box>
                        <h3>Accolades</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '55ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Description" id="description" name='description' type='text' variant="outlined" value={values.description} onChange={handleChange} onBlur={handleBlur} helperText={touched.description && errors.description} error={Boolean(touched.description && errors.description)} />
                            {/* {<p>{errors.name}</p>} */}
                        </Box>
                    </div>
                    <div>
                        <Button variant="contained" type='submit'>Submit</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Validation