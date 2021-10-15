import {zuck} from './db_people'
import {todos} from './db_todos'
import {mockasync} from './mockutils'

const keepLoggedIn = true

export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  },
  list_tweets () {
    return mockasync(
      [
        {
          id: 1,
          author_name: 'Zé Ninguém',
          author_username: '@zeninguem',
          author_avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          created_at: '43min',
          text: 'Eu sou do povo, eu sou um Zé ninguém'
        },
        {
          id: 2,
          author_name: 'Zé Ninguém 2',
          author_username: '@zeninguem 2',
          author_avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          created_at: '45min',
          text: 'Eu sou do povo, eu sou um Zé ninguém, de novo'
        },
        {
          id: 3,
          author_name: 'Maria Ninguém',
          author_username: '@marianinguem',
          author_avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          created_at: '1h43min',
          text: 'Eu sou do povo, eu sou uma Maria ninguém'
        }
      ]
    )
  }
}
