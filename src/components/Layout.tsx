import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex justify-center py-20 px-6 sm:px-12">
            <div className="w-full max-w-2xl">
                {children}
            </div>
        </div>
    );
};

export default Layout;
