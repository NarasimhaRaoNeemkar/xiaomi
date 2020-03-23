import { connect } from 'react-redux';
import CartComponent from './CartComponent.jsx';

const mapStateToProps = (state) => {
    let cartDetails = state.cartDetails;
    return {
        cartDetails
    }
}

export default connect(mapStateToProps)(CartComponent);
