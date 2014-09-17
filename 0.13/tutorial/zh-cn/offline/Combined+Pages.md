
  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [More-About-Settings]: More-About-Settings.html

sbt 入门
========================

sbt 使用少数的几个概念来支撑它灵活并且强大的构建定义。其实没有太多的概念，但是 sbt 并不完全像其他的构建体系，而且如果你没有看过文档的话，你 *将会* 偶然遇到一些细节问题。

这篇入门指南覆盖了一些你在创建和维护一个 sbt 构建定义时需要知道的概念。

*强烈建议*看完该入门指南！

如果你非常急切，你可以直接进入以下几小节了解最重要的概念背景 [.sbt 构建定义][Basic-Def]，[scopes][Scopes]，[更多关于设置][More-About-Settings]。
但是我们不保证跳过该指南中的其他小节是一个好的想法。

最好是按顺序阅读，因为该指南中后面的小节建立在前面介绍的概念的基础上。

感谢尝试 sbt 并且 *体验其中的乐趣* ！


  [Basic-Def]: Basic-Def.html
  [Hello]: Hello.html
  [Running]: Running.html
  [MSI]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.msi
  [Setup-Notes]: ../docs/Setup-Notes.html
  [Mac]: Installing-sbt-on-Mac.html
  [Windows]: Installing-sbt-on-Windows.html
  [Linux]: Installing-sbt-on-Linux.html
  [Manual-Installation]: Manual-Installation.html

安装 sbt
--------------

创建一个 sbt 工程，你需要经过以下几步：

-   安装 sbt 并且创建脚本来运行它。
-   建立一个简单的 [hello world][Hello] 工程
    -   创建一个工程目录并且将源文件放在其中。
    -   创建你的构建定义。
-   继续去[运行 sbt][Running] 学习怎么运行 sbt。
-   然后去 [.sbt 构建定义][Basic-Def]学习更多关于构建的定义。


最后，安装步骤就简化为一个 Jar 文件和一个 Shell 脚本，但是取决于你的平台，我们提供了好几种方式来使得步骤不是那儿单调。 [Mac][Mac]，[Windows][Windows]，[Linux][Linux]，[手动安装][Manual-Installation]提供了相应的安装步骤。

### 提示和技巧

如果你在运行 sbt 时遇到任何问题，查看[安装建议][Setup-Notes]中的终端编码，HTTP 代理，JVM 参数。


  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.tgz
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


  [MSI]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.msi
  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.tgz

在 Windows 上安装 sbt
-------------------------

### 通过 Windows 安装包安装

下载 [msi 安装包][MSI]并安装。

### 通过通用的安装包安装

下载 [ZIP][ZIP] 或者 [TGZ][TGZ] 包并解压。

### 手动安装

参见手动安装指南。


  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.6/sbt-0.13.6.tgz
  [RPM]: https://dl.bintray.com/sbt/rpm/sbt-0.13.6.rpm
  [DEB]: https://dl.bintray.com/sbt/debian/sbt-0.13.6.deb
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


  [sbt-launch.jar]: https://repo.typesafe.com/typesafe/ivy-releases/org.scala-sbt/sbt-launch/0.13.6/sbt-launch.jar

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

这一小节假设你已经 [安装 sbt][Setup] 了。

### 创建一个有源码的项目目录

一个合法的 sbt 项目可以是一个包含单个源码文件的目录。
尝试创建一个 `hello` 目录，包含内容如下的源码文件 `hw.scala`：

```scala
object Hi {
  def main(args: Array[String]) = println("Hi!")
}
```

现在在 `hello` 目录下启动 sbt，然后执行 `run` 命令进入到 sbt 的交互式命令行。在 Linux 或者 OS X 上的命令可能是这样：

```
$ mkdir hello
$ cd hello
$ echo 'object Hi { def main(args: Array[String]) = println("Hi!") }' > hw.scala
$ sbt
...
> run
...
Hi!
```

在这个例子中，sbt 完全按照约定工作。sbt 将会自动找到以下内容：

-   项目根目录下的源文件
-   `src/main/scala` 或 `src/main/java` 中的源文件
-   `src/test/scala` 或 `src/test/java` 中的测试文件
-   `src/main/resources` 或 `src/test/resources` 中的数据文件
-   `lib` 中的 jar 文件

默认情况下，sbt 会用和启动自身相同版本的 Scala 来构建项目。

