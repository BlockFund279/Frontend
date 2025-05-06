import React from 'react';

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#e5e7eb]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-2 text-[#000000]">Sign Up</h1>
                <p className="text-center text-[#64748b] mb-6">
                    Create an account to join BlockFund
                </p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#000000]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-[#e2e8f0] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-[#e2e8f0] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-[#000000]">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-[#e2e8f0] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-[#000000]">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="mt-1 block w-full px-3 py-2 border border-[#e2e8f0] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1249bf] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <a href="/auth/log-in" className="text-[#1249bf] hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;