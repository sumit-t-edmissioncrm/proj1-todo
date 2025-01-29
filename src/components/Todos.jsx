import React from "react";

const Todos = ({
  todo,
  setOpenDialog,
  openDialog,
  fetchDetailsOfCurrentTodo,
}) => {
  return (
    <div className="relative max-w-sm p-6 pb-16 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {todo.todo}
        </h5>
      </div>

      <button
        onClick={() => {
          fetchDetailsOfCurrentTodo(todo.id);
          setOpenDialog(!openDialog);
        }}
        className="absolute bottom-4 right-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todos;
