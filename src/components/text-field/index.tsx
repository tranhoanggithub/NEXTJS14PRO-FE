// ** Icon Imports
import { styled } from '@mui/material'
import { TextFieldProps, TextField } from '@mui/material'
import { relative } from 'path'

const TextFieldStyle = styled(TextField)<TextFieldProps>(({ theme }) => {
    console.log('theme', { theme })
    return {
        "&.MuiInputLabel-root": {
            transform: "none",
            lineHeight: "1.2",
            position: "relative",
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.body2.fontSize,
        },
        "&.MuiInputBase-root": {
            borderRadius: 8,
            backgroundColor: "transparent !important",
            border: `1px solid ${theme.palette.customColors.main},0.2`,
            transition: theme.transitions.create(['border-color', 'box-shadow'], {
                duration: theme.transitions.duration.shortest,
            })
        },
        "&.MuiFormHelperText-root.Mui-error": {
            marginTop: "4px"
        }
    }
})

const CustomTextField = (props: TextFieldProps) => {
    const { size = 'small', InputLabelProps, variant = "filled", ...rests } = props
    return <TextFieldStyle size={size} variant={variant} InputLabelProps={{ ...InputLabelProps, shrink: true }} {...rests} />
}

export default CustomTextField
