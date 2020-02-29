
require('dotenv').config({path: '../../.env'})
console.log('Awesome, this is working!')
const apiKey = process.env.API_KEY;
console.log(apiKey)