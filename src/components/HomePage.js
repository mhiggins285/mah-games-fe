import { useState, useEffect } from 'react'

import OptionBox from './HomePage/OptionBox'
import ReviewList from './HomePage/ReviewList'

const HomePage = (props) => {

    const [categoryFilter, setCategoryFilter] = useState('')

    return(<section>
        <OptionBox setCategoryFilter={setCategoryFilter}/>
        <ReviewList categoryFilter={categoryFilter}/>        
    </section>)

}

export default HomePage