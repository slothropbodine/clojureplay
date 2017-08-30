(defproject scra "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async "0.3.443"]
                 [cljs-http "0.1.43"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [org.bodil/lein-noderepl "0.1.11"]]
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src/cljs"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :target :nodejs
          :main "scra.core"
          :output-to "resources/public/js/main.js"
          :output-dir "resources/public/js/out"
          :optimizations :advanced
          :pretty-print true}}]})
