organization := "com.github.sbt"

name := "sbt-site"

version := "0.1.0-SNAPSHOT"

seq(ghpages.settings:_*)

git.remoteRepo := "git@github.com:sbt/sbt.github.com.git"

(com.jsuereth.git.GitKeys.gitBranch) := Some("master")

seq(com.jsuereth.sbtsite.SitePlugin.site.settings:_*)

(com.jsuereth.sbtsite.SiteKeys.siteSourceDirectory) <<= baseDirectory(_ / "static")

com.jsuereth.sbtsite.SiteKeys.siteMappings <+= (baseDirectory, streams) map { (dir, s) => 
  (dir / "src" / "site" / "README.md") -> "README.md"
}

com.jsuereth.sbtsite.SiteKeys.siteMappings <<= (com.jsuereth.sbtsite.SiteKeys.siteMappings, baseDirectory, target, streams) map { (mappings, dir, out, s) =>
  def checkVersion(gem: String, version: String) = {
    val installed = Seq("gem", "list", "--local", gem).!!
    """\((.+)\)""".r.findFirstMatchIn(installed) match {
      case None => error(gem + " not installed.")
      case Some(m) =>
        val v = m.group(1)
        if(v contains version) () else error("%s %s required, but %s was found.".format(gem, version, v))
    }
  }
  checkVersion("jekyll", "0.11.2")
  checkVersion("liquid", "2.3.0")
  try { Seq("pygmentize", "-V").!! } catch { case e:java.io.IOException => error("Pygments required but not installed") }
  val jekyllSrc = dir / "src" / "jekyll"
  val jekyllOutput = out / "jekyll"
  // Run Jekyll
  sbt.Process(Seq("jekyll", jekyllOutput.getAbsolutePath), Some(jekyllSrc)).!;
  // Figure out what was generated.
  mappings ++ (jekyllOutput ** ("*.html" | "*.png" | "*.js" | "*.css" | "CNAME") x relativeTo(jekyllOutput))
}


