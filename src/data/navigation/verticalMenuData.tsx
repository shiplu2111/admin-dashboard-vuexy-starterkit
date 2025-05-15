// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'tabler-smart-home'
  },
  {
    label: 'Products',
    href: '/products',
    icon: 'tabler-info-circle'
  }
]

export default verticalMenuData
