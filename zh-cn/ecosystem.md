基于 SoryCode 构建的社区项目合集。

:::note
想将您的 SoryCode 相关项目添加到此列表中？欢迎提交 PR。
:::

您还可以查看 [awesome-sorycode](https://github.com/awesome-opencode/awesome-opencode) 和 [sorycode.cafe](https://opencode.cafe)，这是一个聚合生态系统与社区资源的社区。

---

## 插件

| 名称                                                                                               | 描述                                                                   |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [sorycode-daytona](https://github.com/daytonaio/daytona/tree/main/libs/opencode-plugin)            | 在隔离的 Daytona 沙箱中自动运行 SoryCode 会话，支持 git 同步和实时预览 |
| [sorycode-helicone-session](https://github.com/H2Shami/opencode-helicone-session)                  | 自动注入 Helicone 会话头信息，用于请求分组                             |
| [sorycode-type-inject](https://github.com/nick-vi/opencode-type-inject)                            | 通过查找工具自动将 TypeScript/Svelte 类型注入到文件读取中              |
| [sorycode-openai-codex-auth](https://github.com/numman-ali/opencode-openai-codex-auth)             | 使用您的 ChatGPT Plus/Pro 订阅替代 API 额度                            |
| [sorycode-gemini-auth](https://github.com/jenslys/opencode-gemini-auth)                            | 使用您现有的 Gemini 套餐替代 API 计费                                  |
| [sorycode-antigravity-auth](https://github.com/NoeFabris/opencode-antigravity-auth)                | 使用 Antigravity 的免费模型替代 API 计费                               |
| [sorycode-devcontainers](https://github.com/athal7/opencode-devcontainers)                         | 多分支开发容器隔离，支持浅克隆和自动分配端口                           |
| [sorycode-google-antigravity-auth](https://github.com/shekohex/opencode-google-antigravity-auth)   | Google Antigravity OAuth 插件，支持 Google 搜索及更强健的 API 处理     |
| [sorycode-dynamic-context-pruning](https://github.com/Tarquinen/opencode-dynamic-context-pruning)  | 通过修剪过时的工具输出来优化 Token 使用                                |
| [sorycode-vibeguard](https://github.com/inkdust2021/opencode-vibeguard)                            | 在调用 LLM 之前将机密/PII 替换为 VibeGuard 风格的占位符；并在本地恢复  |
| [sorycode-websearch-cited](https://github.com/ghoulr/opencode-websearch-cited.git)                 | 为受支持的提供商添加原生网页搜索支持，采用 Google grounded 风格        |
| [sorycode-pty](https://github.com/shekohex/opencode-pty.git)                                       | 使 AI 代理能够在 PTY 中运行后台进程，并向其发送交互式输入              |
| [sorycode-shell-strategy](https://github.com/JRedeker/opencode-shell-strategy)                     | 非交互式 shell 命令指令——防止依赖 TTY 的操作导致挂起                   |
| [sorycode-wakatime](https://github.com/angristan/opencode-wakatime)                                | 使用 Wakatime 追踪 SoryCode 的使用情况                                 |
| [sorycode-md-table-formatter](https://github.com/franlol/opencode-md-table-formatter/tree/main)    | 清理 LLM 生成的 Markdown 表格                                          |
| [sorycode-morph-plugin](https://github.com/morphllm/opencode-morph-plugin)                         | 通过 Morph 提供 Fast Apply 编辑、WarpGrep 代码搜索和上下文压缩         |
| [oh-my-sorycode](https://github.com/code-yeongyu/oh-my-opencode)                                   | 后台代理、预构建的 LSP/AST/MCP 工具、精选代理，兼容 Claude Code        |
| [sorycode-notificator](https://github.com/panta82/opencode-notificator)                            | SoryCode 会话的桌面通知和声音提醒                                      |
| [sorycode-notifier](https://github.com/mohak34/opencode-notifier)                                  | 针对权限请求、任务完成和错误事件的桌面通知与声音提醒                   |
| [sorycode-zellij-namer](https://github.com/24601/opencode-zellij-namer)                            | 基于 SoryCode 上下文的 AI 驱动自动 Zellij 会话命名                     |
| [sorycode-skillful](https://github.com/zenobi-us/opencode-skillful)                                | 允许 SoryCode 代理通过技能发现和注入按需延迟加载提示词                 |
| [sorycode-supermemory](https://github.com/supermemoryai/opencode-supermemory)                      | 使用 Supermemory 实现跨会话的持久记忆                                  |
| [@plannotator/sorycode](https://github.com/backnotprop/plannotator/tree/main/apps/opencode-plugin) | 支持可视化标注和私有/离线分享的交互式计划审查                          |
| [@openspoon/subtask2](https://github.com/spoons-and-mirrors/subtask2)                              | 将 SoryCode /commands 扩展为具有精细流程控制的强大编排系统             |
| [sorycode-scheduler](https://github.com/different-ai/opencode-scheduler)                           | 使用 cron 语法通过 launchd (Mac) 或 systemd (Linux) 调度周期性任务     |
| [micode](https://github.com/vtemian/micode)                                                        | 结构化的头脑风暴 → 计划 → 实现工作流，支持会话连续性                   |
| [octto](https://github.com/vtemian/octto)                                                          | 用于 AI 头脑风暴的交互式浏览器 UI，支持多问题表单                      |
| [sorycode-background-agents](https://github.com/kdcokenny/opencode-background-agents)              | Claude Code 风格的后台代理，支持异步委托和上下文持久化                 |
| [sorycode-notify](https://github.com/kdcokenny/opencode-notify)                                    | SoryCode 的原生操作系统通知——随时了解任务完成情况                      |
| [sorycode-workspace](https://github.com/kdcokenny/opencode-workspace)                              | 捆绑式多代理编排套件——16 个组件，一次安装                              |
| [sorycode-worktree](https://github.com/kdcokenny/opencode-worktree)                                | SoryCode 的零摩擦 git worktree 管理                                    |
| [sorycode-sentry-monitor](https://github.com/stolinski/opencode-sentry-monitor)                    | 使用 Sentry AI Monitoring 追踪和调试您的 AI 代理                       |

---

## 项目

| 名称                                                                                       | 描述                                                          |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| [kimaki](https://github.com/remorses/kimaki)                                               | 用于控制 SoryCode 会话的 Discord 机器人，基于 SDK 构建        |
| [sorycode.nvim](https://github.com/NickvanDyke/opencode.nvim)                              | Neovim 插件，提供编辑器感知的提示词，基于 API 构建            |
| [portal](https://github.com/hosenur/portal)                                                | 通过 Tailscale/VPN 使用的移动优先 SoryCode Web UI             |
| [sorycode plugin template](https://github.com/zenobi-us/opencode-plugin-template/)         | 用于构建 SoryCode 插件的模板                                  |
| [sorycode.nvim](https://github.com/sudo-tee/opencode.nvim)                                 | SoryCode 的 Neovim 前端——基于终端的 AI 编码代理               |
| [ai-sdk-provider-sorycode-sdk](https://github.com/ben-vargas/ai-sdk-provider-opencode-sdk) | Vercel AI SDK 提供商，用于通过 @sorycode-ai/sdk 使用 SoryCode |
| [OpenChamber](https://github.com/btriapitsyn/openchamber)                                  | SoryCode 的 Web / 桌面应用和 VS Code 扩展                     |
| [SoryCode-Obsidian](https://github.com/mtymek/opencode-obsidian)                           | 将 SoryCode 嵌入 Obsidian UI 的 Obsidian 插件                 |
| [OpenWork](https://github.com/different-ai/openwork)                                       | Claude Cowork 的开源替代方案，由 SoryCode 驱动                |
| [ocx](https://github.com/kdcokenny/ocx)                                                    | SoryCode 扩展管理器，支持可移植的隔离配置                     |
| [CodeNomad](https://github.com/NeuralNomadsAI/CodeNomad)                                   | SoryCode 的桌面、Web、移动和远程客户端应用                    |

---

## 代理

| 名称                                                              | 描述                                     |
| ----------------------------------------------------------------- | ---------------------------------------- |
| [Agentic](https://github.com/Cluster444/agentic)                  | 用于结构化开发的模块化 AI 代理和命令     |
| [sorycode-agents](https://github.com/darrenhinde/opencode-agents) | 用于增强工作流的配置、提示词、代理和插件 |