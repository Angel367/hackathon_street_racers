import * as postamats_yandex_coords from './postamats_yandex_coords_final.json' assert {type: 'json'};

function test(){
var postData = JSON.parse(postamats_yandex_coords);
alert(postamats_yandex_coords[0]);
var arrPostamats = [];
for(var i = 0; i < postData.length; i++){
    var lines = postData[i].split(", ");
    arrPostamats[i]=Placemark(lines[1], lines[0]);
    console.log(arrPostamats[i])
}
}