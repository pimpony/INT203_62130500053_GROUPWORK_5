app.component('photo-search', {
  props: {
    selecticon: Boolean,
    selectbar: Boolean,
    inputphoto: String
  },

  data() {
    return {
      input_title: ''
    }
  },

  template:
    /*html*/`

    <div class="flex items-center justify-end h-10  flex relative">
        <span v-if="selecticon" @click="this.$emit('toggle')" class="material-icons  text-3xl text-pink-400">
          search
        </span>
        
        <div v-if="selectbar">
          <input  @keyup ="inputdata" v-model="input_title"
            class="mr-2 p-1 w-72 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black  border-2 border-pink-300 rounded-sm"
            type="text" placeholder="Please enter text for searching photos">
          <button class="ml-2 p-1 rounded-sm focus:outline-none font-san border-2 border-pink-300 rounded-md" @click="this.$emit('toggle')">Cancel</button>
        </div>
        </div>


        
    `,

    methods: {
      inputdata() {
          let input = this.input_title
          this.$emit('input-data', input)

      }
  }

})