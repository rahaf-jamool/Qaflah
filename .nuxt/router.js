import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _788bfff7 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _efee9aec = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _bee683e4 = () => interopDefault(import('..\\pages\\media\\gallery\\index.vue' /* webpackChunkName: "pages/media/gallery/index" */))
const _9f807f7e = () => interopDefault(import('..\\pages\\media\\news\\index.vue' /* webpackChunkName: "pages/media/news/index" */))
const _1580601c = () => interopDefault(import('..\\pages\\media\\videos\\index.vue' /* webpackChunkName: "pages/media/videos/index" */))
const _cf784a88 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _788bfff7,
    name: "about"
  }, {
    path: "/contact",
    component: _efee9aec,
    name: "contact"
  }, {
    path: "/media/gallery",
    component: _bee683e4,
    name: "media-gallery"
  }, {
    path: "/media/news",
    component: _9f807f7e,
    name: "media-news"
  }, {
    path: "/media/videos",
    component: _1580601c,
    name: "media-videos"
  }, {
    path: "/",
    component: _cf784a88,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
