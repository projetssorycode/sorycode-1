import { Tabs, TabItem } from "@astrojs/starlight/components"

La CLI di SoryCode, per impostazione predefinita, avvia la [TUI](/docs/tui) quando viene eseguita senza argomenti.

```bash
sorycode
```

Ma accetta anche i comandi documentati in questa pagina. Questo ti permette di interagire con SoryCode in modo programmatico.

```bash
sorycode run "Explain how closures work in JavaScript"
```

---

### tui

Avvia l'interfaccia testuale di SoryCode (interfaccia utente da terminale).

```bash
sorycode [project]
```

#### Flag

| Flag         | Breve | Descrizione                                                              |
| ------------ | ----- | ------------------------------------------------------------------------ |
| `--continue` | `-c`  | Continua l'ultima sessione                                               |
| `--session`  | `-s`  | ID sessione da continuare                                                |
| `--fork`     |       | Duplica la sessione quando continui (usa con `--continue` o `--session`) |
| `--prompt`   |       | Prompt da usare                                                          |
| `--model`    | `-m`  | Modello nel formato provider/model                                       |
| `--agent`    |       | Agente da usare                                                          |
| `--port`     |       | Porta su cui mettersi in ascolto                                         |
| `--hostname` |       | Hostname su cui mettersi in ascolto                                      |

---

## Comandi

La CLI di SoryCode include anche i seguenti comandi.

---

### agent

Gestisci gli agenti per SoryCode.

```bash
sorycode agent [command]
```

---

### attach

Collega un terminale a un backend server di SoryCode già in esecuzione avviato tramite i comandi `serve` o `web`.

```bash
sorycode attach [url]
```

Questo consente di usare la TUI con un backend SoryCode remoto. Per esempio:

```bash
# Start the backend server for web/mobile access
sorycode web --port 4096 --hostname 0.0.0.0

# In un altro terminale, collega la TUI al backend in esecuzione
sorycode attach http://10.20.30.40:4096
```

#### Flag

| Flag        | Breve | Descrizione                             |
| ----------- | ----- | --------------------------------------- |
| `--dir`     |       | Working directory in cui avviare la TUI |
| `--session` | `-s`  | ID sessione da continuare               |

---

#### create

Crea un nuovo agente con configurazione personalizzata.

```bash
sorycode agent create
```

Questo comando ti guida nella creazione di un nuovo agente con un system prompt personalizzato e configurazione degli strumenti.

---

#### list

Elenca tutti gli agenti disponibili.

```bash
sorycode agent list
```

---

### auth

Comando per gestire le credenziali e il login dei provider.

```bash
sorycode auth [command]
```

---

#### login

SoryCode si basa sull'elenco provider di [Models.dev](https://models.dev), quindi puoi usare `sorycode auth login` per configurare le API key per qualunque provider tu voglia usare. Le credenziali vengono salvate in `~/.local/share/sorycode/auth.json`.

```bash
sorycode auth login
```

Quando SoryCode si avvia, carica i provider dal file delle credenziali e, se presenti, anche eventuali key definite nell'ambiente o in un file `.env` nel progetto.

---

#### list

Elenca tutti i provider autenticati come salvati nel file delle credenziali.

```bash
sorycode auth list
```

Oppure la versione corta.

```bash
sorycode auth ls
```

---

#### logout

Esegue il logout da un provider rimuovendolo dal file delle credenziali.

```bash
sorycode auth logout
```

---

### github

Gestisci l'agente GitHub per l'automazione dei repository.

```bash
sorycode github [command]
```

---

#### install

Installa l'agente GitHub nel tuo repository.

```bash
sorycode github install
```

Questo configura il workflow GitHub Actions necessario e ti guida nel processo di configurazione. [Scopri di più](/docs/github).

---

#### run

Esegui l'agente GitHub. Tipicamente usato in GitHub Actions.

```bash
sorycode github run
```

##### Flag

| Flag      | Descrizione                                  |
| --------- | -------------------------------------------- |
| `--event` | Evento GitHub mock per cui eseguire l'agente |
| `--token` | GitHub personal access token                 |

---

### mcp

Gestisci i server Model Context Protocol.

```bash
sorycode mcp [command]
```

---

#### add

Aggiungi un server MCP alla tua configurazione.

```bash
sorycode mcp add
```

Questo comando ti guida nell'aggiunta di un server MCP locale o remoto.

---

#### list

Elenca tutti i server MCP configurati e il loro stato di connessione.

