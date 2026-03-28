import { Steps } from "@astrojs/starlight/components"

Anche se SoryCode puo essere eseguito direttamente su Windows, consigliamo di usare [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) per la migliore esperienza. WSL fornisce un ambiente Linux che funziona in modo ottimale con le funzionalita di SoryCode.

:::tip[Perche WSL?]
WSL offre prestazioni migliori del file system, supporto completo del terminale e compatibilita con gli strumenti di sviluppo su cui SoryCode fa affidamento.
:::

---

## Configurazione

<Steps>

1. **Installa WSL**

   Se non l'hai ancora fatto, [installa WSL](https://learn.microsoft.com/en-us/windows/wsl/install) seguendo la guida ufficiale Microsoft.

2. **Installa SoryCode in WSL**

   Dopo aver configurato WSL, apri il terminale WSL e installa SoryCode usando uno dei [metodi di installazione](/docs/).

   ```bash
   curl -fsSL https://opencode.ai/install | bash
   ```

3. **Usa SoryCode da WSL**

   Vai nella directory del progetto (accedi ai file Windows tramite `/mnt/c/`, `/mnt/d/`, ecc.) ed esegui SoryCode.

   ```bash
   cd /mnt/c/Users/YourName/project
   sorycode
   ```

</Steps>

---

## App desktop + server WSL

Se preferisci usare l'app desktop di SoryCode ma vuoi eseguire il server in WSL:

1. **Avvia il server in WSL** con `--hostname 0.0.0.0` per consentire connessioni esterne:

   ```bash
   sorycode serve --hostname 0.0.0.0 --port 4096
   ```

2. **Collega l'app desktop** a `http://localhost:4096`

:::note
Se `localhost` non funziona nella tua configurazione, usa l'indirizzo IP di WSL (da WSL: `hostname -I`) e collega `http://<wsl-ip>:4096`.
:::

:::caution
Quando usi `--hostname 0.0.0.0`, imposta `SORYCODE_SERVER_PASSWORD` per proteggere il server.

```bash
SORYCODE_SERVER_PASSWORD=your-password sorycode serve --hostname 0.0.0.0
```

:::

---

## Client web + WSL

Per la migliore esperienza web su Windows:

1. **Esegui `sorycode web` nel terminale WSL** invece che in PowerShell:

   ```bash
   sorycode web --hostname 0.0.0.0
   ```

2. **Accedi dal browser Windows** su `http://localhost:<port>` (SoryCode stampa l'URL)

Eseguire `sorycode web` da WSL garantisce accesso corretto al file system e integrazione del terminale, restando comunque accessibile dal browser Windows.

---

## Accesso ai file Windows

WSL puo accedere a tutti i file Windows tramite la directory `/mnt/`:

- Unita `C:` → `/mnt/c/`
- Unita `D:` → `/mnt/d/`
- E cosi via...

Esempio:

```bash
cd /mnt/c/Users/YourName/Documents/project
sorycode
```

:::tip
Per un'esperienza piu fluida, valuta di clonare o copiare il repository nel file system di WSL (per esempio in `~/code/`) ed eseguire SoryCode li.
:::

---

## Suggerimenti

- Tieni SoryCode in esecuzione su WSL per i progetti salvati su unita Windows: l'accesso ai file e immediato
- Usa l'[estensione WSL di VS Code](https://code.visualstudio.com/docs/remote/wsl) insieme a SoryCode per un flusso di lavoro integrato
- Configurazione e sessioni di SoryCode sono salvate nell'ambiente WSL in `~/.local/share/sorycode/`