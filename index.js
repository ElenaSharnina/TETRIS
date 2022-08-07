import  {Game } from "./modules/game.js";
import { View } from "./modules/view.js";
import { Controller } from "./modules/controller.js";

export const SIZE_BLOCK = 30;
export const COLUMNS = 10;
export const ROWS = 20;

const game = new Game();
const view = new View(document.querySelector('.container'), document.querySelector('.preview'));
const controller = new Controller(game, view);

controller.init('Enter');

view.hiddenPreview('Enter');
