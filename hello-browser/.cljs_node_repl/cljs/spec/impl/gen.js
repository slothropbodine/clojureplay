// Compiled by ClojureScript 1.9.521 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__9048__auto__,writer__9049__auto__,opt__9050__auto__){
return cljs.core._write.call(null,writer__9049__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14429 = arguments.length;
var i__9551__auto___14430 = (0);
while(true){
if((i__9551__auto___14430 < len__9550__auto___14429)){
args__9557__auto__.push((arguments[i__9551__auto___14430]));

var G__14431 = (i__9551__auto___14430 + (1));
i__9551__auto___14430 = G__14431;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq14428){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14428));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14433 = arguments.length;
var i__9551__auto___14434 = (0);
while(true){
if((i__9551__auto___14434 < len__9550__auto___14433)){
args__9557__auto__.push((arguments[i__9551__auto___14434]));

var G__14435 = (i__9551__auto___14434 + (1));
i__9551__auto___14434 = G__14435;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq14432){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14432));
});

var g_QMARK__14436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_14437 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14436){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__14436))
,null));
var mkg_14438 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14436,g_14437){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__14436,g_14437))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__14436,g_14437,mkg_14438){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__14436).call(null,x);
});})(g_QMARK__14436,g_14437,mkg_14438))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__14436,g_14437,mkg_14438){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_14438).call(null,gfn);
});})(g_QMARK__14436,g_14437,mkg_14438))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__14436,g_14437,mkg_14438){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_14437).call(null,generator);
});})(g_QMARK__14436,g_14437,mkg_14438))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9642__auto___14458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__9642__auto___14458){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14459 = arguments.length;
var i__9551__auto___14460 = (0);
while(true){
if((i__9551__auto___14460 < len__9550__auto___14459)){
args__9557__auto__.push((arguments[i__9551__auto___14460]));

var G__14461 = (i__9551__auto___14460 + (1));
i__9551__auto___14460 = G__14461;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14458))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14458){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14458),args);
});})(g__9642__auto___14458))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__9642__auto___14458){
return (function (seq14439){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14439));
});})(g__9642__auto___14458))
;


var g__9642__auto___14462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__9642__auto___14462){
return (function cljs$spec$impl$gen$list(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14463 = arguments.length;
var i__9551__auto___14464 = (0);
while(true){
if((i__9551__auto___14464 < len__9550__auto___14463)){
args__9557__auto__.push((arguments[i__9551__auto___14464]));

var G__14465 = (i__9551__auto___14464 + (1));
i__9551__auto___14464 = G__14465;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14462))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14462){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14462),args);
});})(g__9642__auto___14462))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__9642__auto___14462){
return (function (seq14440){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14440));
});})(g__9642__auto___14462))
;


var g__9642__auto___14466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__9642__auto___14466){
return (function cljs$spec$impl$gen$map(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14467 = arguments.length;
var i__9551__auto___14468 = (0);
while(true){
if((i__9551__auto___14468 < len__9550__auto___14467)){
args__9557__auto__.push((arguments[i__9551__auto___14468]));

var G__14469 = (i__9551__auto___14468 + (1));
i__9551__auto___14468 = G__14469;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14466))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14466){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14466),args);
});})(g__9642__auto___14466))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__9642__auto___14466){
return (function (seq14441){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14441));
});})(g__9642__auto___14466))
;


var g__9642__auto___14470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__9642__auto___14470){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14471 = arguments.length;
var i__9551__auto___14472 = (0);
while(true){
if((i__9551__auto___14472 < len__9550__auto___14471)){
args__9557__auto__.push((arguments[i__9551__auto___14472]));

var G__14473 = (i__9551__auto___14472 + (1));
i__9551__auto___14472 = G__14473;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14470))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14470){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14470),args);
});})(g__9642__auto___14470))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__9642__auto___14470){
return (function (seq14442){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14442));
});})(g__9642__auto___14470))
;


var g__9642__auto___14474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__9642__auto___14474){
return (function cljs$spec$impl$gen$set(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14475 = arguments.length;
var i__9551__auto___14476 = (0);
while(true){
if((i__9551__auto___14476 < len__9550__auto___14475)){
args__9557__auto__.push((arguments[i__9551__auto___14476]));

var G__14477 = (i__9551__auto___14476 + (1));
i__9551__auto___14476 = G__14477;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14474))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14474){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14474),args);
});})(g__9642__auto___14474))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__9642__auto___14474){
return (function (seq14443){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14443));
});})(g__9642__auto___14474))
;


