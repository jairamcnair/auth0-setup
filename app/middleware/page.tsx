"use client"
import React from "react"
import { useUser } from '@auth0/nextjs-auth0/client'

// this is the server component
const Protected = async () => {


  return (
    <div className="flex items-center justify-center text-2xl">
        Protected
    </div>
  );
}
export default Protected;
