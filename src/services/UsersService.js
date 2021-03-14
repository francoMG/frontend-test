export const getUsers = async () => {
  const userResponse = await fetch('/api/users')
  const { users } = await userResponse.json()

  users.forEach(({ sessions }, idx) => {
    sessions = sessions.map((session) => new Date(session))
    users[idx].lastSession = Math.max(...sessions)
  })

  return users
}
