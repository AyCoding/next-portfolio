import './globals.css'
import Aside from "@/components/Aside";
import { Analytics } from '@vercel/analytics/react';
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
        </body>
        </html>
    );
};

export default RootLayout;