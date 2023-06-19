Set-Location ../frontend
npm run build
Copy-Item -Recurse -force build/* ../public
Set-Location ../build_scripts