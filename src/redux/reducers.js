const DEFAULT_STATE = [
    {
        id: Math.random(),
        completed: true,
        content: "decide what to learn",
    },
    {
        id: Math.random(),
        completed: false,
        content: "learn react",
    },
    {
        id: Math.random(),
        completed: false,
        content: "learn redux",
    },
];

export const todoReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: Math.random(),
                    completed: false,
                    content: action.payload,
                },
            ];
        case "TOGGLE_TODO":
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        default:
            return state;
    }
};
