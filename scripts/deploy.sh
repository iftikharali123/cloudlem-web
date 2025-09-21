#!/bin/bash

# Deployment script for EC2
# This script is called by the GitHub Action

set -e

APP_DIR="/var/www/cloudlem-landing"
SERVICE_NAME="cloudlem-landing"

echo "🚀 Starting deployment..."

# Navigate to app directory
cd $APP_DIR

# Stop the service
echo "⏹️ Stopping service..."
sudo systemctl stop $SERVICE_NAME || true

# Stop Docker containers if running
echo "🐳 Stopping Docker containers..."
sudo docker-compose down || true

# Install/update dependencies
echo "📦 Installing dependencies..."
npm ci --production

# Set proper permissions
echo "🔐 Setting permissions..."
sudo chown -R $USER:$USER $APP_DIR
sudo chmod -R 755 $APP_DIR

# Start the service
echo "▶️ Starting service..."
sudo systemctl start $SERVICE_NAME

# Start Docker containers
echo "🐳 Starting Docker containers..."
sudo docker-compose up -d || true

# Check service status
echo "✅ Checking service status..."
sudo systemctl status $SERVICE_NAME --no-pager

# Check if app is responding
echo "🌐 Checking application health..."
sleep 10
if curl -f http://localhost:3000/health > /dev/null 2>&1; then
    echo "✅ Application is healthy and responding"
else
    echo "❌ Application health check failed"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
