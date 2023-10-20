import './globals.css'
import Aside from "@/components/Aside";
import { Analytics } from '@vercel/analytics/react';
import React, {ReactNode} from "react";
import GoogleAnalytics from '@/components/GoogleAnalytics';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="fr">
        <head>
            <GoogleAnalytics GA_MEASUREMENT_ID='G-HB9TKGVWWK'/>
        </head>
        <body>
        {children}
        <Aside />
        <Analytics />
        </body>
        </html>
    );
};

export default RootLayout;