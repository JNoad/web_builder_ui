import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import express from 'express'
import { spawn } from 'child_process'
// import { create } from './src/router/request'

const projectsPath = path.join(__dirname, 'projects')

export default defineConfig({
    plugins: [
        vue(),
        {
            name: 'project-builder-api',
            configureServer(server) {
                // mount Express JSON parser
                server.middlewares.use(express.json())

                // POST /create
                server.middlewares.use('/create', (req, res, next) => {
                    if (req.method !== 'POST') return next()
                    let { projectName, flags = ['--router', '--pinia']  } = req.body
                    console.log(req.body, flags);

                    // 1) scaffold
                    const create = spawn(
                        'npx', 
                        ['create-vue@latest', projectName, ...flags],
                        {
                            cwd: projectsPath,
                            shell: true,
                            stdio: 'inherit'
                        }
                    )
                    
                    create.on('exit', (code) => {
                        console.log(code);
                        
                        if (code !== 0) {
                            res.statusCode = 500
                            return res.end('create failed')
                        }

                        const projectPath = path.join(projectsPath, projectName)

                        // 2) install
                        const install = spawn(
                            'npm',
                            ['install'],
                            {
                                cwd: projectPath,
                                shell: true,
                                stdio: 'inherit'
                            }
                        )

                        install.on('exit', (code) => {
                            if (code !== 0) {
                                res.statusCode = 500
                                return res.end('install failed')
                            }

                            const projectPath = path.join(projectsPath, projectName)

                            // 3) start dev & capture URL
                            const dev = spawn(
                                'npm',
                                ['run', 'dev'],
                                {
                                    cwd: projectPath,
                                    shell: true,
                                    stdio: ['ignore', 'pipe', 'pipe']
                                }
                            )

                            // Handler for stdout data
                            const onStdout = data => {
                                let text = data.toString()
                                console.log('[dev stdout]', text)
                                text = text.replace(/\x1B\[[0-9;]*m/g, '')

                                const match = text.match(/https?:\/\/\S+/)
                                if (match) {
                                    res.end(match[0])                        // send it back
                                    dev.stdout.off('data', onStdout)         // stop listening
                                }
                            }

                            dev.stdout.on('data', onStdout)
                            dev.stderr.on('data', data => {
                                const err = data.toString()
                                console.error('[dev stderr]', err)
                            })
                        })
                    })
                } )
            }
        }
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "sass:color"; @use "@/assets/scss/global.scss" as *;`
            }
        }
    },
})