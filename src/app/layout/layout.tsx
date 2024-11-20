'use client';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import '@/app/styles/base/base.scss';

const Layout = (props: ChildContainerProps) => {
    return (
        <React.Fragment>
            <div className={classNames('layout-container', containerClassName)}>
                <AppTopbar ref={topbarRef} />
                <AppRightMenu />
                <div ref={sidebarRef} className="layout-sidebar" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <AppSidebar />
                </div>
                <div className="layout-content-wrapper">
                    <div>
                        <AppBreadcrumb></AppBreadcrumb>
                        <div className="layout-content">{props.children}</div>
                    </div>
                    <AppFooter></AppFooter>
                </div>
                <AppConfig />
                <div className="layout-mask"></div>
            </div>
        </React.Fragment>
    );
}


export default Layout;