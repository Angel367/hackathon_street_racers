import {getPolygon0} from "./polygons/polygon0.js"
import {getPolygon1} from "./polygons/polygon1.js"
import {getPolygon2} from "./polygons/polygon2.js"
import {getPolygon3} from "./polygons/polygon3.js"
import {getPolygon4} from "./polygons/polygon4.js"
import {getPolygon5} from "./polygons/polygon5.js"
import {getPolygon6} from "./polygons/polygon6.js"
import {getPolygon7} from "./polygons/polygon7.js"
import {getPolygon8} from "./polygons/polygon8.js"


export function get_areas_arr(){
    let areasArr = []
    areasArr.push(getPolygon0());
    areasArr.push(getPolygon1());
    areasArr.push(getPolygon2());
    areasArr.push(getPolygon3());
    areasArr.push(getPolygon4());
    areasArr.push(getPolygon5());
    areasArr.push(getPolygon6());
    areasArr.push(getPolygon7());
    areasArr.push(getPolygon8());

    return areasArr;
}