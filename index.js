const express = require('express');
const app = express();
const port = 3211;


app.use(express.json());

let courses = [
    {id: 1, name: 'grammar'},
    {id: 2, name: 'Math'},
    {id: 3, name: 'course3'}
]

app.get('/courses', (req, res) => {
   res.json(courses);
})

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');
    course.name = req.body.name;
    res.send(course);
})

app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})


app.listen(3211, () => {
    console.log('Server is running on port 3211');
})

