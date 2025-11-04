ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32633").setExtent([420801.287882, 4655350.238856, 484645.542793, 4690249.027714]);
var wms_layers = [];

var lyr_RAS_n_TR20_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_n_TR20<br />\
    <img src="styles/legend/RAS_n_TR20_1_0.png" /> 0.260<br />\
    <img src="styles/legend/RAS_n_TR20_1_1.png" /> 0.286<br />\
    <img src="styles/legend/RAS_n_TR20_1_2.png" /> 0.312<br />\
    <img src="styles/legend/RAS_n_TR20_1_3.png" /> 0.338<br />\
    <img src="styles/legend/RAS_n_TR20_1_4.png" /> 0.364<br />\
    <img src="styles/legend/RAS_n_TR20_1_5.png" /> 0.390<br />\
    <img src="styles/legend/RAS_n_TR20_1_6.png" /> 0.416<br />\
    <img src="styles/legend/RAS_n_TR20_1_7.png" /> 0.440<br />\
    <img src="styles/legend/RAS_n_TR20_1_8.png" /> 0.460<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_n_TR20_1.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_n_TR20_2 = new ol.format.GeoJSON();
var features_Isolonee_n_TR20_2 = format_Isolonee_n_TR20_2.readFeatures(json_Isolonee_n_TR20_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_n_TR20_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_n_TR20_2.addFeatures(features_Isolonee_n_TR20_2);
var lyr_Isolonee_n_TR20_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_n_TR20_2, 
                style: style_Isolonee_n_TR20_2,
                popuplayertitle: 'Isolonee_n_TR20',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_n_TR20_2.png" /> Isolonee_n_TR20'
            });
var lyr_RAS_h_TR20_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_h_TR20<br />\
    <img src="styles/legend/RAS_h_TR20_3_0.png" /> 36.00<br />\
    <img src="styles/legend/RAS_h_TR20_3_1.png" /> 38.08<br />\
    <img src="styles/legend/RAS_h_TR20_3_2.png" /> 40.16<br />\
    <img src="styles/legend/RAS_h_TR20_3_3.png" /> 42.24<br />\
    <img src="styles/legend/RAS_h_TR20_3_4.png" /> 44.32<br />\
    <img src="styles/legend/RAS_h_TR20_3_5.png" /> 46.40<br />\
    <img src="styles/legend/RAS_h_TR20_3_6.png" /> 48.48<br />\
    <img src="styles/legend/RAS_h_TR20_3_7.png" /> 50.40<br />\
    <img src="styles/legend/RAS_h_TR20_3_8.png" /> 52.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_h_TR20_3.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_h_TR20_4 = new ol.format.GeoJSON();
var features_Isolonee_h_TR20_4 = format_Isolonee_h_TR20_4.readFeatures(json_Isolonee_h_TR20_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_h_TR20_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_h_TR20_4.addFeatures(features_Isolonee_h_TR20_4);
var lyr_Isolonee_h_TR20_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_h_TR20_4, 
                style: style_Isolonee_h_TR20_4,
                popuplayertitle: 'Isolonee_h_TR20',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_h_TR20_4.png" /> Isolonee_h_TR20'
            });
var format_Comuni_Analizzati_TR20_5 = new ol.format.GeoJSON();
var features_Comuni_Analizzati_TR20_5 = format_Comuni_Analizzati_TR20_5.readFeatures(json_Comuni_Analizzati_TR20_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Comuni_Analizzati_TR20_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_Analizzati_TR20_5.addFeatures(features_Comuni_Analizzati_TR20_5);
var lyr_Comuni_Analizzati_TR20_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuni_Analizzati_TR20_5, 
                style: style_Comuni_Analizzati_TR20_5,
                popuplayertitle: 'Comuni_Analizzati_TR20',
                interactive: true,
                title: '<img src="styles/legend/Comuni_Analizzati_TR20_5.png" /> Comuni_Analizzati_TR20'
            });
