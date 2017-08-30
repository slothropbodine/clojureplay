(ns scra.core
  (:require [cljs.nodejs :as nodejs]
  			    [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(set! js/XMLHttpRequest (nodejs/require "xhr2"))
(set! js/cheerio (nodejs/require "cheerio"))

(nodejs/enable-util-print!)

(def selector "div.entry.unvoted > div.top-matter > p.title > a")

(defn domfrom [bodystring]
  (.load js/cheerio bodystring))

(defn getvec [cheerobj]
  "Return vector of text values for dom nodes"
  (let [length (aget cheerobj "length")]
    (into [] (map (fn [x] 
                    (.text (js/cheerio (aget cheerobj x))))
                  (range length)))))

(go (let [resp (<! (http/get "http://reddit.com")) 
          dom (domfrom (:body resp))]
      (doseq [x (getvec 
                  (dom selector))]
        (println (apply str (repeat 79 "-")))
        (println x))
      (println (apply str (repeat 79 "-")))))
