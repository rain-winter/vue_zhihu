import type { PostProps } from '@/types/column'
import { postAlova } from '..'

export const addPost = (post: PostProps) => postAlova.Post<PostProps>('posts', post)
