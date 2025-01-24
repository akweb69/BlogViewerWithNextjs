"use client";
import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Nav = async () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="w-full max-w-7xl mx-auto py-4 px-6 flex justify-between items-center gap-4">
                <div className="text-2xl font-bold text-white">AK_Blogs</div>

                <div className="flex gap-2 items-center">
                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-2 items-center">
                        <Link href={"/"} className="p-2 px-4 rounded-lg text-white hover:bg-orange-600 transition-colors">
                            Home
                        </Link>
                        <Link href={"/dashboard"} className="p-2 px-4 rounded-lg text-white hover:bg-orange-600 transition-colors">
                            Profile
                        </Link>

                        {/* Conditional rendering for Login/Logout */}
                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-white">Welcome, {user.name}</span>
                                <LogoutLink>
                                    <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                        Logout
                                    </button>
                                </LogoutLink>
                            </div>
                        ) : (
                            <>
                                <LoginLink>
                                    <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                        Sign In
                                    </button>
                                </LoginLink>
                                <RegisterLink>
                                    <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                        Sign Up
                                    </button>
                                </RegisterLink>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-white hover:bg-orange-600 rounded-full"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and times icon */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center bg-orange-600 py-4 space-y-4">
                    <Link href={"/"} className="text-white hover:bg-orange-700 p-2 rounded-lg">
                        Home
                    </Link>
                    <Link href={"/dashboard"} className="text-white hover:bg-orange-700 p-2 rounded-lg">
                        Profile
                    </Link>
                    {user ? (
                        <LogoutLink>
                            <button className="text-white p-2 px-4 rounded-lg border hover:bg-white hover:text-orange-500">
                                Logout
                            </button>
                        </LogoutLink>
                    ) : (
                        <>
                            <LoginLink>
                                <button className="text-white p-2 px-4 rounded-lg border hover:bg-white hover:text-orange-500">
                                    Sign In
                                </button>
                            </LoginLink>
                            <RegisterLink>
                                <button className="text-white p-2 px-4 rounded-lg border hover:bg-white hover:text-orange-500">
                                    Sign Up
                                </button>
                            </RegisterLink>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Nav;