var lyr_RAS_n_TR50_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_n_TR50<br />\
    <img src="styles/legend/RAS_n_TR50_6_0.png" /> 0.240<br />\
    <img src="styles/legend/RAS_n_TR50_6_1.png" /> 0.269<br />\
    <img src="styles/legend/RAS_n_TR50_6_2.png" /> 0.297<br />\
    <img src="styles/legend/RAS_n_TR50_6_3.png" /> 0.326<br />\
    <img src="styles/legend/RAS_n_TR50_6_4.png" /> 0.354<br />\
    <img src="styles/legend/RAS_n_TR50_6_5.png" /> 0.383<br />\
    <img src="styles/legend/RAS_n_TR50_6_6.png" /> 0.412<br />\
    <img src="styles/legend/RAS_n_TR50_6_7.png" /> 0.438<br />\
    <img src="styles/legend/RAS_n_TR50_6_8.png" /> 0.460<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_n_TR50_6.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_n_TR50_7 = new ol.format.GeoJSON();
var features_Isolonee_n_TR50_7 = format_Isolonee_n_TR50_7.readFeatures(json_Isolonee_n_TR50_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_n_TR50_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_n_TR50_7.addFeatures(features_Isolonee_n_TR50_7);
var lyr_Isolonee_n_TR50_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_n_TR50_7, 
                style: style_Isolonee_n_TR50_7,
                popuplayertitle: 'Isolonee_n_TR50',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_n_TR50_7.png" /> Isolonee_n_TR50'
            });
var lyr_RAS_h_TR50_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_h_TR50<br />\
    <img src="styles/legend/RAS_h_TR50_8_0.png" /> 44.00<br />\
    <img src="styles/legend/RAS_h_TR50_8_1.png" /> 46.86<br />\
    <img src="styles/legend/RAS_h_TR50_8_2.png" /> 49.72<br />\
    <img src="styles/legend/RAS_h_TR50_8_3.png" /> 52.58<br />\
    <img src="styles/legend/RAS_h_TR50_8_4.png" /> 55.44<br />\
    <img src="styles/legend/RAS_h_TR50_8_5.png" /> 58.30<br />\
    <img src="styles/legend/RAS_h_TR50_8_6.png" /> 61.16<br />\
    <img src="styles/legend/RAS_h_TR50_8_7.png" /> 63.80<br />\
    <img src="styles/legend/RAS_h_TR50_8_8.png" /> 66.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_h_TR50_8.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_h_TR50_9 = new ol.format.GeoJSON();
var features_Isolonee_h_TR50_9 = format_Isolonee_h_TR50_9.readFeatures(json_Isolonee_h_TR50_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_h_TR50_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_h_TR50_9.addFeatures(features_Isolonee_h_TR50_9);
var lyr_Isolonee_h_TR50_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_h_TR50_9, 
                style: style_Isolonee_h_TR50_9,
                popuplayertitle: 'Isolonee_h_TR50',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_h_TR50_9.png" /> Isolonee_h_TR50'
            });
var format_Comuni_Analizzati_TR50_10 = new ol.format.GeoJSON();
var features_Comuni_Analizzati_TR50_10 = format_Comuni_Analizzati_TR50_10.readFeatures(json_Comuni_Analizzati_TR50_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Comuni_Analizzati_TR50_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_Analizzati_TR50_10.addFeatures(features_Comuni_Analizzati_TR50_10);
var lyr_Comuni_Analizzati_TR50_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuni_Analizzati_TR50_10, 
                style: style_Comuni_Analizzati_TR50_10,
                popuplayertitle: 'Comuni_Analizzati_TR50',
                interactive: true,
                title: '<img src="styles/legend/Comuni_Analizzati_TR50_10.png" /> Comuni_Analizzati_TR50'
            });
