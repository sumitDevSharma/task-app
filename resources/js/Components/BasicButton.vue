<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type"
        class="inline-flex items-center px-4 py-2 dark:bg-gray-800  dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm disabled:opacity-25 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
