import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントの読み込み
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)


//VueRouterインスタンスの生成
const router = new VueRouter({
    //#モードからhistoryモードにすれば解決！
    mode: 'history',
    //URLのパスと紐付くコンポーネントをマッピング
    routes: [
        { path: '/', component: Home},
        { path: '/product', component: ProductList},
        
        
        { path: '/product/:id(\\d+)', 
        component: Product,
        // propsにidとデータ型の指定をする
        props: route => ({ id: Number(route.params.id) })}, 
        ]
})

//生成したVueRouterインスタンスをエクスポート
export default router