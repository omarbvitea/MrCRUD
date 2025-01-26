<template>
	<div class="flex h-dvh w-full items-center bg-base-300">
		<main class="max-w-5xl mx-auto w-full">
			<ThemeSwitcher />
			<section class="flex flex-col bg-base-100 gap-4 p-8 rounded-xl shadow-xl">
				<div class="flex justify-between items-center w-full">
					<div class="flex items-center gap-2">
						<h1 class="text-xl font-medium">All users</h1>
						<span
							v-if="loading"
							class="loading loading-spinner text-primary loading-xs"
						></span>
						<span v-else class="text-primary font-medium">44</span>
					</div>
					<div class="flex gap-4 items-center">
						<label class="input hidden sm:flex">
							<IconSearch />
							<input type="search" placeholder="Search" />
						</label>
						<button class="flex sm:hidden btn btn-circle">
							<IconSearch />
						</button>
						<button class="btn btn-primary" onclick="my_modal_1.showModal()">
							<IconPlus /> Add user</button
						>
						<dialog id="my_modal_1" class="modal">
							<div class="modal-box">
								<h3 class="text-lg font-bold">Hello!</h3>
								<p class="py-4"
									>Press ESC key or click the button below to close</p
								>
								<div class="modal-action">
									<form method="dialog">
										<!-- if there is a button in form, it will close the modal -->
										<button class="btn">Close</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
				<Skeleton v-if="loading" class="mt-4" />
				<div v-else class="overflow-x-auto">
					<table class="table">
						<thead>
							<tr>
								<th>Name</th>
								<th><p class="hidden sm:flex">Email address</p></th>
								<th><p class="hidden sm:flex">Age</p></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="flex items-center gap-3">
										<div class="mask mask-squircle h-12 w-12">
											<img
												src="https://img.daisyui.com/images/profile/demo/2@94.webp"
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
										<p class="font-bold line-clamp-1">Hagerty</p>
									</div>
								</td>
								<td>
									<p class="line-clamp-1 hidden sm:flex"
										>viteomar537.b@gmail.com</p
									>
								</td>
								<td><p class="hidden sm:flex">23</p></td>
								<th>
									<div
										class="flex w-full items-center gap-1 md:gap-2 justify-end"
									>
										<button class="btn btn-ghost btn-circle"
											><IconEdit class="text-info"
										/></button>
										<button class="btn btn-ghost btn-circle">
											<IconTrash class="text-error" />
										</button>
									</div>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="w-full flex justify-center">
					<div class="join">
						<button class="join-item btn">«</button>
						<button class="join-item btn" @click="handleSkeleton"
							>Page 1</button
						>
						<button class="join-item btn">»</button>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>
<script setup lang="ts">
import IconSearch from './components/Icons/IconSearch.vue'
import IconPlus from './components/Icons/IconPlus.vue'
import IconEdit from './components/Icons/IconEdit.vue'
import IconTrash from './components/Icons/IconTrash.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import Skeleton from './components/Skeleton.vue'
import { ref } from 'vue'

const loading = ref(true)

const handleSkeleton = () => {
	loading.value = !loading.value
}
</script>
<style scoped></style>
