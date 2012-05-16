organization := "com.github.sbt"

name := "sbt-site"

version := "0.1.0-SNAPSHOT"

ghpages.settings

git.remoteRepo := "git@github.com:sbt/sbt.github.com.git"

(com.jsuereth.git.GitKeys.gitBranch) := Some("master")

site.settings

(com.jsuereth.sbtsite.SiteKeys.siteSourceDirectory) <<= baseDirectory(_ / "static")

com.jsuereth.sbtsite.SiteKeys.siteMappings <++= (baseDirectory, streams) map { (dir, s) => 
  Seq(
    (dir / "src" / "site" / "README.md") -> "README.md",
    (dir / "src" / "site" / ".nojekyll") -> ".nojekyll"
  )
}

site.jekyllSupport()

com.jsuereth.sbtsite.JekyllSupport.RequiredGems := Map(
  "jekyll" -> "0.11.2",
  "liquid" -> "2.3.0"
)

includeFilter in com.jsuereth.sbtsite.JekyllSupport.Jekyll  := ("*.html" | "*.png" | "*.js" | "*.css" | "CNAME")
