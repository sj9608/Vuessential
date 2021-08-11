import { createStore } from 'vuex'

export const store = createStore({
    state() {
        
        return {
            todos: [],
        }
    },

    mutations: {
        SET_TODO(state, payload) {
            let value = {
                item: payload,
                completed: false,
                date: `${new Date().getMonth() + 1}/${new Date().getDate()}`
            };
            state.todos = [...state.todos, payload];
            localStorage.setItem(payload, JSON.stringify(value))
        }
    },

    actions: {
        // 비동기 처리를 위해 이벤트를 발생시키는 함수를 만들어준다.
    },

    getters: {
        todos: state => state.todos,
    }
});