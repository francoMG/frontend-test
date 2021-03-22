export const getUsers = async () => {
  const userResponse = await fetch('/api/users')
  const { users } = await userResponse.json()

  users.forEach(({ sessions }, index) => {
    sessions = sessions.map((session) => new Date(session))
    users[index].lastSession = Math.max(...sessions)
  })

  return users
}
