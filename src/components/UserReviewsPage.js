import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { getUser } from '../utils/api'

import UsersListItem from './UsersPages/UsersListItem'
import UserReviewList from './UsersPages/UserReviewList'

import '../css/App.css'

const UserReviewsPage = () => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState('')

    const { username } = useParams()

    useEffect(() => {

        setIsLoading(true)

        getUser(username)
            .then((userObject) => {

                setUser(userObject)

                setIsLoading(false)

            })
            .catch((err) => {

                navigate('/404error')

            })

    }, [username])

    return(<section>
        <h2 className='background-header'>{`${username}'s User Page`}</h2>
        <h3 className='background-header' hidden={!isLoading}>Loading...</h3>
        <UsersListItem user={user} borderColour={0} isLoading={isLoading}/>
        <UserReviewList user={username}/>
    </section>)

}

export default UserReviewsPage