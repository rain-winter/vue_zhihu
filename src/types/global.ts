import type { ColumnProps, PostProps } from './column'
import type { UserProps } from './user'

// 全局错误
interface ListProps<P> {
  [id: string]: P
}
export interface GlobalErrorProps {
  status: boolean
  message?: string
}
export interface GlobalDataProps {
  token: string
  error: GlobalErrorProps
  loading: boolean
  columns: { data: ListProps<ColumnProps>; currentPage: number; total: number }
  posts: { data: ListProps<PostProps>; loadedColumns: string[] }
  user: UserProps
}

export type MessageType = 'success' | 'error' | 'primary'
