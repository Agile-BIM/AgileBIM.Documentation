rmdir /s /q .\site

.\pyembed\python.exe -m mkdocs build -q --clean -f .\mkdocs_base.yml
