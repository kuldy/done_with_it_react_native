import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'


const AppFormPicker = ({ name, placeholder, items, numberOfColumns, PickerItemComponent, width, }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>


  )
}

export default AppFormPicker
