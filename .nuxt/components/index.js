export { default as PageTitle } from '../../components/global/PageTitle.vue'
export { default as TitleHead } from '../../components/global/TitleHead.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as About } from '../../components/About/About.vue'
export { default as AboutVision } from '../../components/About/Vision.vue'
export { default as AboutWord } from '../../components/About/Word.vue'
export { default as CommonFooter } from '../../components/Common/Footer.vue'
export { default as CommonHeader } from '../../components/Common/Header.vue'
export { default as CompaniesDeliveries } from '../../components/CompaniesDeliveries/CompaniesDeliveries.vue'
export { default as CompaniesServices } from '../../components/CompaniesServices/CompaniesServices.vue'
export { default as DeliveryServices } from '../../components/DeliveryServices/DeliveryServices.vue'
export { default as HomeBriefPage } from '../../components/Home/BriefPage.vue'
export { default as HomeFreightTypes } from '../../components/Home/FreightTypes.vue'
export { default as Home } from '../../components/Home/Home.vue'
export { default as HomeMainPage } from '../../components/Home/MainPage.vue'
export { default as HomeMediaCenter } from '../../components/Home/MediaCenter.vue'
export { default as HomeSpecialOffers } from '../../components/Home/SpecialOffers.vue'
export { default as TermsService } from '../../components/Terms-Service/TermsService.vue'
export { default as MediaGallery } from '../../components/Media/Gallery/Gallery.vue'
export { default as MediaNewsItem } from '../../components/Media/News/NewsItem.vue'
export { default as MediaVideo } from '../../components/Media/Video/Video.vue'

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
