
import {createStore} from 'vuex'


const store = createStore({
    state: {
        chats: [],
        headerUser: '',
        searchResult: []
    },
    getters: {},
    mutations: {
      GET_DATA(state) {
        const data = [
          {
            "id": 1,
            "name": "Tom",
            "src": 'http://almode.ru/uploads/posts/2021-03/1617028917_51-p-tom-khenks-53.jpg',
            "phone": "8-800-555-22-33",
            "status": "online",
            "chat": [
              {
                "id": 1,
                "time": "19:10",
                "text": "Hi there! How r u doin'? ",
                "type": "own"
              },
              {
                "id": 2,
                "time": "19:31",
                "text": "Fine, and how r u?",
                "type": "others"
              },
              {
                "id": 3,
                "time": "14:14",
                "text": "Im fine too ty!",
                "type": "own"
              }
            ]
          },
          {
            "id": 2,
            "name": "Sam",
            "src": 'http://almode.ru/uploads/posts/2021-03/1617028917_51-p-tom-khenks-53.jpg',
            "phone": "8-800-888-22-33",
            "status": "offline",
            "chat": [
              {
                "id": 1,
                "time": "19:10",
                "text": "Hi there! How r u doin'? ",
                "type": "own"
              },
              {
                "id": 2,
                "time": "19:31",
                "text": "Fine, and how r u?",
                "type": "others"
              }
            ]
          },
          {
            "id": 3,
            "name": "Samuel",
            "src": 'http://almode.ru/uploads/posts/2021-03/1617028917_51-p-tom-khenks-53.jpg',
            "phone": "8-800-232-22-33",
            "status": "offline",
            "chat": [
              {
                "id": 1,
                "time": "18:30",
                "text": "Hi there! How r u doin'? ",
                "type": "own"
              },
              {
                "id": 2,
                "time": "19:31",
                "text": "Fine, and how r u?",
                "type": "others"
              },
              {
                "id": 3,
                "time": "19:33",
                "text": "I'm OK too :) ",
                "type": "own"
              }
            ]
          },
          {
            "id": 4,
            "name": "Jack",
            "src": 'http://almode.ru/uploads/posts/2021-03/1617028917_51-p-tom-khenks-53.jpg',
            "phone": "8-800-777-22-33",
            "status": "online",
            "chat": [
              {
                "id": 1,
                "time": "18:30",
                "text": "Hi there! How r u doin'? ",
                "type": "own"
              },
              {
                "id": 2,
                "time": "19:31",
                "text": "Fine, and how r u?",
                "type": "others"
              },
              {
                "id": 3,
                "time": "19:33",
                "text": "I'm OK too :) ",
                "type": "own"
              }
            ]
          },
          {
            "id": 5,
            "name": "Miranda",
            "src": 'http://almode.ru/uploads/posts/2021-03/1617028917_51-p-tom-khenks-53.jpg',
            "phone": "8-800-241-22-33",
            "status": "offline",
            "chat": [
              {
                "id": 1,
                "time": "18:20",
                "text": "Hi there! How r u doin'? ",
                "type": "own"
              },
              {
                "id": 2,
                "time": "19:31",
                "text": "Fine, and how r u?",
                "type": "others"
              },
              {
                "id": 4,
                "time": "19:33",
                "text": "I'm OK too :) ",
                "type": "own"
              }
            ]
          }
        ]
        state.chats = data
        state.searchResult = data
      },
      SET_USER_TO_HEAD(state, user) {
        if (user) {
          state.headerUser = user
        }
      },
      GET_USER_STATE(state, name) {  
        if (name.trim().length > 0) {
          state.searchResult = state.chats.filter(item => {
            if (item.name.toLowerCase() === name.trim().toLowerCase()) {
              return true 
            } 
          })   
        } else {
          state.searchResult = state.chats
        }
      }
    },
    actions: {
      SET_USER_TO_HEADER({commit}, user) {
        commit('SET_USER_TO_HEAD', user)
      },
      GET_USER({commit}, name) {
        commit('GET_USER_STATE', name)
      },
      ADD_DATA({commit}) {
        commit('GET_DATA')
      }
    }
})

export default store