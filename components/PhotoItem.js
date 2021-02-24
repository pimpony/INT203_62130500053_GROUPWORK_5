app.component('count-photo', {
  props: ['count'],

  template:
    /*html*/`
    
           {{ count }}
          
        
    `
})

app.component('photo-item', {
  props: {
      photoitem: Object,

  },

  template:
    /*html*/`
    <div v-if="this.$emit('photoitem') !== 0"class=" ">
        <li v-for="(photo, index) in photoitem" class="flex flex-col items-center w-full mt-5">
          
          <div class="w-full text-gray-700 font-san flex  w-48 flex justify-between item-center">
          <button @click="this.$emit('zoomphoto', index)"><img :src="photo.src" class=" w-full rounded-sm"
              :alt="photo.title"></button>
          <div class="flex flex-row justify-start space-x-1">
            <button class="bg-pink-400 text-white  items-center font-semibold px-3 my-auto mx-3  rounded-md focus:outline-none" @click="this.$emit('fav', index)" >
               LIKE  
              <span class="material-icons text-white text-xl ml-1"  v-if="photo.like > 0"> favorite</span>
            </button>
            <div class=" w-64">
                <p class="text-lg  text-pink-400 flex justify-center item-center">{{ photo.title }}</p>
                <p class="text-lg ">{{ photo.detail }}</p>
              </div>
            

            
</div>
      
      


     

    `
})