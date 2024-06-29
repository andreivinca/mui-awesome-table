import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material'
import { ReactNode } from 'react'
import type { Components } from '@mui/material/styles/components';

export interface Pagination {
  page: number
  rowsPerPage: number
  count: number
}
export interface AwesomeTableProps<T> {
  items: T[]
  headCells: HeadCell<T>[]
  actions?: Action<T>[]
  pagination?: Pagination
  isSearchable?: boolean
  onSort?: (sortBy: keyof T, sortOrder: Order) => void
  onSearch?: (query: string) => void
  onCancelSearch?: () => void
  onPageChanged?: (page: number) => void
  onRowsPerPageChanged?: (rowsPerPage: number) => void,
  
  root: any
}
export interface EnhancedTableProps<T> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void
  order: Order
  orderBy: string
  headCells: HeadCell<T>[]
  isCollapsible: boolean
  hasActions: boolean
}

export type Order = 'asc' | 'desc'

export interface HeadCell<T> {
  id: keyof T
  label: string
  render: (value: T[keyof T], row: T) => ReactNode
  showOnCollapse?: boolean
}

export interface Action<T> {
  id: string
  render: (item: T) => ReactNode
}


declare module '@mui/material/styles/components' {
    interface Components<Theme = unknown> {
        MuiAwesomeTable?: {
          defaultProps?: ComponentsProps['MuiTable'];
          styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
          variants?: ComponentsVariants<Theme>['MuiTable'];
        };
    }
}


