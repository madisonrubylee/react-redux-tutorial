
const TodoItem = ({ todo, onToggle, onRemove }) => {
return (
    <div>
    <input
        type="checkbox"
        // onToggle
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
    />
    <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
    </span>
    {/* onRemove로 삭제 */}
    <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
);
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
const onSubmit = (e) => {
    e.preventDefault();
    // onInsert로 값 입력
    onInsert(input);
    onChangeInput('');
};

// onChangeInput으로 상태 업데이트
const onChange = (e) => onChangeInput(e.target.value);
return (
      <div>
      <form onSubmit={onSubmit}>
          <input value={input} onChange={onChange} />
          <button type="submit">등록</button>
      </form>
      <div>
          {todos.map((todo) => (
          <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
          />
          ))}
      </div>
      </div>
  );
};

export default Todos;