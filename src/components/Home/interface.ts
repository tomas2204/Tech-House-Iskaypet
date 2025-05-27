type ComponentType = React.ComponentType<Record<string, unknown>>;

interface AddTaskModalProps {
  modalTaskCreationState: boolean;
  setModalTaskCreationState: (state: boolean) => void;
  tasks: Array<{ id: number; userId: number; title: string; description?: string; completed: boolean }>
  setTasks: (tasks: Array<{ id: number; userId: number; title: string; description?: string; completed: boolean }>) => void;
}

export type {
  ComponentType,
  AddTaskModalProps
}