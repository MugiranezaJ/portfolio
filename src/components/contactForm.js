import React from "react";
import { Field, Formik } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from "yup";
import { Button, TextField } from "@material-ui/core";
export const ContactForm = () => {
    const classes = useStyles();
    return (
  <Formik
    initialValues={{ name:"", email: "", subject:"", message: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
        name: Yup.string()
        .required("Required.."),
      email: Yup.string()
        .email()
        .required("Required"),
        subject: Yup.string()
        .required("Required"),
      message: Yup.string()
        .required("No message provided.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <Field
                name='name'
                label='name *'
                className={classes.field}
                as={TextField}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
            />
          
            <Field
                name='email'
                label='Email *'
                className={classes.field}
                as={TextField}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
            />
          <Field
                name='subject'
                label='subject *'
                size='small'
                className={classes.field}
                as={TextField}
                error={touched.subject && errors.subject}
                helperText={touched.subject && errors.subject}
            />
          <Field
                name='message'
                label='Message *'
                className={classes.field}
                as={TextField}
                error={touched.message && errors.message}
                helperText={touched.message && errors.message}
            />
          <Button type="submit" disabled={isSubmitting}>
            Send
          </Button>
        </form>
      );
    }}
  </Formik>
)};
const useStyles = makeStyles(theme => ({
    container:{
        display:'flex',
        flexDirection:'column',
        color:'white',
        borderColor:'green'
    },
    field:{
        color:'#fff',
        borderColor:'green'
    }
}))