const button = document.querySelector( "button" );
const priceText = document.querySelector( "#avg-price" );
const wholesalePriceText = document.querySelector( "#avg-price-wholesale" );
const url = "https://jsonfy.com/items";

function getData ( url ) {
    fetch( url )
        .then( response => {
            return response.json();
        } )
        .then( json => {
            let avgPrice = 0;
            let avgWholePrice = 0;
            let itemsNumber = 0;
            for ( const item of json ) {
                avgPrice += parseFloat( item.price );
                avgWholePrice += parseFloat( item.wholesale_price );
                itemsNumber += 1;
            }
            priceText.value = avgPrice / itemsNumber;
            wholesalePriceText.value = avgWholePrice / itemsNumber;
        })

}

button.addEventListener( "click", () => getData( url ) );


