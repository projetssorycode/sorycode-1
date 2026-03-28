SoryCode understøtter [Agent Client Protocol](https://agentclientprotocol.com) eller (ACP), så du kan bruge det direkte i kompatible editorer og IDE'er.

:::tip
For en liste over editorer og værktøjer, der understøtter ACP, tjek [ACP fremskridtsrapport](https://zed.dev/blog/acp-progress-report#available-now).
:::

ACP er en åben protokol, der standardiserer kommunikation mellem kodeeditorer og AI-kodningsagenter.

---

## Konfiguration

For at bruge SoryCode via ACP, konfigurer din editor til at køre kommandoen `sorycode acp`.

Kommandoen starter SoryCode som en ACP-kompatibel underproces, der kommunikerer med din editor over JSON-RPC via stdio.

Nedenfor er eksempler på populære editorer, der understøtter ACP.

---

### Zed

Føj til din [Zed](https://zed.dev)-konfiguration (`~/.config/zed/settings.json`):

```json title="~/.config/zed/settings.json"
{
  "agent_servers": {
    "SoryCode": {
      "command": "sorycode",
      "args": ["acp"]
    }
  }
}
```

For at åbne den skal du bruge handlingen `agent: new thread` i **Kommandopaletten**.

Du kan også binde en tastaturgenvej ved at redigere din `keymap.json`:

```json title="keymap.json"
[
  {
    "bindings": {
      "cmd-alt-o": [
        "agent::NewExternalAgentThread",
        {
          "agent": {
            "custom": {
              "name": "SoryCode",
              "command": {
                "command": "sorycode",
                "args": ["acp"]
              }
            }
          }
        }
      ]
    }
  }
]
```

---

### JetBrains IDE'er

Tilføj til din [JetBrains IDE](https://www.jetbrains.com/) acp.json i henhold til [dokumentationen](https://www.jetbrains.com/help/ai-assistant/acp.html):

```json title="acp.json"
{
  "agent_servers": {
    "SoryCode": {
      "command": "/absolute/path/bin/sorycode",
      "args": ["acp"]
    }
  }
}
```

For at åbne den skal du bruge den nye 'SoryCode'-agent i AI Chat-agentvælgeren.

---

### Avante.nvim

Føj til din [Avante.nvim](https://github.com/yetone/avante.nvim)-konfiguration:

```lua
{
  acp_providers = {
    ["sorycode"] = {
      command = "sorycode",
      args = { "acp" }
    }
  }
}
```

Hvis du har brug for at videregive miljøvariabler:

```lua {6-8}
{
  acp_providers = {
    ["sorycode"] = {
      command = "sorycode",
      args = { "acp" },
      env = {
        SORYCODE_API_KEY = os.getenv("SORYCODE_API_KEY")
      }
    }
  }
}
```

---

### CodeCompanion.nvim

For at bruge SoryCode som en ACP-agent i [CodeCompanion.nvim](https://github.com/olimorris/codecompanion.nvim), skal du tilføje følgende til din Neovim-konfiguration:

```lua
require("codecompanion").setup({
  interactions = {
    chat = {
      adapter = {
        name = "sorycode",
        model = "claude-sonnet-4",
      },
    },
  },
})
```

Denne konfiguration sætter CodeCompanion til at bruge SoryCode som ACP-agent til chat.

Hvis du har brug for at sende miljøvariabler (som `SORYCODE_API_KEY`), henvises til [Konfiguration af adaptere: Miljøvariabler](https://codecompanion.olimorris.dev/getting-started#setting-an-api-key) i CodeCompanion.nvim-dokumentationen for alle detaljer.

## Understøttelse

SoryCode fungerer på samme måde via ACP som i terminalen. Alle funktioner understøtter:

:::note
Nogle indbyggede slash-kommandoer som `/undo` og `/redo` er i øjeblikket ikke understøttet.
:::

- Indbyggede værktøjer (filoperationer, terminalkommandoer osv.)
- Brugerdefinerede værktøjer og slash-kommandoer
- MCP-servere konfigureret i din SoryCode-konfiguration
- Projektspecifikke regler fra `AGENTS.md`
- Brugerdefinerede formatere og linters
- Agenter og tilladelsessystem