var g__9642__auto___14478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__9642__auto___14478){
return (function cljs$spec$impl$gen$vector(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14479 = arguments.length;
var i__9551__auto___14480 = (0);
while(true){
if((i__9551__auto___14480 < len__9550__auto___14479)){
args__9557__auto__.push((arguments[i__9551__auto___14480]));

var G__14481 = (i__9551__auto___14480 + (1));
i__9551__auto___14480 = G__14481;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14478))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14478){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14478),args);
});})(g__9642__auto___14478))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__9642__auto___14478){
return (function (seq14444){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14444));
});})(g__9642__auto___14478))
;


var g__9642__auto___14482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__9642__auto___14482){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14483 = arguments.length;
var i__9551__auto___14484 = (0);
while(true){
if((i__9551__auto___14484 < len__9550__auto___14483)){
args__9557__auto__.push((arguments[i__9551__auto___14484]));

var G__14485 = (i__9551__auto___14484 + (1));
i__9551__auto___14484 = G__14485;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14482))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14482){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14482),args);
});})(g__9642__auto___14482))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__9642__auto___14482){
return (function (seq14445){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14445));
});})(g__9642__auto___14482))
;


var g__9642__auto___14486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__9642__auto___14486){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14487 = arguments.length;
var i__9551__auto___14488 = (0);
while(true){
if((i__9551__auto___14488 < len__9550__auto___14487)){
args__9557__auto__.push((arguments[i__9551__auto___14488]));

var G__14489 = (i__9551__auto___14488 + (1));
i__9551__auto___14488 = G__14489;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14486))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14486){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14486),args);
});})(g__9642__auto___14486))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__9642__auto___14486){
return (function (seq14446){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14446));
});})(g__9642__auto___14486))
;


var g__9642__auto___14490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__9642__auto___14490){
return (function cljs$spec$impl$gen$elements(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14491 = arguments.length;
var i__9551__auto___14492 = (0);
while(true){
if((i__9551__auto___14492 < len__9550__auto___14491)){
args__9557__auto__.push((arguments[i__9551__auto___14492]));

var G__14493 = (i__9551__auto___14492 + (1));
i__9551__auto___14492 = G__14493;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14490))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14490){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14490),args);
});})(g__9642__auto___14490))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__9642__auto___14490){
return (function (seq14447){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14447));
});})(g__9642__auto___14490))
;


var g__9642__auto___14494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__9642__auto___14494){
return (function cljs$spec$impl$gen$bind(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14495 = arguments.length;
var i__9551__auto___14496 = (0);
while(true){
if((i__9551__auto___14496 < len__9550__auto___14495)){
args__9557__auto__.push((arguments[i__9551__auto___14496]));

var G__14497 = (i__9551__auto___14496 + (1));
i__9551__auto___14496 = G__14497;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14494))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14494){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14494),args);
});})(g__9642__auto___14494))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__9642__auto___14494){
return (function (seq14448){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14448));
});})(g__9642__auto___14494))
;


var g__9642__auto___14498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__9642__auto___14498){
return (function cljs$spec$impl$gen$choose(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14499 = arguments.length;
var i__9551__auto___14500 = (0);
while(true){
if((i__9551__auto___14500 < len__9550__auto___14499)){
args__9557__auto__.push((arguments[i__9551__auto___14500]));

var G__14501 = (i__9551__auto___14500 + (1));
i__9551__auto___14500 = G__14501;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14498))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14498),args);
});})(g__9642__auto___14498))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__9642__auto___14498){
return (function (seq14449){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14449));
});})(g__9642__auto___14498))
;


var g__9642__auto___14502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__9642__auto___14502){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14503 = arguments.length;
var i__9551__auto___14504 = (0);
while(true){
if((i__9551__auto___14504 < len__9550__auto___14503)){
args__9557__auto__.push((arguments[i__9551__auto___14504]));

var G__14505 = (i__9551__auto___14504 + (1));
i__9551__auto___14504 = G__14505;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14502))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14502),args);
});})(g__9642__auto___14502))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__9642__auto___14502){
return (function (seq14450){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14450));
});})(g__9642__auto___14502))
;