var lyr_RAS_n_TR100_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_n_TR100<br />\
    <img src="styles/legend/RAS_n_TR100_11_0.png" /> 0.260<br />\
    <img src="styles/legend/RAS_n_TR100_11_1.png" /> 0.286<br />\
    <img src="styles/legend/RAS_n_TR100_11_2.png" /> 0.312<br />\
    <img src="styles/legend/RAS_n_TR100_11_3.png" /> 0.338<br />\
    <img src="styles/legend/RAS_n_TR100_11_4.png" /> 0.364<br />\
    <img src="styles/legend/RAS_n_TR100_11_5.png" /> 0.390<br />\
    <img src="styles/legend/RAS_n_TR100_11_6.png" /> 0.416<br />\
    <img src="styles/legend/RAS_n_TR100_11_7.png" /> 0.440<br />\
    <img src="styles/legend/RAS_n_TR100_11_8.png" /> 0.460<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_n_TR100_11.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_n_TR100_12 = new ol.format.GeoJSON();
var features_Isolonee_n_TR100_12 = format_Isolonee_n_TR100_12.readFeatures(json_Isolonee_n_TR100_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_n_TR100_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_n_TR100_12.addFeatures(features_Isolonee_n_TR100_12);
var lyr_Isolonee_n_TR100_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_n_TR100_12, 
                style: style_Isolonee_n_TR100_12,
                popuplayertitle: 'Isolonee_n_TR100',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_n_TR100_12.png" /> Isolonee_n_TR100'
            });
var lyr_RAS_h_TR100_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_h_TR100<br />\
    <img src="styles/legend/RAS_h_TR100_13_0.png" /> 50.00<br />\
    <img src="styles/legend/RAS_h_TR100_13_1.png" /> 53.12<br />\
    <img src="styles/legend/RAS_h_TR100_13_2.png" /> 56.24<br />\
    <img src="styles/legend/RAS_h_TR100_13_3.png" /> 59.36<br />\
    <img src="styles/legend/RAS_h_TR100_13_4.png" /> 62.48<br />\
    <img src="styles/legend/RAS_h_TR100_13_5.png" /> 65.60<br />\
    <img src="styles/legend/RAS_h_TR100_13_6.png" /> 68.72<br />\
    <img src="styles/legend/RAS_h_TR100_13_7.png" /> 71.60<br />\
    <img src="styles/legend/RAS_h_TR100_13_8.png" /> 74.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_h_TR100_13.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_h_TR100_14 = new ol.format.GeoJSON();
var features_Isolonee_h_TR100_14 = format_Isolonee_h_TR100_14.readFeatures(json_Isolonee_h_TR100_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_h_TR100_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_h_TR100_14.addFeatures(features_Isolonee_h_TR100_14);
var lyr_Isolonee_h_TR100_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_h_TR100_14, 
                style: style_Isolonee_h_TR100_14,
                popuplayertitle: 'Isolonee_h_TR100',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_h_TR100_14.png" /> Isolonee_h_TR100'
            });
var format_Comuni_Analizzati_TR100_15 = new ol.format.GeoJSON();
var features_Comuni_Analizzati_TR100_15 = format_Comuni_Analizzati_TR100_15.readFeatures(json_Comuni_Analizzati_TR100_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Comuni_Analizzati_TR100_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_Analizzati_TR100_15.addFeatures(features_Comuni_Analizzati_TR100_15);
var lyr_Comuni_Analizzati_TR100_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuni_Analizzati_TR100_15, 
                style: style_Comuni_Analizzati_TR100_15,
                popuplayertitle: 'Comuni_Analizzati_TR100',
                interactive: true,
                title: '<img src="styles/legend/Comuni_Analizzati_TR100_15.png" /> Comuni_Analizzati_TR100'
            });
var lyr_RAS_n_TR200_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_n_TR200<br />\
    <img src="styles/legend/RAS_n_TR200_16_0.png" /> 0.240<br />\
    <img src="styles/legend/RAS_n_TR200_16_1.png" /> 0.269<br />\
    <img src="styles/legend/RAS_n_TR200_16_2.png" /> 0.297<br />\
    <img src="styles/legend/RAS_n_TR200_16_3.png" /> 0.326<br />\
    <img src="styles/legend/RAS_n_TR200_16_4.png" /> 0.354<br />\
    <img src="styles/legend/RAS_n_TR200_16_5.png" /> 0.383<br />\
    <img src="styles/legend/RAS_n_TR200_16_6.png" /> 0.412<br />\
    <img src="styles/legend/RAS_n_TR200_16_7.png" /> 0.438<br />\
    <img src="styles/legend/RAS_n_TR200_16_8.png" /> 0.460<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_n_TR200_16.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_n_TR200_17 = new ol.format.GeoJSON();
