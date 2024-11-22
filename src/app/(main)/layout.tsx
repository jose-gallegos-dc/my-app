// import SideNav from '@/app/ui/dashboard/sidenav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        //     <div className="w-full flex-none md:w-64">
        //         {/* Agrega SideNav si es necesario */}
        //     </div>
        //     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        // </div>

        <div className="layout-container layout-topbar-indigo layout-menu-light layout-menu-profile-end layout-drawer">
            <div className="layout-topbar">
                <div className="layout-topbar-start">
                    <a className="layout-topbar-logo" href="/">
                        <svg width="167" height="32" viewBox="0 0 167 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="layout-topbar-logo-full"><path d="M76.5469 5.25V20.7812C76.5365 22.3125 76.1979 23.6458 75.5312 24.7812C74.8646 25.9167 73.9219 26.7917 72.7031 27.4062C71.4948 28.0104 70.1042 28.3125 68.5312 28.3125C66.1354 28.3125 64.2135 27.6615 62.7656 26.3594C61.3281 25.0469 60.5833 23.2344 60.5312 20.9219V5.25H62.4375V20.6406C62.4375 22.5573 62.9844 24.0469 64.0781 25.1094C65.1719 26.1615 66.6562 26.6875 68.5312 26.6875C70.4062 26.6875 71.8854 26.1562 72.9688 25.0938C74.0625 24.0312 74.6094 22.5521 74.6094 20.6562V5.25H76.5469Z" fill="var(--topbar-item-text-color)"></path><path d="M83.8438 26.375H95.0781V28H81.9062V5.25H83.8438V26.375Z" fill="var(--topbar-item-text-color)"></path><path d="M109.906 6.89062H102.109V28H100.188V6.89062H92.4062V5.25H109.906V6.89062Z" fill="var(--topbar-item-text-color)"></path><path d="M115.938 28H114.016V5.25H115.938V28Z" fill="var(--topbar-item-text-color)"></path><path d="M124.672 5.25L133.062 25.3281L141.484 5.25H144.047V28H142.125V18.0938L142.281 7.9375L133.812 28H132.328L123.891 8.01562L124.047 18.0312V28H122.125V5.25H124.672Z" fill="var(--topbar-item-text-color)"></path><path d="M162.375 21.625H152.047L149.703 28H147.688L156.297 5.25H158.125L166.734 28H164.734L162.375 21.625ZM152.641 19.9844H161.766L157.203 7.59375L152.641 19.9844Z" fill="var(--topbar-item-text-color)"></path><path fillRule="evenodd" clipRule="evenodd" d="M39.9709 8.57017C39.9112 8.42729 39.7717 8.33484 39.617 8.33484H37.5093L38.657 6.95037C38.752 6.83653 38.7711 6.67837 38.7083 6.54466C38.6455 6.41095 38.5106 6.32537 38.362 6.32537H15.2326L8.67361 0.10518C8.54643 -0.0147766 8.35336 -0.0346421 8.20625 0.0585729L4.52643 2.36221L4.52336 2.36526L4.51953 2.36679L0.17315 5.21978C0.162424 5.22666 0.157061 5.23735 0.147101 5.24576C0.125649 5.26257 0.107261 5.28091 0.0904059 5.30154C0.0750829 5.31987 0.0628245 5.33821 0.0513322 5.35884C0.0390738 5.381 0.0306461 5.40316 0.0229846 5.42684C0.015323 5.45129 0.0107261 5.47574 0.00766152 5.50172C0.00689537 5.51471 0 5.5254 0 5.53916C0 5.55138 0.00536306 5.56055 0.00689537 5.57278C0.00919382 5.59799 0.0145569 5.62168 0.0222184 5.64689C0.0298799 5.6721 0.0383076 5.69579 0.0513322 5.71948C0.0566952 5.72941 0.0574614 5.74011 0.0635906 5.75004C0.0689537 5.75844 0.0789137 5.7615 0.0850429 5.76914C0.111858 5.80352 0.14327 5.83179 0.180046 5.85471C0.193836 5.86312 0.204563 5.87382 0.218353 5.88069C0.268919 5.90514 0.324082 5.92119 0.383842 5.92119H5.61743L6.79883 8.86052L6.80036 8.86281V8.8651L14.4864 27.2292L9.94925 31.3353C9.83203 31.4415 9.79219 31.608 9.84965 31.7555C9.90635 31.903 10.0489 32 10.2067 32H16.7389C16.7895 32 16.8393 31.9893 16.886 31.9702C16.9327 31.9511 16.9749 31.9228 17.0101 31.8877L20.444 28.4502C20.4486 28.4555 20.4501 28.4624 20.4555 28.4678L23.707 31.8808C23.7798 31.958 23.8756 31.9794 23.9867 32C29.8899 31.9671 38.8462 31.9373 39.2676 31.9809C39.3074 31.9939 39.348 32 39.3886 32C39.5197 32 39.6476 31.9335 39.7189 31.8182C39.9403 31.459 39.9387 31.4552 28.6265 20.2603L39.8874 8.98888C39.9977 8.87733 40.0299 8.71305 39.9709 8.57017ZM37.5483 7.08867L36.5163 8.33484H17.3518L16.0379 7.08867H37.5483ZM8.36178 0.862361L16.2409 8.33484H7.41329L5.20447 2.83898L8.36178 0.862361ZM1.66178 5.15636L4.54864 3.2615L5.3102 5.15636H1.66178ZM21.0102 27.9406C21.0002 27.9299 20.9864 27.9253 20.9757 27.9169L23.7201 25.1701V30.7844L21.0102 27.9406ZM38.5045 31.213C37.058 31.1916 33.464 31.1825 24.4862 31.2321V24.6513C24.4862 24.581 24.4617 24.5183 24.4288 24.461L28.0864 20.7997C31.6934 24.3701 36.7998 29.4519 38.5045 31.213ZM16.8722 30.9425L7.72894 9.0989H36.6006C36.6282 9.10501 36.6558 9.11342 36.6834 9.11342C36.7056 9.11342 36.7263 9.10272 36.7485 9.0989H38.6945L16.8722 30.9425Z" fill="var(--topbar-item-text-color)"></path></svg><svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="layout-topbar-logo-slim"><path fillRule="evenodd" clipRule="evenodd" d="M40.7209 8.57017C40.6612 8.42729 40.5217 8.33484 40.367 8.33484H38.2593L39.407 6.95037C39.502 6.83653 39.5211 6.67837 39.4583 6.54466C39.3955 6.41095 39.2606 6.32537 39.112 6.32537H15.9826L9.42361 0.10518C9.29643 -0.0147766 9.10336 -0.0346421 8.95625 0.0585729L5.27643 2.36221L5.27336 2.36526L5.26953 2.36679L0.92315 5.21978C0.912424 5.22666 0.907061 5.23735 0.897101 5.24576C0.875649 5.26257 0.857261 5.28091 0.840406 5.30154C0.825083 5.31987 0.812825 5.33821 0.801332 5.35884C0.789074 5.381 0.780646 5.40316 0.772985 5.42684C0.765323 5.45129 0.760726 5.47574 0.757662 5.50172C0.756895 5.51471 0.75 5.5254 0.75 5.53916C0.75 5.55138 0.755363 5.56055 0.756895 5.57278C0.759194 5.59799 0.764557 5.62168 0.772218 5.64689C0.77988 5.6721 0.788308 5.69579 0.801332 5.71948C0.806695 5.72941 0.807461 5.74011 0.813591 5.75004C0.818954 5.75844 0.828914 5.7615 0.835043 5.76914C0.861858 5.80352 0.89327 5.83179 0.930046 5.85471C0.943836 5.86312 0.954563 5.87382 0.968353 5.88069C1.01892 5.90514 1.07408 5.92119 1.13384 5.92119H6.36743L7.54883 8.86052L7.55036 8.86281V8.8651L15.2364 27.2292L10.6993 31.3353C10.582 31.4415 10.5422 31.608 10.5997 31.7555C10.6564 31.903 10.7989 32 10.9567 32H17.4889C17.5395 32 17.5893 31.9893 17.636 31.9702C17.6827 31.9511 17.7249 31.9228 17.7601 31.8877L21.194 28.4502C21.1986 28.4555 21.2001 28.4624 21.2055 28.4678L24.457 31.8808C24.5298 31.958 24.6256 31.9794 24.7367 32C30.6399 31.9671 39.5962 31.9373 40.0176 31.9809C40.0574 31.9939 40.098 32 40.1386 32C40.2697 32 40.3976 31.9335 40.4689 31.8182C40.6903 31.459 40.6887 31.4552 29.3765 20.2603L40.6374 8.98888C40.7477 8.87733 40.7799 8.71305 40.7209 8.57017ZM38.2983 7.08867L37.2663 8.33484H18.1018L16.7879 7.08867H38.2983ZM9.11178 0.862361L16.9909 8.33484H8.16329L5.95447 2.83898L9.11178 0.862361ZM2.41178 5.15636L5.29864 3.2615L6.0602 5.15636H2.41178ZM21.7602 27.9406C21.7502 27.9299 21.7364 27.9253 21.7257 27.9169L24.4701 25.1701V30.7844L21.7602 27.9406ZM39.2545 31.213C37.808 31.1916 34.214 31.1825 25.2362 31.2321V24.6513C25.2362 24.581 25.2117 24.5183 25.1788 24.461L28.8364 20.7997C32.4434 24.3701 37.5498 29.4519 39.2545 31.213ZM17.6222 30.9425L8.47894 9.0989H37.3506C37.3782 9.10501 37.4058 9.11342 37.4334 9.11342C37.4556 9.11342 37.4763 9.10272 37.4985 9.0989H39.4445L17.6222 30.9425Z" fill="var(--topbar-item-text-color)"></path></svg>
                    </a>

                    <a className="p-ripple layout-menu-button">
                        <i className="pi pi-chevron-right"></i>
                        <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                    </a>

                    <a className="p-ripple layout-topbar-mobile-button">
                        <i className="pi pi-ellipsis-v"></i>
                        <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                    </a>
                </div>

                <div className="layout-topbar-end">
                    actions
                    {/* <div className="layout-topbar-actions-start">
                        <div className="layout-megamenu p-megamenu p-component p-megamenu-horizontal" data-pc-name="megamenu" data-pc-section="root">
                            <a className="p-megamenu-button" href="#" role="button" tabIndex="0" data-pc-section="menubutton"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fillRule="evenodd" clipRule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg></a>
                            <ul className="p-megamenu-root-list" role="menubar" data-pc-section="menu">
                                <li id="pr_id_1_cat_0" className="p-menuitem" role="none" data-p-disabled="false" data-pc-section="menuitem">
                                    <a href="#" className="p-menuitem-link" role="menuitem" aria-haspopup="true" data-pc-section="headeraction"><span className="p-menuitem-text" data-pc-section="label">UI KIT</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-submenu-icon" aria-hidden="true" data-pc-section="submenuicon"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg><span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "72.066px", width: "72.066px" }}></span></a>
                                    <div className="p-megamenu-panel" data-pc-section="panel">
                                        <div className="p-megamenu-grid" data-pc-section="grid">
                                            <div className="p-megamenu-col-4" data-pc-section="column">
                                                <ul className="p-megamenu-submenu" role="menu" data-pc-section="submenu" style={{ display: "none" }}>
                                                    <li id="pr_id_1_sub_0" className="p-megamenu-submenu-header" role="presentation" data-pc-section="submenuheader">UI KIT 1</li>
                                                    <li id="pr_id_1_0" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-id-card p-menuitem-icon pi pi-fw pi-id-card" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">Form Layout</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                    <li id="pr_id_1_1" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-check-square p-menuitem-icon pi pi-fw pi-check-square" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">Input</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-megamenu-col-4" data-pc-section="column">
                                                <ul className="p-megamenu-submenu" role="menu" data-pc-section="submenu" style={{ display: "none" }}>
                                                    <li id="pr_id_1_sub_0" className="p-megamenu-submenu-header" role="presentation" data-pc-section="submenuheader">UI KIT 2</li>
                                                    <li id="pr_id_1_0" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-table p-menuitem-icon pi pi-fw pi-table" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">Table</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                    <li id="pr_id_1_1" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-list p-menuitem-icon pi pi-fw pi-list" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">List</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-megamenu-col-4" data-pc-section="column">
                                                <ul className="p-megamenu-submenu" role="menu" data-pc-section="submenu" style={{ display: "none" }}>
                                                    <li id="pr_id_1_sub_0" className="p-megamenu-submenu-header" role="presentation" data-pc-section="submenuheader">UI KIT 3</li>
                                                    <li id="pr_id_1_0" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-clone p-menuitem-icon pi pi-fw pi-clone" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">Overlay</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                    <li id="pr_id_1_1" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-image p-menuitem-icon pi pi-fw pi-image" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">Media</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li id="pr_id_1_cat_1" className="p-menuitem" role="none" data-p-disabled="false" data-pc-section="menuitem">
                                    <a href="#" className="p-menuitem-link" role="menuitem" aria-haspopup="true" data-pc-section="headeraction">
                                        <span className="p-menuitem-text" data-pc-section="label">UTILITIES</span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-submenu-icon" aria-hidden="true" data-pc-section="submenuicon"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg>
                                        <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "95.7813px", width: "95.7813px" }}></span>
                                    </a>
                                    <div className="p-megamenu-panel" data-pc-section="panel">
                                        <div className="p-megamenu-grid" data-pc-section="grid">
                                            <div className="p-megamenu-col-12" data-pc-section="column">
                                                <ul className="p-megamenu-submenu" role="menu" data-pc-section="submenu" style={{ display: "none" }}>
                                                    <li id="pr_id_1_sub_0" className="p-megamenu-submenu-header" role="presentation" data-pc-section="submenuheader">UTILITIES 1</li>
                                                    <li id="pr_id_1_0" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="#" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-prime p-menuitem-icon pi pi-fw pi-prime" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">PrimeIcons</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li id="pr_id_1_1" className="p-menuitem" role="none" data-pc-section="submenuitem">
                                                        <a href="https://www.primeflex.org" className="p-menuitem-link" target="_blank" role="menuitem" data-pc-section="action">
                                                            <span className="pi pi-fw pi-directions p-menuitem-icon pi pi-fw pi-directions" data-pc-section="icon"></span>
                                                            <span className="p-menuitem-text" data-pc-section="label">PrimeFlex</span>
                                                            <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>

                <div className="layout-topbar-actions-end">
                    actions end
                </div>
            </div>

            <div className="layout-sidebar">
                <div className="layout-sidebar-top">
                    <a href="/">
                        <svg width="167" height="32" viewBox="0 0 167 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="layout-sidebar-logo"><path d="M76.5469 5.25V20.7812C76.5365 22.3125 76.1979 23.6458 75.5312 24.7812C74.8646 25.9167 73.9219 26.7917 72.7031 27.4062C71.4948 28.0104 70.1042 28.3125 68.5312 28.3125C66.1354 28.3125 64.2135 27.6615 62.7656 26.3594C61.3281 25.0469 60.5833 23.2344 60.5312 20.9219V5.25H62.4375V20.6406C62.4375 22.5573 62.9844 24.0469 64.0781 25.1094C65.1719 26.1615 66.6562 26.6875 68.5312 26.6875C70.4062 26.6875 71.8854 26.1562 72.9688 25.0938C74.0625 24.0312 74.6094 22.5521 74.6094 20.6562V5.25H76.5469Z" fill="var(--topbar-item-text-color)"></path><path d="M83.8438 26.375H95.0781V28H81.9062V5.25H83.8438V26.375Z" fill="var(--topbar-item-text-color)"></path><path d="M109.906 6.89062H102.109V28H100.188V6.89062H92.4062V5.25H109.906V6.89062Z" fill="var(--topbar-item-text-color)"></path><path d="M115.938 28H114.016V5.25H115.938V28Z" fill="var(--topbar-item-text-color)"></path><path d="M124.672 5.25L133.062 25.3281L141.484 5.25H144.047V28H142.125V18.0938L142.281 7.9375L133.812 28H132.328L123.891 8.01562L124.047 18.0312V28H122.125V5.25H124.672Z" fill="var(--topbar-item-text-color)"></path><path d="M162.375 21.625H152.047L149.703 28H147.688L156.297 5.25H158.125L166.734 28H164.734L162.375 21.625ZM152.641 19.9844H161.766L157.203 7.59375L152.641 19.9844Z" fill="var(--topbar-item-text-color)"></path><path fillRule="evenodd" clipRule="evenodd" d="M39.9709 8.57017C39.9112 8.42729 39.7717 8.33484 39.617 8.33484H37.5093L38.657 6.95037C38.752 6.83653 38.7711 6.67837 38.7083 6.54466C38.6455 6.41095 38.5106 6.32537 38.362 6.32537H15.2326L8.67361 0.10518C8.54643 -0.0147766 8.35336 -0.0346421 8.20625 0.0585729L4.52643 2.36221L4.52336 2.36526L4.51953 2.36679L0.17315 5.21978C0.162424 5.22666 0.157061 5.23735 0.147101 5.24576C0.125649 5.26257 0.107261 5.28091 0.0904059 5.30154C0.0750829 5.31987 0.0628245 5.33821 0.0513322 5.35884C0.0390738 5.381 0.0306461 5.40316 0.0229846 5.42684C0.015323 5.45129 0.0107261 5.47574 0.00766152 5.50172C0.00689537 5.51471 0 5.5254 0 5.53916C0 5.55138 0.00536306 5.56055 0.00689537 5.57278C0.00919382 5.59799 0.0145569 5.62168 0.0222184 5.64689C0.0298799 5.6721 0.0383076 5.69579 0.0513322 5.71948C0.0566952 5.72941 0.0574614 5.74011 0.0635906 5.75004C0.0689537 5.75844 0.0789137 5.7615 0.0850429 5.76914C0.111858 5.80352 0.14327 5.83179 0.180046 5.85471C0.193836 5.86312 0.204563 5.87382 0.218353 5.88069C0.268919 5.90514 0.324082 5.92119 0.383842 5.92119H5.61743L6.79883 8.86052L6.80036 8.86281V8.8651L14.4864 27.2292L9.94925 31.3353C9.83203 31.4415 9.79219 31.608 9.84965 31.7555C9.90635 31.903 10.0489 32 10.2067 32H16.7389C16.7895 32 16.8393 31.9893 16.886 31.9702C16.9327 31.9511 16.9749 31.9228 17.0101 31.8877L20.444 28.4502C20.4486 28.4555 20.4501 28.4624 20.4555 28.4678L23.707 31.8808C23.7798 31.958 23.8756 31.9794 23.9867 32C29.8899 31.9671 38.8462 31.9373 39.2676 31.9809C39.3074 31.9939 39.348 32 39.3886 32C39.5197 32 39.6476 31.9335 39.7189 31.8182C39.9403 31.459 39.9387 31.4552 28.6265 20.2603L39.8874 8.98888C39.9977 8.87733 40.0299 8.71305 39.9709 8.57017ZM37.5483 7.08867L36.5163 8.33484H17.3518L16.0379 7.08867H37.5483ZM8.36178 0.862361L16.2409 8.33484H7.41329L5.20447 2.83898L8.36178 0.862361ZM1.66178 5.15636L4.54864 3.2615L5.3102 5.15636H1.66178ZM21.0102 27.9406C21.0002 27.9299 20.9864 27.9253 20.9757 27.9169L23.7201 25.1701V30.7844L21.0102 27.9406ZM38.5045 31.213C37.058 31.1916 33.464 31.1825 24.4862 31.2321V24.6513C24.4862 24.581 24.4617 24.5183 24.4288 24.461L28.0864 20.7997C31.6934 24.3701 36.7998 29.4519 38.5045 31.213ZM16.8722 30.9425L7.72894 9.0989H36.6006C36.6282 9.10501 36.6558 9.11342 36.6834 9.11342C36.7056 9.11342 36.7263 9.10272 36.7485 9.0989H38.6945L16.8722 30.9425Z" fill="var(--topbar-item-text-color)"></path></svg><svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="layout-sidebar-logo-slim"><path fillRule="evenodd" clipRule="evenodd" d="M40.7209 8.57017C40.6612 8.42729 40.5217 8.33484 40.367 8.33484H38.2593L39.407 6.95037C39.502 6.83653 39.5211 6.67837 39.4583 6.54466C39.3955 6.41095 39.2606 6.32537 39.112 6.32537H15.9826L9.42361 0.10518C9.29643 -0.0147766 9.10336 -0.0346421 8.95625 0.0585729L5.27643 2.36221L5.27336 2.36526L5.26953 2.36679L0.92315 5.21978C0.912424 5.22666 0.907061 5.23735 0.897101 5.24576C0.875649 5.26257 0.857261 5.28091 0.840406 5.30154C0.825083 5.31987 0.812825 5.33821 0.801332 5.35884C0.789074 5.381 0.780646 5.40316 0.772985 5.42684C0.765323 5.45129 0.760726 5.47574 0.757662 5.50172C0.756895 5.51471 0.75 5.5254 0.75 5.53916C0.75 5.55138 0.755363 5.56055 0.756895 5.57278C0.759194 5.59799 0.764557 5.62168 0.772218 5.64689C0.77988 5.6721 0.788308 5.69579 0.801332 5.71948C0.806695 5.72941 0.807461 5.74011 0.813591 5.75004C0.818954 5.75844 0.828914 5.7615 0.835043 5.76914C0.861858 5.80352 0.89327 5.83179 0.930046 5.85471C0.943836 5.86312 0.954563 5.87382 0.968353 5.88069C1.01892 5.90514 1.07408 5.92119 1.13384 5.92119H6.36743L7.54883 8.86052L7.55036 8.86281V8.8651L15.2364 27.2292L10.6993 31.3353C10.582 31.4415 10.5422 31.608 10.5997 31.7555C10.6564 31.903 10.7989 32 10.9567 32H17.4889C17.5395 32 17.5893 31.9893 17.636 31.9702C17.6827 31.9511 17.7249 31.9228 17.7601 31.8877L21.194 28.4502C21.1986 28.4555 21.2001 28.4624 21.2055 28.4678L24.457 31.8808C24.5298 31.958 24.6256 31.9794 24.7367 32C30.6399 31.9671 39.5962 31.9373 40.0176 31.9809C40.0574 31.9939 40.098 32 40.1386 32C40.2697 32 40.3976 31.9335 40.4689 31.8182C40.6903 31.459 40.6887 31.4552 29.3765 20.2603L40.6374 8.98888C40.7477 8.87733 40.7799 8.71305 40.7209 8.57017ZM38.2983 7.08867L37.2663 8.33484H18.1018L16.7879 7.08867H38.2983ZM9.11178 0.862361L16.9909 8.33484H8.16329L5.95447 2.83898L9.11178 0.862361ZM2.41178 5.15636L5.29864 3.2615L6.0602 5.15636H2.41178ZM21.7602 27.9406C21.7502 27.9299 21.7364 27.9253 21.7257 27.9169L24.4701 25.1701V30.7844L21.7602 27.9406ZM39.2545 31.213C37.808 31.1916 34.214 31.1825 25.2362 31.2321V24.6513C25.2362 24.581 25.2117 24.5183 25.1788 24.461L28.8364 20.7997C32.4434 24.3701 37.5498 29.4519 39.2545 31.213ZM17.6222 30.9425L8.47894 9.0989H37.3506C37.3782 9.10501 37.4058 9.11342 37.4334 9.11342C37.4556 9.11342 37.4763 9.10272 37.4985 9.0989H39.4445L17.6222 30.9425Z" fill="var(--topbar-item-text-color)"></path></svg>
                    </a>
                    <button className="layout-sidebar-anchor p-link" type="button"></button>
                </div>

                <div className="layout-menu-container">
                    <ul className="layout-menu">
                        {/* <li className="layout-root-menuitem">
                            <div className="layout-menuitem-root-text">
                                <span>Dashboards</span>
                            </div>
                        </li> */}

                        <li className="layout-root-menuitem">
                            <div className="layout-menuitem-root-text">
                                <span>Dashboards</span>
                                <i className="layout-menuitem-root-icon pi pi-fw pi-ellipsis-h"></i>
                            </div>
                            <a className="p-ripple tooltip-target" data-pr-tooltip="Dashboards" data-pr-disabled="true" tabIndex="0">
                                <i className="layout-menuitem-icon pi pi-home"></i>
                                <span className="layout-menuitem-text">Dashboards</span>
                                <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                                <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "41.9922px", width: "41.9922px" }}></span>
                            </a>
                            <ul className="layout-root-submenulist">
                                <li className="">
                                    <a className="p-ripple" tabIndex="0" href="/">
                                        <i className="layout-menuitem-icon pi pi-fw pi-home"></i>
                                        <span className="layout-menuitem-text">Sales Dashboard</span>
                                        <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "0px", width: "0px" }}></span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="layout-menu-profile"></div>
            </div>

            <div className="layout-content-wrapper">
                <div>
                    <div className="layout-breadcrumb-container">
                        <nav className="layout-breadcrumb">
                            <ol>
                                <li>
                                    <a style={{ color: "inherit" }} href="/">
                                        <i className="pi pi-home"></i>
                                    </a>
                                </li>
                                <i className="pi pi-angle-right"></i>
                                <li>User Management</li>
                                <i className="pi pi-angle-right"></i>
                                <li>Create</li>
                            </ol>
                        </nav>

                        <div className="layout-breadcrumb-buttons">
                            <button className="p-button-plain p-button p-component p-button-icon-only p-button-text p-button-rounded" data-pc-name="button" data-pc-section="root">
                                <span className="p-button-icon p-c pi pi-cloud-upload" data-pc-section="icon"></span>
                                <span className="p-button-label p-c" data-pc-section="label">&nbsp;</span>
                                <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "31.4844px", width: "31.4844px" }}></span>
                            </button>

                            <button className="p-button-plain p-button p-component p-button-icon-only p-button-text p-button-rounded" data-pc-name="button" data-pc-section="root">
                                <span className="p-button-icon p-c pi pi-bookmark" data-pc-section="icon"></span>
                                <span className="p-button-label p-c" data-pc-section="label">&nbsp;</span>
                                <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "31.4844px", width: "31.4844px" }}></span>
                            </button>

                            <button className="p-button-plain p-button p-component p-button-icon-only p-button-text p-button-rounded" data-pc-name="button" data-pc-section="root">
                                <span className="p-button-icon p-c pi pi-power-off" data-pc-section="icon"></span>
                                <span className="p-button-label p-c" data-pc-section="label">&nbsp;</span>
                                <span role="presentation" aria-hidden="true" className="p-ink" data-pc-name="ripple" data-pc-section="root" style={{ height: "31.4844px", width: "31.4844px" }}></span>
                            </button>
                        </div>
                    </div>

                    <div className="layout-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
