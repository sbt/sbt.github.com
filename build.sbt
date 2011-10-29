organization := "com.github.sbt"

name := "sbt-site"

version := "0.1.0-SNAPSHOT"

seq(ghpages.settings:_*)

git.remoteRepo := "git@github.com:sbt/sbt.github.com.git"

(com.jsuereth.git.GitKeys.gitBranch) := Some("master")

seq(site.settings:_*)

(com.jsuereth.sbtsite.SiteKeys.siteSourceDirectory) <<= baseDirectory(_ / "static")
