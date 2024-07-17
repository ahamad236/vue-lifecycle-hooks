<script setup lang="ts">
    import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from "vue"

    const Count = ref(0)

    onBeforeMount(() => alert("onBeforeMount Callled"))
    onMounted(() => alert("onMounted Callled"))
    onBeforeUpdate(() => alert("onBeforeUpdate Callled"))
    onUpdated(() => alert("onUpdated Callled"))
    onBeforeUnmount(() => alert("onBeforeUnmount Callled"))
    onUnmounted(() => alert("onUnmounted Callled"))

</script>

<template>
    <h2>
        First Page
    </h2>
    <span>{{ Count }}</span>

    <div>
        <button @click="Count++">Increase</button>
    </div>
</template>