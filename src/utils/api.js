import axios from 'axios'

const mahGamesAPI = axios.create({baseURL:'https://mah-games.herokuapp.com/api'})

/*** Reviews */

export const getReviewsByCategory = (category = '') => {

    let endpoint = '/reviews'

    if (category !== '') {

        endpoint += `?category=${category}`

    }

    return mahGamesAPI.get(endpoint)
            .then((res) => {return res.data.reviews})
            .catch((err) => {throw(err)})

}


/*** Comments */




/*** Categories */

export const getCategories = () => {

    return mahGamesAPI.get('/categories')
            .then((res) => {return res.data.categories})

}

/*** Users */

export const getUsernames = () => {

    return mahGamesAPI.get('/users')
        .then((res) => {
            const { users } = res.data
            const usernames = users.map((user) => {return user.username})
            return usernames
        })

}

export const postUser = (username, name, avatar_url) => {

    const userBody = {

        username: username,
        name: name,
        avatar_url: avatar_url

    }

    return mahGamesAPI.post('/users', userBody)

}