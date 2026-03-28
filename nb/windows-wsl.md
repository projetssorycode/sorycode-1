import { Steps } from "@astrojs/starlight/components"

Selv om SoryCode kan kjøre direkte på Windows, anbefaler vi å bruke [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) for best mulig opplevelse. WSL gir et Linux-miljø som fungerer godt med funksjonene i SoryCode.

:::tip[Hvorfor WSL?]
WSL gir bedre filsystemytelse, full terminalstøtte og kompatibilitet med utviklingsverktøyene SoryCode er avhengig av.
:::

---

## Oppsett

<Steps>

1. **Installer WSL**

   Hvis du ikke har gjort det ennå, [installer WSL](https://learn.microsoft.com/en-us/windows/wsl/install) med den offisielle guiden fra Microsoft.

2. **Installer SoryCode i WSL**

   Når WSL er satt opp, åpner du WSL-terminalen og installerer SoryCode med en av [installasjonsmetodene](/docs/).

   ```bash
   curl -fsSL https://opencode.ai/install | bash
   ```

3. **Bruk SoryCode fra WSL**

   Gå til prosjektmappen din (Windows-filer er tilgjengelige via `/mnt/c/`, `/mnt/d/` osv.) og kjør SoryCode.

   ```bash
   cd /mnt/c/Users/YourName/project
   sorycode
   ```

</Steps>

---

## Skrivebordsapp + WSL-server

Hvis du foretrekker SoryCode-skrivebordsappen, men vil kjøre serveren i WSL:

1. **Start serveren i WSL** med `--hostname 0.0.0.0` for å tillate eksterne tilkoblinger:

   ```bash
   sorycode serve --hostname 0.0.0.0 --port 4096
   ```

2. **Koble skrivebordsappen** til `http://localhost:4096`

:::note
Hvis `localhost` ikke fungerer i oppsettet ditt, bruk WSL-IP-adressen i stedet (fra WSL: `hostname -I`) og koble til `http://<wsl-ip>:4096`.
:::

:::caution
Når du bruker `--hostname 0.0.0.0`, sett `SORYCODE_SERVER_PASSWORD` for å sikre serveren.

```bash
SORYCODE_SERVER_PASSWORD=your-password sorycode serve --hostname 0.0.0.0
```

:::

---

## Web-klient + WSL

For best web-opplevelse på Windows:

1. **Kjør `sorycode web` i WSL-terminalen** i stedet for PowerShell:

   ```bash
   sorycode web --hostname 0.0.0.0
   ```

2. **Åpne i Windows-nettleseren** på `http://localhost:<port>` (SoryCode skriver ut URL-en)

Når du kjører `sorycode web` fra WSL, får du riktig filsystemtilgang og terminalintegrasjon, samtidig som det er tilgjengelig fra Windows-nettleseren din.

---

## Tilgang til Windows-filer

WSL kan få tilgang til alle Windows-filer via `/mnt/`-katalogen:

- `C:`-stasjon → `/mnt/c/`
- `D:`-stasjon → `/mnt/d/`
- Og så videre...

Eksempel:

```bash
cd /mnt/c/Users/YourName/Documents/project
sorycode
```

:::tip
For en jevnere opplevelse kan du klone/kopiere repoet ditt inn i WSL-filsystemet (for eksempel under `~/code/`) og kjøre SoryCode der.
:::

---

## Tips

- Kjør SoryCode i WSL for prosjekter lagret på Windows-stasjoner: filtilgang fungerer smidig
- Bruk [WSL-utvidelsen i VS Code](https://code.visualstudio.com/docs/remote/wsl) sammen med SoryCode for en integrert utviklingsflyt
- SoryCode-konfigurasjon og sesjoner lagres i WSL-miljøet på `~/.local/share/sorycode/`