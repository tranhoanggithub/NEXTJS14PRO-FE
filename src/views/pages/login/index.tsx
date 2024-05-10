
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// ** React
import { useContext, useEffect, useRef, useState } from 'react'

// ** Mui
import {
    Box,
    Button,
    Checkbox,
    CssBaseline,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Typography,
    useTheme
} from '@mui/material'

// ** Components
import CustomTextField from 'src/components/text-field'
import Icon from 'src/components/Icon'

// ** form
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Config
import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'

// ** Images
import LoginDark from '/public/images/login-dark.png'
import LoginLight from '/public/images/login-light.png'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

type TProps = {}

type TDefaultValue = {
    email: string
    password: string
}

const LoginPage: NextPage<TProps> = () => {
    // State
    const [showPassword, setShowPassword] = useState(false)
    const [isRemember, setIsRemember] = useState(true)

    // ** Translate
    const { t } = useTranslation()

    // ** context


    // ** theme
    const theme = useTheme()

    // ** Hooks


    const schema = yup.object().shape({
        email: yup.string().required(t('Required_field')).matches(EMAIL_REG, t("Rules_email")),
        password: yup
            .string()
            .required(t('Required_field'))
            .matches(PASSWORD_REG, t("Rules_password"))
    })

    const defaultValues: TDefaultValue = {
        email: '',
        password: ''
    }

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError
    } = useForm({
        defaultValues,
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })






    return (
        <>

            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: theme.palette.background.paper,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '40px'
                }}
            >
                <Box
                    display={{
                        xs: 'none',
                        sm: 'flex'
                    }}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.customColors.bodyBg,
                        height: '100%',
                        minWidth: '50vw'
                    }}
                >
                    <Image
                        src={theme.palette.mode === 'light' ? LoginLight : LoginDark}
                        alt='login image'
                        style={{
                            height: 'auto',
                            width: 'auto'
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography component='h1' variant='h5'>
                            {t("Login")}
                        </Typography>
                        <form autoComplete='off' noValidate>
                            <Box sx={{ mt: 2, width: '300px' }}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <CustomTextField
                                            required

                                            fullWidth
                                            label={t('Email')}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder={t('Enter_email')}
                                            error={Boolean(errors?.email)}
                                            helperText={errors?.email?.message}
                                        />
                                    )}
                                    name='email'
                                />
                            </Box>

                            <Box sx={{ mt: 2, width: '300px' }}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <CustomTextField
                                            required
                                            fullWidth

                                            label={t('Password')}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder={t('Enter_password')}
                                            error={Boolean(errors?.password)}
                                            helperText={errors?.password?.message}
                                            type={showPassword ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='end'>
                                                        <IconButton edge='end' onClick={() => setShowPassword(!showPassword)}>
                                                            {showPassword ? (
                                                                <Icon icon='material-symbols:visibility-outline' />
                                                            ) : (
                                                                <Icon icon='ic:outline-visibility-off' />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                    name='password'
                                />
                            </Box>

                            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name='rememberMe'
                                            checked={isRemember}
                                            color='primary'
                                        />
                                    }
                                    label={t('Remember_me')}
                                />
                            </Box>
                            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                <Typography>{t('You_have_account')}</Typography>

                            </Box>
                            <Typography sx={{ textAlign: 'center', mt: 2, mb: 2 }}>{t("Or")}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} >

                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage