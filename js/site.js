$(function () {
    console.log("jquery is loaded")

   

    const DUBLIN_BIKE_URL = `dublin.json`;

    $.getJSON(DUBLIN_BIKE_URL, function (dublinbikedata) {
        //renderApiData(dublinbikedata);

        useMapRender(dublinbikedata)
        setupButtons();
       // demo(dublinbikedata)
    }); //
});

function useMapRender (apidata) {


    var htmlArrayOfItems = apidata.map(item => {

        var htmlString = `<tr>`;
         htmlString += `<td>${item.name}</td>`;
         htmlString += `<td>${item.number}</td>`;
         htmlString += `<td>` + renderButton(item.number) + `</td>` 
         htmlString += `</tr>`;

         return htmlString;
    })

    $('#tableBikeListing').html(htmlArrayOfItems.join(' '));

}

function renderButton(id) {
    return `<button class="btnViewStation" data-stationId="${id}">View Station</button>`
}

function setupButtons() {

    $('.btnViewStation').on('click', function() {

            console.log("Button is clicked");

    })
}

function  renderApiData(apidata) {

    console.log(apidata);

    htmlString = [];
    for (i = 0; i < apidata.length; i++) {
        currentItem = apidata[i];
        htmlString.push(renderItem(currentItem))

    }

    $('#container').html(htmlString.join(' '));
}

function renderItem(item) {

    return `<p>${item.name}</p>`;

}



