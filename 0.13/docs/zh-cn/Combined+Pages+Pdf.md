---
  title: sbt Reference Manual
  ntags: [scala, sbt]
---

Preface
-------



  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [More-About-Settings]: More-About-Settings.html

sbt ÂÖ•Èó®
========================

sbt ‰ΩøÁî®Â∞ëÊï∞ÁöÑÂá†‰∏™Ê¶ÇÂøµÊù•ÊîØÊíëÂÆÉÁÅµÊ¥ªÂπ∂‰∏îÂº∫Â§ßÁöÑÊûÑÂª∫ÂÆö‰πâ„ÄÇÂÖ∂ÂÆûÊ≤°ÊúâÂ§™Â§öÁöÑÊ¶ÇÂøµÔºå‰ΩÜÊòØ sbt Âπ∂‰∏çÂÆåÂÖ®ÂÉèÂÖ∂‰ªñÁöÑÊûÑÂª∫‰ΩìÁ≥ªÔºåËÄå‰∏îÂ¶ÇÊûú‰Ω†Ê≤°ÊúâÁúãËøáÊñáÊ°£ÁöÑËØùÔºå‰Ω†ÂÅ∂Â∞î *Â∞Ü‰ºö* ÈÅáÂà∞‰∏Ä‰∫õÁªÜËäÇÈóÆÈ¢ò„ÄÇ

ËøôÁØáÂÖ•Èó®ÊåáÂçóË¶ÜÁõñ‰∫Ü‰∏Ä‰∫õ‰Ω†Âú®ÂàõÂª∫ÂíåÁª¥Êä§‰∏Ä‰∏™ sbt ÊûÑÂª∫ÂÆö‰πâÊó∂ÈúÄË¶ÅÁü•ÈÅìÁöÑÊ¶ÇÂøµ„ÄÇ

*Âº∫ÁÉàÂª∫ËÆÆ*ÁúãÂÆåËØ•ÂÖ•Èó®ÊåáÂçóÔºÅ

Â¶ÇÊûú‰Ω†ÈùûÂ∏∏ÊÄ•ÂàáÔºå‰Ω†ÂèØ‰ª•Áõ¥Êé•ËøõÂÖ•‰ª•‰∏ãÂá†Â∞èËäÇ‰∫ÜËß£ÊúÄÈáçË¶ÅÁöÑÊ¶ÇÂøµËÉåÊôØ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]Ôºå[scopes][Scopes]Ôºå[Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings]„ÄÇ
‰ΩÜÊòØÊàë‰ª¨‰∏ç‰øùËØÅË∑≥ËøáËØ•ÊåáÂçó‰∏≠ÁöÑÂÖ∂‰ªñÂ∞èËäÇÊòØ‰∏Ä‰∏™Â•ΩÁöÑÊÉ≥Ê≥ï„ÄÇ

ÊúÄÂ•ΩÊòØÊåâÈ°∫Â∫èÈòÖËØªÔºåÂõ†‰∏∫ËØ•ÊåáÂçó‰∏≠ÂêéÈù¢ÁöÑÂ∞èËäÇÂª∫Á´ãÂú®ÂâçÈù¢‰ªãÁªçÁöÑÊ¶ÇÂøµÁöÑÂü∫Á°Ä‰∏ä„ÄÇ

ÊÑüË∞¢Â∞ùËØï sbt Âπ∂‰∏î *‰ΩìÈ™åÂÖ∂‰∏≠ÁöÑ‰πêË∂£* ÔºÅ


  [Basic-Def]: Basic-Def.html
  [Hello]: Hello.html
  [Running]: Running.html
  [MSI]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.msi
  [Setup-Notes]: ../docs/Setup-Notes.html
  [Mac]: Installing-sbt-on-Mac.html
  [Windows]: Installing-sbt-on-Windows.html
  [Linux]: Installing-sbt-on-Linux.html
  [Manual-Installation]: Manual-Installation.html
  [Activator-Installation]: Activator-Installation.html

ÂÆâË£Ö sbt
--------------

ÂàõÂª∫‰∏Ä‰∏™ sbt Â∑•Á®ãÔºå‰Ω†ÈúÄË¶ÅÁªèËøá‰ª•‰∏ãÂá†Ê≠•Ôºö

-   ÂÆâË£Ö sbt Âπ∂‰∏îÂàõÂª∫ËÑöÊú¨Êù•ËøêË°åÂÆÉ„ÄÇ
-   Âª∫Á´ã‰∏Ä‰∏™ÁÆÄÂçïÁöÑ [hello world][Hello] Â∑•Á®ã
    -   ÂàõÂª∫‰∏Ä‰∏™Â∑•Á®ãÁõÆÂΩïÂπ∂‰∏îÂ∞ÜÊ∫êÊñá‰ª∂ÊîæÂú®ÂÖ∂‰∏≠„ÄÇ
    -   ÂàõÂª∫‰Ω†ÁöÑÊûÑÂª∫ÂÆö‰πâ„ÄÇ
-   ÁªßÁª≠ÂâçÂæÄ [ËøêË°å sbt][Running] Â≠¶‰π†ÊÄé‰πàËøêË°å sbt„ÄÇ
-   ÁÑ∂ÂêéÂâçÂæÄ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] Â≠¶‰π†Êõ¥Â§öÂÖ≥‰∫éÊûÑÂª∫ÁöÑÂÆö‰πâ„ÄÇ


ÊúÄÂêéÔºåÂÆâË£ÖÊ≠•È™§Â∞±ÁÆÄÂåñ‰∏∫‰∏Ä‰∏™ Jar Êñá‰ª∂Âíå‰∏Ä‰∏™ Shell ËÑöÊú¨Ôºå‰ΩÜÊòØÂèñÂÜ≥‰∫é‰Ω†ÁöÑÂπ≥Âè∞ÔºåÊàë‰ª¨Êèê‰æõ‰∫ÜÂ•ΩÂá†ÁßçÊñπÂºèÊù•‰ΩøÂæóÊ≠•È™§‰∏çÊòØÈÇ£‰πàÂçïË∞É„ÄÇ [Mac][Mac]Ôºå[Windows][Windows]Ôºå[Linux][Linux]Ôºå[Typesafe Activator][Activator-Installation]ÔºåÊàñ[ÊâãÂä®ÂÆâË£Ö][Manual-Installation] Êèê‰æõ‰∫ÜÁõ∏Â∫îÁöÑÂÆâË£ÖÊ≠•È™§„ÄÇ

### ÊèêÁ§∫ÂíåÊäÄÂ∑ß

Â¶ÇÊûú‰Ω†Âú®ËøêË°å sbt Êó∂ÈÅáÂà∞‰ªª‰ΩïÈóÆÈ¢òÔºåÊü•Áúã [ÂÆâË£ÖÂª∫ËÆÆ][Setup-Notes] ‰∏≠ÁöÑÁªàÁ´ØÁºñÁ†ÅÔºàterminal encodingÔºâÔºåHTTP ‰ª£ÁêÜÔºåJVM ÂèÇÊï∞„ÄÇ


  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.tgz
  [Manual-Installation]: Manual-Installation.html
  [Activator-Installation]: Activator-Installation.html

Âú® Mac ‰∏äÂÆâË£Ö sbt
---------------------

### ÈÄöËøáÁ¨¨‰∏âÊñπÁöÑÂåÖÂÆâË£Ö

> **Ê≥®ÊÑèÔºö** Á¨¨‰∏âÊñπÁöÑÂåÖÂèØËÉΩÊ≤°ÊúâÊèê‰æõÊúÄÊñ∞ÁöÑÁâàÊú¨ÔºåËØ∑ËÆ∞ÂæóÂ∞Ü‰ªª‰ΩïÈóÆÈ¢òÂèçÈ¶àÁªôËøô‰∫õÂåÖÁõ∏ÂÖ≥ÁöÑÁª¥Êä§ËÄÖ„ÄÇ

#### ÈÄöËøá [Macports](http://macports.org/) ÂÆâË£Ö

```
$ port install sbt
```

#### ÈÄöËøá [Homebrew](http://mxcl.github.com/homebrew/) ÂÆâË£Ö

```
$ brew install sbt
```

### ÈÄöËøáÈÄöÁî®ÁöÑÂåÖÂÆâË£Ö

‰∏ãËΩΩ [ZIP][ZIP] ÊàñËÄÖ [TGZ][TGZ] ÂåÖÂπ∂Ëß£Âéã„ÄÇ

### Typesafe Activator

ÂèÇËßÅ [Typesafe ActivatorÂÆâË£ÖÊåáÂçó][Activator-Installation].

### ÊâãÂä®ÂÆâË£Ö

ÂèÇËßÅÊâãÂä®ÂÆâË£ÖÊåáÂçó„ÄÇ


  [MSI]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.msi
  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.tgz
  [Activator-Installation]: Activator-Installation.html

Âú® Windows ‰∏äÂÆâË£Ö sbt
-------------------------

### ÈÄöËøá Windows ÂÆâË£ÖÂåÖÂÆâË£Ö

‰∏ãËΩΩ [msi ÂÆâË£ÖÂåÖ][MSI] Âπ∂ÂÆâË£Ö„ÄÇ

### ÈÄöËøáÈÄöÁî®ÁöÑÂÆâË£ÖÂåÖÂÆâË£Ö

‰∏ãËΩΩ [ZIP][ZIP] ÊàñËÄÖ [TGZ][TGZ] ÂåÖÂπ∂Ëß£Âéã„ÄÇ

### Typesafe Activator

ÂèÇËßÅ [Typesafe ActivatorÂÆâË£ÖÊåáÂçó][Activator-Installation].

### ÊâãÂä®ÂÆâË£Ö

ÂèÇËßÅÊâãÂä®ÂÆâË£ÖÊåáÂçó„ÄÇ


  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.tgz
  [RPM]: https://dl.bintray.com/sbt/rpm/sbt-0.13.11.rpm
  [DEB]: https://dl.bintray.com/sbt/debian/sbt-0.13.11.deb
  [Manual-Installation]: Manual-Installation.html
  [Activator-Installation]: Activator-Installation.html

Âú® Linux ‰∏äÂÆâË£Ö sbt
-----------------------

### ÈÄöËøáÈÄöÁî®ÁöÑÂÆâË£ÖÂåÖÂÆâË£Ö

‰∏ãËΩΩ [ZIP][ZIP] ÊàñËÄÖ [TGZ][TGZ] ÂåÖÂπ∂Ëß£Âéã„ÄÇ

### UbuntuÂíåÂÖ∂‰ªñÂü∫‰∫éDebianÁöÑÂèëË°åÁâà

[DEB][DEB] ÂÆâË£ÖÂåÖÁî±sbtÂÆòÊñπÊîØÊåÅ„ÄÇ

UbuntuÂíåÂÖ∂‰ªñÂü∫‰∫éDebianÁöÑÂèëË°åÁâà‰ΩøÁî®DEBÊ†ºÂºèÔºå‰ΩÜÈÄöÂ∏∏‰Ω†‰∏ç‰ªéÊú¨Âú∞ÁöÑDEBÊñá‰ª∂ÂÆâË£ÖËΩØ‰ª∂„ÄÇÁõ∏ÂèçÔºå‰ªñ‰ª¨Áî±Á®ãÂ∫èÂåÖÁÆ°ÁêÜÂô®ÂÆâË£ÖÔºåÈÄöËøáÂëΩ‰ª§Ë°åÔºàÂ¶Ç`apt-get`Ôºå`aptitude`ÔºâÊàñÂõæÂΩ¢Áî®Êà∑ÁïåÈù¢ ÔºàÂ¶ÇSynapticÔºâ„ÄÇ
‰ªéÁªàÁ´ØËøêË°å‰∏ãÈù¢ÁöÑÂëΩ‰ª§ÂÆâË£Ö`sbt`Ôºà‰Ω†ÈúÄË¶ÅË∂ÖÁ∫ßÁî®Êà∑ÊùÉÈôêÔºåÂõ†Ê≠§ÈúÄË¶Å`sudo`Ôºâ„ÄÇ


    echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
    sudo apt-get update
    sudo apt-get install sbt

ËΩØ‰ª∂ÂåÖÁÆ°ÁêÜÂô®Â∞ÜÊ£ÄÊü•Ëã•Âπ≤‰∏™Êèê‰æõÂÆâË£ÖËΩØ‰ª∂ÂåÖÁöÑÈÖçÁΩÆÂ≠òÂÇ®Â∫ì„ÄÇsbt ‰∫åËøõÂà∂Êñá‰ª∂ÂèëÂ∏ÉÂà∞ BintrayÔºåËÄåBintray Êñπ‰æøÂú∞Êèê‰æõ‰∫ÜAPTËµÑÊ∫êÂ∫ì„ÄÇ‰Ω†Âè™ÈúÄË¶ÅÂ∞ÜÂ≠òÂÇ®Â∫ìÊ∑ªÂä†Âà∞‰Ω†ÁöÑËΩØ‰ª∂ÂåÖÁÆ°ÁêÜÂô®Â∞ÜÊ£ÄÊü•ÁöÑÂú∞Êñπ„ÄÇ
‰∏ÄÊó¶ÂÆâË£Ö‰∫Ü`sbt`Ôºå‰Ω†‰ºöËÉΩÂ§üÂú®`aptitude`ÊàñSynapticÁöÑÂåÖÁºìÂ≠òÊõ¥Êñ∞ÂêéÁÆ°ÁêÜ‰∫Ü„ÄÇ‰Ω†‰πüÂ∫îËØ•ËÉΩÂ§üÁúãÂà∞Ê∑ªÂä†ÁöÑÂ≠òÂÇ®Â∫ìÔºåÂú®Â∫ïÈÉ®ÁöÑ``System Settings -> Software & Updates -> Other Software``Ôºö

![Ubuntu Software & Updates Screenshot](../files/ubuntu-sources.png "Ubuntu Software & Updates Screenshot")

### Á∫¢Â∏Ω‰ºÅ‰∏öÁâàLinuxÂíåÂÖ∂‰ªñÂü∫‰∫éRPMÁöÑÂèëË°åÁâà

[RPM][RPM] ÂÆâË£ÖÂåÖÁî±sbtÂÆòÊñπÊîØÊåÅ„ÄÇ

Á∫¢Â∏Ω‰ºÅ‰∏öÁâàLinuxÂíåÂÖ∂‰ªñÂü∫‰∫éRPMÁöÑÂèëË°åÁâà‰ΩøÁî®RPMÊ†ºÂºè„ÄÇ
‰ªéÁªàÁ´ØËøêË°å‰∏ãÈù¢ÁöÑÂëΩ‰ª§ÂÆâË£Ö`sbt`Ôºà‰Ω†ÈúÄË¶ÅË∂ÖÁ∫ßÁî®Êà∑ÊùÉÈôêÔºåÂõ†Ê≠§ÈúÄË¶Å`sudo`Ôºâ„ÄÇ

    curl https://bintray.com/sbt/rpm/rpm > bintray-sbt-rpm.repo
    sudo mv bintray-sbt-rpm.repo /etc/yum.repos.d/
    sudo yum install sbt

sbt ‰∫åËøõÂà∂Êñá‰ª∂ÂèëÂ∏ÉÂà∞ BintrayÔºåËÄåBintray Êñπ‰æøÂú∞Êèê‰æõ‰∫ÜRPMËµÑÊ∫êÂ∫ì„ÄÇ‰Ω†Âè™ÈúÄË¶ÅÂ∞ÜÂ≠òÂÇ®Â∫ìÊ∑ªÂä†Âà∞‰Ω†ÁöÑËΩØ‰ª∂ÂåÖÁÆ°ÁêÜÂô®Â∞ÜÊ£ÄÊü•ÁöÑÂú∞Êñπ„ÄÇ

