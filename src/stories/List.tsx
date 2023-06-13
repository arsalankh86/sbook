import React from 'react';

interface ListProps {
    listItem: ListItemProps;
    onArchiveTask(): any;
    onPinTask(): any;
}

interface ListItemProps {
    id: number;
    title: string;
    state: string;    
}

const List = (listProps: ListProps) => {
  const { listItem, onArchiveTask, onPinTask } = listProps;
  return (
    <>
      <div className={`list-item ${listItem?.state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${listItem?.id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${listItem?.id}`}
          checked={listItem?.state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(listItem?.id)}
        />
      </label>

      <label htmlFor="title" aria-label={listItem?.title} className="title">
        <input
          type="text"
          value={listItem?.title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {listItem?.state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          id={`pinTask-${listItem?.id}`}
          aria-label={`pinTask-${listItem?.id}`}
          key={`pinTask-${listItem?.id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
    </>
  );
}

export {List}