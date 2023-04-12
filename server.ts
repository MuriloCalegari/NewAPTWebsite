import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(
    '/graphql',
    createProxyMiddleware({
        target: 'https://app.fixie.ai',
        changeOrigin: true,
        pathRewrite: {
            '^/graphql': '/graphql',
        },
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
