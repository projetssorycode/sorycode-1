import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Fehlerbehebung",
  "description": "Haeufige Probleme und schnelle Loesungen."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "logs",
    "text": "Logs"
  }, {
    "depth": 2,
    "slug": "speicher",
    "text": "Speicher"
  }, {
    "depth": 2,
    "slug": "desktop-app",
    "text": "Desktop-App"
  }, {
    "depth": 3,
    "slug": "schnellchecks",
    "text": "Schnellchecks"
  }, {
    "depth": 3,
    "slug": "plugins-deaktivieren",
    "text": "Plugins deaktivieren"
  }, {
    "depth": 4,
    "slug": "globale-konfiguration-prüfen",
    "text": "Globale Konfiguration prüfen"
  }, {
    "depth": 4,
    "slug": "plugin-verzeichnisse-prüfen",
    "text": "Plugin-Verzeichnisse prüfen"
  }, {
    "depth": 3,
    "slug": "cache-leeren",
    "text": "Cache leeren"
  }, {
    "depth": 3,
    "slug": "server-verbindungsprobleme-beheben",
    "text": "Server-Verbindungsprobleme beheben"
  }, {
    "depth": 4,
    "slug": "desktop-standard-server-url-löschen",
    "text": "Desktop-Standard-Server-URL löschen"
  }, {
    "depth": 4,
    "slug": "serverport--serverhostname-aus-konfiguration-entfernen",
    "text": "server.port / server.hostname aus Konfiguration entfernen"
  }, {
    "depth": 4,
    "slug": "umgebungsvariablen-prüfen",
    "text": "Umgebungsvariablen prüfen"
  }, {
    "depth": 3,
    "slug": "linux-wayland--x11-probleme",
    "text": "Linux: Wayland / X11-Probleme"
  }, {
    "depth": 3,
    "slug": "windows-webview2-laufzeit",
    "text": "Windows: WebView2-Laufzeit"
  }, {
    "depth": 3,
    "slug": "windows-allgemeine-performance-probleme",
    "text": "Windows: Allgemeine Performance-Probleme"
  }, {
    "depth": 3,
    "slug": "benachrichtigungen-werden-nicht-angezeigt",
    "text": "Benachrichtigungen werden nicht angezeigt"
  }, {
    "depth": 3,
    "slug": "desktop-app-speicher-zurücksetzen-letzter-ausweg",
    "text": "Desktop-App-Speicher zurücksetzen (letzter Ausweg)"
  }, {
    "depth": 2,
    "slug": "hilfe-bekommen",
    "text": "Hilfe bekommen"
  }, {
    "depth": 2,
    "slug": "haeufige-probleme",
    "text": "Haeufige Probleme"
  }, {
    "depth": 3,
    "slug": "sorycode-startet-nicht",
    "text": "SoryCode startet nicht"
  }, {
    "depth": 3,
    "slug": "authentifizierungsprobleme",
    "text": "Authentifizierungsprobleme"
  }, {
    "depth": 3,
    "slug": "modell-nicht-verfügbar",
    "text": "Modell nicht verfügbar"
  }, {
    "depth": 3,
    "slug": "provideriniterror",
    "text": "ProviderInitError"
  }, {
    "depth": 3,
    "slug": "ai_apicallerror-und-provider-paket-probleme",
    "text": "AI_APICallError und Provider-Paket-Probleme"
  }, {
    "depth": 3,
    "slug": "copypaste-funktioniert-nicht-unter-linux",
    "text": "Copy/Paste funktioniert nicht unter Linux"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Wenn SoryCode Probleme macht, starte mit Logs und lokal gespeicherten Daten auf der Festplatte.</p>\n<hr>\n<h2 id=\"logs\"><a href=\"#logs\">Logs</a></h2>\n<p>Logdateien werden hier gespeichert:</p>\n<ul>\n<li><strong>macOS/Linux</strong>: <code dir=\"auto\">~/.local/share/sorycode/log/</code></li>\n<li><strong>Windows</strong>: Druecke <code dir=\"auto\">WIN+R</code> und fuege ein: <code dir=\"auto\">%USERPROFILE%\\.local\\share\\sorycode\\log</code></li>\n</ul>\n<p>Dateinamen enthalten Zeitstempel (z. B. <code dir=\"auto\">2025-01-09T123456.log</code>) und es bleiben die letzten 10 Logs erhalten.</p>\n<p>Mit <code dir=\"auto\">--log-level</code> bekommst du detailliertere Diagnoseinfos, z. B. <code dir=\"auto\">sorycode --log-level DEBUG</code>.</p>\n<hr>\n<h2 id=\"speicher\"><a href=\"#speicher\">Speicher</a></h2>\n<p>sorycode speichert Sitzungs- und App-Daten auf der Festplatte unter:</p>\n<ul>\n<li><strong>macOS/Linux</strong>: <code dir=\"auto\">~/.local/share/sorycode/</code></li>\n<li><strong>Windows</strong>: Druecke <code dir=\"auto\">WIN+R</code> und fuege ein: <code dir=\"auto\">%USERPROFILE%\\.local\\share\\sorycode</code></li>\n</ul>\n<p>Dieses Verzeichnis enthaelt:</p>\n<ul>\n<li><code dir=\"auto\">auth.json</code> - Authentifizierungsdaten wie API-Keys und OAuth-Tokens</li>\n<li><code dir=\"auto\">log/</code> - Anwendungslogs</li>\n<li><code dir=\"auto\">project/</code> - Projektspezifische Daten wie Sitzungen und Nachrichten\n<ul>\n<li>In Git-Repositories unter <code dir=\"auto\">./&#x3C;project-slug>/storage/</code></li>\n<li>Ohne Git unter <code dir=\"auto\">./global/storage/</code></li>\n</ul>\n</li>\n</ul>\n<hr>\n<h2 id=\"desktop-app\"><a href=\"#desktop-app\">Desktop-App</a></h2>\n<p>SoryCode Desktop startet im Hintergrund einen lokalen SoryCode-Server (<code dir=\"auto\">sorycode-cli</code>-Sidecar).\r\nViele Probleme kommen von fehlerhaften Plugins, kaputtem Cache oder falschen Server-Einstellungen.</p>\n<h3 id=\"schnellchecks\"><a href=\"#schnellchecks\">Schnellchecks</a></h3>\n<ul>\n<li>App komplett beenden und neu starten</li>\n<li>Bei Fehlerbildschirm <strong>Restart</strong> klicken und Details kopieren</li>\n<li>Nur macOS: <code dir=\"auto\">SoryCode</code>-Menue -> <strong>Reload Webview</strong> (hilft bei leerer/eingefrorener UI)</li>\n</ul>\n<hr>\n<h3 id=\"plugins-deaktivieren\"><a href=\"#plugins-deaktivieren\">Plugins deaktivieren</a></h3>\n<p>Wenn die Desktop-App beim Start abstuerzt, haengt oder sich seltsam verhaelt, deaktiviere zunaechst Plugins.</p>\n<h4 id=\"globale-konfiguration-prüfen\"><a href=\"#globale-konfiguration-prüfen\">Globale Konfiguration prüfen</a></h4>\n<p>Oeffne deine globale Konfigurationsdatei und suche nach dem <code dir=\"auto\">plugin</code>-Schluessel.</p>\n<ul>\n<li><strong>macOS/Linux</strong>: <code dir=\"auto\">~/.config/sorycode/sorycode.jsonc</code> (oder <code dir=\"auto\">~/.config/sorycode/sorycode.json</code>)</li>\n<li><strong>macOS/Linux</strong> (aeltere Installationen): <code dir=\"auto\">~/.local/share/sorycode/sorycode.jsonc</code></li>\n<li><strong>Windows</strong>: Druecke <code dir=\"auto\">WIN+R</code> und fuege ein: <code dir=\"auto\">%USERPROFILE%\\.config\\sorycode\\sorycode.jsonc</code></li>\n</ul>\n<p>Wenn du Plugins konfiguriert hast, deaktiviere sie voruebergehend, indem du den Schluessel entfernst oder auf ein leeres Array setzt:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"jsonc\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"plugin\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: [],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;plugin&#x22;: [],}\"><div></div></button></div></figure></div>\n<h4 id=\"plugin-verzeichnisse-prüfen\"><a href=\"#plugin-verzeichnisse-prüfen\">Plugin-Verzeichnisse prüfen</a></h4>\n<p>SoryCode kann auch lokale Plugins von der Festplatte laden. Verschiebe diese voruebergehend (oder benenne den Ordner um) und starte die Desktop-App neu:</p>\n<ul>\n<li><strong>Globale Plugins</strong>\n<ul>\n<li><strong>macOS/Linux</strong>: <code dir=\"auto\">~/.config/sorycode/plugins/</code></li>\n<li><strong>Windows</strong>: Druecke <code dir=\"auto\">WIN+R</code> und fuege ein: <code dir=\"auto\">%USERPROFILE%\\.config\\sorycode\\plugins</code></li>\n</ul>\n</li>\n<li><strong>Projekt-Plugins</strong> (nur bei projektspezifischer Konfig)\n<ul>\n<li><code dir=\"auto\">&#x3C;your-project>/.sorycode/plugins/</code></li>\n</ul>\n</li>\n</ul>\n<p>Wenn die App wieder funktioniert, aktiviere Plugins nacheinander, um den Verursacher zu finden.</p>\n<hr>\n<h3 id=\"cache-leeren\"><a href=\"#cache-leeren\">Cache leeren</a></h3>\n<p>Wenn das Deaktivieren von Plugins nicht hilft (oder eine Plugin-Installation haengt), leere den Cache, damit SoryCode ihn neu aufbauen kann.</p>\n<ol>\n<li>Beende SoryCode Desktop komplett.</li>\n<li>Loesche das Cache-Verzeichnis:</li>\n</ol>\n<ul>\n<li><strong>macOS</strong>: Finder -> <code dir=\"auto\">Cmd+Shift+G</code> -> einfuegen: <code dir=\"auto\">~/.cache/sorycode</code></li>\n<li><strong>Linux</strong>: loesche <code dir=\"auto\">~/.cache/sorycode</code> (oder fuehre aus: <code dir=\"auto\">rm -rf ~/.cache/sorycode</code>)</li>\n<li><strong>Windows</strong>: Druecke <code dir=\"auto\">WIN+R</code> und fuege ein: <code dir=\"auto\">%USERPROFILE%\\.cache\\sorycode</code></li>\n</ul>\n<ol start=\"3\">\n<li>Starte SoryCode Desktop neu.</li>\n</ol>\n<hr>\n<h3 id=\"server-verbindungsprobleme-beheben\"><a href=\"#server-verbindungsprobleme-beheben\">Server-Verbindungsprobleme beheben</a></h3>\n<p>SoryCode Desktop kann entweder einen eigenen lokalen Server starten (Standard) oder sich mit einer konfigurierten Server-URL verbinden.</p>\n<p>Wenn du einen <strong>“Connection Failed”</strong>-Dialog siehst (oder die App beim Splash-Screen haengen bleibt), pruefe auf eine benutzerdefinierte Server-URL.</p>\n<h4 id=\"desktop-standard-server-url-löschen\"><a href=\"#desktop-standard-server-url-löschen\">Desktop-Standard-Server-URL löschen</a></h4>\n<p>Klicke im Startbildschirm auf den Servernamen (mit dem Statuspunkt), um die Serverauswahl zu oeffnen. Klicke im Bereich <strong>Default server</strong> auf <strong>Clear</strong>.</p>\n<h4 id=\"serverport--serverhostname-aus-konfiguration-entfernen\"><a href=\"#serverport--serverhostname-aus-konfiguration-entfernen\"><code dir=\"auto\">server.port</code> / <code dir=\"auto\">server.hostname</code> aus Konfiguration entfernen</a></h4>\n<p>Wenn deine <code dir=\"auto\">sorycode.json(c)</code> einen <code dir=\"auto\">server</code>-Abschnitt enthaelt, entferne ihn voruebergehend und starte die Desktop-App neu.</p>\n<h4 id=\"umgebungsvariablen-prüfen\"><a href=\"#umgebungsvariablen-prüfen\">Umgebungsvariablen prüfen</a></h4>\n<p>Wenn du <code dir=\"auto\">SORYCODE_PORT</code> in deiner Umgebung gesetzt hast, versucht die Desktop-App diesen Port fuer den lokalen Server zu nutzen.</p>\n<ul>\n<li>Setze <code dir=\"auto\">SORYCODE_PORT</code> zurueck (oder waehle einen freien Port) und starte neu.</li>\n</ul>\n<hr>\n<h3 id=\"linux-wayland--x11-probleme\"><a href=\"#linux-wayland--x11-probleme\">Linux: Wayland / X11-Probleme</a></h3>\n<p>Unter Linux koennen manche Wayland-Setups leere Fenster oder Compositor-Fehler verursachen.</p>\n<ul>\n<li>Wenn du Wayland nutzt und die App leer ist/abstuerzt, versuche den Start mit <code dir=\"auto\">OC_ALLOW_WAYLAND=1</code>.</li>\n<li>Wenn das es verschlimmert, entferne es und versuche den Start in einer X11-Session.</li>\n</ul>\n<hr>\n<h3 id=\"windows-webview2-laufzeit\"><a href=\"#windows-webview2-laufzeit\">Windows: WebView2-Laufzeit</a></h3>\n<p>Unter Windows benoetigt SoryCode Desktop die Microsoft Edge <strong>WebView2 Runtime</strong>. Wenn die App ein leeres Fenster zeigt oder nicht startet, installiere/aktualisiere WebView2 und versuche es erneut.</p>\n<hr>\n<h3 id=\"windows-allgemeine-performance-probleme\"><a href=\"#windows-allgemeine-performance-probleme\">Windows: Allgemeine Performance-Probleme</a></h3>\n<p>Wenn du langsame Performance, Dateizugriffsprobleme oder Terminal-Probleme unter Windows hast, versuche <a href=\"/docs/windows-wsl\">WSL (Windows Subsystem for Linux)</a>. WSL bietet eine Linux-Umgebung, die nahtloser mit SoryCode-Features funktioniert.</p>\n<hr>\n<h3 id=\"benachrichtigungen-werden-nicht-angezeigt\"><a href=\"#benachrichtigungen-werden-nicht-angezeigt\">Benachrichtigungen werden nicht angezeigt</a></h3>\n<p>SoryCode Desktop zeigt Systembenachrichtigungen nur wenn:</p>\n<ul>\n<li>Benachrichtigungen fuer SoryCode in den OS-Einstellungen aktiviert sind, und</li>\n<li>das App-Fenster nicht fokussiert ist.</li>\n</ul>\n<hr>\n<h3 id=\"desktop-app-speicher-zurücksetzen-letzter-ausweg\"><a href=\"#desktop-app-speicher-zurücksetzen-letzter-ausweg\">Desktop-App-Speicher zurücksetzen (letzter Ausweg)</a></h3>\n<p>Wenn die App nicht startet und du Einstellungen nicht in der UI loeschen kannst, setze den gespeicherten Zustand der Desktop-App zurueck.</p>\n<ol>\n<li>Beende SoryCode Desktop.</li>\n<li>Finde und loesche diese Dateien (im App-Data-Verzeichnis von SoryCode Desktop):</li>\n</ol>\n<ul>\n<li><code dir=\"auto\">sorycode.settings.dat</code> (desktop default server URL)</li>\n<li><code dir=\"auto\">sorycode.global.dat</code> und <code dir=\"auto\">sorycode.workspace.*.dat</code> (UI state like recent servers/projects)</li>\n</ul>\n<p>So findest du das Verzeichnis schnell:</p>\n<ul>\n<li><strong>macOS</strong>: Finder -> <code dir=\"auto\">Cmd+Shift+G</code> -> <code dir=\"auto\">~/Library/Application Support</code> (dann suche nach den Dateinamen oben)</li>\n<li><strong>Linux</strong>: suche unter <code dir=\"auto\">~/.local/share</code> nach den Dateinamen oben</li>\n<li><strong>Windows</strong>: Druecke <code dir=\"auto\">WIN+R</code> -> <code dir=\"auto\">%APPDATA%</code> (dann suche nach den Dateinamen oben)</li>\n</ul>\n<hr>\n<h2 id=\"hilfe-bekommen\"><a href=\"#hilfe-bekommen\">Hilfe bekommen</a></h2>\n<p>Wenn du Probleme mit SoryCode hast:</p>\n<ol>\n<li>\n<p><strong>Probleme auf GitHub melden</strong></p>\n<p>Bugs und Feature-Wuensche meldest du am besten im GitHub-Repository:</p>\n<p><a href=\"https://github.com/anomalyco/opencode/issues\"><strong>github.com/anomalyco/sorycode/issues</strong></a></p>\n<p>Suche vor dem Erstellen nach bestehenden Issues, damit Duplikate vermieden werden.</p>\n</li>\n<li>\n<p><strong>Unserem Discord beitreten</strong></p>\n<p>Fuer schnelle Hilfe und Austausch in der Community:</p>\n<p><a href=\"https://opencode.ai/discord\"><strong>sorycode.ai/discord</strong></a></p>\n</li>\n</ol>\n<hr>\n<h2 id=\"haeufige-probleme\"><a href=\"#haeufige-probleme\">Haeufige Probleme</a></h2>\n<p>Hier sind typische Fehlerbilder und wie du sie loest.</p>\n<hr>\n<h3 id=\"sorycode-startet-nicht\"><a href=\"#sorycode-startet-nicht\">SoryCode startet nicht</a></h3>\n<ol>\n<li>Pruefe die Logs auf Fehlermeldungen</li>\n<li>Versuche den Start mit <code dir=\"auto\">--print-logs</code>, um Ausgaben im Terminal zu sehen</li>\n<li>Stelle sicher, dass du die neueste Version hast: <code dir=\"auto\">sorycode upgrade</code></li>\n</ol>\n<hr>\n<h3 id=\"authentifizierungsprobleme\"><a href=\"#authentifizierungsprobleme\">Authentifizierungsprobleme</a></h3>\n<ol>\n<li>Versuche erneute Authentifizierung mit <code dir=\"auto\">/connect</code> in der TUI</li>\n<li>Pruefe, ob deine API-Keys gueltig sind</li>\n<li>Stelle sicher, dass dein Netzwerk Verbindungen zur Provider-API erlaubt</li>\n</ol>\n<hr>\n<h3 id=\"modell-nicht-verfügbar\"><a href=\"#modell-nicht-verfügbar\">Modell nicht verfügbar</a></h3>\n<ol>\n<li>Pruefe, ob du dich beim Provider authentifiziert hast</li>\n<li>Verifiziere, dass der Modellname in deiner Config korrekt ist</li>\n<li>Manche Modelle erfordern speziellen Zugriff oder Abonnements</li>\n</ol>\n<p>Wenn du <code dir=\"auto\">ProviderModelNotFoundError</code> erhaeltst, referenzierst du ein Modell wahrscheinlich falsch.\r\nModelle sollten so referenziert werden: <code dir=\"auto\">&#x3C;providerId>/&#x3C;modelId></code></p>\n<p>Beispiele:</p>\n<ul>\n<li><code dir=\"auto\">openai/gpt-4.1</code></li>\n<li><code dir=\"auto\">openrouter/google/gemini-2.5-flash</code></li>\n<li><code dir=\"auto\">sorycode/kimi-k2</code></li>\n</ul>\n<p>Um zu sehen, auf welche Modelle du Zugriff hast, fuehre <code dir=\"auto\">sorycode models</code> aus.</p>\n<hr>\n<h3 id=\"provideriniterror\"><a href=\"#provideriniterror\">ProviderInitError</a></h3>\n<p>Wenn du einen ProviderInitError erhaeltst, hast du wahrscheinlich eine ungueltige oder korrupte Konfiguration.</p>\n<p>Zur Loesung:</p>\n<ol>\n<li>\n<p>Pruefe zuerst, ob dein Provider korrekt eingerichtet ist, gemaess dem <a href=\"/docs/providers\">Provider-Guide</a></p>\n</li>\n<li>\n<p>Wenn das Problem besteht, versuche deine gespeicherte Konfiguration zu loeschen:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal-Fenster</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">rm</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-rf</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">~/.local/share/sorycode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"rm -rf ~/.local/share/sorycode\"><div></div></button></div></figure></div>\n<p>Unter Windows druecke <code dir=\"auto\">WIN+R</code> und loesche: <code dir=\"auto\">%USERPROFILE%\\.local\\share\\sorycode</code></p>\n</li>\n<li>\n<p>Authentifiziere dich erneut beim Provider mit dem <code dir=\"auto\">/connect</code>-Befehl in der TUI.</p>\n</li>\n</ol>\n<hr>\n<h3 id=\"ai_apicallerror-und-provider-paket-probleme\"><a href=\"#ai_apicallerror-und-provider-paket-probleme\">AI_APICallError und Provider-Paket-Probleme</a></h3>\n<p>Wenn du API-Call-Fehler erhaeltst, kann das an veralteten Provider-Paketen liegen. sorycode installiert Provider-Pakete (OpenAI, Anthropic, Google, etc.) dynamisch bei Bedarf und cached sie lokal.</p>\n<p>Um Provider-Paket-Probleme zu loesen:</p>\n<ol>\n<li>\n<p>Leere den Provider-Paket-Cache:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal-Fenster</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">rm</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-rf</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">~/.cache/sorycode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"rm -rf ~/.cache/sorycode\"><div></div></button></div></figure></div>\n<p>Unter Windows druecke <code dir=\"auto\">WIN+R</code> und loesche: <code dir=\"auto\">%USERPROFILE%\\.cache\\sorycode</code></p>\n</li>\n<li>\n<p>Starte sorycode neu, um die neuesten Provider-Pakete zu installieren</p>\n</li>\n</ol>\n<p>Dies zwingt sorycode, die neuesten Versionen der Provider-Pakete herunterzuladen, was oft Kompatibilitaetsprobleme mit Modellparametern und API-Aenderungen loest.</p>\n<hr>\n<h3 id=\"copypaste-funktioniert-nicht-unter-linux\"><a href=\"#copypaste-funktioniert-nicht-unter-linux\">Copy/Paste funktioniert nicht unter Linux</a></h3>\n<p>Linux-Nutzer muessen eines der folgenden Clipboard-Utilities installiert haben, damit Copy/Paste funktioniert:</p>\n<p><strong>Fuer X11-Systeme:</strong></p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal-Fenster</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">apt</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-y</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">xclip</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># or</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">apt</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-y</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">xsel</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"apt install -y xclipapt install -y xsel\"><div></div></button></div></figure></div>\n<p><strong>Fuer Wayland-Systeme:</strong></p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal-Fenster</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">apt</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-y</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">wl-clipboard</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"apt install -y wl-clipboard\"><div></div></button></div></figure></div>\n<p><strong>Fuer Headless-Umgebungen:</strong></p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal-Fenster</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">apt</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-y</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">xvfb</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># and run:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">Xvfb</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">:99</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-screen</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">1024x768x24</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">></span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">/dev/null</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">2>&#x26;1</span><span style=\"--0:#24292E;--1:#E1E4E8\"> &#x26;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">export</span><span style=\"--0:#24292E;--1:#E1E4E8\"> DISPLAY</span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\">:99.0</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"apt install -y xvfbXvfb :99 -screen 0 1024x768x24 > /dev/null 2>&#x26;1 &#x26;export DISPLAY=:99.0\"><div></div></button></div></figure></div>\n<p>sorycode erkennt, ob du Wayland nutzt und bevorzugt <code dir=\"auto\">wl-clipboard</code>, sonst versucht es <code dir=\"auto\">xclip</code> und <code dir=\"auto\">xsel</code> (in dieser Reihenfolge).</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/de/troubleshooting.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/de/troubleshooting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/de/troubleshooting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
