import express, {request, Request, response, Response } from 'express';
import bodyParser from 'body-parser';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const app = express();
app.use(bodyParser.json());
let todos: Todo[] = [
    { id:1, task:"Take out trash", completed: false },
    { id:2, task:  "Do landry", completed: true }
]

app.get('/', (Request, Response) =>{
    Response.send("legal")
})


app.get('/todos', (Request, Response) => {
    Response.send(todos)
})
app.post('/new', (Request, Response) => {
    Response.send( { id:3, task:  "Do landry", completed: true })
})

app.get('/todos', (Request, Response) => {
    Response.send(todos)
})

app.listen(3000, () =>{
    console.log("running")
})