var features_Isolonee_n_TR200_17 = format_Isolonee_n_TR200_17.readFeatures(json_Isolonee_n_TR200_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_n_TR200_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_n_TR200_17.addFeatures(features_Isolonee_n_TR200_17);
var lyr_Isolonee_n_TR200_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_n_TR200_17, 
                style: style_Isolonee_n_TR200_17,
                popuplayertitle: 'Isolonee_n_TR200',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_n_TR200_17.png" /> Isolonee_n_TR200'
            });
var lyr_RAS_h_TR200_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_h_TR200<br />\
    <img src="styles/legend/RAS_h_TR200_18_0.png" /> 56.00<br />\
    <img src="styles/legend/RAS_h_TR200_18_1.png" /> 59.38<br />\
    <img src="styles/legend/RAS_h_TR200_18_2.png" /> 62.76<br />\
    <img src="styles/legend/RAS_h_TR200_18_3.png" /> 66.14<br />\
    <img src="styles/legend/RAS_h_TR200_18_4.png" /> 69.52<br />\
    <img src="styles/legend/RAS_h_TR200_18_5.png" /> 72.90<br />\
    <img src="styles/legend/RAS_h_TR200_18_6.png" /> 76.28<br />\
    <img src="styles/legend/RAS_h_TR200_18_7.png" /> 79.40<br />\
    <img src="styles/legend/RAS_h_TR200_18_8.png" /> 82.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_h_TR200_18.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_h_TR200_19 = new ol.format.GeoJSON();
var features_Isolonee_h_TR200_19 = format_Isolonee_h_TR200_19.readFeatures(json_Isolonee_h_TR200_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_h_TR200_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_h_TR200_19.addFeatures(features_Isolonee_h_TR200_19);
var lyr_Isolonee_h_TR200_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_h_TR200_19, 
                style: style_Isolonee_h_TR200_19,
                popuplayertitle: 'Isolonee_h_TR200',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_h_TR200_19.png" /> Isolonee_h_TR200'
            });
var format_Comuni_Analizzati_TR200_20 = new ol.format.GeoJSON();
var features_Comuni_Analizzati_TR200_20 = format_Comuni_Analizzati_TR200_20.readFeatures(json_Comuni_Analizzati_TR200_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Comuni_Analizzati_TR200_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_Analizzati_TR200_20.addFeatures(features_Comuni_Analizzati_TR200_20);
var lyr_Comuni_Analizzati_TR200_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuni_Analizzati_TR200_20, 
                style: style_Comuni_Analizzati_TR200_20,
                popuplayertitle: 'Comuni_Analizzati_TR200',
                interactive: true,
                title: '<img src="styles/legend/Comuni_Analizzati_TR200_20.png" /> Comuni_Analizzati_TR200'
            });
var lyr_RAS_n_TR500_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_n_TR500<br />\
    <img src="styles/legend/RAS_n_TR500_21_0.png" /> 0.240<br />\
    <img src="styles/legend/RAS_n_TR500_21_1.png" /> 0.263<br />\
    <img src="styles/legend/RAS_n_TR500_21_2.png" /> 0.286<br />\
    <img src="styles/legend/RAS_n_TR500_21_3.png" /> 0.309<br />\
    <img src="styles/legend/RAS_n_TR500_21_4.png" /> 0.331<br />\
    <img src="styles/legend/RAS_n_TR500_21_5.png" /> 0.354<br />\
    <img src="styles/legend/RAS_n_TR500_21_6.png" /> 0.377<br />\
    <img src="styles/legend/RAS_n_TR500_21_7.png" /> 0.398<br />\
    <img src="styles/legend/RAS_n_TR500_21_8.png" /> 0.416<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_n_TR500_21.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_n_TR500_22 = new ol.format.GeoJSON();
