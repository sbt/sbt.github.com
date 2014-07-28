---
  title: sbt 入门
  ntags: [scala, sbt]
---

Preface
-------

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [More-About-Settings]: More-About-Settings.html

翻译中

  [Basic-Def]: Basic-Def.html
  [Hello]: Hello.html
  [Running]: Running.html
  [MSI]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.msi
  [Setup-Notes]: ../docs/Setup-Notes.html
  [Mac]: Installing-sbt-on-Mac.html
  [Windows]: Installing-sbt-on-Windows.html
  [Linux]: Installing-sbt-on-Linux.html
  [Manual-Installation]: Manual-Installation.html

安装 sbt
--------------

创建一个 sbt 工程，你需要经过以下几步：

-   安装sbt并且创建脚本来运行它。
-   建立一个简单的 [hello world][Hello] 工程
    -   创建一个工程目录并且将源文件放在其中。
    -   创建你的构建定义。
-   继续去[运行 sbt][Running] 学习怎么运行sbt。
-   然后去 [.sbt 构建定义][Basic-Def]学习更多关于构建的定义。


最后，安装步骤就简化为一个 Jar 文件和一个 Shell 脚本，但是取决于你的平台，我们提供了好几种方式来使得步骤不是那儿单调。 [Mac][Mac]，[Windows][Windows]，[Linux][Linux]，[手动安装][Manual-Installation]提供了相应的安装步骤。

### 提示和技巧

如果你在运行 sbt 时遇到任何问题，查看[安装建议][Setup-Notes]中的终端编码，HTTP 代理，JVM 参数。


  [ZIP]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.zip
  [TGZ]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.tgz
  [Manual-Installation]: Manual-Installation.html
 
在 Mac 上安装 sbt
---------------------

### 通过第三方的包安装

> **注意：** 第三方的包可能没有提供最新的版本，请记得将任何问题反馈给这些包相关的维护者。

#### 通过 [Macports](http://macports.org/) 安装

```
$ port install sbt
```

#### 通过 [Homebrew](http://mxcl.github.com/homebrew/) 安装

```
$ brew install sbt
```

### 通过通用的包安装

下载 [ZIP][ZIP] 或者 [TGZ][TGZ] 包并解压。

### 手动安装

参见手动安装指南。


  [MSI]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.msi
  [ZIP]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.zip
  [TGZ]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.tgz

在 Windows 上安装 sbt
-------------------------

### 通过 Windows 安装包安装

下载 [msi 安装包][MSI]并安装。

### 通过通用的安装包安装

下载 [ZIP][ZIP] 或者 [TGZ][TGZ] 包并解压。

### 手动安装

参见手动安装指南。


  [ZIP]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.zip
  [TGZ]: http://dl.bintray.com/sbt/native-packages/sbt/0.13.5/sbt-0.13.5.tgz
  [RPM]: http://dl.bintray.com/sbt/rpm/sbt-0.13.5.rpm
  [DEB]: http://dl.bintray.com/sbt/debian/sbt-0.13.5.deb
  [Manual-Installation]: Manual-Installation.html
 
在Linux上安装sbt
-----------------------

### 通过通用的安装包安装

下载 [ZIP][ZIP] 或者 [TGZ][TGZ] 包并解压。

### RPM 和 DEB

官方也提供下面这两种包：

  - [RPM][RPM] 包
  - [DEB][DEB] 包

