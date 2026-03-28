Brugerdefinerede kommandoer giver mulighed for at angive en prompt, du vil køre, når denne kommando udføres i TUI.

```bash frame="none"
/my-command
```

Brugerdefinerede kommandoer er ud over de indbyggede kommandoer som `/init`, `/undo`, `/redo`, `/share`, `/help`. [Learn more](/docs/tui#commands).

---

## Oprettelse af kommandofiler

Opret markdown-filer i mappen `commands/` for at definere brugerdefinerede kommandoer.

Opret `.sorycode/commands/test.md`:

```md title=".sorycode/commands/test.md"
---
description: Run tests with coverage
agent: build
model: anthropic/claude-3-5-sonnet-20241022
---

Run the full test suite with coverage report and show any failures.
Focus on the failing tests and suggest fixes.
```

Frontmatter definerer kommandoegenskaber. Indholdet bliver skabelonen.

Brug kommandoen ved at skrive `/` efterfulgt af kommandonavnet.

```bash frame="none"
"/test"
```

---

## Konfiguration

Du kan tilføje brugerdefinerede kommandoer gennem SoryCode-konfigurationen eller ved at oprette markdown-filer i `commands/`-mappen.

---

### JSON

Brug indstillingerne `command` i din SoryCode [config](/docs/config):

```json title="sorycode.jsonc" {4-12}
{
  "$schema": "https://opencode.ai/config.json",
  "command": {
    // This becomes the name of the command
    "test": {
      // This is the prompt that will be sent to the LLM
      "template": "Run the full test suite with coverage report and show any failures.\nFocus on the failing tests and suggest fixes.",
      // This is shown as the description in the TUI
      "description": "Run tests with coverage",
      "agent": "build",
      "model": "anthropic/claude-3-5-sonnet-20241022"
    }
  }
}
```

Nu kan du køre denne kommando i TUI:

```bash frame="none"
/test
```

---

### Markdown

Du kan også definere kommandoer ved hjælp af markdown-filer. Placer dem i:

- Globalt: `~/.config/sorycode/commands/`
- Pr. projekt: `.sorycode/commands/`

```markdown title="~/.config/sorycode/commands/test.md"
---
description: Run tests with coverage
agent: build
model: anthropic/claude-3-5-sonnet-20241022
---

Run the full test suite with coverage report and show any failures.
Focus on the failing tests and suggest fixes.
```

Markdown-filnavnet bliver kommandonavnet. For eksempel lader `test.md`
du løber:

```bash frame="none"
/test
```

---

## Prompt-konfiguration

Spørgsmålene til de brugerdefinerede kommandoer understøtter flere specielle pladsholdere og syntaks.

---

### Argumenter

Send argumenter til kommandoer ved hjælp af pladsholderen `$ARGUMENTS`.

```md title=".sorycode/commands/component.md"
---
description: Create a new component
---

Create a new React component named $ARGUMENTS with TypeScript support.
Include proper typing and basic structure.
```

Kør kommandoen med argumenter:

```bash frame="none"
/component Button
```

Og `$ARGUMENTS` vil blive erstattet med `Button`.

Du kan også få adgang til individuelle argumenter ved hjælp af positionelle parametre:

- `$1` - Første argument
- `$2` - Andet argument
- `$3` - Tredje argument
- Og så videre...

For eksempel:

```md title=".sorycode/commands/create-file.md"
---
description: Create a new file with content
---

Create a file named $1 in the directory $2
with the following content: $3
```

Kør kommandoen:

```bash frame="none"
/create-file config.json src "{ \"key\": \"value\" }"
```

Dette erstatter:

- `$1` med `config.json`
- `$2` med `src`
- `$3` med `{ "key": "value" }`

---

### Shell-output

Brug _!`command`_ til at injicere [bash command](/docs/tui#bash-commands) output i din prompt.

For eksempel, for at oprette en brugerdefineret kommando, der analyserer testdækning:

```md title=".sorycode/commands/analyze-coverage.md"
---
description: Analyze test coverage
---

Here are the current test results:
!`npm test`

Based on these results, suggest improvements to increase coverage.
```

Eller for at gennemgå de seneste ændringer:

```md title=".sorycode/commands/review-changes.md"
---
description: Review recent changes
---

Recent git commits:
!`git log --oneline -10`

Review these changes and suggest any improvements.
```

Kommandoer kører i dit projekts rodmappe, og deres output bliver en del af prompten.

---

### Fil-referencer

Inkluder filer i din kommando ved hjælp af `@` efterfulgt af filnavnet.

```md title=".sorycode/commands/review-component.md"
---
description: Review component
---

Review the component in @src/components/Button.tsx.
Check for performance issues and suggest improvements.
```

Filindholdet bliver automatisk integreret i prompten.

---

## Indstillinger

Lad os se nærmere på konfigurationsmulighederne.

---

### Skabelon (`template`)

Indstillingen `template` definerer den prompt, der sendes til LLM, når kommandoen udføres.

```json title="sorycode.json"
{
  "command": {
    "test": {
      "template": "Run the full test suite with coverage report and show any failures.\nFocus on the failing tests and suggest fixes."
    }
  }
}
```

Dette er en **påkrævet** konfigurationsindstilling.

---

### Beskrivelse (`description`)

Brug indstillingen `description` til at give en kort beskrivelse af, hvad kommandoen gør.

```json title="sorycode.json"
{
  "command": {
    "test": {
      "description": "Run tests with coverage"
    }
  }
}
```

Dette vises som beskrivelsen i TUI, når du indtaster kommandoen.

---

### Agent

Brug `agent`-konfigurationen til valgfrit at angive, hvilken [agent](/docs/agents) der skal udføre denne kommando.
Hvis dette er en [subagent](/docs/agents/#subagents), vil kommandoen som standard udløse en subagent påkaldelse.
For at deaktivere denne adfærd skal du indstille `subtask` til `false`.

```json title="sorycode.json"
{
  "command": {
    "review": {
      "agent": "plan"
    }
  }
}
```

Dette er en **valgfri** konfigurationsindstilling. Hvis det ikke er angivet, er standarden din nuværende agent.

---

### Underopgave (`subtask`)

Brug `subtask` boolean til at tvinge kommandoen til at udløse en [subagent](/docs/agents/#subagents) påkaldelse.
Dette er nyttigt, hvis du ønsker, at kommandoen ikke skal forurene din primære kontekst og vil **tvinge** agenten til at fungere som en underagent,
øjeblikkelig `mode` er sat til `primary` på [agent](/docs/agents) konfigurationen.

```json title="sorycode.json"
{
  "command": {
    "analyze": {
      "subtask": true
    }
  }
}
```

Dette er en **valgfri** konfigurationsindstilling.

---

### Model

Brug `model`-konfigurationen til at tilsidesætte standardmodellen for denne kommando.

```json title="sorycode.json"
{
  "command": {
    "analyze": {
      "model": "anthropic/claude-3-5-sonnet-20241022"
    }
  }
}
```

Dette er en **valgfri** konfigurationsindstilling.

---

## Indbyggede kommandoer

sorycode indeholder flere indbyggede kommandoer som `/init`, `/undo`, `/redo`, `/share`, `/help`; [learn more](/docs/tui#commands).

:::note
Brugerdefinerede kommandoer kan tilsidesætte indbyggede kommandoer.
:::

Hvis du definerer en brugerdefineret kommando med samme navn, vil den tilsidesætte den indbyggede kommando.