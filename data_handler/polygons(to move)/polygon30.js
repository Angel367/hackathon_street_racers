
export function getPolygon30() {
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [55.806634, 37.5484606],
[55.8064658, 37.548688],
[55.8063389, 37.548856],
[55.8060341, 37.5492615],
[55.8059136, 37.5494206],
[55.8056564, 37.5497571],
[55.8056246, 37.5497964],
[55.8055063, 37.5499485],
[55.8052234, 37.5503091],
[55.8049579, 37.5506476],
[55.8046354, 37.551059],
[55.804631, 37.5510627],
[55.8040214, 37.5517541],
[55.8035676, 37.5522977],
[55.803435, 37.5524592],
[55.8031002, 37.5528527],
[55.8028093, 37.5532005],
[55.8026322, 37.5534122],
[55.8024294, 37.5536696],
[55.802371, 37.5537357],
[55.8022999, 37.5538251],
[55.8016961, 37.5545627],
[55.8016277, 37.5546467],
[55.8012856, 37.5550664],
[55.8009785, 37.5554319],
[55.8007344, 37.5557198],
[55.8006426, 37.555821],
[55.8005646, 37.555907],
[55.8003207, 37.5561821],
[55.7999405, 37.5565928],
[55.7998333, 37.5566976],
[55.7996375, 37.556888],
[55.7992916, 37.557208],
[55.7992485, 37.5572487],
[55.799193, 37.5573128],
[55.7990836, 37.5574155],
[55.7985637, 37.5579707],
[55.7983312, 37.5582345],
[55.7980117, 37.5585914],
[55.7979285, 37.5586823],
[55.7978625, 37.5587545],
[55.7978065, 37.5588151],
[55.7975977, 37.5590292],
[55.7972299, 37.5594273],
[55.7966837, 37.5600227],
[55.7964313, 37.5603003],
[55.7958793, 37.5608818],
[55.795788, 37.5609781],
[55.7956964, 37.561083],
[55.7955642, 37.5612427],
[55.7953788, 37.5614684],
[55.7952123, 37.561671],
[55.7949977, 37.5619323],
[55.794874, 37.5620775],
[55.7946184, 37.5623942],
[55.7944429, 37.5626082],
[55.7941438, 37.5629729],
[55.79411, 37.5630142],
[55.7940545, 37.5630819],
[55.7938825, 37.5632916],
[55.793859, 37.56333],
[55.7937479, 37.5634963],
[55.7936173, 37.563736],
[55.7935985, 37.5637705],
[55.7932278, 37.5648215],
[55.793169, 37.5649823],
[55.7931533, 37.5650224],
[55.792892, 37.5656918],
[55.7924699, 37.5668468],
[55.7924228, 37.566978],
[55.792195, 37.5675684],
[55.791797, 37.5686388],
[55.791552, 37.5691929],
[55.7914121, 37.5695931],
[55.7914418, 37.5699187],
[55.7915671, 37.5725269],
[55.7916519, 37.5744959],
[55.7921859, 37.5832229],
[55.7922209, 37.5839861],
[55.7928695, 37.5853943],
[55.7934376, 37.5865301],
[55.7939603, 37.5857332],
[55.7943695, 37.5850046],
[55.7944986, 37.5848158],
[55.7945682, 37.5847379],
[55.7946373, 37.5846713],
[55.7947215, 37.5845992],
[55.7948087, 37.5845314],
[55.7949031, 37.5844709],
[55.7949956, 37.5844248],
[55.7950829, 37.5843884],
[55.7953226, 37.5843177],
[55.7955018, 37.5842913],
[55.7958515, 37.5842473],
[55.7962623, 37.5842021],
[55.7972084, 37.5841136],
[55.7984943, 37.5839686],
[55.7999321, 37.5837205],
[55.8010218, 37.5835067],
[55.802378, 37.5831873],
[55.8037217, 37.5828408],
[55.8055211, 37.5823396],
[55.8064255, 37.5817843],
[55.8073742, 37.581197],
[55.8082874, 37.5806522],
[55.8079213, 37.5782525],
[55.8075172, 37.5758558],
[55.8067744, 37.5720435],
[55.8058899, 37.565972],
[55.8051331, 37.560897],
[55.8050112, 37.5600586],
[55.8049434, 37.5594274],
[55.8048668, 37.5583769],
[55.8048837, 37.5572797],
[55.8050159, 37.5558515],
[55.8051433, 37.5550939],
[55.8052619, 37.5544732],
[55.8053973, 37.5538361],
[55.805506, 37.5534047],
[55.805641, 37.5528894],
[55.8058252, 37.5522692],
[55.8060034, 37.5517731],
[55.8061438, 37.5513667],
[55.8062498, 37.5510947],
[55.8064243, 37.5507123],
[55.8068759, 37.5498319],
[55.8070814, 37.5494647],
[55.8070353, 37.5493631],
[55.806634, 37.5484606],

        ],
        // Координаты вершин внутреннего контура.

    ], {
        hintContent: "Савёловский район",
        balloonContent: "60079"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#6161C240',

        // Ширина обводки.
        strokeColor: '#AA000050',
        strokeWidth: 1
    });
    return myPolygon;
}
