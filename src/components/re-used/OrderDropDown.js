const OrderDropDown = ({setOrderQuery}) => {

    const orderChangeHandler = function(event) {

        setOrderQuery(event.target.value)

    }

    return (
        <label>Order
          <select onChange={orderChangeHandler}>
            <option defaultValue key='desc' value='desc'>Descending</option>
            <option key='asc' value='asc'>Ascending</option>
          </select>
        </label>
    )

}

export default OrderDropDown