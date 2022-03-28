import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, onReset, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
      validationSchema={validationSchema}
    >
      {() =>
        <>
          {children}
        </>
      }
    </Formik>
  )
}

export default AppForm
