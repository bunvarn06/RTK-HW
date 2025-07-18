'use client'
import { useForm } from "react-hook-form"
import { Heart, User, Mail, Lock, CheckCircle } from "lucide-react"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmed_password: string;
}

export default function FormComponent() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmed_password: ""
    }
  });

  const password = watch("password");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-3 rounded-full">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Form Validation
          </h1>
          <p className="text-gray-600 mt-2">Create your account </p>
        </div>



        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Enter your first name"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-gray-50/50 placeholder-gray-400 text-gray-700 outline-none"
            />
            {errors.firstName && (
              <p className="text-pink-500 text-sm mt-1 ml-2">{errors.firstName.message}</p>
            )}
          </div>


          {/* Last Name */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Enter your last name"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-gray-50/50 placeholder-gray-400 text-gray-700 outline-none"
            />
            {errors.lastName && (
              <p className="text-pink-500 text-sm mt-1 ml-2">{errors.lastName.message}</p>
            )}
          </div>



          {/* Email */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-gray-50/50 placeholder-gray-400 text-gray-700 outline-none"
            />
            {errors.email && (
              <p className="text-pink-500 text-sm mt-1 ml-2">{errors.email.message}</p>
            )}
          </div>



          {/* Password */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              placeholder="Enter your password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-gray-50/50 placeholder-gray-400 text-gray-700 outline-none"
            />
            {errors.password && (
              <p className="text-pink-500 text-sm mt-1 ml-2">{errors.password.message}</p>
            )}
          </div>



          {/* Confirm Password */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <input
              type="password"
              {...register("confirmed_password", { 
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match"
              })}
              placeholder="Confirm your password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all duration-300 bg-gray-50/50 placeholder-gray-400 text-gray-700 outline-none"
            />
            {errors.confirmed_password && (
              <p className="text-pink-500 text-sm mt-1 ml-2">{errors.confirmed_password.message}</p>
            )}
          </div>

          

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 rounded-2xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
           Register
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-pink-600 hover:text-pink-700 font-semibold transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}