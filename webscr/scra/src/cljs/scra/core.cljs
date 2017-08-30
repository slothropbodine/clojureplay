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

(defn getarr [cheerobj]
  (let [length (aget cheerobj "length")]
    (loop [x 0
           goodarr []]
      (if (= x length)
        (identity goodarr)
        (recur (inc x)
               (conj goodarr
                     (.text (js/cheerio (aget cheerobj x)))))))))

(go (let [resp (<! (http/get "http://reddit.com"))]
      (let [dom (domfrom (:body resp))]
        (println
          (get (getarr (dom selector))
               0)))))
