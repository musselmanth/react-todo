import TodoItem from "./TodoItem"

const TodoList = ({todos, deleteItem, toggleItem}) => {
  return (
    <>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.sort((a, b) => a.completed &&  !b.completed ? 1 : -1).map(todo => {
          return (
            <TodoItem {...todo} key={todo.id} onDelete={deleteItem} onToggle={toggleItem}/>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList