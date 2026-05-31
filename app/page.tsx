import { auth0 } from '@/app/lib/auth0';

export default async function Home() {
  
  const session = await auth0.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-black">
      <h1 className="text-4xl font-bold mb-8">
Welcome to the Quiblo online course site!</h1>

      {session ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl mb-4">Hello, <span className="font-semibold text-blue-600">{session.user.name}</span> 👋</p>
          <a
            href="/auth/logout"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition-colors"
          >
            Log Out
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4 text-gray-600">To get started with shopping, please log in.</p>
          <a
            href="/auth/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
          >
            Log In
          </a>
        </div>
      )}
    </main>
  );
}