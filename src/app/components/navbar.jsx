
import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

const Nav = async () => {
    const { isAuthenticated, getUser } = await getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();

    return (
        <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">

            {/*  */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href={"/"} className="text-white hover:bg-orange-700 p-2 rounded-lg">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/dashboard"} className="text-white hover:bg-orange-700 p-2 rounded-lg">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <RegisterLink>
                                    <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                        Sign Up
                                    </button>
                                </RegisterLink>
                            </li>
                            <li>
                                <LoginLink>
                                    <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                        Sign In
                                    </button>
                                </LoginLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">AK_Blogs</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href={"/"} className="text-white hover:bg-orange-700 p-2 rounded-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard"} className="text-white hover:bg-orange-700 p-2 rounded-lg">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <RegisterLink>
                                <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                    Sign Up
                                </button>
                            </RegisterLink>
                        </li>
                        <li>
                            <LoginLink>
                                <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                    Sign In
                                </button>
                            </LoginLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Nav;
