// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__7961__auto__ = v;
if(cljs.core.truth_(and__7961__auto__)){
return (v > (0));
} else {
return and__7961__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__15310_SHARP_,p2__15309_SHARP_){
var vec__15311 = clojure.string.split.call(null,p2__15309_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__15311,(0),null);
var v = cljs.core.nth.call(null,vec__15311,(1),null);
return cljs.core.assoc.call(null,p1__15310_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__15314_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__15314_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__15315){
var vec__15316 = p__15315;
var k = cljs.core.nth.call(null,vec__15316,(0),null);
var v = cljs.core.nth.call(null,vec__15316,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__15319_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15319_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__7961__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__7961__auto__){
var and__7961__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__7961__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7961__auto____$1;
}
} else {
return and__7961__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__15320_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15320_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15327 = arguments.length;
var i__9143__auto___15328 = (0);
while(true){
if((i__9143__auto___15328 < len__9142__auto___15327)){
args__9149__auto__.push((arguments[i__9143__auto___15328]));

var G__15329 = (i__9143__auto___15328 + (1));
i__9143__auto___15328 = G__15329;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15323){
var vec__15324 = p__15323;
var default_headers = cljs.core.nth.call(null,vec__15324,(0),null);
return ((function (vec__15324,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__7973__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__15324,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq15321){
var G__15322 = cljs.core.first.call(null,seq15321);
var seq15321__$1 = cljs.core.next.call(null,seq15321);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__15322,seq15321__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15336 = arguments.length;
var i__9143__auto___15337 = (0);
while(true){
if((i__9143__auto___15337 < len__9142__auto___15336)){
args__9149__auto__.push((arguments[i__9143__auto___15337]));

var G__15338 = (i__9143__auto___15337 + (1));
i__9143__auto___15337 = G__15338;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15332){
var vec__15333 = p__15332;
var accept = cljs.core.nth.call(null,vec__15333,(0),null);
return ((function (vec__15333,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__7973__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__15333,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq15330){
var G__15331 = cljs.core.first.call(null,seq15330);
var seq15330__$1 = cljs.core.next.call(null,seq15330);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__15331,seq15330__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15345 = arguments.length;
var i__9143__auto___15346 = (0);
while(true){
if((i__9143__auto___15346 < len__9142__auto___15345)){
args__9149__auto__.push((arguments[i__9143__auto___15346]));

var G__15347 = (i__9143__auto___15346 + (1));
i__9143__auto___15346 = G__15347;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15341){
var vec__15342 = p__15341;
var content_type = cljs.core.nth.call(null,vec__15342,(0),null);
return ((function (vec__15342,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__7973__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__15342,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq15339){
var G__15340 = cljs.core.first.call(null,seq15339);
var seq15339__$1 = cljs.core.next.call(null,seq15339);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__15340,seq15339__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__15348 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__15348__$1 = ((((!((map__15348 == null)))?((((map__15348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15348):map__15348);
var encoding = cljs.core.get.call(null,map__15348__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__15348__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__15352 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__15352__$1 = ((((!((map__15352 == null)))?((((map__15352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15352):map__15352);
var decoding = cljs.core.get.call(null,map__15352__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__15352__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__15352,map__15352__$1,decoding,decoding_opts){
return (function (p1__15350_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__15350_SHARP_,decoding,decoding_opts);
});})(map__15352,map__15352__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__15352,map__15352__$1,decoding,decoding_opts,transit_decode){
return (function (p1__15351_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15351_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__15352,map__15352__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__15354_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15354_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__15355){
var map__15356 = p__15355;
var map__15356__$1 = ((((!((map__15356 == null)))?((((map__15356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15356):map__15356);
var req = map__15356__$1;
var query_params = cljs.core.get.call(null,map__15356__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__15358){
var map__15359 = p__15358;
var map__15359__$1 = ((((!((map__15359 == null)))?((((map__15359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15359):map__15359);
var request = map__15359__$1;
var form_params = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__7961__auto__ = form_params;
if(cljs.core.truth_(and__7961__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__7961__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__15361_15371 = cljs.core.seq.call(null,params);
var chunk__15362_15372 = null;
var count__15363_15373 = (0);
var i__15364_15374 = (0);
while(true){
if((i__15364_15374 < count__15363_15373)){
var vec__15365_15375 = cljs.core._nth.call(null,chunk__15362_15372,i__15364_15374);
var k_15376 = cljs.core.nth.call(null,vec__15365_15375,(0),null);
var v_15377 = cljs.core.nth.call(null,vec__15365_15375,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_15377)){
form_data.append(cljs.core.name.call(null,k_15376),cljs.core.first.call(null,v_15377),cljs.core.second.call(null,v_15377));
} else {
form_data.append(cljs.core.name.call(null,k_15376),v_15377);
}

var G__15378 = seq__15361_15371;
var G__15379 = chunk__15362_15372;
var G__15380 = count__15363_15373;
var G__15381 = (i__15364_15374 + (1));
seq__15361_15371 = G__15378;
chunk__15362_15372 = G__15379;
count__15363_15373 = G__15380;
i__15364_15374 = G__15381;
continue;
} else {
var temp__4657__auto___15382 = cljs.core.seq.call(null,seq__15361_15371);
if(temp__4657__auto___15382){
var seq__15361_15383__$1 = temp__4657__auto___15382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15361_15383__$1)){
var c__8812__auto___15384 = cljs.core.chunk_first.call(null,seq__15361_15383__$1);
var G__15385 = cljs.core.chunk_rest.call(null,seq__15361_15383__$1);
var G__15386 = c__8812__auto___15384;
var G__15387 = cljs.core.count.call(null,c__8812__auto___15384);
var G__15388 = (0);
seq__15361_15371 = G__15385;
chunk__15362_15372 = G__15386;
count__15363_15373 = G__15387;
i__15364_15374 = G__15388;
continue;
} else {
var vec__15368_15389 = cljs.core.first.call(null,seq__15361_15383__$1);
var k_15390 = cljs.core.nth.call(null,vec__15368_15389,(0),null);
var v_15391 = cljs.core.nth.call(null,vec__15368_15389,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_15391)){
form_data.append(cljs.core.name.call(null,k_15390),cljs.core.first.call(null,v_15391),cljs.core.second.call(null,v_15391));
} else {
form_data.append(cljs.core.name.call(null,k_15390),v_15391);
}

var G__15392 = cljs.core.next.call(null,seq__15361_15383__$1);
var G__15393 = null;
var G__15394 = (0);
var G__15395 = (0);
seq__15361_15371 = G__15392;
chunk__15362_15372 = G__15393;
count__15363_15373 = G__15394;
i__15364_15374 = G__15395;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__15396){
var map__15397 = p__15396;
var map__15397__$1 = ((((!((map__15397 == null)))?((((map__15397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15397):map__15397);
var request = map__15397__$1;
var multipart_params = cljs.core.get.call(null,map__15397__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__15397__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__7961__auto__ = multipart_params;
if(cljs.core.truth_(and__7961__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__7961__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__15399_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__15399_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__15401){
var map__15402 = p__15401;
var map__15402__$1 = ((((!((map__15402 == null)))?((((map__15402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15402):map__15402);
var req = map__15402__$1;
var query_params = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__15402,map__15402__$1,req,query_params){
return (function (p1__15400_SHARP_){
return cljs.core.merge.call(null,p1__15400_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__15402,map__15402__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15410 = arguments.length;
var i__9143__auto___15411 = (0);
while(true){
if((i__9143__auto___15411 < len__9142__auto___15410)){
args__9149__auto__.push((arguments[i__9143__auto___15411]));

var G__15412 = (i__9143__auto___15411 + (1));
i__9143__auto___15411 = G__15412;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15406){
var vec__15407 = p__15406;
var credentials = cljs.core.nth.call(null,vec__15407,(0),null);
return ((function (vec__15407,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7973__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__15407,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq15404){
var G__15405 = cljs.core.first.call(null,seq15404);
var seq15404__$1 = cljs.core.next.call(null,seq15404);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__15405,seq15404__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15419 = arguments.length;
var i__9143__auto___15420 = (0);
while(true){
if((i__9143__auto___15420 < len__9142__auto___15419)){
args__9149__auto__.push((arguments[i__9143__auto___15420]));

var G__15421 = (i__9143__auto___15420 + (1));
i__9143__auto___15420 = G__15421;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15415){
var vec__15416 = p__15415;
var req = cljs.core.nth.call(null,vec__15416,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq15413){
var G__15414 = cljs.core.first.call(null,seq15413);
var seq15413__$1 = cljs.core.next.call(null,seq15413);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__15414,seq15413__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15428 = arguments.length;
var i__9143__auto___15429 = (0);
while(true){
if((i__9143__auto___15429 < len__9142__auto___15428)){
args__9149__auto__.push((arguments[i__9143__auto___15429]));

var G__15430 = (i__9143__auto___15429 + (1));
i__9143__auto___15429 = G__15430;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15424){
var vec__15425 = p__15424;
var req = cljs.core.nth.call(null,vec__15425,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq15422){
var G__15423 = cljs.core.first.call(null,seq15422);
var seq15422__$1 = cljs.core.next.call(null,seq15422);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__15423,seq15422__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15437 = arguments.length;
var i__9143__auto___15438 = (0);
while(true){
if((i__9143__auto___15438 < len__9142__auto___15437)){
args__9149__auto__.push((arguments[i__9143__auto___15438]));

var G__15439 = (i__9143__auto___15438 + (1));
i__9143__auto___15438 = G__15439;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15433){
var vec__15434 = p__15433;
var req = cljs.core.nth.call(null,vec__15434,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq15431){
var G__15432 = cljs.core.first.call(null,seq15431);
var seq15431__$1 = cljs.core.next.call(null,seq15431);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__15432,seq15431__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15446 = arguments.length;
var i__9143__auto___15447 = (0);
while(true){
if((i__9143__auto___15447 < len__9142__auto___15446)){
args__9149__auto__.push((arguments[i__9143__auto___15447]));

var G__15448 = (i__9143__auto___15447 + (1));
i__9143__auto___15447 = G__15448;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15442){
var vec__15443 = p__15442;
var req = cljs.core.nth.call(null,vec__15443,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq15440){
var G__15441 = cljs.core.first.call(null,seq15440);
var seq15440__$1 = cljs.core.next.call(null,seq15440);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__15441,seq15440__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15455 = arguments.length;
var i__9143__auto___15456 = (0);
while(true){
if((i__9143__auto___15456 < len__9142__auto___15455)){
args__9149__auto__.push((arguments[i__9143__auto___15456]));

var G__15457 = (i__9143__auto___15456 + (1));
i__9143__auto___15456 = G__15457;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15451){
var vec__15452 = p__15451;
var req = cljs.core.nth.call(null,vec__15452,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq15449){
var G__15450 = cljs.core.first.call(null,seq15449);
var seq15449__$1 = cljs.core.next.call(null,seq15449);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__15450,seq15449__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15464 = arguments.length;
var i__9143__auto___15465 = (0);
while(true){
if((i__9143__auto___15465 < len__9142__auto___15464)){
args__9149__auto__.push((arguments[i__9143__auto___15465]));

var G__15466 = (i__9143__auto___15465 + (1));
i__9143__auto___15465 = G__15466;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15460){
var vec__15461 = p__15460;
var req = cljs.core.nth.call(null,vec__15461,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq15458){
var G__15459 = cljs.core.first.call(null,seq15458);
var seq15458__$1 = cljs.core.next.call(null,seq15458);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__15459,seq15458__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15473 = arguments.length;
var i__9143__auto___15474 = (0);
while(true){
if((i__9143__auto___15474 < len__9142__auto___15473)){
args__9149__auto__.push((arguments[i__9143__auto___15474]));

var G__15475 = (i__9143__auto___15474 + (1));
i__9143__auto___15474 = G__15475;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15469){
var vec__15470 = p__15469;
var req = cljs.core.nth.call(null,vec__15470,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq15467){
var G__15468 = cljs.core.first.call(null,seq15467);
var seq15467__$1 = cljs.core.next.call(null,seq15467);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__15468,seq15467__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15482 = arguments.length;
var i__9143__auto___15483 = (0);
while(true){
if((i__9143__auto___15483 < len__9142__auto___15482)){
args__9149__auto__.push((arguments[i__9143__auto___15483]));

var G__15484 = (i__9143__auto___15483 + (1));
i__9143__auto___15483 = G__15484;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15478){
var vec__15479 = p__15478;
var req = cljs.core.nth.call(null,vec__15479,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq15476){
var G__15477 = cljs.core.first.call(null,seq15476);
var seq15476__$1 = cljs.core.next.call(null,seq15476);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__15477,seq15476__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__9149__auto__ = [];
var len__9142__auto___15491 = arguments.length;
var i__9143__auto___15492 = (0);
while(true){
if((i__9143__auto___15492 < len__9142__auto___15491)){
args__9149__auto__.push((arguments[i__9143__auto___15492]));

var G__15493 = (i__9143__auto___15492 + (1));
i__9143__auto___15492 = G__15493;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15487){
var vec__15488 = p__15487;
var req = cljs.core.nth.call(null,vec__15488,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq15485){
var G__15486 = cljs.core.first.call(null,seq15485);
var seq15485__$1 = cljs.core.next.call(null,seq15485);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__15486,seq15485__$1);
});


//# sourceMappingURL=client.js.map
