# frontend/Dockerfile
FROM node:22.11.0-slim

WORKDIR /app
RUN npm install next@15.0.2 react@18.3.1 react-dom@18.3.1
# Next.jsの依存関係をインストール
COPY --chown=node:node package*.json ./
# RUN npm install

# Next.jsアプリケーションをコピー
COPY --chown=node:node . .

# 開発モードでNext.jsサーバーを起動（ポート3000）
CMD ["node_modules/next/dist/bin/next", "start"]
