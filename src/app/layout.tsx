import './globals.css'
import Aside from "@/components/Aside";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'
import React, {ReactNode} from "react";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="fr">
        <body>
        {children}
        <Aside />
        <Analytics />
        <GoogleAnalytics gaId="G-6HE0B2SXH4" />
        </body>
        </html>
    );
};

export default RootLayout;