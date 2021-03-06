ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([118.858349, -11.452934, 125.544500, -7.347490]);
var wms_layers = [];

var format_PresentasePengangguran2020_0 = new ol.format.GeoJSON();
var features_PresentasePengangguran2020_0 = format_PresentasePengangguran2020_0.readFeatures(json_PresentasePengangguran2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PresentasePengangguran2020_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PresentasePengangguran2020_0.addFeatures(features_PresentasePengangguran2020_0);
var lyr_PresentasePengangguran2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PresentasePengangguran2020_0, 
                style: style_PresentasePengangguran2020_0,
                interactive: true,
    title: 'Presentase Pengangguran (2020)<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_0.png" /> 2,1 - 2,526<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_1.png" /> 2,526 - 2,98<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_2.png" /> 2,98 - 3,088<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_3.png" /> 3,088 - 3,133<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_4.png" /> 3,133 - 3,501<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_5.png" /> 3,501 - 3,692<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_6.png" /> 3,692 - 3,972<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_7.png" /> 3,972 - 4,018<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_8.png" /> 4,018 - 4,182<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_9.png" /> 4,182 - 4,719<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_10.png" /> 4,719 - 4,895<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_11.png" /> 4,895 - 5,869<br />\
    <img src="styles/legend/PresentasePengangguran2020_0_12.png" /> 5,869 - 10,9<br />'
        });
var format_BeratRata2BabiyangdiPotong2018kg_1 = new ol.format.GeoJSON();
var features_BeratRata2BabiyangdiPotong2018kg_1 = format_BeratRata2BabiyangdiPotong2018kg_1.readFeatures(json_BeratRata2BabiyangdiPotong2018kg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BeratRata2BabiyangdiPotong2018kg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeratRata2BabiyangdiPotong2018kg_1.addFeatures(features_BeratRata2BabiyangdiPotong2018kg_1);
var lyr_BeratRata2BabiyangdiPotong2018kg_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeratRata2BabiyangdiPotong2018kg_1, 
                style: style_BeratRata2BabiyangdiPotong2018kg_1,
                interactive: true,
    title: 'Berat Rata2 Babi yang di Potong 2018 (kg) <br />\
    <img src="styles/legend/BeratRata2BabiyangdiPotong2018kg_1_0.png" /> 0 - 10<br />\
    <img src="styles/legend/BeratRata2BabiyangdiPotong2018kg_1_1.png" /> 10 - 20<br />\
    <img src="styles/legend/BeratRata2BabiyangdiPotong2018kg_1_2.png" /> 20 - 30<br />\
    <img src="styles/legend/BeratRata2BabiyangdiPotong2018kg_1_3.png" /> 30 - 40<br />\
    <img src="styles/legend/BeratRata2BabiyangdiPotong2018kg_1_4.png" /> 40 - 50<br />\
    <img src="styles/legend/BeratRata2BabiyangdiPotong2018kg_1_5.png" /> 50 - 60<br />'
        });
var format_PorkConsumptionPerCapitakginNTT2020_2 = new ol.format.GeoJSON();
var features_PorkConsumptionPerCapitakginNTT2020_2 = format_PorkConsumptionPerCapitakginNTT2020_2.readFeatures(json_PorkConsumptionPerCapitakginNTT2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PorkConsumptionPerCapitakginNTT2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorkConsumptionPerCapitakginNTT2020_2.addFeatures(features_PorkConsumptionPerCapitakginNTT2020_2);
var lyr_PorkConsumptionPerCapitakginNTT2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PorkConsumptionPerCapitakginNTT2020_2, 
                style: style_PorkConsumptionPerCapitakginNTT2020_2,
                interactive: true,
    title: 'Pork Consumption Per Capita (kg) in NTT 2020<br />\
    <img src="styles/legend/PorkConsumptionPerCapitakginNTT2020_2_0.png" /> 2 - 4<br />\
    <img src="styles/legend/PorkConsumptionPerCapitakginNTT2020_2_1.png" /> 4 - 6<br />\
    <img src="styles/legend/PorkConsumptionPerCapitakginNTT2020_2_2.png" /> 6 - 8<br />\
    <img src="styles/legend/PorkConsumptionPerCapitakginNTT2020_2_3.png" /> 8 - 10<br />\
    <img src="styles/legend/PorkConsumptionPerCapitakginNTT2020_2_4.png" /> 10 - 12<br />\
    <img src="styles/legend/PorkConsumptionPerCapitakginNTT2020_2_5.png" /> 12 - 26<br />'
        });