```bash
sorycode mcp list
```

Oppure la versione corta.

```bash
sorycode mcp ls
```

---

#### auth

Autentica con un server MCP con OAuth abilitato.

```bash
sorycode mcp auth [name]
```

Se non fornisci un nome server, ti verrà chiesto di selezionare tra i server OAuth-capable disponibili.

Puoi anche elencare i server OAuth-capable e il loro stato di autenticazione.

```bash
sorycode mcp auth list
```

Oppure la versione corta.

```bash
sorycode mcp auth ls
```

---

#### logout

Rimuovi le credenziali OAuth per un server MCP.

```bash
sorycode mcp logout [name]
```

---

#### debug

Esegui debug di problemi di connessione OAuth per un server MCP.

```bash
sorycode mcp debug <name>
```

---

### models

Elenca tutti i modelli disponibili dai provider configurati.

```bash
sorycode models [provider]
```

Questo comando mostra tutti i modelli disponibili tra i provider configurati nel formato `provider/model`.

È utile per capire l'esatto nome del modello da usare nella [config](/docs/config/).

Puoi anche passare opzionalmente un ID provider per filtrare i modelli a quel provider.

```bash
sorycode models anthropic
```

#### Flag

| Flag        | Descrizione                                        |
| ----------- | -------------------------------------------------- |
| `--refresh` | Aggiorna la cache modelli da models.dev            |
| `--verbose` | Output più verboso (include metadati come i costi) |

Usa `--refresh` per aggiornare l'elenco modelli in cache. È utile quando nuovi modelli vengono aggiunti a un provider e vuoi vederli in SoryCode.

```bash
sorycode models --refresh
```

---

### run

Esegui sorycode in modalità non interattiva passando un prompt direttamente.

```bash
sorycode run [message..]
```

È utile per scripting, automazione o quando vuoi una risposta rapida senza avviare la TUI completa. Per esempio:

```bash "sorycode run"
sorycode run Explain the use of context in Go
```

Puoi anche collegarti a una istanza `sorycode serve` già in esecuzione per evitare i cold boot dei server MCP ad ogni esecuzione:

```bash
# Avvia un server headless in un terminale
sorycode serve

# In un altro terminale, esegui comandi che si collegano ad esso
sorycode run --attach http://localhost:4096 "Explain async/await in JavaScript"
```

#### Flag

