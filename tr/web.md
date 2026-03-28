sorycode, tarayıcınızda bir web uygulaması olarak çalışabilir ve bir terminale ihtiyaç duymadan aynı güçlü AI kodlama deneyimini sağlayabilir.

![sorycode Web - Yeni Oturum](../../../assets/web/web-homepage-new-session.png)

## Başlarken

Aşağıdakileri çalıştırarak web arayüzünü başlatın:

```bash
sorycode web
```

Bu, `127.0.0.1` üzerinde rastgele kullanılabilir bir bağlantı noktasına sahip yerel bir sunucuyu başlatır ve sorycode'u varsayılan tarayıcınızda otomatik olarak açar.

:::caution
`SORYCODE_SERVER_PASSWORD` ayarlanmadıysa sunucunun güvenliği kaldırılacaktır. Bu, yerel kullanım için iyidir ancak ağ erişimi için ayarlanmalıdır.
:::

:::tip[Windows Kullanıcıları]
En iyi deneyim için PowerShell yerine `sorycode web`'yi [WSL](/docs/windows-wsl)'den çalıştırın. Bu, uygun dosya sistemi erişimini ve terminal entegrasyonunu sağlar.
:::

---

## Yapılandırma

Web sunucusunu komut satırı bayraklarıyla veya [config dosyanızda](/docs/config) yapılandırabilirsiniz.

### Port

sorycode varsayılan olarak kullanılabilir bir bağlantı noktasını seçer. Bir bağlantı noktası belirtebilirsiniz:

```bash
sorycode web --port 4096
```

### Ana makine adı

Varsayılan olarak sunucu `127.0.0.1` (yalnızca localhost) öğesine bağlanır. sorycode'u ağınızda erişilebilir kılmak için:

```bash
sorycode web --hostname 0.0.0.0
```

`0.0.0.0` kullanıldığında, sorycode hem yerel hem de ağ adreslerini gösterecektir:

```
  Local access:       http://localhost:4096
  Network access:     http://192.168.1.100:4096
```

### mDNS Keşfi

Sunucunuzun yerel ağda bulunabilir olmasını sağlamak için mDNS'yi etkinleştirin:

```bash
sorycode web --mdns
```

Bu, ana bilgisayar adını otomatik olarak `0.0.0.0` olarak ayarlar ve sunucuyu `sorycode.local` olarak tanıtır.

Aynı ağ üzerinde birden fazla örneği çalıştıracak şekilde mDNS alan adını özelleştirebilirsiniz:

```bash
sorycode web --mdns --mdns-domain myproject.local
```

### CORS

CORS'a yönelik ek alan adlarına izin vermek için (özel ön uçlar için kullanışlıdır):

```bash
sorycode web --cors https://example.com
```

### Kimlik Doğrulaması

Erişimi korumak için `SORYCODE_SERVER_PASSWORD` ortam değişkenini kullanarak bir parola ayarlayın:

```bash
SORYCODE_SERVER_PASSWORD=secret sorycode web
```

Kullanıcı adı varsayılan olarak `sorycode` şeklindedir ancak `SORYCODE_SERVER_USERNAME` ile değiştirilebilir.

---

## Web Arayüzünü Kullanma

Web arayüzü başlatıldığında sorycode oturumlarınıza erişim sağlar.

### Oturum

Oturumlarınızı ana sayfadan görüntüleyin ve yönetin. Aktif oturumları görebilir ve yenilerini başlatabilirsiniz.

![sorycode Web - Etkin Oturum](../../../assets/web/web-homepage-active-session.png)

### Sunucu Durumu

Bağlı sunucuları ve durumlarını görüntülemek için "Sunucuları Gör" seçeneğini tıklayın.

![sorycode Web - Sunuculara bakın](../../../assets/web/web-homepage-see-servers.png)

---

## Terminal Takma

Çalışan bir web sunucusuna bir terminal TUI'si ekleyebilirsiniz:

```bash
# Start the web server
sorycode web --port 4096

# In another terminal, attach the TUI
sorycode attach http://localhost:4096
```

Bu, aynı oturumları ve durumu paylaşarak hem web arayüzünü hem de terminali aynı anda kullanmanıza olanak tanır.

---

## Yapılandırma Dosyası

Sunucu ayarlarını `sorycode.json` yapılandırma dosyanızda da yapılandırabilirsiniz:

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

Komut satırı bayrakları yapılandırma dosyası ayarlarından önceliklidir.