'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItemsData } from '@/data/navigation';

const NavLink = ({ children, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={`py-2 ${
                isActive ? 'text-blue' : ''
            }`}
        >
            {children}
        </Link>
    );
};

const Header = () => {
    return (
        <header>
            <h1>
                <Link href={'/'}>Logo</Link>
            </h1>
            <ul>
                {navItemsData.map(({ href, label }) => (
                    <li key={href}>
                        <NavLink href={href}>
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
