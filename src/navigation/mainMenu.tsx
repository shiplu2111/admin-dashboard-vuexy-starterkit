// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const mainMenu = (): VerticalMenuDataType[] => [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'tabler-smart-home'
  },
  {
    label: 'Products',
    href: '/products',
    icon: 'tabler-info-circle'
  },
  {
    label: 'Settings',
    href: '/products',
    icon: 'tabler-info-circle'
  }
]

export default mainMenu
