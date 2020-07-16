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

        var lyr_GoogleMapsSatelite_1 = new ol.layer.Tile({
            'title': 'Google Maps Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_kel1_2 = new ol.format.GeoJSON();
var features_kel1_2 = format_kel1_2.readFeatures(json_kel1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel1_2.addFeatures(features_kel1_2);
var lyr_kel1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel1_2, 
                style: style_kel1_2,
                interactive: true,
                title: '<img src="styles/legend/kel1_2.png" /> kel1'
            });
var format_kel2_3 = new ol.format.GeoJSON();
var features_kel2_3 = format_kel2_3.readFeatures(json_kel2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel2_3.addFeatures(features_kel2_3);
var lyr_kel2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel2_3, 
                style: style_kel2_3,
                interactive: true,
                title: '<img src="styles/legend/kel2_3.png" /> kel2'
            });
var format_kel3_4 = new ol.format.GeoJSON();
var features_kel3_4 = format_kel3_4.readFeatures(json_kel3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel3_4.addFeatures(features_kel3_4);
var lyr_kel3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel3_4, 
                style: style_kel3_4,
                interactive: true,
                title: '<img src="styles/legend/kel3_4.png" /> kel3'
            });
var format_kel4_5 = new ol.format.GeoJSON();
var features_kel4_5 = format_kel4_5.readFeatures(json_kel4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel4_5.addFeatures(features_kel4_5);
var lyr_kel4_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel4_5, 
                style: style_kel4_5,
                interactive: true,
                title: '<img src="styles/legend/kel4_5.png" /> kel4'
            });
var format_kel6_6 = new ol.format.GeoJSON();
var features_kel6_6 = format_kel6_6.readFeatures(json_kel6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel6_6.addFeatures(features_kel6_6);
var lyr_kel6_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel6_6, 
                style: style_kel6_6,
                interactive: true,
                title: '<img src="styles/legend/kel6_6.png" /> kel6'
            });
var format_kel7_7 = new ol.format.GeoJSON();
var features_kel7_7 = format_kel7_7.readFeatures(json_kel7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel7_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel7_7.addFeatures(features_kel7_7);
var lyr_kel7_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel7_7, 
                style: style_kel7_7,
                interactive: true,
                title: '<img src="styles/legend/kel7_7.png" /> kel7'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMapsSatelite_1.setVisible(true);lyr_kel1_2.setVisible(true);lyr_kel2_3.setVisible(true);lyr_kel3_4.setVisible(true);lyr_kel4_5.setVisible(true);lyr_kel6_6.setVisible(true);lyr_kel7_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMapsSatelite_1,lyr_kel1_2,lyr_kel2_3,lyr_kel3_4,lyr_kel4_5,lyr_kel6_6,lyr_kel7_7];
lyr_kel1_2.set('fieldAliases', {'No': 'No', 'X': 'X', 'Y': 'Y', 'Jalan': 'Jalan', 'Photo': 'Photo', 'Ketinggian': 'Ketinggian', 'gambar': 'gambar', 'img': 'img', });
lyr_kel2_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Lokasi': 'Lokasi', 'Kode_Foto': 'Kode_Foto', 'Tinggi_Ban': 'Tinggi_Ban', 'gambar': 'gambar', 'img': 'img', });
lyr_kel3_4.set('fieldAliases', {'x': 'x', 'y': 'y', 'nm_img': 'nm_img', 'image': 'image', 'ketinggian': 'ketinggian', 'gambar': 'gambar', 'img': 'img', });
lyr_kel4_5.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'Ketinggian': 'Ketinggian', 'Foto': 'Foto', 'gambar': 'gambar', 'img': 'img', });
lyr_kel6_6.set('fieldAliases', {'x': 'x', 'y': 'y', 'foto': 'foto', 'ketingian': 'ketingian', 'gambar': 'gambar', 'img': 'img', });
lyr_kel7_7.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'IMAGE': 'IMAGE', 'KETINGGIAN': 'KETINGGIAN', 'gambar': 'gambar', 'img': 'img', });
lyr_kel1_2.set('fieldImages', {'No': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Jalan': 'TextEdit', 'Photo': 'TextEdit', 'Ketinggian': 'TextEdit', 'gambar': 'TextEdit', 'img': 'TextEdit', });
lyr_kel2_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Lokasi': 'TextEdit', 'Kode_Foto': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'gambar': 'TextEdit', 'img': 'TextEdit', });
lyr_kel3_4.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'nm_img': 'TextEdit', 'image': 'TextEdit', 'ketinggian': 'TextEdit', 'gambar': 'TextEdit', 'img': 'TextEdit', });
lyr_kel4_5.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'Ketinggian': 'TextEdit', 'Foto': 'TextEdit', 'gambar': 'TextEdit', 'img': 'TextEdit', });
lyr_kel6_6.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'foto': 'TextEdit', 'ketingian': 'TextEdit', 'gambar': 'ExternalResource', 'img': 'TextEdit', });
lyr_kel7_7.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'IMAGE': 'TextEdit', 'KETINGGIAN': 'TextEdit', 'gambar': 'TextEdit', 'img': 'TextEdit', });
lyr_kel1_2.set('fieldLabels', {'No': 'no label', 'X': 'no label', 'Y': 'no label', 'Jalan': 'no label', 'Photo': 'no label', 'Ketinggian': 'no label', 'gambar': 'no label', 'img': 'inline label', });
lyr_kel2_3.set('fieldLabels', {'X': 'inline label', 'Y': 'inline label', 'Lokasi': 'inline label', 'Kode_Foto': 'inline label', 'Tinggi_Ban': 'inline label', 'gambar': 'inline label', 'img': 'no label', });
lyr_kel3_4.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'nm_img': 'inline label', 'image': 'inline label', 'ketinggian': 'inline label', 'gambar': 'inline label', 'img': 'no label', });
lyr_kel4_5.set('fieldLabels', {'Y': 'inline label', 'X': 'inline label', 'Ketinggian': 'inline label', 'Foto': 'inline label', 'gambar': 'inline label', 'img': 'no label', });
lyr_kel6_6.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'foto': 'inline label', 'ketingian': 'inline label', 'gambar': 'inline label', 'img': 'no label', });
lyr_kel7_7.set('fieldLabels', {'Y': 'inline label', 'X': 'inline label', 'IMAGE': 'inline label', 'KETINGGIAN': 'inline label', 'gambar': 'inline label', 'img': 'no label', });
lyr_kel7_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});