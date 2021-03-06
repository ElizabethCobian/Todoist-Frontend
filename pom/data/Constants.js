import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
  LOGIN_URL: process.env.BASE_URL
}
export const CREDENTIALS = {
  VALID_USER: {
    USER_EMAIL: process.env.SUCCESS_USER_EMAIL,
    USER_PASSWORD: process.env.SUCCESS_USER_PASSWORD
  },
  INVALID_USER: {
    USER_EMAIL: 'invalid_user',
    USER_PASSWORD: 'invalid_password'
  }
}
export const MESSAGES = {
  ERROR: {
    LOGIN_PAGE: {
      INVALID_EMAIL: 'Invalid email address.',
      BLANK_PASSWORD: 'Blank password.'
    }
  }
}
export const PROJECT = {
  FAVORITE_PROJECT: {
    NAME: 'My project',
    COLOR: 'Teal',
    IS_FAVORITE: true
  }
}
export const TASKS = {
  TASK_TITLES: {
    TITLE: 'Test'
  },
  TASK_NUMBER: {
    MAXIMO_NUMBER: 10,
    MINIMO_NUMBER: 2
  }
}
export const TIMEOUTS = {
  ASSERTION_TIMEOUT: 10000,
  WAIT_TIMEOUT: 2000
}