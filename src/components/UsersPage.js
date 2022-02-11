import { useEffect, useState } from 'react'

import { getUsers } from '../utils/api'

import UsersListItem from './UsersPages/UsersListItem'

import '../css/App.css'

const UsersPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [usersArray, setUsersArray] = useState([])

    useEffect(() => {

        setIsLoading(true)

        getUsers()
            .then((users) => {

                if (users === undefined) {

                    setUsersArray([])

                } else {

                    setUsersArray(users)

                }

                setIsLoading(false)

            })

    }, [])

    return(<section className='user-page'>
        <h2 className='background-header'>Users</h2>
        <p className='background-text' hidden={isLoading}>Select a user to see their reviews.</p>
        <h3 className='background-header' hidden={!isLoading}>Loading...</h3>
        <ul className='users-list'>
        {usersArray.map((user, index) => {
            return (<UsersListItem key={user.username} user={user} borderColour={index % 4}/>)
        })}</ul>     
    </section>)

}

export default UsersPage