你可以通过执行 `sbt run` 来运行项目或者通过 `sbt console` 进入 [Scala REPL](http://www.scala-lang.org/node/2097)。`sbt console` 已经帮你
设置好项目的 classpath，所以你可以根据项目的代码尝试实际的 Scala 示例。

### 构建定义

大多数项目需要一些手动设置。基本的构建设置都放在项目根目录的 `build.sbt` 文件里。

例如，如果你的项目放在 `hello` 下，在 `hello/build.sbt` 中可以这样写：

```scala
name := "hello"

version := "1.0"

scalaVersion := "2.10.3"
```

注意相邻的两行之间都有一个空行。这不仅仅是为了好看，它们是为了能将每一项分隔必须的。在 [.sbt 构建定义][Basic-Def]这节中你将会学到更多关于
如何编写 `build.sbt` 脚本的东西。

如果你准备将你的项目打包成一个 jar 包，在 `build.sbt` 中至少要写上 name 和 version。

### 设置 sbt 版本

你可以通过创建 `hello/project/build.properties` 文件强制指定一个版本的 sbt。在这个文件里，编写如下内容来强制使用 0.13.6：

```
sbt.version=0.13.6
```

sbt 在不同的 release 版本中是 99% 兼容的。但是在 `project/build.properties` 文件中设置 sbt 的版本仍然能避免一些潜在的混淆。


  [Hello]: Hello.html
  [Setup]: Setup.html
  [Full-Def]: Full-Def.html

目录结构
-------------------

这一小节假设你已经[安装 sbt][Setup] 并且已经阅读过 [Hello, World][Hello] 了。

### 基础目录

在 sbt 的术语里，“基础目录”是包含项目的目录。所以，如果你创建了一个和 [Hello, World][Hello] 一样的项目 `hello` ，包含 `hello/build.sbt` 和 `hello/hw.scala`， `hello` 就是基础目录。

### 源代码

源代码可以像 `hello/hw.scala` 一样的放在项目的基础目录。然而，大多数人不会在真实的项目中这样做，因为太杂乱了。

sbt 和 [Maven](https://maven.apache.org/) 的默认的源文件的目录结构是一样的（所有的路径都是相对于基础目录的）：

```
src/
  main/
    resources/
       <files to include in main jar here>
    scala/
       <main Scala sources>
    java/
       <main Java sources>
  test/
    resources
       <files to include in test jar here>
    scala/
       <test Scala sources>
    java/
       <test Java sources>
```

`src/` 中其他的目录将被忽略。而且，所有的隐藏目录也会被忽略。

### sbt 构建定义文件

你已经在项目的基础目录中看到了 `build.sbt`。其他的 sbt 文件在 `project` 子目录中。

`project` 目录可以包含 `.scala` 文件，这些文件最后会和 `.sbt` 文件合并共同构成完整的构建定义。想知道更多请参见 [.scala 构建定义][Full-Def]。

```
build.sbt
project/
  Build.scala
```

你可能在 `project/` 中也看到了 `.sbt` 文件，但是它不等同于项目基础目录中的 `.sbt` 文件。这将在[稍后][Full-Def]解释，因为首先你需要一些背景知识。

### 构建产品

生成的文件（编译的 classes，打包的 jars，托管文件，caches 和文档）默认写在 `target` 目录中。

### 配置版本管理

你的 `.gitignore` 文件（或者其他版本控制系统等同的文件）应该包含：

```
target/
```

注意：这里后面需要跟一个 `/` （只匹配目录）且前面不能有 `/` （除了匹配普通的 `target/` 还匹配 `project/target/` ）。

  [Hello]: Hello.html
  [Setup]: Setup.html
  [Triggered-Execution]: ../docs/Triggered-Execution.html
  [Command-Line-Reference]: ../docs/Command-Line-Reference.html

运行
-------

这一小节将讲述在你建立好项目之后如何去使用 sbt。假设你已经[安装 sbt][Setup] 并且已经创建过 [Hello, World][Hello] 项目或其他项目。

### 交互模式

在你的项目目录下运行 sbt 不跟任何参数：

```
$ sbt
```

执行 sbt 不跟任何命令行参数将会进入交互模式。交互模式有一个命令行（含有 tab 自动补全功能和历史记录）。

例如，在 sbt 命令行里输入 `compile`：

```
> compile
```

再次 `compile`，只需要按方向键上然后回车。

输入 `run` 来启动程序。

输入 `exit` 或者 Ctrl+D （Unix）或者 Ctrl+Z （Windows）可以退出交互模式。

### 批处理模式

你也可以用批处理模式来运行 sbt，可以以空格为分隔符指定参数。对于接受参数的 sbt 命令，将命令和参数用引号引起来一起传给 sbt。例如：

```
$ sbt clean compile "testOnly TestA TestB"
```

在这个例子中，`testOnly` 有两个参数 `TestA` 和 `TestB`。这个命令会按顺序执行（`clean`， `compile`， 然后 `testOnly`）。

### 持续构建和测试

为了加快编辑-编译-测试循环，你可以让 sbt 在你保存源文件时自动重新编译或者跑测试。

在命令前面加上前缀 `~` 后，每当有一个或多个源文件发生变化时就会自动运行该命令。例如，在交互模式下尝试：

```
> ~ compile
```

按回车键停止监视变化。

你可以在交互模式或者批处理模式下使用 `~` 前缀。

参见[触发执行][Triggered-Execution]获取详细信息。

### 常用命令

下面是一些非常常用的的 sbt 命令。更加详细的列表请参见[命令行参考][Command-Line-Reference]。

<table>
  <tr>
    <td><tt>clean</tt></td>
    <td>删除所有生成的文件 （在 <tt>target</tt> 目录下）。</td>
  </tr>
  <tr>
    <td><tt>compile</tt></td>
    <td>编译源文件（在 <tt>src/main/scala</tt> 和
   <tt>src/main/java</tt> 目录下）。</td>
  </tr>
  <tr>
    <td><tt>test</tt></td>
    <td>编译和运行所有测试。</td>
  </tr>
  <tr>
    <td><tt>console</tt></td>
    <td>进入到一个包含所有编译的文件和所有依赖的 classpath 的 Scala 解析器。输入 <tt>:quit</tt>，
   Ctrl+D （Unix），或者 Ctrl+Z （Windows） 返回到 sbt。</td>
  </tr>
  <tr>
    <td><nobr><tt>run &lt;参数&gt;*</tt></nobr></td>
    <td>在和 sbt 所处的同一个虚拟机上执行项目的 main class。</td>
  </tr>
  <tr>
    <td><tt>package</tt></td>
    <td>将 <tt>src/main/resources</tt> 下的文件和 <tt>src/main/scala</tt> 以及 <tt>src/main/java</tt> 中编译出来的 class 文件打包成一个 jar 文件。</td>
  </tr>
  <tr>
    <td><tt>help &lt;命令&gt;</tt></td>
    <td>显示指定的命令的详细帮助信息。如果没有指定命令，会显示所有命令的简介。</td>
  </tr>
  <tr>
    <td><tt>reload</tt></td>
    <td>重新加载构建定义（<tt>build.sbt</tt>， <tt>project/*.scala</tt>， <tt>project/*.sbt</tt> 这些文件中定义的内容)。在修改了构建定义文件之后需要重新加载。</td>
  </tr>
</table>

### Tab 自动补全

交互模式下包括空的命令行都有 tab 自动补全。sbt 的一个特别的约定是，当按 tab 键一次的时候可能只会显示所有命令中最有可能的自动补全的子集，当按多次时才会显示详细的选项。

### 命令历史记录

交互模式有历史记录，即使你退出 sbt 然后重新进入。最简单的访问历史记录的方法时用上方向键。还支持以下一些命令：

<table>
  <tr>
    <td><tt>!</tt></td>
    <td>显示历史记录命令帮助。</td>
  </tr>
  <tr>
    <td><tt>!!</tt></td>
    <td>重新执行前一条命令。</td>
  </tr>
  <tr>
    <td><tt>!:</tt></td>
    <td>显示所有之前的命令。</td>
  </tr>  
  <tr>
    <td><tt>!:n</tt></td>
    <td>显示之前的最后 <tt>n</tt> 条命令。</td>
  </tr>
  <tr>
    <td><tt>!n</tt></td>
    <td>执行下标为 <tt>n</tt> 的命令，顺序和 <tt>!:</tt> 命令展示的一直。</td>
  </tr>
  <tr>
    <td><tt>!-n</tt></td>
    <td>执行从该命令往前数第 n 条命令。</td>
  </tr>
  <tr>
    <td><tt>!string</tt></td>
    <td>执行最近执行过的以 string 打头的命令。</td>
  </tr>
  <tr>
    <td><tt>!?string</tt></td>
    <td>执行最近执行过的包含 string 的命令。</td>
  </tr>
</table>


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

更多关于设置
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

自定义设置和任务
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