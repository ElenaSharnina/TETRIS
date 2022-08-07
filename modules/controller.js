export class Controller {
  constructor(game, view) {
    this.game = game;
    this.view = view;
  }
  init(codeKey) {
    window.addEventListener("keydown", (e) => {
      if (e.code === codeKey) {
        this.view.init();
        this.start();
      }
    });
  }
  start() {
    this.view.showArea(this.game.viewArea);

    this.game.createUpdatePanels(this.view.createBlockScore(),this.view.createBlockNextTetromino());

    const tick = () => {
      const time = (1100 - 100*this.game.level);
      if(this.game.gameOver) return;
      setTimeout(() => {
        this.game.moveDown();
        this.view.showArea(this.game.viewArea);
        tick();
      }, time > 100 ? time : 100);
    };
    tick();

  
    window.addEventListener("keydown", (e) => {
      const key = e.code;

      switch (key) {
        case "ArrowLeft":
          this.sound("../../music/sfx-3.mp3");
          this.game.moveLeft();
          
          this.view.showArea(this.game.viewArea);
          break;
        case "ArrowRight":
          this.game.moveRight();
          this.view.showArea(this.game.viewArea);
          this.sound("../../music/sfx-3.mp3");
          break;
        case "ArrowDown":
          this.game.moveDown();
          this.view.showArea(this.game.viewArea);
          break;
        case "ArrowUp":
          this.game.rotateTetromino();
          this.view.showArea(this.game.viewArea);
          this.sound("../../music/sfx-2.mp3");
          break;
      }
    });
  }

  sound(link) {
    const audio = new Audio();
    audio.src = link;
    audio.autoplay = true;
  }
}
