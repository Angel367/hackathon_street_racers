
export async function get_neuro_data() {
        let request_url = 'http://87.242.92.163:5000/api?radius=REPLACE_TO_RADIUS&object_types=REPLACE_TO_OBJECTS&regions=REPLACE_TO_DISTRICTS'
        let temp_radius = 1000;
        let temp_district_value = "район+Ясенево"
        let temp_objects = []

        if(document.getElementById("cultures_placemarks").checked) {
            temp_objects.push('dk');
        }
        if (document.getElementById("gosuslugies_placemarks").checked) {
            temp_objects.push('mfc');
        }
        if (document.getElementById("libraries_placemarks").checked)  {
            temp_objects.push('library');
        }
        if (document.getElementById("prints_placemarks").checked) {
            temp_objects.push('kiosk');
        }
        if (document.getElementById("shops_placemarks").checked) {
            temp_objects.push('tc');
        }
        if (document.getElementById("sports_placemarks").checked) {
            temp_objects.push('sport');
        }

        request_url = request_url.replaceAll("REPLACE_TO_RADIUS", temp_radius.toString())
        request_url = request_url.replaceAll("REPLACE_TO_DISTRICTS", temp_district_value)
        request_url = request_url.replaceAll("REPLACE_TO_OBJECTS", temp_objects+"")

    let result = []
    let neuro_data = await fetch(request_url)
        .then((response) => response.json())
            .then((data) => {
                    return data
            })
    let heat_map_data = {}
    let cultures_arr = []
    let gosusligi_arr = []
    let libraries_arr = []
    let prints_arr = []
    let shops_arr = []
    let sports_arr = []
    heat_map_data['type'] = 'FeatureCollection'
    heat_map_data['features'] = []
    let count = 0
    for (var key in neuro_data) {
        for (var i = 0; i < neuro_data[key].length; i++) {
            //console.log(data[key][i][2])     // Каждая координата
            heat_map_data.features[count] = {
                id: 'id'+i.toString(),
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                properties: {
                    weight: neuro_data[key][i][2]
                }
            }
            count += 1;
            if (key === 'dk') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#brownBookIcon',
                })
                cultures_arr.push(myGeoObject)
            }
            if (key === 'mfc') {
                let myGeoObject = new ymaps.GeoObject({
                    // Описание геометрии.
                    geometry: {
                        type: "Point",
                        coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                    },
                    // Свойства.
                    properties: {}
                    }, {
                    preset: 'islands#blueInfoIcon',
                })
                gosusligi_arr.push(myGeoObject)
            }
            if (key === 'library') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#greenLeisureIcon',
                })
                libraries_arr.push(myGeoObject)
            }
            if (key === 'kiosk') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#greenLeisureIcon',
                })
                prints_arr.push(myGeoObject)
            }
            if (key === 'tc') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#greenLeisureIcon',
                })
                shops_arr.push(myGeoObject)
            }
            if (key === 'sport') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#greenLeisureIcon',
                })
                sports_arr.push(myGeoObject)
            }
        }
    }

    result[0] = heat_map_data
    result[1] = cultures_arr
    result[2] = gosusligi_arr
    result[3] = libraries_arr
    result[4] = prints_arr
    result[5] = shops_arr
    result[6] = sports_arr
    return result
}