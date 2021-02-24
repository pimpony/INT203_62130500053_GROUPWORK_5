app.component('select-photo', {
    props: {
        select: Object,
        status: Boolean
    },

    template:
    /*html*/`
    <div v-if="status" class="w-full h-full bg-pink-200  mt-5 ">
        <div v-for="(gallery, index) in select" class="flex justify-center item-center">
          <img :src="gallery.src" class="w-10/12 h-6/12 my-10 ml-10 ">
          <button><span @click="this.$emit('closephoto')" v-if="status == true" class="material-icons close-icon text-white mb-96 ml-2 pl-2 bg-pink    ">
            close
          </span></button>
        </div>



        
    `

    
})