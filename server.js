const path = require('path');
const express = require('express');
// const cookieParser = require('cookie-parser');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

// app.use(cookieParser(process.env.COOKIE_SECRET, { sameSite:"none", secure:true }));

app.get('/', (req, res, next) => {
    // res.cookie("access_token", token, {
    //     sameSite:'none',
    //     secure: true, // https, ssl 모드에서만
    //     maxAge: 1000*60*60*24*1, // 1D
    //     // httpOnly: true, // javascript 로 cookie에 접근하지 못하게 한다.
    // });
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log('8080에서 대기 중...');
});
