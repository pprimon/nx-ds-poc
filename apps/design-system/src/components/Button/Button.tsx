import { Button as ButtonMui} from '@mui/material';
import {ButtonProps} from '@mui/material/Button'


// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

const Button = (props: ButtonProps) => (
  <ButtonMui {...props}/>
)

export default Button
