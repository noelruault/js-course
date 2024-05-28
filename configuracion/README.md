# Configuración del editor

## Instalación

### Windows

```bash
powershell -c "irm bun.sh/install.ps1|iex"
$env:PATH += ";C:\Users\$env:UserName\.bun\bin"
bun install
```

### Ubuntu

```bash
curl -fsSL https://bun.sh/install | bash
bun install
```
