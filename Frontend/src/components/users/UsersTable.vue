<template>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>
                        <p class="hidden sm:flex">Email address</p>
                    </th>
                    <th><p class="hidden sm:flex">Age</p></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <slot />
            </tbody>
        </table>
        <DialogDelete />
        <DialogEdit />
    </div>
</template>
<script setup lang="ts">
import DialogDelete from '../dialogs/DialogDelete.vue'
import DialogEdit from '../dialogs/DialogEdit.vue'
</script>
