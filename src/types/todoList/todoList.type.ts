export type TaskStatusType = "pending" | "done";

type TaskLinkType = {
  name: string;
  url?: string;
}

export interface TaskType {
  id: string;
  ref: number;
  title: string;
  description: string;
  status: TaskStatusType;
  required: boolean;
  links?: TaskLinkType[]
}

