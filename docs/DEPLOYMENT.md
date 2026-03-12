# Deployment Guide

## Docker Deployment

### Using Docker Compose

```bash
docker-compose up -d
```

### Manual Docker Build

```bash
# Build the image
docker build -t nexoraai .

# Run the container
docker run -p 3000:3000 nexoraai
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |
| `LOG_LEVEL` | Logging level | `info` |

## Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure proper logging
- [ ] Set up monitoring
- [ ] Configure SSL/TLS
- [ ] Set up backup strategy
- [ ] Configure rate limiting

## Monitoring

The application exposes health check endpoint at `/api/health` for monitoring systems.

## Scaling

For horizontal scaling, deploy multiple instances behind a load balancer.