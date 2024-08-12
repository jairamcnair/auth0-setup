'use client'
import React from "react"
import { useUser } from '@auth0/nextjs-auth0/client'

const LogOutButton = () => {
    return(
        <a href="/api/auth/logout">Logout</a>
    )
}

export default LogOutButton;
