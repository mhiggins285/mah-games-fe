import { useState } from 'react'

import CategoryDropDown from './CategoryDropDown'
import SortByDropDown from './SortByDropDown'
import OrderDropDown from './OrderDropDown'

const OptionBox = ({setCategoryFilter, setSortByQuery, setOrderQuery}) => {

    const [hiddenOptions, setHiddenOptions] = useState(true)

    const hideShowOptions = () => {

        setHiddenOptions((oldHiddenOptions) => {
            return !oldHiddenOptions
        })

    }

    return(<fieldset>
        <legend>Options</legend>
        <section hidden={hiddenOptions}>
            <CategoryDropDown setCategoryFilter={setCategoryFilter}/>
            <SortByDropDown setSortByQuery={setSortByQuery}/>
            <OrderDropDown setOrderQuery={setOrderQuery}/>
        </section>
        <button onClick={hideShowOptions}>{hiddenOptions ? 'Show' : 'Hide'}</button>
    </fieldset>)

}

export default OptionBox