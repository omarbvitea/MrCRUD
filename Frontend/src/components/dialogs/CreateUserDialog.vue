<template>
	<dialog id="newUserModal" class="modal">
		<div class="modal-box flex flex-col ">
			<h1 class="text-3xl mb-9"
				>Create <span class="text-primary font-medium">new</span> user
			</h1>
			<div class="flex flex-col gap-2">
				<div>
					<label class="input validator w-full">
						<IconPerson />
						<input type="input" required placeholder="Name" maxlength="30" />
					</label>
					<p class="validator-hint"> This field is required </p>
				</div>
				<div class="flex gap-2">
					<div class="w-full">
						<label class="input validator w-full">
							<IconMail />
							<input type="email" required placeholder="Email" />
						</label>
						<p class="validator-hint"> Enter valid email address </p>
					</div>
					<div class="flex flex-col w-52">
						<label class="input validator">
							<input type="number" placeholder="Age" min="0" max="120" />
						</label>
						<p class="validator-hint"> Enter a valid age </p>
					</div>
				</div>
			</div>
			<div class="w-full mt-3">
				<button class="btn btn-primary">Create</button>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</template>
<script setup lang="ts">
import IconPerson from '../Icons/IconPerson.vue';
import IconMail from '../Icons/IconMail.vue';
</script>
