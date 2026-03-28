import { Steps } from "@astrojs/starlight/components"

While SoryCode can run directly on Windows, we recommend using [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) for the best experience. WSL provides a Linux environment that works seamlessly with SoryCode's features.

:::tip[Why WSL?]
WSL offers better file system performance, full terminal support, and compatibility with development tools that SoryCode relies on.
:::

---

## Setup

<Steps>

1. **Install WSL**

   If you haven't already, [install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) using the official Microsoft guide.

2. **Install SoryCode in WSL**

   Once WSL is set up, open your WSL terminal and install SoryCode using one of the [installation methods](/docs/).

   ```bash
   curl -fsSL https://opencode.ai/install | bash
   ```

3. **Use SoryCode from WSL**

   Navigate to your project directory (access Windows files via `/mnt/c/`, `/mnt/d/`, etc.) and run SoryCode.

   ```bash
   cd /mnt/c/Users/YourName/project
   sorycode
   ```

</Steps>

---

## Desktop App + WSL Server

If you prefer using the SoryCode Desktop app but want to run the server in WSL:

1. **Start the server in WSL** with `--hostname 0.0.0.0` to allow external connections:

   ```bash
   sorycode serve --hostname 0.0.0.0 --port 4096
   ```

2. **Connect the Desktop app** to `http://localhost:4096`

:::note
If `localhost` does not work in your setup, connect using the WSL IP address instead (from WSL: `hostname -I`) and use `http://<wsl-ip>:4096`.
:::

:::caution
When using `--hostname 0.0.0.0`, set `SORYCODE_SERVER_PASSWORD` to secure the server.
:::

```bash
SORYCODE_SERVER_PASSWORD=your-password sorycode serve --hostname 0.0.0.0
```

---

## Web Client + WSL

For the best web experience on Windows:

1. **Run `sorycode web` in the WSL terminal** rather than PowerShell:

   ```bash
   sorycode web --hostname 0.0.0.0
   ```

2. **Access from your Windows browser** at `http://localhost:<port>` (SoryCode prints the URL)

Running `sorycode web` from WSL ensures proper file system access and terminal integration while still being accessible from your Windows browser.

---

## Accessing Windows Files

WSL can access all your Windows files through the `/mnt/` directory:

- `C:` drive → `/mnt/c/`
- `D:` drive → `/mnt/d/`
- And so on...

Example:

```bash
cd /mnt/c/Users/YourName/Documents/project
sorycode
```

:::tip
For the smoothest experience, consider cloning/copying your repo into the WSL filesystem (for example under `~/code/`) and running SoryCode there.
:::

---

## Tips

- Keep SoryCode running in WSL for projects stored on Windows drives - file access is seamless
- Use VS Code's [WSL extension](https://code.visualstudio.com/docs/remote/wsl) alongside SoryCode for an integrated development workflow
- Your SoryCode config and sessions are stored within the WSL environment at `~/.local/share/sorycode/`