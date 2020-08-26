<template>
  <div class="h-100 w-full flex items-center justify-center font-sans">
    <div class="border border-white-500 w-full bg-blue-500 shadow-md rounded pt-6 pb-8 px-5">
      <h3 class="text-center font-bold mb-5 text-4xl text-black bg-blue-300">Filtered Products</h3>
      <div v-if="this.filtered.length == 0" class="pb-0">
        <h1 class="text-center">Data tidak ada!</h1>
      </div>
      <div v-if="this.filtered.length >= 1" class="grid grid-cols-3 grid-rows-auto gap-3">
        <div class="" v-for="(l,idx) in filtered" :key="idx">
          <div class="mx-2 mb-auto rounded-t-full bg-white overflow-hidden shadow-lg p-5 border border-purple-500 w-6xl  pt-4 pb-4">
            <a>
              <img class="w-full p-4 rounded-t-full" v-bind:src="l.thumbnailUrl" alt="Sunset in the mountains">
              <a class="px-auto text-center py-4">
                <div class="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">{{l.title}}</div>
                <div class="font-semibold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-2">{{l.harga | currency }}</div>
              </a>
            </a>
            <button class="w-full font-bold h-10 bg-red-500" @click="add(l)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filtered',
  props: ['filtered'],
  methods: {
    check() {
      console.log(this.search)
    },
    add(l){
      console.log(l)
      this.$emit("add-cart", l)
    }
  }
}
</script>