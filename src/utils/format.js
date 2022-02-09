export const formatDate = (timestamp) => {

    return (<p className="review-timestamp"><span className='bold'>{(new Date(timestamp)).toLocaleDateString()}</span> - <span className='italics'>{(new Date(timestamp)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span></p>)
    
}

export const formatCategoryName = (dashedCategoryName) => {

    const categoryWords = dashedCategoryName.split('-')
    const capitalisedCategoryWords = categoryWords.map((word) => {

        return (word[0].toUpperCase() + word.substring(1, word.length))

    })
    const formattedCategoryName = capitalisedCategoryWords.join(' ')
    return formattedCategoryName

}