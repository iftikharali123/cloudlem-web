# ==========================
# 1. Build stage
# ==========================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and lock file first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all project files
COPY . .

# Build Next.js app
RUN npm run build

# ==========================
# 2. Production stage
# ==========================
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Expose Next.js default port
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
