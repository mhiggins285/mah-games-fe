import { useState, useEffect } from 'react'

import { getCategories } from '../../utils/api'

const CategoryDropDown = ({setCategoryFilter}) => {

    const [categories, setCategories] = useState([])

    const categoryChangeHandler = function(event) {

        setCategoryFilter(event.target.value)

    }

    const formatCategoryName = (dashedCategoryName) => {

        const categoryWords = dashedCategoryName.split('-')
        const capitalisedCategoryWords = categoryWords.map((word) => {

            return (word[0].toUpperCase() + word.substring(1, word.length))

        })
        const formattedCategoryName = capitalisedCategoryWords.join(' ')
        return formattedCategoryName

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
        <label>Category
          <select onChange={categoryChangeHandler}>
            <option defaultValue value={undefined}>No Filter</option>
            {categories.map((category) => <option key={category} value={category}>{formatCategoryName(category)}</option>)}
          </select>
        </label>
    )

}

export default CategoryDropDown