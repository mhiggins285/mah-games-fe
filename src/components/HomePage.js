import { useState } from 'react'

import OptionBox from './re-used/OptionBox'
import ReviewList from './HomePage/ReviewList'

import '../css/App.css'

const HomePage = () => {

    const [categoryFilter, setCategoryFilter] = useState()
    const [sortByQuery, setSortByQuery] = useState()
    const [orderQuery, setOrderQuery] = useState()

    return(<section>
        <OptionBox setCategoryFilter={setCategoryFilter} setSortByQuery={setSortByQuery} setOrderQuery={setOrderQuery}/>
        <p className='background-text'>Select a review to read it.</p>
        <ReviewList categoryFilter={categoryFilter} sortByQuery={sortByQuery} orderQuery={orderQuery} setCategoryFilter={setCategoryFilter}/>        
    </section>)

}

export default HomePage