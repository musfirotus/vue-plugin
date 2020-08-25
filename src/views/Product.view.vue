<template>
  <div class="container mx-auto pt-5 z-0">
    <h1 class="text-center font-bold mb-5 text-5xl text-black bg-blue-300">Products</h1>
    <search :message="message" @cari-data="cariData" />
    <cart :carts="carts" />
    <filtered :filtered="filtered" />
    <item :data="data" />
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
    addCart(e){
      this.data[e.id-1].carts=true
      this.carts.push(e)
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
          "url": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
          "thumbnailUrl": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "Kacamata",
          "url": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "Body Oil",
          "url": "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "Oats",
          "url": "https://images.unsplash.com/photo-1571115637015-f572abdfc43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1571115637015-f572abdfc43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "Jam Tangan",
          "url": "https://images.unsplash.com/photo-1562157646-4303261af91e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1562157646-4303261af91e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 6,
          "title": "CupCake",
          "url": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 7,
          "title": "HP Sony",
          "url": "https://images.unsplash.com/photo-1533156430273-a2cf57b09495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1533156430273-a2cf57b09495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 8,
          "title": "Masker Wajah",
          "url": "https://images.unsplash.com/photo-1596202353035-7fcf1a90094a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1596202353035-7fcf1a90094a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 9,
          "title": "Mouse Wireless",
          "url": "https://images.unsplash.com/photo-1591012911207-0dbac31f37da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1591012911207-0dbac31f37da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 10,
          "title": "Biskuit",
          "url": "https://images.unsplash.com/photo-1559856191-dbba44b72206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1559856191-dbba44b72206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 11,
          "title": "Piringan",
          "url": "https://images.unsplash.com/photo-1573247318238-340e78c72096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1573247318238-340e78c72096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 12,
          "title": "Camera",
          "url": "https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60https://images.unsplash.com/photo-1584711758878-ed5ae601ce5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 13,
          "title": "Camera",
          "url": "https://images.unsplash.com/photo-1586446428524-a846750771df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1586446428524-a846750771df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 14,
          "title": "Acar",
          "url": "https://images.unsplash.com/photo-1570900652784-b1413343b986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1570900652784-b1413343b986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 15,
          "title": "Jam Tangan",
          "url": "https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 16,
          "title": "Case HP",
          "url": "https://images.unsplash.com/flagged/photo-1594344141311-8ea00ba55612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/flagged/photo-1594344141311-8ea00ba55612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 17,
          "title": "Game Console",
          "url": "https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 18,
          "title": "Sepatu",
          "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 19,
          "title": "Iphone",
          "url": "https://images.unsplash.com/photo-1528911767216-351e4afc2a93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1528911767216-351e4afc2a93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 20,
          "title": "Shaker",
          "url": "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 21,
          "title": "HP Iphone",
          "url": "https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 22,
          "title": "Camera Lens",
          "url": "https://images.unsplash.com/photo-1597840900568-663e38b03f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1597840900568-663e38b03f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 23,
          "title": "Lighter",
          "url": "https://images.unsplash.com/photo-1570900555854-2ca419a816ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
          "thumbnailUrl": "https://images.unsplash.com/photo-1570900555854-2ca419a816ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
          "albumId": 1,
          "id": 24,
          "title": "Customer Review",
          "url": "https://image.flaticon.com/icons/svg/2621/2621073.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621073.svg"
        },
        {
          "albumId": 1,
          "id": 25,
          "title": "Dashboard",
          "url": "https://image.flaticon.com/icons/svg/2621/2621084.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621084.svg"
        },
        {
          "albumId": 1,
          "id": 26,
          "title": "Interface",
          "url": "https://image.flaticon.com/icons/svg/2621/2621091.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621091.svg"
        },
        {
          "albumId": 1,
          "id": 27,
          "title": "Interfaces",
          "url": "https://image.flaticon.com/icons/svg/2621/2621100.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621100.svg"
        },
        {
          "albumId": 1,
          "id": 28,
          "title": "Data Security",
          "url": "https://image.flaticon.com/icons/svg/2621/2621105.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621105.svg"
        },
        {
          "albumId": 1,
          "id": 29,
          "title": "Settings",
          "url": "https://image.flaticon.com/icons/svg/2621/2621147.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621147.svg"
        },
        {
          "albumId": 1,
          "id": 30,
          "title": "Database",
          "url": "https://image.flaticon.com/icons/svg/2621/2621107.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621107.svg"
        },
        {
          "albumId": 1,
          "id": 31,
          "title": "Deadline",
          "url": "https://image.flaticon.com/icons/svg/2621/2621112.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621112.svg"
        },
        {
          "albumId": 1,
          "id": 32,
          "title": "Dependencies",
          "url": "https://image.flaticon.com/icons/svg/2621/2621122.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621122.svg"
        },
        {
          "albumId": 1,
          "id": 33,
          "title": "Deployment",
          "url": "https://image.flaticon.com/icons/svg/2621/2621127.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621127.svg"
        },
        {
          "albumId": 1,
          "id": 34,
          "title": "Edit Code",
          "url": "https://image.flaticon.com/icons/svg/2621/2621153.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621153.svg"
        },
        {
          "albumId": 1,
          "id": 35,
          "title": "Error",
          "url": "https://image.flaticon.com/icons/svg/2621/2621158.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621158.svg"
        },
        {
          "albumId": 1,
          "id": 36,
          "title": "Request",
          "url": "https://image.flaticon.com/icons/svg/2621/2621170.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621170.svg"
        },
        {
          "albumId": 1,
          "id": 37,
          "title": "Framework",
          "url": "https://image.flaticon.com/icons/svg/2621/2621174.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621174.svg"
        },
        {
          "albumId": 1,
          "id": 38,
          "title": "Designer",
          "url": "https://image.flaticon.com/icons/svg/2621/2621182.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621182.svg"
        },
        {
          "albumId": 1,
          "id": 39,
          "title": "Programmer",
          "url": "https://image.flaticon.com/icons/svg/2621/2621196.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621196.svg"
        },
        {
          "albumId": 1,
          "id": 40,
          "title": "HTML",
          "url": "https://image.flaticon.com/icons/svg/2621/2621200.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621200.svg"
        },
        {
          "albumId": 1,
          "id": 41,
          "title": "Java",
          "url": "https://image.flaticon.com/icons/svg/2621/2621217.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621217.svg"
        },
        {
          "albumId": 1,
          "id": 42,
          "title": "Icons",
          "url": "https://image.flaticon.com/icons/svg/2621/2621206.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621206.svg"
        },
        {
          "albumId": 1,
          "id": 43,
          "title": "Innovation",
          "url": "https://image.flaticon.com/icons/svg/2621/2621210.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621210.svg"
        },
        {
          "albumId": 1,
          "id": 44,
          "title": "Integrated",
          "url": "https://image.flaticon.com/icons/svg/2621/2621216.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/2621/2621216.svg"
        },
        {
          "albumId": 1,
          "id": 45,
          "title": "UI Design",
          "url": "https://image.flaticon.com/icons/svg/1488/1488590.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488590.svg"
        },
        {
          "albumId": 1,
          "id": 46,
          "title": "E-Learning",
          "url": "https://image.flaticon.com/icons/svg/1488/1488544.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488544.svg"
        },
        {
          "albumId": 1,
          "id": 47,
          "title": "Boolean",
          "url": "https://image.flaticon.com/icons/svg/1488/1488531.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488531.svg"
        },
        {
          "albumId": 1,
          "id": 48,
          "title": "Processor",
          "url": "https://image.flaticon.com/icons/svg/1488/1488579.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488579.svg"
        },
        {
          "albumId": 1,
          "id": 49,
          "title": "AI",
          "url": "https://image.flaticon.com/icons/svg/1488/1488527.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488527.svg"
        },
        {
          "albumId": 1,
          "id": 50,
          "title": "Hackathon",
          "url": "https://image.flaticon.com/icons/svg/1488/1488562.svg",
          "thumbnailUrl": "https://image.flaticon.com/icons/svg/1488/1488562.svg"
        }
      ]
    }
  }
}
</script>