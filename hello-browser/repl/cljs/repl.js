// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14608){
var map__14633 = p__14608;
var map__14633__$1 = ((((!((map__14633 == null)))?((((map__14633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14633):map__14633);
var m = map__14633__$1;
var n = cljs.core.get.call(null,map__14633__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14635_14657 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14636_14658 = null;
var count__14637_14659 = (0);
var i__14638_14660 = (0);
while(true){
if((i__14638_14660 < count__14637_14659)){
var f_14661 = cljs.core._nth.call(null,chunk__14636_14658,i__14638_14660);
cljs.core.println.call(null,"  ",f_14661);

var G__14662 = seq__14635_14657;
var G__14663 = chunk__14636_14658;
var G__14664 = count__14637_14659;
var G__14665 = (i__14638_14660 + (1));
seq__14635_14657 = G__14662;
chunk__14636_14658 = G__14663;
count__14637_14659 = G__14664;
i__14638_14660 = G__14665;
continue;
} else {
var temp__4657__auto___14666 = cljs.core.seq.call(null,seq__14635_14657);
if(temp__4657__auto___14666){
var seq__14635_14667__$1 = temp__4657__auto___14666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14635_14667__$1)){
var c__8360__auto___14668 = cljs.core.chunk_first.call(null,seq__14635_14667__$1);
var G__14669 = cljs.core.chunk_rest.call(null,seq__14635_14667__$1);
var G__14670 = c__8360__auto___14668;
var G__14671 = cljs.core.count.call(null,c__8360__auto___14668);
var G__14672 = (0);
seq__14635_14657 = G__14669;
chunk__14636_14658 = G__14670;
count__14637_14659 = G__14671;
i__14638_14660 = G__14672;
continue;
} else {
var f_14673 = cljs.core.first.call(null,seq__14635_14667__$1);
cljs.core.println.call(null,"  ",f_14673);

var G__14674 = cljs.core.next.call(null,seq__14635_14667__$1);
var G__14675 = null;
var G__14676 = (0);
var G__14677 = (0);
seq__14635_14657 = G__14674;
chunk__14636_14658 = G__14675;
count__14637_14659 = G__14676;
i__14638_14660 = G__14677;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14678 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7541__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7541__auto__)){
return or__7541__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14678);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14678)))?cljs.core.second.call(null,arglists_14678):arglists_14678));
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
var seq__14639_14679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14640_14680 = null;
var count__14641_14681 = (0);
var i__14642_14682 = (0);
while(true){
if((i__14642_14682 < count__14641_14681)){
var vec__14643_14683 = cljs.core._nth.call(null,chunk__14640_14680,i__14642_14682);
var name_14684 = cljs.core.nth.call(null,vec__14643_14683,(0),null);
var map__14646_14685 = cljs.core.nth.call(null,vec__14643_14683,(1),null);
var map__14646_14686__$1 = ((((!((map__14646_14685 == null)))?((((map__14646_14685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14646_14685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14646_14685):map__14646_14685);
var doc_14687 = cljs.core.get.call(null,map__14646_14686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14688 = cljs.core.get.call(null,map__14646_14686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14684);

cljs.core.println.call(null," ",arglists_14688);

if(cljs.core.truth_(doc_14687)){
cljs.core.println.call(null," ",doc_14687);
} else {
}

var G__14689 = seq__14639_14679;
var G__14690 = chunk__14640_14680;
var G__14691 = count__14641_14681;
var G__14692 = (i__14642_14682 + (1));
seq__14639_14679 = G__14689;
chunk__14640_14680 = G__14690;
count__14641_14681 = G__14691;
i__14642_14682 = G__14692;
continue;
} else {
var temp__4657__auto___14693 = cljs.core.seq.call(null,seq__14639_14679);
if(temp__4657__auto___14693){
var seq__14639_14694__$1 = temp__4657__auto___14693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14639_14694__$1)){
var c__8360__auto___14695 = cljs.core.chunk_first.call(null,seq__14639_14694__$1);
var G__14696 = cljs.core.chunk_rest.call(null,seq__14639_14694__$1);
var G__14697 = c__8360__auto___14695;
var G__14698 = cljs.core.count.call(null,c__8360__auto___14695);
var G__14699 = (0);
seq__14639_14679 = G__14696;
chunk__14640_14680 = G__14697;
count__14641_14681 = G__14698;
i__14642_14682 = G__14699;
continue;
} else {
var vec__14648_14700 = cljs.core.first.call(null,seq__14639_14694__$1);
var name_14701 = cljs.core.nth.call(null,vec__14648_14700,(0),null);
var map__14651_14702 = cljs.core.nth.call(null,vec__14648_14700,(1),null);
var map__14651_14703__$1 = ((((!((map__14651_14702 == null)))?((((map__14651_14702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14651_14702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14651_14702):map__14651_14702);
var doc_14704 = cljs.core.get.call(null,map__14651_14703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14705 = cljs.core.get.call(null,map__14651_14703__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14701);

cljs.core.println.call(null," ",arglists_14705);

if(cljs.core.truth_(doc_14704)){
cljs.core.println.call(null," ",doc_14704);
} else {
}

var G__14706 = cljs.core.next.call(null,seq__14639_14694__$1);
var G__14707 = null;
var G__14708 = (0);
var G__14709 = (0);
seq__14639_14679 = G__14706;
chunk__14640_14680 = G__14707;
count__14641_14681 = G__14708;
i__14642_14682 = G__14709;
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

var seq__14653 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14654 = null;
var count__14655 = (0);
var i__14656 = (0);
while(true){
if((i__14656 < count__14655)){
var role = cljs.core._nth.call(null,chunk__14654,i__14656);
var temp__4657__auto___14710__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14710__$1)){
var spec_14711 = temp__4657__auto___14710__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14711));
} else {
}

var G__14712 = seq__14653;
var G__14713 = chunk__14654;
var G__14714 = count__14655;
var G__14715 = (i__14656 + (1));
seq__14653 = G__14712;
chunk__14654 = G__14713;
count__14655 = G__14714;
i__14656 = G__14715;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14653);
if(temp__4657__auto____$1){
var seq__14653__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14653__$1)){
var c__8360__auto__ = cljs.core.chunk_first.call(null,seq__14653__$1);
var G__14716 = cljs.core.chunk_rest.call(null,seq__14653__$1);
var G__14717 = c__8360__auto__;
var G__14718 = cljs.core.count.call(null,c__8360__auto__);
var G__14719 = (0);
seq__14653 = G__14716;
chunk__14654 = G__14717;
count__14655 = G__14718;
i__14656 = G__14719;
continue;
} else {
var role = cljs.core.first.call(null,seq__14653__$1);
var temp__4657__auto___14720__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14720__$2)){
var spec_14721 = temp__4657__auto___14720__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14721));
} else {
}

var G__14722 = cljs.core.next.call(null,seq__14653__$1);
var G__14723 = null;
var G__14724 = (0);
var G__14725 = (0);
seq__14653 = G__14722;
chunk__14654 = G__14723;
count__14655 = G__14724;
i__14656 = G__14725;
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
