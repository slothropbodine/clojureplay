(ns hello-browser.core
   (:require [clojure.browser.repl :as repl]))

  (.write js/document "<h1>Hello Bser</h1>")
  (repl/connect "http://localhost:9000/repl")
