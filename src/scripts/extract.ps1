$content = Get-Content 'C:\Users\mdabs\.gemini\antigravity\brain\8de4c133-0755-44a2-a4b0-9fa1ada7c440\.system_generated\steps\397\content.md' -Raw
$jsonIndex = $content.IndexOf('{"v":')
if ($jsonIndex -ge 0) {
    $json = $content.Substring($jsonIndex)
    $json | Out-File -FilePath 'e:\Project-library\e-commerce\src\assets\lottie\code.json' -Encoding utf8 -NoNewline
    Write-Host "Successfully extracted and saved Lottie JSON."
} else {
    Write-Error "Could not find start of JSON in source file."
}
