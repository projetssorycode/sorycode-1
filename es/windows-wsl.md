import { Steps } from "@astrojs/starlight/components"

Aunque SoryCode puede ejecutarse directamente en Windows, recomendamos usar [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) para obtener la mejor experiencia. WSL ofrece un entorno Linux que funciona perfectamente con las funciones de SoryCode.

:::tip[¿Por qué WSL?]
WSL ofrece mejor rendimiento del sistema de archivos, soporte completo de terminal y compatibilidad con las herramientas de desarrollo de las que depende SoryCode.
:::

---

## Configuración

<Steps>

1. **Instala WSL**

   Si aún no lo hiciste, [instala WSL](https://learn.microsoft.com/en-us/windows/wsl/install) usando la guía oficial de Microsoft.

2. **Instala SoryCode en WSL**

   Cuando WSL esté listo, abre tu terminal de WSL e instala SoryCode con uno de los [métodos de instalación](/docs/).

   ```bash
   curl -fsSL https://opencode.ai/install | bash
   ```

3. **Usa SoryCode desde WSL**

   Ve al directorio de tu proyecto (accede a los archivos de Windows desde `/mnt/c/`, `/mnt/d/`, etc.) y ejecuta SoryCode.

   ```bash
   cd /mnt/c/Users/YourName/project
   sorycode
   ```

</Steps>

---

## Aplicación de escritorio + servidor WSL

Si prefieres usar la app de escritorio de SoryCode pero quieres ejecutar el servidor en WSL:

1. **Inicia el servidor en WSL** con `--hostname 0.0.0.0` para permitir conexiones externas:

   ```bash
   sorycode serve --hostname 0.0.0.0 --port 4096
   ```

2. **Conecta la app de escritorio** a `http://localhost:4096`

:::note
Si `localhost` no funciona en tu configuración, conéctate usando la dirección IP de WSL (desde WSL: `hostname -I`) y usa `http://<wsl-ip>:4096`.
:::

:::caution
Cuando uses `--hostname 0.0.0.0`, define `SORYCODE_SERVER_PASSWORD` para proteger el servidor.

```bash
SORYCODE_SERVER_PASSWORD=your-password sorycode serve --hostname 0.0.0.0
```

:::

---

## Cliente web + WSL

Para obtener la mejor experiencia web en Windows:

1. **Ejecuta `sorycode web` en la terminal de WSL** en lugar de PowerShell:

   ```bash
   sorycode web --hostname 0.0.0.0
   ```

2. **Accede desde tu navegador de Windows** en `http://localhost:<port>` (SoryCode muestra la URL)

Ejecutar `sorycode web` desde WSL garantiza acceso correcto al sistema de archivos e integración con la terminal, manteniéndolo accesible desde tu navegador de Windows.

---

## Acceso a archivos de Windows

WSL puede acceder a todos tus archivos de Windows mediante el directorio `/mnt/`:

- Unidad `C:` → `/mnt/c/`
- Unidad `D:` → `/mnt/d/`
- Y así sucesivamente...

Ejemplo:

```bash
cd /mnt/c/Users/YourName/Documents/project
sorycode
```

:::tip
Para una experiencia más fluida, considera clonar o copiar tu repo al sistema de archivos de WSL (por ejemplo en `~/code/`) y ejecutar SoryCode ahí.
:::

---

## Consejos

- Ejecuta SoryCode en WSL para proyectos guardados en unidades de Windows: el acceso a archivos es transparente
- Usa la [extensión WSL de VS Code](https://code.visualstudio.com/docs/remote/wsl) junto con SoryCode para un flujo de desarrollo integrado
- Tu configuración y tus sesiones de SoryCode se guardan dentro del entorno WSL en `~/.local/share/sorycode/`