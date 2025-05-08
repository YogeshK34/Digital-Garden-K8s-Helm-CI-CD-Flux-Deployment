# Stage 1: Install dependencies
FROM node:20-slim AS deps
WORKDIR /app

# Copy only package files first to cache dependencies
COPY package*.json ./

# Install dependencies (handle peer deps safely)
COPY . .

# Stage 2: Build app
FROM node:20-slim AS builder
WORKDIR /app

# Copy deps from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Stage 3: Run app
FROM node:20-slim AS runner
WORKDIR /app

# Copy built app and node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables if needed
ENV PORT=3000

# Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
