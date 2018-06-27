let fromCurrency = encodeURIComponent('USD'),
amount = 2, toCurrency = encodeURIComponent('NGN');

const query = fromCurrency + '_' + toCurrency;

const url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
          + query;


fetch(url)
  .then((response) => response.json())
  .then((myJson) => {
      const theAnswer = myJson.results[query].val * amount
      console.log(theAnswer);
});
