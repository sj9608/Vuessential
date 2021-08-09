import { createStore } from 'vuex'

export const store = createStore({
    state() {
        
        return {
            todos: [],
        }
    },

    mutations: {
        SET_TODO(state, payload) {
            state.todos = [...state.todos, payload]
            localStorage.setItem("todo", JSON.stringify(state.todos))
        }
    },

    actions: {
        addTodo({commit}, payload) {
            commit('SET_TODO', payload)
        }
    },

    getters: {
        todos: state => state.todos,
    }
});