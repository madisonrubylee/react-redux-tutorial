import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter'
const CounterContainer = ({ number, increase, decrease }) => {
    return (
            <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}

//mapDispatchProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어주면 
// connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다.
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
            increase,
            decrease,
     },

)(CounterContainer)


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


// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => 
//     bindActionCreators(
//         {
//             increase,
//             decrease,
//         },
//         dispatch,
//     ),
// )(CounterContainer)

