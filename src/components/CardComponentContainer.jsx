import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardComponent from './CardComponent.jsx';
import { addToCart } from '../actions/productAction';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToCart
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CardComponent);
