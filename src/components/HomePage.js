import { useState, useEffect } from 'react'

import OptionBox from './HomePage/OptionBox'
import ReviewList from './HomePage/ReviewList'

const HomePage = (props) => {

    const [categoryFilter, setCategoryFilter] = useState()
    const [sortByQuery, setSortByQuery] = useState()
    const [orderQuery, setOrderQuery] = useState()

    return(<section>
        <OptionBox setCategoryFilter={setCategoryFilter} setSortByQuery={setSortByQuery} setOrderQuery={setOrderQuery}/>
        Select a review to read it.
        <ReviewList categoryFilter={categoryFilter} sortByQuery={sortByQuery} orderQuery={orderQuery}/>        
    </section>)

}

export default HomePage