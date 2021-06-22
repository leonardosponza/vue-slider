const app = new vue(
    {
        el: '#app',
        data: {
            counter: 0,
            photos : [
                'img/img1.jpg',
                'img/img2.jpg',
                'img/img3.jpg',
                'img/img4.jpg'
            ]
        },
        methods:{
            nextphoto() {
                
                (this.counter == this.photo.lenght - 1) ? this.counter = 0
                :this.counter++;
            }
        }
    }
);
