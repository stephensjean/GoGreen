var shell = new ActiveXObject('WScript.Shell');
ver = 'v4.0.30319';
try {
    shell.RegRead('HKLM\\SOFTWARE\\Microsoft\\.NETFramework\\v4.0.30319\\');
} catch(e) { 
    ver = 'v2.0.50727';
}
shell.Environment('Process')('COMPLUS_Version') = ver;