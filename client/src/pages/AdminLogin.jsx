import axios from 'axios';
import { toast } from 'react-toastify';
import { useActionData,Form,redirect } from "react-router-dom";

export const action=async ({request})=>{
    const formData=await request.formData();
    const Data=Object.fromEntries(formData);

    try {
      const {data}=await axios.post('/api/v1/auth/admin',Data,{ withCredentials: true })
      if(data){

        toast.success(`${data.msg}`);
        return redirect('/admin-dashboard')
      }
    } catch (error) {
       toast.error(error?.response?.data?.msg);
    }
  }

export default function AdminLogin() {
    const data=useActionData()
    console.log(data);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#fbfaf8] to-[#fff7f0] px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Admin Login
        </h2>
        <Form method='post' className="space-y-6" >
          <div>
            <label className="block text-gray-700 text-base font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-400 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold text-lg hover:text-orange-600 hover:bg-orange-100 border border-orange-500 transition cursor-pointer"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}


