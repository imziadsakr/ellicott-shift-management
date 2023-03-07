export const setCookie = async (cname: string, cvalue: string) => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()

  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export const getCookie = (cname: string) => {
  const name: string = cname + '='
  const decodedCookie: string = decodeURIComponent(document.cookie)
  const ca: string[] = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export const eraseCookie = async (cname: string) => {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}
