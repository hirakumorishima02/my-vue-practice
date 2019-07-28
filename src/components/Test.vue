<template>
    <button @click="onclick">アラート</button>
</template>

<script>
    export default {
        name: 'Test',
        methods: {
            onclick: function() {
                alert('ボタンを押したな！')
            }
        }
    }
</script>