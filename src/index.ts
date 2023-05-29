import express from 'express';

const app = express();
app.use(express.json());

app.get("/", (request, response)=>{
   
    return response.status(200).json({ message: "Usuário já Cadastrado"})

});

app.listen(3000, () =>{
    console.log("server initial")
});