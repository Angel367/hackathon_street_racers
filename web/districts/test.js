import * as postamats_yandex_coords from './postamats_yandex_coords_final.json' assert {type: 'json'};

let t = postamats_yandex_coords
for (var i = 0; i < t.default.length; i++) {
    console.log(t.default[i].coordinates)
}

