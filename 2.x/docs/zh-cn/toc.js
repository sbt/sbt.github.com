// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">sbt 之书</a></li><li class="chapter-item expanded "><a href="Setup.html"><strong aria-hidden="true">1.</strong> 安装 sbt runner</a></li><li class="chapter-item expanded "><a href="sbt-by-example.html"><strong aria-hidden="true">2.</strong> sbt 示例教程</a></li><li class="chapter-item expanded "><a href="guide/index.html"><strong aria-hidden="true">3.</strong> sbt 入门</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="guide/why-sbt-exists.html"><strong aria-hidden="true">3.1.</strong> sbt 的存在理由</a></li><li class="chapter-item expanded "><a href="guide/sbt-new.html"><strong aria-hidden="true">3.2.</strong> 创建新的构建</a></li><li class="chapter-item expanded "><a href="guide/sbt-components.html"><strong aria-hidden="true">3.3.</strong> sbt components</a></li><li class="chapter-item expanded "><a href="guide/basic-tasks.html"><strong aria-hidden="true">3.4.</strong> Basic tasks</a></li><li class="chapter-item expanded "><a href="guide/build-definition-basics.html"><strong aria-hidden="true">3.5.</strong> Build definition basics</a></li><li class="chapter-item expanded "><a href="guide/library-dependency-basics.html"><strong aria-hidden="true">3.6.</strong> Library dependency basics</a></li><li class="chapter-item expanded "><a href="guide/multi-project-basics.html"><strong aria-hidden="true">3.7.</strong> Multi project basics</a></li><li class="chapter-item expanded "><a href="guide/plugin-basics.html"><strong aria-hidden="true">3.8.</strong> Plugin basics</a></li><li class="chapter-item expanded "><a href="guide/build-layout.html"><strong aria-hidden="true">3.9.</strong> Build layout</a></li><li class="chapter-item expanded "><a href="guide/IDE.html"><strong aria-hidden="true">3.10.</strong> sbt with IDEs</a></li></ol></li><li class="chapter-item expanded "><a href="changes/index.html"><strong aria-hidden="true">4.</strong> Changes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="changes/sbt-2.0-change-summary.html"><strong aria-hidden="true">4.1.</strong> sbt 2.0 changes</a></li><li class="chapter-item expanded "><a href="changes/migrating-from-sbt-1.x.html"><strong aria-hidden="true">4.2.</strong> Migrating from sbt 1.x</a></li></ol></li><li class="chapter-item expanded "><a href="concepts/index.html"><strong aria-hidden="true">5.</strong> Concepts</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="concepts/command.html"><strong aria-hidden="true">5.1.</strong> Command</a></li><li class="chapter-item expanded "><a href="concepts/cross-building.html"><strong aria-hidden="true">5.2.</strong> Cross building</a></li><li class="chapter-item expanded "><a href="concepts/sbt-query.html"><strong aria-hidden="true">5.3.</strong> sbt query</a></li><li class="chapter-item expanded "><a href="concepts/caching.html"><strong aria-hidden="true">5.4.</strong> Caching</a></li></ol></li><li class="chapter-item expanded "><a href="reference/index.html"><strong aria-hidden="true">6.</strong> Reference</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/sbt.html"><strong aria-hidden="true">6.1.</strong> sbt</a></li><li class="chapter-item expanded "><a href="reference/sbt-update.html"><strong aria-hidden="true">6.2.</strong> sbt update</a></li><li class="chapter-item expanded "><a href="reference/sbt-dependency-tree.html"><strong aria-hidden="true">6.3.</strong> sbt dependencyTree</a></li><li class="chapter-item expanded "><a href="reference/sbt-compile.html"><strong aria-hidden="true">6.4.</strong> sbt 示例教程</a></li><li class="chapter-item expanded "><a href="reference/sbt-run.html"><strong aria-hidden="true">6.5.</strong> sbt run</a></li><li class="chapter-item expanded "><a href="reference/sbt-test.html"><strong aria-hidden="true">6.6.</strong> sbt test</a></li><li class="chapter-item expanded "><a href="reference/sbt-inspect.html"><strong aria-hidden="true">6.7.</strong> sbt inspect</a></li><li class="chapter-item expanded "><a href="reference/sbt-publish.html"><strong aria-hidden="true">6.8.</strong> sbt publish</a></li><li class="chapter-item expanded "><a href="reference/watch.html"><strong aria-hidden="true">6.9.</strong> Watch command</a></li><li class="chapter-item expanded "><a href="reference/cached-task.html"><strong aria-hidden="true">6.10.</strong> Cached task</a></li><li class="chapter-item expanded "><a href="reference/cross-building-setup.html"><strong aria-hidden="true">6.11.</strong> Cross building setup</a></li><li class="chapter-item expanded "><a href="reference/remote-cache-setup.html"><strong aria-hidden="true">6.12.</strong> Remote cache setup</a></li><li class="chapter-item expanded "><a href="reference/artifact.html"><strong aria-hidden="true">6.13.</strong> Artifact</a></li><li class="chapter-item expanded "><a href="reference/input-task.html"><strong aria-hidden="true">6.14.</strong> Input task</a></li><li class="chapter-item expanded "><a href="reference/tab-completion-parser.html"><strong aria-hidden="true">6.15.</strong> Tab-completion parser</a></li></ol></li><li class="chapter-item expanded "><a href="community-plugins.html"><strong aria-hidden="true">7.</strong> Community plugins</a></li><li class="chapter-item expanded "><a href="recipes/index.html"><strong aria-hidden="true">8.</strong> Recipes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="recipes/hello-world.html"><strong aria-hidden="true">8.1.</strong> Write hello world</a></li><li class="chapter-item expanded "><a href="recipes/central.html"><strong aria-hidden="true">8.2.</strong> Publishing to the Central Repo</a></li><li class="chapter-item expanded "><a href="recipes/use-sbt-as-metals-build-server.html"><strong aria-hidden="true">8.3.</strong> Use sbt as Metals build server</a></li><li class="chapter-item expanded "><a href="recipes/import-to-intellij.html"><strong aria-hidden="true">8.4.</strong> Import to IntelliJ IDEA</a></li><li class="chapter-item expanded "><a href="recipes/source-dependency-plugin.html"><strong aria-hidden="true">8.5.</strong> Source dependency plugin</a></li></ol></li><li class="chapter-item expanded "><a href="appendix/glossary.html"><strong aria-hidden="true">9.</strong> Appendix: Glossary</a></li><li class="chapter-item expanded "><a href="appendix/setup-notes.html"><strong aria-hidden="true">10.</strong> Appendix: Setup notes</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
