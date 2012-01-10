---
layout: default
title: Community Plugin Project
---

The [SBT Organization](http://github.com/sbt) contains a [SBT Community Plugins](http://github.com/sbt/sbt-community-plugins) project.   This project aims to unify all the SBT plugins in the community and ensure their compatibility and timely releases with new versions of SBT.

In addition, [Typesafe, Inc.](http://www.typesafe.com) has provided a freely available [Ivy Repository](http://scalasbt.artifactoryonline.com/scalasbt) for SBT projects to make use of.


If you would like to publish your project to this Ivy repository, first contact Joshua.Suereth@typesafe.com and request privileges (we have to verify code ownership, rights to publish, etc.).  After which, you can deploy your plugins using the following configuration:

    publishTo := Some(Resolver.url("sbt-plugin-releases", new URL("http://scalasbt.artifactoryonline.com/scalasbt/sbt-plugin-releases/"))(Resolver.ivyStylePatterns))
    
    publishMavenStyle := false


