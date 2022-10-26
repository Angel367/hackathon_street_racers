import re
import random
import json

text = '''
export function getPolygonREPLACE_TO_I() {
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            REPLACE_TO_COORDS
        ],
        // Координаты вершин внутреннего контура.

    ], {
        hintContent: "REPLACE_TO_NAME",
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: 'REPLACE_TO_COLOR40',

        // Ширина обводки.
        strokeColor: '#AA000050',
        strokeWidth: 1
    });
    return myPolygon;
}
'''


def generate_js_files():
    with open('okruga_polygons.json', encoding='utf-8') as file:
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
        """
        for line in lines:
            coords = line_parse(line)
            coords_str = ""
            for i in range(0, len(coords), 2):
                coords_str += ('[' + coords[i] + ',' + coords[i+1] + ']' + ',\n')
            coords_arr.append(coords_str)
            district_name = ""
            for ch in line:
                if ch == '(':
                    break
                district_name += ch
            names.append(district_name)
        """

    for i in range(0, len(names)):
        file_name = "areas(to move)/polygon" + str(i) + ".js"
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


if __name__ == "__main__":
    generate_js_files()
    #parse_houses()