var features_Isolonee_n_TR500_22 = format_Isolonee_n_TR500_22.readFeatures(json_Isolonee_n_TR500_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_n_TR500_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_n_TR500_22.addFeatures(features_Isolonee_n_TR500_22);
var lyr_Isolonee_n_TR500_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_n_TR500_22, 
                style: style_Isolonee_n_TR500_22,
                popuplayertitle: 'Isolonee_n_TR500',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_n_TR500_22.png" /> Isolonee_n_TR500'
            });
var lyr_RAS_h_TR500_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RAS_h_TR500<br />\
    <img src="styles/legend/RAS_h_TR500_23_0.png" /> 62.00<br />\
    <img src="styles/legend/RAS_h_TR500_23_1.png" /> 66.16<br />\
    <img src="styles/legend/RAS_h_TR500_23_2.png" /> 70.32<br />\
    <img src="styles/legend/RAS_h_TR500_23_3.png" /> 74.48<br />\
    <img src="styles/legend/RAS_h_TR500_23_4.png" /> 78.64<br />\
    <img src="styles/legend/RAS_h_TR500_23_5.png" /> 82.80<br />\
    <img src="styles/legend/RAS_h_TR500_23_6.png" /> 86.96<br />\
    <img src="styles/legend/RAS_h_TR500_23_7.png" /> 90.80<br />\
    <img src="styles/legend/RAS_h_TR500_23_8.png" /> 94.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RAS_h_TR500_23.png",
            attributions: ' ',
            projection: 'EPSG:32633',
            alwaysInRange: true,
            imageExtent: [345412.055800, 4614895.333700, 480516.043700, 4747894.568400]
        })
    });
var format_Isolonee_h_TR500_24 = new ol.format.GeoJSON();
var features_Isolonee_h_TR500_24 = format_Isolonee_h_TR500_24.readFeatures(json_Isolonee_h_TR500_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Isolonee_h_TR500_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolonee_h_TR500_24.addFeatures(features_Isolonee_h_TR500_24);
var lyr_Isolonee_h_TR500_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolonee_h_TR500_24, 
                style: style_Isolonee_h_TR500_24,
                popuplayertitle: 'Isolonee_h_TR500',
                interactive: true,
                title: '<img src="styles/legend/Isolonee_h_TR500_24.png" /> Isolonee_h_TR500'
            });
var format_Comuni_Analizzati_TR500_25 = new ol.format.GeoJSON();
var features_Comuni_Analizzati_TR500_25 = format_Comuni_Analizzati_TR500_25.readFeatures(json_Comuni_Analizzati_TR500_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Comuni_Analizzati_TR500_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_Analizzati_TR500_25.addFeatures(features_Comuni_Analizzati_TR500_25);
var lyr_Comuni_Analizzati_TR500_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comuni_Analizzati_TR500_25, 
                style: style_Comuni_Analizzati_TR500_25,
                popuplayertitle: 'Comuni_Analizzati_TR500',
                interactive: true,
                title: '<img src="styles/legend/Comuni_Analizzati_TR500_25.png" /> Comuni_Analizzati_TR500'
            });
var group_TR500 = new ol.layer.Group({
                                layers: [lyr_RAS_n_TR500_21,lyr_Isolonee_n_TR500_22,lyr_RAS_h_TR500_23,lyr_Isolonee_h_TR500_24,lyr_Comuni_Analizzati_TR500_25,],
                                fold: 'open',
                                title: 'TR500'});
var group_TR200 = new ol.layer.Group({
                                layers: [lyr_RAS_n_TR200_16,lyr_Isolonee_n_TR200_17,lyr_RAS_h_TR200_18,lyr_Isolonee_h_TR200_19,lyr_Comuni_Analizzati_TR200_20,],
                                fold: 'close',
                                title: 'TR200'});
