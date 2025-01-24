import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Nav = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = isUserAuthenticated ? await getUser() : null;

    return (
        <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="flex w-10/12 mx-auto items-center justify-between flex-wrap ">
                <div className="text-2xl md:text-4xl font-bold text-teal-200">Blogs</div>
                <div className="">
                    <ul className="flex gap-4 py-4">
                        {/* Home Link */}
                        <li>
                            <Link href="/" className="text-white hover:bg-orange-700 p-2 rounded-lg">
                                Home
                            </Link>
                        </li>

                        {/* Profile Link */}
                        <li>
                            <Link href="/dashboard" className="text-white hover:bg-orange-700 p-2 rounded-lg">
                                Profile
                            </Link>
                        </li>

                        {/* Authenticated User View */}
                        {isUserAuthenticated ? (
                            <>

                                <li>
                                    <LogoutLink>
                                        <button className="p-2 px-4 text-white border rounded-lg hover:bg-white hover:text-orange-500 transition">
                                            Logout
                                        </button>
                                    </LogoutLink>
                                </li>
                            </>
                        ) : (
                            // Guest User View
                            <>
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
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