var g__9642__auto___14506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__9642__auto___14506){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14507 = arguments.length;
var i__9551__auto___14508 = (0);
while(true){
if((i__9551__auto___14508 < len__9550__auto___14507)){
args__9557__auto__.push((arguments[i__9551__auto___14508]));

var G__14509 = (i__9551__auto___14508 + (1));
i__9551__auto___14508 = G__14509;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14506))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14506),args);
});})(g__9642__auto___14506))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__9642__auto___14506){
return (function (seq14451){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14451));
});})(g__9642__auto___14506))
;


var g__9642__auto___14510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__9642__auto___14510){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14511 = arguments.length;
var i__9551__auto___14512 = (0);
while(true){
if((i__9551__auto___14512 < len__9550__auto___14511)){
args__9557__auto__.push((arguments[i__9551__auto___14512]));

var G__14513 = (i__9551__auto___14512 + (1));
i__9551__auto___14512 = G__14513;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14510))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14510),args);
});})(g__9642__auto___14510))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__9642__auto___14510){
return (function (seq14452){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14452));
});})(g__9642__auto___14510))
;


var g__9642__auto___14514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__9642__auto___14514){
return (function cljs$spec$impl$gen$sample(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14515 = arguments.length;
var i__9551__auto___14516 = (0);
while(true){
if((i__9551__auto___14516 < len__9550__auto___14515)){
args__9557__auto__.push((arguments[i__9551__auto___14516]));

var G__14517 = (i__9551__auto___14516 + (1));
i__9551__auto___14516 = G__14517;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14514))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14514),args);
});})(g__9642__auto___14514))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__9642__auto___14514){
return (function (seq14453){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14453));
});})(g__9642__auto___14514))
;


var g__9642__auto___14518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__9642__auto___14518){
return (function cljs$spec$impl$gen$return(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14519 = arguments.length;
var i__9551__auto___14520 = (0);
while(true){
if((i__9551__auto___14520 < len__9550__auto___14519)){
args__9557__auto__.push((arguments[i__9551__auto___14520]));

var G__14521 = (i__9551__auto___14520 + (1));
i__9551__auto___14520 = G__14521;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14518))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14518),args);
});})(g__9642__auto___14518))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__9642__auto___14518){
return (function (seq14454){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14454));
});})(g__9642__auto___14518))
;


var g__9642__auto___14522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__9642__auto___14522){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14523 = arguments.length;
var i__9551__auto___14524 = (0);
while(true){
if((i__9551__auto___14524 < len__9550__auto___14523)){
args__9557__auto__.push((arguments[i__9551__auto___14524]));

var G__14525 = (i__9551__auto___14524 + (1));
i__9551__auto___14524 = G__14525;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14522))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14522),args);
});})(g__9642__auto___14522))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9642__auto___14522){
return (function (seq14455){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14455));
});})(g__9642__auto___14522))
;


var g__9642__auto___14526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__9642__auto___14526){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14527 = arguments.length;
var i__9551__auto___14528 = (0);
while(true){
if((i__9551__auto___14528 < len__9550__auto___14527)){
args__9557__auto__.push((arguments[i__9551__auto___14528]));

var G__14529 = (i__9551__auto___14528 + (1));
i__9551__auto___14528 = G__14529;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14526))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14526),args);
});})(g__9642__auto___14526))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__9642__auto___14526){
return (function (seq14456){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14456));
});})(g__9642__auto___14526))
;


var g__9642__auto___14530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__9642__auto___14530){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14531 = arguments.length;
var i__9551__auto___14532 = (0);
while(true){
if((i__9551__auto___14532 < len__9550__auto___14531)){
args__9557__auto__.push((arguments[i__9551__auto___14532]));

var G__14533 = (i__9551__auto___14532 + (1));
i__9551__auto___14532 = G__14533;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9642__auto___14530))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9642__auto___14530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9642__auto___14530),args);
});})(g__9642__auto___14530))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__9642__auto___14530){
return (function (seq14457){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14457));
});})(g__9642__auto___14530))
;

