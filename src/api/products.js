//商品のリスト
const database = [
    {id:1, name:'商品A', price:345, content:'商品Aの紹介です'},
    {id:2, name:'商品B', price:9876, content:'商品Bの紹介です'},
    {id:3, name:'商品C', price:123, content:'商品Cの紹介です'},
    ]
//インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
    // databaseを取得
    fetch(id) { return database },
    // idパラメーターに従ってdatabaseからdataを抽出
    find(id) { return database.find(el => el.id === id) },
    anyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id))
        }, 1000)
    }
}