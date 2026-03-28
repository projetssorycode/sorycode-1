import { Tabs, TabItem } from "@astrojs/starlight/components"

SoryCode CLI starter som standard [TUI](/docs/tui) når den kjøres uten noen argumenter.

```bash
sorycode
```

Men den godtar også kommandoer som dokumentert på denne siden. Dette lar deg samhandle med SoryCode programmatisk.

```bash
sorycode run "Explain how closures work in JavaScript"
```

---

### tui

Start SoryCode-terminalbrukergrensesnittet.

```bash
sorycode [project]
```

#### Flagg

| Flagg        | Kort | Beskrivelse                                                              |
| ------------ | ---- | ------------------------------------------------------------------------ |
| `--continue` | `-c` | Fortsett siste økt                                                       |
| `--session`  | `-s` | Økt ID for å fortsette                                                   |
| `--fork`     |      | Forgren økten ved fortsettelse (bruk med `--continue` eller `--session`) |
| `--prompt`   |      | Ledetekst som skal brukes                                                |
| `--model`    | `-m` | Modell å bruke i form av leverandør/modell                               |
| `--agent`    |      | Agent som skal brukes                                                    |
| `--port`     |      | Port å lytte på                                                          |
| `--hostname` |      | Vertsnavn å lytte på                                                     |

---

## Kommandoer

SoryCode CLI har også følgende kommandoer.

---

### agent

Administrer agenter for SoryCode.

```bash
sorycode agent [command]
```

---

### attach

Koble en terminal til en allerede kjørende SoryCode-backend-server startet via `serve` eller `web` kommandoer.

```bash
sorycode attach [url]
```

Dette gjør det mulig å bruke TUI med en ekstern SoryCode-backend. For eksempel:

```bash
# Start the backend server for web/mobile access
sorycode web --port 4096 --hostname 0.0.0.0

# In another terminal, attach the TUI to the running backend
sorycode attach http://10.20.30.40:4096
```

#### Flagg

| Flagg       | Kort | Beskrivelse                       |
| ----------- | ---- | --------------------------------- |
| `--dir`     |      | Arbeidskatalog for å starte TUI i |
| `--session` | `-s` | Økt ID for å fortsette            |

---

#### create

Opprett en ny agent med tilpasset konfigurasjon.

```bash
sorycode agent create
```

Denne kommandoen vil veilede deg gjennom å lage en ny agent med en tilpasset systemmelding og verktøykonfigurasjon.

---

#### list

List opp alle tilgjengelige agenter.

```bash
sorycode agent list
```

---

### auth

Kommando for administrasjon av påloggingsinformasjon og innlogging for leverandører.

```bash
sorycode auth [command]
```

---

#### login

