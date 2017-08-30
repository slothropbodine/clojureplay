// Compiled by ClojureScript 1.9.521 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__9377__auto__,writer__9378__auto__,opt__9379__auto__){
return cljs.core._write.call(null,writer__9378__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__9886__auto__ = [];
var len__9879__auto___14424 = arguments.length;
var i__9880__auto___14425 = (0);
while(true){
if((i__9880__auto___14425 < len__9879__auto___14424)){
args__9886__auto__.push((arguments[i__9880__auto___14425]));

var G__14426 = (i__9880__auto___14425 + (1));
i__9880__auto___14425 = G__14426;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq14423){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14423));
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
var args__9886__auto__ = [];
var len__9879__auto___14428 = arguments.length;
var i__9880__auto___14429 = (0);
while(true){
if((i__9880__auto___14429 < len__9879__auto___14428)){
args__9886__auto__.push((arguments[i__9880__auto___14429]));

var G__14430 = (i__9880__auto___14429 + (1));
i__9880__auto___14429 = G__14430;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq14427){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14427));
});

var g_QMARK__14431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_14432 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14431){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__14431))
,null));
var mkg_14433 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14431,g_14432){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__14431,g_14432))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__14431,g_14432,mkg_14433){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__14431).call(null,x);
});})(g_QMARK__14431,g_14432,mkg_14433))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__14431,g_14432,mkg_14433){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_14433).call(null,gfn);
});})(g_QMARK__14431,g_14432,mkg_14433))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__14431,g_14432,mkg_14433){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_14432).call(null,generator);
});})(g_QMARK__14431,g_14432,mkg_14433))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__14395__auto___14453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__14395__auto___14453){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14454 = arguments.length;
var i__9880__auto___14455 = (0);
while(true){
if((i__9880__auto___14455 < len__9879__auto___14454)){
args__9886__auto__.push((arguments[i__9880__auto___14455]));

var G__14456 = (i__9880__auto___14455 + (1));
i__9880__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14453))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14453),args);
});})(g__14395__auto___14453))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__14395__auto___14453){
return (function (seq14434){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14434));
});})(g__14395__auto___14453))
;


var g__14395__auto___14457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__14395__auto___14457){
return (function cljs$spec$impl$gen$list(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14458 = arguments.length;
var i__9880__auto___14459 = (0);
while(true){
if((i__9880__auto___14459 < len__9879__auto___14458)){
args__9886__auto__.push((arguments[i__9880__auto___14459]));

var G__14460 = (i__9880__auto___14459 + (1));
i__9880__auto___14459 = G__14460;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14457))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14457),args);
});})(g__14395__auto___14457))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__14395__auto___14457){
return (function (seq14435){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14435));
});})(g__14395__auto___14457))
;


var g__14395__auto___14461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__14395__auto___14461){
return (function cljs$spec$impl$gen$map(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14462 = arguments.length;
var i__9880__auto___14463 = (0);
while(true){
if((i__9880__auto___14463 < len__9879__auto___14462)){
args__9886__auto__.push((arguments[i__9880__auto___14463]));

var G__14464 = (i__9880__auto___14463 + (1));
i__9880__auto___14463 = G__14464;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14461))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14461),args);
});})(g__14395__auto___14461))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__14395__auto___14461){
return (function (seq14436){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14436));
});})(g__14395__auto___14461))
;


var g__14395__auto___14465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__14395__auto___14465){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14466 = arguments.length;
var i__9880__auto___14467 = (0);
while(true){
if((i__9880__auto___14467 < len__9879__auto___14466)){
args__9886__auto__.push((arguments[i__9880__auto___14467]));

var G__14468 = (i__9880__auto___14467 + (1));
i__9880__auto___14467 = G__14468;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14465))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14465),args);
});})(g__14395__auto___14465))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__14395__auto___14465){
return (function (seq14437){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14437));
});})(g__14395__auto___14465))
;


var g__14395__auto___14469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__14395__auto___14469){
return (function cljs$spec$impl$gen$set(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14470 = arguments.length;
var i__9880__auto___14471 = (0);
while(true){
if((i__9880__auto___14471 < len__9879__auto___14470)){
args__9886__auto__.push((arguments[i__9880__auto___14471]));

var G__14472 = (i__9880__auto___14471 + (1));
i__9880__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14469))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14469),args);
});})(g__14395__auto___14469))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__14395__auto___14469){
return (function (seq14438){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14438));
});})(g__14395__auto___14469))
;


