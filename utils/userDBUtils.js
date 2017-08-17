import User from '../models/user'

export function listUsers() {
  return User.find();
}

export function createUser(data) {
  const user = new User(data)

  return user.save();
}

export function deleteUser(id) {
  return User.findById(id).remove();
}