SoryCode drives av leverandørlisten på [Models.dev](https://models.dev), så du kan bruke `sorycode auth login` til å konfigurere API-nøkler for enhver leverandør du vil bruke. Dette er lagret i `~/.local/share/sorycode/auth.json`.

```bash
sorycode auth login
```

Når SoryCode starter opp, laster den leverandørene fra filen med påloggingsinformasjon. Og hvis det er noen nøkler definert i miljøene dine eller en `.env`-fil i prosjektet ditt.

---

#### list

Viser alle de autentiserte leverandørene som er lagret i filen med påloggingsinformasjon.

```bash
sorycode auth list
```

Eller bruk kortversjonen.

```bash
sorycode auth ls
```

---

#### logout

Logger deg ut av en leverandør ved å fjerne den fra filen med påloggingsinformasjon.

```bash
sorycode auth logout
```

---

### github

Administrer GitHub-agenten for depotautomatisering.

```bash
sorycode github [command]
```

---

#### install

Installer GitHub-agenten i depotet ditt.

```bash
sorycode github install
```

Dette setter opp den nødvendige GitHub Actions-arbeidsflyten og veileder deg gjennom konfigurasjonsprosessen. [Finn ut mer](/docs/github).

---

#### run

Kjør GitHub-agenten. Dette brukes vanligvis i GitHub Actions.

```bash
sorycode github run
```

##### Flagg

| Flagg     | Beskrivelse                                  |
| --------- | -------------------------------------------- |
| `--event` | GitHub mock-hendelse agenten skal kjøres for |
| `--token` | GitHub personlig tilgangsnøkkel              |

---

### mcp

Administrer Model Context Protocol-servere.

```bash
sorycode mcp [command]
```

---

#### add

Legg til en MCP-server til konfigurasjonen.

```bash
sorycode mcp add
```

Denne kommandoen vil veilede deg gjennom å legge til enten en lokal eller ekstern MCP-server.

---

#### list

Liste alle konfigurerte MCP-servere og deres tilkoblingsstatus.

```bash
sorycode mcp list
```

Eller bruk den korte versjonen.

```bash
sorycode mcp ls
```

---

#### auth

Autentiser med en OAuth-aktivert MCP-server.

```bash
sorycode mcp auth [name]
```

Hvis du ikke oppgir et servernavn, blir du bedt om å velge blant tilgjengelige OAuth-kompatible servere.

Du kan også liste opp OAuth-kompatible servere og deres autentiseringsstatus.

```bash
sorycode mcp auth list
```

Eller bruk den korte versjonen.

```bash
sorycode mcp auth ls
```

---

#### logout

Fjern OAuth-påloggingsinformasjon for en MCP-server.

```bash
sorycode mcp logout [name]
```

---

#### debug

Feilsøk OAuth-tilkoblingsproblemer for en MCP-server.

```bash
sorycode mcp debug <name>
```

---

### models

List opp alle tilgjengelige modeller fra konfigurerte leverandører.

```bash
sorycode models [provider]
```

Denne kommandoen viser alle modeller som er tilgjengelige på tvers av dine konfigurerte leverandører i formatet `provider/model`.

Dette er nyttig for å finne ut det eksakte modellnavnet som skal brukes i [din konfigurasjon](/docs/config/).

Du kan eventuelt sende en leverandør ID for å filtrere modeller etter den leverandøren.

```bash
sorycode models anthropic
```

#### Flagg

| Flagg       | Beskrivelse                                                         |
| ----------- | ------------------------------------------------------------------- |
| `--refresh` | Oppdater modellbufferen fra models.dev                              |
| `--verbose` | Bruk mer detaljert modellutdata (inkluderer metadata som kostnader) |

Bruk `--refresh`-flagget for å oppdatere den bufrede modelllisten. Dette er nyttig når nye modeller er lagt til en leverandør og du vil se dem i SoryCode.

```bash
sorycode models --refresh
```

---

### run

Kjør SoryCode i ikke-interaktiv modus ved å sende en melding direkte.

```bash
sorycode run [message..]
```

Dette er nyttig for skripting, automatisering eller når du vil ha et raskt svar uten å starte hele TUI. For eksempel.

```bash "sorycode run"
sorycode run Explain the use of context in Go
```

Du kan også koble til en kjørende `sorycode serve`-forekomst for å unngå MCP-serveres kaldstarttid ved hver kjøring:

```bash
# Start a headless server in one terminal
sorycode serve

# In another terminal, run commands that attach to it
sorycode run --attach http://localhost:4096 "Explain async/await in JavaScript"
```

#### Flagg

| Flagg        | Kort | Beskrivelse                                                              |
| ------------ | ---- | ------------------------------------------------------------------------ |
| `--command`  |      | Kommandoen for å kjøre, bruk melding for args                            |
| `--continue` | `-c` | Fortsett siste økt                                                       |
| `--session`  | `-s` | Økt ID for å fortsette                                                   |
| `--fork`     |      | Forgren økten ved fortsettelse (bruk med `--continue` eller `--session`) |
| `--share`    |      | Del økten                                                                |
| `--model`    | `-m` | Modell å bruke i form av leverandør/modell                               |
| `--agent`    |      | Agent å bruke                                                            |
| `--file`     | `-f` | Fil(er) som skal legges ved meldingen                                    |
| `--format`   |      | Format: standard (formatert) eller json (rå JSON hendelser)              |
| `--title`    |      | Tittel for økten (bruker avkortet ledetekst hvis ingen verdi er oppgitt) |
| `--attach`   |      | Koble til en kjørende SoryCode-server (f.eks. http://localhost:4096)     |
| `--port`     |      | Port for den lokale serveren (standard til tilfeldig port)               |

---

### serve

Start en headless SoryCode-server for API-tilgang. Sjekk ut [server-dokumentene](/docs/server) for hele HTTP-grensesnittet.

```bash
sorycode serve
```

Dette starter en HTTP-server som gir API tilgang til SoryCode-funksjonalitet uten TUI-grensesnittet. Sett `SORYCODE_SERVER_PASSWORD` for å aktivere HTTP grunnleggende autentisering (brukernavn er standard til `sorycode`).

#### Flagg

| Flagg        | Beskrivelse                                        |
| ------------ | -------------------------------------------------- |
| `--port`     | Port å lytte på                                    |
| `--hostname` | Vertsnavn å lytte på                               |
| `--mdns`     | Aktiver mDNS-oppdagelse                            |
| `--cors`     | Ytterligere nettleseropprinnelse som tillater CORS |

---

### session

Administrer SoryCode-økter.

```bash
sorycode session [command]
```

---

#### list

List opp alle SoryCode-økter.

```bash
sorycode session list
```

##### Flagg

| Flagg         | Kort | Beskrivelse                              |
| ------------- | ---- | ---------------------------------------- |
| `--max-count` | `-n` | Begrens til N siste økter                |
| `--format`    |      | Utdataformat: tabell eller json (tabell) |

---

### stats

Vis tokenbruk og kostnadsstatistikk for SoryCode-øktene dine.

```bash
sorycode stats
```

#### Flagg

| Flagg       | Beskrivelse                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| `--days`    | Vis statistikk for de siste N dagene (hele tiden)                                |
| `--tools`   | Antall verktøy som skal vises (alle)                                             |
| `--models`  | Vis oversikt over modellbruk (skjult som standard). Gi et tall for å vise topp N |
| `--project` | Filtrer etter prosjekt (alle prosjekter, tom streng: gjeldende prosjekt)         |

---

### export

Eksporter øktdata som JSON.

```bash
sorycode export [sessionID]
```

Hvis du ikke gir en økt ID, blir du bedt om å velge fra tilgjengelige økter.

---

### import

Importer øktdata fra en JSON-fil eller en SoryCode share-URL.

```bash
sorycode import <file>
```

Du kan importere fra en lokal fil eller en SoryCode share-URL.

```bash
sorycode import session.json
sorycode import https://opncd.ai/s/abc123
```

---

### web

Start en headless SoryCode-server med et webgrensesnitt.

```bash
sorycode web
```

Dette starter en HTTP-server og åpner en nettleser for å få tilgang til SoryCode via et nettgrensesnitt. Sett `SORYCODE_SERVER_PASSWORD` for å aktivere HTTP grunnleggende autentisering (brukernavn er standard til `sorycode`).

#### Flagg

| Flagg        | Beskrivelse                                        |
| ------------ | -------------------------------------------------- |
| `--port`     | Port å lytte på                                    |
| `--hostname` | Vertsnavn å lytte på                               |
| `--mdns`     | Aktiver mDNS-oppdagelse                            |
| `--cors`     | Ytterligere nettleseropprinnelse som tillater CORS |

---

### acp

Start en ACP (Agent Client Protocol) server.

```bash
sorycode acp
```

Denne kommandoen starter en ACP-server som kommuniserer via stdin/stdout ved å bruke nd-JSON.

#### Flagg

| Flagg        | Beskrivelse          |
| ------------ | -------------------- |
| `--cwd`      | Arbeidskatalog       |
| `--port`     | Port å lytte på      |
| `--hostname` | Vertsnavn å lytte på |

---

### uninstall

Avinstaller SoryCode og fjern alle relaterte filer.

```bash
sorycode uninstall
```

#### Flagg

| Flagg           | Kort | Beskrivelse                                   |
| --------------- | ---- | --------------------------------------------- |
| `--keep-config` | `-c` | Behold konfigurasjonsfiler                    |
| `--keep-data`   | `-d` | Behold øktdata og øyeblikksbilder             |
| `--dry-run`     |      | Vis hva som ville blitt fjernet uten å fjerne |
| `--force`       | `-f` | Hopp over bekreftelsesforespørsler            |

---

### upgrade

Oppdaterer SoryCode til siste versjon eller en spesifikk versjon.

```bash
sorycode upgrade [target]
```

For å oppgradere til siste versjon.

```bash
sorycode upgrade
```

For å oppgradere til en bestemt versjon.

```bash
sorycode upgrade v0.1.48
```

#### Flagg

| Flagg      | Kort | Beskrivelse                                                    |
| ---------- | ---- | -------------------------------------------------------------- |
| `--method` | `-m` | Installasjonsmetoden som ble brukt: curl, npm, pnpm, bun, brew |

---

## Globale flagg

SoryCode CLI bruker følgende globale flagg.

| Flagg          | Kort | Beskrivelse                         |
| -------------- | ---- | ----------------------------------- |
| `--help`       | `-h` | Vis hjelp                           |
| `--version`    | `-v` | Skriv ut versjonsnummer             |
| `--print-logs` |      | Skriv ut logger til stderr          |
| `--log-level`  |      | Loggnivå (DEBUG, INFO, WARN, ERROR) |

---

## Miljøvariabler

SoryCode kan konfigureres ved hjelp av miljøvariabler.

| Variabel                              | Type   | Beskrivelse                                                           |
| ------------------------------------- | ------ | --------------------------------------------------------------------- |
| `SORYCODE_AUTO_SHARE`                 | boolsk | Del økter automatisk                                                  |
| `SORYCODE_GIT_BASH_PATH`              | streng | Bane til Git Bash-kjørbar på Windows                                  |
| `SORYCODE_CONFIG`                     | streng | Bane til konfigurasjonsfil                                            |
| `SORYCODE_TUI_CONFIG`                 | streng | Bane til TUI-konfigurasjonsfil                                        |
| `SORYCODE_CONFIG_DIR`                 | streng | Bane til konfigurasjonskatalog                                        |
| `SORYCODE_CONFIG_CONTENT`             | streng | Innebygd json-konfigurasjonsinnhold                                   |
| `SORYCODE_DISABLE_AUTOUPDATE`         | boolsk | Deaktiver automatiske oppdateringskontroller                          |
| `SORYCODE_DISABLE_PRUNE`              | boolsk | Deaktiver beskjæring av gamle data                                    |
| `SORYCODE_DISABLE_TERMINAL_TITLE`     | boolsk | Deaktiver automatiske terminaltitteloppdateringer                     |
| `SORYCODE_PERMISSION`                 | streng | Innebygd json-tillatelseskonfigurasjon                                |
| `SORYCODE_DISABLE_DEFAULT_PLUGINS`    | boolsk | Deaktiver standard plugins                                            |
| `SORYCODE_DISABLE_LSP_DOWNLOAD`       | boolsk | Deaktiver automatiske LSP servernedlastinger                          |
| `SORYCODE_ENABLE_EXPERIMENTAL_MODELS` | boolsk | Aktiver eksperimentelle modeller                                      |
| `SORYCODE_DISABLE_AUTOCOMPACT`        | boolsk | Deaktiver automatisk kontekstkomprimering                             |
| `SORYCODE_DISABLE_CLAUDE_CODE`        | boolsk | Deaktiver lesing fra `.claude` (spørsmål + ferdigheter)               |
| `SORYCODE_DISABLE_CLAUDE_CODE_PROMPT` | boolsk | Deaktiver lesing `~/.claude/CLAUDE.md`                                |
| `SORYCODE_DISABLE_CLAUDE_CODE_SKILLS` | boolsk | Deaktiver innlasting av `.claude/skills`                              |
| `SORYCODE_DISABLE_MODELS_FETCH`       | boolsk | Deaktiver henting av modeller fra eksterne kilder                     |
| `SORYCODE_FAKE_VCS`                   | streng | Falsk VCS-leverandør for testformål                                   |
| `SORYCODE_DISABLE_FILETIME_CHECK`     | boolsk | Deaktiver filtidskontroll for optimalisering                          |
| `SORYCODE_CLIENT`                     | streng | Klientidentifikator (standard til `cli`)                              |
| `SORYCODE_ENABLE_EXA`                 | boolsk | Aktiver Exa-nettsøkeverktøy                                           |
| `SORYCODE_SERVER_PASSWORD`            | streng | Aktiver grunnleggende autentisering for `serve`/`web`                 |
| `SORYCODE_SERVER_USERNAME`            | streng | Overstyr grunnleggende autentiseringsbrukernavn (standard `sorycode`) |
| `SORYCODE_MODELS_URL`                 | streng | Egendefinert URL for henting av modellkonfigurasjon                   |

---

### Eksperimentelt

Disse miljøvariablene muliggjør eksperimentelle funksjoner som kan endres eller fjernes.

| Variabel                                        | Type   | Beskrivelse                                   |
| ----------------------------------------------- | ------ | --------------------------------------------- |
| `SORYCODE_EXPERIMENTAL`                         | boolsk | Aktiver alle eksperimentelle funksjoner       |
| `SORYCODE_EXPERIMENTAL_ICON_DISCOVERY`          | boolsk | Aktiver ikonoppdagelse                        |
| `SORYCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT`  | boolsk | Deaktiver kopi ved valg i TUI                 |
| `SORYCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS` | tall   | Standard tidsavbrudd for bash-kommandoer i ms |
| `SORYCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`        | tall   | Maks Output Tokens for LLM-svar               |
| `SORYCODE_EXPERIMENTAL_FILEWATCHER`             | boolsk | Aktiver filovervåker for hele dir             |
| `SORYCODE_EXPERIMENTAL_OXFMT`                   | boolsk | Aktiver oxfmt formatter                       |
| `SORYCODE_EXPERIMENTAL_LSP_TOOL`                | boolsk | Aktiver eksperimentelt LSP-verktøy            |
| `SORYCODE_EXPERIMENTAL_DISABLE_FILEWATCHER`     | boolsk | Deaktiver filovervåking                       |
| `SORYCODE_EXPERIMENTAL_EXA`                     | boolsk | Aktiver eksperimentelle Exa-funksjoner        |
| `SORYCODE_EXPERIMENTAL_LSP_TY`                  | boolsk | Aktiver eksperimentell LSP-typekontroll       |
| `SORYCODE_EXPERIMENTAL_MARKDOWN`                | boolsk | Aktiver eksperimentelle Markdown-funksjoner   |
| `SORYCODE_EXPERIMENTAL_PLAN_MODE`               | boolsk | Aktiver planmodus                             |