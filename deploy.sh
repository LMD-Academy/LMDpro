#!/bin/bash

# LMDpro Production Deployment Script
# This script automates the deployment process

set -e

echo "🚀 Starting LMDpro deployment..."

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    echo "❌ Error: .env.production file not found!"
    echo "Please create .env.production with your production environment variables."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Type check
echo "🔍 Running type checks..."
npm run typecheck

# Build the application
echo "🏗️  Building application..."
npm run build

# Test the build
echo "🧪 Testing production build..."
npm run start &
BUILD_PID=$!
sleep 10

# Check if the server is running
if curl -f http://localhost:3000 >/dev/null 2>&1; then
    echo "✅ Production build test successful!"
    kill $BUILD_PID
else
    echo "❌ Production build test failed!"
    kill $BUILD_PID
    exit 1
fi

echo "🎉 Deployment preparation complete!"
echo "📋 Next steps:"
echo "1. Upload the .next folder and other files to your hosting provider"
echo "2. Set up environment variables on your hosting platform"
echo "3. Configure your custom domain DNS settings"
echo "4. Start the production server with 'npm start'"
