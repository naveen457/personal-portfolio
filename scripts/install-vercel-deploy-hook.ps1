$ErrorActionPreference = "Stop"

$repositoryRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repositoryRoot

git rev-parse --is-inside-work-tree | Out-Null
git config core.hooksPath .githooks

Write-Host "Git post-push hook installed."
Write-Host "Set VERCEL_DEPLOY_HOOK_URL before pushing to trigger Vercel deployments."