var format_PigPopulation2020_3 = new ol.format.GeoJSON();
var features_PigPopulation2020_3 = format_PigPopulation2020_3.readFeatures(json_PigPopulation2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PigPopulation2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PigPopulation2020_3.addFeatures(features_PigPopulation2020_3);
var lyr_PigPopulation2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PigPopulation2020_3, 
                style: style_PigPopulation2020_3,
                interactive: true,
    title: 'Pig Population 2020<br />\
    <img src="styles/legend/PigPopulation2020_3_0.png" /> 48992 - 58620<br />\
    <img src="styles/legend/PigPopulation2020_3_1.png" /> 58620 - 79957<br />\
    <img src="styles/legend/PigPopulation2020_3_2.png" /> 79957 - 110985<br />\
    <img src="styles/legend/PigPopulation2020_3_3.png" /> 110985 - 140062<br />\
    <img src="styles/legend/PigPopulation2020_3_4.png" /> 140062 - 525445<br />'
        });
var format_PigDeathJan2020Jan2021_4 = new ol.format.GeoJSON();
var features_PigDeathJan2020Jan2021_4 = format_PigDeathJan2020Jan2021_4.readFeatures(json_PigDeathJan2020Jan2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PigDeathJan2020Jan2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PigDeathJan2020Jan2021_4.addFeatures(features_PigDeathJan2020Jan2021_4);
var lyr_PigDeathJan2020Jan2021_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PigDeathJan2020Jan2021_4, 
                style: style_PigDeathJan2020Jan2021_4,
                interactive: true,
                title: '<img src="styles/legend/PigDeathJan2020Jan2021_4.png" /> Pig Death Jan 2020 - Jan 2021 '
            });
var format_PigDeathNumberUpdated_5 = new ol.format.GeoJSON();
var features_PigDeathNumberUpdated_5 = format_PigDeathNumberUpdated_5.readFeatures(json_PigDeathNumberUpdated_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PigDeathNumberUpdated_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PigDeathNumberUpdated_5.addFeatures(features_PigDeathNumberUpdated_5);
var lyr_PigDeathNumberUpdated_5 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_PigDeathNumberUpdated_5, 
                radius: 8 * 2,
                gradient: ['#ffc2a4', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'DeathNo';
        var featureWeight = feature.get(weightField);
        var maxWeight = 63000;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'Pig Death Number Updated '
            });

