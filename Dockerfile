# ---- Base Node ----
FROM node:20-alpine AS base
WORKDIR /app
# Add necessary build tools
RUN apk add --no-cache python3 make g++

# ---- Dependencies ----
FROM base AS dependencies
# Copy package files
COPY package.json yarn.lock ./
# Install all dependencies
RUN yarn install --frozen-lockfile

# ---- Build ----
FROM dependencies AS build
# Copy source
COPY . .
# Build
RUN yarn build

# ---- Production ----
FROM base AS production
# Copy package files
COPY package.json yarn.lock ./
# Install production dependencies
RUN yarn install --frozen-lockfile --production
# Copy built files
COPY --from=build /app/dist ./dist
# Start
CMD ["yarn", "start"]

# ---- Development ----
FROM dependencies AS development
# Copy source
COPY . .
# Start development server
CMD ["yarn", "dev"]