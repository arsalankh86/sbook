import { List } from "./List";


export default {
    component: List,
    title: 'List',
    tags: ['autodocs'],  
};

export const Default = {
    args : {
        listItem : {
            id: 1,
            title: "List1",
            state: "Task Inbox"
        }
    }
};

export const Pinned = {
    args : {
        listItem : {
            id: 1,
            title: "Pinned",
            state: "Task Pinned"
        }
    }
};

export const Archived = {
    args: {
        listItem: {
            id: 1,
            title: "Archived",
            state: 'TASK_ARCHIVED',
      },
    },
  };