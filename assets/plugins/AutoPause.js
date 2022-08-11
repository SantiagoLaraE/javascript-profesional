class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    this.observerFunction = this.observerFunction;

  }
  run(player) {
    this.player = player;

    //Observer
    this.observerFunction();

    //Visibility Change
    document.addEventListener("visibilitychange", this.handlerVisibilityChange);
  }

  handlerIntersection(entries) {

    const entry = entries[0];

    if (entry.isIntersecting) {
        this.player.media.play();
    } else {
      this.player.media.pause();
    }

  }

  handlerVisibilityChange() {
    const isVisible = document.visibilityState === "visible";

    if (isVisible) {
        this.observerFunction();
    } else {
      this.player.media.pause();
    }
  }

  observerFunction (){
    const observer = new IntersectionObserver(this.handlerIntersection, {
        threshold: this.threshold,
      });
  
      observer.observe(this.player.media);
  }
}

// function AutoPause() {

// }

// AutoPause.prototype.run = (player)=>{
//     const options = {
//         rootMargin: '0px',
//         threshold: 0,
//     }

//     const observer = new IntersectionObserver((entries)=>{
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 player.media.pause();
//             }
//         })
//     }, options);

//     observer.observe(player.media);
// }

export default AutoPause;
