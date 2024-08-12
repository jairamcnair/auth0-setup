'use client'
import React from "react"
import { useUser } from '@auth0/nextjs-auth0/client'

const LogInButton = () => {
    return(
        <a href="/api/auth/login">Login</a>
    )
}

export default LogInButton;
