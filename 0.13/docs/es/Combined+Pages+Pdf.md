---
  title: sbt Reference Manual
  ntags: [scala, sbt]
---

Preface
-------



  [Basic-Def]: Basic-Def.html
  [Scopes]: Scopes.html
  [More-About-Settings]: More-About-Settings.html

Gu√≠a de Inicio de sbt 
=====================

sbt usa un n√∫mero peque√±o de conceptos para soportar *build definitions*
(definiciones de construcci√≥n de software) flexibles y poderosas. No hay
tantos conceptos, pero sbt no es exactamente como cualquier otro sistema
de construcci√≥n de sofware y hay detalles con los que *usted tropezar√°*
si no ha le√≠do la documentaci√≥n.

La Gu√≠a de inicio cubre los conceptos que usted necesita para crear y
mantnere una *build definition*.

¬°Es *altamente recomendable* leer la Gu√≠a de inicio!

Si usted tiene mucha prisa, los conceptos m√°s importantes pueden
encontrarse en [sbt build definition][Basic-Def], [scopes][Scopes], y
[m√°s sobre settings][More-About-Settings]. Pero no prometemos que sea
una buena idea dejar de leer las otras p√°ginas de la gu√≠a.

Es mejor leer en orden, ya que las p√°ginas posteriores de la Gu√≠a de
inicio utilizan conceptos introducidos con anterioridad.

Gracias por utilizar sbt *¬°Divi√©rtase!*


  [Basic-Def]: Basic-Def.html
  [Hello]: Hello.html
  [Running]: Running.html
  [MSI]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.msi
  [Setup-Notes]: ../docs/Setup-Notes.html
  [Mac]: Installing-sbt-on-Mac.html
  [Windows]: Installing-sbt-on-Windows.html
  [Linux]: Installing-sbt-on-Linux.html
  [Manual-Installation]: Manual-Installation.html

Instalando sbt
--------------

Para crear un proyecto de sbt, necesitar√° dar los siguientes pasos:

- Instalar sbt y crear un script para iniciarlo.
- Configurar un proyecto simple [hola mundo][Hello].
  - Crear un directorio llamado project con archivos de c√≥digo fuente en √©l.
  - Crear su *build definition* (definici√≥n de construcci√≥n del proyecto).
- Continuar con [ejecuci√≥n][Running] para aprender a ejecutar sbt.
- Enseguida continuar con [.sbt build definition][Basic-Def] para
  aprender m√°s sobre las *build definitions*.

<!-- TODO: Translate to Spanish. -->

Ultimately, the installation of sbt boils down to a launcher JAR and a shell script,
but depending on your platform, we provide several ways to make the process less tedious.
Head over to the installation steps for [Mac][Mac], [Windows][Windows], [Linux][Linux], or [manual installation][Manual-Installation].

### Tips y notas

Si tiene alg√∫n problema ejecutando sbt, vea
[Setup Notes][Setup-Notes] en las codificaciones de la terminal,
HTTP proxies, y opciones de la JVM.


  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.tgz
  [Manual-Installation]: Manual-Installation.html
 
<!-- TODO: Translate to Spanish -->

Installing sbt on Mac
---------------------

### Installing from a third-party package

> **Note:** Los paquetes de terceros pueden no proporcionar la √∫ltima versi√≥n
> disponible. Por favor aseg√∫rese de reportar cualquier problema con
> estos paquetes a los mantenedores respectivos.

#### [Macports](http://macports.org/)

```
$ port install sbt
```

#### [Homebrew](http://mxcl.github.com/homebrew/)

```
$ brew install sbt
```

### Installing from a universal package

Download [ZIP][ZIP] or [TGZ][TGZ] package, and expand it.

### Installing manually

See instruction to install manually.


  [MSI]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.msi
  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.tgz

Installing sbt on Windows
-------------------------

### Windows installer

Download [msi installer][MSI] and install it.

### Installing from a universal package

Download [ZIP][ZIP] or [TGZ][TGZ] package and expand it.

### Installing manually

See instruction to install manually.


  [ZIP]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.zip
  [TGZ]: https://dl.bintray.com/sbt/native-packages/sbt/0.13.11/sbt-0.13.11.tgz
  [RPM]: https://dl.bintray.com/sbt/rpm/sbt-0.13.11.rpm
  [DEB]: https://dl.bintray.com/sbt/debian/sbt-0.13.11.deb
  [Manual-Installation]: Manual-Installation.html

<!-- TODO: Translate to Spanish -->

Installing sbt on Linux
-----------------------

### Installing from a universal package

Download [ZIP][ZIP] or [TGZ][TGZ] package and expand it.

### RPM and DEB

The following packages are also officially supported:

  - [RPM][RPM] package
  - [DEB][DEB] package

