$ServerIP = "100.110.103.84"
$User = "skyvel"
$RemoteDir = "/home/$User/portafolio"

Write-Host "1. Preparando proyecto para enviar..." -ForegroundColor Cyan

# Eliminar tar viejo si existe
$TarPath = Join-Path -Path $PSScriptRoot -ChildPath "portafolio.tar.gz"
if (Test-Path $TarPath) { Remove-Item $TarPath -Force }

# Comprimir excluyendo carpetas innecesarias para ahorrar ancho de banda
tar.exe -czvf $TarPath --exclude=".git" --exclude="node_modules" --exclude=".next" --exclude="portafolio.tar.gz" -C $PSScriptRoot .

Write-Host "2. Creando carpeta en el servidor..." -ForegroundColor Cyan
ssh "${User}@${ServerIP}" "mkdir -p $RemoteDir"

Write-Host "3. Copiando proyecto al servidor..." -ForegroundColor Cyan
scp $TarPath "${User}@${ServerIP}:${RemoteDir}/"

Write-Host "4. Levantando aplicación con Docker en Linux..." -ForegroundColor Cyan
ssh -t "${User}@${ServerIP}" "cd $RemoteDir && tar -xzvf portafolio.tar.gz && sudo docker compose up -d --build && rm portafolio.tar.gz"

# Limpieza local
Remove-Item $TarPath -Force

Write-Host "=============================================" -ForegroundColor Green
Write-Host "✅ ¡Despliegue exitoso!" -ForegroundColor Green
Write-Host "Puedes ver la aplicación internamente en:" -ForegroundColor White
Write-Host "   http://${ServerIP}:3000" -ForegroundColor Yellow
Write-Host "=============================================" -ForegroundColor Green
