export interface ResponseType<P = {}> {
  code: number
  msg: string
  data: P
}

export interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]
