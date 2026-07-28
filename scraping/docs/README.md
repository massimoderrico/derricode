# Scraping methodology and operating notes

## Tools and flow

The scripts in `../scripts/` are small Python programs, not Scrapy spiders:

1. `requests` sends bounded calls to public websites and the local Firecrawl API.
2. Firecrawl provides public web search and page extraction when the local service is available.
3. `BeautifulSoup` parses HTML where direct extraction is used.
4. Results are normalized and deduplicated before being written to the checkpoint workbook in `../data/`.

## Running a checkpoint

Run from the repository root after installing the script dependencies in the calling environment:

```bash
python scraping/scripts/derricode_scrape.py
```

The scripts expect Firecrawl at `http://127.0.0.1:3002` for search/scrape operations. If it is unavailable, keep the checkpoint and document the limitation; never invent businesses, contacts, or page contents.

## Responsible research

Use public business information only. Respect each source's terms, `robots.txt`, rate limits, applicable privacy and marketing laws, and the service's acceptable-use policy. Do not bypass access controls, solve CAPTCHAs, guess personal contact details, or store API keys, tokens, or private contact information in this directory.

## Output and provenance

Save intermediate/checkpoint data under `../data/` and update its accompanying report with the research date, exact count, sources, extraction limitations, and deduplication method. Treat the workbook as a partial research checkpoint unless the report explicitly establishes completeness.
