//1引入mongoose模块
const mongoose = require('mongoose');
//2连接数据库
mongoose.connect('mongodb://localhost/admin', {useNewUrlParser: true, useUnifiedTopology: true});

//3数据库连接对象
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('连接成功')
});