lyr_PresentasePengangguran2020_0.setVisible(true);lyr_BeratRata2BabiyangdiPotong2018kg_1.setVisible(true);lyr_PorkConsumptionPerCapitakginNTT2020_2.setVisible(true);lyr_PigPopulation2020_3.setVisible(true);lyr_PigDeathJan2020Jan2021_4.setVisible(true);lyr_PigDeathNumberUpdated_5.setVisible(true);
var layersList = [lyr_PresentasePengangguran2020_0,lyr_BeratRata2BabiyangdiPotong2018kg_1,lyr_PorkConsumptionPerCapitakginNTT2020_2,lyr_PigPopulation2020_3,lyr_PigDeathJan2020Jan2021_4,lyr_PigDeathNumberUpdated_5];
lyr_PresentasePengangguran2020_0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'Populasi B': 'Populasi B', 'Berat Babi': 'Berat Babi', 'Tkt Pgrn': 'Tkt Pgrn', 'PgDthDistr': 'PgDthDistr', 'B2ConPeCap': 'B2ConPeCap', 'PorkProd18': 'PorkProd18', });
lyr_BeratRata2BabiyangdiPotong2018kg_1.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'Populasi B': 'Populasi B', 'Berat Babi': 'Berat Babi', 'Tkt Pgrn': 'Tkt Pgrn', 'PgDthDistr': 'PgDthDistr', 'B2ConPeCap': 'B2ConPeCap', 'PorkProd18': 'PorkProd18', });
lyr_PorkConsumptionPerCapitakginNTT2020_2.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'Populasi B': 'Populasi B', 'Berat Babi': 'Berat Babi', 'Tkt Pgrn': 'Tkt Pgrn', 'PgDthDistr': 'PgDthDistr', 'B2ConPeCap': 'B2ConPeCap', 'PorkProd18': 'PorkProd18', });
lyr_PigPopulation2020_3.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'Populasi B': 'Populasi B', 'Berat Babi': 'Berat Babi', 'Tkt Pgrn': 'Tkt Pgrn', 'Pop Pdk': 'Pop Pdk', 'PgDthDistr': 'PgDthDistr', 'B2ConPeCap': 'B2ConPeCap', 'PorkProd18': 'PorkProd18', });
lyr_PigDeathJan2020Jan2021_4.set('fieldAliases', {'Nama Kota': 'Nama Kota', 'DeathNo': 'DeathNo', });
lyr_PresentasePengangguran2020_0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'Populasi B': 'TextEdit', 'Berat Babi': 'TextEdit', 'Tkt Pgrn': 'TextEdit', 'PgDthDistr': '', 'B2ConPeCap': '', 'PorkProd18': '', });
lyr_BeratRata2BabiyangdiPotong2018kg_1.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'Populasi B': 'TextEdit', 'Berat Babi': 'TextEdit', 'Tkt Pgrn': 'TextEdit', 'PgDthDistr': 'TextEdit', 'B2ConPeCap': '', 'PorkProd18': '', });
lyr_PorkConsumptionPerCapitakginNTT2020_2.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'Populasi B': 'TextEdit', 'Berat Babi': 'TextEdit', 'Tkt Pgrn': 'TextEdit', 'PgDthDistr': 'TextEdit', 'B2ConPeCap': 'Range', 'PorkProd18': 'TextEdit', });
lyr_PigPopulation2020_3.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'Populasi B': 'TextEdit', 'Berat Babi': 'TextEdit', 'Tkt Pgrn': 'TextEdit', 'Pop Pdk': 'TextEdit', 'PgDthDistr': 'TextEdit', 'B2ConPeCap': 'TextEdit', 'PorkProd18': 'TextEdit', });
lyr_PigDeathJan2020Jan2021_4.set('fieldImages', {'Nama Kota': 'TextEdit', 'DeathNo': 'TextEdit', });
lyr_PresentasePengangguran2020_0.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', 'Populasi B': 'no label', 'Berat Babi': 'no label', 'Tkt Pgrn': 'no label', 'PgDthDistr': 'no label', 'B2ConPeCap': 'no label', 'PorkProd18': 'no label', });
lyr_BeratRata2BabiyangdiPotong2018kg_1.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', 'Populasi B': 'no label', 'Berat Babi': 'no label', 'Tkt Pgrn': 'no label', 'PgDthDistr': 'no label', 'B2ConPeCap': 'no label', 'PorkProd18': 'no label', });
lyr_PorkConsumptionPerCapitakginNTT2020_2.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', 'Populasi B': 'no label', 'Berat Babi': 'no label', 'Tkt Pgrn': 'no label', 'PgDthDistr': 'no label', 'B2ConPeCap': 'no label', 'PorkProd18': 'no label', });
lyr_PigPopulation2020_3.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', 'Populasi B': 'no label', 'Berat Babi': 'no label', 'Tkt Pgrn': 'no label', 'Pop Pdk': 'no label', 'PgDthDistr': 'no label', 'B2ConPeCap': 'no label', 'PorkProd18': 'no label', });
lyr_PigDeathJan2020Jan2021_4.set('fieldLabels', {'Nama Kota': 'no label', 'DeathNo': 'no label', });
lyr_PigDeathJan2020Jan2021_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});