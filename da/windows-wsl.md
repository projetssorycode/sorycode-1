import { Steps } from "@astrojs/starlight/components"

Selvom SoryCode kan køre direkte på Windows, anbefaler vi at bruge [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) for den bedste oplevelse. WSL giver et Linux-miljø, der fungerer problemfrit med SoryCodes funktioner.

:::tip[Hvorfor WSL?]
WSL giver bedre filsystemydelse, fuld terminalunderstøttelse og kompatibilitet med de udviklingsværktøjer, som SoryCode er afhængig af.
:::

---

## Opsætning

<Steps>

1. **Installer WSL**

   Hvis du ikke allerede har gjort det, så [installer WSL](https://learn.microsoft.com/en-us/windows/wsl/install) med Microsofts officielle vejledning.

2. **Installer SoryCode i WSL**

   Når WSL er sat op, skal du åbne din WSL-terminal og installere SoryCode med en af [installationsmetoderne](/docs/).

   ```bash
   curl -fsSL https://opencode.ai/install | bash
   ```

3. **Brug SoryCode fra WSL**

   Gå til din projektmappe (få adgang til Windows-filer via `/mnt/c/`, `/mnt/d/` osv.) og kør SoryCode.

   ```bash
   cd /mnt/c/Users/YourName/project
   sorycode
   ```

</Steps>

---

## Desktop-app + WSL-server

Hvis du foretrækker SoryCode Desktop-appen, men vil køre serveren i WSL:

1. **Start serveren i WSL** med `--hostname 0.0.0.0` for at tillade eksterne forbindelser:

   ```bash
   sorycode serve --hostname 0.0.0.0 --port 4096
   ```

2. **Forbind Desktop-appen** til `http://localhost:4096`

:::note
Hvis `localhost` ikke virker i din opsætning, så forbind i stedet med WSL-IP-adressen (fra WSL: `hostname -I`) og brug `http://<wsl-ip>:4096`.
:::

:::caution
Når du bruger `--hostname 0.0.0.0`, skal du sætte `SORYCODE_SERVER_PASSWORD` for at sikre serveren.

```bash
SORYCODE_SERVER_PASSWORD=your-password sorycode serve --hostname 0.0.0.0
```

:::

---

## Webklient + WSL

For den bedste weboplevelse på Windows:

1. **Kør `sorycode web` i WSL-terminalen** i stedet for PowerShell:

   ```bash
   sorycode web --hostname 0.0.0.0
   ```

2. **Åbn fra din Windows-browser** på `http://localhost:<port>` (SoryCode udskriver URL'en)

Når du kører `sorycode web` fra WSL, får du korrekt filsystemadgang og terminalintegration, samtidig med at det stadig er tilgængeligt fra din Windows-browser.

---

## Adgang til Windows-filer

WSL kan få adgang til alle dine Windows-filer via `/mnt/`-mappen:

- `C:`-drev → `/mnt/c/`
- `D:`-drev → `/mnt/d/`
- Og så videre...

Eksempel:

```bash
cd /mnt/c/Users/YourName/Documents/project
sorycode
```

:::tip
For den mest problemfri oplevelse kan du overveje at klone/kopiere dit repo ind i WSL-filsystemet (for eksempel under `~/code/`) og køre SoryCode derfra.
:::

---

## Tips

- Lad SoryCode køre i WSL for projekter, der ligger på Windows-drev - filadgangen er problemfri
- Brug VS Codes [WSL-udvidelse](https://code.visualstudio.com/docs/remote/wsl) sammen med SoryCode for et integreret udviklingsworkflow
- Din SoryCode-konfiguration og dine sessioner gemmes i WSL-miljøet i `~/.local/share/sorycode/`