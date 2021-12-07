import dart_150 from "./people_squad/dart_150.jpg";
import solder_150 from "./people_squad/solder_150.jpeg";
import yoda_150 from "./people_squad/yoda_150.jpg";
import people1 from "./people_squad/people1.jpg";
import people2 from "./people_squad/people2.jpg";
import people3 from "./people_squad/people3.jpg";
import people4 from "./people_squad/people4.jpg";
import people5 from "./people_squad/people5.jpg";
import people7 from "./people_squad/people7.jpg";




import starship_150 from "./ships_squad/starship_150.jpg";
import starship1_150 from "./ships_squad/starship1_150.jpg";
import starship2_150 from "./ships_squad/starship2_150.jpeg";
import starship3_150 from "./ships_squad/starship3_150.jpg";
import starship4_150 from "./ships_squad/starship4_150.jpg";
import starship5_150 from "./ships_squad/starship5_150.jpg";
import starship6_150 from "./ships_squad/starship6_150.jpg";




function importAll(r: any) {
    return r.keys().map(r);
}

export const imagesPeopleBig = importAll(require.context('./big_pic', false, /\.(png|jpe?g|svg)$/));
export const imagesStarShipsBig = importAll(require.context('./ships_big', false, /\.(png|jpe?g|svg)$/));


export const imagesPeople = [dart_150, solder_150, yoda_150, people1, people2, people3, people4, people5, people7]
export const imagesStarShips = [starship_150, starship1_150, starship2_150, starship3_150, starship4_150, starship5_150, starship6_150]
