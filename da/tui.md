import { Tabs, TabItem } from "@astrojs/starlight/components"

SoryCode giver en interaktiv terminalgrænseflade eller TUI til at arbejde med dine projekter med en LLM.

At køre SoryCode starter TUI for den nuværende mappe.

```bash
sorycode
```

Eller du kan starte den for en bestemt arbejdsmappe.

```bash
sorycode /path/to/project
```

Når du er i TUI, kan du spørge den med en besked.

```text
Give me a quick summary of the codebase.
```

---

## Filreferencer

Du kan referere til filer i dine beskeder med `@`. Det laver en fuzzy filsøgning i den nuværende arbejdsmappe.

:::tip
Du kan også bruge `@` til at referere til filer i dine beskeder.
:::

```text "@packages/functions/src/api/index.ts"
How is auth handled in @packages/functions/src/api/index.ts?
```

Indholdet i filen tilføjes automatisk til samtalen.

---

## Bash-kommandoer

Start en besked med `!` for at køre en shell-kommando.

```bash frame="none"
!ls -la
```

Outputtet fra kommandoen tilføjes til samtalen som et værktøjsresultat.

---

## Kommandoer

Når du bruger SoryCode TUI, kan du skrive `/` efterfulgt af et kommandonavn for hurtigt at udføre handlinger. For eksempel:

```bash frame="none"
/help
```

De fleste kommandoer har også genvejstaster som bruger `ctrl+x` som Leader-tast, hvor `ctrl+x` er standard Leader-tast. [Læs mere](/docs/keybinds).

Her er alle tilgængelige skråstregskommandoer:

---

### connect

Tilføj en udbyder til SoryCode. Lader dig vælge fra tilgængelige udbydere og tilføje deres API-nøgler.

```bash frame="none"
/connect
```

---

### compact

Komprimer nuværende session. _Alias_: `/summarize`

```bash frame="none"
/compact
```

**Genvejstast:** `ctrl+x c`

---

### details

Skift visning af værktøjsudførelsesdetaljer.

```bash frame="none"
/details
```

**Genvejstast:** `ctrl+x d`

---

### editor

