import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Typescript with Expressjs");
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
}).on("error", (error) => {
    throw new Error(error.message);
});