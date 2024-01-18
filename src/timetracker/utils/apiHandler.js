function getJWT() {
  return sessionStorage.getItem("timewise_jwt_token")
}

export function isLoggedIn() {
  return !!getJWT()
}

export function getEntries() {
  const jwt = getJWT()
}