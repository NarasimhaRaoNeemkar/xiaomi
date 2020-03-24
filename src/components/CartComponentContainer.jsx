import { connect } from 'react-redux';
import CartComponent from './CartComponent.jsx';
import { productTotals } from '../utils/cartUtils';

const mapStateToProps = (state) => {
    let cartDetails = state.cartDetails;
    let {totalQuantity, totalPrice} = productTotals(cartDetails);
    return {
        cartDetails,
        totalQuantity,
        totalPrice
    }
}

export default connect(mapStateToProps)(CartComponent);
