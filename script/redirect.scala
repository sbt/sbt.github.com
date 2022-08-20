#!/usr/bin/env sbt -Dsbt.version=1.6.1 -Dsbt.main.class=sbt.ScriptMain -error

/***
ThisBuild / scalaVersion := "2.13.8"
libraryDependencies += "org.scala-sbt" %% "io" % "1.6.0"
*/

import sbt.io.IO
import sbt.io.Path._
import sbt.io.syntax._
import java.io.File
import java.net.URI
import sys.process._

def file(s: String): File = new File(s)
def uri(s: String): URI = new URI(s)

def processFile(f: File): Unit = {
  val fileName = f.getName
  val lines = s"""<!DOCTYPE html SYSTEM "about:legacy-compat">
<html>
  <head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta http-equiv="refresh" content="0;url=../../1.x/docs/$fileName"></meta>
    <title>This page has moved</title>
  </head>
  <body>
    <p>This page has moved to <a href="../../1.x/docs/$fileName">../../1.x/docs/$fileName</a>.</p>
  </body>
</html>""".linesIterator.toList
  IO.writeLines(file("release") / "docs" / fileName, lines)
}
args.toList match {
  case Nil => sys.error("usage: ./redirect.scala <file>...")
  case xs  => xs foreach { x => processFile(file(x)) }
}
