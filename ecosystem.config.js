module.exports = {
  apps: [{
    name: 'cloudlem-app',
    script: 'npm',
    args: 'start',
    cwd: '/home/ubuntu/cloudlem-app',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/ubuntu/cloudlem-app/logs/err.log',
    out_file: '/home/ubuntu/cloudlem-app/logs/out.log',
    log_file: '/home/ubuntu/cloudlem-app/logs/combined.log',
    time: true
  }]
}
