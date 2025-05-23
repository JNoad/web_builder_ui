<template>
    <div class="terminal">
        <div class="terminal-inner">
            <pre v-for="(line, index) in output" :key="index">{{ line }}</pre>
            <pre class="terminal-input">{{ currentPath }}> <input type="text" @keypress="runCommand" v-model="command"></pre>
        </div>
    </div>
</template>

<script>
// import { io } from "socket.io-client";

export default {
    data() {
        return {
            socket: null,
            currentPath: "API:\\output",
            command: "",
            output: [],
        };
    },
    methods: {
        runCommand(e) {
            if (e.key.toLowerCase() == 'enter') {
                this.output.push(`${this.currentPath}> ${this.command}`)
                this.$store.dispatch('terminalCommand', this.command)
                this.command = ''                
            }
        }
    },
    // mounted() {
    //     // Connect to the backend socket
    //     this.socket = io("ws://localhost:3000");

    //     // Listen for command output from the backend
    //     this.socket.on("terminalData", (data) => {
    //         this.output.push(data); // Append data to the terminal output
    //     });

    //     // Listen for process completion
    //     this.socket.on("command-done", (message) => {
    //         this.output.push(message); // Notify when command is done
    //     });
    // },
}
</script>

<style lang="scss">
    .terminal {
        width: 100%; height: 200px;
        bottom: 0;
        background-color: #222;
        color: #AF8;
        overflow: auto;
        .terminal-inner {
            width: 100%;
            .terminal-input {
                display: flex;
                input {
                    flex: 1;
                    background-color: transparent;
                    border: none;
                    color: #fff;
                    &:focus {
                        border: none;
                        outline: none;
                    }
                }
            }
        }
    }
</style>
