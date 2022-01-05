import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export interface NetaBarePluginOptions {
  componentPrefix: string
  keyPrefix: string
}

const netabareSwitchPlugin: Plugin<NetaBarePluginOptions> = ({
  componentPrefix = 'NetaBare',
  keyPrefix = 'netabare'
}) => {
  const name = 'vuepress-plugin-netabare-switch'
  const clientAppEnhanceFiles = path.resolve(
    __dirname,
    `../client/clientAppEnhance.mjs`
  )
  const define = {
    __NETABARE_COMPONENT_PREFIX__: componentPrefix,
    __NETABARE_KEY_PREFIX__: keyPrefix,
  }

  return {
    name,
    clientAppEnhanceFiles,
    define,
  }
}

export default netabareSwitchPlugin
