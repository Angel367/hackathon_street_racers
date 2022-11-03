import * as postamats_yandex_coords from './postamats_yandex_coords_final.json' assert {type: 'json'};


export function add_heat_map_postamats(myMap) {


    ymaps.modules.require(['Heatmap'], function (Heatmap) {
        data = [[55.6727498,37.5066489], [55.6730674,37.5061104]],
        heatmap = new Heatmap(data);
        heatmap.setMap(myMap);
    });
}

export function add_heat_map_postamats1(myMap) {
    let t = postamats_yandex_coords
    let data1 = []
    for (var i = 0; i < t.default.length; i++) {
        data1[i] = [t.default[i].coordinates[1], t.default[i].coordinates[0]]
    }
    ymaps.modules.require(['Heatmap'], function (Heatmap) {
        var data = data1,
            heatmap = new Heatmap(data);
        heatmap.setMap(myMap);

    });
}