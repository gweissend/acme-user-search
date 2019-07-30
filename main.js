
let searchBar = document.getElementById('searchBar')
let clearButton = document.getElementById('clearButton')
let count = 0

const render = (data) => {
    let table = document.getElementById('searchResults')
    let tableContent = data.users.map(element => {
        let tableRow = document.createElement("tr")
        searchResults.appendChild(tableRow)
        let avatar = document.createElement("td")
        avatar.innerHTML = `<img class="avatarImg" src="${element.avatar}" height=50px width=50px>`
        tableRow.appendChild(avatar)
        let firstName = document.createElement("td")
        firstName.innerHTML = element.firstName
        tableRow.appendChild(firstName)
        let lastName = document.createElement("td")
        lastName.innerHTML = element.lastName
        tableRow.appendChild(lastName)
        let email = document.createElement("td")
        email.innerHTML = element.email
        tableRow.appendChild(email)
        let title = document.createElement("td")
        title.innerHTML = element.title
        tableRow.appendChild(title)
    })
}

searchBar.addEventListener('keyup', function() {
    //I feel like building a count is a hackey way to do this. Especially because it's in the global scope, but it works. I would much rather set this to when the user stops typing. If I do SetTimeout, it's still going to run the function with the initial character, rather than all the characters typing during the timeout.
    if (count < 2) {
        count++
    }
    else {
    let searchTerm = searchBar.value
    //I THOUGHT MAYBE SETTING A TIMER COULD STOP MY CODE FROM RUNNING ON THE FIRST KEYUP
    setTimeout(fetch(`https://acme-users-api-rev.herokuapp.com/api/users/search/${searchTerm}`)
        .then(response => response.json())
        .then(data => render(data)), 2000)
    }
})


// PLEASE EXPLAIN HOW TO DO THIS DELETE FUNCTION
// searchBar.addEventListener('keydown', function() {
//     let searchTerm = searchBar.value
//     fetch(`https://acme-users-api-rev.herokuapp.com/api/users/search/${searchTerm}`)
//         .then(response => response.json())
//         .then(data => render(data))
// })

clearButton.addEventListener('click', function() {
   location.reload()
})