var g__14395__auto___14473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__14395__auto___14473){
return (function cljs$spec$impl$gen$vector(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14474 = arguments.length;
var i__9880__auto___14475 = (0);
while(true){
if((i__9880__auto___14475 < len__9879__auto___14474)){
args__9886__auto__.push((arguments[i__9880__auto___14475]));

var G__14476 = (i__9880__auto___14475 + (1));
i__9880__auto___14475 = G__14476;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14473))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14473),args);
});})(g__14395__auto___14473))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__14395__auto___14473){
return (function (seq14439){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14439));
});})(g__14395__auto___14473))
;


var g__14395__auto___14477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__14395__auto___14477){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14478 = arguments.length;
var i__9880__auto___14479 = (0);
while(true){
if((i__9880__auto___14479 < len__9879__auto___14478)){
args__9886__auto__.push((arguments[i__9880__auto___14479]));

var G__14480 = (i__9880__auto___14479 + (1));
i__9880__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14477))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14477),args);
});})(g__14395__auto___14477))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__14395__auto___14477){
return (function (seq14440){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14440));
});})(g__14395__auto___14477))
;


var g__14395__auto___14481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__14395__auto___14481){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14482 = arguments.length;
var i__9880__auto___14483 = (0);
while(true){
if((i__9880__auto___14483 < len__9879__auto___14482)){
args__9886__auto__.push((arguments[i__9880__auto___14483]));

var G__14484 = (i__9880__auto___14483 + (1));
i__9880__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14481))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14481),args);
});})(g__14395__auto___14481))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__14395__auto___14481){
return (function (seq14441){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14441));
});})(g__14395__auto___14481))
;


var g__14395__auto___14485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__14395__auto___14485){
return (function cljs$spec$impl$gen$elements(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14486 = arguments.length;
var i__9880__auto___14487 = (0);
while(true){
if((i__9880__auto___14487 < len__9879__auto___14486)){
args__9886__auto__.push((arguments[i__9880__auto___14487]));

var G__14488 = (i__9880__auto___14487 + (1));
i__9880__auto___14487 = G__14488;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14485))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14485),args);
});})(g__14395__auto___14485))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__14395__auto___14485){
return (function (seq14442){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14442));
});})(g__14395__auto___14485))
;


var g__14395__auto___14489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__14395__auto___14489){
return (function cljs$spec$impl$gen$bind(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14490 = arguments.length;
var i__9880__auto___14491 = (0);
while(true){
if((i__9880__auto___14491 < len__9879__auto___14490)){
args__9886__auto__.push((arguments[i__9880__auto___14491]));

var G__14492 = (i__9880__auto___14491 + (1));
i__9880__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14489))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14489),args);
});})(g__14395__auto___14489))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__14395__auto___14489){
return (function (seq14443){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14443));
});})(g__14395__auto___14489))
;


var g__14395__auto___14493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__14395__auto___14493){
return (function cljs$spec$impl$gen$choose(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14494 = arguments.length;
var i__9880__auto___14495 = (0);
while(true){
if((i__9880__auto___14495 < len__9879__auto___14494)){
args__9886__auto__.push((arguments[i__9880__auto___14495]));

var G__14496 = (i__9880__auto___14495 + (1));
i__9880__auto___14495 = G__14496;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14493))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14493),args);
});})(g__14395__auto___14493))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__14395__auto___14493){
return (function (seq14444){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14444));
});})(g__14395__auto___14493))
;


var g__14395__auto___14497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__14395__auto___14497){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14498 = arguments.length;
var i__9880__auto___14499 = (0);
while(true){
if((i__9880__auto___14499 < len__9879__auto___14498)){
args__9886__auto__.push((arguments[i__9880__auto___14499]));

var G__14500 = (i__9880__auto___14499 + (1));
i__9880__auto___14499 = G__14500;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14497))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14497),args);
});})(g__14395__auto___14497))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__14395__auto___14497){
return (function (seq14445){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14445));
});})(g__14395__auto___14497))
;


