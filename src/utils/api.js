import axios from 'axios'

const mahGamesAPI = axios.create({baseURL:'https://mah-games.herokuapp.com/api'})

/*** Reviews */

export const getReviewsByCategory = (category, sortByQuery = 'created_at', orderQuery = 'desc') => {

    let endpoint = `/reviews?sort_by=${sortByQuery}&order=${orderQuery}`

    if (category && category !== 'No Filter') {

        endpoint += `&category=${category}`

    }

    return mahGamesAPI.get(endpoint)
            .then((res) => {return res.data.reviews})
            .catch((err) => {throw(err)})

}

export const getReview = (review_id) => {

    return mahGamesAPI.get(`/reviews/${review_id}`)
        .then((res) => {

            return res.data.review
            
        })

}

export const patchReviewVotes = (review_id, inc_votes) => {

    const patchObject = { inc_votes }

    return mahGamesAPI.patch(`/reviews/${review_id}/votes`, patchObject)

}

/*** Comments */

export const postComment = (review_id, user, body) => {

    const commentObject = { user,  body }

    return mahGamesAPI.post(`/reviews/${review_id}/comments`, commentObject)
                    .then((res) => {
                        return(res.data.comment)
                    })

}

export const getCommentsByReview = (review_id) => {

    return mahGamesAPI.get(`reviews/${review_id}/comments`)
            .then((res) => {return res.data.comments})
            .catch((err) => {throw(err)})

}

export const deleteComment = (comment_id) => {

    return mahGamesAPI.delete(`comments/${comment_id}`)

}

export const patchCommentVotes = (comment_id, inc_votes) => {

    const patchObject = { inc_votes }

    return mahGamesAPI.patch(`/comments/${comment_id}/votes`, patchObject)

}


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

export const getUsers = () => {

    return mahGamesAPI.get('/users')
        .then((res) => {

            const users = res.data.users

            const userPromises = []

            users.forEach((user, index) => {

                userPromises[index] = mahGamesAPI.get(`/users/${user.username}`)
                    .then((res) => {

                        return res.data.user

                    })

            })

            return Promise.all(userPromises)

        })
        .then((detailedUsers) => {

            return detailedUsers

        })
    
}

export const getUser = (username) => {

    return mahGamesAPI.get(`/users/${username}`)
        .then((res) => res.data.user)

}

export const postUser = (username, name, avatar_url) => {

    const userObject = {

        username: username,
        name: name,
        avatar_url: avatar_url

    }

    return mahGamesAPI.post('/users', userObject)

}

export const getUserAvatar = (username) => {

    return mahGamesAPI.get(`/users/${username}`)
                .then((res) => {
                    return res.data.user.avatar_url
                })

}