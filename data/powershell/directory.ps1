$allPaths += Get-ChildItem "~STARTDIR~" -Recurse -Depth ~DEPTH~ -Force -ErrorAction SilentlyContinue | %{$_.FullName}