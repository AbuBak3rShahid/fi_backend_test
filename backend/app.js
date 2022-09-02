const { getBinanceData, getCoinbaseData } = require("./NodeJsCall");

const express = require('express'); // Importing express module

const app = express(); // Creating an express object

const port = 3000; // Setting an port for this application


// Starting server using listen function
app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
}
else{
	console.log("Server has been started at "+port);
}
})

const getCheapest = async(cAsks, bAsks, amount) => {
    let cheapestPrice = Number.MAX_VALUE;
    let seller = '';
    amount = parseFloat(amount);
    
    cAsks.forEach(c => {
        const price = parseFloat(c[0]);
        const available = parseFloat(c[1]);
        if(cheapestPrice > price && available >= amount){
            cheapestPrice = price;
            seller = 'Coinbase';
        }
    });

    bAsks.forEach(b => {
        const price = parseFloat(b[0]);
        const available = parseFloat(b[1]);
        if(cheapestPrice > price && available >= amount){
            cheapestPrice = price;
            seller = 'Binance';
        }
    });

    return {cheapestPrice, seller};
}

app.get('/exchange-routing', async (req, res) => {
    const query= req.query;
    // const cAsks = await getCoinbaseData();
    // const bAsks = await getBinanceData();
    const [cAsks, bAsks] = await Promise.all([getCoinbaseData(), getBinanceData()]);
    const cheapest = await getCheapest(cAsks, bAsks, query.amount);
    res.send(cheapest);
  })

console.log("service running on 3000 port....");