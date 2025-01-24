import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const Nav = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user);
    return (
        <div className="w-full bg-orange-500 ">
            <div className="w-10/12 mx-auto py-2 flex  justify-between items-center gap-5 ">
                <div className="text-2xl font-bold text-white">Blogs</div>
                <div className="flex gap-2">
                    <Link href={"/"} className="p-2 px-4 rounded-lg border">Home</Link>
                    <Link href={"/dashboard"} className="p-2 px-4 rounded-lg border">Profile</Link>
                    <LoginLink>
                        <button className="p-2 px-4 ">
                            SignIn
                        </button>
                    </LoginLink>
                    <RegisterLink>
                        <button className="p-2 px-4 ">
                            SignUp
                        </button>
                    </RegisterLink>

                </div>
            </div>
        </div>
    );
};

export default Nav;