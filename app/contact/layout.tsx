import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Contact Us - Eclipse 2025",
    description:
        "Get in touch with the Eclipse 2025 organizing team. Contact information, inquiry form, and frequently asked questions for Curtin University Colombo's inaugural sports meet.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}