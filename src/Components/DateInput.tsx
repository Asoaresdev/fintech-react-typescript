import React, { ComponentProps } from 'react'
import * as S from "./StyleDateInput"

// const labelStyle: React.CSSProperties={
//     display:'block',
//     marginBottom:"var(--gap-s)",
//     fontWeight:"600",
//     fontSize: "1rem",
//     color:"var(--color-2)",
//     padding:"var(--gap-s)",
//     backgroundColor:"var(--color-4)",
//     borderRadius:"var(--gap)"
// }
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