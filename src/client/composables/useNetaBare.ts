import {
  createSharedComposable,
  createGlobalState,
  useStorage,
} from '@vueuse/core'
import { useRoute } from 'vue-router'

declare const __NETABARE_KEY_PREFIX__: string

const encode = (text: string) => encodeURIComponent(text).replace(/%/g, ':')

const createNetaBare = (key = useRoute().path) => {
  const prefix = __NETABARE_KEY_PREFIX__
  const idKey = `${prefix}-${encode(key)}`
  const storageKey = `${prefix}-${key}`
  const useState = createGlobalState(() => useStorage(storageKey, false))
  const checked = useState()
  return { checked, idKey, storageKey, useState }
}

export const useNetaBare = createSharedComposable(createNetaBare)
