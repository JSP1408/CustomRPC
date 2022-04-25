echo off
echo off
:start
color 9
cls 
echo Please choose to either load a template or manually make a status
echo -----------------------------------------------------------------
echo )1 Load a template from ./Templates
echo )2 Create a new status manually 
echo (Both will explain how they work)
echo -----------------------------------------------------------------
set /p choice=Choice: 
if "%choice%"=="1" goto Template
if "%choice%"=="2" goto NoT

:Template
cls
echo -----------------------------------------------------------------
echo All template files currently exist in the template directory. 
echo All you have to do is put in the name of a template to load it.
echo If you want to make a custom template use "1.json" as an example.
echo -----------------------------------------------------------------
echo Example: example.json
set /p file=File: 
goto load


:NoT
cls
echo If you don't know how to get a Client ID then you shouldn't be using this
set /p op0=Client ID: 
if "%op0%" equ "" set "op0=000000000000000000"
cls
echo Notice: If you don't know what to put into certain options then leave them blank.
echo They will default to a working value
set /p op=State: 
if "%op%" equ "" set "op=Undefined"
cls
set /p op2=Details: 
if "%op2%" equ "" set "op2=Unused"
cls
echo Notice: Assets can only be changed if you know the values in developer portal.
echo Leave blank for default picture.
set /p op3=MainAsset: 
if "%op3%" equ "" set "op3=test"
cls
echo Notice: Assets can only be changed if you know the values in developer portal.
echo Leave blank for default picture.
set /p op4=SmallAsset: 
if "%op4%" equ "" set "op4=test"
cls
set /p op5=Big Hover Text: 
if "%op5%" equ "" set "op5=Unused"
cls
set /p op6=Small Hover Text: 
if "%op6%" equ "" set "op6=Unused"
cls
set /p op7=Instance? (True or False): 
if "%op7%" equ "" set "op7=true"
cls
echo Valid input is required for the program to work
set /p op8=Button 1 Text: 
if "%op8%" equ "" set "op8=Unused"
cls
echo Valid input is required for the program to work
set /p op9=Button 1 URL: 
if "%op9%" equ "" set "op9=https://github.com/"
cls
echo Valid input is required for the program to work
set /p op10=Button 2 Text: 
if "%op10%" equ "" set "op10=Unused"
cls
echo Valid input is required for the program to work
set /p op11= Button 2 URL: 
if "%op11%" equ "" set "op11=https://github.com/"

goto rpc

:load
node .\trpc.js "%file%"
goto start
:rpc
node .\rpc.js "%op%" "%op2%" "%op3%" "%op4%" "%op5%" "%op6%" "%op7%" "%op8%" "%op9%" "%op10%" "%op11%" "%op0%"
goto start
:end