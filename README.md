# Choropleth Map - Bangladesh


**Choropleth Map - Bangladesh** is designed to be a geographic map data for Bangladesh.


## Install
- Clone or download from git

## Usage
#### Add required js & css in HEAD section
```html
    <script src="assets/js/jquery_min.js"></script>
    <script src="assets/js/vector_map.js"></script>
    <script src="assets/js/mousewheel.js"></script>
    <script src="assets/js/jvector.js"></script>
    <script src="assets/js/abstract_element.js"></script>
    <script src="assets/js/abstract_canvas.js"></script>
    <script src="assets/js/abstract_shape.js"></script>
    <script src="assets/js/svg_element.js"></script> 
    <script src="assets/js/sv_group.js"></script>
    <script src="assets/js/svg_canvas.js"></script>
    <script src="assets/js/svg_shape.js"></script>
    <script src="assets/js/svg_path.js"></script>
    <script src="assets/js/svg_text.js"></script>
    <script src="assets/js/map_object.js"></script>
    <script src="assets/js/region.js"></script>
    <script src="assets/js/vector_canvas.js"></script>
    <script src="assets/js/ordinal-scale.js"></script>
    <script src="assets/js/legend.js"></script>
    <script src="assets/js/data_series.js"></script>
    <script src="assets/js/map.js"></script>

    <script src="assets/vmap.bangladesh.js"></script>
    <script type="text/javascript" src="assets/init.js"></script>

    <link type="text/css" media="all" rel="stylesheet" href="assets/css/jvector_map.css"/>

```

#### Configure and initiate the map with data

```js
    // Color presentation with data range
    var scale = {
        '1-2000': '#b3dfe4',
        '2000-5000': '#9ad5db',
        '5001-10000': '#81cbd2',
        '10001-15000': '#68c0c9',
        '15001-20000': '#4fb6c0',
        '20001-40000': '#36abb7',
        '40001-100000': '#1da1ae',
        '100001-1000000': '#0497a6',
    };
    // Initiate required variables
    var scale_value = {};
    var series = [{data:[]}];
    var labels = [];

    // Data which is view in map [sample data]
    dataList = [
        {"district":"Dhaka", "data": 10},
        {"district":"Barisal", "data": 1000000},
    ];
    $.each(dataList, function(k, v) {
        series[0].data.push(v.data);
        labels.push(v.district);
        district_data[v.district] = v.data;
        scale_value[v.district] = checkNumberRange(scale, v.data);
    });

    // Map configuration
    var config = {
        backgroundColor: '#ffffff',
        borderColor: '#F6924D',
        borderOpacity: 0.25,
        borderWidth: 1,
        regionsSelectable: true,
        zoomOnScroll: false,
        zoomButtons: false,
        showLebel: true,
        labelLanguage: 'en',
    };
    getMap(config, '.div-element', district_data, scale, scale_value, "Data Lebel");

```
Otherwise, see examples in the `/index.html` file.

## Map Showcase

![Sample View](https://github.com/jbhasan/Choropleth-Map---Bangladesh/blob/main/assets/sample.png?raw=true)

