import { Steps } from "@astrojs/starlight/components"

sorycode можно запускать напрямую в Windows, но для лучшего опыта мы рекомендуем [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install). WSL дает Linux-среду, которая отлично работает с возможностями sorycode.

:::tip[Почему WSL?]
WSL дает более высокую производительность файловой системы, полноценную поддержку терминала и совместимость с инструментами разработки, на которые опирается sorycode.
:::

---

## Настройка

<Steps>

1. **Установите WSL**

   Если вы еще не сделали этого, установите WSL по [официальному руководству Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install).

2. **Установите sorycode в WSL**

   После настройки WSL откройте терминал WSL и установите sorycode одним из [способов установки](/docs/).

   ```bash
   curl -fsSL https://opencode.ai/install | bash
   ```

3. **Запускайте sorycode из WSL**

   Перейдите в каталог проекта (к файлам Windows можно обращаться через `/mnt/c/`, `/mnt/d/` и т.д.) и запустите sorycode.

   ```bash
   cd /mnt/c/Users/YourName/project
   sorycode
   ```

</Steps>

---

## Десктопное приложение + сервер в WSL

Если вы предпочитаете sorycode Desktop, но хотите запускать сервер в WSL:

1. **Запустите сервер в WSL** с параметром `--hostname 0.0.0.0`, чтобы разрешить внешние подключения:

   ```bash
   sorycode serve --hostname 0.0.0.0 --port 4096
   ```

2. **Подключите десктопное приложение** к `http://localhost:4096`

:::note
Если в вашей конфигурации `localhost` не работает, используйте IP-адрес WSL (выполните в WSL: `hostname -I`) и подключайтесь по `http://<wsl-ip>:4096`.
:::

:::caution
При использовании `--hostname 0.0.0.0` задайте `SORYCODE_SERVER_PASSWORD`, чтобы защитить сервер.

```bash
SORYCODE_SERVER_PASSWORD=your-password sorycode serve --hostname 0.0.0.0
```

:::

---

## Веб-клиент + WSL

Для лучшего веб-опыта в Windows:

1. **Запускайте `sorycode web` в терминале WSL**, а не в PowerShell:

   ```bash
   sorycode web --hostname 0.0.0.0
   ```

2. **Открывайте в браузере Windows** адрес `http://localhost:<port>` (sorycode выведет URL)

Запуск `sorycode web` из WSL обеспечивает корректный доступ к файловой системе и интеграцию с терминалом, при этом интерфейс остается доступным из браузера Windows.

---

## Доступ к файлам Windows

WSL может получать доступ ко всем вашим файлам Windows через каталог `/mnt/`:

- `C:` drive → `/mnt/c/`
- `D:` drive → `/mnt/d/`
- И так далее

Пример:

```bash
cd /mnt/c/Users/YourName/Documents/project
sorycode
```

:::tip
Для максимально плавной работы стоит клонировать или скопировать репозиторий в файловую систему WSL (например, в `~/code/`) и запускать sorycode оттуда.
:::

---

## Советы

- Даже для проектов на дисках Windows запускайте sorycode в WSL, чтобы получить более плавный доступ к файлам
- Используйте sorycode вместе с [расширением WSL для VS Code](https://code.visualstudio.com/docs/remote/wsl) для единого рабочего процесса
- Конфигурация и сессии sorycode хранятся в среде WSL по пути `~/.local/share/sorycode/`