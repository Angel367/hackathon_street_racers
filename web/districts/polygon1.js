export function getPolygon1() {
    const lines = fs.readFileSync('district_points.txt', 'utf8').split('\n');
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [55.75, 37.50],
            [55.80, 37.60],
            [55.75, 37.70],
            [55.70, 37.70],
            [55.70, 37.50]
        ],
        // Координаты вершин внутреннего контура.

    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Многоугольник"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0012',

        // Ширина обводки.
        strokeColor: '#AA000050',
        strokeWidth: 10
    });
    return myPolygon;
}