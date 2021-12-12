import PropTypes from 'prop-types'

const Header = (props) => {
    const {title} = props
    return (
        <div className='header'>
            <h1>
                {title}
            </h1>
        </div>
    )
}
Header.defaultProps = {
    title: 'Voila Header'
}

Header.prototype = {
    title: PropTypes.string
}

export default Header