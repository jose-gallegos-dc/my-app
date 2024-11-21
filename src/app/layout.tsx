'use client';
import '@/app/styles/layout/layout.scss';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';

// import '@/app/styles/base/base.scss';

import '@/app/styles/demo/Demos.scss';
import '@/app/styles/themes/theme-light/indigo/theme.css';

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            {/* <head>
                <link id="theme-link" href={`/styles/themes/theme-light/indigo/theme.css`} rel="stylesheet"></link>
            </head> */}
            <body>
                {children}
            </body>
        </html>
    );
}