> **注意：** 请将任何和这两个包相关的问题反馈到 [sbt-launcher-package](https://github.com/sbt/sbt-launcher-package) 项目。

### Gentoo

在 sbt 官方的树中没有提供 ebuild。 但是有从二进制合并 sbt 的 [ebuilds](https://github.com/whiter4bbit/overlays/tree/master/dev-java/sbt-bin)。
可以通过以下方式从这些 ebuilds 中合并 sbt：

    $ mkdir -p /usr/local/portage && cd /usr/local/portage
    $ git clone git://github.com/whiter4bbit/overlays.git
    $ echo "PORTDIR_OVERLAY=$PORTDIR_OVERLAY /usr/local/portage/overlays" >> /etc/make.conf
    $ emerge sbt-bin

> **注意：** 请将任何和 ebuild 相关的问题反馈到[这里](https://github.com/whiter4bbit/overlays/issues)。

### 手动安装

参见手动安装指南。


  [sbt-launch.jar]: http://repo.typesafe.com/typesafe/ivy-releases/org.scala-sbt/sbt-launch/0.13.5/sbt-launch.jar

手动安装 sbt
-----------------------

手动安装需要下载 [sbt-launch.jar][sbt-launch.jar]，然后创建脚本来运行它。

### Unix

将 [sbt-launch.jar][sbt-launch.jar] 文件放在 `~/bin` 下。

创建一个脚本来运行这个 jar，脚本 `~/bin/sbt` 内容如下:

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
java $SBT_OPTS -jar `路径名 $0`/sbt-launch.jar "$@"
```

给该脚本赋予可执行权限：

```
$ chmod u+x ~/bin/sbt
```

### Windows

在 Windows 上手动安装的步骤根据是否使用 Cygwin 和终端的不同而不同。 在任何情况下，将 batch 文件或者脚本文件添加到 path 中，使得可以在任意路径下的命令行中敲 `sbt` 来运行 sbt。
同时，如果需要的话，根据机器调节一下 JVM 的参数设置。

#### Non-Cygwin

对于使用标准 Windows 终端的非 Cygwin 用户，创建如 `sbt.bat` 的 batch 文件：

```
set SCRIPT_DIR=%~dp0
java -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M -jar "%SCRIPT_DIR%sbt-launch.jar" %*
```

然后将下载好的 [sbt-launch.jar][sbt-launch.jar] 放在和 `sbt.bat` 相同的路径下。

#### Cygwin 和标准的 Windows 终端

如果使用 Cygwin 和标准的 Windows 终端，创建如下的 bash 脚本 `~/bin/sbt`：

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
java $SBT_OPTS -jar sbt-launch.jar "$@"
```

用下载好的 [sbt-launch.jar][sbt-launch.jar] 文件的路径替换掉 sbt-launch.jar，如果需要的话记得使用 cygpath。给脚本赋予可执行权限：

```
$ chmod u+x ~/bin/sbt
```

#### Cygwin 和 Ansi 终端

如果使用 Cygwin 和 Ansi 终端(支持 Ansi 转义序列并且可以通过 stty 配置)，创建一个 bash 文件 `~/bin/sbt`：

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
stty -icanon min 1 -echo > /dev/null 2>&1
java -Djline.terminal=jline.UnixTerminal -Dsbt.cygwin=true $SBT_OPTS -jar sbt-launch.jar "$@"
stty icanon echo > /dev/null 2>&1
```

用下载好的 [sbt-launch.jar][sbt-launch.jar] 文件的路径替换掉 sbt-launch.jar，如果需要的话记得使用 cygpath。给脚本赋予可执行权限：

```
$ chmod u+x ~/bin/sbt
```

为了让退格(backspace)能够在 scala 的控制台中正常工作，你需要确保你的退格键发送的是删除符(erase character)，和在 stty 中配置的一样。对于默认的 cygwin 终端(mintty)，
在设置选项 -> 键中，“退格发送 ^H” 需要被选中如果你的删除符是 cygwin 默认的 ^H。

> **注意:** 当前其他的配置还不支持。请[提交 pull request](https://github.com/sbt/sbt/blob/0.13/CONTRIBUTING.md) 实现或者描述已经支持的配置。


  [Basic-Def]: Basic-Def.html
  [Setup]: Setup.html

Hello, World
------------

翻译中

  [Hello]: Hello.html
  [Setup]: Setup.html
  [Full-Def]: Full-Def.html

目录结构
-------------------

翻译中

  [Hello]: Hello.html
  [Setup]: Setup.html
  [Triggered-Execution]: ../docs/Triggered-Execution.html
  [Command-Line-Reference]: ../docs/Command-Line-Reference.html

运行
-------

翻译中

  [More-About-Settings]: More-About-Settings.html
  [Full-Def]: Full-Def.html
  [Running]: Running.html
  [Library-Dependencies]: Library-Dependencies.html
  [Input-Tasks]: ../docs/Input-Tasks.html

.sbt 构建定义
---------------------

翻译中

  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Library-Dependencies]: Library-Dependencies.html
  [Multi-Project]: Multi-Project.html
  [Inspecting-Settings]: ../docs/Inspecting-Settings.html

Scopes
------

翻译中

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [Full-Def]: Full-Def.html

更多项设置
---------------------

翻译中

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [More-About-Settings]: More-About-Settings.html
  [external-maven-ivy]: ../docs/Library-Management.html#external-maven-ivy
  [Cross-Build]: ../docs/Cross-Build.html
  [Resolvers]: ../docs/Resolvers.html
  [Library-Management]: ../docs/Library-Management.html

库依赖
--------------------

翻译中

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [Directories]: Directories.html
  [Full-Def]: Full-Def.html

多项目构建
--------------------

翻译中

  [Basic-Def]: Basic-Def.html
  [Library-Dependencies]: Library-Dependencies.html
  [Multi-Project]: Multi-Project.html
  [global-vs-local-plugins]: ../docs/Best-Practices.html#global-vs-local-plugins
  [Community-Plugins]: ../docs/Community-Plugins.html
  [Plugins]: ../docs/Plugins.html
  [Plugins-Best-Practices]: ../docs/Plugins-Best-Practices.html

使用插件
-------------

翻译中

  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Using-Plugins]: Using-Plugins.html
  [Full-Def]: Full-Def.html
  [Input-Tasks]: ../docs/Input-Tasks.html
  [Plugins]: ../docs/Plugins.html
  [Tasks]: ../docs/Tasks.html

自定义设置和设置
-------------------------

翻译中

  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Using-Plugins]: Using-Plugins.html

.scala 构建定义
-----------------------

翻译中

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [Full-Def]: Full-Def.html
  [Using-Plugins]: Using-Plugins.html
  [getting-help]: ../docs/faq.html#getting-help

总结
-----------------------

翻译中