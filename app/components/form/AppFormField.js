import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

const AppFormField = ({ name, width, ...others }) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...others}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
