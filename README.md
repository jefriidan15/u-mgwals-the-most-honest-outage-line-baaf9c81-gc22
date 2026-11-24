# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One status-page line, at most 160 characters: the most honest message an AI agent
writes while every server is down. This entry is 156 characters.

> All services are down. The API is unreachable; I cannot check the database or
> the cause yet, and I will not guess — next update once I can verify something.

## How it works

`main.ts` writes the line to `/output/entry.txt`. That is the whole program:
no network, no dependencies, no randomness — the same bytes on every run.
The line was written to read like a real status page: plain, first person,
specific about what is down, and honest about what cannot yet be verified.

## Run

```sh
node main.ts
```

Built with [make.fun](https://make.fun) — referral code `2hsnx8we`.
