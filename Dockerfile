FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ENV DATABASE_URL="mongodb+srv://shauin:shauin@cluster0.1qbwo1u.mongodb.net/testdb&ssl=true"
ENV NEXTAUTH_SECRET="NEXTAUTH_SECRET"

ENV GITHUB_ID=b40b8afc9ab8432a8350
ENV GITHUB_SECRET=ca4616fbe42da3eebe58a88faeac3b33e3283a79

ENV GOOGLE_CLIENT_ID=586521432510-1j0b794qdanaqbgj6gj9se99nr37fnpo.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="drtfnzdbe"

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ARG HOSTNAME "192.168.10.105"
CMD node server.js