> **Note:** Por favor reporte cualquier problema que se tenga con los paquetes
> arriba mencionados al projecto
> [sbt-launcher-package](https://github.com/sbt/sbt-launcher-package).

### Gentoo

En el √°rbol oficial no hay ebuild para sbt. Pero existen [ebuilds](https://github.com/whiter4bbit/overlays/tree/master/dev-java/sbt-bin) para
hacer un *merge* de sbt a partir de los binarios.
Para hacer un merge de sbt a partir de estos ebuilds, puede hacer lo
siguiente:

    $ mkdir -p /usr/local/portage && cd /usr/local/portage
    $ git clone git://github.com/whiter4bbit/overlays.git
    $ echo "PORTDIR_OVERLAY=$PORTDIR_OVERLAY /usr/local/portage/overlays" >> /etc/make.conf
    $ emerge sbt-bin

> **Note:** Por favor reporte cualquier problema con el ebuild
> [aqu√≠](https://github.com/whiter4bbit/overlays/issues).

### Instalaci√≥n manual

See instruction to install manually.


  [sbt-launch.jar]: https://repo.typesafe.com/typesafe/ivy-releases/org.scala-sbt/sbt-launch/0.13.11/sbt-launch.jar

Installing sbt manually
-----------------------

La instalaci√≥n manual requiere la descarga de [sbt-launch.jar][sbt-launch.jar] y la
creaci√≥n de un script para ejecutarlo.

### Unix

Ponga [sbt-launch.jar][sbt-launch.jar] en `~/bin`.

Cree un script para ejecutar el jar, mediante la creaci√≥n de `~/bin/sbt`
con el siguiente contenido:

```
#!/bin/bash
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
java $SBT_OPTS -jar `dirname $0`/sbt-launch.jar "$@"
```

Haga el script ejecutable con:

```
$ chmod u+x ~/bin/sbt
```

### Windows

La instalaci√≥n manual para Windows var√≠a seg√∫n el tipo de terminal y
dependiendo de si Cygwin es usado o no. En todos los casos, ponga el
archivo batch o el script en el *path* de modo que pueda iniciar `sbt`
en cualquier directorio mediante teclear `sbt` en la l√≠nea de comandos.
Tambi√©n, ajuste los settings de la JVM de acuerdo con su m√°quina si es
necesario.

#### Non-Cygwin

Para usuarios que no utilizan Cygwin, pero que usan la terminal
standard de Windows, cree un archivo batch `sbt.bat`:

```
set SCRIPT_DIR=%~dp0
java -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M -jar "%SCRIPT_DIR%sbt-launch.jar" %*
```

y ponga el [sbt-launch.jar][sbt-launch.jar] que descarg√≥ en el mismo directorio que
archivo batch.

#### Cygwin con la terminal standard de Windows

Si utiliza Cygwin con la terminal standard de Windows, cree un
script de bash `~/bin/sbt`:

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
java $SBT_OPTS -jar sbt-launch.jar "$@"
```

Reemplace `sbt-launch.jar` con la ruta hasta el [sbt-launch.jar][sbt-launch.jar] que
descarg√≥ y recuerde utilizar `cygpath` si es necesario. Haga el scrip
ejecutable con:

```
$ chmod u+x ~/bin/sbt
```

#### Cygwin con una terminal Ansi

Si utiliza Cygwin con una terminal Ansi (que soporte secuentas de
escape Ansi y que sea configurable mediante `stty`), cree un script
`~/bin/sbt`:

```
SBT_OPTS="-Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
stty -icanon min 1 -echo > /dev/null 2>&1
java -Djline.terminal=jline.UnixTerminal -Dsbt.cygwin=true $SBT_OPTS -jar sbt-launch.jar "$@"
stty icanon echo > /dev/null 2>&1
```

Reemplace `sbt-launch.jar` con la ruta hasta el [sbt-launch.jar][sbt-launch.jar] que
descarg√≥ y recuerde utilizar `cygpath` si es necesario. Entonces, haga
que el script sea ejecutable con:

```
$ chmod u+x ~/bin/sbt
```

Para que la tecla *backspace* funcione correctamente en la consola de
scala, necesita asegurarse de que dicha tecla est√© enviando el caracter
de borrado, de acuerdo a la configuraci√≥n de `stty`. Para la terminal por
default de cygwin (mintty) puede encontrar una configuraci√≥n en Options
-> Keys "Backspace sends ^H" que necesitar√° estar palomeada si su
tecla de borrado env√≠a el caracter por default de cygwin `^H`.

> **Note:** Otras configuraciones no est√°n actualmente soportadas. Por favor env√≠e
> [pull requests](https://github.com/sbt/sbt/blob/0.13/CONTRIBUTING.md)
> implementando o describiendo dicho soporte.


  [Basic-Def]: Basic-Def.html
  [Setup]: Setup.html

Hello, World
------------

Esta p√°gina asume que usted ha [instalado sbt][Setup].

### Cree un directorio project con c√≥digo fuente

Un proyecto v√°lido de sbt puede ser un directorio que contenga un √∫nico
archivo de c√≥digo fuente. Intente crear un directorio `hello` con un
archivo `hw.scala`, que contenga lo siguiente:

```scala
object Hola {
  def main(args: Array[String]) = println("¬°Hola!")
}
```

Despu√©s, desde el directorio `hello`, inicie sbt y teclee `run` en la
consola interactiva de sbt. En Linux u OS X los comandos tal vez se vean
de la siguiente manera:

```
$ mkdir hello
$ cd hello
$ echo 'object Hola { def main(args: Array[String]) = println("¬°Hola!") }' > hw.scala
$ sbt
...
> run
...
Hola!
```

En este caso, sbt funciona simplemente por convenci√≥n. sbt encontrar√° lo
siguiente de manera autom√°tica:

- C√≥digo fuente en el directorio base.
- C√≥digo fuente en `src/main/scala` o `src/main/java`.
- Pruebas en `src/test/scala` o `src/test/java`
- Archivos de datos en `src/main/resources` o `src/test/resources`
- jars en `lib`

Por default, sbt construir√° proyectos con la misma versi√≥n de Scala
utilizada para ejecutar sbt en s√≠ mismo.

Usted puede ejecutar el proyecto con `sbt run` o ingresar a la
[REPL de Scala](http://www.scala-lang.org/node/2097) con
`sbt console`. `sbt console` configura el classpath de su proyecto para
que pueda probar ejemplos de Scala basados en el c√≥digo de su proyecto.

### Build definition (Definici√≥n de la construcci√≥n)

La mayor√≠a de los proyectos necesitar√°n algo de configuraci√≥n manual. La
configuraci√≥n b√°sica de la construcci√≥n va en un archivo llamado
`build.sbt`, localizado en el directorio base del proyecto.

Por ejemplo, si su proyecto est√° en el directorio `hello`, en
`hello/build.sbt` usted puede escribir:

Note la l√≠nea en blanco entre cada √≠tem. Esto no es simplemente porque
s√≠; se requieren las l√≠neas en blanco para separar cada √≠tem. En
[.sbt build definition][Basic-Def]  usted aprender√° m√°s sobre c√≥mo
escribir un archivo `build.sbt`.

Si usted planea empaquetar su proyecto en un jar, tal vez desee
configurar al menos el nombre y la versi√≥n en un archivo `build.sbt`.

### Configurando la versi√≥n de sbt

Usted puede forzar una versi√≥n partivular de sbt al crear un archivo
`hello/project/build.properties`. En este archivo, escriba:

```
sbt.version=0.13.11
```

para forzar el uso de sbt 0.13.11. sbt es 99% compatible (con respecto
al c√≥digo fuente) de una *release* a otra. Sin embargo, configurar la versi√≥n
de sbt en `project/build.properties`
evita cualquier confusi√≥n potencial.


  [Hello]: Hello.html
  [Setup]: Setup.html
  [Full-Def]: Full-Def.html

Estructura de directorios
-------------------------

Esta p√°gina asume que usted ha [instalado sbt][Setup] y ha visto el
ejemplo [Hello, World][Hello].

### Directorio base

En la terminolog√≠a de sbt, el "directorio base" es el directorio que
contiene al proyecto. De modo que si usted cre√≥ el proyecto `hello` que
contiene `hello/build.sbt` y `hello/hw.scala` como se indic√≥ en el
ejemplo [Hello, World][Hello], `hello` es su directorio base.

### C√≥digo fuente

El c√≥digo fu8ente puede ponerse en el directorio base del proyecto como
en el caso de `hello/hw.scala`. Sin embargo, la mayor√≠a de las personas
no hacen esto para proyectos reales; se traduce en mucho desorden.

sbt utiliza la misma estructura de directorios que
[Maven](https://maven.apache.org/) para el c√≥digo fuente por default
(todos las rutas son relativas al directorio base):

```
src/
  main/
    resources/
       <archivos que se incluyen en el jar principal van aqu√≠>
    scala/
       <c√≥digo fuente de Scala de main>
    java/
       <c√≥digo fuente de Java de main>
  test/
    resources
       <archivos que se incluyen en el jar de test van aqu√≠>
    scala/
       <c√≥digo fuente de Scala para test>
    java/
       <c√≥digo fuente de Java para test>
```

Otros directorios en `src/` ser√°n ignorados. Adicionalmente, todos los
directorios ocultos ser√°n ignorados.

### Archivos de definici√≥n de la construcci√≥n de sbt (sbt build definition files)

Ya ha visto `build.sbt` en el directorio base del proyecto. Otros
archivos sbt aparecen en el subdirectorio `project`.

El subdirectorio `project` puede contener archivos `.scala`, que se
combinan con los archivos `.sbt` para formar la definici√≥n completa de
la construcci√≥n.

Vea [.scala build definition][Full-Def] para m√°s informaci√≥n.

```
build.sbt
project/
  Build.scala
```

Tal vez pueda ver archivos `.sbt` dentro de `project/` pero no son
equivalentes a archivos `.sbt` en el directorio base del proyecto. La
explicaci√≥n de esto [viene despu√©s][Full-Def], dado que necesitar√° algo
de antecedentes primero.

### Productos de la construcci√≥n

Los archivos generados (clases compiladas, paquetes en jars, archivos
gestionados (*managed files*), caches, y documentaci√≥n) ser√° escrita al
directorio `target` por default.

### Configurando el sistema de control de versiones

Su archivo `.gitignore` (o el equivalente para otro sistema de control
de versiones) debe contener:

```
target/
```

Note que el texto anterior tiene una `/` de forma deliberada (para que
√∫nicamente los directorios sean seleccionados) y de manera deliberada no
tiene una `/` al inicio (para que el directorio `project/target/`
tambi√©n sea seleccionado, adem√°s de simplemente el directorio
`target/`).


  [Hello]: Hello.html
  [Setup]: Setup.html
  [Triggered-Execution]: ../docs/Triggered-Execution.html
  [Command-Line-Reference]: ../docs/Command-Line-Reference.html

Ejecuci√≥n
---------

Esta p√°gina describe c√≥mo utilizar `sbt` una vez que usted a configurado
su proyecto. Se asume que usted ha [instalado sbt][Setup] y que ha
creado un proyecto [Hello, World][Hello] u otro proyecto.

### Modo interactivo

Ejecute sbt en el directorio de su proyecto sin argumentos:

```
$ sbt
```

Ejecutar sbt sin ning√∫n argumento en la l√≠nea de comandos, inicia sbt en
modo interactivo. El modo interactivo tiene una l√≠nea de comandos (¬°con
*tab completion* e historia!).

Por ejemplo, usted puede teclear `compile` en el prompt de sbt:

```
> compile
```

Para key:`compile` de nuevo, presione la tecla "arriba" y entonces
enter.

Para ejecutar su programa nuevamente, teclee `run`.

Para dejar el modo interactivo, teclee `exit` o utilice Ctrl+D (Unix) o
Ctrl+Z (Windows).

### Modo Batch (por lotes)

Tambi√©n puede ejecutar sbt en modo batch, especificando una lista
separada por espacios de comandos de sbt como argumentos. Para comandos
de sbt que toman argumentos, pase el comando y los argumentos como uno
solo a `sbt` mediante encerrarlos entre comillas. Por ejemplo:

```
$ sbt clean compile "testOnly TestA TestB"
```

En este ejemplo, la *key* `testOnly` tiene argumentos, `TestA` y
`TestB`. Los comandos se ejecutar√°n en sequencia (`clean`, `compile`, y
entonces `testOnly`).

### Construcci√≥n y test continuos

Para acelerar el ciclo de edici√≥n-compilaci√≥n-prueba, puede pedir a sbt
que recompile autom√°ticamente o que ejecute los tests siempre que se
guarde un archivo de c√≥digo fuente.

Puede conseguir que un comando se ejecute siempre que uno o m√°s archivos
de c√≥digo fuente cambien al agregar como prefijo `~`. Por ejemplo, en
modo interactivo, intente:

```
> ~ compile
```

Presione enter para dejar de observar sus cambios.

Usted puede usar el prefijo `~` ya sea en modo interactivo o en modo
*batch*.

Vea [Triggered Execution][Triggered-Execution] para m√°s detalles.

### Comandos comunes

Aqu√≠ encontrar√° algunos de los comandos de sbt m√°s comunes. Para una
lista m√°s completa, vea [Command Line Reference][Command-Line-Reference].

<table>
  <tr>
    <td><tt>clean</tt></td>
    <td>Borra todos los archivos generados (en el directorio <tt>target</tt>).</td>
  </tr>
  <tr>
    <td><tt>compile</tt></td>
    <td>Compila los archivos de c√≥digo fuente de main (en los
    directorios <tt>src/main/scala</tt> y
   <tt>src/main/java</tt>).</td>
  </tr>
  <tr>
    <td><tt>test</tt></td>
    <td>Compila y ejecuta todos los tests.</td>
  </tr>
  <tr>
    <td><tt>console</tt></td>
    <td>Inicia el interprete de Scala con un classpath que incluye
    el c√≥digo fuente compilado y todas las dependencias. Para regresar a
    sbt, teclee :quit, Ctrl+D (Unix), o Ctrl+Z (Windows).</td>
  </tr>
  <tr>
    <td><nobr><tt>run &lt;argument&gt;*</tt></nobr></td>
    <td>Ejecuta la clase principal para el proyecto en la
    misma m√°quina virtual que sbt.</td>
  </tr>
  <tr>
    <td><tt>package</tt></td>
    <td>crea un archivo jar que contiene los archivos en
    <tt>src/main/resources</tt> y las clases compiladas de <tt>src/main/scala</tt> y
    <tt>src/main/java</tt>.</td>
  </tr>
  <tr>
    <td><tt>help &lt;command&gt;</tt></td>
    <td>Despliega ayuda detallada para el comando
    especificado. Si no se proporciona ning√∫n comando, despliega una
    breve descripci√≥n de todos los comandos.</td>
  </tr>
  <tr>
    <td><tt>reload</tt></td>
    <td>Recarga la definici√≥n de la construcci√≥n (los archivos
    <tt>build.sbt</tt>, <tt>project/*.scala</tt>,
    <tt>project/*.sbt</tt>). Este comando es
    necario si cambia la definici√≥n de la construcci√≥n.</td>
  </tr>
</table>

### Tab completion

El modo interactivo tiene *tab completion*, incluyendo el caso cuando se
tiene un prompt vacio. Una convenci√≥n especial de sbt es que presionar
tab una vez puede mostrar √∫nicamente un subconjunto de *completions* m√°s
probables, mientras que presionarlo m√°s veces muestra opciones m√°s
verbosas.

### Comandos de historia

El modo interactivo recuerda la historia, incluso si usted sale de sbt y
lo reinicia. La manera m√°s simple de acceder a la historia es con la
tecla "arriba". Tambi√©n se soportan los siguientes comandos:

<table>
  <tr>
    <td><tt>!</tt></td>
    <td>Muestra la ayuda para los comandos de historia.</td>
  </tr>
  <tr>
    <td><tt>!!</tt></td>
    <td>Ejecuta el comando previo de nuevo.</td>
  </tr>
  <tr>
    <td><tt>!:</tt></td>
    <td>Muestra todos los comandos previos.</td>
  </tr>  
  <tr>
    <td><tt>!:n</tt></td>
    <td>Muestra los <tt>n</tt> comandos previos.</td>
  </tr>
  <tr>
    <td><tt>!n</tt></td>
    <td>Ejecuta el comando con √≠ndice <tt>n</tt>, como se indica con el
    comando <tt>!:</tt>.</td>
  </tr>
  <tr>
    <td><tt>!-n</tt></td>
    <td>Ejecuta el comando n-th previo a este.</td>
  </tr>
  <tr>
    <td><tt>!cadena</tt></td>
    <td>Ejecuta el comando m√°s reciente que comienza con 'cadena'.</td>
  </tr>
  <tr>
    <td><tt>!?cadena</tt></td>
    <td>Ejecuta el comando m√°s reciente que contenga 'cadena'.</td>
  </tr>
</table>


  [More-About-Settings]: More-About-Settings.html
  [Full-Def]: Full-Def.html
  [Running]: Running.html
  [Library-Dependencies]: Library-Dependencies.html
  [Input-Tasks]: ../docs/Input-Tasks.html

`.sbt` build definition
-----------------------

Esta p√°gina describe las *build definitions*, incluyendo algo de
"teor√≠a" y la sintaxis de `build.sbt`. Se asume que usted sabe como
[usar sbt][Running] y que ha le√≠do las p√°ginas previas en la
Gu√≠a de inicio.

### `.sbt` vs `.scala` Build Definition

Una *build definition* para sbt puede contener archivos con terminaci√≥n
`.sbt`, localizados en el directorio base de un proyecto, y archivos con
extensi√≥n `.scala`, localizados en el subdirectorio `project/` del
directorio base.

Esta p√°gina trata sobre los archivos `.sbt`, que son apropiados para la
mayor√≠a de los casos. Los archivos `.scala` se usan t√≠picamente para
compartir c√≥digo entre archivos `.sbt` y para *build definitions* m√°s
complicadas.

Vea [.scala build definition][Full-Def] (m√°s adelante en la *Gu√≠a de
inicio*) para m√°s informaci√≥n sobre los archivos `.scala`.

### ¬øQu√© es una *Build Definition*?

Despu√©s de examinar un proyecto y procesar los archivos para la
definici√≥n de la construcci√≥n del proyecto, sbt termina con un mapa
inmutable (un conjunto de pares llave-valor) describiendo la
construcci√≥n.

Por ejemplo, una llave es `name` y se mapea a un valor de tipo cadena
(`String`), el nombre de su proyecto.

*Los archivos de definici√≥n de la construcci√≥n no afectan el mapa de sbt
directamente.*

En lugar de esto, la definici√≥n de la construcci√≥n crea una lista enorme
de objectos con el tipo `Setting[T]` donde `T` es el tipo del valor en
el mapa. Un `Setting` describe una *transformaci√≥n del mapa*, tal como
a√±adir un nuevo valor llave-valor o agregar a un valor existente. (En el
esp√≠ritu de la programaci√≥n funcional con estructuras de datos y valores
inmutables, una transformaci√≥n regresa un nuevo mapa -- no se actualiza
el viejo mapa en s√≠ mismo).

En `build.sbt`, usted puede crear un `Setting[String]` para el nombre de
su proyecto como se indica a continuaci√≥n:

```scala
name := "hello"
```

Este `Setting[String]` transforma el mapa al a√±adir (o reemplazar) la
llave `name`, d√°ndole el valor

`"hello"`. El mapa transformado se convierte en el nuevo mapa de sbt.

Para crear el mapa, sbt primero ordena la lista de *settings*
(configuraciones) de modo que todos los cambios al mismo se realicen
juntos, y los valores que dependen de otras llaves se procesan despu√©s
de las llaves de las que dependen. Entonces sbt visita la lista ordenada
de `Settings`s y aplica cada uno al mapa a la vez.

Resumen: Una definici√≥n de construcci√≥n define una lista de
`Setting[T]`, donde un `Setting[T]` es una transformaci√≥n que afecta el
mapa de pares de llaves-valores de sbt y `T` es el tipo de cada valor.

### De qu√© manera `build.sbt` define la configuraci√≥n

`build.sbt` define una `Seq[Setting[_]]`; se trata de una lista de
expresiones de Scala, separada por l√≠neas en blanco, donde cada una se
convierte en un elemento de la secuencia. Si usted colocara `Seq(` antes
del contenido de un archivo `.sbt` y `)` al final y reemplazara las
l√≠neas blancas con comas, entonces estar√≠a observando el c√≥digo `.scala`
equivalente.

A continuaci√≥n se muestra un ejemplo:

```scala
name := "hello"

version := "1.0"

scalaVersion := "2.10.3"
```

Cada `Setting` se define con una expresi√≥n de Scala. Las expresiones en
`build.sbt` son independientes la una de la otra, y son expresiones, m√°s
bien que sentencias completas de Scala. Estas expresiones pueden estar
entremezcladas con `val`s, `lazy val`s, y `def`s. No se permiten
`object`s ni `class`es en `build.sbt`. Estos deben ir en el directorio
`project/` como archivos de c√≥digo fuente completos.

Por la izquierda, `name`, `version`, y `scalaVersion` son *keys*
(llaves). Una *key* es una instancia de `SettingKey[T]`, `TaskKey[T]`, o
`InputKey[T]` donde `T` es el valor esperado para el tipo. La clase de
*keys* se explican abajo.

Las *keys* tienen un m√©todo llamado `:=`, que regresa un `Setting[T]`.
Usted podr√≠a usar una sint√°xis similar a la de Java para invocar al
m√©todo:

```scala
name.:=("hello")
```

Pero Scala permite usar `name := "hello"` en lugar de lo anterior (en
Scala, un m√©todo con un √∫nico par√°metro puede utilizar cualquiera de las
dos sintaxis).

El m√©todo `:=` en la *key* `name` regresa un `Setting`, espec√≠ficamente
un `Setting[String]`. `String` tambi√©n aparece en el tipo de `name` en
s√≠ misma, el cu√°l es `SettingKey[String]`. En este caso, el valor
`Setting[String]` regresado es una transformaci√≥n para agregar o
reemplazar la *key* `name` en el mapa de sbt, d√°ndole el valor
`"hello"`.

Si usted usa el tipo de valor equivocado, la definici√≥n de la
construcci√≥n no compilar√°:

```scala
name := 42  // no compila
```

### Las *settings* (configuraciones) deben estar separadas por l√≠neas en blanco

No es posible escribir un `build.sbt` como el siguiente:


```scala
// NO compila, pues no hay l√≠neas en blanco
name := "hello"
version := "1.0"
scalaVersion := "2.10.3"
```

sbt necesita un tipo de delimitador para indicar donde termina una
expresi√≥n y comienza la siguiente.

Los archivos `.sbt` contienen una lista de expresiones de Scala, no un
√∫nico programa de Scala. Estas expresiones tienen que separarse y
pasarse al compilador de manera individual.

### Keys

#### Tipos

Existen tres tipos de llaves:

-   `SettingKey[T]`: una *key* para un valor que se calcula una sola vez
    (el valor es calculado cuando se carga el proyecto, y se mantiene).
-   `TaskKey[T]`: una *key* para un valor, llamado una *task* (tarea),
    que tiene que ser recalculada cada vez, potencialmente con efectos
    laterales.
-   `InputKey[T]`: una *key* para una *task* que tiene argumentos para
    la l√≠nea de comandos como entrada. Vea /Extending/Input-Tasks para
    m√°s detalles.

#### Built-in Keys (Llaves ya inclu√≠das)

Las llaves ya inclu√≠das son simplemente campos de un objeto llamado
[Keys](../sxr/sbt/Keys.scala.html). Un archivo `build.sbt` tiene
impl√≠citamente un `import sbt.Keys._`, de modo que `sbt.Keys.name` puede
ser referido como `name`.

#### Custom Keys (llaves personalizadas)

Las llaves personalizadas pueden definirse con sus m√©todos de creaci√≥n
respectivos: `settingKey`, `taskKey`, e `inputKey`. Cada m√©todo espera
el tipo del valor asociado con la llave as√≠ como una descripci√≥n. El
nombre de la llave se toma del `val` al que se le asign√≥ la llave. Por
ejemplo, para definir una llave para una nueva tarea llamado `hello`, :

```scala
lazy val hello = taskKey[Unit]("An example task")
```

Aqu√≠ se us√≥ el hecho de que un archivo `.sbt` puede contener `val`s y
`def`s adem√°s de *settings* (configuraciones). Todas estas definiciones
son evaluadas antes que las configuraciones sin importar donde se
definan en el archivo. `val`s y `def`s deben estar separadas de las
*settings* mediante l√≠neas blancas.

> **Note**: T√≠picamente, se utilizan lazy vals en lugar de vals para evitar
> problemas de inicializaci√≥n.

#### Task vs. Setting keys (Llaves para *Tasks* vs. Llaves para *Settings*)

Se dice que una `TaskKey[T]` define una *task*. Las *tasks* son
operaciones tales como `compile` o `package`. Pueden regresar `Unit`
(`Unit` es el tipo de Scala an√°logo a `void`), o pueden regresar un
valor relacionado con la tarea, por ejemplo, `package` es una
`TaskKey[File]` y su valor es el archivo jar que este crea.

Cada vez que inicia una tarea de ejecuci√≥n, por ejemplo mediante teclear
`compile` en el prompt interactivo de sbt, sbt volver√° a ejecutar
cualquier *task* envuelta exactamente una vez.

El mapa de sbt que describe el proyecto puede mantener una cadena fija
para un *setting* tal como `name`, pero tiene que haber algo de c√≥digo
ejecutable para una tarea como `compile` -- incluso si dicho c√≥digo
ejecutable eventualmente regresa una cadena, tiene que ejecutarse cada
vez.

*Una key dada siempre se refiere ya sea a una task o a un setting*. Es
decir, "taskiness" (si debe ejecutarse cada vez) es una propiedad de la
*key*, no del valor.

### Definiendo tasks y settings

Usando `:=`, usted puede asignar un valor a un *setting* y un c√≥mputo a
una *task*. En el caso de un *setting*, el valor ser√° calculado una sola
vez al momento de cargar el proyecto. Para una tarea, el c√≥mputo se
realizar√° cada vez que se ejecute la tarea.

Por ejemplo, para implementar la tarea `hello` de la secci√≥n anterior, :

```scala
hello := { println("Hello!") }
```

Ya vimos un ejemplo de definici√≥n de un *setting* para el nombre del
proyecto, :

```scala
name := "hello"
```

#### Tipos para las tareas y los settings

Desde la perspectiva del sistema de tipos, el `Setting` creado a partir
de una *task key* es ligeramente distinta de la creada a partir de una
*setting key*. `taskKey := 42` resulta en una `Setting[Task[T]]`
mientras que `settingKey := 42` resulta en una `Setting[T]`. Para la
mayor√≠a de los prop√≥sitos no hay diferencia, la *task key* todav√≠a crea
un valor de tipo `T` cuando la tarea se ejecuta.

La diferencia entre los tipos `T` y `Task[T]` tiene la siguiente
implicaci√≥n: un *setting* no puede depender de una *task*, poque un
*setting* es evaluado √∫nicamente una vez al momento de cargar el
proyecto y no se vuelve a ejecutar. Se escribir√° m√°s sobre este asunto
pronto en [more kinds of setting][More-About-Settings].

### Keys en modo sbt interactivo

En el modo interactivo de sbt, usted puede teclear el nombre de
cualquier tarea para ejecutar dicha tarea. Es por esto que al teclear
`compile` se ejecuta la *task* de compilaci√≥n. La *key* `compile` es una
llave para una *task*.

Si usted teclea el nombre de una *key* para *setting* m√°s bien que una
para *task*, entonces el valor de la *key* para *setting* ser√° mostrado.
Al teclear el nombre de una *task* se ejecuta dicha *task*, pero no se
despliega el valor resultante; para ver el resultado de la *task*, use
`show <nombre de la tarea>` m√°s bien que simplemente
`<nombre de la tarea`. La convenci√≥n para los nombres de las llaves es
usar `estiloDeCamello` de modo que el nombre utilizado en la l√≠nea de
comandos y el identificador de Scala sean id√©nticos.

Para aprender m√°s sobre cualquier *key*, teclee
`inspect <nombre de la key>` en el prompt interactivo de sbt. Algo de la
informaci√≥n que `inspect` despliega no tendr√° sentido todav√≠a, pero en
la parte superior le mostrar√° el tipo del valor para el *setting* y una
breve descripci√≥n del tal.

### Imports en `build.sbt`

Puede poner sentencias import en la parte superior de `build.sbt`; no
necesitan estar separadas por l√≠neas en blanco.

Hay algunos imports por default, como se indica a continuaci√≥n:

```scala
import sbt._
import Process._
import Keys._
```

(Adem√°s, si usted tiene [archivos .scala][Full-Def], el contenido de
cualquier objeto `Build` o `Plugin` en estos archivos ser√° importado.
M√°s sobre este asunto cuando se llegue a
[definiciones de construccion .scala][Full-Def].)

### A√±adiendo dependencias (librer√≠as)

Para agregar dependencias de librer√≠as de terceros, hay dos opciones. La
primera es a√±adir jars en el directorio `lib/` (para *unmanaged
dependencies*) y la otra es agregar *managed dependencies*, que se ver√°n
como se muestra a continuaci√≥n en `build.sbt`:

```scala
libraryDependencies += "org.apache.derby" % "derby" % "10.4.1.3"
```

As√≠ es como se agrega una *managed dependency* sobre la librer√≠a Apache
Derby, versi√≥n 10.4.1.3.

La key `libraryDependencies` envuelve dos complejidades: `+=` m√°s bien
que `:=`, y el m√©todo `%`. `+=` agrega algo al valor anterior de la
*key* m√°s bien que reemplazarlo; esto se explica en
[m√°s sobre los settings][More-About-Settings]. El
m√©todo `%` se usa para construir un ID para un m√≥dulo de Ivy a partir de
cadenas, como se explica en
[library dependencies][Library-Dependencies].

Por lo pronto, omitiremos los detalles del manejo de las dependencias
(librer√≠as) hasta m√°s tarde en la Gu√≠a de inicio. Hay una
[p√°gina completa][Library-Dependencies] que cubre el
tema m√°s tarde.


  [Basic-Def]: Basic-Def.html
  [More-About-Settings]: More-About-Settings.html
  [Library-Dependencies]: Library-Dependencies.html
  [Multi-Project]: Multi-Project.html
  [Inspecting-Settings]: http://www.scala-sbt.org/release/docs/Detailed-Topics/Inspecting-Settings.html

Scopes
------

Esta p√°gina describe los *scopes*. Se asume que usted ha le√≠do y
comprendido la p√°gina previa, [.sbt build definition][Basic-Def].

### La historia completa sobre las *keys*

[Previamente][Basic-Def] supusimos que una *key* como `name`
correspond√≠a a una entrada en el mapa de sbt de pares llave-valor
(key-value). Esto fue una simplificaci√≥n.

En verdad, cada llave puede tener un valor asociado en m√°s de un
contexto, llamado un "scope".

Algunos ejemplos concretos:

-   Si usted tiene m√∫ltiples proyectos en la definici√≥n de la
    construcci√≥n, una *key* puede tener un valor diferente en cada
    proyecto.
-   La *key* `compile` puede tener un valor diferente para sus archivos
    de c√≥digo fuente de main comparado con el correspondiente valor para
    el c√≥digo fuente de test, si usted desea que se compilen de manera
    distinta.
-   La *key* `packageOpitons` (que contiene opciones para crear paquetes
    jar) puede tener diferentes valores para el empaquetado de archivos
    class (packageBin) o para el empaquetado de c√≥digo fuente
    (packageSrc).

*No hay un √∫nico valor para una key dada*, porque el valor puede variar
de acuerdo con el *scope*.

Sin embargo, existe un √∫nico valor para una *scoped key* (llaves con un
contexto).

Si usted se imagina que sbt est√° procesando una lista de *settings* para
generar un mapa de llave-valor (*key-value*) que describe al proyecto,
como [se discuti√≥ anteriormente][Basic-Def], las *keys* en dicho mapa
son *scoped keys*. Cada *setting* definido en la definici√≥n de la
construcci√≥n del proyecto (por ejemplo en `build.sbt`) aplica a una
*scoped key* tambi√©n.

Con frecuencia el *scope* es impl√≠cito o tiene un valor por default,
pero si dichos valores son incorrectos, entonces tendr√° que indicar el
*scope* deseado en `build.sbt`.

### Ejes del Scope

Un *eje del scope* es un tipo, donde cada instancia del tipo puede
definir su propio *scope* (esto es, cada instancia puede tener sus
propios valores √∫nicos para las *keys*).

Hay tres ejes del scope:

-   Projects
-   Configurations
-   Tasks

### Scoping mediante del eje del proyecto

Si usted
[coloca m√∫ltiples proyectos en una construcci√≥n √∫nica][Multi-Project],
cada proyecto necesita sus propios *settings*. Es decir, las *keys*
pueden estar en *scope* de acuerdo al proyecto.

Los ejes del proyecto tambi√©n pueden configurarse para la "entera
construcci√≥n", de modo que un *setting* aplique a la construcci√≥n
completa m√°s bien que a un solo proyecto. Los *settings* de *nivel de
construcci√≥n* con frecuencia se usan como un plan de reserva cuando un
proyecto no define un *setting* espec√≠fico para un proyecto.

#### Scoping mendiante el eje de configuraci√≥n

Una configuraci√≥n define el tipo de construcci√≥n, potencialmente con su
propio classpath, c√≥digo fuente, paquetes generados, etc. El concepto de
configuraci√≥n viene de Iviy, que sbt usa para
[managed dependencies][Library-Dependencies], y para
[MavenScopes](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Scope).

Algunas configuraciones que ver√° en sbt:

-   `Compile` que define la construcci√≥n principal (*main*)
    (`src/main/scala`).
-   `Test` que define c√≥mo construir tests (`src/test/scala`).
-   `Runtime` que define el classpath para la *task* `run`.

Por default, todas las llaves asociadas con la compilaci√≥n,
empaquetamiento y la ejecuci√≥n tienen un scope de configuraci√≥n y por lo
tanto pueden funcionar de manera diferente en cada configuraci√≥n. Los
ejemplos m√°s obvios son las *keys* para *tasks* `compile`, `package`, y
`run`; pero todas las llaves que *afectan* dichas *keys* (tales como
`sourceDirectories` o `scalacOptions` o `fullClasspath`) tambi√©n tienen
scope de configuraci√≥n.

#### Scoping mediante el eje task

Los *settings* pueden afectar c√≥mo funcionan las *tasks*. Por ejemplo,
la *key* de *setting* `packageOptions` afecta a la *key* `packageSrc` de
*task*.

Para soportar esto, una *key de task* (tal como `packageSrc`) puede ser
el scopde para otra *key* (tal como `packageOptions`).

Las diferentes *tasks* que construyen un paquete (`packageSrc`,
`packageBin`, `packageDoc`) pueden compartir *keys* relacionadas al
empaquetamiento, tales como `artifactName` y `packageOptions`. Dichas
*keys* pueden tener distintos valores para cada *task* de
empaquetamiento.

### Scope global

Cada eje de scope puede llenarse con una instancia del tipo de eje (por
ejemplo el eje de *task* puede llevarse con una *task*), o el eje puede
llenarse con el valor especial `Global`.

`Global` significa lo que usted espera: el valor del *setting* aplica a
todas las instancias de ese eje. Por ejemplo, si el eje de la *task* es
`Global`, entonces dicho *setting* aplicar√≠a a todas las *tasks*.

<!-- TODO: Translate to Spanish -->

### Delegation

A scoped key may be undefined, if it has no value associated with it in
its scope.

For each scope, sbt has a fallback search path made up of other scopes.
Typically, if a key has no associated value in a more-specific scope,
sbt will try to get a value from a more general scope, such as the
`Global` scope or the entire-build scope.

This feature allows you to set a value once in a more general scope,
allowing multiple more-specific scopes to inherit the value.

You can see the fallback search path or "delegates" for a key using the
`inspect` command, as described below. Read on.

### Referring to scoped keys when running sbt

On the command line and in interactive mode, sbt displays (and parses)
scoped keys like this:

```
{<build-uri>}<project-id>/config:intask::key
```

- `{<build-uri>}/<project-id>` identifies the project axis. The
  `<project-id>` part will be missing if the project axis has "entire build" scope.
- `config` identifies the configuration axis.
- `intask` identifies the task axis.
- `key` identifies the key being scoped.

`*` can appear for each axis, referring to the `Global` scope.

If you omit part of the scoped key, it will be inferred as follows:

- the current project will be used if you omit the project.
- a key-dependent configuration will be auto-detected if you omit the
  configuration or task.

For more details, see [Interacting with the Configuration System][Inspecting-Settings].

### Examples of scoped key notation

- `fullClasspath` specifies just a key, so the default scopes are used:
  current project, a key-dependent configuration, and global task
  scope.
- `test:fullClasspath` specifies the configuration, so this is
  `fullClasspath` in the `test` configuration, with defaults for the other
  two scope axes.
- `*:fullClasspath` specifies `Global` for the configuration, rather than
  the default configuration.
- `doc::fullClasspath` specifies the `fullClasspath` key scoped to the `doc`
  task, with the defaults for the project and configuration axes.
- `{file:/home/hp/checkout/hello/}default-aea33a/test:fullClasspath`
  specifies a project, `{file:/home/hp/checkout/hello/}default-aea33a`,
  where the project is identified with the build
  `{file:/home/hp/checkout/hello/}` and then a project id inside that
  build `default-aea33a`. Also specifies configuration `test`, but leaves
  the default task axis.
- `{file:/home/hp/checkout/hello/}/test:fullClasspath` sets the project
  axis to "entire build" where the build is
  `{file:/home/hp/checkout/hello/}`.
- `{.}/test:fullClasspath` sets the project axis to "entire build" where
  the build is `{.}`. `{.}` can be written `ThisBuild` in Scala code.
- `{file:/home/hp/checkout/hello/}/compile:doc::fullClasspath` sets all
  three scope axes.

### Inspecting scopes

In sbt's interactive mode, you can use the inspect command to understand
keys and their scopes. Try `inspect test:fullClasspath`:

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

On the first line, you can see this is a task (as opposed to a setting,
as explained in [.sbt build definition][Basic-Def]). The value
resulting from the task will have type
`scala.collection.Seq[sbt.Attributed[java.io.File]]`.

"Provided by" points you to the scoped key that defines the value, in
this case
`{file:/home/hp/checkout/hello/}default-aea33a/test:fullClasspath` (which
is the `fullClasspath` key scoped to the `test` configuration and the
`{file:/home/hp/checkout/hello/}default-aea33a` project).

"Dependencies" may not make sense yet; stay tuned for the
[next page][More-About-Settings].

You can also see the delegates; if the value were not defined, sbt would
search through:

- two other configurations (`runtime:fullClasspath`,
  `compile:fullClasspath`). In these scoped keys, the project is
  unspecified meaning "current project" and the task is unspecified
  meaning `Global`
- configuration set to `Global` (`*:fullClasspath`), since project is
  still unspecified it's "current project" and task is still
  unspecified so `Global`
- project set to `{.}` or `ThisBuild` (meaning the entire build, no
  specific project)
- project axis set to `Global` (`*/test:fullClasspath`) (remember, an
  unspecified project means current, so searching `Global` here is new;
  i.e. `*` and "no project shown" are different for the project axis;
  i.e. `*/test:fullClasspath` is not the same as `test:fullClasspath`)
- both project and configuration set to `Global` (`*/*:fullClasspath`)
  (remember that unspecified task means `Global` already, so
  `*/*:fullClasspath` uses `Global` for all three axes)

Try `inspect fullClasspath` (as opposed to the above example,
inspect `test:fullClasspath`) to get a sense of the difference. Because
the configuration is omitted, it is autodetected as `compile`.
`inspect compile:fullClasspath` should therefore look the same as
`inspect fullClasspath`.

Try `inspect *:fullClasspath` for another contrast. `fullClasspath` is not
defined in the `Global` configuration by default.

Again, for more details, see [Interacting with the Configuration System][Inspecting-Settings].

### Referring to scopes in a build definition

If you create a setting in `build.sbt` with a bare key, it will be scoped
to the current project, configuration `Global` and task `Global`:

```scala
name := "hello"
```

Run sbt and `inspect name` to see that it's provided by
`{file:/home/hp/checkout/hello/}default-aea33a/*:name`, that is, the
project is `{file:/home/hp/checkout/hello/}default-aea33a`, the
configuration is `*` (meaning global), and the task is not shown (which
also means global).

<!-- TODO: Fix this. -->

`build.sbt` always defines settings for a single project, so the "current
project" is the project you're defining in that particular `build.sbt`.
(For [multi-project builds][Multi-Project], each project has its own
`build.sbt`.)

Keys have an overloaded method called in used to set the scope. The
argument to in can be an instance of any of the scope axes. So for
example, though there's no real reason to do this, you could set the
`name` scoped to the `Compile` configuration:

```scala
name in Compile := "hello"
```

or you could set the name scoped to the `packageBin` task (pointless! just
an example):

```scala
name in packageBin := "hello"
```

or you could set the `name` with multiple scope axes, for example in the
`packageBin` task in the `Compile` configuration:

```scala
name in (Compile, packageBin) := "hello"
```

or you could use `Global` for all axes:

```scala
name in Global := "hello"
```

(`name in Global` implicitly converts the scope axis `Global` to a scope
with all axes set to `Global`; the task and configuration are already
`Global` by default, so here the effect is to make the project `Global`,
that is, define `*/*:name` rather than
`{file:/home/hp/checkout/hello/}default-aea33a/*:name`)

If you aren't used to Scala, a reminder: it's important to understand
that in and `:=` are just methods, not magic. Scala lets you write them in
a nicer way, but you could also use the Java style:

```scala
name.in(Compile).:=("hello")
```

There's no reason to use this ugly syntax, but it illustrates that these
are in fact methods.

### When to specify a scope

You need to specify the scope if the key in question is normally scoped.
For example, the `compile` task, by default, is scoped to `Compile` and `Test`
configurations, and does not exist outside of those scopes.

To change the value associated with the `compile` key, you need to write
`compile in Compile` or `compile in Test`. Using plain `compile` would define
a new compile task scoped to the current project, rather than overriding
the standard compile tasks which are scoped to a configuration.

If you get an error like *"Reference to undefined setting"*, often
you've failed to specify a scope, or you've specified the wrong scope.
The key you're using may be defined in some other scope. sbt will try to
suggest what you meant as part of the error message; look for "Did you
mean compile:compile?"

One way to think of it is that a name is only *part* of a key. In
reality, all keys consist of both a name, and a scope (where the scope
has three axes). The entire expression
`packageOptions in (Compile, packageBin)` is a key name, in other words.
Simply `packageOptions` is also a key name, but a different one (for keys
with no in, a scope is implicitly assumed: current project, global
config, global task).