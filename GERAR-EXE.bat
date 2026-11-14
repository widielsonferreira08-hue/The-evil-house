@echo off
cd /d "%~dp0"
echo Instalando dependencias (precisa de Node.js e internet)...
call npm install
call npm run build:win
echo.
echo Pronto! O executavel esta na pasta "dist".
pause
