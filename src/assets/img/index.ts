import dart_150 from "./dart_150.jpg";
import solder_150 from "./solder_150.jpeg";
import yoda_150 from "./yoda_150.jpg";

import starship_150 from "./starship_150.jpg";
import starship1_150 from "./starship1_150.jpg";

function importAll(r: any) {
    return r.keys().map(r);
}

export const imagesPeopleBig = importAll(require.context('./big_pic', false, /\.(png|jpe?g|svg)$/));
export const imagesStarShipsBig = importAll(require.context('./ships_big', false, /\.(png|jpe?g|svg)$/));


export const imagesPeople = [dart_150, solder_150, yoda_150]
export const imagesStarShips = [starship_150, starship1_150]
