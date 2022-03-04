$response = Invoke-RestMethod -Uri 'http://localhost:3000/tasks' -Method GET
Write-Output $response
$response = Invoke-RestMethod -Uri 'http://localhost:3000/tasks/1' -Method GET
Write-Output $response
$response = Invoke-RestMethod -Uri 'http://localhost:3000/tasks' -Method POST
Write-Output $response
$response = Invoke-RestMethod -Uri 'http://localhost:3000/tasks/1' -Method PUT
Write-Output $response
$response = Invoke-RestMethod -Uri 'http://localhost:3000/tasks/1' -Method DELETE
Write-Output $response

