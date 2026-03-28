SoryCode puede ejecutarse como una aplicación web en su navegador, brindando la misma poderosa experiencia de codificación de IA sin necesidad de una terminal.

![SoryCode Web - Nueva sesión](../../../assets/web/web-homepage-new-session.png)

## Empezar

Inicie la interfaz web ejecutando:

```bash
sorycode web
```

Esto inicia un servidor local en `127.0.0.1` con un puerto disponible aleatorio y abre automáticamente SoryCode en su navegador predeterminado.

:::caution
Si no se establece `SORYCODE_SERVER_PASSWORD`, el servidor no será seguro. Esto está bien para uso local, pero debe configurarse para acceso a la red.
:::

:::tip[Windows Usuarios]
Para obtener la mejor experiencia, ejecute `sorycode web` desde [WSL](/docs/windows-wsl) en lugar de PowerShell. Esto garantiza el acceso adecuado al sistema de archivos y la integración del terminal.
:::

---

## Configuración

Puede configurar el servidor web usando indicadores de línea de comando o en su [archivo de configuración](/docs/config).

### Puerto

De forma predeterminada, SoryCode elige un puerto disponible. Puede especificar un puerto:

```bash
sorycode web --port 4096
```

### Nombre de host

De forma predeterminada, el servidor se vincula a `127.0.0.1` (solo localhost). Para hacer que SoryCode sea accesible en su red:

```bash
sorycode web --hostname 0.0.0.0
```

Al usar `0.0.0.0`, SoryCode mostrará direcciones locales y de red:

```
  Local access:       http://localhost:4096
  Network access:     http://192.168.1.100:4096
```

### Descubrimiento de mDNS

Habilite mDNS para que su servidor sea reconocible en la red local:

```bash
sorycode web --mdns
```

Esto establece automáticamente el nombre de host en `0.0.0.0` y anuncia el servidor como `sorycode.local`.

Puede personalizar el nombre de dominio mDNS para ejecutar varias instancias en la misma red:

```bash
sorycode web --mdns --mdns-domain myproject.local
```

### CORS

Para permitir dominios adicionales para CORS (útil para interfaces personalizadas):

```bash
sorycode web --cors https://example.com
```

### Autenticación

Para proteger el acceso, establezca una contraseña utilizando la variable de entorno `SORYCODE_SERVER_PASSWORD`:

```bash
SORYCODE_SERVER_PASSWORD=secret sorycode web
```

El nombre de usuario predeterminado es `sorycode` pero se puede cambiar con `SORYCODE_SERVER_USERNAME`.

---

## Usar la interfaz web

Una vez iniciada, la interfaz web proporciona acceso a sus sesiones SoryCode.

### Sesiones

Vea y administre sus sesiones desde la página de inicio. Puedes ver sesiones activas e iniciar otras nuevas.

![SoryCode Web - Sesión activa](../../../assets/web/web-homepage-active-session.png)

### Estado del servidor

Haga clic en "Ver servidores" para ver los servidores conectados y su estado.

![SoryCode Web - Ver Servidores](../../../assets/web/web-homepage-see-servers.png)

---

## Adjuntar una terminal

Puede conectar un terminal TUI a un servidor web en ejecución:

```bash
# Start the web server
sorycode web --port 4096

# In another terminal, attach the TUI
sorycode attach http://localhost:4096
```

Esto le permite utilizar la interfaz web y el terminal simultáneamente, compartiendo las mismas sesiones y estados.

---

## Archivo de configuración

También puede configurar los ajustes del servidor en su archivo de configuración `sorycode.json`:

```json
{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "cors": ["https://example.com"]
  }
}
```

Los indicadores de la línea de comando tienen prioridad sobre la configuración del archivo de configuración.