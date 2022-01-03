<script setup lang="ts">
import { useNetaBare } from '../composables/useNetaBare'

interface Props {
  name?: string
  bare: string
}

const { name, bare } = defineProps<Props>()

const { checked } = useNetaBare(name)
</script>

<template>
  <span v-if="checked" v-text="bare"></span>
  <span v-else><slot></slot></span>
</template>
