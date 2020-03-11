function Slider() {
    this.prevBtn = null;
    this.nextBtn = null;
    this.slideImg = null;
    this.indexImg = 0;
    this.imgUrls = ['img/pic.1.jpg', 'img/pic.2.jpg', 'img/pic.3.jpg', 'img/pic.4.jpg'];

    this.init = function (elId) {
        var that = this;

        var el = document.getElementById(elId);
        this.prevBtn = el.querySelector('.show-prev');
        this.nextBtn = el.querySelector('.show-next');
        this.slideImg = el.querySelector('.slide-image');
        this.indexImg = 0;

        //this.imgUrls = ['img_les.21/pic.1.jpg', 'img_les.21/pic.2.jpg', 'img_les.21/pic.3.jpg', 'img_les.21/pic.4.jpg'];
  
        this.slideImg.src = this.imgUrls[this.indexImg];

        this.prevBtn.addEventListener('click', function (e) { that.onPrevBtnClick(); });
        this.nextBtn.addEventListener('click', function (e) { that.onNextBtnClick(); });
    };

    this.onPrevBtnClick = function (e) {  
        this.indexImg--;
        if (this.indexImg < 0) {
            this.indexImg = this.imgUrls.length - 1;
        }
        this.slideImg.src = this.imgUrls[this.indexImg];
    };

    this.onNextBtnClick = function (e) {
        this.indexImg++;
        if (this.indexImg >= this.imgUrls.length) {
            this.indexImg = 0;
        }
        this.slideImg.src = this.imgUrls[this.indexImg];

    };
}

var slider1 = new Slider();
var slider2 = new Slider();

slider1.imgUrls.push('https://s0.rbk.ru/v6_top_pics/media/img/2/08/755620598425082.jpg');

slider1.init('slider1');
slider2.init('slider2');


