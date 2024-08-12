'use client'
import React from "react"
import { useUser } from '@auth0/nextjs-auth0/client'
import SignUpButton from "./SignUpButton"
import LogInButton from "./LogInButton"
import LogOutButton from "./LogOutButton"


const NavBar = () => {

   const { user, error, isLoading } = useUser();

  
    return(
        <div className="py-4 flex w-full justify-between bg-white">
            <div className="flex w-1/2 justify-between">
                <a href="/" className="button__login"> Home </a>
                <a href="/profile" className="button__login"> Server Protected Profile </a>
                <a href="/middleware" className="button__login"> Middleware Protected </a>
                <a href="/auth-protected" className="button__login"> Auth Protected </a>
                <a href="/api/data" target="_black" className="button__login"> Protected API </a>
            </div>
            <div className="flex gap-4">
                {!user && !isLoading &&  (
                    <>
                        <SignUpButton />
                        <LogInButton />
                    </>
                )}

                {user && !isLoading && (
                    <>
                        <LogOutButton />
                    </>
                )}
            </div>
        </div>

    )
}

export default NavBar;