var g__14395__auto___14501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__14395__auto___14501){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14502 = arguments.length;
var i__9880__auto___14503 = (0);
while(true){
if((i__9880__auto___14503 < len__9879__auto___14502)){
args__9886__auto__.push((arguments[i__9880__auto___14503]));

var G__14504 = (i__9880__auto___14503 + (1));
i__9880__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14501))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14501),args);
});})(g__14395__auto___14501))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__14395__auto___14501){
return (function (seq14446){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14446));
});})(g__14395__auto___14501))
;


var g__14395__auto___14505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__14395__auto___14505){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14506 = arguments.length;
var i__9880__auto___14507 = (0);
while(true){
if((i__9880__auto___14507 < len__9879__auto___14506)){
args__9886__auto__.push((arguments[i__9880__auto___14507]));

var G__14508 = (i__9880__auto___14507 + (1));
i__9880__auto___14507 = G__14508;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14505))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14505),args);
});})(g__14395__auto___14505))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__14395__auto___14505){
return (function (seq14447){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14447));
});})(g__14395__auto___14505))
;


var g__14395__auto___14509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__14395__auto___14509){
return (function cljs$spec$impl$gen$sample(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14510 = arguments.length;
var i__9880__auto___14511 = (0);
while(true){
if((i__9880__auto___14511 < len__9879__auto___14510)){
args__9886__auto__.push((arguments[i__9880__auto___14511]));

var G__14512 = (i__9880__auto___14511 + (1));
i__9880__auto___14511 = G__14512;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14509))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14509),args);
});})(g__14395__auto___14509))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__14395__auto___14509){
return (function (seq14448){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14448));
});})(g__14395__auto___14509))
;


var g__14395__auto___14513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__14395__auto___14513){
return (function cljs$spec$impl$gen$return(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14514 = arguments.length;
var i__9880__auto___14515 = (0);
while(true){
if((i__9880__auto___14515 < len__9879__auto___14514)){
args__9886__auto__.push((arguments[i__9880__auto___14515]));

var G__14516 = (i__9880__auto___14515 + (1));
i__9880__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14513))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14513),args);
});})(g__14395__auto___14513))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__14395__auto___14513){
return (function (seq14449){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14449));
});})(g__14395__auto___14513))
;


var g__14395__auto___14517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__14395__auto___14517){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14518 = arguments.length;
var i__9880__auto___14519 = (0);
while(true){
if((i__9880__auto___14519 < len__9879__auto___14518)){
args__9886__auto__.push((arguments[i__9880__auto___14519]));

var G__14520 = (i__9880__auto___14519 + (1));
i__9880__auto___14519 = G__14520;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14517))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14517),args);
});})(g__14395__auto___14517))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14395__auto___14517){
return (function (seq14450){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14450));
});})(g__14395__auto___14517))
;


var g__14395__auto___14521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__14395__auto___14521){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14522 = arguments.length;
var i__9880__auto___14523 = (0);
while(true){
if((i__9880__auto___14523 < len__9879__auto___14522)){
args__9886__auto__.push((arguments[i__9880__auto___14523]));

var G__14524 = (i__9880__auto___14523 + (1));
i__9880__auto___14523 = G__14524;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14521))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14521),args);
});})(g__14395__auto___14521))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__14395__auto___14521){
return (function (seq14451){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14451));
});})(g__14395__auto___14521))
;


var g__14395__auto___14525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__14395__auto___14525){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14526 = arguments.length;
var i__9880__auto___14527 = (0);
while(true){
if((i__9880__auto___14527 < len__9879__auto___14526)){
args__9886__auto__.push((arguments[i__9880__auto___14527]));

var G__14528 = (i__9880__auto___14527 + (1));
i__9880__auto___14527 = G__14528;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14395__auto___14525))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14395__auto___14525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14395__auto___14525),args);
});})(g__14395__auto___14525))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__14395__auto___14525){
return (function (seq14452){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14452));
});})(g__14395__auto___14525))
;

