'use client';

import React, { useCallback, useContext, useEffect, useRef } from 'react';
import AppTopbar from '@/app/includes/AppTopbar';
import AppRightMenu from '@/app/includes/AppRightMenu';
import AppSidebar from '@/app/includes/AppSidebar';
import AppBreadcrumb from '@/app/includes/AppBreadcrumb';
import AppFooter from '@/app/includes/AppFooter';
import type { AppTopbarRef, ChildContainerProps } from '@/app/utilities/types';

// const topbarRef = useRef<AppTopbarRef>(null);

// import SideNav from '@/app/ui/dashboard/sidenav';
export default function MainLayout({ children }: { children: React.ReactNode }) {
    const sidebarRef = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => {
        // if (!layoutState.anchored) {
        //     if (timeout) {
        //         clearTimeout(timeout);
        //         timeout = null;
        //     }
        //     setLayoutState((prevLayoutState) => ({
        //         ...prevLayoutState,
        //         sidebarActive: true
        //     }));
        // }

        console.log('Mouse enter');
    };

    const onMouseLeave = () => {
        // if (!layoutState.anchored) {
        //     if (!timeout) {
        //         timeout = setTimeout(
        //             () =>
        //                 setLayoutState((prevLayoutState) => ({
        //                     ...prevLayoutState,
        //                     sidebarActive: false
        //                 })),
        //             300
        //         );
        //     }
        // }

        console.log('Mouse leave');
    }

    return (
        <div className="layout-container layout-topbar-indigo layout-menu-light layout-menu-profile-end layout-drawer">


            {/* <AppTopbar ref={topbarRef} /> */}
            <AppTopbar />

            <AppRightMenu />

            <div ref={sidebarRef} className="layout-sidebar" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <AppSidebar />
            </div>

            <div className="layout-content-wrapper">
                <div>
                    <AppBreadcrumb></AppBreadcrumb>
                    <div className="layout-content">{children}</div>
                </div>
                <AppFooter></AppFooter>
            </div>
        </div>
    );
}
