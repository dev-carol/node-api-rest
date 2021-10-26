 module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send 
    ('Rota de atendimentos e GET'))
   
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
   res.send ('Atendimento enviado')
 })
    
  }