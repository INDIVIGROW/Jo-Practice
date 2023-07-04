const express = require('express') // 
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:name', (req, res) => {
	const { name } = req.params
	console.log(name)
	if (name == 'dog') {
        res.json({'sound':'멍멍', 'image':'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/JQ_HusUnDX9WANSKsVQP4CzcfV8.jpg'})        
    } else if (name == 'cat') {
        res.send({'sound':'야옹'})        
    } else {
        res.send({'sound':'무요'})
    }

})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})