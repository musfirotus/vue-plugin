<template>
  <div class="container mx-auto pt-5 z-0">
    <h1 class="text-center font-bold mb-5 text-5xl text-black bg-blue-300">Products</h1>
    <search :message="message" @cari-data="cariData" />
    <cart @remove-cart="removeCart" :carts="carts" />
    <filtered @add-cart="addCart" :filtered="filtered" />
    <item @add-cart="addCart" :data="data" />
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'
import Search from '../components/Search.vue'
import Item from '../components/Item.vue'
import Filtered from '../components/Filtered.vue'

export default {
  name: 'Product',
  components: {
    Item,
    Cart,
    Search,
    Filtered
  },
  methods: {
    cariData(e) {
      const newData = [...this.data];
      if (e.length >= 3){
        this.message = "Loading..."
        this.filtered = newData.filter(val => val.title.toLowerCase().includes(e))
      }
      else {
        this.message = ""
        this.filtered = []
      }
    },
    removeCart(e){
      console.log(e);
      this.carts = this.carts.filter(
        (data) => data.id != e.id
      );
      this.data.unshift(e)
      this.$swal('Remove Item', 'Berhasil hapus cart!', 'info');
    },
    addCart(e){
      console.log(e)
      this.filtered = this.filtered.filter(
        (data) => data.id != e.id
      );
      this.carts.unshift(e);
      this.data = this.data.filter(
        (data) => data.id != e.id
      );
      this.$swal('Add Item', 'Berhasil tambah cart!', 'info');
    }
  },
  data() {
    return {
      searchValue: "",
      filtered: [],
      carts: [],
      message: "",
      data: [
        {
          "albumId": 1,
          "id": 1,
          "title": "Sepatu",
          "harga": 400000,
          "url": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
          "thumbnailUrl": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "Kacamata",
          "harga": 90000,
          "url": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "Body Oil",
          "harga": 500000,
          "url": "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "Oats",
          "harga": 12000,
          "url": "https://images.unsplash.com/photo-1571115637015-f572abdfc43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1571115637015-f572abdfc43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "Jam Tangan",
          "harga": 120000,
          "url": "https://images.unsplash.com/photo-1562157646-4303261af91e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1562157646-4303261af91e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 6,
          "title": "CupCake",
          "harga": 7000,
          "url": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 7,
          "title": "HP Sony",
          "harga": 7000000,
          "url": "https://images.unsplash.com/photo-1533156430273-a2cf57b09495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1533156430273-a2cf57b09495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 8,
          "title": "Masker Wajah",
          "harga": 18000,
          "url": "https://images.unsplash.com/photo-1596202353035-7fcf1a90094a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1596202353035-7fcf1a90094a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 9,
          "title": "Mouse Wireless",
          "harga": 86000,
          "url": "https://images.unsplash.com/photo-1591012911207-0dbac31f37da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1591012911207-0dbac31f37da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 10,
          "title": "Biskuit",
          "harga": 2000,
          "url": "https://images.unsplash.com/photo-1559856191-dbba44b72206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1559856191-dbba44b72206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 11,
          "title": "Piringan",
          "harga": 600000,
          "url": "https://images.unsplash.com/photo-1573247318238-340e78c72096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1573247318238-340e78c72096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 12,
          "title": "Camera",
          "harga": 3000000,
          "url": "https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 13,
          "title": "Camera",
          "harga": 2000000,
          "url": "https://images.unsplash.com/photo-1586446428524-a846750771df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1586446428524-a846750771df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 14,
          "title": "Acar",
          "harga": 20000,
          "url": "https://images.unsplash.com/photo-1570900652784-b1413343b986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1570900652784-b1413343b986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 15,
          "title": "Jam Tangan",
          "harga": 35000,
          "url": "https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 16,
          "title": "Case HP",
          "harga": 55000,
          "url": "https://images.unsplash.com/flagged/photo-1594344141311-8ea00ba55612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/flagged/photo-1594344141311-8ea00ba55612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 17,
          "title": "Game Console",
          "harga": 150000,
          "url": "https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 18,
          "title": "Sepatu",
          "harga": 300000,
          "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 19,
          "title": "Iphone",
          "harga": 9000000,
          "url": "https://images.unsplash.com/photo-1528911767216-351e4afc2a93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1528911767216-351e4afc2a93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 20,
          "title": "Shaker",
          "harga": 12000,
          "url": "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 21,
          "title": "HP Iphone",
          "harga": 8000000,
          "url": "https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 22,
          "title": "Camera Lens",
          "harga": 1000000,
          "url": "https://images.unsplash.com/photo-1597840900568-663e38b03f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1597840900568-663e38b03f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 23,
          "title": "Lighter",
          "harga": 1500,
          "url": "https://images.unsplash.com/photo-1570900555854-2ca419a816ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1570900555854-2ca419a816ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 24,
          "title": "Biji Kopi",
          "harga": 10000,
          "url": "https://images.unsplash.com/photo-1581191853005-15f8b24f6302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1581191853005-15f8b24f6302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 25,
          "title": "Sepatu",
          "harga": 200000,
          "url": "https://images.unsplash.com/photo-1580234763607-ed02ca76a4ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1580234763607-ed02ca76a4ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 26,
          "title": "Pisang",
          "harga": 18000,
          "url": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 27,
          "title": "Topi Rajut",
          "harga": 23000,
          "url": "https://images.unsplash.com/photo-1576529598261-96e376f6aabb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1576529598261-96e376f6aabb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 28,
          "title": "Americano",
          "harga": 14000,
          "url": "https://images.unsplash.com/photo-1544164559-2e64cabb6bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1544164559-2e64cabb6bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 29,
          "title": "HandBag",
          "harga": 32000,
          "url": "https://images.unsplash.com/photo-1543163836-2e529843d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1543163836-2e529843d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 30,
          "title": "Milk",
          "harga": 27000,
          "url": "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 31,
          "title": "Kacamata",
          "harga": 100000,
          "url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 32,
          "title": "Game Console",
          "harga": 300000,
          "url": "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 33,
          "title": "White Shirt",
          "harga": 70000,
          "url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 34,
          "title": "Speaker",
          "harga": 100000,
          "url": "https://images.unsplash.com/photo-1560701814-de5e72b8d346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1560701814-de5e72b8d346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 35,
          "title": "Stickers",
          "harga": 9000,
          "url": "https://images.unsplash.com/photo-1520218750893-2be45c7cbf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1520218750893-2be45c7cbf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 36,
          "title": "Request",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621170.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621170.svg"
        },
        {
          "albumId": 1,
          "id": 37,
          "title": "Framework",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621174.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621174.svg"
        },
        {
          "albumId": 1,
          "id": 38,
          "title": "Designer",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621182.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621182.svg"
        },
        {
          "albumId": 1,
          "id": 39,
          "title": "Programmer",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621196.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621196.svg"
        },
        {
          "albumId": 1,
          "id": 40,
          "title": "HTML",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621200.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621200.svg"
        },
        {
          "albumId": 1,
          "id": 41,
          "title": "Java",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621217.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621217.svg"
        },
        {
          "albumId": 1,
          "id": 42,
          "title": "Icons",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621206.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621206.svg"
        },
        {
          "albumId": 1,
          "id": 43,
          "title": "Innovation",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621210.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621210.svg"
        },
        {
          "albumId": 1,
          "id": 44,
          "title": "Integrated",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/2621/2621216.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621216.svg"
        },
        {
          "albumId": 1,
          "id": 45,
          "title": "UI Design",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/1488/1488590.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488590.svg"
        },
        {
          "albumId": 1,
          "id": 46,
          "title": "E-Learning",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/1488/1488544.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488544.svg"
        },
        {
          "albumId": 1,
          "id": 47,
          "title": "Boolean",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/1488/1488531.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488531.svg"
        },
        {
          "albumId": 1,
          "id": 48,
          "title": "Processor",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/1488/1488579.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488579.svg"
        },
        {
          "albumId": 1,
          "id": 49,
          "title": "AI",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/1488/1488527.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488527.svg"
        },
        {
          "albumId": 1,
          "id": 50,
          "title": "Hackathon",
          "harga": 10000,
          "url": "https://image.flaticon.com/icons/svg/1488/1488562.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488562.svg"
        }
      ]
    }
  }
}
</script>