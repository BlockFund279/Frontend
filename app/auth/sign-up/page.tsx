'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { validateSignupForm } from '@/app/utils/validation';
import { SignupFormData } from '@/app/utils/types';


const SignUpPage = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateSignupForm(formData);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            // Your API call logic here
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Signup failed');

            setSuccessMessage('Account created successfully! Redirecting...');
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch {
            setErrors({ form: 'Signup failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#e5e7eb]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-2 text-[#000000]">Sign Up</h1>
            <p className="text-center text-[#64748b] mb-6">
                Create an account to join BlockFund
            </p>

            {errors.form && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md">
                    {errors.form}
                </div>
            )}

            {successMessage && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-md">
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-[#000000]">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.name ? 'border-red-500' : 'border-[#e2e8f0]'
                        } rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]`}
                        placeholder="Enter your name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.email ? 'border-red-500' : 'border-[#e2e8f0]'
                        } rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]`}
                        placeholder="Enter your email"
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-[#000000]">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.password ? 'border-red-500' : 'border-[#e2e8f0]'
                        } rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]`}
                        placeholder="Enter your password"
                        aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    {errors.password && (
                        <p id="password-error" className="text-red-500 text-sm mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-[#000000]">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.confirmPassword ? 'border-red-500' : 'border-[#e2e8f0]'
                        } rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000]`}
                        placeholder="Confirm your password"
                        aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
                    />
                    {errors.confirmPassword && (
                        <p id="confirm-password-error" className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1249bf] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
                Already have an account?{' '}
                <Link href="/auth/log-in" className="text-[#1249bf] hover:underline">
                    Sign In
                </Link>
            </p>
        </div>
    </div>
    );
};

export default SignUpPage;