import path from 'path'
import fs from 'fs'
import { spawn } from 'child_process'

const projectsPath = path.join(__dirname, 'projects')

function create(req, res, next) {
    if (req.method !== 'POST') return next()
    const { projectName, template = 'vue' } = req.body

    // 1) scaffold
    const create = spawn(
        'npx', 
        ['--yes', 'degit', 'vitejs/vite/packages/create-vite/template-vue', projectName],
        {
            cwd: projectsPath,
            shell: true,
            stdio: 'inherit'
        }
    )
    

    create.on('exit', (code) => {
        if (code !== 0) {
            return res.status(500).end('create failed')
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
                return res.status(500).end('install failed')
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
}

export {create};