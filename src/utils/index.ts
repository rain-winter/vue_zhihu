import type { Events } from '@/types/common'
import type { Emitter } from 'mitt'
import mitt from 'mitt'

export const emitter: Emitter<Events> = mitt<Events>()
