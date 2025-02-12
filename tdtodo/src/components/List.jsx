import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "done" : ''}>
          <FontAwesomeIcon
            icon={`far fa-2x ${
              todo.done ? "fa-check-square" : "fa-square"
            }`}
            size="2x"
            onClick={() => onToggle(todo.id)}
          />
          <span>{todo.description}</span>
          <button onClick={() => onDelete(todo.id)}>
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default List;
