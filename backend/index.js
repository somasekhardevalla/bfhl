const express =require('express')
const bodyParser = require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.json());

app.get('/bfhl',(req,res)=>
    {
        res.status(200).send('Hello World')
    }
    )

    app.post('/bfhl',(req,res)=>{
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }
    
        const user_id = "Soma_Sekhar_Devalla_07052003";
        const email = "soma@xyz.com";
        const roll_number = "ABCD123";
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');
        const highest_alphabet = alphabets.length ? [alphabets.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).pop()] : [];
    
        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    })


app.listen(
    port,
    ()=>console.log(`Server is running on port ${port}`)
)