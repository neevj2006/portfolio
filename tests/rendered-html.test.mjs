import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("is a native Next.js App Router project with Anime.js", async () => {
  const [page, layout, packageJson, nextConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /^"use client";/);
  assert.match(page, /from "animejs"/);
  assert.match(page, /animate\("/);
  assert.match(page, /stagger\(/);
  assert.match(layout, /from "next\/headers"/);
  assert.match(packageJson, /"dev": "next dev"/);
  assert.match(packageJson, /"build": "next build"/);
  assert.match(packageJson, /"animejs":/);
  assert.doesNotMatch(packageJson, /vinext|vite|wrangler/);
  assert.match(nextConfig, /unoptimized: true/);
});

test("uses the supplied student positioning and curated project lineup", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Expected Dec 2027/);
  assert.match(page, /3\.7\/4\.0/);
  assert.match(page, /neevj2006@gmail\.com/);
  assert.match(page, /nj2006@bu\.edu/);
  assert.match(page, /Vehicle Speed Detection/);
  assert.match(page, /DevRelay/);
  assert.match(page, /https:\/\/devrelay-delta\.vercel\.app\//);
  assert.match(page, /https:\/\/github\.com\/neevj2006\/DevRelay/);
  assert.match(page, /F1 Race Predictor/);
  assert.match(page, /https:\/\/github\.com\/neevj2006\/F1_Race_Predictor/);
  assert.match(page, /Gideon/);
  assert.match(page, /FraudGraph/);
  assert.match(page, /SpecGuard/);
  assert.match(page, /TransitPulse/);
  assert.match(page, /https:\/\/github\.com\/neevj2006/);
  assert.match(page, /Engineering practices/);
  assert.match(page, /BUILD → TEST/);
  assert.match(page, /SportsExcitement/);
  assert.match(page, /B\.Sc\. Computer Engineering/);
  assert.match(page, /Summer 2027/);
  assert.doesNotMatch(page, /research-grade|AI Automation Intern|B\.E\.|TalentHome|Personalized Learning Assistant|Cryptojacking Attack Analysis|workflow improvement|View production|GenZ Script/);
  assert.match(page, /className="skill-block"/);
  assert.doesNotMatch(page, /orbit|500\+/i);
  assert.doesNotMatch(page, /92\.08|CIFAR-10|House Price Regression|3\.77|Expected May 2027/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /:focus-visible/);

  await Promise.all([
    access(new URL("../public/neev-jain.jpeg", import.meta.url)),
    access(new URL("../public/Resume.pdf", import.meta.url)),
    access(new URL("../public/Resume-FullStack.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
});
