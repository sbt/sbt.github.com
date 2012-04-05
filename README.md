# scala-sbt.org

---

## About

The project contains the sources used to generate  [http://www.scala-sbt.org/](http://www.scala-sbt.org/ "http://www.scala-sbt.org/").

## Requirements

You need to have `jekyll` and `Pygments` installed. Luckily, that's quite easy:
`gem install jekyll rdiscount --no-ri --no-rdoc && sudo easy_install Pygments`
If that doesn't work, check out the [installation instructions](https://github.com/mojombo/jekyll/wiki/Install "installation instructions").

## Usage
 
You can find the sources in the src/jekyll folder.

To generate the site, simply start an SBT shell and type:

    > make-site
    > ghpages-push-site

When you fire up `sbt`, you _may_ see an error like this:

    [error] AttributeKey ID collisions detected for: 'pgp-signer' (sbt.Task[com.jsuereth.pgp.sbtplugin.PgpSigner], sbt.Task[com.jsuereth.pgp.sbtplugin.PgpSigner]), 'pgp-verifier' (sbt.Task[com.jsuereth.pgp.sbtplugin.PgpVerifier], sbt.Task[com.jsuereth.pgp.sbtplugin.PgpVerifier]), 'pgp-context' (sbt.Task[com.jsuereth.pgp.cli.PgpCommandContext], sbt.Task[com.jsuereth.pgp.cli.PgpCommandContext]), 'check-pgp-signatures' (sbt.Task[com.jsuereth.pgp.sbtplugin.SignatureCheckReport], sbt.Task[com.jsuereth.pgp.sbtplugin.SignatureCheckReport]), 'pgp-static-context' (com.jsuereth.pgp.cli.PgpStaticContext, com.jsuereth.pgp.cli.PgpStaticContext), 'signatures-module' (sbt.Task[com.jsuereth.pgp.sbtplugin.GetSignaturesModule], sbt.Task[com.jsuereth.pgp.sbtplugin.GetSignaturesModule])

If that happens, you probably have a global SBT setting or plugin that
conflicts with the expectations of this repo's `build.sbt`. In that case, just
fire up SBT so that it skips your `~/.sbt` directory. e.g.:

    $ sbt -Dsbt.global.base=/tmp

To preview the site, start jekyll and browse to [localhost:4000](http://localhost:4000):

    $ jekyll src/jekyll/ target/jekyll/ --server
