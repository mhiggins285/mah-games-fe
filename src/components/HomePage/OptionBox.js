import { useState } from 'react'

import CategoryDropDown from "./CategoryDropDown"

const OptionBox = ({setCategoryFilter}) => {

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
        </section>
        <button onClick={hideShowOptions}>{hiddenOptions ? 'Show' : 'Hide'}</button>
    </fieldset>)

}

export default OptionBox