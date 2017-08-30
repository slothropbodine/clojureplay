// Compiled by ClojureScript 1.9.521 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13425){
var map__13450 = p__13425;
var map__13450__$1 = ((((!((map__13450 == null)))?((((map__13450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13450):map__13450);
var m = map__13450__$1;
var n = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13452_13474 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13453_13475 = null;
var count__13454_13476 = (0);
var i__13455_13477 = (0);
while(true){
if((i__13455_13477 < count__13454_13476)){
var f_13478 = cljs.core._nth.call(null,chunk__13453_13475,i__13455_13477);
cljs.core.println.call(null,"  ",f_13478);

var G__13479 = seq__13452_13474;
var G__13480 = chunk__13453_13475;
var G__13481 = count__13454_13476;
var G__13482 = (i__13455_13477 + (1));
seq__13452_13474 = G__13479;
chunk__13453_13475 = G__13480;
count__13454_13476 = G__13481;
i__13455_13477 = G__13482;
continue;
} else {
var temp__4657__auto___13483 = cljs.core.seq.call(null,seq__13452_13474);
if(temp__4657__auto___13483){
var seq__13452_13484__$1 = temp__4657__auto___13483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13452_13484__$1)){
var c__9256__auto___13485 = cljs.core.chunk_first.call(null,seq__13452_13484__$1);
var G__13486 = cljs.core.chunk_rest.call(null,seq__13452_13484__$1);
var G__13487 = c__9256__auto___13485;
var G__13488 = cljs.core.count.call(null,c__9256__auto___13485);
var G__13489 = (0);
seq__13452_13474 = G__13486;
chunk__13453_13475 = G__13487;
count__13454_13476 = G__13488;
i__13455_13477 = G__13489;
continue;
} else {
var f_13490 = cljs.core.first.call(null,seq__13452_13484__$1);
cljs.core.println.call(null,"  ",f_13490);

var G__13491 = cljs.core.next.call(null,seq__13452_13484__$1);
var G__13492 = null;
var G__13493 = (0);
var G__13494 = (0);
seq__13452_13474 = G__13491;
chunk__13453_13475 = G__13492;
count__13454_13476 = G__13493;
i__13455_13477 = G__13494;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13495 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8437__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8437__auto__)){
return or__8437__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13495);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13495)))?cljs.core.second.call(null,arglists_13495):arglists_13495));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13456_13496 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13457_13497 = null;
var count__13458_13498 = (0);
var i__13459_13499 = (0);
while(true){
if((i__13459_13499 < count__13458_13498)){
var vec__13460_13500 = cljs.core._nth.call(null,chunk__13457_13497,i__13459_13499);
var name_13501 = cljs.core.nth.call(null,vec__13460_13500,(0),null);
var map__13463_13502 = cljs.core.nth.call(null,vec__13460_13500,(1),null);
var map__13463_13503__$1 = ((((!((map__13463_13502 == null)))?((((map__13463_13502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13463_13502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13463_13502):map__13463_13502);
var doc_13504 = cljs.core.get.call(null,map__13463_13503__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13505 = cljs.core.get.call(null,map__13463_13503__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13501);

cljs.core.println.call(null," ",arglists_13505);

if(cljs.core.truth_(doc_13504)){
cljs.core.println.call(null," ",doc_13504);
} else {
}

var G__13506 = seq__13456_13496;
var G__13507 = chunk__13457_13497;
var G__13508 = count__13458_13498;
var G__13509 = (i__13459_13499 + (1));
seq__13456_13496 = G__13506;
chunk__13457_13497 = G__13507;
count__13458_13498 = G__13508;
i__13459_13499 = G__13509;
continue;
} else {
var temp__4657__auto___13510 = cljs.core.seq.call(null,seq__13456_13496);
if(temp__4657__auto___13510){
var seq__13456_13511__$1 = temp__4657__auto___13510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13456_13511__$1)){
var c__9256__auto___13512 = cljs.core.chunk_first.call(null,seq__13456_13511__$1);
var G__13513 = cljs.core.chunk_rest.call(null,seq__13456_13511__$1);
var G__13514 = c__9256__auto___13512;
var G__13515 = cljs.core.count.call(null,c__9256__auto___13512);
var G__13516 = (0);
seq__13456_13496 = G__13513;
chunk__13457_13497 = G__13514;
count__13458_13498 = G__13515;
i__13459_13499 = G__13516;
continue;
} else {
var vec__13465_13517 = cljs.core.first.call(null,seq__13456_13511__$1);
var name_13518 = cljs.core.nth.call(null,vec__13465_13517,(0),null);
var map__13468_13519 = cljs.core.nth.call(null,vec__13465_13517,(1),null);
var map__13468_13520__$1 = ((((!((map__13468_13519 == null)))?((((map__13468_13519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13468_13519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13468_13519):map__13468_13519);
var doc_13521 = cljs.core.get.call(null,map__13468_13520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13522 = cljs.core.get.call(null,map__13468_13520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13518);

cljs.core.println.call(null," ",arglists_13522);

if(cljs.core.truth_(doc_13521)){
cljs.core.println.call(null," ",doc_13521);
} else {
}

var G__13523 = cljs.core.next.call(null,seq__13456_13511__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__13456_13496 = G__13523;
chunk__13457_13497 = G__13524;
count__13458_13498 = G__13525;
i__13459_13499 = G__13526;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13470 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13471 = null;
var count__13472 = (0);
var i__13473 = (0);
while(true){
if((i__13473 < count__13472)){
var role = cljs.core._nth.call(null,chunk__13471,i__13473);
var temp__4657__auto___13527__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13527__$1)){
var spec_13528 = temp__4657__auto___13527__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_13528));
} else {
}

var G__13529 = seq__13470;
var G__13530 = chunk__13471;
var G__13531 = count__13472;
var G__13532 = (i__13473 + (1));
seq__13470 = G__13529;
chunk__13471 = G__13530;
count__13472 = G__13531;
i__13473 = G__13532;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13470);
if(temp__4657__auto____$1){
var seq__13470__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13470__$1)){
var c__9256__auto__ = cljs.core.chunk_first.call(null,seq__13470__$1);
var G__13533 = cljs.core.chunk_rest.call(null,seq__13470__$1);
var G__13534 = c__9256__auto__;
var G__13535 = cljs.core.count.call(null,c__9256__auto__);
var G__13536 = (0);
seq__13470 = G__13533;
chunk__13471 = G__13534;
count__13472 = G__13535;
i__13473 = G__13536;
continue;
} else {
var role = cljs.core.first.call(null,seq__13470__$1);
var temp__4657__auto___13537__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13537__$2)){
var spec_13538 = temp__4657__auto___13537__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_13538));
} else {
}

var G__13539 = cljs.core.next.call(null,seq__13470__$1);
var G__13540 = null;
var G__13541 = (0);
var G__13542 = (0);
seq__13470 = G__13539;
chunk__13471 = G__13540;
count__13472 = G__13541;
i__13473 = G__13542;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map