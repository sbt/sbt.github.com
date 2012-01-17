---
layout: default
title: Community Plugins
tagline: ensuring everything is possible.
description: 'The [SBT Organization](http://github.com/sbt) contains a [SBT Community Plugins](http://github.com/sbt/sbt-community-plugins) project.   This project aims to unify all the SBT plugins in the community and ensure their compatibility and timely releases with new versions of SBT.'
toplinks: #Links at the top.
       - name: 'Community Ivy repository'
         id: 'communityrepo'
         content: |
           #### Community Ivy Repository ####           
           [Typesafe, Inc.](http://www.typesafe.com) has provided a freely available [Ivy Repository](http://scalasbt.artifactoryonline.com/scalasbt) for SBT projects to make use of.

           If you would like to publish your project to this Ivy repository, first contact Joshua.Suereth@typesafe.com and request privileges
           (we have to verify code ownership, rights to publish, etc.).  After which, you can deploy your plugins using the following configuration:
           
               publishTo := Some(Resolver.url("sbt-plugin-releases", new URL("http://scalasbt.artifactoryonline.com/scalasbt/sbt-plugin-releases/"))(Resolver.ivyStylePatterns))
               
               publishMavenStyle := false
           
           You'll also need to add your credentials somewhere.  I use a `~/.sbt/sbtpluginpublish.sbt` file:
           
               credentials += Credentials("Artifactory Realm", "scalasbt.artifactoryonline.com", "jsuereth", "@my encrypted password@")
           
           Where `@my encrypted password@` is actually obtained using the following [instructions](http://wiki.jfrog.org/confluence/display/RTF/Centrally+Secure+Passwords).
           
           *Note: You also need to swap `jsuereth` for your own username :)*

       - name: 'SBT Organization'
         id: 'sbtorg'
         content: |
           #### SBT Organization ####
           
           The [SBT Organization](http://github.com/sbt) is available for use by any SBT plugin.  
           Developers who contribute their plugins into the community organization will still retain 
           control over their repository and its access.   The Goal of the SBT organization is to 
           organize SBT software into one central location.
       - name: 'Community Plugin Build'
         id: 'pluginbuild'
         content: |
           #### SBT Community Plugin Build ####
           
           The [SBT Community Plugins](http://github.com/sbt/sbt-community-plugins) project aims to build *all* SBT plugins in a single build.  
           This should enable thorough testing of plugins and ensure that plugins work together.

---


