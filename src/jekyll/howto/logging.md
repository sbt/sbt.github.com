---
layout: howto
title: Configure and use logging
sections:
 - id: last
   name: view the logging output of the previously executed command
   command: last
 - id: tasklast
   name: view the previous logging output of a specific task
   command: last compile
 - id: lastgrep
   name: search the logging output of the previously executed command
   command: last-grep *Test.jar
 - id: tasklastgrep
   name: search the previous logging output of a specific task
   command: last-grep *Test.jar run
 - id: level
   name: change the logging level globally
   command: set every logLevel := Level.Debug
 - id: tasklevel
   name: change the logging level for a specific task, configuration, or project
   setting: logLevel in compile := Level.Debug
 - id: trace
   name: configure printing of stack traces globally
   command: set every traceLevel := 5`
 - id: tasktrace
   name: configure printing of stack traces for a specific task, configuration, or project
   setting: traceLevel := 5
 - id: nobuffer
   name: print the output of tests immediately instead of buffering
   setting: logBuffered := false
 - id: custom
   name: add a custom logger
 - id: log
   name: log messages from a task
---

<h4 id="last">View logging output of the previously executed command</h4>

When a command is run, more detailed logging output is sent to a file than to the screen (by default).
This output can be recalled for the command just executed by running `last`.

For example, the output of `run` when the sources are uptodate is:

{% highlight console %}
> run
[info] Running A 
Hi!
[success] Total time: 0 s, completed Feb 25, 2012 1:00:00 PM
{% endhighlight %}

The details of this execution can be recalled by running `last`:

{% highlight console %}
> last
[debug] Running task... Cancelable: false, max worker threads: 4, check cycles: false
[debug] 
[debug] Initial source changes: 
[debug] 	removed:Set()
[debug] 	added: Set()
[debug] 	modified: Set()
[debug] Removed products: Set()
[debug] Modified external sources: Set()
[debug] Modified binary dependencies: Set()
[debug] Initial directly invalidated sources: Set()
[debug] 
[debug] Sources indirectly invalidated by:
[debug] 	product: Set()
[debug] 	binary dep: Set()
[debug] 	external source: Set()
[debug] Initially invalidated: Set()
[debug] Copy resource mappings: 
[debug] 	
[info] Running A 
[debug] Starting sandboxed run...
[debug] Waiting for threads to exit or System.exit to be called.
[debug]   Classpath:
[debug] 	/tmp/e/target/scala-2.9.1/classes
[debug] 	/tmp/e/.sbt/0.12.0/boot/scala-2.9.1/lib/scala-library.jar
[debug] Waiting for thread run-main to exit
[debug] 	Thread run-main exited.
[debug] Interrupting remaining threads (should be all daemons).
[debug] Sandboxed run complete..
[debug] Exited with code 0
[success] Total time: 0 s, completed Jan 1, 2012 1:00:00 PM
{% endhighlight %}

Configuration of the logging level for the console and for the backing file are described in following sections.

<h4 id="tasklast">View the logging output of a specific task</h4>

<h4 id="lastgrep">Search the logging output of the previously executed command</h4>

<h4 id="tasklastgrep">Search the logging output of a specific task</h4>

<h4 id="level">Change the logging level globally</h4>

<h4 id="tasklevel">Change the logging level for a specific task, configuration, or project</h4>

<h4 id="trace">Configure printing of stack traces globally</h4>

<h4 id="tasktrace">Configure printing of stack traces for a specific task, configuration, or project</h4>

<h4 id="nobuffer">Print the output of tests immediately instead of buffering</h4>

<h4 id="custom">Add a custom logger</h4>

<h4 id="log">Log messages in a task</h4>


