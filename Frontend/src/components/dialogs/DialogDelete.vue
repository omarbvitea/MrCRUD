<template>
	<dialog id="deleteUserModal" class="modal">
		<div class="modal-box flex flex-col max-w-96">
			<h1 class="flex flex-col gap-5 text-2xl mb-9">
				<p class="text-center">
					Are you sure you want to delete
					<span class="text-warning">@user</span> from the list?
				</p>
				<div class="flex text-base text-gray-400 text-center justify-center">
					Please rethink your decision because you will not be able to undo this
					action
				</div>
			</h1>
			<div class="w-full flex justify-center mt-3 gap-4">
				<form method="dialog">
					<button class="btn btn-soft">Cancel</button>
				</form>
				<button class="btn btn-error">Delete</button>
			</div>
		</div>
	</dialog>
</template>
<script setup lang="ts"></script>
