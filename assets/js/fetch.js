let fromCurrency = encodeURIComponent('USD'),
amount = 2, toCurrency = encodeURIComponent('NGN');

const query = fromCurrency + '_' + toCurrency;

const url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
          + query;


const getme = fetch(url)
  .then(function(response) {
      const convertToJson = response.json();
      console.log(convertToJson);
    //return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
});
