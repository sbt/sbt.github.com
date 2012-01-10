organization := "com.github.sbt"

name := "sbt-site"

version := "0.1.0-SNAPSHOT"

seq(ghpages.settings:_*)

git.remoteRepo := "git@github.com:sbt/sbt.github.com.git"

(com.jsuereth.git.GitKeys.gitBranch) := Some("master")

seq(com.jsuereth.sbtsite.SitePlugin.site.settings:_*)

(com.jsuereth.sbtsite.SiteKeys.siteSourceDirectory) <<= baseDirectory(_ / "static")

com.jsuereth.sbtsite.SiteKeys.siteMappings <<= (com.jsuereth.sbtsite.SiteKeys.siteMappings, baseDirectory, target, streams) map { (mappings, dir, out, s) => 
  val jekyllSrc = dir / "src" / "jekyll"
  val jekyllOutput = out / "jekyll"
  // Run Jekyll
  sbt.Process(Seq("jekyll", jekyllOutput.getAbsolutePath), Some(jekyllSrc)).!;
  // Figure out what was generated.
  mappings ++ (jekyllOutput ** ("*.html" | "*.png" | "*.js" | "*.css" | "CNAME") x relativeTo(jekyllOutput))
}


