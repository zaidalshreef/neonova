FROM oven/bun:latest AS deps

WORKDIR /app


# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy application code
COPY . .

RUN SKIP_ENV_VALIDATION=1 bun run build

# Expose the default Next.js port
EXPOSE 3000

# Set the command to run the application
CMD ["bun", "start"] 