| Flag         | Breve | Descrizione                                                              |
| ------------ | ----- | ------------------------------------------------------------------------ |
| `--command`  |       | Il comando da eseguire; usa message per gli argomenti                    |
| `--continue` | `-c`  | Continua l'ultima sessione                                               |
| `--session`  | `-s`  | ID sessione da continuare                                                |
| `--fork`     |       | Duplica la sessione quando continui (usa con `--continue` o `--session`) |
| `--share`    |       | Condividi la sessione                                                    |
| `--model`    | `-m`  | Modello nel formato provider/model                                       |
| `--agent`    |       | Agente da usare                                                          |
| `--file`     | `-f`  | File da allegare al messaggio                                            |
| `--format`   |       | Formato: default (formattato) o json (eventi JSON grezzi)                |
| `--title`    |       | Titolo sessione (usa prompt troncato se non viene fornito un valore)     |
| `--attach`   |       | Attach a un server sorycode in esecuzione (es. http://localhost:4096)    |
| `--port`     |       | Porta per il server locale (di default una porta casuale)                |

---

### serve

Avvia un server SoryCode headless per accesso via API. Vedi le [server docs](/docs/server) per l'interfaccia HTTP completa.

```bash
sorycode serve
```

Avvia un server HTTP che espone accesso API alle funzionalità di sorycode senza la TUI. Imposta `SORYCODE_SERVER_PASSWORD` per abilitare HTTP basic auth (username di default `sorycode`).

#### Flag

| Flag         | Descrizione                                    |
| ------------ | ---------------------------------------------- |
| `--port`     | Porta su cui mettersi in ascolto               |
| `--hostname` | Hostname su cui mettersi in ascolto            |
| `--mdns`     | Abilita discovery mDNS                         |
| `--cors`     | Origin browser addizionali per consentire CORS |

---

### session

Gestisci le sessioni SoryCode.

```bash
sorycode session [command]
```

---

#### list

Elenca tutte le sessioni SoryCode.

```bash
sorycode session list
```

##### Flag

| Flag          | Breve | Descrizione                          |
| ------------- | ----- | ------------------------------------ |
| `--max-count` | `-n`  | Limita alle N sessioni più recenti   |
| `--format`    |       | Formato output: table o json (table) |

---

### stats

Mostra statistiche di utilizzo token e costo per le sessioni SoryCode.

```bash
sorycode stats
```

#### Flag

| Flag        | Descrizione                                                                           |
| ----------- | ------------------------------------------------------------------------------------- |
| `--days`    | Mostra statistiche per gli ultimi N giorni (all time)                                 |
| `--tools`   | Numero di strumenti da mostrare (all)                                                 |
| `--models`  | Mostra breakdown di utilizzo modelli (nascosto di default). Passa un numero per top N |
| `--project` | Filtra per progetto (tutti i progetti; stringa vuota: progetto corrente)              |

---

### export

Esporta i dati di sessione come JSON.

```bash
sorycode export [sessionID]
```

Se non fornisci un ID sessione, ti verrà chiesto di selezionare tra le sessioni disponibili.

---

### import

Importa i dati di sessione da un file JSON o da un URL di condivisione SoryCode.

```bash
sorycode import <file>
```

Puoi importare da un file locale o da un URL di condivisione SoryCode.

```bash
sorycode import session.json
sorycode import https://opncd.ai/s/abc123
```

---

### web

Avvia un server SoryCode headless con interfaccia web.

```bash
sorycode web
```

Avvia un server HTTP e apre un browser per accedere a SoryCode tramite interfaccia web. Imposta `SORYCODE_SERVER_PASSWORD` per abilitare HTTP basic auth (username di default `sorycode`).

#### Flag

| Flag         | Descrizione                                    |
| ------------ | ---------------------------------------------- |
| `--port`     | Porta su cui mettersi in ascolto               |
| `--hostname` | Hostname su cui mettersi in ascolto            |
| `--mdns`     | Abilita discovery mDNS                         |
| `--cors`     | Origin browser addizionali per consentire CORS |

---

### acp

Avvia un server ACP (Agent Client Protocol).

```bash
sorycode acp
```

Questo comando avvia un server ACP che comunica via stdin/stdout usando nd-JSON.

#### Flag

| Flag         | Descrizione                         |
| ------------ | ----------------------------------- |
| `--cwd`      | Directory di lavoro                 |
| `--port`     | Porta su cui mettersi in ascolto    |
| `--hostname` | Hostname su cui mettersi in ascolto |

---

### uninstall

Disinstalla SoryCode e rimuove tutti i file correlati.

```bash
sorycode uninstall
```

#### Flag

| Flag            | Breve | Descrizione                                  |
| --------------- | ----- | -------------------------------------------- |
| `--keep-config` | `-c`  | Mantieni i file di configurazione            |
| `--keep-data`   | `-d`  | Mantieni dati di sessione e snapshot         |
| `--dry-run`     |       | Mostra cosa verrebbe rimosso senza rimuovere |
| `--force`       | `-f`  | Salta le richieste di conferma               |

---

### upgrade

Aggiorna sorycode all'ultima versione o a una versione specifica.

```bash
sorycode upgrade [target]
```

Per aggiornare all'ultima versione:

```bash
sorycode upgrade
```

Per aggiornare a una versione specifica:

```bash
sorycode upgrade v0.1.48
```

#### Flag

| Flag       | Breve | Descrizione                                               |
| ---------- | ----- | --------------------------------------------------------- |
| `--method` | `-m`  | Metodo di installazione usato: curl, npm, pnpm, bun, brew |

---

## Flag globali

La CLI di sorycode accetta i seguenti flag globali.

| Flag           | Breve | Descrizione                            |
| -------------- | ----- | -------------------------------------- |
| `--help`       | `-h`  | Mostra l'help                          |
| `--version`    | `-v`  | Stampa il numero di versione           |
| `--print-logs` |       | Stampa i log su stderr                 |
| `--log-level`  |       | Livello log (DEBUG, INFO, WARN, ERROR) |

---

## Variabili d'ambiente

SoryCode può essere configurato tramite variabili d'ambiente.

| Variabile                             | Tipo    | Descrizione                                                 |
| ------------------------------------- | ------- | ----------------------------------------------------------- |
| `SORYCODE_AUTO_SHARE`                 | boolean | Condivide automaticamente le sessioni                       |
| `SORYCODE_GIT_BASH_PATH`              | string  | Percorso all'eseguibile Git Bash su Windows                 |
| `SORYCODE_CONFIG`                     | string  | Percorso al file di configurazione                          |
| `SORYCODE_TUI_CONFIG`                 | string  | Percorso al file di configurazione TUI                      |
| `SORYCODE_CONFIG_DIR`                 | string  | Percorso alla directory di configurazione                   |
| `SORYCODE_CONFIG_CONTENT`             | string  | Contenuto JSON di config inline                             |
| `SORYCODE_DISABLE_AUTOUPDATE`         | boolean | Disabilita i controlli automatici di aggiornamento          |
| `SORYCODE_DISABLE_PRUNE`              | boolean | Disabilita la potatura dei dati vecchi                      |
| `SORYCODE_DISABLE_TERMINAL_TITLE`     | boolean | Disabilita aggiornamenti automatici del titolo terminale    |
| `SORYCODE_PERMISSION`                 | string  | Config permessi JSON inline                                 |
| `SORYCODE_DISABLE_DEFAULT_PLUGINS`    | boolean | Disabilita i plugin di default                              |
| `SORYCODE_DISABLE_LSP_DOWNLOAD`       | boolean | Disabilita download automatico dei server LSP               |
| `SORYCODE_ENABLE_EXPERIMENTAL_MODELS` | boolean | Abilita modelli sperimentali                                |
| `SORYCODE_DISABLE_AUTOCOMPACT`        | boolean | Disabilita compaction automatica del contesto               |
| `SORYCODE_DISABLE_CLAUDE_CODE`        | boolean | Disabilita lettura da `.claude` (prompt + skill)            |
| `SORYCODE_DISABLE_CLAUDE_CODE_PROMPT` | boolean | Disabilita lettura di `~/.claude/CLAUDE.md`                 |
| `SORYCODE_DISABLE_CLAUDE_CODE_SKILLS` | boolean | Disabilita caricamento di `.claude/skills`                  |
| `SORYCODE_DISABLE_MODELS_FETCH`       | boolean | Disabilita fetch dei modelli da fonti remote                |
| `SORYCODE_FAKE_VCS`                   | string  | Provider VCS finto per scopi di test                        |
| `SORYCODE_DISABLE_FILETIME_CHECK`     | boolean | Disabilita controllo file time per ottimizzazione           |
| `SORYCODE_CLIENT`                     | string  | Identificatore client (default `cli`)                       |
| `SORYCODE_ENABLE_EXA`                 | boolean | Abilita gli strumenti di web search Exa                     |
| `SORYCODE_SERVER_PASSWORD`            | string  | Abilita basic auth per `serve`/`web`                        |
| `SORYCODE_SERVER_USERNAME`            | string  | Sovrascrive lo username basic auth (default `sorycode`)     |
| `SORYCODE_MODELS_URL`                 | string  | URL personalizzato per recuperare la configurazione modelli |

---

### Sperimentale

Queste variabili d'ambiente abilitano funzionalità sperimentali che potrebbero cambiare o essere rimosse.

| Variabile                                       | Tipo    | Descrizione                                |
| ----------------------------------------------- | ------- | ------------------------------------------ |
| `SORYCODE_EXPERIMENTAL`                         | boolean | Abilita tutte le funzionalità sperimentali |
| `SORYCODE_EXPERIMENTAL_ICON_DISCOVERY`          | boolean | Abilita icon discovery                     |
| `SORYCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT`  | boolean | Disabilita copy on select nella TUI        |
| `SORYCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS` | number  | Timeout di default per comandi bash in ms  |
| `SORYCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`        | number  | Massimo token di output per risposte LLM   |
| `SORYCODE_EXPERIMENTAL_FILEWATCHER`             | boolean | Abilita file watcher per l'intera dir      |
| `SORYCODE_EXPERIMENTAL_OXFMT`                   | boolean | Abilita formatter oxfmt                    |
| `SORYCODE_EXPERIMENTAL_LSP_TOOL`                | boolean | Abilita strumento LSP sperimentale         |
| `SORYCODE_EXPERIMENTAL_DISABLE_FILEWATCHER`     | boolean | Disabilita file watcher                    |
| `SORYCODE_EXPERIMENTAL_EXA`                     | boolean | Abilita funzionalità Exa sperimentali      |
| `SORYCODE_EXPERIMENTAL_LSP_TY`                  | boolean | Abilita type checking LSP sperimentale     |
| `SORYCODE_EXPERIMENTAL_MARKDOWN`                | boolean | Abilita markdown sperimentale              |
| `SORYCODE_EXPERIMENTAL_PLAN_MODE`               | boolean | Abilita plan mode                          |