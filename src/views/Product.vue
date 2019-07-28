<template>
    <div class="product">
        <h1>商品情報</h1>
        <!--$routeは現在のrouteインスタンスを表す-->
        <!--:idでパラメーターを指定したものは、params.idで呼び出せる-->
        <p>このページは、ID.{{ id }}の詳細を表示する</p>
    </div>
</template>

<script>
export default {
    props: { id: Number }
}
</script>