var g__9655__auto___14555 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__9655__auto___14555){
return (function cljs$spec$impl$gen$any(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14556 = arguments.length;
var i__9551__auto___14557 = (0);
while(true){
if((i__9551__auto___14557 < len__9550__auto___14556)){
args__9557__auto__.push((arguments[i__9551__auto___14557]));

var G__14558 = (i__9551__auto___14557 + (1));
i__9551__auto___14557 = G__14558;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14555))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14555){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14555);
});})(g__9655__auto___14555))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__9655__auto___14555){
return (function (seq14534){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14534));
});})(g__9655__auto___14555))
;


var g__9655__auto___14559 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__9655__auto___14559){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14560 = arguments.length;
var i__9551__auto___14561 = (0);
while(true){
if((i__9551__auto___14561 < len__9550__auto___14560)){
args__9557__auto__.push((arguments[i__9551__auto___14561]));

var G__14562 = (i__9551__auto___14561 + (1));
i__9551__auto___14561 = G__14562;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14559))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14559){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14559);
});})(g__9655__auto___14559))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__9655__auto___14559){
return (function (seq14535){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14535));
});})(g__9655__auto___14559))
;


var g__9655__auto___14563 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__9655__auto___14563){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14564 = arguments.length;
var i__9551__auto___14565 = (0);
while(true){
if((i__9551__auto___14565 < len__9550__auto___14564)){
args__9557__auto__.push((arguments[i__9551__auto___14565]));

var G__14566 = (i__9551__auto___14565 + (1));
i__9551__auto___14565 = G__14566;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14563))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14563){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14563);
});})(g__9655__auto___14563))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__9655__auto___14563){
return (function (seq14536){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14536));
});})(g__9655__auto___14563))
;


var g__9655__auto___14567 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__9655__auto___14567){
return (function cljs$spec$impl$gen$char(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14568 = arguments.length;
var i__9551__auto___14569 = (0);
while(true){
if((i__9551__auto___14569 < len__9550__auto___14568)){
args__9557__auto__.push((arguments[i__9551__auto___14569]));

var G__14570 = (i__9551__auto___14569 + (1));
i__9551__auto___14569 = G__14570;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14567))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14567){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14567);
});})(g__9655__auto___14567))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__9655__auto___14567){
return (function (seq14537){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14537));
});})(g__9655__auto___14567))
;


var g__9655__auto___14571 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__9655__auto___14571){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14572 = arguments.length;
var i__9551__auto___14573 = (0);
while(true){
if((i__9551__auto___14573 < len__9550__auto___14572)){
args__9557__auto__.push((arguments[i__9551__auto___14573]));

var G__14574 = (i__9551__auto___14573 + (1));
i__9551__auto___14573 = G__14574;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14571))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14571){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14571);
});})(g__9655__auto___14571))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__9655__auto___14571){
return (function (seq14538){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14538));
});})(g__9655__auto___14571))
;


var g__9655__auto___14575 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__9655__auto___14575){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14576 = arguments.length;
var i__9551__auto___14577 = (0);
while(true){
if((i__9551__auto___14577 < len__9550__auto___14576)){
args__9557__auto__.push((arguments[i__9551__auto___14577]));

var G__14578 = (i__9551__auto___14577 + (1));
i__9551__auto___14577 = G__14578;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14575))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14575){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14575);
});})(g__9655__auto___14575))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__9655__auto___14575){
return (function (seq14539){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14539));
});})(g__9655__auto___14575))
;


var g__9655__auto___14579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__9655__auto___14579){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14580 = arguments.length;
var i__9551__auto___14581 = (0);
while(true){
if((i__9551__auto___14581 < len__9550__auto___14580)){
args__9557__auto__.push((arguments[i__9551__auto___14581]));

var G__14582 = (i__9551__auto___14581 + (1));
i__9551__auto___14581 = G__14582;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14579))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14579){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14579);
});})(g__9655__auto___14579))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__9655__auto___14579){
return (function (seq14540){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14540));
});})(g__9655__auto___14579))
;


