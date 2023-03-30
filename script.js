const { createApp } = Vue;

createApp({
  data() {
    return {
      videos: [],
      message: '',
      input: '',
      showSuccessAlert: false,
    };
  },
  methods: {
    async onEnter() {
      
      if (this.input === '') {
        return
      }
      console.log('load')
      await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: this.input,
          type: 'video',
          key: '[ Your API key ]',
          maxResults: 3
        }
      })
        .then(response => {
          this.videos = response.data.items;
          console.log(this.videos)
        })
        .catch(error => {
          console.log(error);
        });
        console.log(this.videos[0].id.videoId)
        this.show()
        console.log('compl')
      },
      show(){
        this.showSuccessAlert=true;
      }
  },
  mounted() {

    
  },
  beforeUnmount() {

  },

}).mount("#app");
