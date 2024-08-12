import Image from "next/image";
import React from "react"
import { getSession } from '@auth0/nextjs-auth0';


// this is the server component
export default async function Home() {

  const session = await getSession();
  const user = session?.user;
  console.log(user);

  return (
    <main className="flex justify-center items-center">
      <div className="text-3xl">
      Home
      </div>
    </main>
  );
}
