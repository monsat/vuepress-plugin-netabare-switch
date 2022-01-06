<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { useNetaBare } from '../composables/useNetaBare'

interface Props {
  name?: string
  isBare?: boolean
}

// 初期値を設定しないと false になってしまうため undefined で設定する
const { name, isBare } = withDefaults( defineProps<Props>(), { isBare: undefined })
const attrs = useAttrs()

// isBare prop の値を優先し、なければ bare attribute があるかどうか
// isBare prop が false なら bare attribute があっても false
const bare = computed(() => isBare ?? Object.keys(attrs).includes('bare'))

const { checked } = useNetaBare(name)
</script>

<template>
  <div v-if="checked === bare">
    <slot></slot>
  </div>
</template>
