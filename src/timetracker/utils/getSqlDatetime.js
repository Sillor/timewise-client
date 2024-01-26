export default function getSqlDatetime(date=null) {
  const newDate = date !== null ? new Date(date) : new Date()
  return newDate.toISOString().slice(0, 19).replace('T', ' '); 
}