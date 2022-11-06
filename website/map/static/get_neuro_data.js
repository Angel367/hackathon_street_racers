

export async function get_neuro_data(myMap) {
    let result = []
    result[0] = await fetch('http://87.242.92.163:5000/api?radius=1000&object_types=kiosk,tc,mfc,dk,library,sport&regions=район+Ясенево')
        .then((response) => response.json())
            .then((data) => {
                let data_arr = {}
                data_arr['type'] = 'FeatureCollection'
                data_arr['features'] = []
                let count = 0
                //console.log(data);
                //console.log(data.dk);
                for (var key in data) {
                    for (var i = 0; i < data[key].length; i++) {
                        //console.log(data[key][i][2])     // Каждая координата
                        data_arr.features[count] = {
                            id: 'id'+i.toString(),
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [data[key][i][0][1], data[key][i][0][0]]
                            },
                            properties: {
                                weight: data[key][i][2]
                            }
                        }
                        count += 1;
                    }
                }
                    return data_arr
            })

    return result
}