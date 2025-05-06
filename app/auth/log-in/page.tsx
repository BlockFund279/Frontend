import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#e5e7eb]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">Sign In</h2>
                <p className="text-center text-[#64748b] mb-6">
                    Enter your credentials to access your account
                </p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000000] focus:border-[#000000]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-[#000000]">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000000] focus:border-[#000000]"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1249bf] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-[#1249bf] hover:underline">
                        Forgot your password?
                    </a>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <a href="/auth/sign-up" className="text-[#1249bf] hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;