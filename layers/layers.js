var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Testcartogeocoded4_1 = new ol.format.GeoJSON();
var features_Testcartogeocoded4_1 = format_Testcartogeocoded4_1.readFeatures(json_Testcartogeocoded4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Testcartogeocoded4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Testcartogeocoded4_1.addFeatures(features_Testcartogeocoded4_1);
var lyr_Testcartogeocoded4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Testcartogeocoded4_1, 
                style: style_Testcartogeocoded4_1,
                interactive: true,
                title: '<img src="styles/legend/Testcartogeocoded4_1.png" /> Test carto.geocoded (4)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Testcartogeocoded4_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Testcartogeocoded4_1];
lyr_Testcartogeocoded4_1.set('fieldAliases', {'Dénomination': 'Dénomination', 'Raison sociale': 'Raison sociale', 'SIRET': 'SIRET', 'Dénomination structure accueillant le chantier': 'Dénomination structure accueillant le chantier', 'Conventionnement': 'Conventionnement', 'Secteur d\'activité': 'Secteur d\'activité', 'Adresse': 'Adresse', 'Nombre de postes d\'insertion en ETP conventionnés': 'Nombre de postes d\'insertion en ETP conventionnés', 'latitude': 'latitude', 'longitude': 'longitude', 'result_label': 'result_label', 'result_score': 'result_score', 'result_type': 'result_type', 'result_id': 'result_id', 'result_housenumber': 'result_housenumber', 'result_name': 'result_name', 'result_street': 'result_street', 'result_postcode': 'result_postcode', 'result_city': 'result_city', 'result_context': 'result_context', 'result_citycode': 'result_citycode', 'result_oldcitycode': 'result_oldcitycode', 'result_oldcity': 'result_oldcity', 'result_district': 'result_district', });
lyr_Testcartogeocoded4_1.set('fieldImages', {'Dénomination': 'TextEdit', 'Raison sociale': 'TextEdit', 'SIRET': 'TextEdit', 'Dénomination structure accueillant le chantier': 'TextEdit', 'Conventionnement': 'TextEdit', 'Secteur d\'activité': 'TextEdit', 'Adresse': 'TextEdit', 'Nombre de postes d\'insertion en ETP conventionnés': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'result_label': 'TextEdit', 'result_score': 'TextEdit', 'result_type': 'TextEdit', 'result_id': 'TextEdit', 'result_housenumber': 'TextEdit', 'result_name': 'TextEdit', 'result_street': 'TextEdit', 'result_postcode': 'Range', 'result_city': 'TextEdit', 'result_context': 'TextEdit', 'result_citycode': 'Range', 'result_oldcitycode': 'Range', 'result_oldcity': 'TextEdit', 'result_district': 'TextEdit', });
lyr_Testcartogeocoded4_1.set('fieldLabels', {'Dénomination': 'no label', 'Raison sociale': 'header label', 'SIRET': 'inline label', 'Dénomination structure accueillant le chantier': 'no label', 'Conventionnement': 'inline label', 'Secteur d\'activité': 'inline label', 'Adresse': 'inline label', 'Nombre de postes d\'insertion en ETP conventionnés': 'inline label', 'latitude': 'no label', 'longitude': 'no label', 'result_label': 'no label', 'result_score': 'no label', 'result_type': 'no label', 'result_id': 'no label', 'result_housenumber': 'no label', 'result_name': 'no label', 'result_street': 'no label', 'result_postcode': 'no label', 'result_city': 'no label', 'result_context': 'no label', 'result_citycode': 'no label', 'result_oldcitycode': 'no label', 'result_oldcity': 'no label', 'result_district': 'no label', });
lyr_Testcartogeocoded4_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});