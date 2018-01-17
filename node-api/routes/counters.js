var express = require('express');
var router = express.Router();

var count = 0;

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

router.get('/counters', function(req, res) {
	res.json({ 
		count: count 
	});
});

router.route('/counters/:action') // 輸入id當作參數

.put(function(req, res) {
	if(req.params.action === 'add'){
		count = count + 1;
	}
	else if (req.params.action === 'sub'){
		count = count - 1; 
	}
	else{
		count = count;
	}
	res.json({
		count: count,
	})
})

module.exports = router;