# Derricode scraping workspace

This directory contains Derricode's public-business lead research artifacts.

## Layout

- `scripts/` — Scrapy lead-generation scripts.
- `data/` — XLSX checkpoints and research notes.
- `docs/` — methodology, source, and compliance documentation.

## Current dataset

- `data/derricode_tennessee_10k_leads.xlsx`
- `data/derricode_tennessee_10k_leads_README.md`

## Local Firecrawl

The self-hosted Firecrawl Docker project remains at `/home/massimo/firecrawl` and serves `http://127.0.0.1:3002`.

Future scraping runs should write checkpoints under `data/`, save scripts under `scripts/`, and update the README/report in `data/` or `docs/`. Never store API keys, tokens, or private contact information in this directory.
