import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const {title} = props
    let navigate = useNavigate();

    return (
        <div className='header'>
            <button
            onClick={()=>{navigate(`/`)}}
            style={{ backgroundColor: 'white', color:'green', fontSize:'60px'}}
            className='btn'
            >
            {title}
            </button>
        </div>
    )
}
Header.defaultProps = {
    title: 'Voila'
}

Header.prototype = {
    title: PropTypes.string
}

export default Header