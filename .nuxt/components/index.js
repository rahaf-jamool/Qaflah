export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as CommonFooter } from '../..\\components\\Common\\Footer.vue'
export { default as CommonHeader } from '../..\\components\\Common\\Header.vue'
export { default as FreightTypes } from '../..\\components\\FreightTypes\\FreightTypes.vue'
export { default as Home } from '../..\\components\\Home\\Home.vue'
export { default as MainSection } from '../..\\components\\MainSection\\MainSection.vue'
export { default as SectionThree } from '../..\\components\\SectionThree\\SectionThree.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
