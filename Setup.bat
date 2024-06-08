rmdir /s /q .\pyembed
rmdir /s /q .\site

curl -sSL https://bootstrap.pypa.io/get-pip.py -o get-pip.py
curl -sSL https://www.python.org/ftp/python/3.12.4/python-3.12.4-embed-amd64.zip -o pyembed.zip

mkdir .\pyembed

REM https://www.freebsd.org/cgi/man.cgi?query=bsdtar&sektion=1&manpath=FreeBSD+5.3-stable
tar -x -C ".\pyembed" -f ".\pyembed.zip"

.\pyembed\python.exe get-pip.py
ECHO.>>".\pyembed\python312._pth"
ECHO Lib>>".\pyembed\python312._pth"
ECHO Lib\site-packages>>".\pyembed\python312._pth"
.\pyembed\python.exe -m pip install --upgrade pip.

del /q .\pyembed.zip
del /q .\get-pip.py

REM >>> MKDocs + Plugin Installations
.\pyembed\python.exe -m pip install -r requirements.txt
