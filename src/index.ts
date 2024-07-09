import * as cron from 'node-cron';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

let data = '';

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://payment-backend-tsho.onrender.com/transaction/balance',
    headers: { 
      'Origin': process.env.ORIGIN
    },
    data : data
  };

  
cron.schedule('*/5 * * * * *', async() => {
    axios.request(config)
    .catch((error) => {
    console.log(error);
    });
}) 

  