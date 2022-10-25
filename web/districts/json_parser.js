import * as fs from 'fs';

export function json_parser(func) {
    fs.readFile('./apartment_centers_south.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        //console.log('File data:', jsonString)
        const obj = JSON.parse(jsonString);
        for(let i = 0; i < obj.elements.length; i++) {
            console.log(obj.elements[i].center.lon)
            func([obj.elements[i].center.lat, obj.elements[i].center.lon])
        }
    })
}