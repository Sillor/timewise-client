function getJWT() {
  sessionStorage.getItem("timewise_jwt_token")
}
function getEntries() {
  const jwt = getJWT()
}