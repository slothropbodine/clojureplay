// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15302__i = 0, G__15302__a = new Array(arguments.length -  0);
while (G__15302__i < G__15302__a.length) {G__15302__a[G__15302__i] = arguments[G__15302__i + 0]; ++G__15302__i;}
  args = new cljs.core.IndexedSeq(G__15302__a,0,null);
} 
return G__15301__delegate.call(this,args);};
G__15301.cljs$lang$maxFixedArity = 0;
G__15301.cljs$lang$applyTo = (function (arglist__15303){
var args = cljs.core.seq(arglist__15303);
return G__15301__delegate(args);
});
G__15301.cljs$core$IFn$_invoke$arity$variadic = G__15301__delegate;
return G__15301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15305__i = 0, G__15305__a = new Array(arguments.length -  0);
while (G__15305__i < G__15305__a.length) {G__15305__a[G__15305__i] = arguments[G__15305__i + 0]; ++G__15305__i;}
  args = new cljs.core.IndexedSeq(G__15305__a,0,null);
} 
return G__15304__delegate.call(this,args);};
G__15304.cljs$lang$maxFixedArity = 0;
G__15304.cljs$lang$applyTo = (function (arglist__15306){
var args = cljs.core.seq(arglist__15306);
return G__15304__delegate(args);
});
G__15304.cljs$core$IFn$_invoke$arity$variadic = G__15304__delegate;
return G__15304;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
