
const axios = require('axios');
 
_BINANCE_URL = 'https://api.binance.com/api/v3/depth?symbol=BTCUSDT';
_COINBASE_URL = 'https://api-public.sandbox.exchange.coinbase.com/products/BTC-USD/book?level=3';


const getBinanceData = async() => {
    const data = await axios.get(_BINANCE_URL);
    return data.data.asks;
}

const getCoinbaseData = async() => {
    const data = await axios.get(_COINBASE_URL);
    return data.data.asks;
}

module.exports = {
    getBinanceData,
    getCoinbaseData,
};