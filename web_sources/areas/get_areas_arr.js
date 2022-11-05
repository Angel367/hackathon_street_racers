import {getPolygon0} from "./polygons/polygon0.js"
import {getPolygon1} from "./polygons/polygon1.js"
import {getPolygon2} from "./polygons/polygon2.js"
import {getPolygon3} from "./polygons/polygon3.js"
import {getPolygon4} from "./polygons/polygon4.js"
import {getPolygon5} from "./polygons/polygon5.js"
import {getPolygon6} from "./polygons/polygon6.js"
import {getPolygon7} from "./polygons/polygon7.js"
import {getPolygon8} from "./polygons/polygon8.js"
import {getPolygon11} from "./polygons/polygon11.js"
import {getPolygon12} from "./polygons/polygon12.js"
import {getPolygon13} from "./polygons/polygon13.js"
import {getPolygon14} from "./polygons/polygon14.js"
import {getPolygon15} from "./polygons/polygon15.js"
import {getPolygon16} from "./polygons/polygon16.js"
import {getPolygon31} from "./polygons/polygon31.js"
import {getPolygon32} from "./polygons/polygon32.js"
import {getPolygon33} from "./polygons/polygon33.js"
import {getPolygon34} from "./polygons/polygon34.js"
import {getPolygon21} from "./polygons/polygon21.js"
//polygon1 все координаты ЗАО
//polygon 11 ,12, 13,14,15,16 - это все части округа ЗАО
export function get_areas_arr(){
    let areasArr = []
    areasArr.push(getPolygon16())
    areasArr.push(getPolygon15());
    areasArr.push(getPolygon14());
    areasArr.push(getPolygon13());
    areasArr.push(getPolygon12());
    areasArr.push(getPolygon11());
    areasArr.push(getPolygon31());
    areasArr.push(getPolygon32());
    areasArr.push(getPolygon33());
    areasArr.push(getPolygon34());
    areasArr.push(getPolygon0());
    //areasArr.push(getPolygon1());
    areasArr.push(getPolygon2());
    //areasArr.push(getPolygon3());
    areasArr.push(getPolygon4());
    areasArr.push(getPolygon5());
    areasArr.push(getPolygon6());
    areasArr.push(getPolygon7());
    areasArr.push(getPolygon8());
    areasArr.push(getPolygon21());

    return areasArr;
}