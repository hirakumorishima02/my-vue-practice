<template>
    <div class="product-list">
        <h1>商品一覧</h1>
        <ul>
            <!--受け取ったdatabaseをv-forでリストレンダリング-->
            <li v-for="{id,name} in list" :key="id">
                <router-link :to="`/product/${ id }`">{{ name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import products from '@/api/products.js'
    export default {
        computed: {
            // products.jsから引き受けたdatabaseをlistという変数にして受け取る
            list: () => products.fetch()
        }
    }
</script>