var g__14408__auto___14550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__14408__auto___14550){
return (function cljs$spec$impl$gen$any(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14551 = arguments.length;
var i__9880__auto___14552 = (0);
while(true){
if((i__9880__auto___14552 < len__9879__auto___14551)){
args__9886__auto__.push((arguments[i__9880__auto___14552]));

var G__14553 = (i__9880__auto___14552 + (1));
i__9880__auto___14552 = G__14553;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14550))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14550){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14550);
});})(g__14408__auto___14550))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__14408__auto___14550){
return (function (seq14529){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14529));
});})(g__14408__auto___14550))
;


var g__14408__auto___14554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__14408__auto___14554){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14555 = arguments.length;
var i__9880__auto___14556 = (0);
while(true){
if((i__9880__auto___14556 < len__9879__auto___14555)){
args__9886__auto__.push((arguments[i__9880__auto___14556]));

var G__14557 = (i__9880__auto___14556 + (1));
i__9880__auto___14556 = G__14557;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14554))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14554){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14554);
});})(g__14408__auto___14554))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__14408__auto___14554){
return (function (seq14530){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14530));
});})(g__14408__auto___14554))
;


var g__14408__auto___14558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__14408__auto___14558){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14559 = arguments.length;
var i__9880__auto___14560 = (0);
while(true){
if((i__9880__auto___14560 < len__9879__auto___14559)){
args__9886__auto__.push((arguments[i__9880__auto___14560]));

var G__14561 = (i__9880__auto___14560 + (1));
i__9880__auto___14560 = G__14561;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14558))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14558){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14558);
});})(g__14408__auto___14558))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__14408__auto___14558){
return (function (seq14531){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14531));
});})(g__14408__auto___14558))
;


var g__14408__auto___14562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__14408__auto___14562){
return (function cljs$spec$impl$gen$char(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14563 = arguments.length;
var i__9880__auto___14564 = (0);
while(true){
if((i__9880__auto___14564 < len__9879__auto___14563)){
args__9886__auto__.push((arguments[i__9880__auto___14564]));

var G__14565 = (i__9880__auto___14564 + (1));
i__9880__auto___14564 = G__14565;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14562))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14562){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14562);
});})(g__14408__auto___14562))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__14408__auto___14562){
return (function (seq14532){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14532));
});})(g__14408__auto___14562))
;


var g__14408__auto___14566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__14408__auto___14566){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14567 = arguments.length;
var i__9880__auto___14568 = (0);
while(true){
if((i__9880__auto___14568 < len__9879__auto___14567)){
args__9886__auto__.push((arguments[i__9880__auto___14568]));

var G__14569 = (i__9880__auto___14568 + (1));
i__9880__auto___14568 = G__14569;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14566))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14566){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14566);
});})(g__14408__auto___14566))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__14408__auto___14566){
return (function (seq14533){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14533));
});})(g__14408__auto___14566))
;


var g__14408__auto___14570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__14408__auto___14570){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14571 = arguments.length;
var i__9880__auto___14572 = (0);
while(true){
if((i__9880__auto___14572 < len__9879__auto___14571)){
args__9886__auto__.push((arguments[i__9880__auto___14572]));

var G__14573 = (i__9880__auto___14572 + (1));
i__9880__auto___14572 = G__14573;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14570))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14570){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14570);
});})(g__14408__auto___14570))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__14408__auto___14570){
return (function (seq14534){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14534));
});})(g__14408__auto___14570))
;


var g__14408__auto___14574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__14408__auto___14574){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14575 = arguments.length;
var i__9880__auto___14576 = (0);
while(true){
if((i__9880__auto___14576 < len__9879__auto___14575)){
args__9886__auto__.push((arguments[i__9880__auto___14576]));

var G__14577 = (i__9880__auto___14576 + (1));
i__9880__auto___14576 = G__14577;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14574))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14574){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14574);
});})(g__14408__auto___14574))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__14408__auto___14574){
return (function (seq14535){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14535));
});})(g__14408__auto___14574))
;


var g__14408__auto___14578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__14408__auto___14578){
return (function cljs$spec$impl$gen$double(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14579 = arguments.length;
var i__9880__auto___14580 = (0);
while(true){
if((i__9880__auto___14580 < len__9879__auto___14579)){
args__9886__auto__.push((arguments[i__9880__auto___14580]));

var G__14581 = (i__9880__auto___14580 + (1));
i__9880__auto___14580 = G__14581;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14578))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14578){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14578);
});})(g__14408__auto___14578))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__14408__auto___14578){
return (function (seq14536){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14536));
});})(g__14408__auto___14578))
;


