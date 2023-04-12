export const getInitialTodos = () => {
  const temp = localStorage.getItem("todos");
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
};
