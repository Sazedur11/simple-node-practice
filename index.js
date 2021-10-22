const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello My New Node World, this is my first node project. Plz check it')
});

const users = [
    { id: 0, name: 'Maruf', email: 'maruf@gmail.com', phone: '017777777' },
    { id: 1, name: 'Bulet', email: 'BUlet@gmail.com', phone: '017777777' },
    { id: 2, name: 'Ripon', email: 'Ripon@gmail.com', phone: '017777777' },
    { id: 3, name: 'Akash', email: 'Akash@gmail.com', phone: '017777777' },
    { id: 4, name: 'Shadhin', email: 'Shadhin@gmail.com', phone: '017777777' },
]


//use query
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app. METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('new post', req.body)
    // res.send('inside post')
    res.json(newUser)
})

//dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening`, port)
});