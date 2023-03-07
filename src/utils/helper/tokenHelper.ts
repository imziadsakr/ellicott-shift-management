import jwt_decode from 'jwt-decode'

import { ADMIN_ROLE, USER_ROLE } from '../static'

import { getCookie } from './cookieHelper'

export const extractToken = () => {
  const cookieStr: string = getCookie('access_token') ?? ''
  const decoded = jwt_decode(cookieStr)

  return decoded
}

export const visitorRole = () => {
  const decoded: any = extractToken()

  return decoded?.rol[0] === 'ADMIN' ? ADMIN_ROLE : USER_ROLE
}
