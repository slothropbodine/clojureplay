// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11751){
var map__11752 = p__11751;
var map__11752__$1 = ((((!((map__11752 == null)))?((((map__11752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11752):map__11752);
var m = map__11752__$1;
var n = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11754_11776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11755_11777 = null;
var count__11756_11778 = (0);
var i__11757_11779 = (0);
while(true){
if((i__11757_11779 < count__11756_11778)){
var f_11780 = cljs.core._nth.call(null,chunk__11755_11777,i__11757_11779);
cljs.core.println.call(null,"  ",f_11780);

var G__11781 = seq__11754_11776;
var G__11782 = chunk__11755_11777;
var G__11783 = count__11756_11778;
var G__11784 = (i__11757_11779 + (1));
seq__11754_11776 = G__11781;
chunk__11755_11777 = G__11782;
count__11756_11778 = G__11783;
i__11757_11779 = G__11784;
continue;
} else {
var temp__4657__auto___11785 = cljs.core.seq.call(null,seq__11754_11776);
if(temp__4657__auto___11785){
var seq__11754_11786__$1 = temp__4657__auto___11785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11754_11786__$1)){
var c__8812__auto___11787 = cljs.core.chunk_first.call(null,seq__11754_11786__$1);
var G__11788 = cljs.core.chunk_rest.call(null,seq__11754_11786__$1);
var G__11789 = c__8812__auto___11787;
var G__11790 = cljs.core.count.call(null,c__8812__auto___11787);
var G__11791 = (0);
seq__11754_11776 = G__11788;
chunk__11755_11777 = G__11789;
count__11756_11778 = G__11790;
i__11757_11779 = G__11791;
continue;
} else {
var f_11792 = cljs.core.first.call(null,seq__11754_11786__$1);
cljs.core.println.call(null,"  ",f_11792);

var G__11793 = cljs.core.next.call(null,seq__11754_11786__$1);
var G__11794 = null;
var G__11795 = (0);
var G__11796 = (0);
seq__11754_11776 = G__11793;
chunk__11755_11777 = G__11794;
count__11756_11778 = G__11795;
i__11757_11779 = G__11796;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11797 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7973__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11797);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11797)))?cljs.core.second.call(null,arglists_11797):arglists_11797));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__11758_11798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11759_11799 = null;
var count__11760_11800 = (0);
var i__11761_11801 = (0);
while(true){
if((i__11761_11801 < count__11760_11800)){
var vec__11762_11802 = cljs.core._nth.call(null,chunk__11759_11799,i__11761_11801);
var name_11803 = cljs.core.nth.call(null,vec__11762_11802,(0),null);
var map__11765_11804 = cljs.core.nth.call(null,vec__11762_11802,(1),null);
var map__11765_11805__$1 = ((((!((map__11765_11804 == null)))?((((map__11765_11804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11765_11804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11765_11804):map__11765_11804);
var doc_11806 = cljs.core.get.call(null,map__11765_11805__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11807 = cljs.core.get.call(null,map__11765_11805__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11803);

cljs.core.println.call(null," ",arglists_11807);

if(cljs.core.truth_(doc_11806)){
cljs.core.println.call(null," ",doc_11806);
} else {
}

var G__11808 = seq__11758_11798;
var G__11809 = chunk__11759_11799;
var G__11810 = count__11760_11800;
var G__11811 = (i__11761_11801 + (1));
seq__11758_11798 = G__11808;
chunk__11759_11799 = G__11809;
count__11760_11800 = G__11810;
i__11761_11801 = G__11811;
continue;
} else {
var temp__4657__auto___11812 = cljs.core.seq.call(null,seq__11758_11798);
if(temp__4657__auto___11812){
var seq__11758_11813__$1 = temp__4657__auto___11812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11758_11813__$1)){
var c__8812__auto___11814 = cljs.core.chunk_first.call(null,seq__11758_11813__$1);
var G__11815 = cljs.core.chunk_rest.call(null,seq__11758_11813__$1);
var G__11816 = c__8812__auto___11814;
var G__11817 = cljs.core.count.call(null,c__8812__auto___11814);
var G__11818 = (0);
seq__11758_11798 = G__11815;
chunk__11759_11799 = G__11816;
count__11760_11800 = G__11817;
i__11761_11801 = G__11818;
continue;
} else {
var vec__11767_11819 = cljs.core.first.call(null,seq__11758_11813__$1);
var name_11820 = cljs.core.nth.call(null,vec__11767_11819,(0),null);
var map__11770_11821 = cljs.core.nth.call(null,vec__11767_11819,(1),null);
var map__11770_11822__$1 = ((((!((map__11770_11821 == null)))?((((map__11770_11821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11770_11821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11770_11821):map__11770_11821);
var doc_11823 = cljs.core.get.call(null,map__11770_11822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11824 = cljs.core.get.call(null,map__11770_11822__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11820);

cljs.core.println.call(null," ",arglists_11824);

if(cljs.core.truth_(doc_11823)){
cljs.core.println.call(null," ",doc_11823);
} else {
}

var G__11825 = cljs.core.next.call(null,seq__11758_11813__$1);
var G__11826 = null;
var G__11827 = (0);
var G__11828 = (0);
seq__11758_11798 = G__11825;
chunk__11759_11799 = G__11826;
count__11760_11800 = G__11827;
i__11761_11801 = G__11828;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__11772 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11773 = null;
var count__11774 = (0);
var i__11775 = (0);
while(true){
if((i__11775 < count__11774)){
var role = cljs.core._nth.call(null,chunk__11773,i__11775);
var temp__4657__auto___11829__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11829__$1)){
var spec_11830 = temp__4657__auto___11829__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11830));
} else {
}

var G__11831 = seq__11772;
var G__11832 = chunk__11773;
var G__11833 = count__11774;
var G__11834 = (i__11775 + (1));
seq__11772 = G__11831;
chunk__11773 = G__11832;
count__11774 = G__11833;
i__11775 = G__11834;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11772);
if(temp__4657__auto____$1){
var seq__11772__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11772__$1)){
var c__8812__auto__ = cljs.core.chunk_first.call(null,seq__11772__$1);
var G__11835 = cljs.core.chunk_rest.call(null,seq__11772__$1);
var G__11836 = c__8812__auto__;
var G__11837 = cljs.core.count.call(null,c__8812__auto__);
var G__11838 = (0);
seq__11772 = G__11835;
chunk__11773 = G__11836;
count__11774 = G__11837;
i__11775 = G__11838;
continue;
} else {
var role = cljs.core.first.call(null,seq__11772__$1);
var temp__4657__auto___11839__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11839__$2)){
var spec_11840 = temp__4657__auto___11839__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11840));
} else {
}

var G__11841 = cljs.core.next.call(null,seq__11772__$1);
var G__11842 = null;
var G__11843 = (0);
var G__11844 = (0);
seq__11772 = G__11841;
chunk__11773 = G__11842;
count__11774 = G__11843;
i__11775 = G__11844;
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
