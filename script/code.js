const {createApp} = Vue

createApp(
    {
        data () {
            return{
            firstName: 'Leah',
            lastName: 'Basson',
            count: 0
            }
        }
    }
).mount('#app') //renders it on the browser