import { useState, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { postReview } from '../utils/api'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import CategoryDropDown from './HomePage/CategoryDropDown'
import ErrorMessage from './re-used/ErrorMessage'

import '../css/App.css'
// styling included on LogInPage.css

const WriteReviewPage = () => {

    const { currentUser } = useContext(CurrentUserContext)

    const navigate = useNavigate()

    const writeReviewInputEmptyObject = {

        title: '',
        body: '',
        designer: '',

    }

    const [errorDetails, setErrorDetails] = useState('')
    const [writeReviewInput, setWriteReviewInput] = useState(writeReviewInputEmptyObject)
    const [category, setCategory] = useState('')

    const handleReviewChange = (event) => {

        const targetName = event.target.name
        const value = event.target.value

        setWriteReviewInput((oldWriteReviewInput) => {

            const newWriteReviewInput = {...oldWriteReviewInput}
            newWriteReviewInput[targetName] = value
            return newWriteReviewInput

        })

    }

    const handlePostReview = (event) => {

        event.preventDefault()

        if (writeReviewInput.title === '') {

            setErrorDetails({message: 'Please enter title'})

        } else if (writeReviewInput.title.length > 200) {

            setErrorDetails({message: 'Title too long, max length: 200'})

        } else if (writeReviewInput.designer === '') {

            setErrorDetails({message: 'Please enter designer'})

        } else if (writeReviewInput.designer.length > 50) {

            setErrorDetails({message: 'Designer name too long, max length: 50'})

        } else if (category === '') {

            setErrorDetails({message: 'Please select a category'})

        } else if (writeReviewInput.body === '') {

            setErrorDetails({message: 'Please enter review body'})

        } else if (writeReviewInput.body.length > 2000) {

            setErrorDetails({message: 'Review body too long, max length: 2000'})

        } else {

            postReview(writeReviewInput.title, writeReviewInput.designer, category, writeReviewInput.body, currentUser) 
                .then(() => {

                    setErrorDetails({})

                    navigate('/')

                })


        }

    }

    if (!currentUser) {

        return (<h3 className='background-header'>You are not currently logged in. Please log in to write a review.</h3>)

    }

    return(<section className='log-in-box blue-border'>
        <h2>Write Review</h2>
        <form onSubmit={(event) => handlePostReview(event)}>
            <label>Title
            <input type='text' name='title' value={writeReviewInput.title} placeholder='Title' onChange={handleReviewChange}/></label>
            <label>Designer
            <input type='text' name='designer' value={writeReviewInput.designer} placeholder='Designer' onChange={handleReviewChange}/></label>
            <CategoryDropDown setCategoryFilter={setCategory} isReviewOptions={true}/>
            <label><span className='write-review-body-tag'>Review Body</span>
            <textarea cols='50' type='text' name='body' value={writeReviewInput.body} placeholder='Review body...' onChange={handleReviewChange} className='write-review-body'/></label>
            <button type='submit'>Submit</button>
        </form>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default WriteReviewPage