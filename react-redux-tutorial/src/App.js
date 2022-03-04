import CounterContainer from './container/CounterContainer'
import TodosContainer from './container/TodosContainer';

const App = () => {
  return (
    <div>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App;