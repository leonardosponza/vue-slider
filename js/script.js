const app = new Vue(
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
        methods: {
            nextphoto() {               
                (this.counter == this.photos.length - 1) ? this.counter = 0 
                :this.counter++;
            },
            prevphoto() {
                if(this.counter == 0){
                    this.counter == this.photos.length - 1;
                } else {
                    this.counter --;
                }
            },
            cambiaphoto(indice){
                this.counter = indice;
            }
        }
    }
);
