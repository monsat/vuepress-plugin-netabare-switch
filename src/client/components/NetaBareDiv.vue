<script setup lang="ts">
import { useNetaBare } from '../composables/useNetaBare'

interface Props {
  name?: string
}

const { name } = defineProps<Props>()

const { checked } = useNetaBare(name)
</script>

<template>
  <p v-if="checked"><slot name="bare">ネタバレの内容</slot></p>
  <p v-else><slot name="default">ネタバレに配慮した内容</slot></p>
</template>
