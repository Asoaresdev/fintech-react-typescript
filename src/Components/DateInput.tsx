import React, { ComponentProps } from 'react'
import * as S from "./StyleDateInput"

type DateInputType = ComponentProps<"input"> & {
    label:string
}

const DateInput = ({label, ...props}:DateInputType) => {
  return (
    <div>
        <label style={S.labelStyle} htmlFor={label}>{label}</label>
        <input style={S.inputStyle} id={label} name={label} type="date" {...props} />
    </div>
  )
}

export default DateInput