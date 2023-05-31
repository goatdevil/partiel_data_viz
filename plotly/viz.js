fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    var display_tab = [];
    const sorted_data = sortByCountryPopulation(data);

    for ( let i=sorted_data.length-1 ; i>sorted_data.length-31 ; i-- ) {
        display_tab.push(sorted_data[i]);
    }
    const reverseed_display_tab = display_tab.reverse();


    var data_plot = [
        {
            x:reverseed_display_tab.map(display_tab=>display_tab.country),
            y:reverseed_display_tab.map(display_tab=>display_tab.population),
            type:'bar'
        }
    ];
    var layout = {
        title:"Data distribution of countries population"
    };

    Plotly.newPlot('data-viz',data_plot,layout);

}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
    return data;
}