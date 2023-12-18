const express = require('express');
const axios = require('axios');
const app = express();
const port =3000;

// const API = 'https://jsonplaceholder.typicode.com/users';
 
app.get( '/getdata',async (req,res)=>{
  
    try {
        const apiURL='https://jsonplaceholder.typicode.com/users';
        const response= await axios.get(apiURL);
        const apiData = response.data;
        res.json(apiData);
    }catch(error){
        console.log("Error: " + error);
        res.status(500).send('error is cooming')
    }
});
app.listen(port,()=>{
console.log(`server ${port}`);
})

