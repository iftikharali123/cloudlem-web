# AWS EC2 Deployment Guide

This guide will help you deploy your Cloudlem Landing Next.js application to AWS EC2 using GitHub Actions.

## Prerequisites

1. **AWS EC2 Instance**: Running Ubuntu 20.04 or later
2. **GitHub Repository**: With your code pushed
3. **SSH Access**: To your EC2 instance
4. **Domain (Optional)**: For custom domain setup

## Step 1: EC2 Instance Setup

### 1.1 Launch EC2 Instance
- Launch an EC2 instance (t3.medium or larger recommended)
- Use Ubuntu 20.04 LTS or later
- Configure security groups to allow:
  - SSH (port 22)
  - HTTP (port 80)
  - HTTPS (port 443)

### 1.2 Connect to EC2 and Run Setup Script
```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Download and run the setup script
curl -o setup-ec2.sh https://raw.githubusercontent.com/your-username/your-repo/main/scripts/setup-ec2.sh
chmod +x setup-ec2.sh
./setup-ec2.sh
```

Or manually run the setup commands from `scripts/setup-ec2.sh`.

## Step 2: GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add these repository secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `EC2_HOST` | Your EC2 public IP or domain | `54.123.45.67` or `yourdomain.com` |
| `EC2_USERNAME` | EC2 username | `ubuntu` or `ec2-user` |
| `EC2_SSH_KEY` | Your private SSH key content | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `EC2_PORT` | SSH port (optional) | `22` |

### Getting Your SSH Key
```bash
# If you don't have an SSH key pair, create one
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy the private key content to GitHub secrets
cat ~/.ssh/id_rsa
```

## Step 3: Deploy

### 3.1 Automatic Deployment
Once you've configured the secrets, push to the `main` branch:

```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

The GitHub Action will automatically:
- Build your Next.js application
- Deploy it to your EC2 instance
- Start the application with PM2
- Configure Nginx as a reverse proxy

### 3.2 Manual Deployment
If you need to deploy manually:

```bash
# On your EC2 instance
cd /var/www/cloudlem-landing
sudo ./scripts/deploy.sh
```

## Step 4: Verify Deployment

1. **Check Application Status**:
   ```bash
   sudo systemctl status cloudlem-landing
   ```

2. **View Application Logs**:
   ```bash
   sudo journalctl -u cloudlem-landing -f
   ```

3. **Test Application**:
   - Visit `http://your-ec2-ip` in your browser
   - Check health endpoint: `http://your-ec2-ip/health`

## Step 5: SSL Certificate (Optional)

To enable HTTPS:

1. **Install Certbot**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Get SSL Certificate**:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

3. **Update Nginx Configuration**:
   The nginx.conf file includes SSL configuration. Uncomment the SSL lines and update the certificate paths.

## Docker Deployment (Alternative)

You can also use Docker for deployment:

```bash
# Build and run with Docker Compose
cd /var/www/cloudlem-landing
sudo docker-compose up -d

# View logs
sudo docker-compose logs -f

# Stop services
sudo docker-compose down
```

## Monitoring and Maintenance

### Health Checks
- Application health: `http://your-ec2-ip/health`
- Nginx status: `sudo systemctl status nginx`

### Logs
- Application logs: `sudo journalctl -u cloudlem-landing -f`
- Nginx logs: `sudo tail -f /var/log/nginx/access.log`
- Docker logs: `sudo docker-compose logs -f`

### Updates
- Automatic updates happen on every push to `main` branch
- Manual updates: `sudo ./scripts/deploy.sh`

## Troubleshooting

### Common Issues

1. **Application not starting**:
   ```bash
   sudo systemctl status cloudlem-landing
   sudo journalctl -u cloudlem-landing -f
   ```

2. **Nginx not working**:
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

3. **Port conflicts**:
   ```bash
   sudo netstat -tulpn | grep :3000
   sudo netstat -tulpn | grep :80
   ```

4. **Permission issues**:
   ```bash
   sudo chown -R $USER:$USER /var/www/cloudlem-landing
   sudo chmod -R 755 /var/www/cloudlem-landing
   ```

### Performance Optimization

1. **Enable Gzip compression** (already configured in nginx.conf)
2. **Set up caching** (already configured)
3. **Use a CDN** for static assets
4. **Monitor resource usage**:
   ```bash
   htop
   df -h
   free -h
   ```

## Security Considerations

1. **Firewall**: Only open necessary ports
2. **SSH**: Use key-based authentication
3. **Updates**: Keep system packages updated
4. **SSL**: Use HTTPS in production
5. **Environment Variables**: Store sensitive data in environment variables

## Scaling

For production scaling:

1. **Load Balancer**: Use AWS Application Load Balancer
2. **Auto Scaling**: Set up EC2 Auto Scaling Groups
3. **Database**: Use AWS RDS for database needs
4. **CDN**: Use CloudFront for static assets
5. **Monitoring**: Set up CloudWatch monitoring

## Support

If you encounter issues:

1. Check the logs first
2. Verify all secrets are correctly set
3. Ensure EC2 security groups allow necessary ports
4. Check if the application builds successfully locally

For additional help, refer to:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