> **Ê≥®ÊÑèÔºö** ËØ∑Â∞Ü‰ªª‰ΩïÂíåËøô‰∏§‰∏™ÂåÖÁõ∏ÂÖ≥ÁöÑÈóÆÈ¢òÂèçÈ¶àÂà∞ [sbt-launcher-package](https://github.com/sbt/sbt-launcher-package) È°πÁõÆ„ÄÇ

### Gentoo

Âú® sbt ÂÆòÊñπÁöÑÊ†ë‰∏≠Ê≤°ÊúâÊèê‰æõ ebuild„ÄÇ ‰ΩÜÊòØÊúâ‰ªé‰∫åËøõÂà∂ÂêàÂπ∂ sbt ÁöÑ [ebuilds](https://github.com/whiter4bbit/overlays/tree/master/dev-java/sbt-bin)„ÄÇ
ÂèØ‰ª•ÈÄöËøá‰ª•‰∏ãÊñπÂºè‰ªéËøô‰∫õ ebuilds ‰∏≠ÂêàÂπ∂ sbtÔºö

    mkdir -p /usr/local/portage && cd /usr/local/portage
    git clone git://github.com/whiter4bbit/overlays.git
    echo "PORTDIR_OVERLAY=$PORTDIR_OVERLAY /usr/local/portage/overlays" >> /etc/make.conf
    emerge sbt-bin

> **Ê≥®ÊÑèÔºö** ËØ∑Â∞Ü‰ªª‰ΩïÂíå ebuild Áõ∏ÂÖ≥ÁöÑÈóÆÈ¢òÂèçÈ¶àÂà∞ [ËøôÈáå](https://github.com/whiter4bbit/overlays/issues)„ÄÇ

### Typesafe Activator

ÂèÇËßÅ [Typesafe ActivatorÂÆâË£ÖÊåáÂçó][Activator-Installation].

### ÊâãÂä®ÂÆâË£Ö

ÂèÇËßÅ[ÊâãÂä®ÂÆâË£ÖÊåáÂçó][Manual-Installation]„ÄÇ


  [sbt-launch.jar]: https://repo.typesafe.com/typesafe/ivy-releases/org.scala-sbt/sbt-launch/0.13.11/sbt-launch.jar

ÊâãÂä®ÂÆâË£Ö sbt
-----------------------

ÊâãÂä®ÂÆâË£ÖÈúÄË¶Å‰∏ãËΩΩ [sbt-launch.jar][sbt-launch.jar]ÔºåÁÑ∂ÂêéÂàõÂª∫ËÑöÊú¨Êù•ËøêË°åÂÆÉ„ÄÇ

### Unix

Â∞Ü [sbt-launch.jar][sbt-launch.jar] Êñá‰ª∂ÊîæÂú® `~/bin` ‰∏ã„ÄÇ
ÂàõÂª∫‰∏Ä‰∏™ËÑöÊú¨Êù•ËøêË°åËøô‰∏™ jarÔºåËÑöÊú¨ `~/bin/sbt` ÂÜÖÂÆπÂ¶Ç‰∏ã:

```
#!/bin/bash
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
java $SBT_OPTS -jar `Ë∑ØÂæÑÂêç $0`/sbt-launch.jar "$@"
```

ÁªôËØ•ËÑöÊú¨Ëµã‰∫àÂèØÊâßË°åÊùÉÈôêÔºö

```
$ chmod u+x ~/bin/sbt
```

### Windows

Âú® Windows ‰∏äÊâãÂä®ÂÆâË£ÖÁöÑÊ≠•È™§Ê†πÊçÆÊòØÂê¶‰ΩøÁî® Cygwin ÂíåÁªàÁ´ØÁöÑ‰∏çÂêåËÄå‰∏çÂêå„ÄÇ Âú®‰ªª‰ΩïÊÉÖÂÜµ‰∏ãÔºåÂ∞Ü batch Êñá‰ª∂ÊàñËÄÖËÑöÊú¨Êñá‰ª∂Ê∑ªÂä†Âà∞ path ‰∏≠Ôºå‰ΩøÂæóÂèØ‰ª•Âú®‰ªªÊÑèË∑ØÂæÑ‰∏ãÁöÑÂëΩ‰ª§Ë°å‰∏≠Êï≤ `sbt` Êù•ËøêË°å sbt„ÄÇ
ÂêåÊó∂ÔºåÂ¶ÇÊûúÈúÄË¶ÅÁöÑËØùÔºåÊ†πÊçÆÊú∫Âô®Ë∞ÉËäÇ‰∏Ä‰∏ã JVM ÁöÑÂèÇÊï∞ËÆæÁΩÆ„ÄÇ

#### Non-Cygwin

ÂØπ‰∫é‰ΩøÁî®Ê†áÂáÜ Windows ÁªàÁ´ØÁöÑÈùû Cygwin Áî®Êà∑ÔºåÂàõÂª∫Â¶Ç `sbt.bat` ÁöÑ batch Êñá‰ª∂Ôºö

```
set SCRIPT_DIR=%~dp0
java -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M -jar "%SCRIPT_DIR%sbt-launch.jar" %*
```

ÁÑ∂ÂêéÂ∞Ü‰∏ãËΩΩÂ•ΩÁöÑ [sbt-launch.jar][sbt-launch.jar] ÊîæÂú®Âíå `sbt.bat` Áõ∏ÂêåÁöÑË∑ØÂæÑ‰∏ã„ÄÇ

#### Cygwin ÂíåÊ†áÂáÜÁöÑ Windows ÁªàÁ´Ø

Â¶ÇÊûú‰ΩøÁî® Cygwin ÂíåÊ†áÂáÜÁöÑ Windows ÁªàÁ´ØÔºåÂàõÂª∫Â¶Ç‰∏ãÁöÑ bash ËÑöÊú¨ `~/bin/sbt`Ôºö

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
java $SBT_OPTS -jar sbt-launch.jar "$@"
```

Áî®‰∏ãËΩΩÂ•ΩÁöÑ [sbt-launch.jar][sbt-launch.jar] Êñá‰ª∂ÁöÑË∑ØÂæÑÊõøÊç¢Êéâ sbt-launch.jarÔºåÂ¶ÇÊûúÈúÄË¶ÅÁöÑËØùËÆ∞Âæó‰ΩøÁî® cygpath„ÄÇÁªôËÑöÊú¨Ëµã‰∫àÂèØÊâßË°åÊùÉÈôêÔºö

```
$ chmod u+x ~/bin/sbt
```

#### Cygwin Âíå Ansi ÁªàÁ´Ø

Â¶ÇÊûú‰ΩøÁî® Cygwin Âíå Ansi ÁªàÁ´ØÔºàÊîØÊåÅ Ansi ËΩ¨‰πâÂ∫èÂàóÂπ∂‰∏îÂèØ‰ª•ÈÄöËøá stty ÈÖçÁΩÆÔºâÔºåÂàõÂª∫‰∏Ä‰∏™ bash Êñá‰ª∂ `~/bin/sbt`Ôºö

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
stty -icanon min 1 -echo > /dev/null 2>&1
java -Djline.terminal=jline.UnixTerminal -Dsbt.cygwin=true $SBT_OPTS -jar sbt-launch.jar "$@"
stty icanon echo > /dev/null 2>&1
```

Áî®‰∏ãËΩΩÂ•ΩÁöÑ [sbt-launch.jar][sbt-launch.jar] Êñá‰ª∂ÁöÑË∑ØÂæÑÊõøÊç¢Êéâ sbt-launch.jarÔºåÂ¶ÇÊûúÈúÄË¶ÅÁöÑËØùËÆ∞Âæó‰ΩøÁî® cygpath„ÄÇÁªôËÑöÊú¨Ëµã‰∫àÂèØÊâßË°åÊùÉÈôêÔºö

```
$ chmod u+x ~/bin/sbt
```

‰∏∫‰∫ÜËÆ©ÈÄÄÊ†ºÔºàbackspaceÔºâËÉΩÂ§üÂú® Scala ÁöÑÊéßÂà∂Âè∞‰∏≠Ê≠£Â∏∏Â∑•‰ΩúÔºå‰Ω†ÈúÄË¶ÅÁ°Æ‰øù‰Ω†ÁöÑÈÄÄÊ†ºÈîÆÂèëÈÄÅÁöÑÊòØÂà†Èô§Á¨¶Ôºàerase characterÔºâÔºåÂíåÂú® stty ‰∏≠ÈÖçÁΩÆÁöÑ‰∏ÄÊ†∑„ÄÇÂØπ‰∫éÈªòËÆ§ÁöÑ cygwin ÁªàÁ´ØÔºàminttyÔºâÔºå
Âú®ËÆæÁΩÆÈÄâÈ°π -> ÈîÆ‰∏≠ÔºåÂ¶ÇÊûú‰Ω†ÁöÑÂà†Èô§Á¨¶ÊòØ cygwin ÈªòËÆ§ÁöÑ ^HÔºå‚ÄúÈÄÄÊ†ºÂèëÈÄÅ ^H‚Äù ÈúÄË¶ÅË¢´ÈÄâ‰∏≠„ÄÇ

> **Ê≥®ÊÑèÔºö** ÂΩìÂâçÂÖ∂‰ªñÁöÑÈÖçÁΩÆËøò‰∏çÊîØÊåÅ„ÄÇËØ∑ [Êèê‰∫§ pull request](https://github.com/sbt/sbt/blob/0.13/CONTRIBUTING.md) ÂÆûÁé∞ÊàñËÄÖÊèèËø∞Â∑≤ÁªèÊîØÊåÅÁöÑÈÖçÁΩÆ„ÄÇ


  [Manual-Installation]: Manual-Installation.html

ÂÆâË£Ö Typesafe Activator (ÂåÖÂê´sbt)
---------------------

Typesafe Activator ÊòØsbtÁöÑ‰∏Ä‰∏™Ëá™ÂÆö‰πâÁâàÊú¨ÔºåÂÆÉÊ∑ªÂä†‰∏§‰∏™È¢ùÂ§ñÁöÑÂëΩ‰ª§`activator ui`Âíå`activator new`„ÄÇ`activator`ÂëΩ‰ª§ÁÆÄË®Ä‰πãÂ∞±ÊòØsbtÁöÑ‰∏Ä‰∏™Ë∂ÖÈõÜ„ÄÇ

‰Ω†ÂèØ‰ª•‰ªé [typesafe.com](http://typesafe.com/platform/getstarted)Ëé∑ÂæóActivator„ÄÇ

If you see a command line such as `sbt ~test` in the documentation, you will also be able to type `activator ~test`. Any Activator project can be opened in sbt and vice versa because Activator is "sbt powered."

Â¶ÇÊûú‰Ω†Âú®ÊñáÊ°£‰∏≠ÁúãÂà∞‰∏Ä‰∏™ÂëΩ‰ª§Ë°åÂ¶Ç`sbt ~test`Ôºå‰Ω†‰πüÂ∞ÜÂèØ‰ª•ÈîÆÂÖ•`activator ~test`„ÄÇ‰ªªÊÑè‰∏Ä‰∏™ActivatorÂ∑•Á®ãËÉΩÈÉΩÂèØ‰ª•Áî®sbtÊâìÂºÄÔºåÂèç‰πã‰∫¶ÁÑ∂ÔºåÂõ†‰∏∫ActivatorÊòØ"Âü∫‰∫ésbt"ÁöÑ„ÄÇ

Activator‰∏ãËΩΩÂåÖÊã¨`activator`ËÑöÊú¨Âíå‰∏Ä‰∏™`activator-launch.jar`ÔºåÂàÜÂà´Áõ∏ÂΩì‰∫é[ÊâãÂä®ÂÆâË£Ö][Manual-Installation]ÊâÄËø∞ÁöÑsbtËÑöÊú¨ÂíåÂêØÂä®jar„ÄÇËøôÈáåActivatorÂíå‰∏Ä‰∏™[ÊâãÂä®ÂÆâË£Ö][Manual-Installation]ÁöÑsbt‰πãÈó¥ÁöÑÂ∑ÆÂºÇÂ¶Ç‰∏ãÔºö

 * ÈîÆÂÖ•‰∏çÂ∏¶ÂèÇÊï∞ÁöÑ`activator`Â∞ÜÂ∞ùËØïÁåúÊµãÊòØÂê¶ËøõÂÖ•`activator shell`Êàñ`activator ui`Ê®°ÂºèÔºõÈîÆÂÖ•`activator shell`Êù•ÊòéÁ°ÆËøõÂÖ•ÂëΩ‰ª§Ë°åÊèêÁ§∫Á¨¶„ÄÇ
 * `activator new`ÂÖÅËÆ∏‰Ω†‰ªé‰∏Ä‰∏™Â§ßÁöÑ[È°πÁõÆÊ®°ÊùøÁõÆÂΩï](https://typesafe.com/activator/templates)‰∏≠ÂàõÂª∫È°πÁõÆÔºå‰æãÂ¶Ç`play-scala`Ê®°ÊùøÊòØ‰∏Ä‰∏™[Play Framework](http://playframework.com)ScalaÂ∫îÁî®Á®ãÂ∫èÈ™®Êû∂
 * `activator ui`ÂêØÂä®‰∏ÄÁßçÂø´ÈÄüÂêØÂä®Áî®Êà∑ÁïåÈù¢ÔºåÂèØÁî®‰∫é‰ªéÊ®°ÊùøÁõÆÂΩïÊµèËßàÊïôÁ®ãÔºàÂú®ÁõÆÂΩï‰∏≠ÁöÑËÆ∏Â§öÊ®°ÊùøÊúâÈô™ÂêåÊïôÁ®ãÔºâ„ÄÇ

ActivatorÊèê‰æõ‰∏§Áßç‰∏ãËΩΩÔºõÂ∞èÁöÑ"minimal"‰∏ãËΩΩÂåÖÂè™ÂåÖÂê´ÂåÖË£ÖËÑöÊú¨ÂíåÂêØÂä®jarÔºåËÄåÂ§ßÁöÑ"full"‰∏ãËΩΩÂåÖÂê´È¢ÑË£ÖÁöÑIvyÁºìÂ≠òÔºåÂåÖÊã¨ScalaÔºåAkkaÂíåPlayÊ°ÜÊû∂„ÄÇ

  [Basic-Def]: Basic-Def.html
  [Setup]: Setup.html

Hello, World
------------

Ëøô‰∏ÄÂ∞èËäÇÂÅáËÆæ‰Ω†Â∑≤Áªè [ÂÆâË£Ö sbt][Setup] ‰∫Ü„ÄÇ

### ÂàõÂª∫‰∏Ä‰∏™ÊúâÊ∫êÁ†ÅÁöÑÈ°πÁõÆÁõÆÂΩï

‰∏Ä‰∏™ÂêàÊ≥ïÁöÑ sbt È°πÁõÆÂèØ‰ª•ÊòØ‰∏Ä‰∏™ÂåÖÂê´Âçï‰∏™Ê∫êÁ†ÅÊñá‰ª∂ÁöÑÁõÆÂΩï„ÄÇ
Â∞ùËØïÂàõÂª∫‰∏Ä‰∏™ `hello` ÁõÆÂΩïÔºåÂåÖÂê´ÂÜÖÂÆπÂ¶Ç‰∏ãÁöÑÊ∫êÁ†ÅÊñá‰ª∂ `hw.scala`Ôºö

```scala
object Hi {
  def main(args: Array[String]) = println("Hi!")
}
```

Áé∞Âú®Âú® `hello` ÁõÆÂΩï‰∏ãÂêØÂä® sbtÔºåÁÑ∂ÂêéÊâßË°å `run` ÂëΩ‰ª§ËøõÂÖ•Âà∞ sbt ÁöÑ‰∫§‰∫íÂºèÂëΩ‰ª§Ë°å„ÄÇÂú® Linux ÊàñËÄÖ OS X ‰∏äÁöÑÂëΩ‰ª§ÂèØËÉΩÊòØËøôÊ†∑Ôºö

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

Âú®Ëøô‰∏™‰æãÂ≠ê‰∏≠Ôºåsbt ÂÆåÂÖ®ÊåâÁÖßÁ∫¶ÂÆöÂ∑•‰Ωú„ÄÇsbt Â∞Ü‰ºöËá™Âä®ÊâæÂà∞‰ª•‰∏ãÂÜÖÂÆπÔºö

-   È°πÁõÆÊ†πÁõÆÂΩï‰∏ãÁöÑÊ∫êÊñá‰ª∂
-   `src/main/scala` Êàñ `src/main/java` ‰∏≠ÁöÑÊ∫êÊñá‰ª∂
-   `src/test/scala` Êàñ `src/test/java` ‰∏≠ÁöÑÊµãËØïÊñá‰ª∂
-   `src/main/resources` Êàñ `src/test/resources` ‰∏≠ÁöÑÊï∞ÊçÆÊñá‰ª∂
-   `lib` ‰∏≠ÁöÑ jar Êñá‰ª∂

ÈªòËÆ§ÊÉÖÂÜµ‰∏ãÔºåsbt ‰ºöÁî®ÂíåÂêØÂä®Ëá™Ë∫´Áõ∏ÂêåÁâàÊú¨ÁöÑ Scala Êù•ÊûÑÂª∫È°πÁõÆ„ÄÇ
‰Ω†ÂèØ‰ª•ÈÄöËøáÊâßË°å `sbt run` Êù•ËøêË°åÈ°πÁõÆÊàñËÄÖÈÄöËøá `sbt console` ËøõÂÖ• [Scala REPL](http://www.scala-lang.org/node/2097)„ÄÇ`sbt console` Â∑≤ÁªèÂ∏Æ‰Ω†
ËÆæÁΩÆÂ•ΩÈ°πÁõÆÁöÑ classpathÔºåÊâÄ‰ª•‰Ω†ÂèØ‰ª•Ê†πÊçÆÈ°πÁõÆÁöÑ‰ª£Á†ÅÂ∞ùËØïÂÆûÈôÖÁöÑ Scala Á§∫‰æã„ÄÇ

### ÊûÑÂª∫ÂÆö‰πâ

Â§ßÂ§öÊï∞È°πÁõÆÈúÄË¶Å‰∏Ä‰∫õÊâãÂä®ËÆæÁΩÆ„ÄÇÂü∫Êú¨ÁöÑÊûÑÂª∫ËÆæÁΩÆÈÉΩÊîæÂú®È°πÁõÆÊ†πÁõÆÂΩïÁöÑ `build.sbt` Êñá‰ª∂Èáå„ÄÇ
‰æãÂ¶ÇÔºåÂ¶ÇÊûú‰Ω†ÁöÑÈ°πÁõÆÊîæÂú® `hello` ‰∏ãÔºåÂú® `hello/build.sbt` ‰∏≠ÂèØ‰ª•ËøôÊ†∑ÂÜôÔºö

```scala
lazy val root = (project in file(".")).
  settings(
    name := "hello",
    version := "1.0",
    scalaVersion := "2.11.7"
  )
```

Âú® [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] ËøôËäÇ‰∏≠‰Ω†Â∞Ü‰ºöÂ≠¶Âà∞Êõ¥Â§öÂÖ≥‰∫é
Â¶Ç‰ΩïÁºñÂÜô `build.sbt` ËÑöÊú¨ÁöÑ‰∏úË•ø„ÄÇ

Â¶ÇÊûú‰Ω†ÂáÜÂ§áÂ∞Ü‰Ω†ÁöÑÈ°πÁõÆÊâìÂåÖÊàê‰∏Ä‰∏™ jar ÂåÖÔºåÂú® `build.sbt` ‰∏≠Ëá≥Â∞ëË¶ÅÂÜô‰∏ä name Âíå version„ÄÇ

### ËÆæÁΩÆ sbt ÁâàÊú¨

‰Ω†ÂèØ‰ª•ÈÄöËøáÂàõÂª∫ `hello/project/build.properties` Êñá‰ª∂Âº∫Âà∂ÊåáÂÆö‰∏Ä‰∏™ÁâàÊú¨ÁöÑ sbt„ÄÇÂú®Ëøô‰∏™Êñá‰ª∂ÈáåÔºåÁºñÂÜôÂ¶Ç‰∏ãÂÜÖÂÆπÊù•Âº∫Âà∂‰ΩøÁî® 0.13.11Ôºö

```
sbt.version=0.13.11
```

sbt Âú®‰∏çÂêåÁöÑ release ÁâàÊú¨‰∏≠ÊòØ 99% ÂÖºÂÆπÁöÑ„ÄÇ‰ΩÜÊòØÂú® `project/build.properties` Êñá‰ª∂‰∏≠ËÆæÁΩÆ sbt ÁöÑÁâàÊú¨‰ªçÁÑ∂ËÉΩÈÅøÂÖç‰∏Ä‰∫õÊΩúÂú®ÁöÑÊ∑∑Ê∑Ü„ÄÇ


  [Hello]: Hello.html
  [Setup]: Setup.html
  [Organizing-Build]: Organizing-Build.html

ÁõÆÂΩïÁªìÊûÑ
-------------------

Ëøô‰∏ÄÂ∞èËäÇÂÅáËÆæ‰Ω†Â∑≤Áªè [ÂÆâË£Ö sbt][Setup] Âπ∂‰∏îÂ∑≤ÁªèÈòÖËØªËøá [Hello, World][Hello] ‰∫Ü„ÄÇ

### Âü∫Á°ÄÁõÆÂΩï

Âú® sbt ÁöÑÊúØËØ≠ÈáåÔºå‚ÄúÂü∫Á°ÄÁõÆÂΩï‚ÄùÊòØÂåÖÂê´È°πÁõÆÁöÑÁõÆÂΩï„ÄÇÊâÄ‰ª•ÔºåÂ¶ÇÊûú‰Ω†ÂàõÂª∫‰∫Ü‰∏Ä‰∏™Âíå [Hello, World][Hello] ‰∏ÄÊ†∑ÁöÑÈ°πÁõÆ `hello` ÔºåÂåÖÂê´ `hello/build.sbt` Âíå `hello/hw.scala`Ôºå `hello` Â∞±ÊòØÂü∫Á°ÄÁõÆÂΩï„ÄÇ

### Ê∫ê‰ª£Á†Å

Ê∫ê‰ª£Á†ÅÂèØ‰ª•ÂÉè `hello/hw.scala` ‰∏ÄÊ†∑ÁöÑÊîæÂú®È°πÁõÆÁöÑÂü∫Á°ÄÁõÆÂΩï‰∏≠„ÄÇÁÑ∂ËÄåÔºåÂ§ßÂ§öÊï∞‰∫∫‰∏ç‰ºöÂú®ÁúüÂÆûÁöÑÈ°πÁõÆ‰∏≠ËøôÊ†∑ÂÅöÔºåÂõ†‰∏∫Â§™ÊùÇ‰π±‰∫Ü„ÄÇ
sbt Âíå [Maven](https://maven.apache.org/) ÁöÑÈªòËÆ§ÁöÑÊ∫êÊñá‰ª∂ÁöÑÁõÆÂΩïÁªìÊûÑÊòØ‰∏ÄÊ†∑ÁöÑÔºàÊâÄÊúâÁöÑË∑ØÂæÑÈÉΩÊòØÁõ∏ÂØπ‰∫éÂü∫Á°ÄÁõÆÂΩïÁöÑÔºâÔºö

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

`src/` ‰∏≠ÂÖ∂‰ªñÁöÑÁõÆÂΩïÂ∞ÜË¢´ÂøΩÁï•„ÄÇËÄå‰∏îÔºåÊâÄÊúâÁöÑÈöêËóèÁõÆÂΩï‰πü‰ºöË¢´ÂøΩÁï•„ÄÇ

### sbt ÊûÑÂª∫ÂÆö‰πâÊñá‰ª∂

‰Ω†Â∑≤ÁªèÂú®È°πÁõÆÁöÑÂü∫Á°ÄÁõÆÂΩï‰∏≠ÁúãÂà∞‰∫Ü `build.sbt`„ÄÇÂÖ∂‰ªñÁöÑ sbt Êñá‰ª∂Âú® `project` Â≠êÁõÆÂΩï‰∏≠„ÄÇ
`project` ÁõÆÂΩïÂèØ‰ª•ÂåÖÂê´ `.scala` Êñá‰ª∂ÔºåËøô‰∫õÊñá‰ª∂ÊúÄÂêé‰ºöÂíå `.sbt` Êñá‰ª∂ÂêàÂπ∂ÂÖ±ÂêåÊûÑÊàêÂÆåÊï¥ÁöÑÊûÑÂª∫ÂÆö‰πâ„ÄÇÊÉ≥Áü•ÈÅìÊõ¥Â§öËØ∑ÂèÇËßÅ [ÁªÑÁªáÊûÑÂª∫][Organizing-Build]„ÄÇ

```
build.sbt
project/
  Build.scala
```

‰Ω†ÂèØËÉΩÂú® `project/` ‰∏≠‰πüÁúãÂà∞‰∫Ü `.sbt` Êñá‰ª∂Ôºå‰ΩÜÊòØÂÆÉ‰∏çÁ≠âÂêå‰∫éÈ°πÁõÆÂü∫Á°ÄÁõÆÂΩï‰∏≠ÁöÑ `.sbt` Êñá‰ª∂„ÄÇËøôÂ∞ÜÂú® [Á®çÂêé][Organizing-Build] Ëß£ÈáäÔºåÂõ†‰∏∫È¶ñÂÖà‰Ω†ÈúÄË¶Å‰∏Ä‰∫õËÉåÊôØÁü•ËØÜ„ÄÇ

### ÊûÑÂª∫‰∫ßÂìÅ

ÊûÑÂª∫Âá∫Êù•ÁöÑÊñá‰ª∂ÔºàÁºñËØëÁöÑ classesÔºåÊâìÂåÖÁöÑ jarsÔºåÊâòÁÆ°Êñá‰ª∂Ôºåcaches ÂíåÊñáÊ°£ÔºâÈªòËÆ§ÂÜôÂú® `target` ÁõÆÂΩï‰∏≠„ÄÇ

### ÈÖçÁΩÆÁâàÊú¨ÁÆ°ÁêÜ

‰Ω†ÁöÑ `.gitignore` Êñá‰ª∂ÔºàÊàñËÄÖÂÖ∂‰ªñÁâàÊú¨ÊéßÂà∂Á≥ªÁªüÁ≠âÂêåÁöÑÊñá‰ª∂ÔºâÂ∫îËØ•ÂåÖÂê´Ôºö

```
target/
```

Ê≥®ÊÑèÔºöËøôÈáåÂêéÈù¢ÈúÄË¶ÅË∑ü‰∏Ä‰∏™ `/` ÔºàÂè™ÂåπÈÖçÁõÆÂΩïÔºâ‰∏îÂâçÈù¢‰∏çËÉΩÊúâ `/` ÔºàÈô§‰∫ÜÂåπÈÖçÊôÆÈÄöÁöÑ `target/` ËøòÂåπÈÖç `project/target/` Ôºâ„ÄÇ

  [Hello]: Hello.html
  [Setup]: Setup.html
  [Triggered-Execution]: ../docs/Triggered-Execution.html
  [Command-Line-Reference]: ../docs/Command-Line-Reference.html

ËøêË°å
-------

Ëøô‰∏ÄÂ∞èËäÇÂ∞ÜËÆ≤Ëø∞Âú®‰Ω†Âª∫Á´ãÂ•ΩÈ°πÁõÆ‰πãÂêéÂ¶Ç‰ΩïÂéª‰ΩøÁî® sbt„ÄÇÂÅáËÆæ‰Ω†Â∑≤Áªè [ÂÆâË£Ö sbt][Setup] Âπ∂‰∏îÂ∑≤ÁªèÂàõÂª∫Ëøá [Hello, World][Hello] È°πÁõÆÊàñÂÖ∂‰ªñÈ°πÁõÆ„ÄÇ

### ‰∫§‰∫íÊ®°Âºè

Âú®‰Ω†ÁöÑÈ°πÁõÆÁõÆÂΩï‰∏ãËøêË°å sbt ‰∏çË∑ü‰ªª‰ΩïÂèÇÊï∞Ôºö

```
$ sbt
```

ÊâßË°å sbt ‰∏çË∑ü‰ªª‰ΩïÂëΩ‰ª§Ë°åÂèÇÊï∞Â∞Ü‰ºöËøõÂÖ•‰∫§‰∫íÊ®°Âºè„ÄÇ‰∫§‰∫íÊ®°ÂºèÊúâ‰∏Ä‰∏™ÂëΩ‰ª§Ë°åÔºàÂê´Êúâ tab Ëá™Âä®Ë°•ÂÖ®ÂäüËÉΩÂíåÂéÜÂè≤ËÆ∞ÂΩïÔºâ„ÄÇ

‰æãÂ¶ÇÔºåÂú® sbt ÂëΩ‰ª§Ë°åÈáåËæìÂÖ• `compile`Ôºö

```
> compile
```

ÂÜçÊ¨° `compile`ÔºåÂè™ÈúÄË¶ÅÊåâÂêë‰∏äÁöÑÊñπÂêëÈîÆÔºåÁÑ∂ÂêéÂõûËΩ¶„ÄÇ
ËæìÂÖ• `run` Êù•ÂêØÂä®Á®ãÂ∫è„ÄÇ
ËæìÂÖ• `exit` ÊàñËÄÖ Ctrl+D ÔºàUnixÔºâÊàñËÄÖ Ctrl+Z ÔºàWindowsÔºâÂèØ‰ª•ÈÄÄÂá∫‰∫§‰∫íÊ®°Âºè„ÄÇ

### ÊâπÂ§ÑÁêÜÊ®°Âºè

‰Ω†‰πüÂèØ‰ª•Áî®ÊâπÂ§ÑÁêÜÊ®°ÂºèÊù•ËøêË°å sbtÔºåÂèØ‰ª•‰ª•Á©∫Ê†º‰∏∫ÂàÜÈöîÁ¨¶ÊåáÂÆöÂèÇÊï∞„ÄÇÂØπ‰∫éÊé•ÂèóÂèÇÊï∞ÁöÑ sbt ÂëΩ‰ª§ÔºåÂ∞ÜÂëΩ‰ª§ÂíåÂèÇÊï∞Áî®ÂºïÂè∑ÂºïËµ∑Êù•‰∏ÄËµ∑‰º†Áªô sbt„ÄÇ‰æãÂ¶ÇÔºö

```
$ sbt clean compile "testOnly TestA TestB"
```

Âú®Ëøô‰∏™‰æãÂ≠ê‰∏≠Ôºå`testOnly` Êúâ‰∏§‰∏™ÂèÇÊï∞ `TestA` Âíå `TestB`„ÄÇËøô‰∏™ÂëΩ‰ª§‰ºöÊåâÈ°∫Â∫èÊâßË°åÔºà`clean`Ôºå `compile`Ôºå ÁÑ∂Âêé `testOnly`Ôºâ„ÄÇ

### ÊåÅÁª≠ÊûÑÂª∫ÂíåÊµãËØï

‰∏∫‰∫ÜÂä†Âø´ÁºñËæë-ÁºñËØë-ÊµãËØïÂæ™ÁéØÔºå‰Ω†ÂèØ‰ª•ËÆ© sbt Âú®‰Ω†‰øùÂ≠òÊ∫êÊñá‰ª∂Êó∂Ëá™Âä®ÈáçÊñ∞ÁºñËØëÊàñËÄÖË∑ëÊµãËØï„ÄÇ
Âú®ÂëΩ‰ª§ÂâçÈù¢Âä†‰∏äÂâçÁºÄ `~` ÂêéÔºåÊØèÂΩìÊúâ‰∏Ä‰∏™ÊàñÂ§ö‰∏™Ê∫êÊñá‰ª∂ÂèëÁîüÂèòÂåñÊó∂Â∞±‰ºöËá™Âä®ËøêË°åËØ•ÂëΩ‰ª§„ÄÇ‰æãÂ¶ÇÔºåÂú®‰∫§‰∫íÊ®°Âºè‰∏ãÂ∞ùËØïÔºö

```
> ~ compile
```

ÊåâÂõûËΩ¶ÈîÆÂÅúÊ≠¢ÁõëËßÜÂèòÂåñ„ÄÇ
‰Ω†ÂèØ‰ª•Âú®‰∫§‰∫íÊ®°ÂºèÊàñËÄÖÊâπÂ§ÑÁêÜÊ®°Âºè‰∏ã‰ΩøÁî® `~` ÂâçÁºÄ„ÄÇ
ÂèÇËßÅ [Ëß¶ÂèëÊâßË°å][Triggered-Execution] Ëé∑ÂèñËØ¶ÁªÜ‰ø°ÊÅØ„ÄÇ

### Â∏∏Áî®ÂëΩ‰ª§

‰∏ãÈù¢ÊòØ‰∏Ä‰∫õÈùûÂ∏∏Â∏∏Áî®ÁöÑÁöÑ sbt ÂëΩ‰ª§„ÄÇÊõ¥Âä†ËØ¶ÁªÜÁöÑÂàóË°®ËØ∑ÂèÇËßÅ [ÂëΩ‰ª§Ë°åÂèÇËÄÉ][Command-Line-Reference]„ÄÇ

<table>
  <tr>
    <td><tt>clean</tt></td>
    <td>Âà†Èô§ÊâÄÊúâÁîüÊàêÁöÑÊñá‰ª∂ ÔºàÂú® <tt>target</tt> ÁõÆÂΩï‰∏ãÔºâ„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>compile</tt></td>
    <td>ÁºñËØëÊ∫êÊñá‰ª∂ÔºàÂú® <tt>src/main/scala</tt> Âíå
   <tt>src/main/java</tt> ÁõÆÂΩï‰∏ãÔºâ„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>test</tt></td>
    <td>ÁºñËØëÂíåËøêË°åÊâÄÊúâÊµãËØï„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>console</tt></td>
    <td>ËøõÂÖ•Âà∞‰∏Ä‰∏™ÂåÖÂê´ÊâÄÊúâÁºñËØëÁöÑÊñá‰ª∂ÂíåÊâÄÊúâ‰æùËµñÁöÑ classpath ÁöÑ Scala Ëß£ÊûêÂô®„ÄÇËæìÂÖ• <tt>:quit</tt>Ôºå
   Ctrl+D ÔºàUnixÔºâÔºåÊàñËÄÖ Ctrl+Z ÔºàWindowsÔºâ ËøîÂõûÂà∞ sbt„ÄÇ</td>
  </tr>
  <tr>
    <td><nobr><tt>run &lt;ÂèÇÊï∞&gt;*</tt></nobr></td>
    <td>Âú®Âíå sbt ÊâÄÂ§ÑÁöÑÂêå‰∏Ä‰∏™ËôöÊãüÊú∫‰∏äÊâßË°åÈ°πÁõÆÁöÑ main class„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>package</tt></td>
    <td>Â∞Ü <tt>src/main/resources</tt> ‰∏ãÁöÑÊñá‰ª∂Âíå <tt>src/main/scala</tt> ‰ª•Âèä <tt>src/main/java</tt> ‰∏≠ÁºñËØëÂá∫Êù•ÁöÑ class Êñá‰ª∂ÊâìÂåÖÊàê‰∏Ä‰∏™ jar Êñá‰ª∂„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>help &lt;ÂëΩ‰ª§&gt;</tt></td>
    <td>ÊòæÁ§∫ÊåáÂÆöÁöÑÂëΩ‰ª§ÁöÑËØ¶ÁªÜÂ∏ÆÂä©‰ø°ÊÅØ„ÄÇÂ¶ÇÊûúÊ≤°ÊúâÊåáÂÆöÂëΩ‰ª§Ôºå‰ºöÊòæÁ§∫ÊâÄÊúâÂëΩ‰ª§ÁöÑÁÆÄ‰ªã„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>reload</tt></td>
    <td>ÈáçÊñ∞Âä†ËΩΩÊûÑÂª∫ÂÆö‰πâÔºà<tt>build.sbt</tt>Ôºå <tt>project/*.scala</tt>Ôºå <tt>project/*.sbt</tt> Ëøô‰∫õÊñá‰ª∂‰∏≠ÂÆö‰πâÁöÑÂÜÖÂÆπ)„ÄÇÂú®‰øÆÊîπ‰∫ÜÊûÑÂª∫ÂÆö‰πâÊñá‰ª∂‰πãÂêéÈúÄË¶ÅÈáçÊñ∞Âä†ËΩΩ„ÄÇ</td>
  </tr>
</table>

### Tab Ëá™Âä®Ë°•ÂÖ®

‰∫§‰∫íÊ®°Âºè‰∏ãÂåÖÊã¨Á©∫ÁöÑÂëΩ‰ª§Ë°åÈÉΩÊúâ tab Ëá™Âä®Ë°•ÂÖ®„ÄÇsbt ÁöÑ‰∏Ä‰∏™ÁâπÂà´ÁöÑÁ∫¶ÂÆöÊòØÔºåÂΩìÊåâ tab ÈîÆ‰∏ÄÊ¨°ÁöÑÊó∂ÂÄôÂèØËÉΩÂè™‰ºöÊòæÁ§∫ÊâÄÊúâÂëΩ‰ª§‰∏≠ÊúÄÊúâÂèØËÉΩÁöÑËá™Âä®Ë°•ÂÖ®ÁöÑÂ≠êÈõÜÔºåÂΩìÊåâÂ§öÊ¨°Êó∂Êâç‰ºöÊòæÁ§∫ËØ¶ÁªÜÁöÑÈÄâÈ°π„ÄÇ

### ÂëΩ‰ª§ÂéÜÂè≤ËÆ∞ÂΩï

‰∫§‰∫íÊ®°ÂºèÊúâÂéÜÂè≤ËÆ∞ÂΩïÔºåÂç≥‰Ωø‰Ω†ÈÄÄÂá∫ sbt ÁÑ∂ÂêéÈáçÊñ∞ËøõÂÖ•„ÄÇÊúÄÁÆÄÂçïÁöÑËÆøÈóÆÂéÜÂè≤ËÆ∞ÂΩïÁöÑÊñπÊ≥ïÊó∂Áî®‰∏äÊñπÂêëÈîÆ„ÄÇËøòÊîØÊåÅ‰ª•‰∏ã‰∏Ä‰∫õÂëΩ‰ª§Ôºö

<table>
  <tr>
    <td><tt>!</tt></td>
    <td>ÊòæÁ§∫ÂéÜÂè≤ËÆ∞ÂΩïÂëΩ‰ª§Â∏ÆÂä©„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>!!</tt></td>
    <td>ÈáçÊñ∞ÊâßË°åÂâç‰∏ÄÊù°ÂëΩ‰ª§„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>!:</tt></td>
    <td>ÊòæÁ§∫ÊâÄÊúâ‰πãÂâçÁöÑÂëΩ‰ª§„ÄÇ</td>
  </tr>  
  <tr>
    <td><tt>!:n</tt></td>
    <td>ÊòæÁ§∫‰πãÂâçÁöÑÊúÄÂêé <tt>n</tt> Êù°ÂëΩ‰ª§„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>!n</tt></td>
    <td>ÊâßË°å <tt>!:</tt> ÂëΩ‰ª§ÊòæÁ§∫ÁöÑÁªìÊûú‰∏≠‰∏ãÊ†á‰∏∫ <tt>n</tt> ÁöÑÂëΩ‰ª§„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>!-n</tt></td>
    <td>ÊâßË°å‰ªéËØ•ÂëΩ‰ª§ÂæÄÂâçÊï∞Á¨¨ n Êù°ÂëΩ‰ª§„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>!string</tt></td>
    <td>ÊâßË°åÊúÄËøëÊâßË°åËøáÁöÑ‰ª• string ÊâìÂ§¥ÁöÑÂëΩ‰ª§„ÄÇ</td>
  </tr>
  <tr>
    <td><tt>!?string</tt></td>
    <td>ÊâßË°åÊúÄËøëÊâßË°åËøáÁöÑÂåÖÂê´ string ÁöÑÂëΩ‰ª§„ÄÇ</td>
  </tr>
</table>


  [More-About-Settings]: More-About-Settings.html
  [Full-Def]: Full-Def.html
  [Running]: Running.html
  [Library-Dependencies]: Library-Dependencies.html
  [Input-Tasks]: ../docs/Input-Tasks.html

.sbt ÊûÑÂª∫ÂÆö‰πâ
---------------------

Ëøô‰∏ÄÂ∞èËäÇÊèèËø∞ sbt ÊûÑÂª∫ÂÆö‰πâÔºåÂåÖÂê´‰∏Ä‰∫õ‚ÄúÁêÜËÆ∫‚ÄùÂíå `build.sbt` ÁöÑËØ≠Ê≥ï„ÄÇÂÅáËÆæ‰Ω†Â∑≤ÁªèÁü•ÈÅìÂ¶Ç‰Ωï [‰ΩøÁî® sbt][Running] Âπ∂‰∏îÈòÖËØªËøáÂÖ•Èó®ÊåáÂçóÂâçÈù¢ÁöÑÂá†Â∞èËäÇ„ÄÇ

### ÊûÑÂª∫ÂÆö‰πâÁöÑ‰∏âÁßçÈ£éÊ†º

ÊûÑÂª∫ÂÆö‰πâÊúâ‰∏âÁßçÈ£éÊ†º„ÄÇ

1. Â§öÂ∑•Á®ã `.sbt` ÊûÑÂª∫ÂÆö‰πâ
2. bare `.sbt` ÊûÑÂª∫ÂÆö‰πâ
3. `.scala` ÊûÑÂª∫ÂÆö‰πâ

Ëøô‰∏ÄÂ∞èËäÇÂ∞ÜËÆ®ËÆ∫ÊúÄÊñ∞ÁöÑÂ§öÂ∑•Á®ã.sbt ÊûÑÂª∫ÂÆö‰πâÔºåÂÆÉÁªìÂêà‰∫Ü‰∏§ÁßçËÄÅÈ£éÊ†ºÁöÑ‰ºòÁÇπÔºåÂπ∂‰∏îÈÄÇÁî®‰∫éÊâÄÊúâÊÉÖÂÜµ„ÄÇÂΩì‰Ω†Â§ÑÁêÜÊñ∞ÁöÑÊûÑÂª∫ÁöÑÊó∂ÂÄôÂèØËÉΩ‰ºöÈÅáËßÅÂè¶Â§ñ‰∏§‰∏™ËÄÅÁöÑÈ£éÊ†º„ÄÇÂèÇËßÅ[bare .sbt ÊûÑÂª∫ÂÆö‰πâ][Bare-Def]Âíå[.scala ÊûÑÂª∫ÂÆö‰πâ][Full-Def]ÔºàÂú®ÂÖ•Èó®ÊåáÂçóÁöÑÂêéÈù¢ÈÉ®ÂàÜÔºâ‰∫ÜËß£Êõ¥Â§öÂÖ∂ÂÆÉÈ£éÊ†ºÁöÑÂÜÖÂÆπ„ÄÇ

Ê≠§Â§ñÔºåÊûÑÂª∫ÂÆö‰πâÂèØ‰ª•ÂåÖÂê´‰ª•`.scala`ÁªìÂ∞æÁöÑÊñá‰ª∂Ôºå‰Ωç‰∫éÂü∫ÁõÆÂΩïÁöÑ`project/`Êñá‰ª∂Â§π‰∏ãÔºåÊù•ÂÆö‰πâÂ∏∏Áî®ÁöÑÂáΩÊï∞ÂíåÂÄº„ÄÇ

### ‰ªÄ‰πàÊòØÊûÑÂª∫ÂÆö‰πâÔºü

sbt Âú®Ê£ÄÊü•È°πÁõÆÂíåÂ§ÑÁêÜÊûÑÂª∫ÂÆö‰πâÊñá‰ª∂‰πãÂêéÔºåÂΩ¢Êàê‰∏Ä‰∏™`Project`ÂÆö‰πâ„ÄÇ

Âú®`build.sbt`‰∏≠‰Ω†ÂèØ‰ª•ÂàõÂª∫‰∏Ä‰∏™Êú¨ÁõÆÂΩïÁöÑ[Project](../../api/sbt/Project.html)Â∑•Á®ãÂÆö‰πâÔºåÂÉèËøôÊ†∑Ôºö

```scala
lazy val root = (project in file("."))
```

ÊØè‰∏Ä‰∏™Â∑•Á®ãÂØπÂ∫î‰∏Ä‰∏™‰∏çÂèØÂèòÁöÑÊò†Â∞ÑË°®Ôºàimmutable mapÔºâÔºà‰∏Ä‰∫õÈîÆÂÄºÂØπÁöÑÈõÜÂêàÔºâÊù•ÊèèËø∞Â∑•Á®ã„ÄÇ

‰æãÂ¶ÇÔºå‰∏Ä‰∏™Âè´ÂÅö `name` ÁöÑ keyÔºåÊò†Â∞ÑÂà∞‰∏Ä‰∏™Â≠óÁ¨¶‰∏≤ÁöÑÂÄºÔºåÂç≥È°πÁõÆÁöÑÂêçÁß∞„ÄÇ

*ÊûÑÂª∫ÂÆö‰πâÊñá‰ª∂‰∏ç‰ºöÁõ¥Êé•ÂΩ±Âìç sbt ÁöÑ map„ÄÇ*

ÂèñËÄå‰ª£‰πãÁöÑÊòØÔºåÊûÑÂª∫ÂÆö‰πâ‰ºöÂàõÂª∫‰∏Ä‰∏™Á±ªÂûã‰∏∫ `Setting[T]` ÁöÑÂ∫ûÂ§ßÁöÑÂØπË±°ÂàóË°®Ôºå`T` ÊòØÊò†Â∞ÑË°®‰∏≠ÂÄºÔºàvalueÔºâÁöÑÁ±ªÂûã„ÄÇ‰∏Ä‰∏™ `Setting` ÊèèËø∞ÁöÑÊòØ‰∏ÄÊ¨° *ÂØπÊò†Â∞ÑË°®ÔºàmapÔºâÁöÑËΩ¨Êç¢*Ôºå
ÂÉèÂ¢ûÂä†‰∏Ä‰∏™Êñ∞ÁöÑÈîÆÂÄºÂØπÊàñËÄÖËøΩÂä†Âà∞‰∏Ä‰∏™Â∑≤ÁªèÂ≠òÂú®ÁöÑ value ‰∏ä„ÄÇÔºàÂú®ÂáΩÊï∞ÂºèÁºñÁ®ãÂÖ≥‰∫é‰ΩøÁî®‰∏çÂèØÂèòÊï∞ÊçÆÁªìÊûÑÂíåÂÄºÁöÑÊÄùÊÉ≥‰∏≠Ôºå‰∏ÄÊ¨°ËΩ¨Êç¢ËøîÂõû‰∏Ä‰∏™Êñ∞ÁöÑmap ‚Äî‚Äî ÂÆÉ‰∏ç‰ºöÂ∞±Âú∞Êõ¥Êñ∞ÊóßÁöÑ map„ÄÇÔºâ

‰Ω†ÂèØ‰ª•‰∏∫Êú¨ÁõÆÂΩï‰∏ãÁöÑÈ°πÁõÆÂêçÁß∞ÂÖ≥ËÅî‰∏Ä‰∏™ `Setting[String]`ÔºåÂÉèËøôÊ†∑Ôºö

```scala
lazy val root = (project in file(".")).
  settings(
    name := "hello"
  )
```

Ëøô‰∏™ `Setting[String]` ‰ºöÈÄöËøáÂ¢ûÂä†ÔºàÊàñËÄÖÊõøÊç¢Ôºâ`name`ÈîÆÁöÑÂÄº‰∏∫ `"hello"` Êù•ÂØπ map ÂÅö‰∏ÄÊ¨°ËΩ¨Êç¢„ÄÇËΩ¨Êç¢ÂêéÁöÑ map Êàê‰∏∫ sbt Êñ∞ÁöÑ map„ÄÇ

‰∏∫‰∫ÜÂàõÂª∫Ëøô‰∏™ mapÔºåsbt ‰ºöÂÖàÂØπÊâÄÊúâËÆæÁΩÆÁöÑÂàóË°®ËøõË°åÊéíÂ∫èÔºåËøôÊ†∑ÂØπÂêå‰∏Ä‰∏™ key ÁöÑÊîπÂèòÂèØ‰ª•ÊîæÂú®‰∏ÄËµ∑Êìç‰ΩúÔºåËÄå‰∏îÂ¶ÇÊûú value ‰æùËµñ‰∫éÂÖ∂‰ªñÁöÑ keyÔºå‰ºöÂÖàÂ§ÑÁêÜÂÖ∂‰ªñË¢´‰æùËµñÁöÑ key„ÄÇ
ÁÑ∂ÂêéÔºå sbt ‰ºöÂØπ `Settings` ÊéíÂ•ΩÂ∫èÁöÑÂàóË°®ËøõË°åÈÅçÂéÜÔºåÊåâÈ°∫Â∫èÊääÊØè‰∏ÄÈ°πÈÉΩÂ∫îÁî®Âà∞ map ‰∏≠„ÄÇ

ÊÄªÁªìÔºö‰∏Ä‰∏™ÊûÑÂª∫ÂÆö‰πâÊòØ‰∏Ä‰∏™`Project`ÔºåÊã•Êúâ‰∏Ä‰∏™Á±ªÂûã‰∏∫ `Setting[T]` ÁöÑÂàóË°®Ôºå`Setting[T]` ÊòØ‰ºöÂΩ±ÂìçÂà∞ sbt ‰øùÂ≠òÈîÆÂÄºÂØπÁöÑ map ÁöÑ‰∏ÄÁßçËΩ¨Êç¢Ôºå`T` ÊòØÊØè‰∏Ä‰∏™ value ÁöÑÁ±ªÂûã„ÄÇ

### Â¶Ç‰ΩïÂú® build.sbt ‰∏≠ÂÆö‰πâËÆæÁΩÆ

`build.sbt` ÂÆö‰πâ‰∫Ü‰∏Ä‰∏™ `Project`ÔºåÂÆÉÊåÅÊúâ‰∏Ä‰∏™Âêç‰∏∫`settings`ÁöÑscalaË°®ËææÂºèÂàóË°®„ÄÇ

‰∏ãÈù¢ÊòØ‰∏Ä‰∏™‰æãÂ≠êÔºö

```scala
lazy val commonSettings = Seq(
  organization := "com.example",
  version := "0.1.0",
  scalaVersion := "2.11.7"
)

lazy val root = (project in file(".")).
  settings(commonSettings: _*).
  settings(
    name := "hello"
  )
```

ÊØè‰∏ÄÈ°π `Setting` ÈÉΩÂÆö‰πâ‰∏∫‰∏Ä‰∏™ Scala Ë°®ËææÂºè„ÄÇÂú® `settings` ‰∏≠ÁöÑË°®ËææÂºèÊòØÁõ∏‰∫íÁã¨Á´ãÁöÑÔºåËÄå‰∏îÂÆÉ‰ª¨‰ªÖ‰ªÖÊòØË°®ËææÂºèÔºå‰∏çÊòØÂÆåÊï¥ÁöÑ Scala ËØ≠Âè•„ÄÇ

Ëøô‰∫õË°®ËææÂºèÂèØ‰ª•Áî® `val`Ôºå`lazy val`Ôºå`def` Â£∞Êòé„ÄÇ
`build.sbt` ‰∏çÂÖÅËÆ∏‰ΩøÁî®È°∂Â±ÇÁöÑ `object` Âíå `class`„ÄÇÂÆÉ‰ª¨ÂøÖÈ°ªÂÜôÂà∞ `project/` ÁõÆÂΩï‰∏ã‰Ωú‰∏∫ÂÆåÊï¥ÁöÑ Scala Ê∫êÊñá‰ª∂„ÄÇ

Âú®Â∑¶ËæπÔºå`name`Ôºå `version` Âíå `scalaVersion` ÈÉΩÊòØ *ÈîÆÔºàkeysÔºâ*„ÄÇ‰∏Ä‰∏™ÈîÆÔºàkeyÔºâÂ∞±ÊòØ‰∏Ä‰∏™ `SettingKey[T]`Ôºå`TaskKey[T]` ÊàñËÄÖ `InputKey[T]` ÁöÑÂÆû‰æãÔºå`T` ÊòØÊúüÊúõÁöÑ value ÁöÑÁ±ªÂûã„ÄÇ
key ÁöÑÁ±ªÂà´Â∞ÜÂú®‰∏ãÈù¢ËÆ≤Ëß£„ÄÇ

ÈîÆÔºàKeysÔºâÊúâ‰∏Ä‰∏™ËøîÂõû `Setting[T]` ÁöÑ `:=` ÊñπÊ≥ï„ÄÇ‰Ω†ÂèØ‰ª•ÂÉè‰ΩøÁî® Java ÁöÑËØ≠Ê≥ï‰∏ÄÊ†∑Ë∞ÉÁî®ËØ•ÊñπÊ≥ïÔºö

```scala
lazy val root = (project in file(".")).
  settings(
    name.:=("hello")
  )
```

‰ΩÜÊòØÔºåScala ÂÖÅËÆ∏ `name := "hello"` ËøôÊ†∑Ë∞ÉÁî®ÔºàÂú® Scala ‰∏≠Ôºå‰∏Ä‰∏™Âè™ÊúâÂçï‰∏™ÂèÇÊï∞ÁöÑÊñπÊ≥ïÂèØ‰ª•‰ΩøÁî®‰ªª‰Ωï‰∏ÄÁßçËØ≠Ê≥ïË∞ÉÁî®Ôºâ„ÄÇ

ÈîÆÔºàkeyÔºâ`name` ‰∏äÁöÑ `:=` ÊñπÊ≥ï‰ºöËøîÂõû‰∏Ä‰∏™ `Setting`ÔºåÂú®ËøôÈáåÁâπÊåá `Setting[String]`„ÄÇ`String` ‰πüÂá∫Áé∞Âú® `name` Ëá™Ë∫´ÁöÑÁ±ªÂûã `SettingKey[String]` ‰∏≠„ÄÇ
Âú®Ëøô‰∏™‰æãÂ≠ê‰∏≠ÔºåËøîÂõûÁöÑ `Setting[String]` ÊòØ‰∏Ä‰∏™Âú® sbt ÁöÑ map ‰∏≠Â¢ûÂä†ÊàñËÄÖÊõøÊç¢ÈîÆ‰∏∫ `name` ÁöÑËΩ¨Êç¢ÔºåËµãÂÄº‰∏∫ `"hello"`„ÄÇ

Â¶ÇÊûú‰Ω†‰ΩøÁî®‰∫ÜÈîôËØØÁ±ªÂûãÁöÑ valueÔºåÊûÑÂª∫ÂÆö‰πâ‰ºöÁºñËØë‰∏çÈÄöËøáÔºö

```scala
lazy val root = (project in file(".")).
  settings(
    name := 42  // ÁºñËØë‰∏çÈÄöËøá
  )
```

### ÈîÆÔºàKeysÔºâ

#### Á±ªÂûãÔºàTypesÔºâ

Êúâ‰∏âÁßçÁ±ªÂûãÁöÑ keyÔºö

- `SettingKey[T]`Ôºö‰∏Ä‰∏™ key ÂØπÂ∫î‰∏Ä‰∏™Âè™ËÆ°ÁÆó‰∏ÄÊ¨°ÁöÑ valueÔºàËøô‰∏™ÂÄºÂú®Âä†ËΩΩÈ°πÁõÆÁöÑÊó∂ÂÄôËÆ°ÁÆóÔºåÁÑ∂Âêé‰∏ÄÁõ¥‰øùÂ≠òÁùÄÔºâ„ÄÇ
- `TaskKey[T]`Ôºö‰∏Ä‰∏™ key ÂØπÂ∫î‰∏Ä‰∏™Áß∞‰πã‰∏∫ *task* ÁöÑ valueÔºåÊØèÊ¨°ÈÉΩ‰ºöÈáçÊñ∞ËÆ°ÁÆóÔºåÂèØËÉΩÂ≠òÂú®ÊΩúÂú®ÁöÑÂâØ‰ΩúÁî®„ÄÇ
- `InputKey[T]`Ôºö‰∏Ä‰∏™ key ÂØπÂ∫î‰∏Ä‰∏™ÂèØ‰ª•Êé•Êî∂ÂëΩ‰ª§Ë°åÂèÇÊï∞ÁöÑ task„ÄÇËØ¶ÁªÜÂÜÖÂÆπÂèÇËßÅ [Input Tasks][Input-Tasks]„ÄÇ

#### ÂÜÖÁΩÆÁöÑ Keys

ÂÜÖÁΩÆÁöÑ keys ÂÆûÈôÖ‰∏äÊòØÂØπË±° [Keys](../../sxr/sbt/Keys.scala.html) ÁöÑÂ≠óÊÆµ„ÄÇ`build.sbt` ‰ºöÈöêÂºèÂåÖÂê´ `import sbt.Keys._`ÔºåÊâÄ‰ª•ÂèØ‰ª•ÈÄöËøá `name` ÂèñÂà∞ `sbt.Keys.name`„ÄÇ

#### Ëá™ÂÆö‰πâ Keys

ÂèØ‰ª•ÈÄöËøáÂÆÉ‰ª¨ÂêÑËá™ÁöÑÂàõÂª∫ÊñπÊ≥ïÔºö`settingKey`Ôºå`taskKey` Âíå `inputKey` ÂàõÂª∫Ëá™ÂÆö‰πâ keys„ÄÇÊØè‰∏™ÊñπÊ≥ïÈÉΩÊúüÂæÖ key Âíå value ÁöÑÁ±ªÂûã‰ª•Âèä‰∏ÄÊÆµÊèèËø∞„ÄÇ
key ÁöÑÂêçÁß∞ÂèñËá™‰∫éËµãÁªô `val` ÂèòÈáèÁöÑÂÄº„ÄÇ‰æãÂ¶ÇÔºåÁªô‰∏Ä‰∏™Êñ∞ÁöÑ task `hello` ÂÆö‰πâ‰∏Ä‰∏™ keyÔºå

```scala
lazy val hello = taskKey[Unit]("‰∏Ä‰∏™ task Á§∫‰æã")
```

ËøôÈáåÊàë‰ª¨Áî®‰∫ãÂÆûËØ¥Êòé‰∫Ü `.sbt` Êñá‰ª∂Èô§‰∫ÜÂèØ‰ª•ÂåÖÂê´ËÆæÁΩÆÔºàsettingsÔºâÂ§ñÔºåËøòÂèØ‰ª•ÂåÖÂê´ `val`s Âíå `def`s„ÄÇÊâÄÊúâËøô‰∫õÂÆö‰πâÈÉΩ‰ºöÂú®ËÆæÁΩÆÔºàsettingsÔºâ‰πãÂâçË¢´ËÆ°ÁÆóËÄåË∑üÂÆÉ‰ª¨Âú®Êñá‰ª∂ÈáåÂÆö‰πâÁöÑ‰ΩçÁΩÆÊó†ÂÖ≥„ÄÇ
`val`s Âíå `def`s ÂøÖÈ°ª‰ª•Á©∫Ë°åÂíåËÆæÁΩÆÔºàsettingsÔºâÂàÜÈöî„ÄÇ

> **Ê≥®ÊÑèÔºö** ÈÄöÂ∏∏Ôºå‰ΩøÁî® lazy val ËÄå‰∏çÊòØ val ÂèØ‰ª•ÈÅøÂÖçÂàùÂßãÂåñÈ°∫Â∫èÁöÑÈóÆÈ¢ò„ÄÇ

#### Task vs Setting keys

`TaskKey[T]` ÊòØÁî®Êù•ÂÆö‰πâ *task* ÁöÑ„ÄÇTasks Â∞±ÊòØÂÉè `compile` ÊàñËÄÖ `package` ËøôÊ†∑ÁöÑÊìç‰Ωú„ÄÇÂÆÉ‰ª¨ÂèØËÉΩËøîÂõû `Unit`Ôºà`Unit` Âú® Scala ‰∏≠Ë°®Á§∫ `void`ÔºâÔºåÊàñËÄÖÂèØËÉΩËøîÂõû task Áõ∏ÂÖ≥ÁöÑËøîÂõûÂÄºÔºå
‰æãÂ¶Ç `package` Â∞±ÊòØ‰∏Ä‰∏™Á±ªÂûã‰∏∫ `TaskKey[File]` ÁöÑ taskÔºå ÂÆÉÁöÑËøîÂõûÂÄºÊòØÂÖ∂ÁîüÊàêÁöÑ jar Êñá‰ª∂„ÄÇ

ÊØèÂΩì‰Ω†ÊâßË°å‰∏Ä‰∏™ taskÔºå‰æãÂ¶ÇÂú® sbt ÂëΩ‰ª§Ë°å‰∏≠ËæìÂÖ• `compile`Ôºåsbt Â∞Ü‰ºöÂØπÊ∂âÂèäÂà∞ÁöÑÊØè‰∏™ task ÊÅ∞Â•ΩÊâßË°å‰∏ÄÊ¨°„ÄÇ

sbt ÊèèËø∞È°πÁõÆÁöÑ map ‰ºöÂ∞ÜËÆæÁΩÆÔºàsettingÔºâ‰øùÂ≠ò‰∏∫Âõ∫ÂÆöÁöÑÂ≠óÁ¨¶‰∏≤ÔºåÊØîÂ¶ÇÂÉè nameÔºõ‰ΩÜÊòØÂÆÉ‰∏çÂæó‰∏ç‰øùÂ≠ò task ÁöÑÂèØÊâßË°å‰ª£Á†ÅÔºåÊØîÂ¶Ç `compile` -- Âç≥‰ΩøËøôÊÆµÂèØÊâßË°åÁöÑ‰ª£Á†ÅÊúÄÁªàËøîÂõû‰∏Ä‰∏™Â≠óÁ¨¶‰∏≤ÔºåÂÆÉ‰πüÈúÄË¶ÅÊØèÊ¨°ÈÉΩÈáçÊñ∞ÊâßË°å„ÄÇ

*‰∏Ä‰∏™ÁªôÂÆöÁöÑ key ÊÄªÊòØÊåáÂêë‰∏Ä‰∏™ task ÊàñËÄÖ ‰∏Ä‰∏™ÊôÆÈÄöÁöÑËÆæÁΩÆÔºàsettingÔºâ„ÄÇ* ‰πüÂ∞±ÊòØËØ¥Ôºå"taskiness" (ÊòØÂê¶ÊØèÊ¨°ÈÉΩÈáçÊñ∞ÊâßË°åÔºâÊòØ key ÁöÑ‰∏Ä‰∏™Â±ûÊÄßÔºàpropertyÔºâÔºåËÄå‰∏çÊòØ‰∏Ä‰∏™ÂÄºÔºàvalueÔºâ„ÄÇ

### ÂÆö‰πâ tasks Âíå settings

‰Ω†ÂèØ‰ª•‰ΩøÁî® `:=` Áªô‰∏Ä‰∏™ setting Ëµã‰∏Ä‰∏™ÂÄºÊàñËÄÖÁªô‰∏Ä‰∏™ task Ëµã‰∏ÄÁßçËÆ°ÁÆó„ÄÇÂØπ‰∫é settingÔºåËøô‰∏™ÂÄºÔºàvalueÔºâÂè™‰ºöÂú®È°πÁõÆÂä†ËΩΩÁöÑÊó∂ÂÄôÊâßË°å‰∏ÄÊ¨°„ÄÇÂØπ‰∫é taskÔºåËøô‰∏™ËÆ°ÁÆó‰ºöÂú® task ÊØèÊ¨°ÊâßË°åÁöÑÊó∂ÂÄôÈáçÊñ∞ËÆ°ÁÆó„ÄÇ

‰æãÂ¶ÇÔºåÂÆûÁé∞ÂâçÈù¢‰∏ÄÈÉ®ÂàÜ‰∏≠ÁöÑ `hello` taskÔºö

```scala
lazy val hello = taskKey[Unit]("An example task")

lazy val root = (project in file(".")).
  settings(
    hello := { println("Hello!") }
  )
```

Êàë‰ª¨Â∑≤ÁªèÂú®ÂÆö‰πâÈ°πÁõÆÂêçÁß∞Êó∂ËßÅËøáÂÆö‰πâ settings ÁöÑ‰æãÂ≠êÔºå

```scala
lazy val root = (project in file(".")).
  settings(
    name := "hello"
  )
```

#### Tasks Âíå Settings ÁöÑÁ±ªÂûã

‰ªéÁ±ªÂûãÁ≥ªÁªüÁöÑËßíÂ∫¶Êù•ËÆ≤ÔºåÈÄöËøá task key ÂàõÂª∫ÁöÑ `Setting` ÂíåÈÄöËøá setting key ÂàõÂª∫ÁöÑ `Setting` ÊúâÁ®çÂæÆ‰∏çÂêå„ÄÇ`taskKey := 42` ÁöÑÁ±ªÂûãÊòØ `Setting[Task[T]]` ËÄå `settingKey := 42`
ÁöÑÁ±ªÂûãÊòØ `Setting[T]`„ÄÇËøôÂØπ‰∫éÁªùÂ§ßÂ§öÊï∞ÊÉÖÂÜµÂπ∂Êó†ÂΩ±ÂìçÔºõtask key Âú®ÊâßË°åÁöÑÊó∂ÂÄô‰ªçÁÑ∂ÂàõÂª∫‰∏Ä‰∏™Á±ªÂûã‰∏∫ `T` ÁöÑÂÄºÔºàvalueÔºâ„ÄÇ

`T` Á±ªÂûãÂíå `Task[T]` Á±ªÂûãÁöÑ‰∏çÂêåÁöÑÂê´‰πâÊòØÔºö‰∏Ä‰∏™ setting ‰∏çËÉΩ‰æùËµñ‰∏Ä‰∏™ taskÔºåÂõ†‰∏∫‰∏Ä‰∏™ setting Âè™‰ºöÂú®È°πÁõÆÂä†ËΩΩÁöÑÊó∂ÂÄôËÆ°ÁÆó‰∏ÄÊ¨°Ôºå‰∏ç‰ºöÈáçÊñ∞ËÆ°ÁÆó„ÄÇ[Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings] ÁöÑÂÜÖÂÆπÂæàÂø´Â∞±‰ºöËÆ≤Âà∞„ÄÇ

### sbt ‰∫§‰∫íÊ®°Âºè‰∏≠ÁöÑ Keys

Âú® sbt ÁöÑ‰∫§‰∫íÊ®°Âºè‰∏ãÔºå‰Ω†ÂèØ‰ª•ËæìÂÖ•‰ªª‰Ωï task ÁöÑ name Êù•ÊâßË°åËØ• task„ÄÇËøôÂ∞±ÊòØ‰∏∫‰ªÄ‰πàËæìÂÖ• `compile` Â∞±ÊòØÊâßË°å `compile` task„ÄÇ`compile` Â∞±ÊòØËØ• task ÁöÑ key„ÄÇ

Â¶ÇÊûú‰Ω†ËæìÂÖ•ÁöÑÊòØ‰∏Ä‰∏™ setting key ÁöÑ name ËÄå‰∏çÊòØ‰∏Ä‰∏™ task key ÁöÑ nameÔºåsetting key ÁöÑÂÄºÔºàvalueÔºâ‰ºöÊòæÁ§∫Âá∫Êù•„ÄÇËæìÂÖ•‰∏Ä‰∏™ task key ÁöÑ name ‰ºöÊâßË°åËØ• task ‰ΩÜÊòØ‰∏ç‰ºöÊòæÁ§∫ÊâßË°åÁªìÊûúÁöÑÂÄºÔºàvalueÔºâÔºõËæìÂÖ• `show <task name>` ËÄå‰∏çÊòØ
ÁÆÄÂçïÁöÑ `<task name>` ÂèØ‰ª•ÁúãÂà∞ËØ• task ÁöÑÊâßË°åÁªìÊûú„ÄÇÂØπ‰∫é key name ÁöÑ‰∏Ä‰∏™Á∫¶ÂÆöÂ∞±ÊòØ‰ΩøÁî® `camelCase`ÔºåËøôÊ†∑ÂëΩ‰ª§Ë°åÈáåÁöÑ name Âíå Scala ÁöÑÊ†áËØÜÁ¨¶Â∞±‰∏ÄÊ†∑‰∫Ü„ÄÇ

‰∫ÜËß£Êõ¥Â§öÂÖ≥‰∫é‰ªª‰Ωï key ÂÜÖÂÆπÔºåÂèØ‰ª•Âú® sbt ‰∫§‰∫íÊ®°ÂºèÁöÑÂëΩ‰ª§Ë°åÈáåËæìÂÖ• `inspect <keyname>`„ÄÇËôΩÁÑ∂ `inspect` ÊòæÁ§∫ÁöÑ‰∏Ä‰∫õ‰ø°ÊÅØÊ≤°ÊúâÊÑè‰πâÔºå‰ΩÜÊòØÂú®È°∂ÈÉ®‰ºöÊòæÁ§∫ setting ÁöÑ value ÁöÑÁ±ªÂûãÂíå setting ÁöÑÁÆÄ‰ªã„ÄÇ

### build.sbt ‰∏≠ÁöÑÂºïÂÖ•

‰Ω†ÂèØ‰ª•Â∞Ü `import` ËØ≠Âè•ÊîæÂú® `build.sbt` ÁöÑÈ°∂ÈÉ®ÔºõÂÆÉ‰ª¨ÂèØ‰ª•‰∏çÁî®Á©∫Ë°åÂàÜÈöî„ÄÇ

‰∏ãÈù¢ÊòØ‰∏Ä‰∫õÈªòËÆ§ÁöÑÂºïÂÖ•Ôºö

```scala
import sbt._
import Process._
import Keys._
```

ÔºàÂè¶Â§ñÔºåÂ¶ÇÊûú‰Ω†Êúâ [.scala Êñá‰ª∂][Full-Def]ÔºåËøô‰∫õÊñá‰ª∂‰∏≠‰ªª‰Ωï `Build` ÂØπË±°ÊàñËÄÖ `Plugin` ÂØπË±°ÈáåÁöÑÂÜÖÂÆπÈÉΩ‰ºöË¢´ÂºïÂÖ•„ÄÇÊõ¥Â§öÂÖ≥‰∫éËøô‰∫õÁöÑÂÜÖÂÆπÊîæÂú® [.scala ÊûÑÂª∫ÂÆö‰πâ][Full-Def]„ÄÇÔºâ

### Ê∑ªÂä†‰æùËµñÂ∫ì

Êúâ‰∏§ÁßçÊñπÂºèÊ∑ªÂä†Á¨¨‰∏âÊñπÁöÑ‰æùËµñ„ÄÇ‰∏ÄÁßçÊòØÂ∞Ü jar Êñá‰ª∂ ÊîæÂÖ• `lib/`ÔºàÈùûÊâòÁÆ°ÁöÑ‰æùËµñÔºâ‰∏≠ÔºåÂè¶‰∏ÄÁßçÊòØÂú® `build.sbt` ‰∏≠Ê∑ªÂä†ÊâòÁÆ°ÁöÑ‰æùËµñÔºåÂÉèËøôÊ†∑Ôºö

```scala
val derby = "org.apache.derby" % "derby" % "10.4.1.3"

lazy val commonSettings = Seq(
  organization := "com.example",
  version := "0.1.0",
  scalaVersion := "2.11.7"
)

lazy val root = (project in file(".")).
  settings(commonSettings: _*).
  settings(
    name := "hello",
    libraryDependencies += derby
  )
```

Â∞±ÊòØÂÉèËøôÊ†∑Ê∑ªÂä†ÁâàÊú¨‰∏∫ 10.4.1.3 ÁöÑ Apache Derby Â∫ì‰Ωú‰∏∫‰æùËµñ„ÄÇ

key `libraryDependencies` ÂåÖÂê´‰∏§‰∏™ÊñπÈù¢ÁöÑÂ§çÊùÇÊÄßÔºö`+=` ÊñπÊ≥ïËÄå‰∏çÊòØ `:=`ÔºåÁ¨¨‰∫å‰∏™Â∞±ÊòØ `%` ÊñπÊ≥ï„ÄÇ`+=` ÊñπÊ≥ïÊòØÂ∞ÜÊñ∞ÁöÑÂÄºËøΩÂä†ËØ• key ÁöÑÊóßÂÄºÂêéÈù¢ËÄå‰∏çÊòØÊõøÊç¢ÂÆÉÔºåËøôÂ∞ÜÂú® 
[Êõ¥Â§öËÆæÁΩÆ][More-About-Settings] ‰∏≠‰ªãÁªç„ÄÇ`%` ÊñπÊ≥ïÊòØÁî®Êù•‰ªéÂ≠óÁ¨¶‰∏≤ÊûÑÈÄ† Ivy Ê®°Âùó ID ÁöÑÔºåÂ∞ÜÂú® [Â∫ì‰æùËµñ][Library-Dependencies] ‰∏≠‰ªãÁªç„ÄÇ

ÁõÆÂâçÔºå‰∏ÄÁõ¥Âà∞ÂÖ•Èó®ÊåáÂçóÁöÑÂêéÈù¢ÈÉ®ÂàÜÔºåÊàë‰ª¨Ë∑≥Ëøá‰∫ÜÂ∫ì‰æùËµñÁöÑ‰∏Ä‰∫õÁªÜËäÇ„ÄÇÂêéÈù¢Êúâ‰∏ÄÊï¥ËäÇ [Â∫ì‰æùËµñ][Library-Dependencies] Êù•‰ªãÁªçËøô‰∫õÂÜÖÂÆπ„ÄÇ

  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Library-Dependencies]: Library-Dependencies.html
  [Multi-Project]: Multi-Project.html
  [Inspecting-Settings]: ../docs/Inspecting-Settings.html

Scope
------

Ëøô‰∏ÄÂ∞èËäÇ‰ªãÁªç scope„ÄÇÂÅáËÆæ‰Ω†Â∑≤ÁªèÈòÖËØªÂπ∂‰∏îÁêÜËß£‰∫ÜÂâç‰∏ÄÂ∞èËäÇ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]„ÄÇ

### ÂÖ≥‰∫é Key ÁöÑÊâÄÊúâÊïÖ‰∫ã

[Ââç‰∏ÄÂ∞èËäÇ][Basic-Def] Êàë‰ª¨ËÆ§‰∏∫ÂÉè `name` ÁöÑ‰∏Ä‰∏™ key Áõ∏ÂΩì‰∫é sbt ‰øùÂ≠òÈîÆÂÄºÂØπÁöÑ map ‰∏≠ÁöÑ‰∏ÄÊù°ËÆ∞ÂΩïÔºåËøôÂè™ÊòØ‰∏ÄÁßçÁÆÄÂåñ„ÄÇ

‰∫ãÂÆû‰∏äÔºåÊØè‰∏Ä‰∏™ key ÂèØ‰ª•Âú®Â§ö‰∏™‰∏ä‰∏ãÊñá‰∏≠ÂÖ≥ËÅî‰∏Ä‰∏™ÂÄºÔºåÊØè‰∏™‰∏ä‰∏ãÊñáÁß∞‰πã‰∏∫ ‚Äúscope‚Äù„ÄÇ

‰∏Ä‰∫õÂÖ∑‰ΩìÁöÑ‰æãÂ≠êÔºö

- Â¶ÇÊûúÂú®‰Ω†ÁöÑÊûÑÂª∫ÂÆö‰πâ‰∏≠ÊúâÂ§ö‰∏™È°πÁõÆÔºåÂú®ÊØè‰∏™È°πÁõÆ‰∏≠Âêå‰∏Ä‰∏™ key ÂèØ‰ª•Êúâ‰∏çÂêåÁöÑÂÄº„ÄÇ
- Â¶ÇÊûú‰Ω†ÊÉ≥Ê†πÊçÆ‰∏çÂêåÁöÑÊÉÖÂΩ¢ÁºñËØëÂÆÉ‰ª¨Ôºåkey `compile` ÂØπ‰∫é main Ê∫êÊñá‰ª∂Âíå test Ê∫êÊñá‰ª∂ÂèØ‰ª•Êúâ‰∏çÂêåÁöÑÂÄº„ÄÇ
- Key `packageOptions`ÔºàÂåÖÂê´ÂàõÂª∫ jar ÂåÖÁöÑ‰∏Ä‰∫õÈÄâÈ°πÔºâÂèØ‰ª•Êúâ‰∏çÂêåÁöÑÂÄºÔºåÂú®ÂØπ class Êñá‰ª∂ÊâìÂåÖÊó∂ÊòØ `packageBin`ÔºåÂØπÊ∫ê‰ª£Á†ÅÊâìÂåÖÊó∂ÊòØ `packageSrc`„ÄÇ

*ÁªôÂÆöÁöÑ key `name` Ê≤°ÊúâÂçï‰∏ÄÁöÑÂÄº*ÔºåÂõ†‰∏∫Âú®‰∏çÂêåÁöÑ scope ‰∏ãÂÆÉÁöÑÂÄº‰∏çÂêå„ÄÇ

ÁÑ∂ËÄåÔºåÁªôÂÆöÁöÑ `scoped` key ÁöÑÂÄºÊòØÂçï‰∏ÄÁöÑ„ÄÇ

Â¶ÇÊûú‰Ω†ÊÉ≥Ëµ∑ [ÂâçÈù¢][Basic-Def] Êàë‰ª¨ËÆ®ËÆ∫ËøáÁöÑÔºåsbt ÁîüÊàê‰∏Ä‰∏™ map Êù•Â§ÑÁêÜÊèèËø∞È°πÁõÆÁöÑ settings ÂàóË°®ÔºåËøô‰∏™ map ‰∏≠ÁöÑ key Â∞±ÊòØ *scope ‰∏ãÁöÑ* key„ÄÇÊûÑÂª∫ÂÆö‰πâ‰∏≠ÂÆö‰πâÁöÑÊØè‰∏Ä‰∏™ settingÔºà‰æãÂ¶ÇÂú® `build.sbt` ‰∏≠ÔºâÈÉΩÊúâ‰∏Ä‰∏™ scope ‰∏ãÁöÑ key„ÄÇ

‰∏ÄËà¨ scope ÊòØÈöêÂºèÁöÑÊàñËÄÖÊòØÈªòËÆ§ÁöÑÔºå‰ΩÜÊòØ‰∏ÄÊó¶ÈªòËÆ§ÁöÑÊòØÈîôËØØÁöÑÔºå‰Ω†Â∞±ÈúÄË¶ÅÂú® `build.sbt` ‰∏≠ÊåáÂÆö‰Ω†ÊúüÂæÖÁöÑ scope„ÄÇ

### Scope ËΩ¥

*Scope ËΩ¥* ÊòØ‰∏ÄÁßçÁ±ªÂûãÔºåËØ•Á±ªÂûãÁöÑÊØè‰∏™ÂÆû‰æãÈÉΩËÉΩÂÆö‰πâËá™Â∑±ÁöÑ scopeÔºà‰πüÂ∞±ÊòØËØ¥ÔºåÊØè‰∏™ÂÆû‰æãÁöÑ key ÂèØ‰ª•ÊúâËá™Â∑±ÂîØ‰∏ÄÁöÑÂÄºÔºâ„ÄÇ

Êúâ‰∏âÁßçÁ±ªÂûãÁöÑ scope ËΩ¥Ôºö

- Projects
- Configurations
- Tasks

#### ÈÄöËøá Project ËΩ¥ÂàíÂàÜ Scope

Â¶ÇÊûú‰Ω†Â∞Ü [Â§ö‰∏™È°πÁõÆ][Multi-Project] ÊîæÂú®Âêå‰∏Ä‰∏™ÊûÑÂª∫‰∏≠ÔºåÊØè‰∏™È°πÁõÆÈúÄË¶ÅÊúâÂ±û‰∫éËá™Â∑±ÁöÑ settings„ÄÇ‰πüÂ∞±ÊòØËØ¥Ôºåkeys ÂèØ‰ª•Ê†πÊçÆÈ°πÁõÆË¢´Â±ÄÈôêÂú®‰∏çÂêåÁöÑ‰∏ä‰∏ãÊñá‰∏≠„ÄÇ

Project ËΩ¥ÂèØ‰ª•ËÆæÁΩÆÊàêÊûÑÂª∫ÂÖ®Â±ÄÁöÑÔºåÂõ†Ê≠§‰∏Ä‰∏™ setting ÂèØ‰ª•Â∫îÁî®Âà∞ÂÖ®Â±ÄÊûÑÂª∫ËÄå‰∏çÊòØÂçï‰∏™È°πÁõÆ„ÄÇÂΩì‰∏Ä‰∏™È°πÁõÆÊ≤°ÊúâÂÆö‰πâÈ°πÁõÆÂ±ÇÁ∫ßÁöÑ setting ÁöÑÊó∂ÂÄôÔºåÊûÑÂª∫Â±ÇÁ∫ßÁöÑ setting ÈÄöÂ∏∏‰Ωú‰∏∫ÈªòËÆ§ÁöÑËÆæÁΩÆ„ÄÇ

#### ÈÄöËøá Configuration ËΩ¥ÂàíÂàÜ Scope

‰∏Ä‰∏™ *configuration* ÂÆö‰πâ‰∏ÄÁßçÁâπÂÆöÁöÑÊûÑÂª∫ÔºåÂèØËÉΩÂåÖÂê´ÂÆÉËá™Â∑±ÁöÑ classpathÔºåÊ∫êÊñá‰ª∂ÂíåÁîüÊàêÁöÑÂåÖÁ≠â„ÄÇConfiguration ÁöÑÊ¶ÇÂøµÊù•Ëá™‰∫éÂÆÉÁî®Êù•ÁÆ°ÁêÜ [Â∫ì‰æùËµñ][Library-Dependencies] ÁöÑ Ivy 
Âíå [MavenScopes](http://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Scope)„ÄÇ

Âú® sbt ‰∏≠‰Ω†ÂèØ‰ª•ÁúãÂà∞Ëøô‰∫õ configurationsÔºö

- `Compile` ÂÆö‰πâ‰∏ªÊûÑÂª∫Ôºà`src/main/scala`Ôºâ
- `Test` ÂÆö‰πâÂ¶Ç‰ΩïÊûÑÂª∫ÊµãËØïÔºà`src/test/scala`Ôºâ
- `Runtime` ‰∏∫ task `run` ÂÆö‰πâ classpath

ÈªòËÆ§ÊÉÖÂÜµ‰∏ãÔºåÂíåÁºñËØë„ÄÅÊâìÂåÖ„ÄÅËøêË°åÁõ∏ÂÖ≥ÁöÑÊâÄÊúâ key ÈÉΩÂ±ÄÈôê‰∫é‰∏Ä‰∏™ configurationÔºåÂõ†Ê≠§Âú®‰∏çÂêåÁöÑ configuration ‰∏≠ÂèØËÉΩ‰∫ßÁîü‰∏çÂêåÁöÑÊïàÊûú„ÄÇÊúÄÊòéÊòæÁöÑ‰æãÂ≠êÂ∞±ÊòØ task keyÔºö`compile`Ôºå`package` Âíå `run`Ôºõ
ÁÑ∂ËÄåËÉΩÂ§ü *ÂΩ±Âìç* Âà∞Ëøô‰∫õ key ÁöÑÊâÄÊúâÂÖ∂‰ªñ keyÔºà‰æãÂ¶Ç `sourceDirectories`Ôºå`scalacOptions` Âíå `fullClasspath`Ôºâ‰πüÈÉΩÂ±ÄÈôê‰∫éËØ• configuration„ÄÇ

#### ÈÄöËøá Task ËΩ¥ÂàíÂàÜ Scope

Settings ÂèØ‰ª•ÂΩ±Âìç‰∏Ä‰∏™ task Â¶Ç‰ΩïÂ∑•‰Ωú„ÄÇ‰æãÂ¶ÇÔºåtask `packageSrc` Â∞±‰ºöË¢´ setting `packageOptions` ÂΩ±Âìç„ÄÇ

‰∏∫‰∫ÜÊîØÊåÅËøôÁßçÁâπÊÄßÔºå‰∏Ä‰∏™ task keyÔºà‰æãÂ¶Ç `packageSrc`ÔºâÂèØ‰ª•‰Ωú‰∏∫Âè¶‰∏Ä‰∏™ keyÔºà‰æãÂ¶Ç `packageOptions`ÔºâÁöÑ scope„ÄÇ

‰∏Ä‰∫õÂíåÊâìÂåÖÁõ∏ÂÖ≥ÁöÑ taskÔºà`packageSrc`Ôºå`packageBin`Ôºå`packageDoc`ÔºâÂèØ‰ª•ÂÖ±‰∫´ÂíåÊâìÂåÖÁõ∏ÂÖ≥ÁöÑ keyÔºå‰æãÂ¶Ç `artifactName` Âíå `packageOptions`„ÄÇËøô‰∫õ key ÂØπ‰∫éÊØè‰∏™ÊâìÂåÖÁöÑ task ÂèØ‰ª•ÊúâÂîØ‰∏ÄÁöÑÂÄº„ÄÇ

### ÂÖ®Â±Ä Scope

ÊØè‰∏ÄÁßç scope ËΩ¥ÈÉΩÂèØ‰ª•Áî®ÂíåËØ•ËΩ¥Á±ªÂûã‰∏ÄËá¥ÁöÑÂÆû‰æã‰ª£ÊõøÔºà‰æãÂ¶Ç task ËΩ¥ÂèØ‰ª•Áî®‰∏Ä‰∏™ task ‰ª£ÊõøÔºâÔºåÊàñËÄÖËØ•ËΩ¥ÂèØ‰ª•Ë¢´ÁâπÂÆöÁöÑÂÄº `Global` ‰ª£Êõø„ÄÇ

`Global` ÁöÑÊÑè‰πâÂ∞±ÊòØ‰Ω†ÊâÄÊúüÂæÖÁöÑÔºöÂ∞Ü setting ÁöÑÂÄºÂ∫îÁî®Âà∞ËØ•ËΩ¥ÊâÄÊúâÁöÑÂÆû‰æã‰∏ä„ÄÇ‰æãÂ¶ÇÂ¶ÇÊûú‰∏Ä‰∏™ task ËΩ¥ÁöÑÂÄºÊòØ `Global`ÔºåÈÇ£‰πàËØ• setting ÁöÑÂÄºÂ∞ÜË¢´Â∫îÁî®Âà∞ÊâÄÊúâÁöÑ task ‰∏ä„ÄÇ

### ‰ª£ÁêÜ

Â¶ÇÊûúÂú®‰∏Ä‰∏™ scope ‰∏≠Êüê‰∏Ä‰∏™ key Ê≤°ÊúâÂÖ≥ËÅîÁöÑÂÄºÔºåÈÇ£‰πàËØ• key Â∞±ÊòØÊú™ÂÆö‰πâÁöÑ„ÄÇ

ÂØπ‰∫éÊØè‰∏Ä‰∏™ scopeÔºåsbt ÊúâÁî±ÂÖ∂‰ªñ scope ÊûÑÊàêÁöÑÊõø‰ª£ÈÄâÈ°πÁöÑÊêúÁ¥¢Ë∑ØÂæÑ„ÄÇÈÄöÂ∏∏ÔºåÂ¶ÇÊûú‰∏Ä‰∏™ key Âú®ÁâπÂÆöÁöÑ scope ‰∏ãÊ≤°ÊúâÂÖ≥ËÅîÁöÑÂÄºÔºåsbt ‰ºöÂ∞ùËØï‰ªéÊõ¥Âä†‰∏ÄËà¨ÁöÑ scopeÔºà‰æãÂ¶Ç `Global` scope ÊàñËÄÖÊûÑÂª∫ÂÖ®Â±Ä scopeÔºâ‰∏≠Ëé∑ÂèñÂÄº„ÄÇ

Ëøô‰∏™ÁâπÊÄßÂÖÅËÆ∏‰Ω†‰∏ÄÊó¶Âú®Êõ¥Âä†‰∏ÄËà¨ÁöÑ scope ‰∏≠ËÆæÁΩÆ‰∫ÜÊüê‰∏ÄÈ°πËÆæÁΩÆÁöÑÂÄº‰πãÂêéÔºå‰ΩøÂæóÂ§ö‰∏™ÁâπÂÆöÁöÑ scope ËÉΩÂ§üÁªßÊâøËØ•ÂÄº„ÄÇ

‰Ω†ÂèØ‰ª•ÂÉè‰∏ãÈù¢ËøôÊ†∑Áî® `inspect` ÂëΩ‰ª§Êü•Áúã‰∏Ä‰∏™ key ÁöÑÊõø‰ª£ÈÄâÈ°πÁöÑÊü•ÊâæË∑ØÂæÑÊàñËÄÖ‚Äú‰ª£ÁêÜ‚Äù„ÄÇÂæÄ‰∏ãÁúã„ÄÇ

### ËøêË°å sbt Êó∂Ê∂âÂèä scope ‰∏ãÁöÑ key

Âú®ÂëΩ‰ª§Ë°åÁöÑ‰∫§‰∫íÊ®°Âºè‰∏ãÔºåsbt ÂÉèËøôÊ†∑ÊòæÁ§∫ÔºàÂíåËß£ÊûêÔºâscope ‰∏ãÁöÑ keysÔºö

```
{<build-uri>}<project-id>/config:intask::key
```

- `{<build-uri>}/<project-id>` Ê†áËØÜ project ËΩ¥„ÄÇÂ¶ÇÊûú project ËΩ¥ÊúâÊûÑÂª∫ÂÖ®Â±Ä scopeÔºåÂ∞ÜÊ≤°Êúâ `<project-id>` ÈÉ®ÂàÜ„ÄÇ
- `config` Ê†áËØÜ configuration ËΩ¥„ÄÇ
- `intask` Ê†áËØÜ task ËΩ¥„ÄÇ
- `key` Ê†áËØÜ scope ‰∏ãÁöÑ key„ÄÇ

‚Äú*‚ÄùÂè∑ÂèØ‰ª•Âá∫Áé∞Âú®‰ªªÊÑèËΩ¥ÔºåÂèÇËÄÉ `Global` scope„ÄÇ

Â¶ÇÊûú‰Ω†ÁúÅÁï•ÈÉ®ÂàÜ scoped keyÔºåÂÆÉ‰ºöÂÉè‰∏ãÈù¢ËøôÊ†∑Êé®Êñ≠Ôºö

- Â¶ÇÊûúÁúÅÁï• projectÔºåÂΩìÂâçÁöÑ project ‰ºöË¢´‰ΩøÁî®„ÄÇ
- Â¶ÇÊûúÁúÅÁï• configuration ÊàñËÄÖ taskÔºå‰ºöËá™Âä®Ê£ÄÊµã key ÊâÄÊúâ‰æùËµñÁöÑ configuration„ÄÇ

Êõ¥Â§öËØ¶ÁªÜÂÜÖÂÆπÔºåËØ∑ÂèÇËßÅ [‰∏é Configuration Á≥ªÁªü‰∫§‰∫í][Inspecting-Settings]„ÄÇ

### ‰ΩøÁî® scoped key Ê†áËØÜÁöÑ‰æãÂ≠ê

- `fullClasspath` ‰ªÖ‰ªÖÊåáÂÆö‰∫Ü‰∏Ä‰∏™ keyÔºåÊâÄ‰ª•‰ºö‰ΩøÁî®ÈªòËÆ§ÁöÑ scopeÔºöÂΩìÂâçÁöÑ projectÔºåkey ÊâÄ‰æùËµñÁöÑ configuration ÂíåÂÖ®Â±Ä task ÁöÑ scope„ÄÇ
- `test:fullClasspath` ÊåáÂÆö‰∏∫ configurationÔºåÊâÄ‰ª•Ëøô‰∏™ `fullClasspath` Â∞±Âú® `test` configuration scope ‰∏ãÔºåÂÖ∂‰ªñ‰∏§‰∏™ scope ËΩ¥Âùá‰∏∫ÈªòËÆ§ÂÄº„ÄÇ
- `*:fullClasspath` Â∞Ü configuration ÊåáÂÆö‰∏∫ `Global`ÔºåËÄå‰∏çÊòØÈªòËÆ§ÁöÑ configuration„ÄÇ
- `doc::fullClasspath` Â∞Ü key `fullClasspath` Â±ÄÈôêÂú® `doc` task ‰∏ãÔºåproject ËΩ¥Âíå configuration ËΩ¥ËøòÊòØÈªòËÆ§ÁöÑ„ÄÇ
- `{file:/home/hp/checkout/hello/}default-aea33a/test:fullClasspath` ÊåáÂÆö‰∫Ü‰∏Ä‰∏™ projectÔºåÂú® `{file:/home/hp/checkout/hello/}default-aea33a` ‰∏≠Ôºå`{file:/home/hp/checkout/hello/}` Ê†áËØÜ projectÔºå
ËÄå‰∏î project id Âú® `default-aea33a` ÊûÑÂª∫‰∏≠„ÄÇ‰πüÊåáÂÆö‰∫Ü configuration ‰∏∫ `test`Ôºå‰ΩÜÊòØÂ∞Ü task ËΩ¥Áïô‰∏∫ÈªòËÆ§ÁöÑ„ÄÇ
- `{file:/home/hp/checkout/hello/}/test:fullClasspath` Â∞ÜÊûÑÂª∫‰∏∫ `{file:/home/hp/checkout/hello/}` ÁöÑ project ËΩ¥ËÆæÁΩÆ‰∏∫ÂÖ®Â±ÄÊûÑÂª∫„ÄÇ
- `{.}/test:fullClasspath` Â∞ÜÊûÑÂª∫‰∏∫ `{.}` ÁöÑ project ËΩ¥ËÆæÁΩÆ‰∏∫ÂÖ®Â±ÄÊûÑÂª∫„ÄÇ`{.}` ÂèØ‰ª•Âú® Scala ‰ª£Á†Å‰∏≠ÂÜôÊàê `ThisBuild`„ÄÇ
- `{file:/home/hp/checkout/hello/}/compile:doc::fullClasspath` ËÆæÁΩÆ‰∫ÜÂÖ®ÈÉ®ÁöÑ‰∏â‰∏™ scope ËΩ¥„ÄÇ

### ÂÆ°Êü• scope

Âú® sbt ÁöÑ‰∫§‰∫íÊ®°Âºè‰∏ãÔºå‰Ω†ÂèØ‰ª•‰ΩøÁî® inspect ÂëΩ‰ª§Êù•ÁêÜËß£ key ÂíåÂÆÉÂØπÂ∫îÁöÑ scope„ÄÇÂ∞ùËØï `inspect test:fullClasspath`Ôºå

```
$ sbt
> inspect test:fullClasspath
[info] Task: scala.collection.Seq[sbt.Attributed[java.io.File]]
[info] Description:
[info]  The exported classpath, consisting of build products and unmanaged and managed, internal and external dependencies.
[info] Provided by:
[info]  {file:/home/hp/checkout/hello/}default-aea33a/test:fullClasspath
[info] Dependencies:
[info]  test:exportedProducts
[info]  test:dependencyClasspath
[info] Reverse dependencies:
[info]  test:runMain
[info]  test:run
[info]  test:testLoader
[info]  test:console
[info] Delegates:
[info]  test:fullClasspath
[info]  runtime:fullClasspath
[info]  compile:fullClasspath
[info]  *:fullClasspath
[info]  {.}/test:fullClasspath
[info]  {.}/runtime:fullClasspath
[info]  {.}/compile:fullClasspath
[info]  {.}/*:fullClasspath
[info]  */test:fullClasspath
[info]  */runtime:fullClasspath
[info]  */compile:fullClasspath
[info]  */*:fullClasspath
[info] Related:
[info]  compile:fullClasspath
[info]  compile:fullClasspath(for doc)
[info]  test:fullClasspath(for doc)
[info]  runtime:fullClasspath
```

Âú®Á¨¨‰∏ÄË°åÔºå‰Ω†ÂèØ‰ª•ÁúãÂà∞ËøôÊòØ‰∏Ä‰∏™ taskÔºàÂíå [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] ‰∏≠‰ªãÁªçÁöÑ setting Áõ∏ÂØπÔºâ„ÄÇËØ• task ÂæóÂà∞ÁöÑÂÄºÁöÑÁ±ªÂûã‰∏∫ `scala.collection.Seq[sbt.Attributed[java.io.File]]`„ÄÇ

‚ÄúProvided by‚Äù Ë°®ÊòéÂÆö‰πâËØ•ÂÄºÁöÑ scoped keyÔºåÂú®Ëøô‰∏™‰æãÂ≠ê‰∏≠ÊòØ `{file:/home/hp/checkout/hello/}default-aea33a/test:fullClasspath`Ôºà`fullClasspath` Âú® `test` configuration ‰∏≠‰∏îÂú® `{file:/home/hp/checkout/hello/}default-aea33a` project ‰∏ãÔºâ„ÄÇ

‚ÄúDependencies‚Äù ÂèØËÉΩÊ≤°ÊúâÊÑè‰πâÔºõËØ∑ÁªßÁª≠ÈòÖËØª [‰∏ã‰∏ÄËäÇ][More-About-Settings]„ÄÇ

‰Ω†‰πüÂèØ‰ª•ÁúãÂà∞‰∏Ä‰∫õ‰ª£ÁêÜÔºõÂ¶ÇÊûúÊ≤°ÊúâÂÆö‰πâÔºåsbt ‰ºöÈÄöËøá‰ª•‰∏ãÈÄîÂæÑÊü•ÊâæÔºö

- ÂÖ∂‰ªñ‰∏§‰∏™ configurationÔºà`runtime:fullClasspath` Âíå `compile:fullClasspath`Ôºâ„ÄÇÂú®Ëøô‰∫õ scoped key‰∏≠Ôºåproject Ê≤°ÊúâÊåáÂÆöÁöÑËØùÂ∞±ÊÑèÂë≥ÁùÄÊòØ ‚ÄúÂΩìÂâç project‚Äù ËÄå‰∏î task Ê≤°ÊúâÊåáÂÆöÁöÑËØùÂ∞±ÊÑèÂë≥ÁùÄÊòØ `Global`„ÄÇ
- ÂΩì project Ê≤°ÊúâÊåáÂÆö ‚ÄúÂΩìÂâç project‚Äù Âπ∂‰∏î task Ê≤°ÊúâÊåáÂÆö‰∏∫ `Global` Êó∂Ôºåconfiguration ‰ºöË¢´ËÆæÁΩÆÊàê `Global`Ôºà`*:fullClasspath`Ôºâ„ÄÇ
- ÂΩìÂÖ®Â±ÄÊûÑÂª∫‰∏≠Ê≤°ÊúâÊåáÂÆöÁâπÂÆöÁöÑ project Êó∂Ôºåproject ‰ºöË¢´ËÆæÁΩÆÊàê `{.}` ÊàñËÄÖ `ThisBuild`„ÄÇ
- Â∞Ü project ËΩ¥ËÆæÁΩÆÊàê `Global`Ôºà`*/test:fullClasspath`ÔºâÔºàËÆ∞‰ΩèÔºå‰∏çÊåáÂÆö project Ë°®Á§∫Áî®ÂΩìÂâçÁöÑ currentÔºåÊâÄ‰ª•ËøôÈáåÊü•Êâæ `Global` ÊòØ‰∏Ä‰∏™Êñ∞ÁöÑÊñπÂºèÔºõ‰æãÂ¶ÇÔºö`*` Âíå ‚ÄúÊòæÁ§∫Ê≤°Êúâ project‚Äù ÂØπ‰∫é project ËΩ¥ÊòØ‰∏ç‰∏ÄÊ†∑ÁöÑÔºõ‰æãÂ¶ÇÔºö`*/test:fullClasspath` Âíå `test:fullClasspath` ‰∏çÊòØ‰∏ÄÂõû‰∫ãÔºâ„ÄÇ
- project ËΩ¥Âíå configuration ËΩ¥ÈÉΩ‰ºöË¢´ËÆæÁΩÆÊàê `Global`Ôºà`*/*:fullClasspath`ÔºâÔºàËøòËÆ∞ÂæóÊàë‰ª¨Â∑≤ÁªèËØ¥Ëøá‰∏çÊåáÂÆö task Ë°®Á§∫Áî® `Global`ÔºåÊâÄ‰ª• `*/*:fullClasspath` Ë°®Á§∫‰∏â‰∏™ËΩ¥ÈÉΩÁî® `Global`Ôºâ„ÄÇ

Â∞ùËØïÁî® `inspect fullClasspath`ÔºàÂíå‰∏äÈù¢‰æãÂ≠ê‰∏≠ÁöÑ inspect `test:fullClasspath` Áõ∏ÂØπÔºâÊù•Êü•ÁúãÂÆÉ‰ª¨ÁöÑ‰∏çÂêå„ÄÇÂõ†‰∏∫ configuration Ë¢´ÁúÅÁï•‰∫ÜÔºåsbt Ëá™Âä®Ê£ÄÊµãÂπ∂ËÆæÁΩÆ‰∏∫ `compile`„ÄÇ
Âõ†Ê≠§ `inspect compile:fullClasspath` ÂæóÂà∞ÁöÑÁªìÊûúÁúãËµ∑Êù•Â∫îËØ•Âíå `inspect fullClasspath` ÂæóÂà∞ÁöÑÁªìÊûú‰∏ÄÊ†∑„ÄÇ

Â∞ùËØïÁî® `inspect *:fullClasspath` ‰Ωú‰∏∫ÂØπÊØî„ÄÇÈªòËÆ§ÊÉÖÂÜµ‰∏ãÔºå`fullClasspath` Ê≤°ÊúâÂÆö‰πâÂú® `Global` configuration ‰∏≠„ÄÇ

Êõ¥Â§öËØ¶ÁªÜÁöÑÂÜÖÂÆπËØ∑ÂèÇËßÅ [‰∏é Configuration Á≥ªÁªü‰∫§‰∫í][Inspecting-Settings]„ÄÇ

### Âú®ÊûÑÂª∫ÂÆö‰πâ‰∏≠Ê∂âÂèä scope

Â¶ÇÊûú‰Ω†ÂàõÂª∫ÁöÑ `build.sbt` ‰∏≠Êúâ‰∏Ä‰∏™bare keyÔºåÂÆÉÁöÑ‰ΩúÁî®‰∫éÂ∞ÜÊòØÂΩìÂâçÁöÑ project ‰∏ãÔºåconfiguration Âíå task Âùá‰∏∫ `Global`Ôºö

```scala
lazy val root = (project in file(".")).
  settings(
    name := "hello"
  )
```

ÂêØÂä® sbt Âπ∂‰∏îÊâßË°å `inspect name` ÂèØ‰ª•ÁúãÂà∞ÂÆÉÁî± `{file:/home/hp/checkout/hello/}default-aea33a/*:name` Êèê‰æõÔºå‰πüÂ∞±ÊòØËØ¥Ôºåproject ÊòØ `{file:/home/hp/checkout/hello/}default-aea33a`Ôºå
configuration ÊòØ `*`ÔºàË°®Á§∫ÂÖ®Â±ÄÔºâÔºåtask Ê≤°ÊúâÊòæÁ§∫Âá∫Êù•ÔºàÂÆûÈôÖ‰∏ä‰πüÊòØÂÖ®Â±ÄÔºâ„ÄÇ

Keys ‰ºöË∞ÉÁî®‰∏Ä‰∏™ÈáçËΩΩÁöÑ in ÊñπÊ≥ïËÆæÁΩÆ scope„ÄÇ‰º†Áªô in ÊñπÊ≥ïÁöÑÂèÇÊï∞ÂèØ‰ª•ÊòØ‰ªª‰Ωï scope ËΩ¥ÁöÑÂÆû‰æã„ÄÇÊØîÂ¶ÇËØ¥Ôºå‰Ω†ÂèØ‰ª•Â∞Ü `name` Â±ÄÈôêÂú® `Compile` configuration ‰∏≠ÔºåÂ∞ΩÁÆ°Ê≤°ÊúâÁúüÂÆûÁöÑÁêÜÁî±Ë¶ÅËøôÊ†∑ÂÅöÔºö

```scala
name in Compile := "hello"
```

ÊàñËÄÖ‰Ω†ÂèØ‰ª•Êää `name` Â±ÄÈôêÂú® `packageBin` task ‰∏≠ÔºàÊ≤°Êúâ‰ªÄ‰πàÊÑè‰πâÔºÅ‰ªÖ‰ªÖÊòØ‰∏™‰æãÂ≠êÔºâÔºö

```scala
name in packageBin := "hello"
```

ÊàñËÄÖ‰Ω†ÂèØ‰ª•Êää `name` Â±ÄÈôêÂú®Â§ö‰∏™ scope ËΩ¥‰∏≠Ôºå‰æãÂ¶ÇÂú® `Compile` configuration ÁöÑ `packageBin` task ‰∏≠Ôºö

```scala
name in (Compile, packageBin) := "hello"
```

ÊàñËÄÖ‰Ω†ÂèØ‰ª•Áî® `Global` Ë°®Á§∫ÊâÄÊúâÁöÑËΩ¥Ôºö

```scala
name in Global := "hello"
```

Ôºà`name in Global` ÈöêÂºèÁöÑÊää scope ËΩ¥ÁöÑÂÄº `Global` ËΩ¨Êç¢‰∏∫ scope ÊâÄÊúâËΩ¥ÁöÑÂÄºÂùá‰∏∫ `Global`Ôºõtask Âíå configuration ÈªòËÆ§ÊòØ `Global`ÔºåÂõ†Ê≠§ËøôÈáåÁöÑÊïàÊûúÊòØÂ∞Ü project ËÆæÁΩÆÊàê `Global`Ôºå
‰πüÂ∞±ÊòØËØ¥ÔºåÂÆö‰πâ‰∫Ü `*/*:name` ËÄå‰∏çÊòØ `{file:/home/hp/checkout/hello/}default-aea33a/*:name`Ôºâ

Â¶ÇÊûú‰Ω†‰πãÂâç‰∏çÁÜüÊÇâ ScalaÔºåÊèêÈÜí‰∏Ä‰∏ãÔºöin Âíå `:=` ‰ªÖ‰ªÖÊòØÊñπÊ≥ïÔºå‰∏çÊòØÈ≠îÊ≥ïÔºåÁêÜËß£ËøôÁÇπÂæàÈáçË¶Å„ÄÇScala ËÆ©‰Ω†Áî®‰∏ÄÁßçÊõ¥Â•ΩÁöÑÊñπÂºèÁºñÂÜôÂÆÉ‰ª¨Ôºå‰ΩÜÊòØ‰Ω†‰πüÂèØ‰ª•Áî® Java ÁöÑÈ£éÊ†ºÔºö

```scala
name.in(Compile).:=("hello")
```

ÊØ´Êó†ÁêÜÁî±‰ΩøÁî®ËøôÁßç‰∏ëÈôãÁöÑËØ≠Ê≥ïÔºå‰ΩÜÊòØÂÆÉÈòêÊòéËøôÂÆûÈôÖ‰∏äÊòØÊñπÊ≥ï„ÄÇ

### ÊåáÂÆö scope ÁöÑÊó∂Êú∫

Â¶ÇÊûú‰∏Ä‰∏™ key ÈÄöÂ∏∏ÁöÑ‰ΩúÁî®ÂüüÊúâÈóÆÈ¢òÔºå‰Ω†ÈúÄË¶ÅÊåáÂÆö scope„ÄÇ‰æãÂ¶ÇÔºå`compile` task ÈªòËÆ§ÊòØÂú® `Compile` Âíå `Test` configuration ÁöÑ scope ‰∏≠ÔºåËÄå‰∏îÂú®Ëøô‰∫õ scope ‰πãÂ§ñÂÆÉÂπ∂‰∏çÂ≠òÂú®„ÄÇ

‰∏∫‰∫ÜÊîπÂèò key `compile` ÁöÑÂÄºÔºå‰Ω†ÈúÄË¶ÅÂÜôÊàê `compile in Compile` ÊàñËÄÖ `compile in Test`„ÄÇÁî®ÊôÆÈÄöÁöÑ `compile` ‰ºöÂú®ÂΩìÂâç project ÁöÑ scope ‰∏≠ÂÆö‰πâ‰∏Ä‰∏™Êñ∞ÁöÑ taskÔºåËÄå‰∏çÊòØË¶ÜÁõñ configuration ÁöÑ scope Ê†áÂáÜÁöÑ `compile` task„ÄÇ

Â¶ÇÊûú‰Ω†ÈÅáÂà∞ÂÉè *‚ÄúÂºïÁî®Êú™ÂÆö‰πâÁöÑËÆæÁΩÆ‚Äù* ËøôÊ†∑ÁöÑÈîôËØØÔºåÈÄöÂ∏∏ÊòØ‰Ω†ÊåáÂÆö scope Â§±Ë¥•‰∫ÜÔºåÊàñËÄÖ‰Ω†ÊåáÂÆö‰∫Ü‰∏Ä‰∏™ÈîôËØØÁöÑ scope„ÄÇ‰Ω†‰ΩøÁî®ÁöÑ key ÂèØËÉΩÂÆö‰πâÂú®ÂÖ∂‰ªñÁöÑ scope ‰∏≠„ÄÇsbt ‰ºöÂ∞ùËØïÂú®ÈîôËØØÊ∂àÊÅØÈáåÈù¢ÊèêÁ§∫‰Ω†ÁöÑÊÉ≥Ê≥ïÊòØ‰ªÄ‰πàÔºõÂ¶Ç ‚Äú‰Ω†ÊòØÊåá compile:compileÔºü‚Äù

‰∏ÄÁßçÊñπÂºèÊòØ‰Ω†ÂèØ‰ª•ËøôÊ†∑ËÆ§‰∏∫Ôºåname Âè™ÊòØ key ÁöÑ *‰∏ÄÈÉ®ÂàÜ*„ÄÇÂÆûÈôÖ‰∏äÔºåÊâÄÊúâÁöÑ key ÈÉΩÊúâ name Âíå scope ÁªÑÊàêÔºàscope Êúâ‰∏â‰∏™ËΩ¥Ôºâ„ÄÇÊç¢Âè•ËØùËØ¥Ôºå`packageOptions in (Compile, packageBin)` ÊòØË°®Á§∫ key name ÁöÑÂÆåÊï¥ÁöÑË°®ËææÂºè„ÄÇ
ÂÖ∂ÁÆÄÂÜô `packageOptions` ‰πüÊòØ‰∏Ä‰∏™ key nameÔºå‰ΩÜÊòØÊòØ‰∏çÂêåÁöÑÔºàÂØπ‰∫éÊ≤°Êúâ in ÊñπÊ≥ïÁöÑ keyÔºå‰ºöÈöêÂºèÁöÑÂÅáËÆæ‰∏Ä‰∏™ scopeÔºöÂΩìÂâçÁöÑ projectÔºåglobal
configÔºåglobal taskÔºâ„ÄÇ

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html

Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ
---------------------

Ëøô‰∏ÄÂ∞èËäÇÂ∞Ü‰ªãÁªçÈô§‰∫ÜÁî®Âü∫Êú¨ÁöÑ `:=` ÊñπÊ≥ïÂàõÂª∫ËÆæÁΩÆÔºåËøòÊúâÂÖ∂‰ªñÁöÑÊñπÊ≥ïÂèØ‰ª•ÂàõÂª∫„ÄÇÂÅáËÆæ‰Ω†Â∑≤ÁªèÈòÖËØª‰∫Ü [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] Âíå [scope][Scopes]„ÄÇ

### ÂõûÈ°æÔºöËÆæÁΩÆ

ËøòËÆ∞ÂæóÂú® [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] ‰∏≠Ôºå‰∏Ä‰∏™ÊûÑÂª∫ÂÆö‰πâÂàõÂª∫‰∫Ü‰∏Ä‰∏™ `Setting` ÂàóË°®ÔºåÁÑ∂ÂêéËøô‰∫õ `Setting` Ë¢´Áî®Êù•ÂØπ sbt ÁöÑÊûÑÂª∫ÊèèËø∞ÂÅöËΩ¨Êç¢ÔºàÂÆÉÊòØ‰∏Ä‰∏™‰øùÂ≠òÈîÆÂÄºÂØπÁöÑ mapÔºâ„ÄÇ‰∏Ä‰∏™ Setting Â∞±ÊòØÂ∞Ü sbt ‰πãÂâçÁöÑ map ‰Ωú‰∏∫ËæìÂÖ•Âπ∂‰∏îËæìÂá∫‰∏Ä‰∏™Êñ∞ÁöÑ map ÁöÑËΩ¨Êç¢„ÄÇ
Ëøô‰∏™Êñ∞ÁöÑ map Â∞±ÊòØ sbt ÁöÑÊñ∞Áä∂ÊÄÅ„ÄÇ

‰∏çÂêå setting ÈÄöËøá‰∏çÂêåÁöÑÊñπÂºèÂØπËØ• map ËøõË°åËΩ¨Êç¢„ÄÇ‰πãÂâçÂú® [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] ‰∏≠Ôºå‰Ω†Â∑≤ÁªèÈòÖËØª‰∫Ü `:=` ÊñπÊ≥ïÁõ∏ÂÖ≥ÁöÑÂÜÖÂÆπ„ÄÇ

ÈÄöËøá `:=` ÂàõÂª∫ÁöÑ `Setting` ‰ºöÂæÄËΩ¨Êç¢‰πãÂêéÊñ∞ÁöÑ map ‰∏≠ÊîæÂÖ•‰∏Ä‰∏™Âõ∫ÂÆöÁöÑÂ∏∏Èáè„ÄÇ‰æãÂ¶ÇÔºåÂ¶ÇÊûú‰Ω†ÈÄöËøá `name := "hello"` ÂØπ map ÂÅö‰∏ÄÊ¨°ËΩ¨Êç¢ÔºåÊñ∞ÁöÑ map ‰∏≠ key `name` Â∞±‰øùÂ≠òÁùÄ‰∏Ä‰∏™Â≠óÁ¨¶‰∏≤ `"hello"`„ÄÇ

### ËøΩÂä†ÂÄºÔºö `+=` Âíå `++=`

ÈÄöËøá `:=` ÊñπÊ≥ïËµãÂÄºÊòØÊúÄÁÆÄÂçïÁöÑËΩ¨Êç¢Ôºå‰ΩÜÊòØ key ‰πüÊúâÂæàÂ§öÂÖ∂‰ªñÁöÑÊñπÊ≥ï„ÄÇÂ¶ÇÊûú `SettingKey[T]` ‰∏≠ÁöÑ `T` ÊòØ‰∏Ä‰∏™ÂàóË°®Ôºå‰æãÂ¶ÇÔºå‰∏Ä‰∏™ key ÁöÑÂÄºÁöÑÁ±ªÂûãÊòØ sequenceÔºå‰Ω†Â∞±ÂèØ‰ª•ÂæÄÂàóË°®‰∏≠ËøΩÂä†ËÄå‰∏çÊòØÊõøÊç¢„ÄÇ

- `+=` ‰ºöËøΩÂä†Âçï‰∏™ÂÖÉÁ¥†Âà∞ÂàóË°®‰∏≠„ÄÇ
- `++=` ‰ºöËøûÊé•‰∏§‰∏™ÂàóË°®„ÄÇ

‰æãÂ¶ÇÔºå‰∏Ä‰∏™ key `sourceDirectories in Compile` ÁöÑÂÄºÊòØ `Seq[File]`„ÄÇÈªòËÆ§ÊÉÖÂÜµ‰∏ãËØ• key ÁöÑÂÄº‰ºöÂåÖÂê´ `src/main/scala`„ÄÇÂ¶ÇÊûú‰Ω†‰πüÊÉ≥ÁºñËØëÂè´ÂÅö source ÁöÑÁõÆÂΩï‰∏ãÁöÑÊ∫ê‰ª£Á†ÅÔºàÂõ†‰∏∫‰Ω†‰∏çÂæó‰∏çÊàê‰∏∫ÈùûÊ†áÂáÜÁöÑÔºâÔºå‰Ω†ÂèØ‰ª•Ê∑ªÂä†ËØ•ÁõÆÂΩïÔºö

```scala
sourceDirectories in Compile += new File("source")
```

ÊàñËÄÖÔºåÈÅµÂæ™Á∫¶ÂÆö‰ΩøÁî® sbt ÂåÖ‰∏≠ÁöÑ `file()` ÂáΩÊï∞Ôºö

```scala
sourceDirectories in Compile += file("source")
```

Ôºà`file()` Âè™ÊòØÂàõÂª∫‰∫Ü‰∏Ä‰∏™Êñ∞ÁöÑ`File`„ÄÇÔºâ

‰Ω†ÂèØ‰ª•Áî® `++=` ‰∏ÄÊ¨°Ê∑ªÂä†Â§ö‰∏™ÁõÆÂΩïÔºö

```scala
sourceDirectories in Compile ++= Seq(file("sources1"), file("sources2"))
```

`Seq(a, b, c, ...)` ÊòØ Scala Áî®Êù•ÊûÑÂª∫ÂàóË°®ÁöÑÊ†áÂáÜËØ≠Ê≥ï„ÄÇ

Ë¶ÅÂÆåÂÖ®ÊõøÊç¢ÈªòËÆ§ÁöÑ source ÁõÆÂΩïÔºåÂΩìÁÑ∂ÂèØ‰ª•‰ΩøÁî® `:=` ÊñπÊ≥ïÔºö

```scala
sourceDirectories in Compile := Seq(file("sources1"), file("sources2"))
```

### ‰æùËµñ‰∫éÂÖ∂‰ªñ key ÁöÑÂÄºËÆ°ÁÆóÂÄº

ÂºïÁî®Âè¶‰∏Ä‰∏™ task ÊàñËÄÖ setting ÁöÑÂÄºÂè™ÈúÄË¶ÅË∞ÉÁî®ÂÆÉ‰ª¨ÂêÑËá™ÁöÑ value ÊñπÊ≥ï„ÄÇËØ• value ÊñπÊ≥ïÊØîËæÉÁâπÊÆäËÄå‰∏îÂè™ËÉΩÂú® `:=`Ôºå`+=` ÊàñËÄÖ `++=` ÊñπÊ≥ïÁöÑÂèÇÊï∞‰∏äË∞ÉÁî®„ÄÇ

‰Ωú‰∏∫Á¨¨‰∏Ä‰∏™‰æãÂ≠êÔºåËÄÉËôëÂÆö‰πâ‰∏Ä‰∏™ÂêçÁß∞Âíå project ‰∏ÄÊ†∑ÁöÑ organization„ÄÇ

```scala
// name our organization after our project (both are SettingKey[String])
organization := name.value
```

ÊàñËÄÖÔºåËÆæÁΩÆÁöÑÂíåÈ°πÁõÆÁõÆÂΩïÂêçÁß∞‰∏ÄÊ†∑Ôºö

```scala
// name is a Key[String], baseDirectory is a Key[File]
// name the project after the directory it's inside
name := baseDirectory.value.getName
```

Ëøô‰∏™ËΩ¨Êç¢‰∏≠ÈááÁî® `java.io.File` ÈáåÈù¢ÁöÑÊ†áÂáÜÊñπÊ≥ï `getName` ÂèñÂæó‰∫Ü `baseDirectory` ÁöÑÂÄº„ÄÇ

ÈááÁî®Â§ö‰∏™ËæìÂÖ•ÊòØÁ±ª‰ººÁöÑ„ÄÇ‰æãÂ¶ÇÔºå

```scala
name := "project " + name.value + " from " + organization.value + " version " + version.value
```

ÈÄöËøáÂ∞Ü name ‰πãÂâçÁöÑÂÄºÂíå organization ‰ª•Âèä version ÁöÑÂÄºÊãºÊé•Ëµ∑Êù•ÔºåÁªÑÊàê name ÁöÑÊñ∞ÂÄº„ÄÇ

#### ÂåÖÂê´‰æùËµñÁöÑËÆæÁΩÆ

Âú® `name := baseDirectory.value.getName` ËÆæÁΩÆ‰∏≠Ôºå`name` ‰ºö *‰æùËµñ‰∫é* `baseDirectory`„ÄÇÂ¶ÇÊûú‰Ω†Â∞Ü‰∏äÈù¢ÁöÑ‰ª£Á†ÅÂÜôÂÖ• `build.sbt` ‰∏≠ÔºåÂπ∂‰∏îÂêØÂä® sbt ÁöÑ‰∫§‰∫íÊ®°ÂºèÔºåÁÑ∂ÂêéËæìÂÖ• `inspect name`Ôºå‰Ω†Â∫îËØ•ÁúãÂà∞ÔºàÈÉ®ÂàÜÂú∞ÔºâÔºö

```
[info] Dependencies:
[info]  *:baseDirectory
```

ËøôÂ∞±ÊòØ sbt Áü•ÈÅì‰∏Ä‰∏™ setting Â¶Ç‰Ωï‰æùËµñ‰∫éÂè¶‰∏Ä‰∏™ setting„ÄÇËøòËÆ∞Âæó‰∏Ä‰∫õ setting ÊèèËø∞‰∫Ü taskÔºåÊâÄ‰ª•ËøôÁßçÊñπÂºè‰πüÂàõÂª∫‰∫Ü task ‰πãÈó¥ÁöÑ‰æùËµñÂÖ≥Á≥ª„ÄÇ

‰æãÂ¶ÇÔºåÂ¶ÇÊûú‰Ω†ÊâßË°å `inspect compile` ‰Ω†‰ºöÁúãÂà∞ÂÆÉ‰æùËµñ‰∫ÜÂè¶‰∏Ä‰∏™ key `compileInputs`ÔºåËÄå‰∏îÂ¶ÇÊûú‰Ω†ÊâßË°å `inspect compileInputs` ÂÆÉËøò‰ºö‰æùËµñ‰∫éÂÖ∂‰ªñÁöÑ key„ÄÇ‰∏ÄÁõ¥ËøΩÊ∫Ø‰æùËµñÈìæ‰ºöÊúâÈ≠îÊ≥ïÂèëÁîü„ÄÇ‰æãÂ¶ÇÂΩì‰Ω†ËæìÂÖ• `compile` Êó∂Ôºå
sbt Ëá™Âä®ÊâßË°å‰∫Ü `update`„ÄÇÂÆÉÂèØ‰ª•Â∑•‰ΩúÊòØÂõ†‰∏∫ `compile` ËÆ°ÁÆóÈúÄË¶ÅÁöÑËæìÂÖ•ÁöÑÂÄºÈúÄË¶Å sbt ÂÖàÊâßË°å `update` ËÆ°ÁÆó„ÄÇ

ËøôÊ†∑Ôºåsbt ‰∏≠ÊâÄÊúâÁöÑÊûÑÂª∫‰æùËµñÈÉΩÊòØ *Ëá™Âä®ÁöÑ* ËÄå‰∏çÊòØÊòæÁ§∫Â£∞ÊòéÁöÑ„ÄÇÂ¶ÇÊûú‰Ω†Âú®Âè¶‰∏Ä‰∏™ËÆ°ÁÆó‰∏≠Áî®Âà∞‰∫ÜËØ• key ÁöÑÂÄºÔºåÈÇ£‰πàÈÇ£‰∏™ËÆ°ÁÆóÂ∞±‰ºö‰æùËµñËØ• key„ÄÇÂÆÉÂ∞±ÊòØÂèØ‰ª•Â∑•‰ΩúÔºÅ

#### ÂΩìËÆæÁΩÆÊú™ÂÆö‰πâÊó∂

Êó†ËÆ∫‰ΩïÊó∂‰∏Ä‰∏™ËÆæÁΩÆÁî® `:=`Ôºå`+=` ÊàñËÄÖ `++=` Êó∂‰æùËµñ‰∫éËá™Â∑±ÊàñËÄÖÂè¶‰∏Ä‰∏™ key ÁöÑÂÄºÔºåÂÆÉ‰æùËµñÁöÑÂÄºÂøÖÈ°ªÂ≠òÂú®„ÄÇÂ¶ÇÊûú‰∏çÂ≠òÂú®Ôºåsbt Â∞±‰ºöÊä±ÊÄ®„ÄÇ‰æãÂ¶ÇÔºåÂÆÉÂèØËÉΩ‰ºöËØ¥ *‚ÄúÂºïÁî®‰∫ÜÊú™ÂÆö‰πâÁöÑËÆæÁΩÆ‚Äù*„ÄÇ
ÂΩìËøôÂèëÁîüÊó∂ÔºåÁ°ÆËÆ§‰∏Ä‰∏ã‰Ω†‰ΩøÁî®ÁöÑ key Âú® [scope][Scopes] ‰∏≠Âπ∂‰∏îÂ∑≤ÁªèÂÆö‰πâ‰∫Ü„ÄÇ

Âú®sbt‰∏≠ÂàõÂª∫Âæ™ÁéØÂºïÁî®ÊòØÂèØËÉΩÁöÑÔºåËøôÊòØÈîôËØØÁöÑÔºõÂ¶ÇÊûú‰Ω†Âæ™ÁéØÂºïÁî®‰∫ÜÔºåsbt ‰ºöÂëäËØâ‰Ω†„ÄÇ

#### ‰æùËµñ‰∫éÂÖ∂‰ªñ key ÁöÑÂÄºÁöÑ task
  
‰Ω†ÂèØ‰ª•ËÆ°ÁÆó‰∏Ä‰∫õ task ÊàñËÄÖ setting ÁöÑÂÄºÊù•ÂÆö‰πâÂè¶‰∏Ä‰∏™ task ÊàñËÄÖ‰∏∫Âè¶‰∏Ä‰∏™ task ËøΩÂä†ÂÄº„ÄÇÈÄöËøá‰ΩøÁî® `Def.task` Âíå `taskValue` ‰Ωú‰∏∫`:=`Ôºå `+=` ÊàñËÄÖ `++=`ÁöÑÂèÇÊï∞ÂèØ‰ª•ÂÅöÂà∞„ÄÇ

‰Ωú‰∏∫Á¨¨‰∏Ä‰∏™‰æãÂ≠êÔºåËÄÉËôëËøΩÂä†‰∏Ä‰∏™‰ΩøÁî®È°πÁõÆÂü∫ÁõÆÂΩïÂíåÁºñËØë classpath ÁöÑ source generator„ÄÇ

```scala
sourceGenerators in Compile += Def.task {
  myGenerator(baseDirectory.value, (managedClasspath in Compile).value)
}.taskValue
```

#### ÂåÖÂê´‰æùËµñÁöÑ task

Âú® [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] ‰∏≠ÊèêÂà∞ËøáÔºåÂΩì‰Ω†ÈÄöËøá `:=` ÊàñÂÖ∂‰ªñÊñπÊ≥ïÂàõÂª∫‰∏Ä‰∏™ËÆæÁΩÆÊó∂Ôºåtask key ÂàõÂª∫ÁöÑÊòØ `Setting[Task[T]]` ËÄå‰∏çÊòØ `Setting[T]`„ÄÇ
Setting ÂèØ‰ª•ÊòØ Task ÁöÑËæìÂÖ•Ôºå‰ΩÜ Task ‰∏çËÉΩÊòØ Setting ÁöÑËæìÂÖ•„ÄÇ

‰ª•Ëøô‰∏§‰∏™ key ‰∏∫‰æãÔºà‰ªé [Keys](../../sxr/sbt/Keys.scala.html) ‰∏≠ÔºâÔºö

```scala
val scalacOptions = taskKey[Seq[String]]("Options for the Scala compiler.")
val checksums = settingKey[Seq[String]]("The list of checksums to generate and to verify for dependencies.")
```

Ôºà`scalacOptions` Âíå `checksums` ‰∫íÁõ∏Ê≤°ÊúâÂÖ≥Á≥ªÔºåÂÆÉ‰ª¨Âè™ÊòØÊúâÁõ∏ÂêåÂÄºÁ±ªÂûãÁöÑ‰∏§‰∏™ keyÔºåÂÖ∂‰∏≠‰∏Ä‰∏™ÊòØ task„ÄÇÔºâ

ÂèØ‰ª•ÁºñËØë `build.sbt` Â∞Ü `scalacOptions` Êò†Â∞ÑÂà∞ `checksums`Ôºå‰ΩÜÊòØÂèçËøáÊù•‰∏çÂèØ‰ª•„ÄÇ‰æãÂ¶ÇÔºåËøôÊ†∑ÊòØÂÖÅËÆ∏ÁöÑÔºö

```scala
// scalacOptions task ‰ºö‰æùËµñ checksums setting Êù•ÂÆö‰πâ
scalacOptions := checksums.value
```

ÂèçÂêëÁöÑÊìç‰ΩúÊòØ *‰∏çÂèØËÉΩ* ÁöÑ„ÄÇ‰πüÂ∞±ÊòØËØ¥Ôºå‰∏Ä‰∏™ setting ÁöÑ key ‰∏çËÉΩ‰æùËµñ‰∫é‰∏Ä‰∏™ task ÁöÑ key„ÄÇÊòØÂõ†‰∏∫‰∏Ä‰∏™ setting ÁöÑ key Âè™‰ºöÂú®È°πÁõÆÂä†ËΩΩÁöÑÊó∂ÂÄôËÆ°ÁÆó‰∏ÄÊ¨°ÔºåÊâÄ‰ª• task ‰∏ç‰ºöÊØèÊ¨°ÈÉΩÈáçÊñ∞ÊâßË°åÔºåËÄå task ÊúüÂæÖÊØèÊ¨°ÈÉΩÈáçÊñ∞ËÆ°ÁÆó„ÄÇ

```scala
// checksums setting ‰∏çËÉΩ‰æùËµñ scalacOptions task Êù•ÂÆö‰πâ
checksums := scalacOptions.value
```

### ËøΩÂä†‰æùËµñÔºö`+=` Âíå `++=`

ÂΩìËøΩÂä†Âà∞‰∏Ä‰∏™Â∑≤ÁªèÂ≠òÂú®ÁöÑ setting ÊàñËÄÖ task Êó∂ÂèØ‰ª•‰ΩøÁî®Âè¶‰∏Ä‰∫õ keyÔºåÂ∞±ÂÉèÂÆÉ‰ª¨ÂèØ‰ª•ÈÄöËøá `:=` ËµãÂÄº‰∏ÄÊ†∑„ÄÇ‰æãÂ¶ÇÔºåÊØîÊñπËØ¥‰Ω†Êúâ‰∏Ä‰∏™‰ª•È°πÁõÆÂêçÁß∞ÂëΩÂêçÁöÑË¶ÜÁõñÁéáÊä•ÂëäÔºåËÄå‰∏î‰Ω†ÊÉ≥Âú®ÊØèÊ¨°Ê∏ÖÈô§Êñá‰ª∂ÁöÑÊó∂ÂÄôÈÉΩÊ∏ÖÈô§ÂÆÉÔºö

```scala
cleanFiles += file("coverage-report-" + name.value + ".txt")
```

  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [More-About-Settings]: More-About-Settings.html
  [external-maven-ivy]: ../docs/Library-Management.html#external-maven-ivy
  [Cross-Build]: ../docs/Cross-Build.html
  [Resolvers]: ../docs/Resolvers.html
  [Library-Management]: ../docs/Library-Management.html

Â∫ì‰æùËµñ
--------------------

ÈòÖËØªËøô‰∏ÄÂ∞èËäÇÊó∂ÔºåÂÅáËÆæ‰Ω†Â∑≤ÁªèÈòÖËØªËøáÊñ∞ÊâãÂÖ•Èó®ÂâçÈù¢ÁöÑÂÜÖÂÆπÔºåÁâπÂà´ÊòØ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]Ôºå[Scopes][Scopes] Âíå [Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings]„ÄÇ

ÂèØ‰ª•ÈÄöËøá‰∏ãÈù¢Ëøô‰∏§ÁßçÊñπÂºèÊ∑ªÂä†Â∫ì‰æùËµñÔºö

-   *ÈùûÊâòÁÆ°‰æùËµñ* ‰∏∫ÊîæÂú® `lib` ÁõÆÂΩï‰∏ãÁöÑ jar Êñá‰ª∂
-   *ÊâòÁÆ°‰æùËµñ* ÈÖçÁΩÆÂú®ÊûÑÂª∫ÂÆö‰πâ‰∏≠ÔºåÂπ∂‰∏î‰ºöËá™Âä®‰ªé‰ªìÂ∫ìÔºàrepositoryÔºâ‰∏≠‰∏ãËΩΩ

### ÈùûÊâòÁÆ°‰æùËµñ

Â§ßÂ§öÊï∞‰∫∫‰ºöÁî®ÊâòÁÆ°‰æùËµñËÄå‰∏çÊòØÈùûÊâòÁÆ°‰æùËµñ„ÄÇ‰ΩÜÊòØÈùûÊâòÁÆ°‰æùËµñÂú®Ëµ∑Ê≠•Èò∂ÊÆµ‰ºöÁÆÄÂçïÂæàÂ§ö„ÄÇ

ÈùûÊâòÁÆ°‰æùËµñÂÉèËøôÊ†∑Â∑•‰ΩúÔºöÂ∞Ü jar Êñá‰ª∂ÊîæÂú® `lib` Êñá‰ª∂Â§π‰∏ãÔºåÁÑ∂ÂêéÂÆÉ‰ª¨Â∞Ü‰ºöË¢´Ê∑ªÂä†Âà∞È°πÁõÆÁöÑ classpath ‰∏≠„ÄÇÊ≤°ÊúâÊõ¥Â§öÁöÑ‰∫ãÊÉÖ‰∫ÜÔºÅ

‰Ω†‰πüÂèØ‰ª•Â∞ÜÊµãËØï‰æùËµñÁöÑ jar Êñá‰ª∂ÊîæÂú® `lib` ÁõÆÂΩï‰∏ãÔºåÊØîÂ¶Ç [ScalaCheck](http://scalacheck.org/)Ôºå[Specs2](http://specs2.org)Ôºå[ScalaTest](http://www.scalatest.org/)„ÄÇ

`lib` ÁõÆÂΩï‰∏ãÁöÑÊâÄÊúâ‰æùËµñÈÉΩ‰ºöÂú® classpathsÔºàÂØπ `compile`Ôºå `test`Ôºå `run` Âíå `console` ÈÉΩÊàêÁ´ãÔºâ„ÄÇÂ¶ÇÊûú‰Ω†ÊÉ≥ÂØπÂÖ∂‰∏≠ÁöÑ‰∏Ä‰∏™ÊîπÂèò classpathÔºå
‰Ω†ÈúÄË¶ÅÂÅöÈÄÇÂΩìË∞ÉÊï¥Ôºå‰æãÂ¶Ç `dependencyClasspath in Compile` ÊàñËÄÖ `dependencyClasspath in Runtime`„ÄÇ

Â¶ÇÊûúÁî®ÈùûÊâòÁÆ°‰æùËµñÁöÑËØùÔºå‰∏çÁî®ÂæÄ `build.sbt` Êñá‰ª∂‰∏≠Ê∑ªÂä†‰ªª‰ΩïÂÜÖÂÆπÔºå‰∏çËøá‰Ω†ÂèØ‰ª•ÊîπÂèò `unmanagedBase` keyÔºåÂ¶ÇÊûú‰Ω†ÊÉ≥Áî®‰∏Ä‰∏™‰∏çÂêåÁöÑÁõÆÂΩïËÄåÈùû `lib`„ÄÇ

Áî® `custom_lib` Êõø‰ª£ `lib`Ôºö

```scala
unmanagedBase := baseDirectory.value / "custom_lib"
```

`baseDirectory` ÊòØÈ°πÁõÆÁöÑÊ†πÁõÆÂΩïÔºåÊâÄ‰ª•Âú®ËøôÈáå‰Ω†‰æùÊçÆ `baseDirectory` ÁöÑÂÄºÊîπÂèò‰∫Ü `unmanagedBase`ÔºåÈÄöËøáÂú® [Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings] ‰∏≠‰ªãÁªçÁöÑ‰∏Ä‰∏™ÁâπÊÆäÁöÑ `value` ÊñπÊ≥ï„ÄÇ

ÂêåÊó∂‰πüÊúâ‰∏Ä‰∏™Âàó‰∏æ `unmanagedBase` ÁõÆÂΩï‰∏ãÊâÄÊúâ jar Êñá‰ª∂ÁöÑ task Âè´ `unmanagedJars`„ÄÇÂ¶ÇÊûú‰Ω†ÊÉ≥Áî®Â§ö‰∏™ÁõÆÂΩïÊàñËÄÖÂÅö‰∏Ä‰∫õÊõ¥Âä†Â§çÊùÇÁöÑ‰∫ãÊÉÖÔºå‰Ω†ÂèØËÉΩÈúÄË¶ÅÁî®‰∏Ä‰∏™ÂèØ‰ª•ÂÅöÂÖ∂‰ªñ‰∫ãÊÉÖÁöÑ task ÊõøÊç¢Êï¥‰∏™ `unmanagedJars` taskÔºå
‰æãÂ¶ÇÊ∏ÖÁ©∫ `Compile` configuration ÁöÑÂàóË°®Ôºå‰∏çËÄÉËôë `lib` ÁõÆÂΩï‰∏ãÁöÑÊñá‰ª∂Ôºö

```scala
unmanagedJars in Compile := Seq.empty[sbt.Attributed[java.io.File]]
```

### ÊâòÁÆ°‰æùËµñ

sbt ‰ΩøÁî® [Apache Ivy](http://ant.apache.org/ivy/) Êù•ÂÆûÁé∞ÊâòÁÆ°‰æùËµñÔºåÊâÄ‰ª•Â¶ÇÊûú‰Ω†ÂØπ Ivy ÊàñËÄÖ Maven ÊØîËæÉÁÜüÊÇâÁöÑËØùÔºå‰Ω†‰∏ç‰ºöÊúâÂ§™Â§öÁöÑÈ∫ªÁÉ¶„ÄÇ

#### `libraryDependencies` Key

Â§ßÂ§öÊï∞Êó∂ÂÄôÔºå‰Ω†ÂèØ‰ª•ÂæàÁÆÄÂçïÁöÑÂú® `libraryDependencies` ËÆæÁΩÆÈ°π‰∏≠ÂàóÂá∫‰Ω†ÁöÑ‰æùËµñ„ÄÇ‰πüÂèØ‰ª•ÈÄöËøá Maven POM Êñá‰ª∂ÊàñËÄÖ Ivy ÈÖçÁΩÆÊñá‰ª∂Êù•ÈÖçÁΩÆ‰æùËµñÔºåËÄå‰∏îÂèØ‰ª•ÈÄöËøá sbt Êù•Ë∞ÉÁî®Ëøô‰∫õÂ§ñÈÉ®ÁöÑÈÖçÁΩÆÊñá‰ª∂„ÄÇ
‰Ω†ÂèØ‰ª•‰ªé[ËøôÈáå][external-maven-ivy]Ëé∑ÂèñÊõ¥ËØ¶ÁªÜÁöÑÂÜÖÂÆπ„ÄÇ

ÂèØ‰ª•ÂÉèËøôÊ†∑ÂÆö‰πâ‰∏Ä‰∏™‰æùËµñÔºåÂÖ∂‰∏≠ `groupId`Ôºå `artifactId` Âíå `revision` ÈÉΩÊòØÂ≠óÁ¨¶‰∏≤Ôºö

```scala
libraryDependencies += groupID % artifactID % revision
```

ÊàñËÄÖÂÉèËøôÊ†∑Ôºå Áî®Â≠óÁ¨¶‰∏≤ÊàñËÄÖ [Configuration](../../sxr/sbt/Configuration.scala.html#sbt.Configuration) val ÂΩìÂÅö `configuration`Ôºö

```scala
libraryDependencies += groupID % artifactID % revision % configuration
```

`libraryDependencies` Âú® [Keys](../../sxr/sbt/Keys.scala.html#sbt.Keys.libraryDependencies) ‰∏≠ÂÉèËøôÊ†∑Â£∞ÊòéÔºö

```scala
val libraryDependencies = settingKey[Seq[ModuleID]]("Declares managed dependencies.")
```

ÊñπÊ≥ï `%` ‰ªéÂ≠óÁ¨¶‰∏≤ÂàõÂª∫ `ModuleID` ÂØπË±°ÔºåÁÑ∂ÂêéÂ∞Ü `ModuleID` Ê∑ªÂä†Âà∞ `libraryDependencies` ‰∏≠„ÄÇ

ÂΩìÁÑ∂ÔºåË¶ÅËÆ© sbtÔºàÈÄöËøá IvyÔºâÁü•ÈÅì‰ªéÂì™Èáå‰∏ãËΩΩÊ®°Âùó„ÄÇÂ¶ÇÊûú‰Ω†ÁöÑÊ®°ÂùóÂíå sbt Êù•Ëá™Áõ∏ÂêåÁöÑÊüê‰∏™ÈªòËÆ§ÁöÑ‰ªìÂ∫ìÔºåËøôÊ†∑Â∞±‰ºöÂ∑•‰Ωú„ÄÇ‰æãÂ¶ÇÔºåApache Derby Âú®Ê†áÂáÜÁöÑ Maven2 ‰ªìÂ∫ì‰∏≠Ôºö

```scala
libraryDependencies += "org.apache.derby" % "derby" % "10.4.1.3"
```

Â¶ÇÊûú‰Ω†Âú® `build.sbt` ‰∏≠ËæìÂÖ•‰∏äÈù¢Ëøô‰∫õÂÜÖÂÆπÔºåÁÑ∂ÂêéÊâßË°å `update`Ôºåsbt ‰ºöÂ∞Ü Derby ‰∏ãËΩΩÂà∞ `~/.ivy2/cache/org.apache.derby/`„ÄÇÔºàÈ°∫‰æøÊèê‰∏Ä‰∏ãÔºå `compile` ‰æùËµñ‰∫é `update`ÔºåÊâÄ‰ª•
Â§ßÂ§öÊï∞Êó∂ÂÄô‰∏çÈúÄË¶ÅÊâãÂä®ÁöÑÊâßË°å `update`„ÄÇÔºâ

ÂΩìÁÑ∂Ôºå‰Ω†‰πüÂèØ‰ª•ÈÄöËøá `++=` ‰∏ÄÊ¨°Â∞ÜÊâÄÊúâ‰æùËµñ‰Ωú‰∏∫‰∏Ä‰∏™ÂàóË°®Ê∑ªÂä†Ôºö

```scala
libraryDependencies ++= Seq(
  groupID % artifactID % revision,
  groupID % otherID % otherRevision
)
```

Âú®ÂæàÂ∞ëÊÉÖÂÜµ‰∏ãÔºå‰Ω†‰πü‰ºöÈúÄË¶ÅÂú® `libraryDependencies` ‰∏äÁî® `:=` ÊñπÊ≥ï„ÄÇ

#### ÈÄöËøá `%%` ÊñπÊ≥ïËé∑ÂèñÊ≠£Á°ÆÁöÑ Scala ÁâàÊú¨

Â¶ÇÊûú‰Ω†Áî®ÊòØ `groupID %% artifactID % revision` ËÄå‰∏çÊòØ `groupID % artifactID % revision`ÔºàÂå∫Âà´Âú®‰∫é `groupID` ÂêéÈù¢ÊòØ `%%`ÔºâÔºåsbt ‰ºöÂú® Â∑•‰ª∂ÂêçÁß∞‰∏≠Âä†‰∏äÈ°πÁõÆÁöÑ Scala ÁâàÊú¨Âè∑„ÄÇ
ËøôÂè™ÊòØ‰∏ÄÁßçÂø´Êç∑ÊñπÊ≥ï„ÄÇ‰Ω†ÂèØ‰ª•ËøôÊ†∑ÂÜô‰∏çÁî® `%%`Ôºö

```scala
libraryDependencies += "org.scala-tools" % "scala-stm_2.11.1" % "0.3"
```

ÂÅáËÆæËøô‰∏™ÊûÑÂª∫ÁöÑ `scalaVersion` ÊòØ `2.11.1`Ôºå‰∏ãÈù¢ËøôÁßçÊñπÂºèÊòØÁ≠âÊïàÁöÑÔºàÊ≥®ÊÑè `"org.scala-tools"` ÂêéÈù¢ÊòØ `%%`ÔºâÔºö

```scala
libraryDependencies += "org.scala-tools" %% "scala-stm" % "0.3"
```

Ëøô‰∏™ÊÉ≥Ê≥ïÊòØÂæàÂ§ö‰æùËµñÈÉΩ‰ºöË¢´ÁºñËØëÁªôÂ§ö‰∏™ Scala ÁâàÊú¨ÔºåËÄå‰Ω†ÊÉ≥Á°Æ‰øùÂíåÈ°πÁõÆÂåπÈÖçÁöÑjarÊòØ‰∫åËøõÂà∂ÂÖºÂÆπÁöÑ„ÄÇ

ÂÆûË∑µ‰∏≠ÁöÑÂ§çÊùÇÂ∫¶Âú®‰∫éÈÄöÂ∏∏‰∏Ä‰∏™‰æùËµñ‰ºöÂíåÁ®çÂæÆ‰∏çÂêåÁöÑ Scala ÁâàÊú¨‰∏ÄËµ∑Â∑•‰ΩúÔºõ‰ΩÜÊòØ `%%` Â∞±Ê≤°ÊúâÈÇ£‰πàÊô∫ËÉΩ‰∫Ü„ÄÇÊâÄ‰ª•Â¶ÇÊûú‰∏Ä‰∏™‰æùËµñË¶ÅÊ±ÇÁâàÊú¨‰∏∫ `2.10.1`Ôºå‰ΩÜÊòØ‰Ω†‰ΩøÁî®ÁöÑ `scalaVersion := "2.10.4"`Ôºå
‰Ω†Êó†Ê≥ï‰ΩøÁî® `%%` ÊñπÊ≥ïÂç≥‰Ωø `2.10.1` ÁöÑÁâàÊú¨ÂæàÂèØËÉΩ‰πüÂèØ‰ª•Â∑•‰Ωú„ÄÇÂ¶ÇÊûú `%%` Êó†Ê≥ïËææÂà∞ÁõÆÁöÑÔºåÂè™ÈúÄË¶ÅÂéªÊ£ÄÊü•ÈÇ£‰∏™‰æùËµñÊòØÂü∫‰∫éÂì™‰∏™ Scala ÁâàÊú¨ÊûÑÂª∫ÁöÑÔºåÁÑ∂ÂêéÁ°¨ÁºñÁ†Å‰Ω†ËÆ§‰∏∫ÂèØ‰ª•Â∑•‰ΩúÁöÑÁâàÊú¨Âè∑ÔºàÂÅáËÆæÂ∑≤ÁªèÊúâ‰∏Ä‰∏™Ôºâ„ÄÇ

ÂèÇËßÅ [‰∫§ÂèâÊûÑÂª∫][Cross-Build] Ëé∑ÂèñÊõ¥Â§ö‰ø°ÊÅØ„ÄÇ

#### Ivy ‰øÆÊ≠£

`groupID % artifactID % revision` ‰∏≠ÁöÑ `revision` ‰∏çÈúÄË¶ÅÊòØ‰∏Ä‰∏™Âõ∫ÂÆöÁöÑÁâàÊú¨Âè∑„ÄÇIvy ËÉΩÂ§üÊ†πÊçÆ‰Ω†ÊåáÂÆöÁöÑÁ∫¶ÊùüÈÄâÊã©‰∏Ä‰∏™Ê®°ÂùóÁöÑÊúÄÊñ∞ÁâàÊú¨„ÄÇ‰Ω†ÊåáÂÆö `"latest.integration"`Ôºå`"2.9.+"` ÊàñËÄÖ `"[1.0,)"`ÔºåËÄå‰∏çÊòØ
‰∏Ä‰∏™Âõ∫ÂÆöÁöÑÁâàÊú¨Âè∑ÔºåÂÉè `"1.6.1"`„ÄÇÂèÇÁúã [Ivy ‰øÆËÆ¢](http://ant.apache.org/ivy/history/2.3.0/ivyfile/dependency.html#revision) ÊñáÊ°£Ëé∑ÂèñËØ¶ÁªÜÂÜÖÂÆπ„ÄÇ

#### Ëß£ÊûêÂô®

‰∏çÊòØÊâÄÊúâÁöÑ‰æùËµñÂåÖÈÉΩÊîæÂú®Âêå‰∏ÄÂè∞ÊúçÂä°Âô®‰∏äÔºåsbt ÈªòËÆ§‰ΩøÁî®Ê†áÂáÜÁöÑ Maven2 ‰ªìÂ∫ì„ÄÇÂ¶ÇÊûú‰Ω†ÁöÑ‰æùËµñ‰∏çÂú®ÈªòËÆ§ÁöÑ‰ªìÂ∫ì‰∏≠Ôºå‰Ω†ÈúÄË¶ÅÊ∑ªÂä† *resolver* Êù•Â∏ÆÂä© Ivy ÊâæÂà∞ÂÆÉ„ÄÇ

ÈÄöËøá‰ª•‰∏ãÂΩ¢ÂºèÊ∑ªÂä†È¢ùÂ§ñÁöÑ‰ªìÂ∫ìÔºö

```scala
resolvers += name at location
```

Âú®‰∏§‰∏™Â≠óÁ¨¶‰∏≤‰∏≠Èó¥Êúâ‰∏Ä‰∏™ÁâπÊÆäÁöÑ `at`„ÄÇ

‰æãÂ¶ÇÔºö

```scala
resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"
```

`resolvers` key Âú® [Keys](../../sxr/sbt/Keys.scala.html#sbt.Keys.resolvers) ‰∏≠ÂÉèËøôÊ†∑ÂÆö‰πâÔºö

```scala
val resolvers = settingKey[Seq[Resolver]]("Áî®Êà∑‰∏∫ÊâòÁÆ°‰æùËµñÂÆö‰πâÁöÑÈ¢ùÂ§ñÁöÑËß£ÊûêÂô®„ÄÇ")
```

`at` ÊñπÊ≥ïÈÄöËøá‰∏§‰∏™Â≠óÁ¨¶‰∏≤ÂàõÂª∫‰∫Ü‰∏Ä‰∏™ `Resolver` ÂØπË±°„ÄÇ

sbt ‰ºöÊêúÁ¥¢‰Ω†ÁöÑÊú¨Âú∞ Maven ‰ªìÂ∫ìÂ¶ÇÊûú‰Ω†Â∞ÜÂÆÉÊ∑ªÂä†‰∏∫‰∏Ä‰∏™‰ªìÂ∫ìÔºö

```scala
resolvers += "Local Maven Repository" at "file://"+Path.userHome.absolutePath+"/.m2/repository"
```

ÊàñËÄÖÔºå‰∏∫‰∫ÜÊñπ‰æøËµ∑ËßÅÔºö

```scala
resolvers += Resolver.mavenLocal
```

ÂèÇËßÅ [Ëß£ÊûêÂô®][Resolvers] Ëé∑ÂèñÊõ¥Â§öÂÖ≥‰∫éÂÆö‰πâÂÖ∂‰ªñÁ±ªÂûãÁöÑ‰ªìÂ∫ìÁöÑÂÜÖÂÆπ„ÄÇ

#### Ë¶ÜÂÜôÈªòËÆ§ÁöÑËß£ÊûêÂô®

`resolvers` ‰∏çÂåÖÂê´ÈªòËÆ§ÁöÑËß£ÊûêÂô®Ôºå‰ªÖ‰ªÖÈÄöËøáÊûÑÂª∫ÂÆö‰πâÊ∑ªÂä†È¢ùÂ§ñÁöÑËß£ÊûêÂô®„ÄÇ

sbt Â∞Ü `resolvers` Âíå‰∏Ä‰∫õÈªòËÆ§ÁöÑ‰ªìÂ∫ìÁªÑÂêàËµ∑Êù•ÊûÑÊàê `externalResolvers`„ÄÇ

ÁÑ∂ËÄåÔºå‰∏∫‰∫ÜÊîπÂèòÊàñËÄÖÁßªÈô§ÈªòËÆ§ÁöÑËß£ÊûêÂô®Ôºå‰Ω†ÈúÄË¶ÅË¶ÜÂÜô`externalResolvers` ËÄå‰∏çÊòØ `resolvers`„ÄÇ

#### Per-configuration dependencies

ÈÄöÂ∏∏‰ºöÊúâ‰æùËµñÂè™Ë¢´ÊµãËØï‰ª£Á†Å‰ΩøÁî®ÔºàÂú® `src/test/scala` ‰∏≠ÔºåÈÄöËøá `Test` configuration ÁºñËØëÔºâËÄåÊ≤°ÊúâÂú®‰∏ªÂ∫îÁî®‰∏≠‰ΩøÁî®„ÄÇ

Â¶ÇÊûú‰Ω†ÊÉ≥Ë¶Å‰∏Ä‰∏™‰æùËµñÂè™Âú® `Test` configuration ÁöÑ classpath ‰∏≠Âá∫Áé∞ËÄå‰∏çÊòØ `Compile` configurationÔºåÂÉèËøôÊ†∑Ê∑ªÂä† `% "test"`Ôºö

```scala
libraryDependencies += "org.apache.derby" % "derby" % "10.4.1.3" % "test"
```

‰πüÂèØËÉΩ‰πü‰ºöÂÉèËøôÊ†∑‰ΩøÁî®Á±ªÂûãÂÆâÂÖ®ÁöÑ `Test` configurationÔºö

```scala
libraryDependencies += "org.apache.derby" % "derby" % "10.4.1.3" % Test
```

Áé∞Âú®ÔºåÂ¶ÇÊûú‰Ω†Âú® sbt ÁöÑÂëΩ‰ª§ÊèêÁ§∫Ë°åÈáåËæìÂÖ• `show compile:dependencyClasspath`Ôºå‰Ω†‰∏çÂ∫îËØ•ÁúãÂà∞ derby jar„ÄÇ‰ΩÜÊòØÂ¶ÇÊûú‰Ω†ËæìÂÖ• `show test:dependencyClasspath`Ôºå
‰Ω†Â∫îËØ•Âú®ÂàóË°®‰∏≠ÁúãÂà∞ derby jar„ÄÇ

ÈÄöÂ∏∏ÔºåÊµãËØïÁõ∏ÂÖ≥ÁöÑ‰æùËµñÔºåÂ¶Ç [ScalaCheck](http://scalacheck.org/)Ôºå
[Specs2](http://specs2.org) Âíå [ScalaTest](http://www.scalatest.org/) Â∞Ü‰ºöË¢´ÂÆö‰πâ‰∏∫ `% "test"`„ÄÇ

Â∫ì‰æùËµñÊõ¥ËØ¶ÁªÜÁöÑÂÜÖÂÆπÂíåÊäÄÂ∑ßÂú®[ËøôÈáå][Library-Management]„ÄÇ


  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [Directories]: Directories.html
  [Organizing-Build]: Organizing-Build.html

Â§öÈ°πÁõÆÊûÑÂª∫
--------------------

Ëøô‰∏ÄÂ∞èËäÇ‰ªãÁªçÂú®‰∏Ä‰∏™ÊûÑÂª∫‰∏≠ÂÆö‰πâÂ§ö‰∏™È°πÁõÆ„ÄÇ

ËØ∑ÂÖàÈòÖËØªÂÖ•Èó®ÊåáÂçóÂâçÈù¢ÁöÑÂÜÖÂÆπÔºåÂ∞§ÂÖ∂ÈúÄË¶ÅÂú®ÈòÖËØªÊú¨Â∞èËäÇ‰πãÂâçÁêÜËß£ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]„ÄÇ

### Â§öÈ°πÁõÆ

Â∞ÜÂ§ö‰∏™Áõ∏ÂÖ≥ÁöÑÈ°πÁõÆÂÆö‰πâÂú®‰∏Ä‰∏™ÊûÑÂª∫‰∏≠ÊòØÂæàÊúâÁî®ÁöÑÔºåÂ∞§ÂÖ∂ÊòØÂ¶ÇÊûúÂÆÉ‰ª¨‰æùËµñÂè¶‰∏Ä‰∏™ÔºåËÄå‰∏î‰Ω†ÂÄæÂêë‰∫é‰∏ÄËµ∑‰øÆÊîπÂÆÉ‰ª¨„ÄÇ

ÊØè‰∏™Â≠êÈ°πÁõÆÂú®ÊûÑÂª∫‰∏≠ÈÉΩÊúâÂÆÉ‰ª¨Ëá™Â∑±ÁöÑÊ∫êÊñá‰ª∂Â§πÔºåÂΩìÊâìÂåÖÊó∂ÁîüÊàêÂêÑËá™ÁöÑ jar Êñá‰ª∂ÔºåËÄå‰∏îÈÄöÂ∏∏ÂíåÂÖ∂‰ªñÁöÑÈ°πÁõÆ‰∏ÄÊ†∑ËøêËΩ¨„ÄÇ

ÈÄöËøáÂ£∞Êòé‰∏Ä‰∏™Á±ªÂûã‰∏∫ [Project](../../api/sbt/Project.html) ÁöÑ lazy val ÂÆö‰πâ‰∏Ä‰∏™È°πÁõÆÔºå‰æãÂ¶ÇÔºö

```scala
lazy val util = project

lazy val core = project
```

val ÁöÑÂêçÁß∞Ë¢´Áî®‰ΩúÈ°πÁõÆÁöÑ ID ÂíåÂü∫ÁõÆÂΩïÂêç„ÄÇËØ• ID Áî®‰∫éÂú®ÂëΩ‰ª§Ë°å‰∏≠ÂºïÁî®ËØ•È°πÁõÆ„ÄÇÂü∫ÁõÆÂΩïÂèØËÉΩÈÄöËøá `in` ÊñπÊ≥ïÊîπÂèò„ÄÇ‰æãÂ¶ÇÔºå‰∏ãÈù¢ÊòØ‰∏Ä‰∏™Êõ¥Âä†ÊòæÁ§∫ÁöÑÊñπÂºèÊù•ÂÆûÁé∞Ââç‰∏Ä‰∏™‰æãÂ≠êÔºö

```scala
lazy val util = project.in(file("util"))

lazy val core = project in file("core")
```

#### ÂÖ¨ÂÖ±ËÆæÂÆö

To factor out common settings across multiple projects, create a sequence named `commonSettings` and call `settings` method on each project. Note `_*` is required to pass sequence into a vararg method.
Ë¶ÅË∑®Â§ö‰∏™È°πÁõÆÊèêÂèñÂÖ¨ÂÖ±ËÆæÁΩÆÔºåËØ∑ÂàõÂª∫‰∏Ä‰∏™Âêç‰∏∫`commonSettings`ÁöÑÂ∫èÂàóÔºåÂπ∂Âú®ÊØè‰∏™È°πÁõÆ‰∏äË∞ÉÁî®`settings`ÊñπÊ≥ï„ÄÇÊ≥®ÊÑèË¶Å‰º†ÂÖ•Â∫èÂàóÁªôÂèòÂèÇÊï∞ÊñπÊ≥ïÊó∂ÈúÄË¶ÅË∞ÉÁî®`_*`„ÄÇ

```scala
lazy val commonSettings = Seq(
  organization := "com.example",
  version := "0.1.0",
  scalaVersion := "2.11.7"
)

lazy val core = (project in file("core")).
  settings(commonSettings: _*).
  settings(
    // other settings
  )

lazy val util = (project in file("util")).
  settings(commonSettings: _*).
  settings(
    // other settings
  )
```

Áé∞Âú®Êàë‰ª¨ÂèØ‰ª•Âú®‰∏ÄÂ§Ñ‰øÆÊîπ`version`ÔºåÂΩìÈáçÊñ∞Âä†ËΩΩÊûÑÂª∫Êó∂ÔºåÂ∞ÜÂú®ÂêÑ‰∏™Â≠êÈ°πÁõÆÁõ∏Â∫îÊõ¥Êñ∞„ÄÇ

### ‰æùËµñ

ÊûÑÂª∫‰∏≠ÁöÑÈ°πÁõÆÂÆåÂÖ®ÂèØ‰ª•ÂΩºÊ≠§Áã¨Á´ãÔºå‰ΩÜÊòØÈÄöÂ∏∏ÊÉÖÂÜµ‰∏ãÂÆÉ‰ª¨‰ºöÊúâ‰æùËµñ‰∏äÁöÑ‰∏Ä‰∫õÁõ∏ÂÖ≥ÊÄß„ÄÇÊúâ‰∏§ÁßçÁ±ªÂûãÁöÑ‰æùËµñÔºöaggregate Âíå classpath„ÄÇ

#### Aggregation

Aggregation ÊÑèÂë≥ÁùÄÂú® aggregate È°πÁõÆ‰∏äÊâßË°å‰∏Ä‰∏™ task ‰πü‰ºöÂú® aggregated ÁöÑÈ°πÁõÆÊâßË°å„ÄÇ‰æãÂ¶ÇÔºå

```scala
lazy val root = (project in file(".")).aggregate(util, core)

lazy val util = project

lazy val core = project
```

Âú®‰∏äÈù¢ÁöÑ‰æãÂ≠ê‰∏≠Ôºåroot È°πÁõÆËÅöÂêà‰∫Ü `util` Âíå `core`„ÄÇÂÉè‰æãÂ≠ê‰∏≠‰∏ÄÊ†∑ÔºåÈöèÁùÄÊúâ‰∏§‰∏™Â≠êÈ°πÁõÆÁöÑÊÉÖÂÜµ‰∏ãÂêØÂä® sbtÔºåÁÑ∂ÂêéÂ∞ùËØïÁºñËØë„ÄÇ‰Ω†Â∫îËØ•‰ºöÁúãÂà∞ÂÖ®ÈÉ®ÁöÑ‰∏â‰∏™È°πÁõÆÈÉΩË¢´ÁºñËØë‰∫Ü„ÄÇ

*Âú®ËøõË°åËÅöÂêàÁöÑÈ°πÁõÆ‰∏≠*ÔºåÂÉèËøô‰∏™‰æãÂ≠ê‰∏≠ÁöÑ root È°πÁõÆ‰∏ÄÊ†∑Ôºå‰Ω†ÂèØ‰ª•Êåâ task Êù•ÊéßÂà∂ËÅöÂêà„ÄÇ‰æãÂ¶ÇÔºå‰∏∫‰∫ÜÈÅøÂÖçËÅöÂêà `update` taskÔºö

```scala
lazy val root = (project in file(".")).
  aggregate(util, core).
  settings(
    aggregate in update := false
  )

[...]
```

`aggregate in update` ÊòØ `update` task ÁöÑ scope ‰∏ãÁöÑËÅöÂêàÁöÑ key„ÄÇÔºàÂèÇËßÅ [scopes][Scopes]„ÄÇÔºâ

Ê≥®ÊÑèÔºöËÅöÂêà‰ºöÂπ∂Ë°åÁöÑÊâßË°åËÅöÂêàÁöÑ taskÔºåtask ‰πãÈó¥ÁöÑÈ°∫Â∫èÊòØ‰∏çÁ°ÆÂÆöÁöÑ„ÄÇ

#### Classpath ‰æùËµñ

‰∏Ä‰∏™È°πÁõÆÂèØËÉΩ‰æùËµñÂè¶‰∏Ä‰∏™È°πÁõÆÁöÑ‰ª£Á†Å„ÄÇËøôÊòØÈÄöËøáÊ∑ªÂä† `dependsOn` ÊñπÊ≥ïÊù•ÂÆûÁé∞ÁöÑ„ÄÇ‰æãÂ¶ÇÔºåÂ¶ÇÊûú core Âú® classpath ‰∏≠ÈúÄË¶Å utilÔºå‰Ω†Â∞ÜËøôÊ†∑ÂÆö‰πâ coreÔºö

```scala
lazy val core = project.dependsOn(util)
```

Áé∞Âú® `core` ‰∏≠ÁöÑ‰ª£Á†ÅÂèØ‰ª•‰ΩøÁî® `util` ÁöÑÁ±ª„ÄÇÂú®ÁºñËØëÊó∂‰πü‰ºöÂú®‰∏§‰∏™È°πÁõÆ‰πãÈó¥ÂàõÂª∫È°∫Â∫èÔºõÂú®ÁºñËØë core ‰πãÂâçÔºå`util` ÂøÖÈ°ªË¢´Êõ¥Êñ∞ÂíåÁºñËØëËøá„ÄÇ

‰∏∫‰∫Ü‰æùËµñÂ§ö‰∏™È°πÁõÆÔºåÂÉèËøôÊ†∑ `dependsOn(bar, baz)` Áªô `dependsOn` Â§ö‰∏™ÂèÇÊï∞„ÄÇ

##### configuration Á≤íÂ∫¶ÁöÑ classpath ‰æùËµñ

`foo dependsOn(bar)` Ë°®Á§∫ `foo` ‰∏≠ÁöÑ `compile` configuration ‰æùËµñ‰∫é `bar` ‰∏≠ÁöÑ `compile` configuration„ÄÇ‰Ω†ÂèØ‰ª•ÊòæÁ§∫ÁöÑÂÜôÊàêËøôÊ†∑Ôºö`dependsOn(bar % "compile->compile")`„ÄÇ

`"compile->compile"` ‰∏≠ÁöÑ `->` Ë°®Á§∫ "depends on"ÔºåÊâÄ‰ª• `"test->compile"` Ë°®Á§∫ `foo` ‰∏≠ÁöÑ `test` configuration Â∞Ü‰æùËµñ‰∫é `bar` ‰∏≠ÁöÑ `compile` configuration„ÄÇ

ÁúÅÁï• `->config` ÈÉ®ÂàÜÊöóÁ§∫ `->compile`ÔºåÊâÄ‰ª• `dependsOn(bar % "test")` Ë°®Á§∫ `foo` ‰∏≠ÁöÑ `test` configuration ‰æùËµñ‰∫é `bar` ‰∏≠ÁöÑ `Compile` configuration„ÄÇ

‰∏Ä‰∏™ÂÆûÁî®ÁöÑÂ£∞Êòé `"test->test"` Ë°®Á§∫ `test` ‰æùËµñ‰∫é `test`„ÄÇ‰æãÂ¶ÇÔºåËøôÊ†∑ÂÖÅËÆ∏‰Ω†Â∞ÜÊµãËØïÂ∑•ÂÖ∑‰ª£Á†ÅÊîæÂú® `bar/src/test/scala` ‰∏≠ÔºåÁÑ∂ÂêéÂú® `foo/src/test/scala` ‰∏≠‰ΩøÁî®Ëøô‰∫õ‰ª£Á†ÅÔºå

ÂØπ‰∫é‰∏Ä‰∏™‰æùËµñ‰Ω†ÂèØ‰ª•ÊúâÂ§ö‰∏™ configurationÔºå‰ª•ÂàÜÂè∑ÂàÜÈöîÔºå‰æãÂ¶ÇÔºö`dependsOn(bar % "test->test;compile->compile")`„ÄÇ

### ÈªòËÆ§ÁöÑ root È°πÁõÆ

Â¶ÇÊûúÂú®ÊûÑÂª∫‰∏≠Ê†πÁõÆÂΩïÊ≤°ÊúâÂÆö‰πâÈ°πÁõÆÔºåsbt ‰ºöÂú®ÊûÑÂª∫‰∏≠ÂàõÂª∫‰∏Ä‰∏™ÈªòËÆ§ÁöÑÈ°πÁõÆÂπ∂Â∞ÜÂÖ∂‰ªñÈ°πÁõÆ‰πüËÅöÂêàËµ∑Êù•„ÄÇ

Âõ†‰∏∫ `hello-foo` È°πÁõÆÂÆö‰πâ‰∫Ü `base = file("foo")`ÔºåÂÆÉÂ∞Ü‰ºöË¢´ÂåÖÂê´Âú® foo Â≠êÁõÆÂΩï‰∏≠„ÄÇ
ÂÆÉÁöÑÊ∫êÊñá‰ª∂ÂèØ‰ª•Áõ¥Êé•ÊîæÂú® `foo` ‰∏ãÔºåÂÉè `foo/Foo.scala`ÔºåÊàñËÄÖÂú® `foo/src/main/scala` ‰∏≠„ÄÇÈÄöÂ∏∏ sbt ÁöÑ [ÁõÆÂΩïÁªìÊûÑ][Directories] Â∫îÁî®Âú® `foo` ÁõÆÂΩï‰∏ãÈô§‰∫ÜÊûÑÂª∫ÂÆö‰πâÊñá‰ª∂„ÄÇ

`foo` ‰∏≠ÁöÑ‰ªª‰Ωï `.sbt` Êñá‰ª∂ÔºåÊØîÂ¶ÇËØ¥ `foo/build.sbt`ÔºåÂ∞Ü‰ºöÂíåÊï¥‰∏™ÊûÑÂª∫ÂêàÂπ∂Ôºå‰ΩÜÊòØÂú® `hello-foo` È°πÁõÆÁöÑ scope ‰∏≠„ÄÇ

Â¶ÇÊûú‰Ω†ÁöÑÁöÑÊï¥‰∏™È°πÁõÆÈÉΩÂú® hello ‰∏≠ÔºåÂ∞ùËØïÂú® `hello/build.sbt`Ôºå`hello/bar/build.sbt` Âíå `hello/foo/build.sbt` ‰∏≠ÂÆö‰πâ‰∏Ä‰∏™‰∏çÂêåÁöÑÁâàÊú¨Ôºà`version := "0.6"`Ôºâ„ÄÇ
Áé∞Âú®Âú® sbt ÁöÑÂëΩ‰ª§Ë°å‰∏≠ÊâßË°å `show version`„ÄÇ‰Ω†Â∫îËØ•ÂæóÂà∞ËøôÊ†∑ÁöÑ‰ø°ÊÅØÔºàÈöèÁùÄ‰Ω†ÂÆö‰πâÁöÑ‰ªª‰ΩïÁâàÊú¨ÔºâÔºö

```
> show version
[info] hello-foo/*:version
[info]  0.7
[info] hello-bar/*:version
[info]  0.9
[info] hello/*:version
[info]  0.5
```

`hello-foo/*:version` ÂÆö‰πâÂú® `hello/foo/build.sbt` ‰∏≠Ôºå`hello-bar/*:version` ÂÆö‰πâÂú® `hello/bar/build.sbt` ‰∏≠Ôºå`hello/*:version` ÂÆö‰πâÂú® `hello/build.sbt` ‰∏≠„ÄÇ
ËÆ∞‰Ωè [scoped keys ÁöÑËØ≠Ê≥ï][Scopes]„ÄÇÊØè‰∏™ `version` key Âú®ÂØπÂ∫îÁöÑÈ°πÁõÆÁöÑ scope ‰∏≠ÔºåÂü∫‰∫é `build.sbt` Êñá‰ª∂ÁöÑ‰ΩçÁΩÆ„ÄÇ‰ΩÜÊòØÊâÄÊúâÁöÑ‰∏â‰∏™ `build.sbt` Êñá‰ª∂ÈÉΩÂè™ÊòØÊï¥‰∏™ÊûÑÂª∫ÂÆö‰πâÁöÑ‰∏ÄÈÉ®ÂàÜ„ÄÇ

*ÊØè‰∏™È°πÁõÆÁöÑËÆæÁΩÆÈÉΩÂèØ‰ª•ÊîæËØ•È°πÁõÆÂü∫ÁõÆÂΩï‰∏ãÁöÑ `.sbt` Êñá‰ª∂‰∏≠*ÔºåÁÑ∂ËÄå `.scala` Êñá‰ª∂ÂèØ‰ª•Âíå‰∏äÈù¢Â±ïÁ§∫ÁöÑ‰∏ÄÊ†∑ÁÆÄÂçïÔºåÂàóÂá∫È°πÁõÆÂíåÂü∫ÁõÆÂΩï„ÄÇ*Ê≤°ÂøÖË¶ÅÂ∞ÜËÆæÁΩÆÊîæÂà∞ `.scala` Êñá‰ª∂‰∏≠„ÄÇ*

ÁÑ∂ËÄåÔºå‰∏∫‰∫ÜÂ∞ÜÊâÄÊúâÊûÑÂª∫ÂÆö‰πâÈÉΩÊîæÂú®‰∏Ä‰∏™È°πÁõÆÁõÆÂΩï‰∏ãÔºå‰Ω†‰ºöÂèëÁé∞Â∞ÜÊâÄÊúâÁöÑËÆæÁΩÆÈÉΩÊîæÂú® `.scala` ‰∏≠‰ºöÂπ≤ÂáÄÂæàÂ§ö„ÄÇÁî±‰Ω†ÂÅö‰∏ª„ÄÇ

Âú®Â≠êÈ°πÁõÆ‰∏≠Ôºå‰Ω†‰∏çËÉΩÊúâÈ°πÁõÆÁöÑÂ≠êÁõÆÂΩïÊàñËÄÖ `project/*.scala` Êñá‰ª∂„ÄÇ`foo/project/Build.scala` Â∞Ü‰ºöË¢´ÂøΩÁï•„ÄÇ

### ‰∫§‰∫íÂºèÂºïÂØºÈ°πÁõÆ

Âú® sbt ÁöÑÂëΩ‰ª§Ë°å‰∏≠ÔºåËæìÂÖ• `projects` ÂàóÂá∫‰Ω†ÁöÑÈ°πÁõÆÔºåÊâßË°å `project <projectname>` ÂèØ‰ª•ÈÄâÊã©ÂΩìÂâçÈ°πÁõÆ„ÄÇÂΩì‰Ω†ÊâßË°å task ÂÉè `compile`ÔºåÂÆÉ‰ºöÂú®ÂΩìÂâçÈ°πÁõÆ‰∏äÊâßË°å„ÄÇ
ÊâÄ‰ª•‰Ω†Ê≤°ÊúâÂøÖË¶ÅÂéªÁºñËØë root È°πÁõÆÔºå‰Ω†ÂèØ‰ª•Âè™ÁºñËØëÂ≠êÈ°πÁõÆ„ÄÇ

‰Ω†ÂèØ‰ª•ÈÄöËøáÊòæÁ§∫ÁöÑÊåáÂÆöÈ°πÁõÆ ID Âú®Âè¶‰∏Ä‰∏™È°πÁõÆ‰∏äÊâßË°å‰∏Ä‰∏™ taskÔºå‰æãÂ¶Ç `subProjectID/compile`„ÄÇ

### ÈÄöÁî®‰ª£Á†Å

Âú®‰∏Ä‰∏™ `.sbt` Êñá‰ª∂‰∏≠ÁöÑÂÆö‰πâÂØπ‰∫éÂÖ∂‰ªñÁöÑ `.sbt` Êñá‰ª∂‰∏çÂèØËßÅ„ÄÇ‰∏∫‰∫ÜÂú®‰∏çÂêåÁöÑ `.sbt` Êñá‰ª∂‰∏≠ÂÖ±‰∫´‰ª£Á†ÅÔºåÂú®ÊûÑÂª∫Ê†πÁõÆÂΩï‰∏ãÁöÑ `project/` ÁõÆÂΩï‰∏ãÂÆö‰πâ‰∏Ä‰∏™ÊàñÂ§ö‰∏™ Scala Êñá‰ª∂„ÄÇ

ÂèÇËßÅ [ÁªÑÁªáÊûÑÂª∫][Organizing-Build] Ëé∑ÂèñËØ¶ÁªÜÂÜÖÂÆπ„ÄÇ


  [Basic-Def]: Basic-Def.html
  [Library-Dependencies]: Library-Dependencies.html
  [Multi-Project]: Multi-Project.html
  [global-vs-local-plugins]: ../docs/Best-Practices.html#global-vs-local-plugins
  [Community-Plugins]: ../docs/Community-Plugins.html
  [Plugins]: ../docs/Plugins.html
  [Plugins-Best-Practices]: ../docs/Plugins-Best-Practices.html

‰ΩøÁî®Êèí‰ª∂
-------------

ËØ∑ÂÖàÈòÖËØªÂÖ•Èó®ÊåáÂçóÂâçÈù¢ÁöÑÂÜÖÂÆπÔºåÂ∞§ÂÖ∂ÈúÄË¶ÅÂú®ÈòÖËØªÊú¨Â∞èËäÇ‰πãÂâçÁêÜËß£ [build.sbt][Basic-Def] Âíå [Â∫ì‰æùËµñ][Library-Dependencies]„ÄÇ

### ‰ªÄ‰πàÊòØÊèí‰ª∂

Êèí‰ª∂ÁªßÊâø‰∫ÜÊûÑÂª∫ÂÆö‰πâÔºåÂ§ßÂ§öÊï∞ÈÄöÂ∏∏ÊòØÈÄöËøáÊ∑ªÂä†ËÆæÁΩÆ„ÄÇÊñ∞ÁöÑËÆæÁΩÆÂèØ‰ª•ÊòØÊñ∞ÁöÑ task„ÄÇ‰æãÂ¶ÇÔºå‰∏Ä‰∏™Êèí‰ª∂ÂèØ‰ª•Ê∑ªÂä†‰∏Ä‰∏™ `codeCoverage` task Êù•ÁîüÊàê‰∏Ä‰∏™ÊµãËØïË¶ÜÁõñÁéáÊä•Âëä„ÄÇ

### Â£∞Êòé‰∏Ä‰∏™Êèí‰ª∂

Â¶ÇÊûú‰Ω†ÁöÑÈ°πÁõÆÂú® `hello` ÁõÆÂΩï‰∏ãÔºåËÄå‰∏î‰Ω†Ê≠£Âú®ÂæÄÊûÑÂª∫ÂÆö‰πâ‰∏≠Ê∑ªÂä†‰∏Ä‰∏™ sbt-site Êèí‰ª∂ÔºåÂàõÂª∫ `hello/project/site.sbt` Âπ∂‰∏îÈÄöËøá‰º†ÈÄíÊèí‰ª∂ÁöÑ Ivy Ê®°Âùó ID Â£∞ÊòéÊèí‰ª∂‰æùËµñ Áªô `addSbtPlugin`Ôºö

```scala
addSbtPlugin("com.typesafe.sbt" % "sbt-site" % "0.7.0")
```

Â¶ÇÊûú‰Ω†Ê∑ªÂä† sbt-assemblyÔºåÂÉè‰∏ãÈù¢ËøôÊ†∑ÂàõÂª∫ `hello/project/assembly.sbt` Ôºö

```scala
addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.11.2")
```

‰∏çÊòØÊâÄÊúâÁöÑÊèí‰ª∂ÈÉΩÂú®Âêå‰∏Ä‰∏™ÈªòËÆ§ÁöÑ‰ªìÂ∫ì‰∏≠ÔºåËÄå‰∏î‰∏Ä‰∏™Êèí‰ª∂ÁöÑÊñáÊ°£‰ºöÊåáÂØº‰Ω†Ê∑ªÂä†ËÉΩÂ§üÊâæÂà∞ÂÆÉÁöÑ‰ªìÂ∫ìÔºö

```scala
resolvers += Resolver.sonatypeRepo("public")
```

Êèí‰ª∂ÈÄöÂ∏∏Êèê‰æõËÆæÁΩÆÂ∞ÜÂÆÉÊ∑ªÂä†Âà∞È°πÁõÆÂπ∂‰∏îÂºÄÂêØÊèí‰ª∂ÂäüËÉΩ„ÄÇËøô‰∫õÂ∞ÜÂú®‰∏ã‰∏ÄÂ∞èËäÇÊèèËø∞„ÄÇ

### ÂêØÁî®ÂíåÁ¶ÅÁî®Ëá™Âä®Êèí‰ª∂

‰∏Ä‰∏™Êèí‰ª∂ËÉΩÂ§üÂ£∞ÊòéÂÆÉËá™Â∑±ÁöÑËÆæÁΩÆË¢´Ëá™Âä®Ê∑ªÂä†Âà∞ÊûÑÂª∫ÂÆö‰πâ‰∏≠ÂéªÔºåÂú®ËøôÁßçÊÉÖÂÜµ‰∏ã‰Ω†‰∏çÈúÄË¶Å‰∏∫Ê∑ªÂä†ÂÆÉÂÅö‰ªª‰Ωï‰∫ãÊÉÖ„ÄÇ

‰Ωú‰∏∫ 0.13.5 ÁâàÊú¨ÁöÑ sbtÔºåÊúâ‰∏Ä‰∏™Êñ∞ÁöÑÁâπÊÄßÂè´[Ëá™Âä®Êèí‰ª∂][Plugins]ÔºåÂÆÉËÉΩÂ§üÂú®Ëá™Âä®ÁöÑ„ÄÅÂÆâÂÖ®ÁöÑ„ÄÅÁ°Æ‰øùÊâÄÊúâ‰æùËµñÈÉΩÂú®È°πÁõÆÈáåÁöÑÂâçÊèê‰∏ãÂºÄÂêØÊèí‰ª∂„ÄÇÂæàÂ§öËá™Âä®Êèí‰ª∂Â∫îËØ•ËÉΩÂ§üËá™Âä®ÂºÄÂêØÔºåÁÑ∂ËÄåÊúâ‰∫õÂç¥ÈúÄË¶ÅÊòæÂºèÂºÄÂêØ„ÄÇ

Â¶ÇÊûú‰Ω†Ê≠£Âú®‰ΩøÁî®‰∏Ä‰∏™ÈúÄË¶ÅÊòæÁ§∫ÂºÄÂêØÁöÑËá™Âä®Êèí‰ª∂ÔºåÈÇ£‰πà‰Ω†ÈúÄË¶ÅÊ∑ªÂä†ËøôÊ†∑ÁöÑ‰ª£Á†ÅÂà∞‰Ω†ÁöÑ `build.sbt` Êñá‰ª∂Ôºö

```scala
lazy val util = (project in file("util")).
  enablePlugins(FooPlugin, BarPlugin).
  settings(
    name := "hello-util"
  )
```

`enablePlugins` ÊñπÊ≥ïÂÖÅËÆ∏È°πÁõÆÊòæÂºèÂÆö‰πâÂÆÉ‰ª¨ÈúÄË¶Å‰ΩøÁî®ÁöÑËá™Âä®Êèí‰ª∂„ÄÇ

È°πÁõÆ‰πüÂèØ‰ª•‰ΩøÁî® `disablePlugins` ÊñπÊ≥ïÊéíÈô§Êéâ‰∏Ä‰∫õÊèí‰ª∂„ÄÇ‰æãÂ¶ÇÔºåÂ¶ÇÊûúÊàë‰ª¨Â∏åÊúõËÉΩÂ§ü‰ªé `util` ‰∏≠ÁßªÈô§ `IvyPlugin` Êèí‰ª∂ÁöÑËÆæÁΩÆÔºåÊàë‰ª¨Â∞Ü `build.sbt` ‰øÆÊîπÂ¶Ç‰∏ãÔºö

```scala
lazy val util = (project in file("util")).
  enablePlugins(FooPlugin, BarPlugin).
  disablePlugins(plugins.IvyPlugin).
  settings(
    name := "hello-util"
  )
```

Ëá™Âä®Êèí‰ª∂‰ºöÂú®ÊñáÊ°£‰∏≠ËØ¥ÊòéÊòØÂê¶ÈúÄË¶ÅÊòæÁ§∫ÁöÑÂºÄÂêØ„ÄÇÂ¶ÇÊûú‰Ω†ÂØπ‰∏Ä‰∏™È°πÁõÆ‰∏≠ÂºÄÂêØ‰∫ÜÂì™‰∫õÊèí‰ª∂Â•ΩÂ•áÔºåÂè™ÈúÄË¶ÅÂú® sbt ÂëΩ‰ª§Ë°å‰∏≠ÊâßË°å `plugins` ÂëΩ‰ª§„ÄÇ

‰æãÂ¶ÇÔºö

```
> plugins
In file:/home/jsuereth/projects/sbt/test-ivy-issues/
        sbt.plugins.IvyPlugin: enabled in scala-sbt-org
        sbt.plugins.JvmPlugin: enabled in scala-sbt-org
        sbt.plugins.CorePlugin: enabled in scala-sbt-org
        sbt.plugins.JUnitXmlReportPlugin: enabled in scala-sbt-org
```

ËøôÈáåÔºå `plugins` ÁöÑËæìÂá∫ÊòæÁ§∫ sbt ÈªòËÆ§ÁöÑÊèí‰ª∂ÈÉΩË¢´ÂºÄÂêØ‰∫Ü„ÄÇsbt ÈªòËÆ§ÁöÑËÆæÁΩÆÈÄöËøá3‰∏™Êèí‰ª∂Êèê‰æõÔºö

1.  `CorePlugin`: Êèê‰æõÂØπ task ÁöÑÊ†∏ÂøÉÂπ∂Ë°åÊéßÂà∂„ÄÇ
2.  `IvyPlugin`: Êèê‰æõÂèëÂ∏É„ÄÅËß£ÊûêÊ®°ÂùóÁöÑÊú∫Âà∂„ÄÇ
3.  `JvmPlugin`: Êèê‰æõÁºñËØë„ÄÅÊµãËØï„ÄÅÊâßË°å„ÄÅÊâìÂåÖ Java/Scala È°πÁõÆÁöÑÊú∫Âà∂„ÄÇ

Âè¶Â§ñÔºå`JUnitXmlReportPlugin` Êèê‰æõÂØπÁîüÊàê junit-xml ÁöÑËØïÈ™åÊÄßÊîØÊåÅ„ÄÇ

ËÄÅÁöÑÈùûËá™Âä®ÁöÑÊèí‰ª∂ÈÄöÂ∏∏ÈúÄË¶ÅÊòæÁ§∫ÁöÑÊ∑ªÂä†ËÆæÁΩÆÔºå‰ª•Ëá¥‰∫é[Â§öÈ°πÁõÆÊûÑÂª∫][Multi-Project]ÂèØ‰ª•Êúâ‰∏çÂêåÁöÑÈ°πÁõÆÁ±ªÂûã„ÄÇÊèí‰ª∂ÁöÑÊñáÊ°£‰ºöÊåáÂá∫Â¶Ç‰ΩïÈÖçÁΩÆÂÆÉÔºå‰ΩÜÊòØÁâπÂà´ÊòØÂØπ‰∫éËÄÅÁöÑÊèí‰ª∂ÔºåËøôÂåÖÂê´Ê∑ªÂä†ÂØπÊèí‰ª∂ÂøÖË¶ÅÁöÑÂü∫Êú¨ËÆæÁΩÆÂíåËá™ÂÆö‰πâ„ÄÇ

‰æãÂ¶ÇÔºåÂØπ‰∫é sbt-site Êèí‰ª∂Ôºå‰∏∫‰∫ÜÂú®È°πÁõÆ‰∏≠ÂºÄÂêØÂÆÉÔºåÈúÄË¶ÅÂàõÂª∫ÂåÖÂê´Â¶Ç‰∏ãÂÜÖÂÆπÁöÑ `site.sbt` Êñá‰ª∂Êù•„ÄÇ

```scala
site.settings
```

Â¶ÇÊûúÊûÑÂª∫ÂÆö‰πâ‰∫ÜÂ§ö‰∏™È°πÁõÆÔºåÂæÄÈ°πÁõÆ‰∏≠Áõ¥Êé•Ê∑ªÂä†Â¶Ç‰∏ãÂÜÖÂÆπÊõøËÄå‰ª£‰πãÔºö

```scala
// Âú® `util` È°πÁõÆ‰∏≠‰∏ç‰ΩøÁî® site Êèí‰ª∂
lazy val util = (project in file("util"))

// Âú®`core` È°πÁõÆ‰∏≠ÂºÄÂêØ site Êèí‰ª∂
lazy val core = (project in file("core")).
  settings(site.settings : _*)
```

### ÂÖ®Â±ÄÊèí‰ª∂

ÂèØ‰ª•‰∏ÄÊ¨°ÁªôÊâÄÊúâÈ°πÁõÆÂÆâË£ÖÊèí‰ª∂ÔºåÂè™Ë¶ÅÂú® `~/.sbt/0.13/plugins/` ‰∏≠Â£∞ÊòéÂÆÉ‰ª¨„ÄÇ`~/.sbt/0.13/plugins/` ÊòØ‰∏Ä‰∏™Â∞ÜËá™Â∑±ÁöÑ classpath ÂØºÂá∫ÁªôÊâÄÊúâÈ°πÁõÆÁöÑ sbt ÊûÑÂª∫ÂÆö‰πâ„ÄÇ
Ê¶ÇÁï•Âú∞ËÆ≤ÔºåÂú® `~/.sbt/0.13/plugins/` ‰∏≠ÁöÑ‰ªª‰Ωï `.sbt` ÊàñËÄÖ `.scala` Êñá‰ª∂Â∞±ÂíåÊâÄÊúâÈ°πÁõÆÁöÑ `project/` ÁõÆÂΩï‰∏ãÁöÑ‰∏ÄÊ†∑„ÄÇ

‰∏∫‰∫Ü‰∏ÄÊ¨°ÁªôÊâÄÊúâÁöÑÈ°πÁõÆÊ∑ªÂä†Êèí‰ª∂Ôºå‰Ω†ÂèØ‰ª•ÂàõÂª∫ `~/.sbt/0.13/plugins//build.sbt` Âπ∂‰∏îÊ∑ªÂä† `addSbtPlugin()` Ë°®ËææÂºè„ÄÇÂõ†‰∏∫ËøôÊ†∑ÂÅö‰ºöÂ¢ûÂä†Êú∫Âô®‰∏äÁöÑ‰æùËµñÔºåÊâÄ‰ª•Ëøô‰∏™ÁâπÊÄßÂ∫îËØ•Â∞ëÁî®„ÄÇ
ÂèÇËßÅ[ÊúÄ‰Ω≥ÂÆûË∑µ][global-vs-local-plugins]„ÄÇ

### ÂèØÁî®ÁöÑÊèí‰ª∂

ËøôÈáåÊúâ‰∏Ä‰∏™ÂèØÁî®ÁöÑ[Êèí‰ª∂ÂàóË°®][Community-Plugins]„ÄÇ

‰∏Ä‰∫õÁâπÂà´ÊµÅË°åÁöÑÊèí‰ª∂Â¶Ç‰∏ãÔºö

-   ÂØπ IDE ÁöÑÊîØÊåÅÔºà‰∏∫‰∫ÜÂ∞Ü sbt È°πÁõÆÂØºÂÖ•Âà∞ IDEÔºâ
-   ÂØπ web Ê°ÜÊû∂ÁöÑÊîØÊåÅÔºå‰æãÂ¶Ç[xsbt-web-plugin](https://github.com/earldouglas/xsbt-web-plugin)„ÄÇ

Êõ¥Â§öËØ¶ÁªÜ‰ø°ÊÅØÔºåÂåÖÂê´ÂºÄÂèëÊèí‰ª∂ÁöÑÊñπÊ≥ïÔºåÂèÇËßÅ[Êèí‰ª∂][Plugins]„ÄÇ
ÂÖ≥‰∫éÊúÄ‰Ω≥ÂÆûË∑µÔºåÂèÇËßÅ[Êèí‰ª∂ÊúÄ‰Ω≥ÂÆûË∑µ][Plugins-Best-Practices]„ÄÇ


  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Using-Plugins]: Using-Plugins.html
  [Organizing-Build]: Organizing-Build.html
  [Input-Tasks]: ../docs/Input-Tasks.html
  [Plugins]: ../docs/Plugins.html
  [Tasks]: ../docs/Tasks.html

Ëá™ÂÆö‰πâËÆæÁΩÆÂíå‰ªªÂä°
-------------------------

Ëøô‰∏ÄÂ∞èËäÇËÆ≤Ëß£Â¶Ç‰ΩïÂàõÂª∫Ëá™ÂÆö‰πâËÆæÁΩÆÂíå‰ªªÂä°„ÄÇ

Âú®ÁêÜËß£Êú¨ËäÇ‰πãÂâçÔºåËØ∑ÂÖàÈòÖËØª sbt ÂÖ•Èó®ÂâçÈù¢ÁöÑÁ´†ËäÇÔºåÂ∞§ÂÖ∂ÊòØ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]Âíå[Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings]„ÄÇ

### ÂÆö‰πâ‰∏Ä‰∏™ÈîÆ

[ËøôÈáå](../../sxr/sbt/Keys.scala.html)‰ªãÁªç‰∫ÜÂ¶Ç‰ΩïÂÆö‰πâÈîÆ„ÄÇÂ§ßÂ§öÊï∞ÁöÑÈªòËÆ§ÈîÆÂÆö‰πâÂú®[ËøôÈáå](../../sxr/sbt/Defaults.scala.html)„ÄÇ

ÈîÆÊúâ‰∏âÁßçÁ±ªÂûã„ÄÇ`SettingKey` Âíå `TaskKey` Âú® [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]ËÆ≤Ëß£„ÄÇÂÖ≥‰∫é `InputKey` ÁöÑÂÜÖÂÆπÂú®[ËæìÂÖ•‰ªªÂä°][Input-Tasks]È°µÈù¢„ÄÇ

Âàó‰∏æ‰∏Ä‰∫õÊù•Ëá™ [Keys](../../sxr/sbt/Keys.scala.html) ÁöÑ‰æãÂ≠êÔºö

```scala
val scalaVersion = settingKey[String]("scalaÁöÑÁâàÊú¨")
val clean = taskKey[Unit]("Âà†Èô§ÊûÑÂª∫‰∫ßÁîüÁöÑÊñá‰ª∂ÔºåÂåÖÊã¨ÁîüÊàêÁöÑ source Êñá‰ª∂ÔºåÁºñËØëÁöÑÁ±ªÂíå‰ªªÂä°ÁºìÂ≠ò„ÄÇ")
```

ÈîÆÁöÑÊûÑÈÄ†ÂáΩÊï∞Êúâ‰∏§‰∏™Â≠óÁ¨¶‰∏≤ÂèÇÊï∞ÔºöÈîÆÁöÑÂêçÁß∞Ôºà `‚ÄúscalaVersion‚Äù` ÔºâÂíåÊñáÊ°£Â≠óÁ¨¶‰∏≤Ôºà `‚ÄúÁî®‰∫éÊûÑÂª∫Â∑•Á®ãÁöÑscalaÁöÑÁâàÊú¨„ÄÇ ‚Äù` Ôºâ„ÄÇ

ËøòËÆ∞Âæó[ .sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]‰∏≠ÔºåÁ±ªÂûã `T` Âú® `SettingKey[T]` ‰∏≠Ë°®Á§∫ÁöÑËÆæÁΩÆÁöÑÂÄºÁöÑÁ±ªÂûã„ÄÇÁ±ªÂûã `T` Âú® `TaskKey [T]` ‰∏≠ÊåáÁ§∫‰ªªÂä°ÁöÑÁªìÊûúÁöÑÁ±ªÂûã„ÄÇ
Âú®[ .sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]‰∏≠Ôºå‰∏Ä‰∏™ËÆæÁΩÆÊúâ‰∏Ä‰∏™Âõ∫ÂÆöÁöÑÂÄºÔºåÁõ¥Âà∞È°πÁõÆÈáçÊñ∞Âä†ËΩΩ„ÄÇ‰ªªÂä°‰ºöÂú®ÊØè‰∏Ä‰∏™‚Äú‰ªªÂä°ÊâßË°å‚ÄùÔºàÁî®Êà∑Âú®‰∫§‰∫íËæìÂÖ•‰∏≠ÊàñÂú®batchÊ®°Âºè‰∏ãËæìÂÖ•‰∏Ä‰∏™ÂëΩ‰ª§ÔºâË¢´ÈáçÊñ∞ËÆ°ÁÆó„ÄÇ

ÈîÆÂèØ‰ª•Âú®ÂÆö‰πâÂú®[.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]Ôºå[.scala Êñá‰ª∂][Organizing-Build]Êàñ‰∏Ä‰∏™[Ëá™Âä®Êèí‰ª∂][Using-Plugins]‰∏≠„ÄÇ‰ªª‰ΩïÂú®ÂêØÁî®ÁöÑËá™Âä®Êèí‰ª∂ÁöÑ`autoImport`ÂØπË±°ÁöÑ `val` Â∞ÜË¢´Ëá™Âä®ÂØºÂÖ•
Âà∞‰Ω†ÁöÑ `.sbt` Êñá‰ª∂„ÄÇ

### ÊâßË°å‰ªªÂä°

‰∏ÄÊó¶‰Ω†ÂÆö‰πâ‰∫Ü‰∏Ä‰∏™‰ªªÂä°ÁöÑÈîÆÔºå‰Ω†ÈúÄË¶ÅÁî®ÂÆÉÂÆåÊàê‰ªªÂä°ÂÆö‰πâ„ÄÇ‰Ω†ÂèØ‰ª•ÂÆö‰πâËá™Â∑±ÁöÑ‰ªªÂä°ÔºåÊàñËÄÖÈáçÊñ∞ÂÆö‰πâÁé∞ÊúâÁöÑ‰ªªÂä°„ÄÇÊó†ËÆ∫Âì™ÁßçÊñπÂºèÁúãËµ∑Êù•ÊòØ‰∏ÄÊ†∑ÁöÑÔºõÁî® `:=` ‰Ωø‰ªªÂä°ÁöÑÈîÆÂíåÈÉ®ÂàÜ‰ª£Á†ÅÁõ∏ÂÖ≥ËÅîÔºö

```scala
val sampleStringTask = taskKey[String]("A sample string task.")
val sampleIntTask = taskKey[Int]("A sample int task.")

lazy val commonSettings = Seq(
  organization := "com.example",
  version := "0.1.0-SNAPSHOT"
)

lazy val library = (project in file("library")).
  settings(commonSettings: _*).
  settings(
    sampleStringTask := System.getProperty("user.home"),
    sampleIntTask := {
      val sum = 1 + 2
      println("sum: " + sum)
      sum
    }
  )
```

Âú®[Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings]ÈáåÊúâÊèèËø∞ÔºåÂ¶ÇÊûú‰ªªÂä°Êúâ‰æùËµñÂÖ≥Á≥ªÔºå‰Ω†‰ΩøÁî® `value` Êù•ÂºïÁî®ÂÄº„ÄÇ

ÊúâÂÖ≥‰ªªÂä°ÂÆûÁé∞ÊúÄÂõ∞ÈöæÁöÑÈÉ®ÂàÜÂæÄÂæÄ‰∏çÊòØ sbt ‰∏ìÁî®Ôºõ‰ªªÂä°Âè™ÊòØ Scala ‰ª£Á†Å„ÄÇÂõ∞ÈöæÁöÑÈÉ®ÂàÜÂèØËÉΩÊòØÂÜô‰Ω†ÁöÑ‰ªªÂä°‰ΩìÔºåÂç≥ÂÅö‰ªÄ‰πàÔºåÊàñËÄÖËØ¥‰Ω†Ê≠£Âú®ËØïÂõæÂÅöÁöÑ„ÄÇ‰æãÂ¶ÇÔºå‰Ω†Ë¶ÅÊ†ºÂºèÂåñ HTMLÔºåÂú®ËøôÁßçÊÉÖÂÜµ‰∏ãÔºå‰Ω†ÂèØËÉΩÈúÄË¶Å‰ΩøÁî®‰∏Ä‰∏™ HTML Â∫ìÔºà‰πüËÆ∏‰Ω†Â∞Ü[‰∏∫ÊûÑÂª∫ÂÆö‰πâÊ∑ªÂä†‰∏Ä‰∏™Â∫ìÁöÑ‰æùËµñ][Using-Plugins]Êù•ÁºñÂÜôÂü∫‰∫é HTML Â∫ì‰ª£Á†ÅÔºâ„ÄÇ

sbt ÂÖ∑Êúâ‰∏Ä‰∫õÂÆûÁî®Â∑•ÂÖ∑Â∫ìÂíåÊñπ‰æøÁöÑÂáΩÊï∞ÔºåÁâπÂà´ÊòØÂèØ‰ª•ÁªèÂ∏∏‰ΩøÁî® API ‰∏≠ÁöÑ [IO](../../api/index.html#sbt.IO$) Êù•Êìç‰ΩúÊñá‰ª∂ÂíåÁõÆÂΩï„ÄÇ

### ‰ªªÂä°ÁöÑÊâßË°åËØ≠‰πâ

ÂΩì‰ªé‰æùËµñ‰∫éÂÖ∂‰ªñ‰ªªÂä°ÁöÑËá™ÂÆö‰πâ‰ªªÂä°‰∏≠‰ΩøÁî®`value`Êó∂Ôºå‰∏Ä‰∏™Ë¶ÅÊ≥®ÊÑèÁöÑÈáçË¶ÅÁªÜËäÇÊòØÊòØ‰ªªÂä°ÁöÑÊâßË°åËØ≠‰πâ„ÄÇÂØπÊâßË°åËØ≠‰πâÔºåÊàë‰ª¨ÁöÑÊÑèÊÄùÊòØÂà∞Â∫ï*‰ΩïÊó∂*Ëøô‰∫õ‰ªªÂä°Ë¢´ÂèñÂÄº„ÄÇ

‰ª•`sampeIntTask`‰∏∫‰æãÔºå‰ªªÂä°‰Ωì‰∏≠ÁöÑÊØè‰∏ÄË°åÂ∫î‰∏•Ê†ºÂú∞‰∏Ä‰∏™Êé•‰∏Ä‰∏™Ë¢´ÂèñÂÄº„ÄÇËøôÂ∞±ÊòØÈ°∫Â∫èËØ≠‰πâÔºö

```scala
sampleIntTask := {
  val sum = 1 + 2        // first
  println("sum: " + sum) // second
  sum                    // third
}
```

Âú®Áé∞ÂÆû‰∏≠ÔºåJVMÂèØËÉΩÂÜÖËÅî`sum`‰∏∫`3`Ôºå‰ΩÜ‰ªªÂä°ÂèØËßÇÂØüÂà∞ÁöÑ*Ë°å‰∏∫*‰ªçÂ∞Ü‰∏é‰∏•Ê†ºÂú∞‰∏Ä‰∏™Êé•‰∏Ä‰∏™Ë¢´ÊâßË°åÂÆåÂÖ®Áõ∏Âêå„ÄÇ

Áé∞Âú®ÂÅáËÆæÊàë‰ª¨ÂÆö‰πâ‰∫ÜÂè¶Â§ñ‰∏§‰∏™ÁöÑËá™ÂÆö‰πâ‰ªªÂä°`startServer`Âíå`stopServer`ÔºåÂπ∂‰øÆÊîπ`sampeIntTask`ÔºåÂ¶Ç‰∏ãÊâÄÁ§∫Ôºö

```scala
val startServer = taskKey[Unit]("start server")
val stopServer = taskKey[Unit]("stop server")
val sampleIntTask = taskKey[Int]("A sample int task.")
val sampleStringTask = taskKey[String]("A sample string task.")

lazy val commonSettings = Seq(
  organization := "com.example",
  version := "0.1.0-SNAPSHOT"
)

lazy val library = (project in file("library")).
  settings(commonSettings: _*).
  settings(
    startServer := {
      println("starting...")
      Thread.sleep(500)
    },
    stopServer := {
      println("stopping...")
      Thread.sleep(500)
    },
    sampleIntTask := {
      startServer.value
      val sum = 1 + 2
      println("sum: " + sum)
      stopServer.value // THIS WON'T WORK
      sum
    },
    sampleStringTask := {
      startServer.value
      val s = sampleIntTask.value.toString
      println("s: " + s)
      s
    }
  )
```

‰ªésbt‰∫§‰∫íÂºèÊèêÁ§∫Á¨¶‰∏≠ËøêË°å`sampleIntTask`Â∞ÜÂæóÂà∞Â¶Ç‰∏ãÁªìÊûúÔºö

```
> sampleIntTask
stopping...
starting...
sum: 3
[success] Total time: 1 s, completed Dec 22, 2014 5:00:00 PM
```

Ëã•Ë¶ÅÊü•ÁúãÂèëÁîü‰∫Ü‰ªÄ‰πà‰∫ãÔºåËÆ©Êàë‰ª¨Áúã‰∏Ä‰∏ã`sampleIntTask`ÂõæÂΩ¢Ë°®Á§∫Ôºö

![task-dependency](../files/task-dependency00.png)

‰∏çÂêå‰∫éÊôÆÈÄöÁöÑScalaÊñπÊ≥ïË∞ÉÁî®ÔºåË∞ÉÁî®‰ªªÂä°ÁöÑ`value`ÊñπÊ≥ïÂ∞Ü‰∏çË¢´‰∏•Ê†ºÂèñÂÄº„ÄÇÁõ∏ÂèçÔºå‰ªñ‰ª¨Âè™ÊòØÂÖÖÂΩìÂç†‰ΩçÁ¨¶Êù•Ë°®Á§∫`sampleIntTask`‰æùËµñ‰∫é`startServer`Âíå`stopServer`‰ªªÂä°„ÄÇÂΩì‰Ω†Ë∞ÉÁî®`sampleIntTask`Êó∂ÔºåsbtÁöÑ‰ªªÂä°ÂºïÊìéÂ∞ÜÔºö

- Âú®ÂØπ`sampleIntTask`ÂèñÂÄºÂâçÂØπ‰æùËµñ‰ªªÂä°ÂèñÂÄºÔºàÂÅèÂ∫èÔºâ
- Â¶ÇÊûú‰æùËµñ‰ªªÁâ©ÊòØÁõ∏‰∫íÁã¨Á´ãÁöÑÔºåÂ∞ùËØïÂπ∂Ë°åÂèñÂÄºÔºàÂπ∂Ë°åÔºâ
- ÊØèÊ¨°ÂëΩ‰ª§ÊâßË°åÔºåÊØè‰∏™‰ªªÂä°‰æùËµñÈ°πÂ∞ÜË¢´ËØÑ‰º∞‰∏î‰ªÖË¢´ËØÑ‰º∞‰∏ÄÊ¨°ÔºàÂéªÈáçÔºâ

#### ‰ªªÂä°‰æùËµñÈ°πÂéªÈáç

‰∏∫ËØÅÊòéËøôÊúÄÂêé‰∏ÄÁÇπÔºåÊàë‰ª¨ÂèØ‰ª•‰ªé sbt ‰∫§‰∫íÂºèÊèêÁ§∫Á¨¶ËøêË°å `sampleStringTask`„ÄÇ

```
> sampleStringTask
stopping...
starting...
sum: 3
s: 3
[success] Total time: 1 s, completed Dec 22, 2014 5:30:00 PM
```

Âõ†‰∏∫`sampleStringTask`‰æùËµñ‰∫é`startServer`Âíå`sampleIntTask`‰∏§‰∏™‰ªªÂä°ÔºåËÄå`sampleIntTask`‰πü‰æùËµñ‰∫é`startServer`‰ªªÂä°ÔºåÂÆÉ‰Ωú‰∏∫‰ªªÂä°‰æùËµñÂá∫Áé∞‰∫Ü‰∏§Ê¨°„ÄÇÂ¶ÇÊûúËøôÊòØ‰∏Ä‰∏™ÊôÆÈÄöÁöÑ Scala ÊñπÊ≥ïË∞ÉÁî®ÔºåÂÆÉ‰ºöË¢´ËÆ°ÁÆó‰∏§Ê¨°Ôºå‰ΩÜÁî±‰∫é‰ªªÂä°ÁöÑ‰æùËµñÈ°πË¢´Ê†áËÆ∞‰∏∫`value`Á±ªÂûãÔºåÂÆÉÂ∞ÜÂè™Ë¢´ËÆ°ÁÆó‰∏ÄÊ¨°„ÄÇ‰ª•‰∏ãÊòØ`sampeStringTask`Â¶Ç‰ΩïÂèñÂÄºÁöÑÂõæÂΩ¢Ë°®Á§∫Ôºö

![task-dependency](../files/task-dependency01.png)

Â¶ÇÊûúÊàë‰ª¨‰∏çÂÅöÈáçÂ§ç‰ªªÂä°Áõ∏ÂÖ≥È°πÁöÑÂéªÈáçÔºåÂàôÂΩìÊàë‰ª¨ÊâßË°å`test`Êó∂ÊúÄÁªà‰ºöÁºñËØëÊµãËØïÊ∫ê‰ª£Á†ÅÂæàÂ§öÊ¨°ÔºåÂõ†‰∏∫`compile in Test`‰Ωú‰∏∫`test in Test`ÁöÑ‰æùËµñÈ°πÂá∫Áé∞‰∫ÜÂæàÂ§öÊ¨°„ÄÇ

#### Ê∏ÖÁêÜ‰ªªÂä°

Â∫îËØ•Â¶Ç‰ΩïÂÆûÁé∞`stopServer`‰ªªÂä°ÔºüÊ∏ÖÁêÜ‰ªªÂä°ÁöÑÊ¶ÇÂøµÂπ∂‰∏çÈÄÇÂêà‰ªªÂä°ÁöÑÊâßË°åÊ®°ÂûãÔºåÂõ†‰∏∫‰ªªÂä°ÂÖ≥ÂøÉÁöÑÊòØ‰æùËµñÈ°πË∑üË∏™„ÄÇÊúÄÂêé‰∏ÄÊ¨°Êìç‰ΩúÂ∫îÊàê‰∏∫‰æùËµñÂÖ∂‰ªñ‰∏≠Èó¥‰ªªÂä°ÁöÑ‰ªªÂä°„ÄÇ‰æãÂ¶Ç`stopServer`Â∫î‰æùËµñ‰∫é`sampleStringTask`ÔºåÂú®ÂÖ∂‰∏≠`stopServer`Â∫îËØ•ÊòØ `sampleStringTask`„ÄÇ

```scala
lazy val library = (project in file("library")).
  settings(commonSettings: _*).
  settings(
    startServer := {
      println("starting...")
      Thread.sleep(500)
    },
    sampleIntTask := {
      startServer.value
      val sum = 1 + 2
      println("sum: " + sum)
      sum
    },
    sampleStringTask := {
      startServer.value
      val s = sampleIntTask.value.toString
      println("s: " + s)
      s
    },
    sampleStringTask := {
      val old = sampleStringTask.value
      println("stopping...")
      Thread.sleep(500)
      old
    }
  )
```

‰∏∫‰∫ÜËØÅÊòéÂÆÉÂèØ‰ª•Â∑•‰ΩúÔºåÂú®‰∫§‰∫íÂºèÊèêÁ§∫Á¨¶‰∏≠ËøêË°å `sampleStringTask`Ôºö

```
> sampleStringTask
starting...
sum: 3
s: 3
stopping...
[success] Total time: 1 s, completed Dec 22, 2014 6:00:00 PM
```

![task-dependency](../files/task-dependency02.png)



#### Áõ¥Êé•‰ΩøÁî®Scala

Á°Æ‰øù‰∏Ä‰∫õ‰∫ãÂèëÁîüÂú®ÂÖ∂ÂÆÉ‰∏Ä‰∫õ‰∫ãÁâ©‰πãÂêéÁöÑÂè¶‰∏ÄÁßçÊñπÂºèÊòØ‰ΩøÁî®Scala„ÄÇ‰æãÂ¶ÇÔºåÂú®`project/ServerUtil.scala`‰∏≠ÂÆûÁé∞‰∏Ä‰∏™ÁÆÄÂçïÁöÑÂáΩÊï∞Ôºå‰Ω†ÂèØ‰ª•ÁºñÂÜôÔºö

```scala
sampleIntTask := {
  ServerUtil.startServer
  try {
    val sum = 1 + 2
    println("sum: " + sum)
  } finally {
    ServerUtil.stopServer
  }
  sum
}
```

Âõ†‰∏∫ÊôÆÈÄöÁöÑÊñπÊ≥ïË∞ÉÁî®ÈÅµÂæ™È°∫Â∫èËØ≠‰πâÔºåÊâÄÊúâ‰∫ãÊÉÖÊåâÈ°∫Â∫èÂèëÁîü„ÄÇËøôÈáåÊ≤°ÊúâÂéªÈáçÔºåÊâÄ‰ª•‰Ω†ÂøÖÈ°ªË¶ÅÂ∞èÂøÉ„ÄÇ

### Â∞ÜÂÆÉ‰ª¨ËΩ¨‰∏∫Êèí‰ª∂

Â¶ÇÊûú‰Ω†ÂèëÁé∞Ëá™Â∑±ÊúâÂæàÂ§öËá™ÂÆö‰πâ‰ª£Á†ÅÔºåÂèØ‰ª•ËÄÉËôëÂ∞ÜÂÖ∂ÁßªÂä®Âà∞Êèí‰ª∂Ôºå‰ªéËÄåÂèØ‰ª•Âú®Â§ö‰∏™ÊûÑÂª∫‰∏≠ÈáçÂ§çÂà©Áî®„ÄÇ

ÂàõÂª∫‰∏Ä‰∏™Êèí‰ª∂ÂæàÂÆπÊòìÔºåÂú®[‰ΩøÁî®Êèí‰ª∂][Using-Plugins]Âíå[Êèí‰ª∂][Plugins]‰∏≠ÊúâËØ¶ÁªÜËÆ®ËÆ∫„ÄÇ

Êú¨Â∞èËäÇÊòØ‰∏™Âø´ÈÄüÁöÑÂêëÂØºÔºõÊõ¥Â§öÂÖ≥‰∫éËá™ÂÆö‰πâ‰ªªÂä°ÂèØ‰ª•Âú®[‰ªªÂä°][Tasks]‰∏≠ÊâæÂà∞„ÄÇ


  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Using-Plugins]: Using-Plugins.html
  [Library-Dependencies]: Library-Dependencies.html
  [Multi-Project]: Multi-Project.html
  [Plugins]: ../reference/Plugins.html

ÁªÑÁªáÊûÑÂª∫
--------------------

Êú¨È°µÈù¢Â∞ÜËÆ®ËÆ∫ÊûÑÂª∫ÁªìÊûÑÁöÑÁªÑÁªá„ÄÇ

Êú¨Â∞èËäÇÂÅáËÆæ‰Ω†Â∑≤ÁªèÈòÖËØª‰∫Ü‰πãÂâçÁöÑÁ´†ËäÇÔºåÂ∞§ÂÖ∂ÊòØ [build.sbt][Basic-Def]Ôºå[Â∫ì‰æùËµñ][Library-Dependencies]Âíå[Â§öÂ∑•Á®ãÊûÑÂª∫][Multi-Project]„ÄÇ

### sbtÊòØÈÄíÂΩíÁöÑ

`build.sbt` ÂæàÁÆÄÂçïÔºåÈöêËóè‰∫Ü sbt ÊòØÂ¶Ç‰ΩïÂ∑•‰ΩúÁöÑ„ÄÇsbt ÊûÑÂª∫ÊòØÁî® Scala ‰ª£Á†ÅÂÆö‰πâÁöÑ„ÄÇ‰ª£Á†ÅÊú¨Ë∫´‰πüÂøÖÈ°ªÊòØËÉΩË¢´ÊûÑÂª∫ÁöÑ„ÄÇÊúâÊØî sbt Êõ¥Â•ΩÁöÑÂª∫Á´ãÊñπÂºè‰πàÔºü

`project` ÁõÆÂΩï *ÊòØ‰Ω†ÁöÑÂ∑•Á®ãÂÜÖÂè¶‰∏Ä‰∏™Â∑•Á®ãÁöÑÈ°πÁõÆ*ÔºåÂÆÉÁü•ÈÅìÂ¶Ç‰ΩïÊûÑÂª∫‰Ω†ÁöÑÂ∑•Á®ã„ÄÇ‰∏∫‰∫ÜÂå∫ÂàÜËøô‰∏§ÁßçÊûÑÂª∫ÔºåÊàë‰ª¨ÊúâÊó∂‰ΩøÁî®**Ê≠£Â∏∏ÊûÑÂª∫**Ë°®Á§∫‰Ω†ÁöÑÊûÑÂª∫Ôºå‰ΩøÁî®**ÂÖÉÊûÑÂª∫**Êåá‰ª£Âú® `project`‰∏≠ÁöÑÊûÑÂª∫„ÄÇÂú®ÂÖÉÊûÑÂª∫‰∏≠ÁöÑÈ°πÁõÆËÉΩÂÅö‰ªª‰ΩïÂÖ∂‰ªñÈ°πÁõÆÂèØ‰ª•ÂÅöÁöÑ‰∫ãÊÉÖ„ÄÇ *‰Ω†ÁöÑÊûÑÂª∫ÂÆö‰πâÊòØ‰∏Ä‰∏™ sbt È°πÁõÆ„ÄÇ*

ÈÄíÂΩíÂèØ‰ª•ÁªßÁª≠‰∏ãÂéª„ÄÇÂ¶ÇÊûú‰Ω†ÂñúÊ¨¢, ‰Ω†ÂèØ‰ª•ÈÄöËøáÂàõÂª∫ `project/project/` ÁõÆÂΩïÁ®çÁ®çË∞ÉÊï¥È°πÁõÆÁöÑÊûÑÂª∫ÂÆö‰πâ„ÄÇ

‰∏ãÈù¢ÊòØ‰∏Ä‰∏™‰æãÂ≠êÔºö

```
hello/                  # È°πÁõÆÁöÑÂü∫ÁõÆÂΩï

    Hello.scala         # ‰∏Ä‰∏™È°πÁõÆÊ∫êÊñá‰ª∂Ôºà‰πüÂèØ‰ª•Âú®src/main/scalaÔºâ

    build.sbt           # build.sbt ÊòØproject/ ‰∏≠ÂÖÉÊûÑÂª∫Ê†πÈ°πÁõÆÁöÑÊ∫ê‰ª£Á†Å„ÄÇÊòØÊûÑÂª∫ÂÆö‰πâÈ°πÁõÆÁöÑ‰∏ÄÈÉ®ÂàÜ„ÄÇ

    project/            # ÂÖÉÊûÑÂª∫Ê†πÈ°πÁõÆÁöÑÂü∫ÁõÆÂΩï

        Build.scala     # ÂÖÉÊûÑÂª∫Ê†πÈ°πÁõÆÁöÑ‰∏Ä‰∏™Ê∫êÊñá‰ª∂ÔºåÊòØ‰Ω†ÁöÑÊûÑÂª∫ÂÆö‰πâÁöÑÊûÑÂª∫ÂÆö‰πâÊ∫êÊñá‰ª∂

        build.sbt       # ÂÖÉÂÖÉÊûÑÂª∫ÁöÑÊ†πÈ°πÁõÆ‚Äî‚Äîproject/projectÁöÑÊ∫ê‰ª£Á†ÅÔºõÊûÑÂª∫ÂÆö‰πâÁöÑÊûÑÂª∫ÂÆö‰πâ

        project/        # ÂÖÉÂÖÉÊûÑÂª∫ÁöÑÊ†πÈ°πÁõÆÁöÑÂü∫ÁõÆÂΩïÔºõÊûÑÂª∫ÂÆö‰πâÁöÑÊûÑÂª∫ÂÆö‰πâÂ∑•Á®ã

            Build.scala # project/project/ ÂÖÉÂÖÉÊûÑÂª∫ÁöÑÊ†πÈ°πÁõÆ‰∏≠ÁöÑÊ∫êÊñá‰ª∂
```

*‰∏çÁî®ÊãÖÂøÉÔºÅ* Â§ßÈÉ®ÂàÜÊó∂ÂÄô‰∏çÈúÄË¶Å `project/project/` ÁõÆÂΩï„ÄÇ‰ΩÜÊòØÁêÜËß£ÂÆÉÊòØÊúâÂ∏ÆÂä©ÁöÑ„ÄÇ

Âè¶Â§ñÔºå‰ªª‰Ωï‰ª• `.scala` ÊàñËÄÖ `.sbt` ÁªìÂ∞æÁöÑÊñá‰ª∂ÈÉΩ‰ºöË¢´‰ΩøÁî®ÔºåÂëΩÂêç‰∏∫ `build.sbt` Âíå `Build.scala`Âè™ÊòØÊÉØ‰æã„ÄÇÂ§ö‰∏™Êñá‰ª∂‰πüÊòØÂÖÅËÆ∏ÁöÑ„ÄÇ

### Âú®Âêå‰∏Ä‰∏™Âú∞ÊñπË∑üË∏™‰æùËµñÈ°π

Áî®`project`‰∏ãÁöÑ`.scala`Êñá‰ª∂ÁªÑÊàêÊûÑÂª∫ÂÆö‰πâÁöÑ‰∏Ä‰∏™ÂÆûÈôÖÁî®‰æãÊòØÂàõÂª∫`project/Dependencies.scala`Êù•Âú®Âêå‰∏Ä‰∏™Âú∞ÊñπË∑üË∏™‰æùËµñÈ°π„ÄÇ

```scala
import sbt._

object Dependencies {
  // Versions
  lazy val akkaVersion = "2.3.8"

  // Libraries
  val akkaActor = "com.typesafe.akka" %% "akka-actor" % akkaVersion
  val akkaCluster = "com.typesafe.akka" %% "akka-cluster" % akkaVersion
  val specs2core = "org.specs2" %% "specs2-core" % "2.4.14"

  // Projects
  val backendDeps =
    Seq(akkaActor, specs2core % Test)
}
```

`Dependencies`ÂØπË±°Â∞ÜÂú®`build.sbt`‰∏≠ÂèØÁî®„ÄÇÂ¶ÇÊûúË¶ÅËÆ©‰ΩøÁî®`val`ÁöÑ‰ª£Á†ÅÊõ¥Âä†ÁÆÄÂçïÔºåÂèØ‰ª•ÂºïÂÖ•`Dependencies._`„ÄÇ

```scala
import Dependencies._

lazy val commonSettings = Seq(
  version := "0.1.0",
  scalaVersion := "2.11.7"
)

lazy val backend = (project in file("backend")).
  settings(commonSettings: _*).
  settings(
    libraryDependencies ++= backendDeps
  )
```

ÂΩì‰Ω†ÁöÑÂ§öÂ∑•Á®ãÊûÑÂª∫ÂèòÂæóÂæàÂ§ßÔºåÂπ∂‰∏îÊÉ≥Ë¶ÅÁ°Æ‰øùÂ≠êÈ°πÁõÆÊúâ‰∏ÄËá¥ÁöÑ‰æùËµñÂÖ≥Á≥ªÊó∂ÔºåËøôÁßçÊäÄÊúØÂæàÊúâÁî®„ÄÇ

### ‰ΩïÊó∂Áî® `.scala` Êñá‰ª∂

Âú® `.scala` Êñá‰ª∂Ôºå‰Ω†ÂèØ‰ª•ÂÜô‰ªªÊÑèÁöÑ Scala ‰ª£Á†ÅÔºåÂåÖÊã¨È°∂Â±ÇÁöÑÁ±ªÂíåÂØπË±°„ÄÇ

Êé®ËçêÁöÑÊñπÊ≥ïÊòØÂÆö‰πâÂ§ßÈÉ®ÂàÜËÆæÁΩÆÂú®Â§öÂ∑•Á®ãÁöÑ `build.sbt` Êñá‰ª∂‰∏≠ÔºåÂπ∂‰∏î‰ΩøÁî® `project/*.scala` Êñá‰ª∂Êù•ÂÅö‰ªªÂä°ÂÆûÁé∞ÊàñÂú®Â§ö‰∏™Êñá‰ª∂‰∏≠ÂÖ±‰∫´ÈîÆÂÄº„ÄÇÂØπ`.scala`Êñá‰ª∂ÁöÑ‰ΩøÁî®‰πüÂèñÂÜ≥‰∫é‰Ω†ÁöÑÂõ¢ÈòüÂØπscalaÁöÑÁÜüÁªÉÁ®ãÂ∫¶„ÄÇ

### ÂÆö‰πâËá™Âä®Êèí‰ª∂

ÂØπ‰∫éÊõ¥È´òÁ∫ßÁöÑÁî®Êà∑ÔºåÂè¶‰∏ÄÁßçÊñπÂºèÁªÑÁªá‰Ω†ÁöÑÊûÑÂª∫ÊòØÂú®`project/*.scala`‰∏≠ÂÆö‰πâ‰∏ÄÊ¨°ÊÄß[Ëá™Âä®Êèí‰ª∂][Plugins]„ÄÇÈÄöËøáÂÆö‰πâËß¶ÂèëÁöÑÊèí‰ª∂ÔºåËá™Âä®Êèí‰ª∂ÂèØ‰ª•Áî®‰Ωú‰∏ÄÁßçÁÆÄ‰æøÊñπÊ≥ïÊù•Ê≥®ÂÖ•Ë∑®ÊâÄÊúâÂ≠êÈ°πÁõÆÁöÑËá™ÂÆö‰πâ‰ªªÂä°ÂíåÂëΩ‰ª§„ÄÇ


  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [Using-Plugins]: Using-Plugins.html
  [getting-help]: ../docs/faq.html#getting-help

ÊÄªÁªì
-----------------------

Ëøô‰∏ÄËäÇÂ∞ÜÂÖ•Èó®ÊåáÂçóÊÄªÁªì‰∏Ä‰∏ã„ÄÇ

‰∏∫‰∫Ü‰ΩøÁî® sbtÔºåÊúâ‰∏Ä‰∫õÊ¶ÇÂøµ‰Ω†ÂøÖÈ°ªÁêÜËß£„ÄÇËøôÊúâ‰∏Ä‰∫õÂ≠¶‰π†Êõ≤Á∫øÔºå‰ΩÜÊòØ‰πêËßÇÁöÑËÆ≤Ôºå *Èô§‰∫Ü* Ëøô‰∫õÊ¶ÇÂøµÂØπ‰∫é sbt Âπ∂‰∏çÂ§ö„ÄÇsbt Áî®‰∏ÄÂ∞èÈÉ®ÂàÜÊ†∏ÂøÉÊ¶ÇÂøµÊù•‰ΩøÂæóÂÆÉÂ∑•‰Ωú„ÄÇ

Â¶ÇÊûú‰Ω†Â∑≤ÁªèÈòÖËØªËøáÊâÄÊúâÁöÑÂÖ•Èó®ÊåáÂçóÔºåÁé∞Âú®‰Ω†Áü•ÈÅì‰∫Ü‰Ω†ÈúÄË¶ÅÁü•ÈÅì‰ªÄ‰πà„ÄÇ

### sbt: Ê†∏ÂøÉÊ¶ÇÂøµ

-   Scala Âü∫Á°Ä„ÄÇ‰∏çÂèØÂê¶ËÆ§ÔºåÁÜüÊÇâ Scala ËØ≠Ê≥ïÈùûÂ∏∏ÊúâÂ∏ÆÂä©„ÄÇ[Programming in Scala](http://www.artima.com/shop/programming_in_scala_2ed)ÔºåScala ÁöÑ‰ΩúËÄÖÂÜôÁöÑÈùûÂ∏∏Â•ΩÁöÑ‰ªãÁªç„ÄÇ
-   [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]
-   ‰Ω†ÁöÑÊûÑÂª∫ÂÆö‰πâÊòØ‰∏Ä‰∏™Â§ßÁöÑ `Setting` ÂØπË±°ÂàóË°®Ôºåsbt ‰ΩøÁî® `Setting` ËΩ¨Êç¢‰πãÂêéÁöÑÈîÆÂÄºÂØπÊâßË°å task„ÄÇ
-   ‰∏∫‰∫ÜÂàõÂª∫ `Setting`ÔºåÂú®‰∏Ä‰∏™ key ‰∏äË∞ÉÁî®ÂÖ∂‰∏≠ÁöÑ‰∏Ä‰∏™ÊñπÊ≥ïÔºö`:=`Ôºå`+=` ÊàñËÄÖ `++=`„ÄÇ
-   Ê≤°ÊúâÂèØÂèòÁöÑÁä∂ÊÄÅÔºåËá≥‰∫éËΩ¨Êç¢Ôºõ‰æãÂ¶ÇÔºå‰∏Ä‰∏™ `Setting` Â∞Ü sbt ÁöÑÈîÆÂÄºÂØπÈõÜÂêàËΩ¨Êç¢Êàê‰∏Ä‰∏™Êñ∞ÁöÑÈõÜÂêà„ÄÇ‰∏ç‰ºöÂ∞±Âú∞ÊîπÂèò‰ªª‰Ωï‰ª£Á†Å„ÄÇ
-   ÊØè‰∏Ä‰∏™ËÆæÁΩÆÈÉΩÊúâ‰∏Ä‰∏™ÁâπÂÆöÁ±ªÂûãÁöÑÂÄºÔºåÁî± key ÂÜ≥ÂÆö„ÄÇ
-   *tasks* ÊòØÁâπÊÆäÁöÑËÆæÁΩÆÔºåÈÄöËøá key ‰∫ßÁîü value ÁöÑËÆ°ÁÆóÂú®ÊØèÊ¨°Âá∫Âèë task ÁöÑÊó∂ÂÄôÈÉΩ‰ºöÈáçÊñ∞ÊâßË°å„ÄÇNon-task ËÆ°ÁÆóÂè™‰ºöÂú®ÊûÑÂª∫ÂÆö‰πâÁöÑÁ¨¨‰∏ÄÊ¨°Âä†ËΩΩÊó∂ÊâßË°å„ÄÇ
-   [Scopes][Scopes]
-   ÊØè‰∏Ä‰∏™ key ÈÉΩÂèØËÉΩÊúâÂ§ö‰∏™ valueÔºåÊåâÁÖß scope ÂàíÂàÜ„ÄÇ
-   scope ‰ºöÁî®‰∏â‰∏™ËΩ¥ÔºöconfigurationÔºåprojectÔºåtask„ÄÇ
-   scope ÂÖÅËÆ∏‰Ω†ÊåâÈ°πÁõÆ„ÄÅÊåâ task„ÄÅÊåâ configuration Êúâ‰∏çÂêåÁöÑË°å‰∏∫„ÄÇ
-   ‰∏Ä‰∏™ configuration ÊòØ‰∏ÄÁßçÁ±ªÂûãÁöÑÊûÑÂª∫Ôºå‰æãÂ¶Ç `Compile` ÊàñËÄÖ `Test`„ÄÇ
-   project ËΩ¥‰πüÊîØÊåÅ "ÊûÑÂª∫ÂÖ®Â±Ä" scope„ÄÇ
-   scopes ÂõûÊªöÊàñ *‰ª£ÁêÜ* Âà∞Êõ¥ÈÄöÁî®ÁöÑ scope„ÄÇ
-   Â∞ÜÂ§ßÈÉ®ÂàÜÈÖçÁΩÆÊîæÂú® `build.sbt` ‰∏≠Ôºå‰ΩÜÊòØÁî® `.scala` ÊûÑÂª∫ÂÆö‰πâÊñá‰ª∂ÂÆö‰πâÁ±ªÂíåÊõ¥Â§ßÁöÑ task ÂÆûÁé∞„ÄÇ
-   ÊûÑÂª∫ÂÆö‰πâÊòØ‰∏Ä‰∏™ sbt È°πÁõÆÔºåÊù•Ëá™‰∫éÈ°πÁõÆÁõÆÂΩï„ÄÇ
-   [Êèí‰ª∂][Using-Plugins]ÊòØÂØπÊûÑÂª∫ÂÆö‰πâÁöÑÊâ©Â±ï
-   ÈÄöËøáÂú® `addSbtPlugin` ÊñπÊ≥ïÂú® `project/plugins.sbt` ‰∏≠Ê∑ªÂä†Êèí‰ª∂„ÄÇÔºà‰∏çÊòØÂú®È°πÁõÆÂü∫ÁõÆÂΩï‰∏ãÁöÑ `build.sbt` ‰∏≠Ôºâ„ÄÇ

Â¶ÇÊûú‰Ω†ÊÄÄÁñëËøô‰∫õÁªÜÊûùÊú´ËäÇ‰∏≠ÁöÑ‰ªª‰Ωï‰∏Ä‰∏™ÔºåËØ∑[ÂØªÊ±ÇÂ∏ÆÂä©][getting-help]ÔºåËøîÂõûÈáçÊñ∞ÈòÖËØªÊàñËÄÖÂú® sbt ÁöÑ‰∫§‰∫íÂºèÂëΩ‰ª§Ë°å‰∏≠ÂÅöÂÆûÈ™å„ÄÇ

Á•ù‰Ω†Â•ΩËøêÔºÅ

### ÈôÑÂΩï

Âõ†‰∏∫ sbt ÊòØ‰∏Ä‰∏™ÂºÄÊ∫êÈ°πÁõÆÔºåÂà´ÂøòËÆ∞Á≠æÂá∫È°πÁõÆ[Ê∫ê‰ª£Á†Å](https://github.com/sbt/sbt)ÔºÅ


  [More-About-Settings]: More-About-Settings.html
  [Basic-Def]: Basic-Def.html

ÈôÑÂΩïÔºöBare .sbt ÊûÑÂª∫ÂÆö‰πâ
------------------

Ëøô‰∏ÄÂ∞èËäÇËÆ≤Ëø∞‰∏ÄÁßçËÄÅÂºèÈ£éÊ†ºÁöÑ `.sbt` ÊûÑÂª∫ÂÆö‰πâ„ÄÇ
Áé∞Âú®Êé®Ëçê‰ΩøÁî® [Â§öÈ°πÁõÆ .sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]„ÄÇ

### ‰ªÄ‰πàÊòØbare .sbt ÊûÑÂª∫ÂÆö‰πâ

‰∏çÂÉè [Â§öÈ°πÁõÆ .sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def] Âíå [.scala ÊûÑÂª∫ÂÆö‰πâ][Full-Def] ÊòæÂºèÂú∞ÂÆö‰πâ‰∏Ä‰∏™ [È°πÁõÆ](../api/sbt/Project.html)Ôºå
bareÊûÑÂª∫ÂÆö‰πâ‰ºöÊ†πÊçÆ `.sbt` Êñá‰ª∂ÊâÄÂú®ÁöÑ‰ΩçÁΩÆÈöêÂºèÂú∞ÂÆö‰πâ‰∏Ä‰∏™È°πÁõÆ„ÄÇ

bare `.sbt` ÊûÑÂª∫ÂÆö‰πâÁî±‰∏Ä‰∏™ `Setting[_]` Ë°®ËææÂºèÁöÑÂàóË°®ÁªÑÊàêÔºåËÄå‰∏çÊòØÂÆö‰πâ `Project`„ÄÇ

```scala
name := "hello"

version := "1.0"

scalaVersion := "2.11.7"
```

### (Âú® 0.13.7 ‰πãÂâç) ËÆæÁΩÆÈ°πÂøÖÈ°ª‰ª•Á©∫Ë°åÂàÜÈöî

**Ê≥®ÊÑè**ÔºöËøôÁßçÁ©∫Ë°åÈôêÂÆöÂú® 0.13.7 ‰πãÂêéÂ∞Ü‰∏çÂÜçÈúÄË¶Å„ÄÇ

‰Ω†‰∏çËÉΩÂÉèËøôÊ†∑ÂÜôbare build.sbtÔºö

```scala
// Ê≤°ÊúâÁ©∫Ë°åÔºå‰ºöÁºñËØë‰∏çËøá
name := "hello"
version := "1.0"
scalaVersion := "2.10.3"
```

sbt ÈúÄË¶ÅÊúâÂàÜÈöîÁ¨¶Êù•Ëæ®Âà´‰∏Ä‰∏™Ë°®ËææÂºè‰ªéÂì™ÈáåÂºÄÂßãÔºåÂà∞Âì™ÈáåÁªìÊùü„ÄÇ


  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Using-Plugins]: Using-Plugins.html

ÈôÑÂΩïÔºö.scala ÊûÑÂª∫ÂÆö‰πâ
-----------------------

Êú¨È°µÈù¢ÊèèËø∞‰∫Ü`.scala`ÊûÑÂª∫ÂÆö‰πâÁöÑÊóßÁöÑÈ£éÊ†º„ÄÇÂú®‰ª•ÂâçÁöÑÁâàÊú¨ÁöÑsbt‰∏≠Ôºå`.scala`ÊòØÁî®Êù•ÂàõÂª∫Â§öÈ°πÁõÆÊûÑÂª∫ÂÆö‰πâÁöÑÂîØ‰∏ÄÊñπÂºèÔºå‰ΩÜsbt 0.13 Ê∑ªÂä†‰∫Ü[Â§öÈ°πÁõÆ.sbt ÁîüÊàêÂÆö‰πâ][Basic-Def]ÔºåËøô‰πüÊòØÊé®ËçêÁöÑÊ†∑Âºè„ÄÇ

ËøôÈáåÂÅáËÆæ‰Ω†Â∑≤ÁªèÈòÖËØª‰∫Ü‰πãÂâçÁöÑÁ´†ËäÇÔºåÂ∞§ÂÖ∂ÊòØ [.sbt ÊûÑÂª∫ÂÆö‰πâ][Basic-Def]Âíå[Êõ¥Â§öÂÖ≥‰∫éËÆæÁΩÆ][More-About-Settings]„ÄÇ

### ÂÖ≥ËÅî build.sbt Âíå Build.scala

‰∏∫‰∫ÜËûçÂêà`.sbt` Âíå `.scala` Êñá‰ª∂Âú®‰Ω†ÁöÑÊûÑÂª∫ÂÆö‰πâ‰∏≠Ôºå‰Ω†ÈúÄË¶ÅÁêÜËß£‰ªñ‰ª¨ÊòØÂ¶Ç‰ΩïÂÖ≥ËÅîÁöÑ„ÄÇ

‰∏ãÈù¢‰∏§‰∏™Êñá‰ª∂ÊèèËø∞‰∫ÜËøô‰∏™ËøáÁ®ã„ÄÇÁ¨¨‰∏ÄÔºåÂ¶ÇÊûú‰Ω†ÁöÑÈ°πÁõÆÂú® hello Êñá‰ª∂Â§πÂÜÖÔºåÂàõÂª∫ `hello/project/Build.scala`Ôºö

```scala
import sbt._
import Keys._

object HelloBuild extends Build {
  val sampleKeyA = settingKey[String]("demo key A")
  val sampleKeyB = settingKey[String]("demo key B")
  val sampleKeyC = settingKey[String]("demo key C")
  val sampleKeyD = settingKey[String]("demo key D")

  override lazy val settings = super.settings ++
    Seq(
      sampleKeyA := "A: in Build.settings in Build.scala",
      resolvers := Seq()
    )

  lazy val root = Project(id = "hello",
    base = file("."),
    settings = Seq(
      sampleKeyB := "B: in the root project settings in Build.scala"
    ))
}
```

Áé∞Âú®ÔºåÂàõÂª∫ `hello/build.sbt`Ôºö

```scala
sampleKeyC in ThisBuild := "C: in build.sbt scoped to ThisBuild"

sampleKeyD := "D: in build.sbt"
```

ÊâìÂºÄ sbt ÁªàÁ´ØÂëΩ‰ª§Á™óÂè£„ÄÇÊï≤ÂÖ• `inspect sampleKeyA`Ôºå‰Ω†Â∞Ü‰ºöÁúãÂà∞Ôºö

```
[info] Setting: java.lang.String = A: in Build.settings in Build.scala
[info] Provided by:
[info]  {file:/home/hp/checkout/hello/}/*:sampleKeyA
```

ÁÑ∂ÂêéÊï≤ÂÖ• `inspect sampleKeyC`Ôºå‰Ω†Â∞Ü‰ºöÁúãÂà∞Ôºö

```
[info] Setting: java.lang.String = C: in build.sbt scoped to ThisBuild
[info] Provided by:
[info]  {file:/home/hp/checkout/hello/}/*:sampleKeyC
```
Ê≥®ÊÑè "Provided by" ÊòæÁ§∫‰∏§‰∏™ value ÂÖ∑ÊúâÁõ∏Âêå‰ΩúÁî®ËåÉÂõ¥„ÄÇÈÇ£ÊòØ `.sbt` Êñá‰ª∂‰∏≠ÁöÑ `sampleKeyC in ThisBuild` Á≠âÂêå‰∏éÊîæÁΩÆÂú® `.scala` Êñá‰ª∂ `Build.settings` ÂàóË°®‰∏≠ÁöÑ‰∏Ä‰∏™ËÆæÁΩÆ„ÄÇsbt ‰ºö‰ªé‰∏§‰∏™Âú∞ÊñπÊäΩÂèñÊûÑÂª∫ËåÉÂõ¥ÂÜÖÁöÑËÆæÁΩÆÔºåÊù•ÂàõÂª∫ÊûÑÂª∫ÂÆö‰πâ„ÄÇ

ÁÑ∂ÂêéÔºå`inspect sampleKeyB`Ôºö

```
[info] Setting: java.lang.String = B: in the root project settings in Build.scala
[info] Provided by:
[info]  {file:/home/hp/checkout/hello/}hello/*:sampleKeyB
```

Ê≥®ÊÑè `sampleKeyB` ÊòØË¢´‰ΩúÁî®ÁöÑËøô‰∏™È°πÁõÆÔºö
`({file:/home/hp/checkout/hello/}hello)` ËÄå‰∏çÊòØÊï¥‰∏™ÊûÑÂª∫ `({file:/home/hp/checkout/hello/})`„ÄÇ

‰Ω†Â∫îËØ•Â∑≤ÁªèÁåúÊµãÂà∞‰∫ÜÔºå`inspect sampleKeyD` Á≠âÂêå‰∫é `sampleKeyB`Ôºö

```
[info] Setting: java.lang.String = D: in build.sbt
[info] Provided by:
[info]  {file:/home/hp/checkout/hello/}hello/*:sampleKeyD
```

sbt ‰ªé `.sbt` Êñá‰ª∂*ÈôÑÂä†*ËÆæÁΩÆÂà∞ `Build.settings` Âíå `Project.setting` ÁöÑËÆæÁΩÆÔºåÊç¢Âè•ËØùËØ¥Ôºå`.sbt` ËÆæÁΩÆÊã•Êúâ‰ºòÂÖàÊùÉ„ÄÇ
Â∞ùËØïÊîπÂèò `Build.scala`Ôºå‰ΩøÂæóÂÆÉËÉΩËÆæÁΩÆÂÅ•ÂÄº `sampleC` ÊàñËÄÖ `sampleD`Ôºå‰ªñ‰ª¨Â∑≤ÁªèÂú® `build.sbt` ËÆæÁΩÆËøá„ÄÇ`build.sbt` ‰∏≠ÁöÑËÆæÁΩÆÂ∫îËØ•ËÉΩ‚ÄúËµ¢‚ÄùËøá `Build.sbt`„ÄÇ

‰Ω†‰πüËÆ∏‰ºöÊ≥®ÊÑèÂà∞Âè¶‰∏ÄË¶ÅÁÇπÔºö`sampleKeyC` Âíå `sampleKeyD` ÊòØÂèØ‰ª•Âú® `build.sbt` ÂÜÖÈÉ®Ëé∑ÂæóÁöÑ„ÄÇËøôÊòØÂõ†‰∏∫ sbt ÂºïÂÖ• `Build` ‰∏≠ÁöÑÂÜÖÂÆπÂà∞ `.sbt` Êñá‰ª∂‰∏≠„ÄÇÂú®ËøôÁßçÊÉÖÂÜµ‰∏ãÔºå`import HelloBuild._` ÊòØË¢´ÈöêÂê´ÂºïÂÖ•Âú® `build.sbt` Êñá‰ª∂‰∏≠„ÄÇ

ÊÄªÁªìÔºö

- Âú® `.scala` Êñá‰ª∂‰∏≠ÔºåÂèØ‰ª•Âú® `Build.settings` ‰∏≠Â¢ûÂä†ËÆæÁΩÆÔºåËøô‰∫õËÆæÁΩÆËá™Âä®Êàê‰∏∫ÊûÑÂª∫‰ΩúÁî®Âüü„ÄÇ
- Âú® `.scala` Êñá‰ª∂‰∏≠ÔºåÂèØ‰ª•Âú® `Project.settings` ‰∏≠Â¢ûÂä†ËÆæÁΩÆÔºåËøô‰∫õËÆæÁΩÆËá™Âä®Êàê‰∏∫Â∑•Á®ã‰ΩúÁî®Âüü„ÄÇ
- ‰ªª‰ΩïÂú® `.scala` ‰∏≠ÁöÑ `Build` ÂØπË±°Â∞Ü‰ºöÊääÂÆÉÁöÑÂÜÖÂÆπÂØºÂÖ•Âà∞ `.sbt` Êñá‰ª∂‰∏≠„ÄÇ
- Âú® `.sbt` Êñá‰ª∂‰∏≠ÁöÑËÆæÁΩÆË¢´ *ËøΩÂä†* Âà∞ `.scala` ‰∏≠ÁöÑËÆæÁΩÆ„ÄÇ
- Âú® `.sbt` Êñá‰ª∂‰∏≠ÁöÑËÆæÁΩÆÊòØÂú®È°πÁõÆ‰ΩúÁî®ÂüüÈáåÔºåÈô§Èùû‰Ω†ÊåáÂÆöÂÆÉÂú®ÂÖ∂‰ªñÂüü„ÄÇ

### ‰∫§‰∫íÊ®°Âºè‰∏≠ÁöÑÊûÑÂª∫ÂÆö‰πâÈ°πÁõÆ

‰Ω†Áé∞Âú®ÂèØ‰ª•ÂàáÊç¢Âà∞ sbt ÂëΩ‰ª§Ë°åÁöÑ‰∫§‰∫íÊ®°ÂºèÔºåËÆ©Âú® `project/` ÁõÆÂΩï‰∏ãÁöÑÊûÑÂª∫ÂÆö‰πâÈ°πÁõÆ‰Ωú‰∏∫ÂΩìÂâçÈ°πÁõÆ„ÄÇÂèØ‰ª•ËæìÂÖ• `reload plugins` Êù•ËææÂà∞ÁõÆÁöÑ„ÄÇ

```
> reload plugins
[info] Set current project to default-a0e8e4 (in build file:/home/hp/checkout/hello/project/)
> show sources
[info] ArrayBuffer(/home/hp/checkout/hello/project/Build.scala)
> reload return
[info] Loading project definition from /home/hp/checkout/hello/project
[info] Set current project to hello (in build file:/home/hp/checkout/hello/)
> show sources
[info] ArrayBuffer(/home/hp/checkout/hello/hw.scala)
>
```

Â¶Ç‰∏äÊâÄÁ§∫Ôºå‰Ω†ÂèØ‰ª•Áî® `reload return` Á¶ªÂºÄÊûÑÂª∫ÂÆö‰πâÈ°πÁõÆÔºåÂõûÂà∞‰Ω†Âπ≥Â∏∏ÁöÑÈ°πÁõÆ„ÄÇ

### ÊèêÈÜíÔºöÂÆÉÊÄªÊòØ‰∏çÂèØÂèòÁöÑ

ËÆ§‰∏∫Âú® `build.sbt` ÁöÑËÆæÁΩÆÂ∞ÜË¢´Ê∑ªÂä†Âà∞ `Build` Âíå `Project` ÂØπË±°‰∏≠ÁöÑ `settings` Â≠óÊÆµÊòØÈîôËØØÁöÑ„ÄÇÂèñËÄå‰ª£‰πãÁöÑÊòØÔºå`Build` Âíå `Project` ‰∏≠ÁöÑ `settings` ÂàóË°®Ôºå‰ª•Âèä `build.sbt` ‰∏≠ÁöÑËÆæÁΩÆÔºåË¢´
‰∏≤ËøûÂà∞Âè¶‰∏Ä‰∏™‰∏çÂèØÂèòÁöÑÂàóË°®‰∏≠ÔºåÁÑ∂ÂêéË¢´ sbt ‰ΩøÁî®„ÄÇËØ• `Build` Âíå `Project` ÂØπË±°ÊòØ‚Äú‰∏çÂèØÂèòÈÖçÁΩÆ‚ÄùÂΩ¢ÊàêÂÆåÊï¥ÊûÑÂª∫ÂÆö‰πâÁöÑ‰∏ÄÈÉ®ÂàÜ„ÄÇ

‰∫ãÂÆû‰∏äÔºå‰πüÊúâËÆæÁΩÆÁöÑÂÖ∂‰ªñÊù•Ê∫ê„ÄÇ‰ªñ‰ª¨Ë¢´ËøΩÂä†È°∫Â∫èÂ¶Ç‰∏ãÔºö

 - Êù•Ëá™‰Ω†ÁöÑ `.scala` ËÆæÁΩÆÊñá‰ª∂‰∏≠ÁöÑ `Build.settings` Âíå `Project.settings`„ÄÇ
 - ‰Ω†ÁöÑÁî®Êà∑Ë¥¶Âè∑ÂÖ®Â±ÄËÆæÁΩÆÔºõ‰æãÂ¶ÇÂú® `~/.sbt/0.13/global.sbt` ‰∏≠‰Ω†ÂèØ‰ª•ÂÆö‰πâÂΩ±Âìç‰Ω† *ÊâÄÊúâ* È°πÁõÆÁöÑËÆæÁΩÆ„ÄÇ
 - Êèí‰ª∂Ê≥®ÂÖ•ÁöÑËÆæÁΩÆÔºåÂèÇËßÅÊé•‰∏ãÊù•ÁöÑ[‰ΩøÁî®Êèí‰ª∂][Using-Plugins]„ÄÇ
 - È°πÁõÆ‰∏ã `.sbt` Êñá‰ª∂‰∏≠ÁöÑËÆæÁΩÆ„ÄÇ
 - ÊûÑÂª∫ÂÆö‰πâÈ°πÁõÆÔºàÂç≥ `project` ‰∏≠ÁöÑÈ°πÁõÆÔºâÊúâÊù•Ëá™ÂÖ®Â±ÄÊèí‰ª∂Ôºà`~/.sbt/0.13/plugins/`ÔºâÁöÑËÆæÁΩÆ„ÄÇ[‰ΩøÁî®Êèí‰ª∂][Using-Plugins]Ëß£Èáä‰∫ÜÊõ¥Â§öÁöÑÂÜÖÂÆπ„ÄÇ

ÂêéÈù¢ÁöÑËÆæÁΩÆ‰ºöË¶ÜÁõñÂâçÈù¢ÁöÑ„ÄÇÂÖ®ÈÉ®ÁöÑËÆæÁΩÆÂàóË°®ÊûÑÊàê‰∫ÜÂÆåÊï¥ÁöÑÊûÑÂª∫ÂÆö‰πâ„ÄÇ