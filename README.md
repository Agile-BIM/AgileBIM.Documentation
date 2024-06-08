## Agile-BIM Documentation
This project helps us create documentation mostly generated from markdown files.

### MK Docs Setup
Using your command line, execute the `Setup.bat` file. This downloads/installs everything needed to be a functional contributor.

### MK Docs Contribute
The prerequisite expectations for this functionality are a Windows computer with Chrome installed. After your initial setup/install of the project dependencies, next you can execute the `Serve.bat` file. In real-time, without performing a full build, our documentation will be launched into a Chrome browser. This "live" launch actually lets you go edit markdown, save the file and Chrome should update the page for you automatically moments later.

### MK Docs Release
The GitHub actions perform the actual Build/Deployment for live site content, but if you really want to generate all the HTML locally, then you can execute the `Release.bat` file.