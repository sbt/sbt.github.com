# scala-sbt.org

---

## About

The project contains the sources used to generate  [http://www.scala-sbt.org/](http://www.scala-sbt.org/ "http://www.scala-sbt.org/").

## Requirements

You need to have `jekyll` installed. Luckily, that's quite easy: `gem install jekyll`. If that doesn't work, check out the [installation instructions](https://github.com/mojombo/jekyll/wiki/Install "installation instructions").

## Usage
 
You can find the sources in the src/jekyll folder.

To generate the site, simply start an SBT shell and type:

    > make-site
    > ghpages-push-site
