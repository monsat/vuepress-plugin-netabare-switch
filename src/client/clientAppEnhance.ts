import { defineClientAppEnhance } from '@vuepress/client'
import NetaBareSwitch from './components/NetaBareSwitch.vue'
import NetaBareDiv from './components/NetaBareDiv.vue'
import NetaBareSpan from './components/NetaBareSpan.vue'

declare const __NETABARE_COMPONENT_PREFIX__: string

export default defineClientAppEnhance(({ app }) => {
  const prefix = __NETABARE_COMPONENT_PREFIX__
  // @ts-ignore
  app.component(`${prefix}Switch`, NetaBareSwitch)
  // @ts-ignore
  app.component(`${prefix}Div`, NetaBareDiv)
  // @ts-ignore
  app.component(`${prefix}Span`, NetaBareSpan)
})