var g__9655__auto___14583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__9655__auto___14583){
return (function cljs$spec$impl$gen$double(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14584 = arguments.length;
var i__9551__auto___14585 = (0);
while(true){
if((i__9551__auto___14585 < len__9550__auto___14584)){
args__9557__auto__.push((arguments[i__9551__auto___14585]));

var G__14586 = (i__9551__auto___14585 + (1));
i__9551__auto___14585 = G__14586;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14583))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14583){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14583);
});})(g__9655__auto___14583))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__9655__auto___14583){
return (function (seq14541){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14541));
});})(g__9655__auto___14583))
;


var g__9655__auto___14587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__9655__auto___14587){
return (function cljs$spec$impl$gen$int(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14588 = arguments.length;
var i__9551__auto___14589 = (0);
while(true){
if((i__9551__auto___14589 < len__9550__auto___14588)){
args__9557__auto__.push((arguments[i__9551__auto___14589]));

var G__14590 = (i__9551__auto___14589 + (1));
i__9551__auto___14589 = G__14590;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14587))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14587){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14587);
});})(g__9655__auto___14587))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__9655__auto___14587){
return (function (seq14542){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14542));
});})(g__9655__auto___14587))
;


var g__9655__auto___14591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__9655__auto___14591){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14592 = arguments.length;
var i__9551__auto___14593 = (0);
while(true){
if((i__9551__auto___14593 < len__9550__auto___14592)){
args__9557__auto__.push((arguments[i__9551__auto___14593]));

var G__14594 = (i__9551__auto___14593 + (1));
i__9551__auto___14593 = G__14594;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14591))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14591){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14591);
});})(g__9655__auto___14591))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__9655__auto___14591){
return (function (seq14543){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14543));
});})(g__9655__auto___14591))
;


var g__9655__auto___14595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__9655__auto___14595){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14596 = arguments.length;
var i__9551__auto___14597 = (0);
while(true){
if((i__9551__auto___14597 < len__9550__auto___14596)){
args__9557__auto__.push((arguments[i__9551__auto___14597]));

var G__14598 = (i__9551__auto___14597 + (1));
i__9551__auto___14597 = G__14598;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14595))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14595){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14595);
});})(g__9655__auto___14595))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__9655__auto___14595){
return (function (seq14544){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14544));
});})(g__9655__auto___14595))
;


var g__9655__auto___14599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__9655__auto___14599){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14600 = arguments.length;
var i__9551__auto___14601 = (0);
while(true){
if((i__9551__auto___14601 < len__9550__auto___14600)){
args__9557__auto__.push((arguments[i__9551__auto___14601]));

var G__14602 = (i__9551__auto___14601 + (1));
i__9551__auto___14601 = G__14602;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14599))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14599){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14599);
});})(g__9655__auto___14599))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__9655__auto___14599){
return (function (seq14545){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14545));
});})(g__9655__auto___14599))
;


var g__9655__auto___14603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__9655__auto___14603){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14604 = arguments.length;
var i__9551__auto___14605 = (0);
while(true){
if((i__9551__auto___14605 < len__9550__auto___14604)){
args__9557__auto__.push((arguments[i__9551__auto___14605]));

var G__14606 = (i__9551__auto___14605 + (1));
i__9551__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14603))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14603){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14603);
});})(g__9655__auto___14603))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__9655__auto___14603){
return (function (seq14546){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14546));
});})(g__9655__auto___14603))
;


var g__9655__auto___14607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__9655__auto___14607){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14608 = arguments.length;
var i__9551__auto___14609 = (0);
while(true){
if((i__9551__auto___14609 < len__9550__auto___14608)){
args__9557__auto__.push((arguments[i__9551__auto___14609]));

var G__14610 = (i__9551__auto___14609 + (1));
i__9551__auto___14609 = G__14610;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14607))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14607){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14607);
});})(g__9655__auto___14607))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__9655__auto___14607){
return (function (seq14547){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14547));
});})(g__9655__auto___14607))
;


var g__9655__auto___14611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__9655__auto___14611){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14612 = arguments.length;
var i__9551__auto___14613 = (0);
while(true){
if((i__9551__auto___14613 < len__9550__auto___14612)){
args__9557__auto__.push((arguments[i__9551__auto___14613]));

var G__14614 = (i__9551__auto___14613 + (1));
i__9551__auto___14613 = G__14614;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14611))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14611){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14611);
});})(g__9655__auto___14611))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__9655__auto___14611){
return (function (seq14548){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14548));
});})(g__9655__auto___14611))
;