Åbn eksternt redigeringsprogram for at skrive beskeder. Bruger redigeringsprogrammet i miljøvariablen `EDITOR`. [Læs mere](#editor-setup).

```bash frame="none"
/editor
```

**Genvejstast:** `ctrl+x e`

---

### exit

Afslut SoryCode. _Aliaser_: `/quit`, `/q`

```bash frame="none"
/exit
```

**Genvejstast:** `ctrl+x q`

---

### export

Eksporter nuværende samtale til Markdown og åbn i standardredigeringsprogrammet. Bruger redigeringsprogrammet i miljøvariablen `EDITOR`. [Læs mere](#editor-setup).

```bash frame="none"
/export
```

**Genvejstast:** `ctrl+x x`

---

### help

Vis hjælpedialogen.

```bash frame="none"
/help
```

**Genvejstast:** `ctrl+x h`

---

### init

Opret eller opdater `AGENTS.md`-fil. [Læs mere](/docs/rules).

```bash frame="none"
/init
```

**Genvejstast:** `ctrl+x i`

---

### models

Liste over tilgængelige modeller.

```bash frame="none"
/models
```

**Genvejstast:** `ctrl+x m`

---

### new

Start en ny session. _Alias_: `/clear`

```bash frame="none"
/new
```

**Genvejstast:** `ctrl+x n`

---

### redo

Gentag en tidligere fortrudt besked. Kun tilgængelig efter brug af `/undo`.

:::tip
Eventuelle filændringer vil også blive genoprettet.
:::

Internt bruger dette Git til at administrere filændringerne. Så dit projekt **skal være et Git-depot**.

```bash frame="none"
/redo
```

**Genvejstast:** `ctrl+x r`

---

### sessions

List og skift mellem sessioner. _Aliaser_: `/resume`, `/continue`

```bash frame="none"
/sessions
```

**Genvejstast:** `ctrl+x l`

---

### share

Del nuværende session. [Læs mere](/docs/share).

```bash frame="none"
/share
```

**Genvejstast:** `ctrl+x s`

---

### themes

Liste over tilgængelige temaer.

```bash frame="none"
/theme
```

**Genvejstast:** `ctrl+x t`

---

### thinking

Skift synligheden af tænke-/ræsonneringsblokke i samtalen. Når den er aktiveret, kan du se modellens ræsonneringsproces for modeller, som understøtter udvidet tænkning.

:::note
Denne kommando kontrollerer bare om tænkeblokke **vises** - den aktiverer eller deaktiverer ikke modellens ræsonneringsmuligheder. For at skifte mellem faktiske ræsonneringsmuligheder, brug `ctrl+t` for at bladre gennem modelvarianter.
:::

```bash frame="none"
/thinking
```

---

### undo

Fortryd sidste besked i samtalen. Fjerner den sidste brugerbesked, alle efterfølgende svar og eventuelle filændringer.

:::tip
Eventuelle filændringer vil også blive nulstillet.
:::

Internt bruger dette Git til at administrere filændringerne. Så dit projekt **skal være et Git-depot**.

```bash frame="none"
/undo
```

**Genvejstast:** `ctrl+x u`

---

### unshare

Ophæv deling af nuværende session. [Læs mere](/docs/share#un-sharing).

```bash frame="none"
/unshare
```

---

## Opsætning af editor

Både kommandoerne `/editor` og `/export` bruger editoren som er specificeret i miljøvariablen `EDITOR`.

<Tabs>
  <TabItem label="Linux/macOS">
    ```bash
    # Example for nano or vim
    export EDITOR=nano
    export EDITOR=vim

    # For GUI editors, VS Code, Cursor, VSCodium, Windsurf, Zed, etc.
    # include --wait
    export EDITOR="code --wait"
    ```

    For at gøre det permanent, tilføj dette til din shellprofil;
    `~/.bashrc`, `~/.zshrc` osv.

  </TabItem>

  <TabItem label="Windows (CMD)">
    ```bash
    set EDITOR=notepad

    # For GUI editors, VS Code, Cursor, VSCodium, Windsurf, Zed, etc.
    # include --wait
    set EDITOR=code --wait
    ```

    For at gøre det permanent, brug **Systemegenskaber** > **Miljøvariabler**.

  </TabItem>

  <TabItem label="Windows (PowerShell)">
    ```powershell
    $env:EDITOR = "notepad"

    # For GUI editors, VS Code, Cursor, VSCodium, Windsurf, Zed, etc.
    # include --wait
    $env:EDITOR = "code --wait"
    ```

    For at gøre det permanent, tilføj dette til din PowerShell-profil.

  </TabItem>
</Tabs>

Populære redigeringsalternativer inkluderer:

- `code` - Visual Studio Code
- `cursor` - Cursor
- `windsurf` - Windsurf
- `nvim` - Neovim-editor
- `vim` - Vim editor
- `nano` - Nano-editor
- `notepad` - Windows Notesblok
- `subl` - Sublime Text

:::note
Nogle editorer som VS Code skal startes med flaget `--wait`.
:::

Nogle editorer kræver kommandolinjeargumenter for at køre i blokeringstilstand. `--wait`-flaget gør at redigeringsprocessen blokeres indtil den lukkes.

---

## Konfigurer

Du kan tilpasse TUI-adfærd gennem `tui.json` (eller `tui.jsonc`).

```json title="tui.json"
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "sorycode",
  "keybinds": {
    "leader": "ctrl+x"
  },
  "scroll_speed": 3,
  "scroll_acceleration": {
    "enabled": true
  },
  "diff_style": "auto"
}
```

Dette er adskilt fra `sorycode.json`, som konfigurerer server-/kørselstidsadfærd.

### Indstillinger

- `theme` - Indstiller dit brugergrænsefladetema. [Læs mere](/docs/themes).
- `keybinds` - Tilpasser tastaturgenveje. [Læs mere](/docs/keybinds).
- `scroll_acceleration.enabled` - Aktiver rulleacceleration i macOS-stil for jævn, naturlig rulning. Når aktiveret, øger rullehastigheden med hurtige rullebevægelser og forbliver præcis for langsommere bevægelser. **Denne indstilling har forrang over `scroll_speed` og tilsidesætter den, når den er aktiveret.**
- `scroll_speed` - Styrer hvor hurtigt TUI ruller, når du bruger rullekommandoer (minimum: `0.001`, understøtter decimalværdier). Standard er `3`. **Bemærk: Dette ignoreres hvis `scroll_acceleration.enabled` er sat til `true`.**
- `diff_style` - Styrer diff-gengivelse. `"auto"` tilpasser sig terminalbredde, `"stacked"` viser altid et enkeltkolonne-layout.

Brug `SORYCODE_TUI_CONFIG` til at indlæse en brugerdefineret TUI-konfigurationssti.

---

## Tilpasning

Du kan tilpasse forskellige aspekter af TUI-visningen ved at bruge kommandopaletten (`ctrl+x h` eller `/help`). Disse indstillinger gemmes ved genstart.

---

#### Visning af brugernavn

Skift om dit brugernavn vises i chat-beskeder. Få adgang til dette gennem:

- Kommandopalet: Søg efter "brugernavn" eller "skjul brugernavn"
- Indstillingen gemmes automatisk og vil blive husket over TUI-sessioner