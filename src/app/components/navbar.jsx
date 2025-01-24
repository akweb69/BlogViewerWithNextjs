// This is a server-side function (No `useState` here)
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// This will run on the server-side to fetch user data
export async function getServerSideProps() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();  // Fetch user info from Kinde session

    return {
        props: { user },  // Pass user data as props to the component
    };
}

// This is a client-side component (use `useState` here)
import { useState } from "react";
import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = ({ user }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // useState is used here

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
                        <button onClick={toggleMobileMenu} className="p-2 text-white hover:bg-orange-600 rounded-full">
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
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
