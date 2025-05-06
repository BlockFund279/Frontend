'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { LoginFormData } from '@/app/utils/types';
import { validateLoginForm } from '@/app/utils/validation';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateLoginForm(formData);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            // Redirect to dashboard or home page after successful login
            // router.push('/dashboard');
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Login failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#e5e7eb]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">Sign In</h2>
                <p className="text-center text-[#64748b] mb-6">
                    Enter your credentials to access your account
                </p>

                {errorMessage && (
                    <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            } rounded-md shadow-sm focus:ring-[#000000] focus:border-[#000000]`}
                            placeholder="Enter your email"
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-[#000000]">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                            } rounded-md shadow-sm focus:ring-[#000000] focus:border-[#000000]`}
                            placeholder="Enter your password"
                            aria-describedby={errors.password ? "password-error" : undefined}
                        />
                        {errors.password && (
                            <p id="password-error" className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#1249bf] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link href="/auth/forgot-password" className="text-sm text-[#1249bf] hover:underline">
                        Forgot your password?
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link href="/auth/sign-up" className="text-[#1249bf] hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;