const app = new vue(
    {
        el: '#app',
        data: {
            counter: 0,
            photos : [
                'https://i.pinimg.com/originals/15/bb/40/15bb40fd839ffb44b03450bac891ec52.jpg',
                'https://www.diregiovani.it/wp-content/uploads/2019/09/gatto-manggo-8.jpg',
                'https://metronews.it/sites/default/files/articolo/2019/01/17/animali_foche.jpg',
                'https://www.viaggiatorinelmondo.com/wp-content/uploads/2015/10/foca0.jpg'
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
