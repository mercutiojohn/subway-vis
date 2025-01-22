
## Method 1 x
Use `npm-bundle`.

1. Install npm-bundle globally:
```powershell
npm install -g npm-bundle
```

2. Create the bundle:
```powershell
npm-bundle
```

3. This will create a single `.tgz` file containing all dependencies.

4. Copy this `.tgz` file to the offline computer and install:
```powershell
npm install path/to/bundle.tgz
```


To run npm-bundle in the current command line window instead of opening a new window, use the `cmd /c` prefix:
```bash
cmd /c C:\Users\xxx\AppData\Roaming\npm\npm-bundle
```

## Method 2 x

```powershell
# Create a backup directory
mkdir npm-backup

# List and download all production dependencies
npm list --prod --parseable --depth=0 | ForEach-Object { 
    $packageName = Split-Path $_ -Leaf
    if ($packageName -ne (Split-Path (Get-Location) -Leaf)) {
        npm pack $packageName --pack-destination "./npm-backup"
    }
}

# Copy package.json to the backup folder
Copy-Item package.json npm-backup/
```

Then you can:

1. Copy the entire npm-backup folder to your offline computer
2. Navigate to that folder
3. Run:

```powershell
Get-ChildItem .\npm-backup\*.tgz | ForEach-Object { npm install $_.FullName }
```

```powershell
Get-ChildItem .\npm-backup\*.tgz | ForEach-Object { 
    Write-Host "Installing $_..." -ForegroundColor Green
    npm install $_.FullName --offline --verbose
}
```

## Method 3

On Online

1. install, add dependencies, and get `node_modules`

On Offline

1. remame previous `node_modules` to `node_modules_previous`

2. unzip `node_modules`
