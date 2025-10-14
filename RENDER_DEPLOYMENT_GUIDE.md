# Saffron Caterers Website - Render Deployment Guide

This guide will help you deploy the Saffron Caterers website to Render.com.

## Prerequisites

1. **GitHub Account**: You need a GitHub account to host your code
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Git**: Make sure you have Git installed on your local machine

## Files Added for Render Deployment

The following files have been added to make the website compatible with Render:

- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server to serve static files
- `render.yaml` - Render configuration file
- `.gitignore` - Git ignore file for Node.js projects

## Deployment Steps

### Step 1: Prepare Your Repository

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd "Catering-Website/Saffron Caterers"
   git init
   git add .
   git commit -m "Initial commit - Saffron Caterers website ready for Render"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `saffron-caterers-website`
   - Make it public
   - Don't initialize with README (since we already have files)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/saffron-caterers-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Render

1. **Sign in to Render**:
   - Go to [render.com](https://render.com)
   - Sign in with your GitHub account

2. **Create New Web Service**:
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository
   - Select `saffron-caterers-website` repository

3. **Configure the Service**:
   - **Name**: `saffron-caterers-website`
   - **Environment**: `Node`
   - **Region**: Choose closest to your audience (e.g., US East for Orlando)
   - **Branch**: `main`
   - **Root Directory**: Leave empty (uses root)
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Advanced Settings** (Optional):
   - **Health Check Path**: `/`
   - **Auto-Deploy**: Yes (recommended)

5. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy your website
   - Wait for the deployment to complete (usually 2-3 minutes)

### Step 3: Verify Deployment

1. **Check Build Logs**:
   - Monitor the build process in the Render dashboard
   - Ensure there are no errors

2. **Test Your Website**:
   - Click on the provided URL (e.g., `https://saffron-caterers-website.onrender.com`)
   - Test all pages and functionality
   - Verify contact form works (if using Formspree)

3. **Custom Domain** (Optional):
   - In Render dashboard, go to Settings
   - Add your custom domain (e.g., `saffroncaterers.com`)
   - Update DNS records as instructed

## Website Features

Your deployed website includes:

### 🎨 **Modern Design**
- Responsive layout for all devices
- Elegant typography and animations
- Professional color scheme

### 📱 **Pages**
- **Home**: Hero section with services overview
- **About Us**: Company information and location
- **Services**: Detailed service offerings
- **Gallery**: Photo gallery with filtering
- **Contact**: Contact form and business information

### ⚡ **Performance**
- Fast loading times
- Optimized images
- Smooth animations
- Mobile-friendly navigation

### 🛠️ **Interactive Features**
- Contact form (Formspree integration)
- Image gallery with lightbox
- Smooth scrolling navigation
- Mobile hamburger menu

## Maintenance

### Updating Your Website

1. **Make Changes Locally**:
   - Edit HTML, CSS, or JS files
   - Test locally by running `npm start`

2. **Deploy Changes**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
   - Render will automatically redeploy

### Monitoring

- **Render Dashboard**: Monitor uptime and performance
- **Analytics**: Consider adding Google Analytics
- **Form Submissions**: Check Formspree dashboard for contact form submissions

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Verify file paths are correct

2. **Website Not Loading**:
   - Check if the service is running
   - Verify the start command is correct
   - Check for any JavaScript errors

3. **Images Not Loading**:
   - Ensure image paths are relative
   - Check if images are in the correct directory

### Support

- **Render Documentation**: [render.com/docs](https://render.com/docs)
- **GitHub Issues**: Create issues in your repository
- **Contact Form**: The website includes a working contact form

## Cost

- **Free Tier**: Includes 750 hours/month (sufficient for most small businesses)
- **Paid Plans**: Start at $7/month for always-on service
- **Custom Domain**: Free with any plan

## Security

- **HTTPS**: Automatically enabled
- **Form Protection**: Formspree handles spam protection
- **Regular Updates**: Keep dependencies updated

---

## Quick Reference

**Repository**: `https://github.com/YOUR_USERNAME/saffron-caterers-website`
**Render URL**: `https://saffron-caterers-website.onrender.com`
**Custom Domain**: `https://saffroncaterers.com` (if configured)

**Business Information**:
- **Company**: Saffron Caterers
- **Address**: 7724 West Sand Lake Rd, Orlando, FL 32819
- **Phone**: (407) 674-8899
- **Email**: info@saffronhospitalitygroup.us

---

*Website created by Suraj Goni - Ready for professional deployment on Render!*
