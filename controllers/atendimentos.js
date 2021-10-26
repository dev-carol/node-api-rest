 module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send 
    ('Rota de atendimentos e GET'))
   
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
   res.send ('Vocês está na rota de atendimentos e está realizando um post')
 })
    
  }