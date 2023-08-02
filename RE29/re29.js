import { firmaView } from "./firmaView.js";
import { firma } from "./firma.js";
import { radnik} from "./radnik.js";

const radnik1 = new radnik(1, "radnik1", 20000, 10)
const radnik2 = new radnik(2, "radnik2", 30000, 15)
const radnik3 = new radnik(3, "radnik3", 40000, 18)
const radnik4 = new radnik(4, "radnik4", 50000, 19)
const radnik5 = new radnik(5, "radnik5", 60000, 17)

let niz1 = [radnik1, radnik2, radnik3]
let niz2 =[radnik4, radnik5]; 

const firma1 = new firma("comtrade", niz1)
const firma2 = new firma("code", niz2)

const view1 = new firmaView(firma1)
const view2 = new firmaView(firma2)

view1.ispisi()
view2.ispisi()

console.log("paraf")