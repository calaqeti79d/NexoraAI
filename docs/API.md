# API Documentation

## Overview

Nexora AI provides a RESTful API for AI processing and analytics.

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Health Check

```http
GET /health
```

Returns the current status of the service.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2026-03-12T10:30:00.000Z"
}
```

### AI Processing

```http
POST /ai/process
```

Process data using AI algorithms.

**Request Body:**
```json
{
  "input": "data to process",
  "options": {}
}
```

**Response:**
```json
{
  "message": "AI processing endpoint",
  "data": { ... }
}
```

### Analytics

```http
GET /analytics
```

Retrieve analytics data.

**Response:**
```json
{
  "analytics": "data"
}
```

## Authentication

Currently, no authentication is required for development endpoints.

## Rate Limiting

API calls are limited to 100 requests per minute per IP address.