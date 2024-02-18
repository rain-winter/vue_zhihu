import type { UserProps } from '@/types/user'
import { userAlova } from '..'

export const login = (user: any) => userAlova.Get<UserProps[]>(`users?email=${user.email}`)
