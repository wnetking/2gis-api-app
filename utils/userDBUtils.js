import User from '../models/user'
import crypto from 'crypto'

export function listUsers() {
  return User.find();
}

export function createUser(data) {
  const user = new User(data)

  return user.save();
}

export function findUser(email) {
  return User.findOne({ 'email': email });
}

export function deleteUser(id) {
  return User.findById(id).remove();
}