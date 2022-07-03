var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")





var settings = {
    "async": true,
    "scrossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=bitcoin%2Cethereum%2Cdogecoin&ids=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    "method": "Get",
    "header": {}
}

$.ajax(settings).done(function(response) {

    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});