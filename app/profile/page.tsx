import { auth0 } from '@/app/lib/auth0';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  
  const session = await auth0.getSession();

  if (!session) {
    redirect('/auth/login');
  }

  const user = session.user;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
        <div className="bg-blue-600 h-32 p-6 text-white flex items-end">
          <h1 className="text-3xl font-bold">User Profile</h1>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1 p-3 bg-gray-100 rounded-md border border-gray-200 text-gray-800">
                {user.name}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 p-3 bg-gray-100 rounded-md border border-gray-200 text-gray-800">
                {user.email}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2 border-b pb-2">Delivery Address</h3>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
              <input type="text" defaultValue="Atatürk Mah. Cumhuriyet Cad." className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" defaultValue="Istanbul" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input type="text" defaultValue="34000" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" defaultValue="Turkey" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>

          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors">
              Save Information
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}