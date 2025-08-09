
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import { useGoogleLogin} from '@react-oauth/google';
import { googleAuth } from '../api';

export default function Register() {    
  const responseGoogle= async (authResult)=>{
    try {
      if(authResult['code']){
        const result=await googleAuth(authResult['code'])
        const {email,name,image}=result.data.user;
        console.log('result-data-user..',result.data.user)
      }
    } catch (error) {
      console.error('error while requesting google code :',error)
    }
  }

   
  const googleLogin=useGoogleLogin({
      onSuccess:responseGoogle,
      onError:responseGoogle,
      flow:'auth-code'
  })
    
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8] px-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-2">Create your free account</h2>
          <p className="text-gray-600 mb-6">No credit card required. Upgrade anytime.</p>

          {/* Email input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {/* Validation text (static for now) */}
          <p className="text-red-500 text-sm mb-4">Please enter a valid email address.</p>

          {/* Continue with Email */}
          <button className="w-full bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-semibold py-3 rounded-md mb-4 transition">
            Continue with email
          </button>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button onClick={googleLogin} className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md mb-3 cursor-pointer hover:bg-gray-100 transition">
            <FcGoogle className="text-xl mr-2" />
            Continue with Google
          </button>

          {/* Microsoft Sign In */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition">
            <FaMicrosoft className="text-lg mr-2 text-blue-700" />
            Continue with Microsoft
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-500 mt-6">
            Continue with Google or Microsoft to connect your calendar.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account? <span className="text-orange-600 font-medium cursor-pointer hover:underline"><Link to="/login">Log In →</Link></span>
          </p>
        </div>

        {/* Right: Feature Panel */}
        <div className="w-full md:w-1/2 bg-orange-50 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium w-max mb-4">
            Try Teams plan free
          </span>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Explore premium features with your free 14-day Teams plan trial
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔ Multi-person and co-hosted meetings</li>
            <li>✔ Round Robin meeting distribution</li>
            <li>✔ Meeting reminders, follow-ups, and notifications</li>
            <li>✔ Connect payment tools like PayPal or Stripe</li>
            <li>✔ Remove Calendly branding</li>
          </ul>
          <div className="mt-6 text-sm text-gray-400">
            Join leading companies using the #1 scheduling tool
            <div className="flex space-x-6 mt-3 opacity-70">
              <span>Dropbox</span>
              <span>Ancestry</span>
              <span>Zendesk</span>
              <span>loren8</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

