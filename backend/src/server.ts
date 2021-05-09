import express from 'express';
import 'express-async-errors'
import cors from 'cors'
import path from 'path'


import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);



app.listen(3333);





// Query Params: http://localhost:3333/users?search=bruno
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (identificar um recurso)

// app.get('/users', (request, response) => {
//     return response.json({message: "Hello World"});
// })