sorycode поддерживает [Agent Client Protocol](https://agentclientprotocol.com) (ACP), что позволяет использовать его непосредственно в совместимых редакторах и IDE.

:::tip
Список редакторов и инструментов, поддерживающих ACP, можно найти в [отчете о ходе работы ACP](https://zed.dev/blog/acp-progress-report#available-now).
:::

ACP — это открытый протокол, который стандартизирует взаимодействие между редакторами кода и ИИ-агентами.

---

## Настройка

Чтобы использовать sorycode через ACP, настройте свой редактор для запуска команды `sorycode acp`.

Команда запускает sorycode как ACP-совместимый подпроцесс, который взаимодействует с вашим редактором через JSON-RPC через stdio.

Ниже приведены примеры популярных редакторов, поддерживающих ACP.

---

### Zed

Добавьте в конфигурацию [Zed](https://zed.dev) (`~/.config/zed/settings.json`):

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

Чтобы открыть его, используйте действие `agent: new thread` в **Палитре команд**.

Вы также можете привязать сочетание клавиш, отредактировав свой `keymap.json`:

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

### IDE JetBrains

Добавьте в свою [JetBrains IDE](https://www.jetbrains.com/) acp.json в соответствии с [документацией](https://www.jetbrains.com/help/ai-assistant/acp.html):

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

Чтобы открыть его, используйте новый агент sorycode в селекторе агентов AI Chat.

---

### Avante.nvim

Добавьте в свою конфигурацию [Avante.nvim](https://github.com/yetone/avante.nvim):

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

Если вам нужно передать переменные среды:

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

Чтобы использовать sorycode в качестве агента ACP в [CodeCompanion.nvim](https://github.com/olimorris/codecompanion.nvim), добавьте в конфигурацию Neovim следующее:

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

Эта конфигурация настраивает CodeCompanion для использования sorycode в качестве агента ACP для чата.

Если вам нужно передать переменные среды (например, `SORYCODE_API_KEY`), обратитесь к разделу [Настройка адаптеров: переменные среды](https://codecompanion.olimorris.dev/getting-started#setting-an-api-key) в документации CodeCompanion.nvim для получения полной информации.

## Поддержка

sorycode через ACP работает так же, как и в терминале. Поддерживаются все функции:

:::note
Некоторые встроенные команды слэша, такие как `/undo` и `/redo`, в настоящее время не поддерживаются.
:::

- Встроенные инструменты (файловые операции, команды терминала и т. д.)
- Пользовательские инструменты и команды слэша
- Серверы MCP, настроенные в вашей конфигурации sorycode
- Правила для конкретного проекта из `AGENTS.md`
- Пользовательские форматтеры и линтеры
- Агенты и система разрешений