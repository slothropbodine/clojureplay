(defproject cljsbuild-example-simple "1.1.7"
  :description "A simple example of how to use lein-cljsbuild"
  :source-paths ["src"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 [binaryage/devtools "0.9.4"]]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {
    :builds [{:source-paths ["src/cljs"]
              :compiler {:output-to "resources/public/js/main.js"
                         :optimizations :whitespace
                         :pretty-print true}}]})
