http = require('http')
express = require('express')
app = express()

app.set('view engine,'jade')
app.set('views','./views')

#set public folder
app.use(express.static('./public'))

app.get('/',(req,res) =>
    res.render('index')
)

app.get('/hello',(req,res) =>
    res.send('<h1>test</h1>')
)

app.get('/student/:studentId/course/:courseId', (req,res) =>
	res.send(req.params.studentId + ',' + req.params.state)
);

http.createServer(app).listen(8080,() =>
	console.log('expres is there!')
);