# Derricode infrastructure

The local Firecrawl Docker installation is maintained at:

`/home/massimo/firecrawl`

It is intentionally kept outside the website source tree because it is a separate service with its own Docker Compose lifecycle.

- Local API: `http://127.0.0.1:3002`
- Compose project: `/home/massimo/firecrawl/docker-compose.prebuilt.yaml`

Use the Firecrawl project directory for service operations; do not place Docker volumes, secrets, or generated service state in the website source folders.
