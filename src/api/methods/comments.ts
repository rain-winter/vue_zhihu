import type { CommentType } from '@/types/comment'
import { commentsAlova } from '../index'
// 获取用户信息
export const getCommentsList = () => commentsAlova.Get<CommentType[]>('/comments')
