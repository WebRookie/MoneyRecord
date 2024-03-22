import { post} from './index'

const api = {
  login: data => post('/user/login', data)
}

module.exports = api;