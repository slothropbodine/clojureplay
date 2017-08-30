// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15833){
var map__15858 = p__15833;
var map__15858__$1 = ((((!((map__15858 == null)))?((((map__15858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15858):map__15858);
var m = map__15858__$1;
var n = cljs.core.get.call(null,map__15858__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__15860_15882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15861_15883 = null;
var count__15862_15884 = (0);
var i__15863_15885 = (0);
while(true){
if((i__15863_15885 < count__15862_15884)){
var f_15886 = cljs.core._nth.call(null,chunk__15861_15883,i__15863_15885);
cljs.core.println.call(null,"  ",f_15886);

var G__15887 = seq__15860_15882;
var G__15888 = chunk__15861_15883;
var G__15889 = count__15862_15884;
var G__15890 = (i__15863_15885 + (1));
seq__15860_15882 = G__15887;
chunk__15861_15883 = G__15888;
count__15862_15884 = G__15889;
i__15863_15885 = G__15890;
continue;
} else {
var temp__4657__auto___15891 = cljs.core.seq.call(null,seq__15860_15882);
if(temp__4657__auto___15891){
var seq__15860_15892__$1 = temp__4657__auto___15891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15860_15892__$1)){
var c__9585__auto___15893 = cljs.core.chunk_first.call(null,seq__15860_15892__$1);
var G__15894 = cljs.core.chunk_rest.call(null,seq__15860_15892__$1);
var G__15895 = c__9585__auto___15893;
var G__15896 = cljs.core.count.call(null,c__9585__auto___15893);
var G__15897 = (0);
seq__15860_15882 = G__15894;
chunk__15861_15883 = G__15895;
count__15862_15884 = G__15896;
i__15863_15885 = G__15897;
continue;
} else {
var f_15898 = cljs.core.first.call(null,seq__15860_15892__$1);
cljs.core.println.call(null,"  ",f_15898);

var G__15899 = cljs.core.next.call(null,seq__15860_15892__$1);
var G__15900 = null;
var G__15901 = (0);
var G__15902 = (0);
seq__15860_15882 = G__15899;
chunk__15861_15883 = G__15900;
count__15862_15884 = G__15901;
i__15863_15885 = G__15902;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15903 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8766__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8766__auto__)){
return or__8766__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15903);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15903)))?cljs.core.second.call(null,arglists_15903):arglists_15903));
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
var seq__15864_15904 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15865_15905 = null;
var count__15866_15906 = (0);
var i__15867_15907 = (0);
while(true){
if((i__15867_15907 < count__15866_15906)){
var vec__15868_15908 = cljs.core._nth.call(null,chunk__15865_15905,i__15867_15907);
var name_15909 = cljs.core.nth.call(null,vec__15868_15908,(0),null);
var map__15871_15910 = cljs.core.nth.call(null,vec__15868_15908,(1),null);
var map__15871_15911__$1 = ((((!((map__15871_15910 == null)))?((((map__15871_15910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15871_15910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15871_15910):map__15871_15910);
var doc_15912 = cljs.core.get.call(null,map__15871_15911__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15913 = cljs.core.get.call(null,map__15871_15911__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15909);

cljs.core.println.call(null," ",arglists_15913);

if(cljs.core.truth_(doc_15912)){
cljs.core.println.call(null," ",doc_15912);
} else {
}

var G__15914 = seq__15864_15904;
var G__15915 = chunk__15865_15905;
var G__15916 = count__15866_15906;
var G__15917 = (i__15867_15907 + (1));
seq__15864_15904 = G__15914;
chunk__15865_15905 = G__15915;
count__15866_15906 = G__15916;
i__15867_15907 = G__15917;
continue;
} else {
var temp__4657__auto___15918 = cljs.core.seq.call(null,seq__15864_15904);
if(temp__4657__auto___15918){
var seq__15864_15919__$1 = temp__4657__auto___15918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15864_15919__$1)){
var c__9585__auto___15920 = cljs.core.chunk_first.call(null,seq__15864_15919__$1);
var G__15921 = cljs.core.chunk_rest.call(null,seq__15864_15919__$1);
var G__15922 = c__9585__auto___15920;
var G__15923 = cljs.core.count.call(null,c__9585__auto___15920);
var G__15924 = (0);
seq__15864_15904 = G__15921;
chunk__15865_15905 = G__15922;
count__15866_15906 = G__15923;
i__15867_15907 = G__15924;
continue;
} else {
var vec__15873_15925 = cljs.core.first.call(null,seq__15864_15919__$1);
var name_15926 = cljs.core.nth.call(null,vec__15873_15925,(0),null);
var map__15876_15927 = cljs.core.nth.call(null,vec__15873_15925,(1),null);
var map__15876_15928__$1 = ((((!((map__15876_15927 == null)))?((((map__15876_15927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15876_15927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15876_15927):map__15876_15927);
var doc_15929 = cljs.core.get.call(null,map__15876_15928__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15930 = cljs.core.get.call(null,map__15876_15928__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15926);

cljs.core.println.call(null," ",arglists_15930);

if(cljs.core.truth_(doc_15929)){
cljs.core.println.call(null," ",doc_15929);
} else {
}

var G__15931 = cljs.core.next.call(null,seq__15864_15919__$1);
var G__15932 = null;
var G__15933 = (0);
var G__15934 = (0);
seq__15864_15904 = G__15931;
chunk__15865_15905 = G__15932;
count__15866_15906 = G__15933;
i__15867_15907 = G__15934;
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

var seq__15878 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15879 = null;
var count__15880 = (0);
var i__15881 = (0);
while(true){
if((i__15881 < count__15880)){
var role = cljs.core._nth.call(null,chunk__15879,i__15881);
var temp__4657__auto___15935__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15935__$1)){
var spec_15936 = temp__4657__auto___15935__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_15936));
} else {
}

var G__15937 = seq__15878;
var G__15938 = chunk__15879;
var G__15939 = count__15880;
var G__15940 = (i__15881 + (1));
seq__15878 = G__15937;
chunk__15879 = G__15938;
count__15880 = G__15939;
i__15881 = G__15940;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__15878);
if(temp__4657__auto____$1){
var seq__15878__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15878__$1)){
var c__9585__auto__ = cljs.core.chunk_first.call(null,seq__15878__$1);
var G__15941 = cljs.core.chunk_rest.call(null,seq__15878__$1);
var G__15942 = c__9585__auto__;
var G__15943 = cljs.core.count.call(null,c__9585__auto__);
var G__15944 = (0);
seq__15878 = G__15941;
chunk__15879 = G__15942;
count__15880 = G__15943;
i__15881 = G__15944;
continue;
} else {
var role = cljs.core.first.call(null,seq__15878__$1);
var temp__4657__auto___15945__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15945__$2)){
var spec_15946 = temp__4657__auto___15945__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_15946));
} else {
}

var G__15947 = cljs.core.next.call(null,seq__15878__$1);
var G__15948 = null;
var G__15949 = (0);
var G__15950 = (0);
seq__15878 = G__15947;
chunk__15879 = G__15948;
count__15880 = G__15949;
i__15881 = G__15950;
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
