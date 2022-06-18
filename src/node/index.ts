import type { PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

export interface NetaBarePluginOptions {
  componentPrefix?: string
  keyPrefix?: string
}

export const netabareSwitchPlugin = (options?: NetaBarePluginOptions): PluginObject => {
  const name = 'vuepress-plugin-netabare-switch'
  const clientConfigFile = path.resolve(
    __dirname,
    `../client/clientConfig.mjs`
  )
  const {
    componentPrefix = 'NetaBare',
    keyPrefix = 'netabare',
  }: NetaBarePluginOptions = options || {}
  const define = {
    __NETABARE_COMPONENT_PREFIX__: componentPrefix,
    __NETABARE_KEY_PREFIX__: keyPrefix,
  }

  return {
    name,
    clientConfigFile,
    define,
  }
}

export default netabareSwitchPlugin
