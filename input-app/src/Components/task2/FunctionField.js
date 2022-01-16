export default function FunctionField({title,setInputTextHandler}) {
  return (
    <form className="taskForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setInputTextHandler(e.target.value)}
      />
      <span className="output">My name: {title}, function.</span>
    </form>
  );
}
