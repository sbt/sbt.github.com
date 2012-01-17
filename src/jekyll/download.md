---
layout: default
title: download
tagline: up and running in moments.
description: 'The [SBT Launcher](http://github.com/sbt/sbt-launcher) project contains a set of native packages for use in your operating system. <br/>&nbsp;<br/>
[msi](#windows) | [yum](#rpm) | [apt-get](#deb) | [homebrew](#mac) | [by hand](#manual)
'
---

#### Windows Releases ####

<a id="windows" label="windows"></a>

[Click here](http://typesafe.artifactoryonline.com/typesafe/windows-releases/org/scalasbt/sbt/0.11.2/sbt.msi) for the latest windows MSI.


#### Yum Repositories ####

<a id="rpm" label="rpm"></a>

Coming Soon...

#### APT Repositories ####

<a id="deb" label="deb"></a>

Coming Soon...

#### Hombrew/Macports ####

<a id="mac" label="mac"></a>

Use either MacPorts:

    $ sudo port install sbt

Or HomeBrew:

    $ brew install sbt

#### By Hand installation ####

<a id="manual" label="manual"></a>

First, download the [launcher jar](http://typesafe.artifactoryonline.com/typesafe/ivy-releases/org.scala-tools.sbt/sbt-launch/0.11.2/sbt-launch.jar) and place it somewhere useful.

THEN, create a script in that same directory.

##### Windows #####

Create a `sbt.bat` file next to the launch jar.

    set SCRIPT_DIR=%~dp0
    java -Xmx512M -jar "%SCRIPT_DIR%sbt-launch.jar" %*

Add the directory containing `sbt.bat` to the windows path.

##### Unix-Like #####

Create a `sbt` script (a good place is `~/bin/sbt`

    java -Xmx512M -jar `dirname $0`/sbt-launch.jar "$@"

then make the script executable:

    $ chmod u+x ~/bin/sbt