var group_TR100 = new ol.layer.Group({
                                layers: [lyr_RAS_n_TR100_11,lyr_Isolonee_n_TR100_12,lyr_RAS_h_TR100_13,lyr_Isolonee_h_TR100_14,lyr_Comuni_Analizzati_TR100_15,],
                                fold: 'close',
                                title: 'TR100'});
var group_TR50 = new ol.layer.Group({
                                layers: [lyr_RAS_n_TR50_6,lyr_Isolonee_n_TR50_7,lyr_RAS_h_TR50_8,lyr_Isolonee_h_TR50_9,lyr_Comuni_Analizzati_TR50_10,],
                                fold: 'close',
                                title: 'TR50'});
var group_TR20 = new ol.layer.Group({
                                layers: [lyr_RAS_n_TR20_1,lyr_Isolonee_n_TR20_2,lyr_RAS_h_TR20_3,lyr_Isolonee_h_TR20_4,lyr_Comuni_Analizzati_TR20_5,],
                                fold: 'close',
                                title: 'TR20'});

var layersList = [group_TR20,group_TR50,group_TR100,group_TR200,group_TR500];
lyr_Isolonee_n_TR20_2.set('fieldAliases', {'ID': 'ID', 'n': 'n', });
lyr_Isolonee_h_TR20_4.set('fieldAliases', {'ID': 'ID', 'h': 'h', });
lyr_Comuni_Analizzati_TR20_5.set('fieldAliases', {'COMUNE': 'COMUNE', 'RAS_h_TR11': 'TR20 | h med:', 'RAS_h_TR12': 'TR20 | h min:', 'RAS_h_TR13': 'TR20 | h max:', 'RAS_n_TR11': 'TR20 | n med:', 'RAS_n_TR12': 'TR20 | n min:', 'RAS_n_TR13': 'TR20 | n max:', });
lyr_Isolonee_n_TR50_7.set('fieldAliases', {'ID': 'ID', 'n': 'n', });
lyr_Isolonee_h_TR50_9.set('fieldAliases', {'ID': 'ID', 'h': 'h', });
lyr_Comuni_Analizzati_TR50_10.set('fieldAliases', {'COMUNE': 'COMUNE', 'RAS_h_TR_7': 'TR50 | h med:', 'RAS_h_TR_8': 'TR50 | h min:', 'RAS_h_TR_9': 'TR50 | h max:', 'RAS_n_TR_7': 'TR50 | n med:', 'RAS_n_TR_8': 'TR50 | n min:', 'RAS_n_TR_9': 'TR50 | n max:', });
lyr_Isolonee_n_TR100_12.set('fieldAliases', {'id': 'id', 'n': 'n', });
lyr_Isolonee_h_TR100_14.set('fieldAliases', {'id': 'id', 'h': 'h', });
lyr_Comuni_Analizzati_TR100_15.set('fieldAliases', {'COMUNE': 'COMUNE', 'RAS_h_TR10': 'TR100 | h med:', 'RAS_h_TR_5': 'TR100 | h min:', 'RAS_h_TR_6': 'TR100 | h max:', 'RAS_n_TR10': 'TR100 | n med:', 'RAS_n_TR_5': 'TR100 | n min:', 'RAS_n_TR_6': 'TR100 | n max:', });
lyr_Isolonee_n_TR200_17.set('fieldAliases', {'ID': 'ID', 'n': 'n', });
lyr_Isolonee_h_TR200_19.set('fieldAliases', {'ID': 'ID', 'h': 'h', });
lyr_Comuni_Analizzati_TR200_20.set('fieldAliases', {'COMUNE': 'COMUNE', 'RAS_h_TR20': 'TR200 | h med:', 'RAS_h_TR_3': 'TR200 | h min:', 'RAS_h_TR_4': 'TR200 | h max:', 'RAS_n_TR20': 'TR200 | n med:', 'RAS_n_TR_3': 'TR200 | n min:', 'RAS_n_TR_4': 'TR200 | n max:', });
lyr_Isolonee_n_TR500_22.set('fieldAliases', {'ID': 'ID', 'n': 'n', });
lyr_Isolonee_h_TR500_24.set('fieldAliases', {'ID': 'ID', 'h': 'h', });
lyr_Comuni_Analizzati_TR500_25.set('fieldAliases', {'COMUNE': 'COMUNE', 'RAS_h_TR50': 'TR500 | h med:', 'RAS_h_TR_1': 'TR500 | h min:', 'RAS_h_TR_2': 'TR500 | h max:', 'RAS_n_TR50': 'TR500 | n med:', 'RAS_n_TR_1': 'TR500 | n min:', 'RAS_n_TR_2': 'TR500 | n max:', });
lyr_Isolonee_n_TR20_2.set('fieldImages', {'ID': 'TextEdit', 'n': 'TextEdit', });
lyr_Isolonee_h_TR20_4.set('fieldImages', {'ID': 'TextEdit', 'h': 'TextEdit', });
lyr_Comuni_Analizzati_TR20_5.set('fieldImages', {'COMUNE': 'TextEdit', 'RAS_h_TR11': 'TextEdit', 'RAS_h_TR12': 'TextEdit', 'RAS_h_TR13': 'TextEdit', 'RAS_n_TR11': 'TextEdit', 'RAS_n_TR12': 'TextEdit', 'RAS_n_TR13': 'TextEdit', });
lyr_Isolonee_n_TR50_7.set('fieldImages', {'ID': 'TextEdit', 'n': 'TextEdit', });
lyr_Isolonee_h_TR50_9.set('fieldImages', {'ID': 'TextEdit', 'h': 'TextEdit', });
lyr_Comuni_Analizzati_TR50_10.set('fieldImages', {'COMUNE': 'TextEdit', 'RAS_h_TR_7': 'TextEdit', 'RAS_h_TR_8': 'TextEdit', 'RAS_h_TR_9': 'TextEdit', 'RAS_n_TR_7': 'TextEdit', 'RAS_n_TR_8': 'TextEdit', 'RAS_n_TR_9': 'TextEdit', });
lyr_Isolonee_n_TR100_12.set('fieldImages', {'id': '', 'n': 'TextEdit', });
lyr_Isolonee_h_TR100_14.set('fieldImages', {'id': 'TextEdit', 'h': 'TextEdit', });
lyr_Comuni_Analizzati_TR100_15.set('fieldImages', {'COMUNE': 'TextEdit', 'RAS_h_TR10': 'TextEdit', 'RAS_h_TR_5': 'TextEdit', 'RAS_h_TR_6': 'TextEdit', 'RAS_n_TR10': 'TextEdit', 'RAS_n_TR_5': 'TextEdit', 'RAS_n_TR_6': 'TextEdit', });
lyr_Isolonee_n_TR200_17.set('fieldImages', {'ID': 'TextEdit', 'n': 'TextEdit', });
lyr_Isolonee_h_TR200_19.set('fieldImages', {'ID': 'TextEdit', 'h': 'TextEdit', });
lyr_Comuni_Analizzati_TR200_20.set('fieldImages', {'COMUNE': 'TextEdit', 'RAS_h_TR20': 'TextEdit', 'RAS_h_TR_3': 'TextEdit', 'RAS_h_TR_4': 'TextEdit', 'RAS_n_TR20': 'TextEdit', 'RAS_n_TR_3': 'TextEdit', 'RAS_n_TR_4': 'TextEdit', });
lyr_Isolonee_n_TR500_22.set('fieldImages', {'ID': 'TextEdit', 'n': 'TextEdit', });
lyr_Isolonee_h_TR500_24.set('fieldImages', {'ID': 'TextEdit', 'h': 'TextEdit', });
lyr_Comuni_Analizzati_TR500_25.set('fieldImages', {'COMUNE': 'TextEdit', 'RAS_h_TR50': 'TextEdit', 'RAS_h_TR_1': 'TextEdit', 'RAS_h_TR_2': 'TextEdit', 'RAS_n_TR50': 'TextEdit', 'RAS_n_TR_1': 'TextEdit', 'RAS_n_TR_2': 'TextEdit', });
lyr_Isolonee_n_TR20_2.set('fieldLabels', {'ID': 'hidden field', 'n': 'inline label - visible with data', });
lyr_Isolonee_h_TR20_4.set('fieldLabels', {'ID': 'hidden field', 'h': 'inline label - visible with data', });
lyr_Comuni_Analizzati_TR20_5.set('fieldLabels', {'COMUNE': 'header label - visible with data', 'RAS_h_TR11': 'inline label - visible with data', 'RAS_h_TR12': 'inline label - visible with data', 'RAS_h_TR13': 'inline label - visible with data', 'RAS_n_TR11': 'inline label - visible with data', 'RAS_n_TR12': 'inline label - visible with data', 'RAS_n_TR13': 'inline label - visible with data', });
lyr_Isolonee_n_TR50_7.set('fieldLabels', {'ID': 'hidden field', 'n': 'inline label - visible with data', });
lyr_Isolonee_h_TR50_9.set('fieldLabels', {'ID': 'hidden field', 'h': 'inline label - visible with data', });
lyr_Comuni_Analizzati_TR50_10.set('fieldLabels', {'COMUNE': 'header label - visible with data', 'RAS_h_TR_7': 'inline label - visible with data', 'RAS_h_TR_8': 'inline label - visible with data', 'RAS_h_TR_9': 'inline label - visible with data', 'RAS_n_TR_7': 'inline label - visible with data', 'RAS_n_TR_8': 'inline label - visible with data', 'RAS_n_TR_9': 'inline label - visible with data', });
lyr_Isolonee_n_TR100_12.set('fieldLabels', {'id': 'hidden field', 'n': 'inline label - visible with data', });
lyr_Isolonee_h_TR100_14.set('fieldLabels', {'id': 'hidden field', 'h': 'inline label - visible with data', });
lyr_Comuni_Analizzati_TR100_15.set('fieldLabels', {'COMUNE': 'header label - visible with data', 'RAS_h_TR10': 'inline label - visible with data', 'RAS_h_TR_5': 'inline label - visible with data', 'RAS_h_TR_6': 'inline label - visible with data', 'RAS_n_TR10': 'inline label - visible with data', 'RAS_n_TR_5': 'inline label - visible with data', 'RAS_n_TR_6': 'inline label - visible with data', });
lyr_Isolonee_n_TR200_17.set('fieldLabels', {'ID': 'hidden field', 'n': 'inline label - visible with data', });
lyr_Isolonee_h_TR200_19.set('fieldLabels', {'ID': 'hidden field', 'h': 'inline label - visible with data', });
lyr_Comuni_Analizzati_TR200_20.set('fieldLabels', {'COMUNE': 'header label - visible with data', 'RAS_h_TR20': 'inline label - visible with data', 'RAS_h_TR_3': 'inline label - visible with data', 'RAS_h_TR_4': 'inline label - visible with data', 'RAS_n_TR20': 'inline label - visible with data', 'RAS_n_TR_3': 'inline label - visible with data', 'RAS_n_TR_4': 'inline label - visible with data', });
lyr_Isolonee_n_TR500_22.set('fieldLabels', {'ID': 'no label', 'n': 'inline label - visible with data', });
lyr_Isolonee_h_TR500_24.set('fieldLabels', {'ID': 'hidden field', 'h': 'inline label - visible with data', });
lyr_Comuni_Analizzati_TR500_25.set('fieldLabels', {'COMUNE': 'header label - visible with data', 'RAS_h_TR50': 'inline label - visible with data', 'RAS_h_TR_1': 'inline label - visible with data', 'RAS_h_TR_2': 'inline label - visible with data', 'RAS_n_TR50': 'inline label - visible with data', 'RAS_n_TR_1': 'inline label - visible with data', 'RAS_n_TR_2': 'inline label - visible with data', });
lyr_Comuni_Analizzati_TR500_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
