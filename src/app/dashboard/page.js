import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <>
      {isUserAuthenticated && (
        <>
          <div className="text-6xl font-bold text-red-500 text-center py-20">
            Welcome To Your Profile
          </div>
          <div className="w-10/12 mx-auto text-center">
            <LogoutLink>
              <button className="bg-orange-600 text-white  rounded-xl p-2 px-4">
                Loguot
              </button>
            </LogoutLink>
          </div>
        </>
      )}
      {!isUserAuthenticated && <div>Login First</div>}
    </>
  );
};

export default page;
