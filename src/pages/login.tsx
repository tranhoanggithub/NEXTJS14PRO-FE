'use client'
import Head from 'next/head'
import Button from '@mui/material/Button'
import CustomTextField from 'src/components/text-field'
import { Box } from '@mui/material'
import { NextPage } from 'next/types'
import exp from 'constants'
import LoginPage from 'src/views/pages/login'

type TProp = {}

const Login: NextPage<TProp> = () => {
        return <LoginPage/>
}

export default Login