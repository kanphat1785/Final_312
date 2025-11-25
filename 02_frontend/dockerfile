# ---------- Stage 1: Build the Next.js application ----------
FROM node:20-alpine AS builder

# Accept build argument for API_HOST
ARG API_HOST=http://localhost:3001

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy source files and build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1 \
    API_HOST=${API_HOST}
RUN npm run build


# ---------- Stage 2: Production runtime ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]

