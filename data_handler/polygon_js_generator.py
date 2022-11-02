import re
import random
import json
import math

text = '''
export function get_polylabelREPLACE_TO_I(){
    return ({
        type: 'Feature',
        id: REPLACE_TO_I,
        geometry: {
            type: 'Polygon',
            coordinates: [[
                REPLACE_TO_COORDS
            ]]
        },
        properties: {
            name: 'REPLACE_TO_NAME'
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
        'width: 55px;height: 55px"<p>REPLACE_TO_POPULATION</p></div>' +
        '<div style="color: white;'+
        'font-family: Arial;'+
        'font-size: 12px;'+
        'font-weight: bold;'+
        'text-align: center;'+
        'text-shadow: 0 0 5px rgba(42,58,89,0.5);"'+
        ' <p>'+'REPLACE_TO_NAME</p></div>',
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
'''


def create_hexagon_grid_coords(startx, starty, endx, endy, radius):
    # calculate side length given radius
    sl = (2 * radius) * math.tan(math.pi / 6)
    # calculate radius for a given side-length
    # (a * (math.cos(math.pi / 6) / math.sin(math.pi / 6)) / 2)
    # see http://www.calculatorsoup.com/calculators/geometry-plane/polygon.php

    # calculate coordinates of the hexagon points
    # sin(30)
    p = sl * 0.5
    b = sl * math.cos(math.radians(30))
    w = b * 2
    h = 2 * sl

    # offset start and end coordinates by hex widths and heights to guarantee coverage
    startx = startx - w
    starty = starty - h
    endx = endx + w
    endy = endy + h

    origx = startx
    origy = starty

    # offsets for moving along and up rows
    xoffset = b
    yoffset = 3 * p

    polygons = []
    row = 1
    counter = 0

    while starty < endy:
        if row % 2 == 0:
            startx = origx + xoffset
        else:
            startx = origx
        while startx < endx:
            p1x = startx
            p1y = starty + p
            p2x = startx
            p2y = starty + (3 * p)
            p3x = startx + b
            p3y = starty + h
            p4x = startx + w
            p4y = starty + (3 * p)
            p5x = startx + w
            p5y = starty + p
            p6x = startx + b
            p6y = starty
            poly = [
                (p1x, p1y),
                (p2x, p2y),
                (p3x, p3y),
                (p4x, p4y),
                (p5x, p5y),
                (p6x, p6y)
            ]
            polygons.append(poly)
            counter += 1
            startx += w
        starty += yoffset
        row += 1
    return polygons








def generate_js_files():
    with open('multipolygons.json', encoding='utf-8') as file:
        data = json.load(file)
        coords_arr = []
        names = []
        populations = []

        for i in data:
            names.append(i)
            coords_str = ""
            for j in data[i]:
                coords_str += str(j) + ',\n'
            coords_arr.append(coords_str)
        with open('district_population.txt', encoding='utf-8') as file_pop:
            lines = file_pop.readlines()
            for line in lines:
                populations.append(re.findall(r'[0-9]+', line)[0])

    for i in range(0, len(names)):
        file_name = "areas(to move)/polylabel" + str(i) + ".js"
        f = open(file_name, 'w', encoding='utf-8')
        r = lambda: random.randint(0, 255)
        color = '#%02X%02X%02X' % (r(), r(), r())
        info = text.replace("REPLACE_TO_I", str(i))
        info = info.replace("REPLACE_TO_NAME", names[i])
        info = info.replace("REPLACE_TO_COORDS", coords_arr[i])
        info = info.replace("REPLACE_TO_COLOR", color)
        info = info.replace("REPLACE_TO_POPULATION", populations[i])
        f.write(info)


def parse_houses():
    with open("apartment_centers_south.json", 'r', encoding='utf-8') as file:
        file_info = file.read()
        dict_data = json.loads(file_info)

        elements = dict_data['elements']
        result = "var data = ["
        for element in elements:
            result += '[' + str(element['center']['lat']) + ',' + str(element['center']['lon']) + '], '

        file_name = "data_for_js_file.txt"
        f = open(file_name, 'x', encoding='utf-8')
        f.write(result)


def line_parse(line):
    return re.findall(r'\d+\.\d+', line)


def json_test_parse():
    with open('postamats_yandex_coords.json', encoding='utf-8') as file:
        data = json.load(file)
        d = {}
        for i in data:
            #print(i)
            d[i[0]] = i[1]

        print(d)
        with open('postamats_yandex_coords_final.json', 'w', encoding='utf-8') as file1:
            json_data = json.dumps([{'id': k, 'coordinates': v} for k,v in d.items()], indent=4)
            file1.write(json_data)


if __name__ == "__main__":
    json_test_parse()
    #(create_hexagon_grid_coords(1, 1, 4, 4, 3))
    #generate_js_files()
    #parse_houses()
