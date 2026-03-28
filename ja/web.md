SoryCode はブラウザで Web アプリケーションとして実行でき、ターミナルを必要とせずに同じ強力な AI コーディングエクスペリエンスを提供します。

![SoryCode Web - 新しいセッション](../../../assets/web/web-homepage-new-session.png)

---

## はじめる

以下を実行して Web インターフェースを開始します。

```bash
sorycode web
```

これにより、利用可能なランダムなポートを使用して `127.0.0.1` でローカルサーバーが起動され、デフォルトのブラウザで SoryCode が自動的に開きます。

:::caution
`SORYCODE_SERVER_PASSWORD` が設定されていない場合、サーバーは保護されません。これはローカルで使用する場合には問題ありませんが、ネットワークアクセス用に設定する必要があります。
:::
:::tip[Windows ユーザー]
最高のエクスペリエンスを得るには、PowerShell ではなく [WSL](/docs/windows-wsl) から `sorycode web` を実行します。これにより、ファイルシステムへの適切なアクセスとターミナルの統合が保証されます。
:::

---

## 設定

コマンドラインフラグを使用するか、[設定ファイル](/docs/config)で Web サーバーを設定できます。

### ポート

デフォルトでは、SoryCode は使用可能なポートを選択します。ポートを指定できます。

```bash
sorycode web --port 4096
```

### ホスト名

デフォルトでは、サーバーは `127.0.0.1` (localhost のみ) にバインドされます。ネットワーク上で SoryCode にアクセスできるようにするには:

```bash
sorycode web --hostname 0.0.0.0
```

`0.0.0.0` を使用すると、SoryCode はローカルアドレスとネットワークアドレスの両方を表示します。

```
  Local access:       http://localhost:4096
  Network access:     http://192.168.1.100:4096
```

### mDNS 検出

mDNS を有効にして、ローカルネットワーク上でサーバーを検出できるようにします。

```bash
sorycode web --mdns
```

これにより、ホスト名が自動的に `0.0.0.0` に設定され、サーバーが `sorycode.local` としてアドバタイズされます。

mDNS ドメイン名をカスタマイズして、同じネットワーク上で複数のインスタンスを実行できます。

```bash
sorycode web --mdns --mdns-domain myproject.local
```

### CORS

CORS の追加ドメインを許可するには (カスタムフロントエンドに便利):

```bash
sorycode web --cors https://example.com
```

### 認証

アクセスを保護するには、`SORYCODE_SERVER_PASSWORD` 環境変数を使用してパスワードを設定します。

```bash
SORYCODE_SERVER_PASSWORD=secret sorycode web
```

ユーザー名のデフォルトは `sorycode` ですが、`SORYCODE_SERVER_USERNAME` で変更できます。

---

## Web インターフェースの使用

開始すると、Web インターフェイスから SoryCode セッションにアクセスできるようになります。

### セッション

ホームページからセッションを表示および管理します。アクティブなセッションを確認したり、新しいセッションを開始したりできます。

![SoryCode Web - アクティブなセッション](../../../assets/web/web-homepage-active-session.png)

### サーバーステータス

「サーバーを表示」をクリックすると、接続されているサーバーとそのステータスが表示されます。

![SoryCode Web - サーバー](../../../assets/web/web-homepage-see-servers.png)

---

## ターミナルの接続

実行中の Web サーバーにターミナル TUI を接続できます。

```bash
# Start the web server
sorycode web --port 4096

# In another terminal, attach the TUI
sorycode attach http://localhost:4096
```

これにより、Web インターフェイスとターミナルの両方を同時に使用し、同じセッションと状態を共有できるようになります。

---

## 設定ファイル

`sorycode.json` 設定ファイルでサーバー設定を構成することもできます。

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

コマンドラインフラグは、設定ファイルの設定よりも優先されます。