import AppSubMenu from '@/app/includes/AppSubMenu';
import type { MenuModel } from '@/app/utilities/types';

const AppMenu = () => {
    const model: MenuModel[] = [
        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'Sales Dashboard',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Analytics Dashboard',
                    icon: 'pi pi-fw pi-chart-pie',
                    to: '/dashboards/dashboardanalytics'
                },
                {
                    label: 'SaaS Dashboard',
                    icon: 'pi pi-fw pi-bolt',
                    to: '/dashboards/dashboardsaas'
                }
            ]
        },
        {
            label: 'User Management',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'List',
                    icon: 'pi pi-fw pi-list',
                    to: '/profile/list'
                },
                {
                    label: 'Create',
                    icon: 'pi pi-fw pi-plus',
                    to: '/profile/create'
                }
            ]
        },
        {
            label: 'Start',
            icon: 'pi pi-fw pi-download',
            items: [
                {
                    label: 'Buy Now',
                    icon: 'pi pi-fw pi-shopping-cart',
                    url: 'https://www.primefaces.org/store'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-info-circle',
                    to: '/documentation'
                }
            ]
        }
    ];

    return <AppSubMenu model={model} />;
};

export default AppMenu;
