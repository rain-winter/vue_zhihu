import { commentsAlova } from './index'
// 获取用户信息
export const getCommentsList = () => commentsAlova.Get('/comments')
