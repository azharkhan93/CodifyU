# Base image with Node.js 20 (latest version, slim variant)
FROM node:20-slim AS base

# Install necessary build tools and libraries
RUN apt-get update && apt-get install -y \
    g++ \
    make \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Expose the port the app will run on
EXPOSE 3000

# Builder stage to build the Next.js app
FROM base AS builder

# Set working directory (again, just to be explicit in this stage)
WORKDIR /app

# Install dependencies and build the Next.js app using yarn
RUN yarn install
RUN yarn build

# Production stage to create the final image
FROM base AS production

# Set working directory
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production

# Install production dependencies only using yarn
RUN yarn install --frozen-lockfile --production

# Add a non-root user for better security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app
USER nextjs

# Copy necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Command to run the application in production
CMD ["yarn", "start"]

# Development stage (optional) to run the app in development mode
FROM base AS dev

# Set environment variable for development
ENV NODE_ENV=development

# Install all dependencies, including devDependencies using yarn
RUN yarn install

# Copy all project files to the container
COPY . .

# Command to run the application in development mode
CMD ["yarn", "dev"]


# docker tag codifyu-2 azhar022/codifyu:latest
# Here’s what the command does:

# codifyu-2 is the name of your local Docker image.
# azhar022/codifyu:latest is the new name and tag for your image, following the format namespace/repository:tag.

# 2. Push Your Docker Image
# After tagging the image, you can push it to Docker Hub:

# bash
# Copy code
# docker push azhar022/codifyu:latest
# This command uploads your image to the azhar022/codifyu repository on Docker Hub with the latest tag.



# 4. Using the Pushed Image
# Now that your image is on Docker Hub, you can pull it from anywhere using:

# bash
# Copy code
# docker pull azhar022/codifyu:latest
# 4. Environment Variables
# Set environment variables needed for production using Docker’s -e option or by defining them in a .env file. Ensure sensitive information is managed securely.

# Example with environment variables:

# bash
# Copy code
# docker run -d -p 3000:3000 -e NODE_ENV=production -e OTHER_ENV_VAR=value your-image-name:tag




# # Copy only the build output and necessary files from the previous stage
# COPY --from=builder /app/.next .next
# COPY --from=builder /app/public public
# COPY --from=builder /app/package*.json ./

