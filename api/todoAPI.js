const express = require('express');
const router = express.Router();
const { readFileSync, writeFileSync, appendFileSync } = require('fs');


// ---------- todo data ---------------------

// SEND TODOS
router.get('/', (req, res, next) => {
    
    // read the current file
    const todos = readFileSync('todo.json', 'utf-8');
    let parsedtodos;
    // check if file is empty
    if (todos == '') {
        // create the template for the file and insert the first todo
        parsedtodos = {
            todos: [
                {title: 'you have no todos', id: 123}
            ]
        }
    }
    else {
        // parse the string data to a js object
        parsedtodos = JSON.parse(todos);
    }

    res.json(parsedtodos);
});

