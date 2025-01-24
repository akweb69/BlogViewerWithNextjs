import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { isAuthenticated, user } = await getKindeServerSession(); // Assuming 'user' contains user details
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl mx-auto py-16 px-4">
        {isUserAuthenticated ? (
          <>
            <div className="text-4xl font-semibold text-center text-orange-400 mb-8">
              Welcome to Your Profile
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg text-center mb-8">
              <p className="text-lg text-gray-300 mb-6">
                You are successfully logged in. Here are your details:
              </p>
              <div className="text-left text-gray-400 mb-6">
                <p className="text-xl font-semibold">Name: {user?.name}</p>
                <p className="text-xl font-semibold">Email: {user?.email}</p>
              </div>
              <LogoutLink>
                <button className="bg-orange-600 text-white font-semibold rounded-lg py-2 px-6 shadow-md transition-transform transform hover:scale-105 hover:bg-orange-500">
                  Logout
                </button>
              </LogoutLink>
            </div>
          </>
        ) : (
          <div className="text-2xl text-center text-gray-400">
            Please log in to access your profile.
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
