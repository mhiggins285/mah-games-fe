import { useState, useEffect } from 'react'

import { getCategories } from '../../utils/api'

import { formatCategoryName } from '../../utils/format'

const CategoryDropDown = ({setCategoryFilter, isReviewOptions}) => {

    const [categories, setCategories] = useState([])

    const categoryChangeHandler = function(event) {

        setCategoryFilter(event.target.value)

    }

    useEffect(() => {

        getCategories()
            .then((categoriesRes) => {

                const categoryArray = categoriesRes.map((category) => {
                    return category.slug
                })

                setCategories(categoryArray)

            })

    }, [])

    return (
        <label hidden={!isReviewOptions}>Category
          <select onChange={categoryChangeHandler}>
            <option defaultValue value={undefined}>No Filter</option>
            {categories.map((category) => <option key={category} value={category}>{formatCategoryName(category)}</option>)}
          </select>
        </label>
    )

}

export default CategoryDropDown