# Musterlösung — Übung 1

## Was hier gemacht wurde

Ein minimaler Steckbrief mit allem, was die Übung verlangt:

- Korrektes Grundgerüst (`<!DOCTYPE>`, `<html lang="de">`, `<meta charset>`)
- Semantische Struktur: `<header>` → `<main>` mit `<section>`s → `<footer>`
- Alle geforderten Tags: `<h1>`, `<h2>`, `<p>`, `<ul>`/`<li>`, `<a>`

## Andere Wege, die auch okay sind

- **Ohne `<section>`:** Für einen so kleinen Steckbrief könnte man die Sections weglassen. Für Applikationsentwickler-Niveau ist es aber eine gute Angewohnheit, sie zu setzen.
- **`<article>` statt `<section>`:** `<article>` passt, wenn der Inhalt "für sich alleine steht" (z.B. Blog-Post). Für Unterabschnitte einer Seite ist `<section>` semantisch korrekter.
- **Mehr `<h3>`s:** Wenn ein Abschnitt selbst wieder Unterthemen hat, sind `<h3>`s super.

## Häufige Fehler

- `<title>` im `<body>` statt im `<head>` — Klassiker!
- Vergessene schliessende Tags → Browser rendert komisch
- `<h1>` mehrfach verwendet → sollte pro Seite nur einmal vorkommen (Barrierefreiheit + SEO)
- `href` ohne `https://` — dann wird der Link relativ interpretiert
