"use strict"

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);

//

let btns = document.querySelectorAll(".switch-btn");

let slider = {
    counter: 0,
    slides: document.querySelectorAll("article"),
    item: function () {
        return this.slides[this.counter]
    },
    next: function () {
        if (this.counter === this.slides.length - 1) {
            this.counter = 0;
        }
        else {
            this.counter++;
        }

    },

    prev: function () {
        if (this.counter === 0) {
            this.counter = this.slides.length - 1;
        }
        else {
            this.counter--;
        }

    },
    reset: function () {
        for (const slide of this.slides) {
            remove(slide, "current");
        }
    }
}

//inilize the slider

add(slider.slides[slider.counter], "current");


//event listner
document.addEventListener("click", (e) => {
    if (check(e.target, "fa-chevron-right")) {
        slider.next();
        slider.reset();
        add(slider.item(), "current");
    }
    else if (check(e.target, "fa-chevron-left")) {
        slider.prev();
        slider.reset();
        add(slider.item(), "current");
    }
})




