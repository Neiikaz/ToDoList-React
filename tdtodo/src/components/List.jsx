import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "done" : ""}>
          <FontAwesomeIcon
            icon={`far fa-2x ${
              todo.done ? "fa-check-square" : "fa-check-square"
            }`}
            size="2x"
            onClick={() => ontoggle(todo.id)}
          />
          <span>{todo.description}</span>
          <button>
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
        </li>
      ))}
    </ul>
  )
}
export default List;