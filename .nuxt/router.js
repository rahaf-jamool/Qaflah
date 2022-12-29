import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b5406836 = () => interopDefault(import('../pages/company-profile.vue' /* webpackChunkName: "pages/company-profile" */))
const _1a2ce7a8 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5d60b550 = () => interopDefault(import('../pages/general-managers-speech.vue' /* webpackChunkName: "pages/general-managers-speech" */))
const _71cbc784 = () => interopDefault(import('../pages/terms-service/index.vue' /* webpackChunkName: "pages/terms-service/index" */))
const _db6f606a = () => interopDefault(import('../pages/vision-mission.vue' /* webpackChunkName: "pages/vision-mission" */))
const _b99d4c14 = () => interopDefault(import('../pages/media/gallery/index.vue' /* webpackChunkName: "pages/media/gallery/index" */))
const _20f830c5 = () => interopDefault(import('../pages/media/news/index.vue' /* webpackChunkName: "pages/media/news/index" */))
const _5f28956c = () => interopDefault(import('../pages/media/videos/index.vue' /* webpackChunkName: "pages/media/videos/index" */))
const _1372b4de = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/company-profile",
    component: _b5406836,
    name: "company-profile"
  }, {
    path: "/contact",
    component: _1a2ce7a8,
    name: "contact"
  }, {
    path: "/general-managers-speech",
    component: _5d60b550,
    name: "general-managers-speech"
  }, {
    path: "/terms-service",
    component: _71cbc784,
    name: "terms-service"
  }, {
    path: "/vision-mission",
    component: _db6f606a,
    name: "vision-mission"
  }, {
    path: "/media/gallery",
    component: _b99d4c14,
    name: "media-gallery"
  }, {
    path: "/media/news",
    component: _20f830c5,
    name: "media-news"
  }, {
    path: "/media/videos",
    component: _5f28956c,
    name: "media-videos"
  }, {
    path: "/",
    component: _1372b4de,
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
