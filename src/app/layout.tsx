'use client';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import '@/app/styles/base/base.scss';

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            {/* <head>
                <link id="theme-link" href={`/theme/theme-light/indigo/theme.css`} rel="stylesheet"></link>
            </head> */}
            <body>
                {children}
            </body>
        </html>
    );
}
