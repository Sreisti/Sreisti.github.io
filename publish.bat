@echo off
REM Publishes your local changes to https://sreisti.github.io/
REM Double-click this file any time you've edited the site and want it live.

cd /d "%~dp0"

echo.
echo === Checking for changes ===
git status --short

echo.
set /p MSG="Describe what you changed (press Enter for a default message): "
if "%MSG%"=="" set MSG=Update site

echo.
echo === Staging, committing, and pushing ===
git add -A
git commit -m "%MSG%"
git push

echo.
echo === Done. Live at https://sreisti.github.io/ within a minute or two. ===
pause
