const middleware = {}

middleware['checkAuth'] = require('..\\middleware\\checkAuth.js')
middleware['checkAuth'] = middleware['checkAuth'].default || middleware['checkAuth']

middleware['i18n'] = require('..\\middleware\\i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

export default middleware
