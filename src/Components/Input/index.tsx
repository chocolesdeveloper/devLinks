import { InputHTMLAttributes } from "react"

import { InputStyle } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <InputStyle {...rest} />
}
