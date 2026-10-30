$srcPath = "D:\anaokulu\public\images\logo-original.jpg"
$dstPath = "D:\anaokulu\public\images\logo.png"

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $src.Width
$height = $src.Height

# Bounding box bul (beyaz olmayan pikseller: R<245 or G<245 or B<245)
$minX = $width
$maxX = 0
$minY = $height
$maxY = 0

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $c = $src.GetPixel($x, $y)
        # Beyaz değilse
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Logo Bounds: minX=$minX maxX=$maxX minY=$minY maxY=$maxY"

# Padding payı ekle
$pad = 16
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($width - $cropX, ($maxX - $minX) + ($pad * 2))
$cropH = [Math]::Min($height - $cropY, ($maxY - $minY) + ($pad * 2))

Write-Host "Crop Rect: X=$cropX Y=$cropY W=$cropW H=$cropH"

$cropBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $srcX = $cropX + $x
        $srcY = $cropY + $y
        $c = $src.GetPixel($srcX, $srcY)

        # Beyaz/açık gri arkaplanı şeffaf yap
        if ($c.R -ge 245 -and $c.G -ge 245 -and $c.B -ge 245) {
            $cropBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($c.R -ge 235 -and $c.G -ge 235 -and $c.B -ge 235) {
            # Hafif anti-alias kenar yumuşatma (geçiş)
            $alpha = [Math]::Max(0, [Math]::Min(255, 255 - [int](($c.R + $c.G + $c.B) / 3 - 235) * 25))
            $cropBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        } else {
            $cropBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
        }
    }
}

$cropBmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)

$cropBmp.Dispose()
$src.Dispose()

Write-Host "Logo successfully cropped and saved to $dstPath"
