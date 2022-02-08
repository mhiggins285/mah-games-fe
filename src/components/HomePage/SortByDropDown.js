const SortByDropDown = ({setSortByQuery}) => {

    const sortByChangeHandler = function(event) {

        setSortByQuery(event.target.value)

    }

    return (
        <label>Sort By
          <select onChange={sortByChangeHandler}>
            <option defaultValue key='created-at' value='created-at'>Date Created</option>
            <option key='votes' value='votes'>Number of Votes</option>
            <option key='comments' value='comments'>Number of Comments</option>
          </select>
        </label>
    )

}

export default SortByDropDown