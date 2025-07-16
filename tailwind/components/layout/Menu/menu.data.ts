export interface IMenuItem {
    name: string
    url: string
    icon: string
}

export const MENU_DATA: IMenuItem[] = [
    {
        icon: 'line-md:home-twotone',
        name: 'Home',
        url: '/'
    },
    {
        icon: 'line-md:account',
        name: 'Customer',
        url: '/Contact'
    },
    {
        icon: 'line-md:map-marker-radius',
        name: 'Contact',
        url: '/Contact'
    }
]