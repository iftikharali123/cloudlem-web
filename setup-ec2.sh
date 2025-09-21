#!/bin/bash

# EC2 Setup Script for Cloudlem App Deployment
# Run this script on your EC2 instance to prepare it for deployment

echo "Setting up EC2 instance for Cloudlem app deployment..."

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Create app directory
mkdir -p /home/ubuntu/cloudlem-app
mkdir -p /home/ubuntu/cloudlem-app/logs

# Set proper permissions
sudo chown -R ubuntu:ubuntu /home/ubuntu/cloudlem-app

# Install nginx (optional, for reverse proxy)
sudo apt install -y nginx

# Configure nginx (optional)
sudo tee /etc/nginx/sites-available/cloudlem-app > /dev/null <<EOF
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain or EC2 public IP

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site (optional)
sudo ln -s /etc/nginx/sites-available/cloudlem-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Configure PM2 to start on boot
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "EC2 setup complete!"
echo "Make sure to:"
echo "1. Configure your security groups to allow HTTP (port 80) and HTTPS (port 443) traffic"
echo "2. Update the nginx server_name with your actual domain or EC2 public IP"
echo "3. Set up your GitHub repository secrets:"
echo "   - EC2_HOST: Your EC2 public IP or domain"
echo "   - EC2_USERNAME: ubuntu (or your EC2 username)"
echo "   - EC2_SSH_KEY: Your private SSH key for EC2 access"
echo "   - EC2_PORT: 22 (default SSH port)"
