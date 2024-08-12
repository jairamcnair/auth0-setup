'use client'
import React from "react"
import { useUser } from '@auth0/nextjs-auth0/client'

const SignUpButton = () => {
    return(
        <a href="/api/auth/signup">Signup</a>
    )
}

export default SignUpButton;
