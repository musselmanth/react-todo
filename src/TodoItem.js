const TodoItem = ({id, title, completed, onDelete, onToggle}) => {

  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={e => onToggle(id, e.target.checked)}/>
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
    </li>
  )
}

export default TodoItem