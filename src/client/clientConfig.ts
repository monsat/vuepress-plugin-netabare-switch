import { defineClientConfig } from '@vuepress/client'
import {
  NetaBareSwitch,
  NetaBareDiv,
  NetaBareSpan,
} from './components'

declare const __NETABARE_COMPONENT_PREFIX__: string

export default defineClientConfig({
  enhance({ app }) {
    const prefix = __NETABARE_COMPONENT_PREFIX__
    app.component(`${prefix}Switch`, NetaBareSwitch)
    app.component(`${prefix}Div`, NetaBareDiv)
    app.component(`${prefix}Span`, NetaBareSpan)
  },
})
