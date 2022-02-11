const SortByDropDown = ({setSortByQuery, isReviewOptions}) => {

    const sortByChangeHandler = function(event) {

      setSortByQuery(event.target.value)

    }

    return (
      <label>Sort By
        <select onChange={sortByChangeHandler}>
          <option defaultValue key='created_at' value='created_at'>Date Created</option>
          <option key='votes' value='votes'>Number of Votes</option>
          <option key='comment_count' value='comment_count' hidden={!isReviewOptions}>Number of Comments</option>
        </select>
      </label>
    )

}

export default SortByDropDown