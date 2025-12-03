# Stage 1: Build
FROM node:20-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy only package files first to leverage caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the SvelteKit app
RUN pnpm build

# Stage 2: Production image
FROM node:20-alpine

# Install pnpm for production (optional, only if needed)
RUN npm install -g pnpm

WORKDIR /app

# Copy package files and node_modules from builder
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

# Expose the port your app will run on
EXPOSE 3000

# Run the Node server
CMD ["node", "build"]
