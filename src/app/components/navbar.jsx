
import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

const Nav = async () => {
    const { isAuthenticated, getUser } = await getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();

    return (
        <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">

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

        </div>
    );
};

export default Nav;
