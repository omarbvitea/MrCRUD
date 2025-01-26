<template>
	<div class="flex w-full flex-col gap-5">
		<div v-for="n in 3" class="flex items-center justify-between w-full px-4">
			<div class="flex items-center gap-4">
				<div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
				<div class="skeleton h-8 w-20"></div>
			</div>
			<div class="skeleton h-8 w-40 md:w-60 hidden sm:flex"></div>
			<div class="skeleton h-8 w-20 hidden sm:flex"></div>
			<div class="flex items-center gap-4">
				<div class="skeleton h-10 w-10 shrink-0 rounded-full"></div>
				<div class="skeleton h-10 w-10 shrink-0 rounded-full"></div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import IconSearch from './Icons/IconSearch.vue'
import IconPlus from './Icons/IconPlus.vue'
</script>
