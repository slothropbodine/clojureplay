(ns scra.core
  (:require [cljs.nodejs :as nodejs]
  			[cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def nodemodulesloc "/resources/public/js/node_modules/")
(defn fullpath [modname]
  (str (.cwd nodejs/process) nodemodulesloc modname))

(set! js/XMLHttpRequest (nodejs/require (fullpath "xhr2")))
(set! js/cheerio (nodejs/require (fullpath "cheerio")))

;;(set! js/XMLHttpRequest (nodejs/require "xhr2"))
;;(set! js/cheerio (nodejs/require "cheerio"))

(nodejs/enable-util-print!)

(def selector "div.entry.unvoted > div.top-matter > p.title > a")

(defn domfrom [bodystring]
  (.load js/cheerio bodystring))

(println "Goodbye marky")

(defn getntext [n cheerobj]
  (println cheerobj))
  ;;(println (.text (js/cheerio (aget cheerobj n)))))

(defn getarr [cheerobj]
  (let [length (aget cheerobj "length")]
    (loop [x 0
           goodarr []]
      (if (= x length)
        (identity goodarr)
        (recur (inc x) (conj goodarr (.text (js/cheerio (aget cheerobj x)))))))))

(go                                                  
  (let [resp (<! (http/get "http://reddit.com"))]   
    (let [dom (domfrom (:body resp))]
      (println (get (getarr (dom selector))5)))))

(println "Goodbye marky")
;;(.text (js/cheerio (aget (thisshit selector)1)))
