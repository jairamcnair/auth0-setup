// the profile folder is for after the user is logged in
// this page.jsx file is for after the user is logged in

import React from "react"

import { getSession } from '@auth0/nextjs-auth0';
import UserServer from './components/UserServer';
import UserClient from "./components/UserClient";
import { redirect } from "next/navigation";

const Profile = async () => {

    const session = await getSession();
    const user = session?.user;
    
    if(!user) {
        redirect("/");
    }
    
    return(
        <div className="flex items-center justify-center w-full mt-10">
            <div className="flex items-center w-full justify-between">
                <div>
                    <h1 className="text2xl  mb-4"> Client Component</h1>
                    <UserClient/>
                </div>
                <div>
                    <h1 className="text2xl  mb-4"> Server Component</h1>
                    <UserServer/>
                </div>
            </div>
        </div>
    )
}

export default Profile;