var g__9655__auto___14615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__9655__auto___14615){
return (function cljs$spec$impl$gen$string(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14616 = arguments.length;
var i__9551__auto___14617 = (0);
while(true){
if((i__9551__auto___14617 < len__9550__auto___14616)){
args__9557__auto__.push((arguments[i__9551__auto___14617]));

var G__14618 = (i__9551__auto___14617 + (1));
i__9551__auto___14617 = G__14618;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14615))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14615){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14615);
});})(g__9655__auto___14615))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__9655__auto___14615){
return (function (seq14549){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14549));
});})(g__9655__auto___14615))
;


var g__9655__auto___14619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__9655__auto___14619){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14620 = arguments.length;
var i__9551__auto___14621 = (0);
while(true){
if((i__9551__auto___14621 < len__9550__auto___14620)){
args__9557__auto__.push((arguments[i__9551__auto___14621]));

var G__14622 = (i__9551__auto___14621 + (1));
i__9551__auto___14621 = G__14622;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14619))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14619){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14619);
});})(g__9655__auto___14619))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__9655__auto___14619){
return (function (seq14550){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14550));
});})(g__9655__auto___14619))
;


var g__9655__auto___14623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__9655__auto___14623){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14624 = arguments.length;
var i__9551__auto___14625 = (0);
while(true){
if((i__9551__auto___14625 < len__9550__auto___14624)){
args__9557__auto__.push((arguments[i__9551__auto___14625]));

var G__14626 = (i__9551__auto___14625 + (1));
i__9551__auto___14625 = G__14626;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14623))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14623){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14623);
});})(g__9655__auto___14623))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__9655__auto___14623){
return (function (seq14551){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14551));
});})(g__9655__auto___14623))
;


var g__9655__auto___14627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__9655__auto___14627){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14628 = arguments.length;
var i__9551__auto___14629 = (0);
while(true){
if((i__9551__auto___14629 < len__9550__auto___14628)){
args__9557__auto__.push((arguments[i__9551__auto___14629]));

var G__14630 = (i__9551__auto___14629 + (1));
i__9551__auto___14629 = G__14630;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14627))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14627){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14627);
});})(g__9655__auto___14627))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__9655__auto___14627){
return (function (seq14552){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14552));
});})(g__9655__auto___14627))
;


var g__9655__auto___14631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__9655__auto___14631){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14632 = arguments.length;
var i__9551__auto___14633 = (0);
while(true){
if((i__9551__auto___14633 < len__9550__auto___14632)){
args__9557__auto__.push((arguments[i__9551__auto___14633]));

var G__14634 = (i__9551__auto___14633 + (1));
i__9551__auto___14633 = G__14634;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14631))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14631){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14631);
});})(g__9655__auto___14631))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__9655__auto___14631){
return (function (seq14553){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14553));
});})(g__9655__auto___14631))
;


var g__9655__auto___14635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__9655__auto___14635){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14636 = arguments.length;
var i__9551__auto___14637 = (0);
while(true){
if((i__9551__auto___14637 < len__9550__auto___14636)){
args__9557__auto__.push((arguments[i__9551__auto___14637]));

var G__14638 = (i__9551__auto___14637 + (1));
i__9551__auto___14637 = G__14638;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});})(g__9655__auto___14635))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9655__auto___14635){
return (function (args){
return cljs.core.deref.call(null,g__9655__auto___14635);
});})(g__9655__auto___14635))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__9655__auto___14635){
return (function (seq14554){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14554));
});})(g__9655__auto___14635))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__9557__auto__ = [];
var len__9550__auto___14641 = arguments.length;
var i__9551__auto___14642 = (0);
while(true){
if((i__9551__auto___14642 < len__9550__auto___14641)){
args__9557__auto__.push((arguments[i__9551__auto___14642]));

var G__14643 = (i__9551__auto___14642 + (1));
i__9551__auto___14642 = G__14643;
continue;
} else {
}
break;
}

var argseq__9558__auto__ = ((((0) < args__9557__auto__.length))?(new cljs.core.IndexedSeq(args__9557__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9558__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__14639_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14639_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq14640){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14640));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__14644_SHARP_){
return (new Date(p1__14644_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map