import { useState } from 'react'

import CategoryDropDown from '../HomePage/CategoryDropDown'
import SortByDropDown from './SortByDropDown'
import OrderDropDown from './OrderDropDown'

import '../../css/App.css'

const OptionBox = ({setCategoryFilter, setSortByQuery, setOrderQuery}) => {

    const [hiddenOptions, setHiddenOptions] = useState(true)

    const hideShowOptions = () => {

        setHiddenOptions((oldHiddenOptions) => {
            return !oldHiddenOptions
        })

    }

    const isReviewOptions = !!setCategoryFilter

    return(<fieldset className='options-fieldset'>
        <legend className='background-text'>Options</legend>
        <section hidden={hiddenOptions} className='options-box'>
            <CategoryDropDown setCategoryFilter={setCategoryFilter} isReviewOptions={isReviewOptions}/>
            <SortByDropDown setSortByQuery={setSortByQuery} isReviewOptions={isReviewOptions}/>
            <OrderDropDown setOrderQuery={setOrderQuery}/>
        </section>
        <button onClick={hideShowOptions}>{hiddenOptions ? 'Show' : 'Hide'}</button>
    </fieldset>)

}

export default OptionBox