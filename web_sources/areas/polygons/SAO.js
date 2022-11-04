import {get_polylabel39} from "../../districts/polylabels/polylabel39.js"
import {get_polylabel36} from "../../districts/polylabels/polylabel36.js"
import {get_polylabel42} from "../../districts/polylabels/polylabel42.js"
import {get_polylabel38} from "../../districts/polylabels/polylabel38.js"
import {get_polylabel34} from "../../districts/polylabels/polylabel34.js"
import {get_polylabel35} from "../../districts/polylabels/polylabel35.js"
import {get_polylabel27} from "../../districts/polylabels/polylabel27.js"
import {get_polylabel24} from "../../districts/polylabels/polylabel24.js"
import {get_polylabel26} from "../../districts/polylabels/polylabel26.js"
import {get_polylabel22} from "../../districts/polylabels/polylabel22.js"
import {get_polylabel32} from "../../districts/polylabels/polylabel32.js"
import {get_polylabel30} from "../../districts/polylabels/polylabel30.js"
import {get_polylabel29} from "../../districts/polylabels/polylabel29.js"
import {get_polylabel25} from "../../districts/polylabels/polylabel25.js"
import {get_polylabel23} from "../../districts/polylabels/polylabel23.js"
import {get_polylabel37} from "../../districts/polylabels/polylabel37.js"
export function getasdPolygon0(){
    return ({
        type: 'Feature',
        id: 1,
        geometry: {
            type: 'Polygon',
            coordinates: [
       [get_polylabel39, get_polylabel36, get_polylabel42, get_polylabel38, get_polylabel34,
        get_polylabel35, get_polylabel27, get_polylabel24, get_polylabel26, get_polylabel22,
        get_polylabel32, get_polylabel30, get_polylabel29, get_polylabel25, get_polylabel23,
        get_polylabel37]

        ]
        },
        properties: {
            name: 'район Кунцево'
        },
        options: {
            labelDefaults: 'light',
            labelLayout: '<div style="background: rgba(255, 255, 255, 0.3);'+
        'border-radius: 50%;'+
        'border: 6px solid rgb(160,233,255);'+
        'box-shadow: 0 0 5px rgb(160,233,255);'+
        'color: #FFF;'+
        'display: inline-block;'+
        'font-weight: bold;'+
        'line-height: 55px;'+
        'margin-right: 0;'+
        'text-align: center;'+
        'font-family: Arial;'+
        'width: 55px;height: 55px"<p>150344</p></div>' +
        '<div style="color: white;'+
        'font-family: Arial;'+
        'font-size: 12px;'+
        'font-weight: bold;'+
        'text-align: center;'+
        'text-shadow: 0 0 5px rgba(42,58,89,0.5);"'+
        ' <p>'+'район Кунцево</p></div>',
                                    fillColor: 'rgba(64,122,206,0.45)',
                // Цвет обводки.
                strokeColor: 'rgb(160,233,255)',
                strokeWidth: '2',
                // Отключим показ всплывающей подсказки при наведении на полигон.
                openHintOnHover: false,
                // Размер текста подписей зависит от масштаба.
                // На уровнях зума 3-6 размер текста равен 12, а на уровнях зума 7-18 равен 14.
                labelTextSize: {'3_6': 12, '7_18': 14},
                cursor: 'grab',
                labelDotCursor: 'pointer',
                // Допустимая погрешность в расчете вместимости подписи в полигон.
                labelPermissibleInaccuracyOfVisibility: 4,
                labelDotLayout: '<div style="background: #a0e9ff;width: 10px; height: 10px; border-radius: 5px;"></div>',
        },

    });
}
