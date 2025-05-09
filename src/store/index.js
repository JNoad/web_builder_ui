import { createStore } from 'vuex';
import axios from 'axios';
import { io } from "socket.io-client";

const socket = io('ws://localhost:3000');

export default createStore({
    state: {
        repos: [],
        msg: null,
        currentRepo: {
            name: '',
            content: {},
        },
    },
    mutations: {
        async setRepos(state, repos){
            state.repos = repos
        },
        setMsg(state, msg){
            state.msg = msg
        },
        setCurrentRepo(state, data){
            state.currentRepo = {name: data.repo, content: data}
        },
    },
    actions: {
        async getRepos(context){
            try {
                const res = await axios.get('http://localhost:3000/github/repos', { withCredentials: true });
                context.commit('setRepos', res.data);
                console.log(res.data[0]);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        },
        async createRepo(context, data){
            try {
                const res = await axios.post('http://localhost:3000/github/repos', data,
                    {
                        headers: { Authorization: `token ${token}` },
                    }
                );
                context.commit('msg', res.data);
            } catch (error) {
                console.error('Error creating repo:', error);
            }
        },
        async fetchRepoContents(context, payload) {
            payload.path ? payload.path : '';
            try {
              const res = await axios.get(`http://localhost:3000/github/repos/${payload.owner}/${payload.repo}/contents/${payload.path}`, { withCredentials: true });
              context.commit('setCurrentRepo', res.data);
              console.log(res.data);
            } catch (error) {
              console.error('Error fetching repo contents:', error);
            }
        },

        async createProject(context, data){
            try {
                console.log('Submitting...', data);
                const res = await axios.post('http://localhost:3000/frontend', data );
                context.commit('msg', res.data);
                console.log('Submited!');
            } catch (error) {
                console.error('Error creating repo:', error);
            }
        },

        async terminalCommand(context, data){
            try {
                console.log('Emmitting: ' + data);
                
                socket.emit('terminal', data)
            } catch (error) {
                console.error('Error creating repo:', error);
            }
        },
    },
})
