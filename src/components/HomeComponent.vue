<script setup lang="ts">
    import { RouterView } from "vue-router"
</script>

<template>
    <h2>
        Home Component
    </h2>
    <div>
        <RouterLink to="/firstPage">GoTo First</RouterLink>
    </div>
    <div>
        <RouterLink to="/secondPage">GoTo Second</RouterLink>
    </div>
    <RouterView></RouterView>
</template>