var g__14408__auto___14582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__14408__auto___14582){
return (function cljs$spec$impl$gen$int(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14583 = arguments.length;
var i__9880__auto___14584 = (0);
while(true){
if((i__9880__auto___14584 < len__9879__auto___14583)){
args__9886__auto__.push((arguments[i__9880__auto___14584]));

var G__14585 = (i__9880__auto___14584 + (1));
i__9880__auto___14584 = G__14585;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14582))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14582){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14582);
});})(g__14408__auto___14582))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__14408__auto___14582){
return (function (seq14537){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14537));
});})(g__14408__auto___14582))
;


var g__14408__auto___14586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__14408__auto___14586){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14587 = arguments.length;
var i__9880__auto___14588 = (0);
while(true){
if((i__9880__auto___14588 < len__9879__auto___14587)){
args__9886__auto__.push((arguments[i__9880__auto___14588]));

var G__14589 = (i__9880__auto___14588 + (1));
i__9880__auto___14588 = G__14589;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14586))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14586){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14586);
});})(g__14408__auto___14586))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__14408__auto___14586){
return (function (seq14538){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14538));
});})(g__14408__auto___14586))
;


var g__14408__auto___14590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__14408__auto___14590){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14591 = arguments.length;
var i__9880__auto___14592 = (0);
while(true){
if((i__9880__auto___14592 < len__9879__auto___14591)){
args__9886__auto__.push((arguments[i__9880__auto___14592]));

var G__14593 = (i__9880__auto___14592 + (1));
i__9880__auto___14592 = G__14593;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14590))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14590){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14590);
});})(g__14408__auto___14590))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__14408__auto___14590){
return (function (seq14539){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14539));
});})(g__14408__auto___14590))
;


var g__14408__auto___14594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__14408__auto___14594){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14595 = arguments.length;
var i__9880__auto___14596 = (0);
while(true){
if((i__9880__auto___14596 < len__9879__auto___14595)){
args__9886__auto__.push((arguments[i__9880__auto___14596]));

var G__14597 = (i__9880__auto___14596 + (1));
i__9880__auto___14596 = G__14597;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14594))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14594){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14594);
});})(g__14408__auto___14594))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__14408__auto___14594){
return (function (seq14540){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14540));
});})(g__14408__auto___14594))
;


var g__14408__auto___14598 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__14408__auto___14598){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14599 = arguments.length;
var i__9880__auto___14600 = (0);
while(true){
if((i__9880__auto___14600 < len__9879__auto___14599)){
args__9886__auto__.push((arguments[i__9880__auto___14600]));

var G__14601 = (i__9880__auto___14600 + (1));
i__9880__auto___14600 = G__14601;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14598))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14598){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14598);
});})(g__14408__auto___14598))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__14408__auto___14598){
return (function (seq14541){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14541));
});})(g__14408__auto___14598))
;


var g__14408__auto___14602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__14408__auto___14602){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14603 = arguments.length;
var i__9880__auto___14604 = (0);
while(true){
if((i__9880__auto___14604 < len__9879__auto___14603)){
args__9886__auto__.push((arguments[i__9880__auto___14604]));

var G__14605 = (i__9880__auto___14604 + (1));
i__9880__auto___14604 = G__14605;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14602))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14602){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14602);
});})(g__14408__auto___14602))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__14408__auto___14602){
return (function (seq14542){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14542));
});})(g__14408__auto___14602))
;


var g__14408__auto___14606 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__14408__auto___14606){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14607 = arguments.length;
var i__9880__auto___14608 = (0);
while(true){
if((i__9880__auto___14608 < len__9879__auto___14607)){
args__9886__auto__.push((arguments[i__9880__auto___14608]));

var G__14609 = (i__9880__auto___14608 + (1));
i__9880__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14606))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14606){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14606);
});})(g__14408__auto___14606))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__14408__auto___14606){
return (function (seq14543){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14543));
});})(g__14408__auto___14606))
;


