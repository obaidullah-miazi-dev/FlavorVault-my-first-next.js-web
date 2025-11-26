"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X, ChevronDown, LogOut, ChefHat } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter()

  const user = session?.user;

  const handleLogOut = () => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
        setProfileOpen(false);
        router.push('/')
        Swal.fire({
          title: "Loged Out",
          text: "Loged Out Successfully",
          icon: "success",
          showConfirmButton: false
        });
      }
    });
    
  };

  return (
    <nav className="bg-white/15 backdrop-blur-xl shadow-md sticky top-0 z-50">
      <div className="px-6 py-1 mx-auto w-11/12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-orange-600 font-medium">
          <Link href="/" className="hover:text-orange-700 transition">
            Home
          </Link>
          <Link href="/recipes" className="hover:text-orange-700 transition">
            Recipes
          </Link>
          <Link href="/addRecipes" className="hover:text-orange-700 transition">
            Add Recipes
          </Link>

          {/* drop dowwn  */}
          {session ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 hover:bg-orange-50 px-4 py-2 rounded-full transition"
              >
                {/* Profile Picture */}
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt="Profile"
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border-2 border-orange-600"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    {user?.name?.[0] || "U"}
                  </div>
                )}

                <span className="font-semibold text-gray-800">
                  {user?.name || user?.email?.split("@")[0]}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3">
                  <Link
                    href="/manageRecipes"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-4 px-6 py-3 hover:bg-orange-50 text-gray-800 transition"
                  >
                    <ChefHat size={20} className="text-orange-600" />
                    <span className="font-medium">Manage Recipes</span>
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-4 px-6 py-3 hover:bg-red-50 text-gray-800 w-full text-left transition"
                  >
                    <LogOut size={20} className="text-red-600" />
                    <span className="font-medium text-red-600">Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /*if the user Not Logged In */
            <>
              <Link href="/login">
                <Button className="rounded-full px-6 py-2.5">Log In</Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full px-6 py-2.5 bg-orange-600 hover:bg-orange-700">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-orange-600"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-5 text-orange-600 font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3"
            >
              Home
            </Link>
            <Link
              href="/recipes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3"
            >
              Recipes
            </Link>
            <Link
              href="/addRecipes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3"
            >
              Add Recipes
            </Link>

            {session ? (
              <>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user?.name?.[0] || "U"}
                      </div>
                    )}
                    <span className="font-bold text-gray-800">
                      {user?.name || user?.email}
                    </span>
                  </div>

                  <Link
                    href="/manageRecipes"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 hover:text-orange-700"
                  >
                    Manage Recipes
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-medium mt-3"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full py-3">Log In</Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full py-3 bg-orange-600">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
