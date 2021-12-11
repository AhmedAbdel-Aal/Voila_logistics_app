import Restaurant from '../components/Restaurant'

function RestaurantsPage(props) {
    const{restaurants} = props
    return (
        <div>
        {
            restaurants.map((restaurant, index) => (
            <Restaurant key={index} restaurant={restaurant}/>
            ))
        }
        </div>
    )
}

export default RestaurantsPage
