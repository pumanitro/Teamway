import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(cors.CorsOptions = {
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/ping', function (req, res) {
    return res.send('pong 2');
});

app.listen(process.env.PORT || 7777);
