'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Services', href: '/services' },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:underline ${pathname === item.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
