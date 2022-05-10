const axios = require('axios')

function getSingleTodoTitle() {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    return axios
        .get(url)
        .then(res => res.data.title.toUpperCase())
        .catch(err => err.response) // contains {status:400, statusText:"Some text"}
}

module.exports = getSingleTodoTitle