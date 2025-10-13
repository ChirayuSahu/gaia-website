"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

type MenuItem = {
    label: string;
    href?: string;
    children?: SubMenuItem[];
};

type SubMenuItem = {
    label: string;
    href: string;
    isMore?: boolean;
};

const navigationItems: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Initiatives",
        children: [
            { label: "Invest in Regeneration", href: "/products/alpha" },
            { label: "Invest in Youth", href: "/products/beta" },
            { label: "Invest in Innovation", href: "/products/gamma" },
        ]
    },
    {
        label: "Resources",
        children: [
            { label: "Documentation", href: "/docs" },
            { label: "Blog", href: "/blog" },
            { label: "Training", href: "/training" },
        ]
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Benches for Change",
        href: "/"
    },
    {
        label: "AceIndia",
        href: "/"
    }
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed z-50 w-full bg-white border-b-1 border-green-700">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-20 text-green-700">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-green-700 hover:text-gray-700 transition-colors">
                            <Image src="/logo.png" alt="Gaia Logo" width={150} height={50} className='w-15' />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center space-x-1 text-green-700">
                        {navigationItems.map((item) => (
                            item.children ? (
                                <div key={item.label} className="relative group">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex items-center gap-1 font-medium"
                                        onMouseEnter={() => setOpenDropdown(item.label)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                        aria-expanded={openDropdown === item.label}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className="h-4 w-4 transition-transform duration-200 ease-in-out"
                                            style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </Button>

                                    <div
                                        className={`absolute left-0 w-52 py-2 bg-white border rounded-md shadow-lg z-20 
                      transition-all duration-200 ease-in-out transform origin-top
                      ${openDropdown === item.label
                                                ? 'opacity-100 translate-y-0 scale-100'
                                                : 'opacity-0 translate-y-1 scale-95 pointer-events-none'
                                            }`}
                                        onMouseEnter={() => setOpenDropdown(item.label)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        {item.children.map((subItem, idx) => (
                                            subItem.isMore ? (
                                                <div key={`divider-${idx}`} className="border-t my-1">
                                                    <div className="px-4 py-2 text-sm text-gray-500">More</div>
                                                </div>
                                            ) : (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 hover:text-black hover:ml-0.5 transition-all duration-200 text-sm"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Button
                                    key={item.label}
                                    variant="ghost"
                                    size="sm"
                                    className="font-medium"
                                    asChild
                                >
                                    <Link href={item.href || "/"}>
                                        {item.label}
                                    </Link>
                                </Button>
                            )
                        ))}
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((s) => !s)}
                        >
                            {mobileOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`md:hidden border-t bg-white transform transition-all duration-300 ease-in-out origin-top
          ${mobileOpen
                        ? 'opacity-100 max-h-[500px]'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 py-3 space-y-1 text-green-700">
                    {navigationItems.map((item) => (
                        item.children ? (
                            <DisclosureItem key={item.label} label={item.label}>
                                {item.children.filter(subItem => !subItem.isMore).map((subItem) => (
                                    <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className="block px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </DisclosureItem>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href || "/"}
                                className="block px-3 py-2 font-medium hover:bg-gray-50 transition-colors text-sm"
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <div className="pt-4">
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function DisclosureItem({ label, children }: { label: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="overflow-hidden">
            <Button
                variant="ghost"
                className="w-full flex items-center justify-between px-4 py-2 font-medium rounded-none"
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
            >
                <span>{label}</span>
                <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ease-in-out ${open ? 'rotate-180' : ''}`}
                />
            </Button>
            <div
                className={`transition-all duration-300 ease-in-out pl-2
          ${open
                        ? 'max-h-[300px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );
}