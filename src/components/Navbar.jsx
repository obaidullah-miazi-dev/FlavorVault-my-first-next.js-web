import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-2 flex items-center w-10/12 mx-auto justify-between">
      <Image src="/images/Logo.png" alt="logo" width={80} height={80} />
      <div className="flex justify-between items-center gap-12 text-orange-600">
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/addRecipes">Add Recipes</Link>
        {/* <Link href="/manageRecipes">Manage Recipes</Link> */}
        <Link href='/login'><Button className={`rounded-full`}>Log In</Button></Link>
        <Link href='/register'><Button className={`rounded-full`}>Register</Button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
