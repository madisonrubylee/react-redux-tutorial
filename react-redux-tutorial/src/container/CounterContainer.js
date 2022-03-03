import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter'
const CounterContainer = ({ number, increase, decrease }) => {
    return (
            <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}


// const mapStateToProps = state => ({
//     number: state.counter.number, 
// })
// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         console.log('increase')
//     },
//     decrease: () => {
//         console.log('decrease')
//     }
// });


export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => 
    bindActionCreators(
        {
            increase,
            decrease,
        },
        dispatch,
    ),
)(CounterContainer)