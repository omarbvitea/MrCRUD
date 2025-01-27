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
        <ModalDelete />
        <ModalEdit />
    </div>
</template>
<script setup lang="ts">
import ModalDelete from '../modals/ModalDelete.vue'
import ModalEdit from '../modals/ModalEdit.vue'
</script>
