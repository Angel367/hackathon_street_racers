import {add_heat_map} from "./heatmaps/add_heat_map.js";
import {get_polylabel_arr} from "./districts/get_polylabel_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";
import {get_postamats_data} from "./heatmaps/postamats/get_postamats_data.js";
import {get_houses_data} from "./heatmaps/houses/get_houses_data.js";
import {get_libraries_arr} from "./placemarks/libraries/get_libraries_arr.js";
import {get_cultures_arr} from "./placemarks/cultures/get_cultures_arr.js";
import {get_gosuslugies_arr} from "./placemarks/gosuslugies/get_gosuslugies_arr.js";
import {get_prints_arr} from "./placemarks/prints/get_prints_arr.js";
import {get_sports_arr} from "./placemarks/sports/get_sports_arr.js";
import {get_shops_arr} from "./placemarks/shops/get_shops_arr.js";
import {placemarks_handler} from "./placemarks/placemarks_handler.js";
import {get_neuro_data} from "./get_neuro_data.js";

ymaps.ready(['polylabel.create']).then(function () {
    const myMap = new ymaps.Map("map", {
        center: [55.73, 37.75],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
    const objectManager = new ymaps.ObjectManager();
    let polylabel;
    const polylabel_arr = get_polylabel_arr();
    polylabel_arr.forEach(function (item, i, district_arr) { objectManager.add(item); })
    const areas_arr = get_areas_arr();
    const postamats_data = get_postamats_data();
    const houses_data = get_houses_data();
    let selected_districts = [];

    let myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [55.76, 37.60],
        // Радиус круга в метрах.
        -1
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 10 км",
        // Содержимое хинта.
        //hintContent: "Подвинь меня"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 5
    });

    document.getElementById("districts").onchange = function () {
        if(document.getElementById("districts").checked) {
            myMap.geoObjects.add(objectManager);
            if(document.getElementById("disselect").checked){
            document.getElementById("disselect").checked = false;
            }
            //polylabel = new ymaps.polylabel.create(myMap, objectManager);
        }
        else {
            //polylabel.destroy()
            myMap.geoObjects.remove(objectManager);
        }
    }
    document.getElementById("population").onchange = function () {
        if(document.getElementById("population").checked) {
            polylabel = new ymaps.polylabel.create(myMap, objectManager);
        }
        else {
            polylabel.destroy()
        }
    }/*
    document.getElementById("poly").onchange = function () {
        if(document.getElementById("poly").checked) {
            objectManager.objects.options.set('fillColor', 'rgba(64,122,206,0.1)');
            }
        else {
            objectManager.objects.options.set('fillColor', 'rgba(64,122,206,0.45)');
        }
    }*/
    document.getElementById("areas").onchange = function () {
        if(document.getElementById("areas").checked) {
            areas_arr.forEach(function (item, i, district_arr) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            areas_arr.forEach(function (item, i, district_arr) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("selectiondistricts").onchange = function () {
        alert("W")
    let selected = [];
    for (var option of document.getElementById('selectiondistricts').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    if(document.getElementById("disselect").checked && !document.getElementById("areaselect").checked && selected.length > 0) {
        myMap.geoObjects.remove(objectManager)
        selected_districts = []

        for(var i = 0; i < objectManager.objects.getAll().length; i++){
            objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)'
        }
        for ( var i = 0; i < objectManager.objects.getAll().length; i++ )
        {
            var flag = true;
            for ( var j = 0; j < selected.length; j++ )
            {
            if ( selected[j]==i )
                {
                 flag = false;
            }
            }
            if(flag){
                objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.1)'
            }
            else {
                selected_districts.push(objectManager.objects.getAll()[i])
            }
        }
        if(selected.length>0){
        myMap.geoObjects.add(objectManager)
        }
        }
    else {
            myMap.geoObjects.remove(objectManager)
            for(var i = 0; i < objectManager.objects.getAll().length; i++){

            console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')

            }
            if(selected.length>0){
            myMap.geoObjects.add(objectManager)
            }

        }
    }
    document.getElementById("disselect").onchange = function () {
    var selected = [];
    for (var option of document.getElementById('selectiondistricts').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    myMap.geoObjects.remove(objectManager)
            for(var i = 0; i < objectManager.objects.getAll().length; i++){
                console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')
            }
            if(selected.length>0){
            myMap.geoObjects.add(objectManager)
            }
    if(!document.getElementById("disselect").checked && document.getElementById("districts").checked) {
    myMap.geoObjects.remove(objectManager)
             for(var i = 0; i < objectManager.objects.getAll().length; i++){

            console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')

            }
            if(selected.length>0){
        myMap.geoObjects.add(objectManager)
        }
        else{
        myMap.geoObjects.remove(objectManager);
        }
        }
        else if (!document.getElementById("disselect").checked){
        myMap.geoObjects.remove(objectManager);
        }
        }



    document.getElementById("selectionarea").onchange = function () {
    myMap.geoObjects.remove(objectManager)
    areas_arr.forEach(function (item, i, district_arr) {
    item.options.set('fillColor', '#905A7140');
    });

    var e = document.getElementById("selectionarea");
    var value = e.options[e.selectedIndex].value;
    if(document.getElementById("areaselect").checked && !document.getElementById("disselect").checked) {
        areas_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.add(item);
        if(value == 0 && i != 0){
                item.options.set('fillColor', '#905A7110');
                }
        if(value == 1 && i != 1 && i!= 2){
                item.options.set('fillColor', '#905A7110');
        }
        if(value == 2 && i!=3){
            item.options.set('fillColor', '#905A7110');
        }
        if(value == 3 && i!=4){
            item.options.set('fillColor', '#905A7110');
        }
        if(value == 4 && i!=5){
            item.options.set('fillColor', '#905A7110');
        }
        if(value == 5 && i!=6){
            item.options.set('fillColor', '#905A7110');
        }
        if(value == 6 && i!=7){
            item.options.set('fillColor', '#905A7110');
        }
        if(value == 7 && i!=8 && i!=9 && i!=10 && i!=11 && i!=12){
            item.options.set('fillColor', '#905A7110');
        }
        if(value == 8 && i!=13 && i!=14 && i!=15 && i!=16){
        item.options.set('fillColor', '#905A7110');
        }
            });
        }
    if(!document.getElementById('areaselect').checked) {
            areas_arr.forEach(function (item, i, district_arr) {
                item.options.set('fillColor', '#905A7140');
                myMap.geoObjects.remove(item);
            });
        }


        }

    document.getElementById("areaselect").onchange = function () {
    if(!document.getElementById("areaselect").checked) {
    areas_arr.forEach(function (item, i, district_arr) {
    myMap.geoObjects.remove(item);
    item.options.fillColor = '#905A7140';
    });
        }
        }

    function reset_checkboxes () {
    myMap.geoObjects.removeAll();
    if (document.getElementById("districts").checked) {
            document.getElementById("districts").checked = false;
            }
            if (document.getElementById("areas").checked) {
            document.getElementById("areas").checked = false;
            }
            if (document.getElementById("population").checked) {
            document.getElementById("population").checked = false;
            }
            if (document.getElementById("cultures_placemarks").checked) {
            document.getElementById("cultures_placemarks").checked = false;
            }
            if (document.getElementById("gosuslugies_placemarks").checked) {
            document.getElementById("gosuslugies_placemarks").checked = false;
            }
            if (document.getElementById("libraries_placemarks").checked) {
            document.getElementById("libraries_placemarks").checked = false;
            }
            if (document.getElementById("prints_placemarks").checked) {
            document.getElementById("prints_placemarks").checked = false;
            }
            if (document.getElementById("shops_placemarks").checked) {
            document.getElementById("shops_placemarks").checked = false;
            }
            if (document.getElementById("sports_placemarks").checked) {
            document.getElementById("sports_placemarks").checked = false;
            }
            if (document.getElementById("disselect").checked) {
            document.getElementById("disselect").checked = false;
            }
            if (document.getElementById("areaselect").checked) {
            document.getElementById("areaselect").checked = false;
            }
            if (document.getElementById("heat_map_houses").checked) {
            document.getElementById("heat_map_houses").checked = false;
            }
            if(document.getElementById("heat_map_houses").checked){
            //HMD_destroy();
            }
    for(var i = 0; i < objectManager.objects.getAll().length; i++){
            console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)');
    }

    areas_arr.forEach(function (item, i, district_arr) {
        item.options.fillColor = '#905A7140';
        });

    }



    ymaps.modules.require(['Heatmap'], function (Heatmap) {     // Тепловая карта
        var data = postamats_data,
        heatmap = new Heatmap(data);
        document.getElementById("heat_map_postamats").onchange = function () {
            if(document.getElementById("heat_map_postamats").checked) {
                heatmap.setMap(myMap)
            }
            else {
                heatmap.destroy()
            }
        }

        myMap.events.add('boundschange', function (event) {
            if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
                heatmap.options.set('radius', Math.pow(2,(event.get('newZoom')/1.5-3)));
            }
        });
    });
    ymaps.modules.require(['Heatmap'], function (Heatmap) {     // Тепловая карта

        var data = houses_data,
            heatmap = new Heatmap(data, {
                radius: 10,
            });
            document.getElementById("heat_map_houses").onchange = function () {

            if(document.getElementById("heat_map_houses").checked) {
                console.log(houses_data)
                heatmap.setMap(myMap)
            }
            else {

                heatmap.destroy()
            }
        }
           var button = document.getElementById('reset');
           button.addEventListener("click", function(event){
        heatmap.destroy();
            if (document.getElementById("heat_map_houses").checked) {
            document.getElementById("heat_map_houses").checked = false;
            }
        });

        myMap.events.add('boundschange', function (event) {
            if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
                heatmap.options.set('radius', Math.pow(2.1,(event.get('newZoom')/1.7-3)));
            }
        });
    });
    document.getElementById("execute").onclick = async function () {
        let neuro_data = await get_neuro_data(selected_districts)
        ymaps.modules.require(['Heatmap'], function (Heatmap) {     // Тепловая карта
            var data = neuro_data[0],
                heatmap = new Heatmap(data, {
                    radius: 10,
                })
            heatmap.setMap(myMap);
            var button = document.getElementById('reset');
           button.addEventListener("click", function(event){
        heatmap.destroy();
           })
        })
        neuro_data[1].forEach(function (item) {
            myMap.geoObjects.add(item);
        });
        neuro_data[2].forEach(function (item) {
            myMap.geoObjects.add(item);
        });
        neuro_data[3].forEach(function (item) {
            myMap.geoObjects.add(item);
        });
        neuro_data[4].forEach(function (item) {
            myMap.geoObjects.add(item);
        });
        neuro_data[5].forEach(function (item) {
            myMap.geoObjects.add(item);
        });
        neuro_data[6].forEach(function (item) {
            myMap.geoObjects.add(item);
        });
    }
    document.getElementById("reset").onclick = function () {
        //heatmap.destroy();
        reset_checkboxes()
        myMap.geoObjects.removeAll()
                var button = document.getElementById('reset');
                button.addEventListener("click", function(event){

                    //heatmap.destroy();
                    if (document.getElementById("heat_map_postamats").checked) {
                        document.getElementById("heat_map_postamats").checked = false;
                    }
                });
            }

    function reDrawCircle(event) {
        if(myCircle.geometry.getRadius() === -1 && !event) return
        myMap.geoObjects.add(myCircle);
        if (event) {
            myCircle.geometry.setCoordinates(event.get('coords'))
        }
        let newRadius = document.getElementById("radiusSlider").value
        if (parseInt(newRadius) === 0) {
            myMap.geoObjects.remove(myCircle);
            return;
        }
        myCircle.geometry.setRadius(newRadius);
    }

    document.getElementById("radiusSlider").onchange = function () {
        document.getElementById('rangeValue').innerHTML = this.value;
        reDrawCircle()
    }



    myMap.events.add('dblclick',
        function (event) {
            reDrawCircle(event)
        }
    );
    //placemarks_handler(myMap)
})




