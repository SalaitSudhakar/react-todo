export function totalTasksAndCompletedTasksLength(todos) {
  const totalTasks = todos?.length;
  const completedTask = todos?.reduce(
    (acc, todo) => (todo.completedStatus ? acc + 1 : acc),
    0,
  );
  return [totalTasks, completedTask];
}

export function calculateCompletedPercentage(totalTasks, completedTask) {
  return completedTask > 0 ? Math.round((completedTask / totalTasks) * 100) : 0;
}