var g__14408__auto___14610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__14408__auto___14610){
return (function cljs$spec$impl$gen$string(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14611 = arguments.length;
var i__9880__auto___14612 = (0);
while(true){
if((i__9880__auto___14612 < len__9879__auto___14611)){
args__9886__auto__.push((arguments[i__9880__auto___14612]));

var G__14613 = (i__9880__auto___14612 + (1));
i__9880__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14610))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14610){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14610);
});})(g__14408__auto___14610))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__14408__auto___14610){
return (function (seq14544){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14544));
});})(g__14408__auto___14610))
;


var g__14408__auto___14614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__14408__auto___14614){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14615 = arguments.length;
var i__9880__auto___14616 = (0);
while(true){
if((i__9880__auto___14616 < len__9879__auto___14615)){
args__9886__auto__.push((arguments[i__9880__auto___14616]));

var G__14617 = (i__9880__auto___14616 + (1));
i__9880__auto___14616 = G__14617;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14614))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14614){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14614);
});})(g__14408__auto___14614))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__14408__auto___14614){
return (function (seq14545){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14545));
});})(g__14408__auto___14614))
;


var g__14408__auto___14618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__14408__auto___14618){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14619 = arguments.length;
var i__9880__auto___14620 = (0);
while(true){
if((i__9880__auto___14620 < len__9879__auto___14619)){
args__9886__auto__.push((arguments[i__9880__auto___14620]));

var G__14621 = (i__9880__auto___14620 + (1));
i__9880__auto___14620 = G__14621;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14618))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14618){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14618);
});})(g__14408__auto___14618))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__14408__auto___14618){
return (function (seq14546){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14546));
});})(g__14408__auto___14618))
;


var g__14408__auto___14622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__14408__auto___14622){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14623 = arguments.length;
var i__9880__auto___14624 = (0);
while(true){
if((i__9880__auto___14624 < len__9879__auto___14623)){
args__9886__auto__.push((arguments[i__9880__auto___14624]));

var G__14625 = (i__9880__auto___14624 + (1));
i__9880__auto___14624 = G__14625;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14622))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14622){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14622);
});})(g__14408__auto___14622))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__14408__auto___14622){
return (function (seq14547){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14547));
});})(g__14408__auto___14622))
;


var g__14408__auto___14626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__14408__auto___14626){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14627 = arguments.length;
var i__9880__auto___14628 = (0);
while(true){
if((i__9880__auto___14628 < len__9879__auto___14627)){
args__9886__auto__.push((arguments[i__9880__auto___14628]));

var G__14629 = (i__9880__auto___14628 + (1));
i__9880__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14626))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14626){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14626);
});})(g__14408__auto___14626))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__14408__auto___14626){
return (function (seq14548){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14548));
});})(g__14408__auto___14626))
;


var g__14408__auto___14630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__14408__auto___14630){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14631 = arguments.length;
var i__9880__auto___14632 = (0);
while(true){
if((i__9880__auto___14632 < len__9879__auto___14631)){
args__9886__auto__.push((arguments[i__9880__auto___14632]));

var G__14633 = (i__9880__auto___14632 + (1));
i__9880__auto___14632 = G__14633;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});})(g__14408__auto___14630))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14408__auto___14630){
return (function (args){
return cljs.core.deref.call(null,g__14408__auto___14630);
});})(g__14408__auto___14630))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__14408__auto___14630){
return (function (seq14549){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14549));
});})(g__14408__auto___14630))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__9886__auto__ = [];
var len__9879__auto___14636 = arguments.length;
var i__9880__auto___14637 = (0);
while(true){
if((i__9880__auto___14637 < len__9879__auto___14636)){
args__9886__auto__.push((arguments[i__9880__auto___14637]));

var G__14638 = (i__9880__auto___14637 + (1));
i__9880__auto___14637 = G__14638;
continue;
} else {
}
break;
}

var argseq__9887__auto__ = ((((0) < args__9886__auto__.length))?(new cljs.core.IndexedSeq(args__9886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9887__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__14634_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14634_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq14635){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14635));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__14639_SHARP_){
return (new Date(p1__14639_SHARP_));
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
