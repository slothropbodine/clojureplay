// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13282 = arguments.length;
switch (G__13282) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13283 = (function (f,blockable,meta13284){
this.f = f;
this.blockable = blockable;
this.meta13284 = meta13284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13285,meta13284__$1){
var self__ = this;
var _13285__$1 = this;
return (new cljs.core.async.t_cljs$core$async13283(self__.f,self__.blockable,meta13284__$1));
});

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13285){
var self__ = this;
var _13285__$1 = this;
return self__.meta13284;
});

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13284","meta13284",1510191412,null)], null);
});

cljs.core.async.t_cljs$core$async13283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13283";

cljs.core.async.t_cljs$core$async13283.cljs$lang$ctorPrWriter = (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async13283");
});

cljs.core.async.__GT_t_cljs$core$async13283 = (function cljs$core$async$__GT_t_cljs$core$async13283(f__$1,blockable__$1,meta13284){
return (new cljs.core.async.t_cljs$core$async13283(f__$1,blockable__$1,meta13284));
});

}

return (new cljs.core.async.t_cljs$core$async13283(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13289 = arguments.length;
switch (G__13289) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13292 = arguments.length;
switch (G__13292) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13295 = arguments.length;
switch (G__13295) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13297 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13297);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13297,ret){
return (function (){
return fn1.call(null,val_13297);
});})(val_13297,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13299 = arguments.length;
switch (G__13299) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8918__auto___13301 = n;
var x_13302 = (0);
while(true){
if((x_13302 < n__8918__auto___13301)){
(a[x_13302] = (0));

var G__13303 = (x_13302 + (1));
x_13302 = G__13303;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13304 = (i + (1));
i = G__13304;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13305 = (function (flag,meta13306){
this.flag = flag;
this.meta13306 = meta13306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13307,meta13306__$1){
var self__ = this;
var _13307__$1 = this;
return (new cljs.core.async.t_cljs$core$async13305(self__.flag,meta13306__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13307){
var self__ = this;
var _13307__$1 = this;
return self__.meta13306;
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13306","meta13306",-1499386601,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13305";

cljs.core.async.t_cljs$core$async13305.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async13305");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13305 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13305(flag__$1,meta13306){
return (new cljs.core.async.t_cljs$core$async13305(flag__$1,meta13306));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13305(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13308 = (function (flag,cb,meta13309){
this.flag = flag;
this.cb = cb;
this.meta13309 = meta13309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13310,meta13309__$1){
var self__ = this;
var _13310__$1 = this;
return (new cljs.core.async.t_cljs$core$async13308(self__.flag,self__.cb,meta13309__$1));
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13310){
var self__ = this;
var _13310__$1 = this;
return self__.meta13309;
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13309","meta13309",1452536134,null)], null);
});

cljs.core.async.t_cljs$core$async13308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13308";

cljs.core.async.t_cljs$core$async13308.cljs$lang$ctorPrWriter = (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async13308");
});

cljs.core.async.__GT_t_cljs$core$async13308 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13308(flag__$1,cb__$1,meta13309){
return (new cljs.core.async.t_cljs$core$async13308(flag__$1,cb__$1,meta13309));
});

}

return (new cljs.core.async.t_cljs$core$async13308(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13311_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13311_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13312_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13312_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7973__auto__ = wport;
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13313 = (i + (1));
i = G__13313;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7973__auto__ = ret;
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7961__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7961__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7961__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9149__auto__ = [];
var len__9142__auto___13319 = arguments.length;
var i__9143__auto___13320 = (0);
while(true){
if((i__9143__auto___13320 < len__9142__auto___13319)){
args__9149__auto__.push((arguments[i__9143__auto___13320]));

var G__13321 = (i__9143__auto___13320 + (1));
i__9143__auto___13320 = G__13321;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((1) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9150__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13316){
var map__13317 = p__13316;
var map__13317__$1 = ((((!((map__13317 == null)))?((((map__13317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13317):map__13317);
var opts = map__13317__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13314){
var G__13315 = cljs.core.first.call(null,seq13314);
var seq13314__$1 = cljs.core.next.call(null,seq13314);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13315,seq13314__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13323 = arguments.length;
switch (G__13323) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11241__auto___13369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___13369){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___13369){
return (function (state_13347){
var state_val_13348 = (state_13347[(1)]);
if((state_val_13348 === (7))){
var inst_13343 = (state_13347[(2)]);
var state_13347__$1 = state_13347;
var statearr_13349_13370 = state_13347__$1;
(statearr_13349_13370[(2)] = inst_13343);

(statearr_13349_13370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (1))){
var state_13347__$1 = state_13347;
var statearr_13350_13371 = state_13347__$1;
(statearr_13350_13371[(2)] = null);

(statearr_13350_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (4))){
var inst_13326 = (state_13347[(7)]);
var inst_13326__$1 = (state_13347[(2)]);
var inst_13327 = (inst_13326__$1 == null);
var state_13347__$1 = (function (){var statearr_13351 = state_13347;
(statearr_13351[(7)] = inst_13326__$1);

return statearr_13351;
})();
if(cljs.core.truth_(inst_13327)){
var statearr_13352_13372 = state_13347__$1;
(statearr_13352_13372[(1)] = (5));

} else {
var statearr_13353_13373 = state_13347__$1;
(statearr_13353_13373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (13))){
var state_13347__$1 = state_13347;
var statearr_13354_13374 = state_13347__$1;
(statearr_13354_13374[(2)] = null);

(statearr_13354_13374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (6))){
var inst_13326 = (state_13347[(7)]);
var state_13347__$1 = state_13347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13347__$1,(11),to,inst_13326);
} else {
if((state_val_13348 === (3))){
var inst_13345 = (state_13347[(2)]);
var state_13347__$1 = state_13347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13347__$1,inst_13345);
} else {
if((state_val_13348 === (12))){
var state_13347__$1 = state_13347;
var statearr_13355_13375 = state_13347__$1;
(statearr_13355_13375[(2)] = null);

(statearr_13355_13375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (2))){
var state_13347__$1 = state_13347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13347__$1,(4),from);
} else {
if((state_val_13348 === (11))){
var inst_13336 = (state_13347[(2)]);
var state_13347__$1 = state_13347;
if(cljs.core.truth_(inst_13336)){
var statearr_13356_13376 = state_13347__$1;
(statearr_13356_13376[(1)] = (12));

} else {
var statearr_13357_13377 = state_13347__$1;
(statearr_13357_13377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (9))){
var state_13347__$1 = state_13347;
var statearr_13358_13378 = state_13347__$1;
(statearr_13358_13378[(2)] = null);

(statearr_13358_13378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (5))){
var state_13347__$1 = state_13347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13359_13379 = state_13347__$1;
(statearr_13359_13379[(1)] = (8));

} else {
var statearr_13360_13380 = state_13347__$1;
(statearr_13360_13380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (14))){
var inst_13341 = (state_13347[(2)]);
var state_13347__$1 = state_13347;
var statearr_13361_13381 = state_13347__$1;
(statearr_13361_13381[(2)] = inst_13341);

(statearr_13361_13381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (10))){
var inst_13333 = (state_13347[(2)]);
var state_13347__$1 = state_13347;
var statearr_13362_13382 = state_13347__$1;
(statearr_13362_13382[(2)] = inst_13333);

(statearr_13362_13382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13348 === (8))){
var inst_13330 = cljs.core.async.close_BANG_.call(null,to);
var state_13347__$1 = state_13347;
var statearr_13363_13383 = state_13347__$1;
(statearr_13363_13383[(2)] = inst_13330);

(statearr_13363_13383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___13369))
;
return ((function (switch__11226__auto__,c__11241__auto___13369){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_13364 = [null,null,null,null,null,null,null,null];
(statearr_13364[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_13364[(1)] = (1));

return statearr_13364;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_13347){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13365){if((e13365 instanceof Object)){
var ex__11230__auto__ = e13365;
var statearr_13366_13384 = state_13347;
(statearr_13366_13384[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13385 = state_13347;
state_13347 = G__13385;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_13347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_13347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___13369))
})();
var state__11243__auto__ = (function (){var statearr_13367 = f__11242__auto__.call(null);
(statearr_13367[(6)] = c__11241__auto___13369);

return statearr_13367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___13369))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13386){
var vec__13387 = p__13386;
var v = cljs.core.nth.call(null,vec__13387,(0),null);
var p = cljs.core.nth.call(null,vec__13387,(1),null);
var job = vec__13387;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11241__auto___13558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___13558,res,vec__13387,v,p,job,jobs,results){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___13558,res,vec__13387,v,p,job,jobs,results){
return (function (state_13394){
var state_val_13395 = (state_13394[(1)]);
if((state_val_13395 === (1))){
var state_13394__$1 = state_13394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13394__$1,(2),res,v);
} else {
if((state_val_13395 === (2))){
var inst_13391 = (state_13394[(2)]);
var inst_13392 = cljs.core.async.close_BANG_.call(null,res);
var state_13394__$1 = (function (){var statearr_13396 = state_13394;
(statearr_13396[(7)] = inst_13391);

return statearr_13396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13394__$1,inst_13392);
} else {
return null;
}
}
});})(c__11241__auto___13558,res,vec__13387,v,p,job,jobs,results))
;
return ((function (switch__11226__auto__,c__11241__auto___13558,res,vec__13387,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0 = (function (){
var statearr_13397 = [null,null,null,null,null,null,null,null];
(statearr_13397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__);

(statearr_13397[(1)] = (1));

return statearr_13397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1 = (function (state_13394){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13398){if((e13398 instanceof Object)){
var ex__11230__auto__ = e13398;
var statearr_13399_13559 = state_13394;
(statearr_13399_13559[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13560 = state_13394;
state_13394 = G__13560;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = function(state_13394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1.call(this,state_13394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___13558,res,vec__13387,v,p,job,jobs,results))
})();
var state__11243__auto__ = (function (){var statearr_13400 = f__11242__auto__.call(null);
(statearr_13400[(6)] = c__11241__auto___13558);

return statearr_13400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___13558,res,vec__13387,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13401){
var vec__13402 = p__13401;
var v = cljs.core.nth.call(null,vec__13402,(0),null);
var p = cljs.core.nth.call(null,vec__13402,(1),null);
var job = vec__13402;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8918__auto___13561 = n;
var __13562 = (0);
while(true){
if((__13562 < n__8918__auto___13561)){
var G__13405_13563 = type;
var G__13405_13564__$1 = (((G__13405_13563 instanceof cljs.core.Keyword))?G__13405_13563.fqn:null);
switch (G__13405_13564__$1) {
case "compute":
var c__11241__auto___13566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13562,c__11241__auto___13566,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (__13562,c__11241__auto___13566,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async){
return (function (state_13418){
var state_val_13419 = (state_13418[(1)]);
if((state_val_13419 === (1))){
var state_13418__$1 = state_13418;
var statearr_13420_13567 = state_13418__$1;
(statearr_13420_13567[(2)] = null);

(statearr_13420_13567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (2))){
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13418__$1,(4),jobs);
} else {
if((state_val_13419 === (3))){
var inst_13416 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13418__$1,inst_13416);
} else {
if((state_val_13419 === (4))){
var inst_13408 = (state_13418[(2)]);
var inst_13409 = process.call(null,inst_13408);
var state_13418__$1 = state_13418;
if(cljs.core.truth_(inst_13409)){
var statearr_13421_13568 = state_13418__$1;
(statearr_13421_13568[(1)] = (5));

} else {
var statearr_13422_13569 = state_13418__$1;
(statearr_13422_13569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (5))){
var state_13418__$1 = state_13418;
var statearr_13423_13570 = state_13418__$1;
(statearr_13423_13570[(2)] = null);

(statearr_13423_13570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (6))){
var state_13418__$1 = state_13418;
var statearr_13424_13571 = state_13418__$1;
(statearr_13424_13571[(2)] = null);

(statearr_13424_13571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (7))){
var inst_13414 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
var statearr_13425_13572 = state_13418__$1;
(statearr_13425_13572[(2)] = inst_13414);

(statearr_13425_13572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13562,c__11241__auto___13566,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async))
;
return ((function (__13562,switch__11226__auto__,c__11241__auto___13566,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0 = (function (){
var statearr_13426 = [null,null,null,null,null,null,null];
(statearr_13426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__);

(statearr_13426[(1)] = (1));

return statearr_13426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1 = (function (state_13418){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13427){if((e13427 instanceof Object)){
var ex__11230__auto__ = e13427;
var statearr_13428_13573 = state_13418;
(statearr_13428_13573[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13574 = state_13418;
state_13418 = G__13574;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = function(state_13418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1.call(this,state_13418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__;
})()
;})(__13562,switch__11226__auto__,c__11241__auto___13566,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async))
})();
var state__11243__auto__ = (function (){var statearr_13429 = f__11242__auto__.call(null);
(statearr_13429[(6)] = c__11241__auto___13566);

return statearr_13429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(__13562,c__11241__auto___13566,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async))
);


break;
case "async":
var c__11241__auto___13575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13562,c__11241__auto___13575,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (__13562,c__11241__auto___13575,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async){
return (function (state_13442){
var state_val_13443 = (state_13442[(1)]);
if((state_val_13443 === (1))){
var state_13442__$1 = state_13442;
var statearr_13444_13576 = state_13442__$1;
(statearr_13444_13576[(2)] = null);

(statearr_13444_13576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (2))){
var state_13442__$1 = state_13442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13442__$1,(4),jobs);
} else {
if((state_val_13443 === (3))){
var inst_13440 = (state_13442[(2)]);
var state_13442__$1 = state_13442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13442__$1,inst_13440);
} else {
if((state_val_13443 === (4))){
var inst_13432 = (state_13442[(2)]);
var inst_13433 = async.call(null,inst_13432);
var state_13442__$1 = state_13442;
if(cljs.core.truth_(inst_13433)){
var statearr_13445_13577 = state_13442__$1;
(statearr_13445_13577[(1)] = (5));

} else {
var statearr_13446_13578 = state_13442__$1;
(statearr_13446_13578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (5))){
var state_13442__$1 = state_13442;
var statearr_13447_13579 = state_13442__$1;
(statearr_13447_13579[(2)] = null);

(statearr_13447_13579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (6))){
var state_13442__$1 = state_13442;
var statearr_13448_13580 = state_13442__$1;
(statearr_13448_13580[(2)] = null);

(statearr_13448_13580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13443 === (7))){
var inst_13438 = (state_13442[(2)]);
var state_13442__$1 = state_13442;
var statearr_13449_13581 = state_13442__$1;
(statearr_13449_13581[(2)] = inst_13438);

(statearr_13449_13581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13562,c__11241__auto___13575,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async))
;
return ((function (__13562,switch__11226__auto__,c__11241__auto___13575,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0 = (function (){
var statearr_13450 = [null,null,null,null,null,null,null];
(statearr_13450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__);

(statearr_13450[(1)] = (1));

return statearr_13450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1 = (function (state_13442){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13451){if((e13451 instanceof Object)){
var ex__11230__auto__ = e13451;
var statearr_13452_13582 = state_13442;
(statearr_13452_13582[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13583 = state_13442;
state_13442 = G__13583;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = function(state_13442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1.call(this,state_13442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__;
})()
;})(__13562,switch__11226__auto__,c__11241__auto___13575,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async))
})();
var state__11243__auto__ = (function (){var statearr_13453 = f__11242__auto__.call(null);
(statearr_13453[(6)] = c__11241__auto___13575);

return statearr_13453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(__13562,c__11241__auto___13575,G__13405_13563,G__13405_13564__$1,n__8918__auto___13561,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13405_13564__$1)].join('')));

}

var G__13584 = (__13562 + (1));
__13562 = G__13584;
continue;
} else {
}
break;
}

var c__11241__auto___13585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___13585,jobs,results,process,async){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___13585,jobs,results,process,async){
return (function (state_13475){
var state_val_13476 = (state_13475[(1)]);
if((state_val_13476 === (1))){
var state_13475__$1 = state_13475;
var statearr_13477_13586 = state_13475__$1;
(statearr_13477_13586[(2)] = null);

(statearr_13477_13586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (2))){
var state_13475__$1 = state_13475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13475__$1,(4),from);
} else {
if((state_val_13476 === (3))){
var inst_13473 = (state_13475[(2)]);
var state_13475__$1 = state_13475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13475__$1,inst_13473);
} else {
if((state_val_13476 === (4))){
var inst_13456 = (state_13475[(7)]);
var inst_13456__$1 = (state_13475[(2)]);
var inst_13457 = (inst_13456__$1 == null);
var state_13475__$1 = (function (){var statearr_13478 = state_13475;
(statearr_13478[(7)] = inst_13456__$1);

return statearr_13478;
})();
if(cljs.core.truth_(inst_13457)){
var statearr_13479_13587 = state_13475__$1;
(statearr_13479_13587[(1)] = (5));

} else {
var statearr_13480_13588 = state_13475__$1;
(statearr_13480_13588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (5))){
var inst_13459 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13475__$1 = state_13475;
var statearr_13481_13589 = state_13475__$1;
(statearr_13481_13589[(2)] = inst_13459);

(statearr_13481_13589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (6))){
var inst_13456 = (state_13475[(7)]);
var inst_13461 = (state_13475[(8)]);
var inst_13461__$1 = cljs.core.async.chan.call(null,(1));
var inst_13462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13463 = [inst_13456,inst_13461__$1];
var inst_13464 = (new cljs.core.PersistentVector(null,2,(5),inst_13462,inst_13463,null));
var state_13475__$1 = (function (){var statearr_13482 = state_13475;
(statearr_13482[(8)] = inst_13461__$1);

return statearr_13482;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13475__$1,(8),jobs,inst_13464);
} else {
if((state_val_13476 === (7))){
var inst_13471 = (state_13475[(2)]);
var state_13475__$1 = state_13475;
var statearr_13483_13590 = state_13475__$1;
(statearr_13483_13590[(2)] = inst_13471);

(statearr_13483_13590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (8))){
var inst_13461 = (state_13475[(8)]);
var inst_13466 = (state_13475[(2)]);
var state_13475__$1 = (function (){var statearr_13484 = state_13475;
(statearr_13484[(9)] = inst_13466);

return statearr_13484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13475__$1,(9),results,inst_13461);
} else {
if((state_val_13476 === (9))){
var inst_13468 = (state_13475[(2)]);
var state_13475__$1 = (function (){var statearr_13485 = state_13475;
(statearr_13485[(10)] = inst_13468);

return statearr_13485;
})();
var statearr_13486_13591 = state_13475__$1;
(statearr_13486_13591[(2)] = null);

(statearr_13486_13591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___13585,jobs,results,process,async))
;
return ((function (switch__11226__auto__,c__11241__auto___13585,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0 = (function (){
var statearr_13487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__);

(statearr_13487[(1)] = (1));

return statearr_13487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1 = (function (state_13475){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13488){if((e13488 instanceof Object)){
var ex__11230__auto__ = e13488;
var statearr_13489_13592 = state_13475;
(statearr_13489_13592[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13593 = state_13475;
state_13475 = G__13593;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = function(state_13475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1.call(this,state_13475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___13585,jobs,results,process,async))
})();
var state__11243__auto__ = (function (){var statearr_13490 = f__11242__auto__.call(null);
(statearr_13490[(6)] = c__11241__auto___13585);

return statearr_13490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___13585,jobs,results,process,async))
);


var c__11241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto__,jobs,results,process,async){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto__,jobs,results,process,async){
return (function (state_13528){
var state_val_13529 = (state_13528[(1)]);
if((state_val_13529 === (7))){
var inst_13524 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13530_13594 = state_13528__$1;
(statearr_13530_13594[(2)] = inst_13524);

(statearr_13530_13594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (20))){
var state_13528__$1 = state_13528;
var statearr_13531_13595 = state_13528__$1;
(statearr_13531_13595[(2)] = null);

(statearr_13531_13595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (1))){
var state_13528__$1 = state_13528;
var statearr_13532_13596 = state_13528__$1;
(statearr_13532_13596[(2)] = null);

(statearr_13532_13596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (4))){
var inst_13493 = (state_13528[(7)]);
var inst_13493__$1 = (state_13528[(2)]);
var inst_13494 = (inst_13493__$1 == null);
var state_13528__$1 = (function (){var statearr_13533 = state_13528;
(statearr_13533[(7)] = inst_13493__$1);

return statearr_13533;
})();
if(cljs.core.truth_(inst_13494)){
var statearr_13534_13597 = state_13528__$1;
(statearr_13534_13597[(1)] = (5));

} else {
var statearr_13535_13598 = state_13528__$1;
(statearr_13535_13598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (15))){
var inst_13506 = (state_13528[(8)]);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13528__$1,(18),to,inst_13506);
} else {
if((state_val_13529 === (21))){
var inst_13519 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13536_13599 = state_13528__$1;
(statearr_13536_13599[(2)] = inst_13519);

(statearr_13536_13599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (13))){
var inst_13521 = (state_13528[(2)]);
var state_13528__$1 = (function (){var statearr_13537 = state_13528;
(statearr_13537[(9)] = inst_13521);

return statearr_13537;
})();
var statearr_13538_13600 = state_13528__$1;
(statearr_13538_13600[(2)] = null);

(statearr_13538_13600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (6))){
var inst_13493 = (state_13528[(7)]);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13528__$1,(11),inst_13493);
} else {
if((state_val_13529 === (17))){
var inst_13514 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
if(cljs.core.truth_(inst_13514)){
var statearr_13539_13601 = state_13528__$1;
(statearr_13539_13601[(1)] = (19));

} else {
var statearr_13540_13602 = state_13528__$1;
(statearr_13540_13602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (3))){
var inst_13526 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13528__$1,inst_13526);
} else {
if((state_val_13529 === (12))){
var inst_13503 = (state_13528[(10)]);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13528__$1,(14),inst_13503);
} else {
if((state_val_13529 === (2))){
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13528__$1,(4),results);
} else {
if((state_val_13529 === (19))){
var state_13528__$1 = state_13528;
var statearr_13541_13603 = state_13528__$1;
(statearr_13541_13603[(2)] = null);

(statearr_13541_13603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (11))){
var inst_13503 = (state_13528[(2)]);
var state_13528__$1 = (function (){var statearr_13542 = state_13528;
(statearr_13542[(10)] = inst_13503);

return statearr_13542;
})();
var statearr_13543_13604 = state_13528__$1;
(statearr_13543_13604[(2)] = null);

(statearr_13543_13604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (9))){
var state_13528__$1 = state_13528;
var statearr_13544_13605 = state_13528__$1;
(statearr_13544_13605[(2)] = null);

(statearr_13544_13605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (5))){
var state_13528__$1 = state_13528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13545_13606 = state_13528__$1;
(statearr_13545_13606[(1)] = (8));

} else {
var statearr_13546_13607 = state_13528__$1;
(statearr_13546_13607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (14))){
var inst_13508 = (state_13528[(11)]);
var inst_13506 = (state_13528[(8)]);
var inst_13506__$1 = (state_13528[(2)]);
var inst_13507 = (inst_13506__$1 == null);
var inst_13508__$1 = cljs.core.not.call(null,inst_13507);
var state_13528__$1 = (function (){var statearr_13547 = state_13528;
(statearr_13547[(11)] = inst_13508__$1);

(statearr_13547[(8)] = inst_13506__$1);

return statearr_13547;
})();
if(inst_13508__$1){
var statearr_13548_13608 = state_13528__$1;
(statearr_13548_13608[(1)] = (15));

} else {
var statearr_13549_13609 = state_13528__$1;
(statearr_13549_13609[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (16))){
var inst_13508 = (state_13528[(11)]);
var state_13528__$1 = state_13528;
var statearr_13550_13610 = state_13528__$1;
(statearr_13550_13610[(2)] = inst_13508);

(statearr_13550_13610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (10))){
var inst_13500 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13551_13611 = state_13528__$1;
(statearr_13551_13611[(2)] = inst_13500);

(statearr_13551_13611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (18))){
var inst_13511 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13552_13612 = state_13528__$1;
(statearr_13552_13612[(2)] = inst_13511);

(statearr_13552_13612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (8))){
var inst_13497 = cljs.core.async.close_BANG_.call(null,to);
var state_13528__$1 = state_13528;
var statearr_13553_13613 = state_13528__$1;
(statearr_13553_13613[(2)] = inst_13497);

(statearr_13553_13613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto__,jobs,results,process,async))
;
return ((function (switch__11226__auto__,c__11241__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0 = (function (){
var statearr_13554 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__);

(statearr_13554[(1)] = (1));

return statearr_13554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1 = (function (state_13528){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13555){if((e13555 instanceof Object)){
var ex__11230__auto__ = e13555;
var statearr_13556_13614 = state_13528;
(statearr_13556_13614[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13615 = state_13528;
state_13528 = G__13615;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__ = function(state_13528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1.call(this,state_13528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto__,jobs,results,process,async))
})();
var state__11243__auto__ = (function (){var statearr_13557 = f__11242__auto__.call(null);
(statearr_13557[(6)] = c__11241__auto__);

return statearr_13557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto__,jobs,results,process,async))
);

return c__11241__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13617 = arguments.length;
switch (G__13617) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13620 = arguments.length;
switch (G__13620) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13623 = arguments.length;
switch (G__13623) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11241__auto___13672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___13672,tc,fc){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___13672,tc,fc){
return (function (state_13649){
var state_val_13650 = (state_13649[(1)]);
if((state_val_13650 === (7))){
var inst_13645 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
var statearr_13651_13673 = state_13649__$1;
(statearr_13651_13673[(2)] = inst_13645);

(statearr_13651_13673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (1))){
var state_13649__$1 = state_13649;
var statearr_13652_13674 = state_13649__$1;
(statearr_13652_13674[(2)] = null);

(statearr_13652_13674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (4))){
var inst_13626 = (state_13649[(7)]);
var inst_13626__$1 = (state_13649[(2)]);
var inst_13627 = (inst_13626__$1 == null);
var state_13649__$1 = (function (){var statearr_13653 = state_13649;
(statearr_13653[(7)] = inst_13626__$1);

return statearr_13653;
})();
if(cljs.core.truth_(inst_13627)){
var statearr_13654_13675 = state_13649__$1;
(statearr_13654_13675[(1)] = (5));

} else {
var statearr_13655_13676 = state_13649__$1;
(statearr_13655_13676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (13))){
var state_13649__$1 = state_13649;
var statearr_13656_13677 = state_13649__$1;
(statearr_13656_13677[(2)] = null);

(statearr_13656_13677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (6))){
var inst_13626 = (state_13649[(7)]);
var inst_13632 = p.call(null,inst_13626);
var state_13649__$1 = state_13649;
if(cljs.core.truth_(inst_13632)){
var statearr_13657_13678 = state_13649__$1;
(statearr_13657_13678[(1)] = (9));

} else {
var statearr_13658_13679 = state_13649__$1;
(statearr_13658_13679[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (3))){
var inst_13647 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13649__$1,inst_13647);
} else {
if((state_val_13650 === (12))){
var state_13649__$1 = state_13649;
var statearr_13659_13680 = state_13649__$1;
(statearr_13659_13680[(2)] = null);

(statearr_13659_13680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (2))){
var state_13649__$1 = state_13649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13649__$1,(4),ch);
} else {
if((state_val_13650 === (11))){
var inst_13626 = (state_13649[(7)]);
var inst_13636 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13649__$1,(8),inst_13636,inst_13626);
} else {
if((state_val_13650 === (9))){
var state_13649__$1 = state_13649;
var statearr_13660_13681 = state_13649__$1;
(statearr_13660_13681[(2)] = tc);

(statearr_13660_13681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (5))){
var inst_13629 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13630 = cljs.core.async.close_BANG_.call(null,fc);
var state_13649__$1 = (function (){var statearr_13661 = state_13649;
(statearr_13661[(8)] = inst_13629);

return statearr_13661;
})();
var statearr_13662_13682 = state_13649__$1;
(statearr_13662_13682[(2)] = inst_13630);

(statearr_13662_13682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (14))){
var inst_13643 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
var statearr_13663_13683 = state_13649__$1;
(statearr_13663_13683[(2)] = inst_13643);

(statearr_13663_13683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (10))){
var state_13649__$1 = state_13649;
var statearr_13664_13684 = state_13649__$1;
(statearr_13664_13684[(2)] = fc);

(statearr_13664_13684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13650 === (8))){
var inst_13638 = (state_13649[(2)]);
var state_13649__$1 = state_13649;
if(cljs.core.truth_(inst_13638)){
var statearr_13665_13685 = state_13649__$1;
(statearr_13665_13685[(1)] = (12));

} else {
var statearr_13666_13686 = state_13649__$1;
(statearr_13666_13686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___13672,tc,fc))
;
return ((function (switch__11226__auto__,c__11241__auto___13672,tc,fc){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_13667 = [null,null,null,null,null,null,null,null,null];
(statearr_13667[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_13667[(1)] = (1));

return statearr_13667;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_13649){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13668){if((e13668 instanceof Object)){
var ex__11230__auto__ = e13668;
var statearr_13669_13687 = state_13649;
(statearr_13669_13687[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13688 = state_13649;
state_13649 = G__13688;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_13649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_13649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___13672,tc,fc))
})();
var state__11243__auto__ = (function (){var statearr_13670 = f__11242__auto__.call(null);
(statearr_13670[(6)] = c__11241__auto___13672);

return statearr_13670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___13672,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto__){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto__){
return (function (state_13709){
var state_val_13710 = (state_13709[(1)]);
if((state_val_13710 === (7))){
var inst_13705 = (state_13709[(2)]);
var state_13709__$1 = state_13709;
var statearr_13711_13729 = state_13709__$1;
(statearr_13711_13729[(2)] = inst_13705);

(statearr_13711_13729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (1))){
var inst_13689 = init;
var state_13709__$1 = (function (){var statearr_13712 = state_13709;
(statearr_13712[(7)] = inst_13689);

return statearr_13712;
})();
var statearr_13713_13730 = state_13709__$1;
(statearr_13713_13730[(2)] = null);

(statearr_13713_13730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (4))){
var inst_13692 = (state_13709[(8)]);
var inst_13692__$1 = (state_13709[(2)]);
var inst_13693 = (inst_13692__$1 == null);
var state_13709__$1 = (function (){var statearr_13714 = state_13709;
(statearr_13714[(8)] = inst_13692__$1);

return statearr_13714;
})();
if(cljs.core.truth_(inst_13693)){
var statearr_13715_13731 = state_13709__$1;
(statearr_13715_13731[(1)] = (5));

} else {
var statearr_13716_13732 = state_13709__$1;
(statearr_13716_13732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (6))){
var inst_13689 = (state_13709[(7)]);
var inst_13692 = (state_13709[(8)]);
var inst_13696 = (state_13709[(9)]);
var inst_13696__$1 = f.call(null,inst_13689,inst_13692);
var inst_13697 = cljs.core.reduced_QMARK_.call(null,inst_13696__$1);
var state_13709__$1 = (function (){var statearr_13717 = state_13709;
(statearr_13717[(9)] = inst_13696__$1);

return statearr_13717;
})();
if(inst_13697){
var statearr_13718_13733 = state_13709__$1;
(statearr_13718_13733[(1)] = (8));

} else {
var statearr_13719_13734 = state_13709__$1;
(statearr_13719_13734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (3))){
var inst_13707 = (state_13709[(2)]);
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13709__$1,inst_13707);
} else {
if((state_val_13710 === (2))){
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13709__$1,(4),ch);
} else {
if((state_val_13710 === (9))){
var inst_13696 = (state_13709[(9)]);
var inst_13689 = inst_13696;
var state_13709__$1 = (function (){var statearr_13720 = state_13709;
(statearr_13720[(7)] = inst_13689);

return statearr_13720;
})();
var statearr_13721_13735 = state_13709__$1;
(statearr_13721_13735[(2)] = null);

(statearr_13721_13735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (5))){
var inst_13689 = (state_13709[(7)]);
var state_13709__$1 = state_13709;
var statearr_13722_13736 = state_13709__$1;
(statearr_13722_13736[(2)] = inst_13689);

(statearr_13722_13736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (10))){
var inst_13703 = (state_13709[(2)]);
var state_13709__$1 = state_13709;
var statearr_13723_13737 = state_13709__$1;
(statearr_13723_13737[(2)] = inst_13703);

(statearr_13723_13737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13710 === (8))){
var inst_13696 = (state_13709[(9)]);
var inst_13699 = cljs.core.deref.call(null,inst_13696);
var state_13709__$1 = state_13709;
var statearr_13724_13738 = state_13709__$1;
(statearr_13724_13738[(2)] = inst_13699);

(statearr_13724_13738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto__))
;
return ((function (switch__11226__auto__,c__11241__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11227__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11227__auto____0 = (function (){
var statearr_13725 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13725[(0)] = cljs$core$async$reduce_$_state_machine__11227__auto__);

(statearr_13725[(1)] = (1));

return statearr_13725;
});
var cljs$core$async$reduce_$_state_machine__11227__auto____1 = (function (state_13709){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13726){if((e13726 instanceof Object)){
var ex__11230__auto__ = e13726;
var statearr_13727_13739 = state_13709;
(statearr_13727_13739[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13740 = state_13709;
state_13709 = G__13740;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11227__auto__ = function(state_13709){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11227__auto____1.call(this,state_13709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11227__auto____0;
cljs$core$async$reduce_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11227__auto____1;
return cljs$core$async$reduce_$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto__))
})();
var state__11243__auto__ = (function (){var statearr_13728 = f__11242__auto__.call(null);
(statearr_13728[(6)] = c__11241__auto__);

return statearr_13728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto__))
);

return c__11241__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto__,f__$1){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto__,f__$1){
return (function (state_13746){
var state_val_13747 = (state_13746[(1)]);
if((state_val_13747 === (1))){
var inst_13741 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13746__$1 = state_13746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13746__$1,(2),inst_13741);
} else {
if((state_val_13747 === (2))){
var inst_13743 = (state_13746[(2)]);
var inst_13744 = f__$1.call(null,inst_13743);
var state_13746__$1 = state_13746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13746__$1,inst_13744);
} else {
return null;
}
}
});})(c__11241__auto__,f__$1))
;
return ((function (switch__11226__auto__,c__11241__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__11227__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11227__auto____0 = (function (){
var statearr_13748 = [null,null,null,null,null,null,null];
(statearr_13748[(0)] = cljs$core$async$transduce_$_state_machine__11227__auto__);

(statearr_13748[(1)] = (1));

return statearr_13748;
});
var cljs$core$async$transduce_$_state_machine__11227__auto____1 = (function (state_13746){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13749){if((e13749 instanceof Object)){
var ex__11230__auto__ = e13749;
var statearr_13750_13752 = state_13746;
(statearr_13750_13752[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13753 = state_13746;
state_13746 = G__13753;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11227__auto__ = function(state_13746){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11227__auto____1.call(this,state_13746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11227__auto____0;
cljs$core$async$transduce_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11227__auto____1;
return cljs$core$async$transduce_$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto__,f__$1))
})();
var state__11243__auto__ = (function (){var statearr_13751 = f__11242__auto__.call(null);
(statearr_13751[(6)] = c__11241__auto__);

return statearr_13751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto__,f__$1))
);

return c__11241__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13755 = arguments.length;
switch (G__13755) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto__){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto__){
return (function (state_13780){
var state_val_13781 = (state_13780[(1)]);
if((state_val_13781 === (7))){
var inst_13762 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
var statearr_13782_13803 = state_13780__$1;
(statearr_13782_13803[(2)] = inst_13762);

(statearr_13782_13803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (1))){
var inst_13756 = cljs.core.seq.call(null,coll);
var inst_13757 = inst_13756;
var state_13780__$1 = (function (){var statearr_13783 = state_13780;
(statearr_13783[(7)] = inst_13757);

return statearr_13783;
})();
var statearr_13784_13804 = state_13780__$1;
(statearr_13784_13804[(2)] = null);

(statearr_13784_13804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (4))){
var inst_13757 = (state_13780[(7)]);
var inst_13760 = cljs.core.first.call(null,inst_13757);
var state_13780__$1 = state_13780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13780__$1,(7),ch,inst_13760);
} else {
if((state_val_13781 === (13))){
var inst_13774 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
var statearr_13785_13805 = state_13780__$1;
(statearr_13785_13805[(2)] = inst_13774);

(statearr_13785_13805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (6))){
var inst_13765 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
if(cljs.core.truth_(inst_13765)){
var statearr_13786_13806 = state_13780__$1;
(statearr_13786_13806[(1)] = (8));

} else {
var statearr_13787_13807 = state_13780__$1;
(statearr_13787_13807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (3))){
var inst_13778 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13780__$1,inst_13778);
} else {
if((state_val_13781 === (12))){
var state_13780__$1 = state_13780;
var statearr_13788_13808 = state_13780__$1;
(statearr_13788_13808[(2)] = null);

(statearr_13788_13808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (2))){
var inst_13757 = (state_13780[(7)]);
var state_13780__$1 = state_13780;
if(cljs.core.truth_(inst_13757)){
var statearr_13789_13809 = state_13780__$1;
(statearr_13789_13809[(1)] = (4));

} else {
var statearr_13790_13810 = state_13780__$1;
(statearr_13790_13810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (11))){
var inst_13771 = cljs.core.async.close_BANG_.call(null,ch);
var state_13780__$1 = state_13780;
var statearr_13791_13811 = state_13780__$1;
(statearr_13791_13811[(2)] = inst_13771);

(statearr_13791_13811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (9))){
var state_13780__$1 = state_13780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13792_13812 = state_13780__$1;
(statearr_13792_13812[(1)] = (11));

} else {
var statearr_13793_13813 = state_13780__$1;
(statearr_13793_13813[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (5))){
var inst_13757 = (state_13780[(7)]);
var state_13780__$1 = state_13780;
var statearr_13794_13814 = state_13780__$1;
(statearr_13794_13814[(2)] = inst_13757);

(statearr_13794_13814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (10))){
var inst_13776 = (state_13780[(2)]);
var state_13780__$1 = state_13780;
var statearr_13795_13815 = state_13780__$1;
(statearr_13795_13815[(2)] = inst_13776);

(statearr_13795_13815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13781 === (8))){
var inst_13757 = (state_13780[(7)]);
var inst_13767 = cljs.core.next.call(null,inst_13757);
var inst_13757__$1 = inst_13767;
var state_13780__$1 = (function (){var statearr_13796 = state_13780;
(statearr_13796[(7)] = inst_13757__$1);

return statearr_13796;
})();
var statearr_13797_13816 = state_13780__$1;
(statearr_13797_13816[(2)] = null);

(statearr_13797_13816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto__))
;
return ((function (switch__11226__auto__,c__11241__auto__){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_13798 = [null,null,null,null,null,null,null,null];
(statearr_13798[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_13798[(1)] = (1));

return statearr_13798;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_13780){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e13799){if((e13799 instanceof Object)){
var ex__11230__auto__ = e13799;
var statearr_13800_13817 = state_13780;
(statearr_13800_13817[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13818 = state_13780;
state_13780 = G__13818;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_13780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_13780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto__))
})();
var state__11243__auto__ = (function (){var statearr_13801 = f__11242__auto__.call(null);
(statearr_13801[(6)] = c__11241__auto__);

return statearr_13801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto__))
);

return c__11241__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8656__auto__ = (((_ == null))?null:_);
var m__8657__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,_);
} else {
var m__8657__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8657__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m,ch);
} else {
var m__8657__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m);
} else {
var m__8657__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13819 = (function (ch,cs,meta13820){
this.ch = ch;
this.cs = cs;
this.meta13820 = meta13820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13821,meta13820__$1){
var self__ = this;
var _13821__$1 = this;
return (new cljs.core.async.t_cljs$core$async13819(self__.ch,self__.cs,meta13820__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13821){
var self__ = this;
var _13821__$1 = this;
return self__.meta13820;
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13820","meta13820",1561082374,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13819";

cljs.core.async.t_cljs$core$async13819.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async13819");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13819 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13819(ch__$1,cs__$1,meta13820){
return (new cljs.core.async.t_cljs$core$async13819(ch__$1,cs__$1,meta13820));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13819(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11241__auto___14041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14041,cs,m,dchan,dctr,done){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14041,cs,m,dchan,dctr,done){
return (function (state_13956){
var state_val_13957 = (state_13956[(1)]);
if((state_val_13957 === (7))){
var inst_13952 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_13958_14042 = state_13956__$1;
(statearr_13958_14042[(2)] = inst_13952);

(statearr_13958_14042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (20))){
var inst_13855 = (state_13956[(7)]);
var inst_13867 = cljs.core.first.call(null,inst_13855);
var inst_13868 = cljs.core.nth.call(null,inst_13867,(0),null);
var inst_13869 = cljs.core.nth.call(null,inst_13867,(1),null);
var state_13956__$1 = (function (){var statearr_13959 = state_13956;
(statearr_13959[(8)] = inst_13868);

return statearr_13959;
})();
if(cljs.core.truth_(inst_13869)){
var statearr_13960_14043 = state_13956__$1;
(statearr_13960_14043[(1)] = (22));

} else {
var statearr_13961_14044 = state_13956__$1;
(statearr_13961_14044[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (27))){
var inst_13899 = (state_13956[(9)]);
var inst_13904 = (state_13956[(10)]);
var inst_13897 = (state_13956[(11)]);
var inst_13824 = (state_13956[(12)]);
var inst_13904__$1 = cljs.core._nth.call(null,inst_13897,inst_13899);
var inst_13905 = cljs.core.async.put_BANG_.call(null,inst_13904__$1,inst_13824,done);
var state_13956__$1 = (function (){var statearr_13962 = state_13956;
(statearr_13962[(10)] = inst_13904__$1);

return statearr_13962;
})();
if(cljs.core.truth_(inst_13905)){
var statearr_13963_14045 = state_13956__$1;
(statearr_13963_14045[(1)] = (30));

} else {
var statearr_13964_14046 = state_13956__$1;
(statearr_13964_14046[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (1))){
var state_13956__$1 = state_13956;
var statearr_13965_14047 = state_13956__$1;
(statearr_13965_14047[(2)] = null);

(statearr_13965_14047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (24))){
var inst_13855 = (state_13956[(7)]);
var inst_13874 = (state_13956[(2)]);
var inst_13875 = cljs.core.next.call(null,inst_13855);
var inst_13833 = inst_13875;
var inst_13834 = null;
var inst_13835 = (0);
var inst_13836 = (0);
var state_13956__$1 = (function (){var statearr_13966 = state_13956;
(statearr_13966[(13)] = inst_13833);

(statearr_13966[(14)] = inst_13834);

(statearr_13966[(15)] = inst_13836);

(statearr_13966[(16)] = inst_13835);

(statearr_13966[(17)] = inst_13874);

return statearr_13966;
})();
var statearr_13967_14048 = state_13956__$1;
(statearr_13967_14048[(2)] = null);

(statearr_13967_14048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (39))){
var state_13956__$1 = state_13956;
var statearr_13971_14049 = state_13956__$1;
(statearr_13971_14049[(2)] = null);

(statearr_13971_14049[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (4))){
var inst_13824 = (state_13956[(12)]);
var inst_13824__$1 = (state_13956[(2)]);
var inst_13825 = (inst_13824__$1 == null);
var state_13956__$1 = (function (){var statearr_13972 = state_13956;
(statearr_13972[(12)] = inst_13824__$1);

return statearr_13972;
})();
if(cljs.core.truth_(inst_13825)){
var statearr_13973_14050 = state_13956__$1;
(statearr_13973_14050[(1)] = (5));

} else {
var statearr_13974_14051 = state_13956__$1;
(statearr_13974_14051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (15))){
var inst_13833 = (state_13956[(13)]);
var inst_13834 = (state_13956[(14)]);
var inst_13836 = (state_13956[(15)]);
var inst_13835 = (state_13956[(16)]);
var inst_13851 = (state_13956[(2)]);
var inst_13852 = (inst_13836 + (1));
var tmp13968 = inst_13833;
var tmp13969 = inst_13834;
var tmp13970 = inst_13835;
var inst_13833__$1 = tmp13968;
var inst_13834__$1 = tmp13969;
var inst_13835__$1 = tmp13970;
var inst_13836__$1 = inst_13852;
var state_13956__$1 = (function (){var statearr_13975 = state_13956;
(statearr_13975[(13)] = inst_13833__$1);

(statearr_13975[(14)] = inst_13834__$1);

(statearr_13975[(15)] = inst_13836__$1);

(statearr_13975[(16)] = inst_13835__$1);

(statearr_13975[(18)] = inst_13851);

return statearr_13975;
})();
var statearr_13976_14052 = state_13956__$1;
(statearr_13976_14052[(2)] = null);

(statearr_13976_14052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (21))){
var inst_13878 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_13980_14053 = state_13956__$1;
(statearr_13980_14053[(2)] = inst_13878);

(statearr_13980_14053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (31))){
var inst_13904 = (state_13956[(10)]);
var inst_13908 = done.call(null,null);
var inst_13909 = cljs.core.async.untap_STAR_.call(null,m,inst_13904);
var state_13956__$1 = (function (){var statearr_13981 = state_13956;
(statearr_13981[(19)] = inst_13908);

return statearr_13981;
})();
var statearr_13982_14054 = state_13956__$1;
(statearr_13982_14054[(2)] = inst_13909);

(statearr_13982_14054[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (32))){
var inst_13899 = (state_13956[(9)]);
var inst_13897 = (state_13956[(11)]);
var inst_13896 = (state_13956[(20)]);
var inst_13898 = (state_13956[(21)]);
var inst_13911 = (state_13956[(2)]);
var inst_13912 = (inst_13899 + (1));
var tmp13977 = inst_13897;
var tmp13978 = inst_13896;
var tmp13979 = inst_13898;
var inst_13896__$1 = tmp13978;
var inst_13897__$1 = tmp13977;
var inst_13898__$1 = tmp13979;
var inst_13899__$1 = inst_13912;
var state_13956__$1 = (function (){var statearr_13983 = state_13956;
(statearr_13983[(22)] = inst_13911);

(statearr_13983[(9)] = inst_13899__$1);

(statearr_13983[(11)] = inst_13897__$1);

(statearr_13983[(20)] = inst_13896__$1);

(statearr_13983[(21)] = inst_13898__$1);

return statearr_13983;
})();
var statearr_13984_14055 = state_13956__$1;
(statearr_13984_14055[(2)] = null);

(statearr_13984_14055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (40))){
var inst_13924 = (state_13956[(23)]);
var inst_13928 = done.call(null,null);
var inst_13929 = cljs.core.async.untap_STAR_.call(null,m,inst_13924);
var state_13956__$1 = (function (){var statearr_13985 = state_13956;
(statearr_13985[(24)] = inst_13928);

return statearr_13985;
})();
var statearr_13986_14056 = state_13956__$1;
(statearr_13986_14056[(2)] = inst_13929);

(statearr_13986_14056[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (33))){
var inst_13915 = (state_13956[(25)]);
var inst_13917 = cljs.core.chunked_seq_QMARK_.call(null,inst_13915);
var state_13956__$1 = state_13956;
if(inst_13917){
var statearr_13987_14057 = state_13956__$1;
(statearr_13987_14057[(1)] = (36));

} else {
var statearr_13988_14058 = state_13956__$1;
(statearr_13988_14058[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (13))){
var inst_13845 = (state_13956[(26)]);
var inst_13848 = cljs.core.async.close_BANG_.call(null,inst_13845);
var state_13956__$1 = state_13956;
var statearr_13989_14059 = state_13956__$1;
(statearr_13989_14059[(2)] = inst_13848);

(statearr_13989_14059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (22))){
var inst_13868 = (state_13956[(8)]);
var inst_13871 = cljs.core.async.close_BANG_.call(null,inst_13868);
var state_13956__$1 = state_13956;
var statearr_13990_14060 = state_13956__$1;
(statearr_13990_14060[(2)] = inst_13871);

(statearr_13990_14060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (36))){
var inst_13915 = (state_13956[(25)]);
var inst_13919 = cljs.core.chunk_first.call(null,inst_13915);
var inst_13920 = cljs.core.chunk_rest.call(null,inst_13915);
var inst_13921 = cljs.core.count.call(null,inst_13919);
var inst_13896 = inst_13920;
var inst_13897 = inst_13919;
var inst_13898 = inst_13921;
var inst_13899 = (0);
var state_13956__$1 = (function (){var statearr_13991 = state_13956;
(statearr_13991[(9)] = inst_13899);

(statearr_13991[(11)] = inst_13897);

(statearr_13991[(20)] = inst_13896);

(statearr_13991[(21)] = inst_13898);

return statearr_13991;
})();
var statearr_13992_14061 = state_13956__$1;
(statearr_13992_14061[(2)] = null);

(statearr_13992_14061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (41))){
var inst_13915 = (state_13956[(25)]);
var inst_13931 = (state_13956[(2)]);
var inst_13932 = cljs.core.next.call(null,inst_13915);
var inst_13896 = inst_13932;
var inst_13897 = null;
var inst_13898 = (0);
var inst_13899 = (0);
var state_13956__$1 = (function (){var statearr_13993 = state_13956;
(statearr_13993[(27)] = inst_13931);

(statearr_13993[(9)] = inst_13899);

(statearr_13993[(11)] = inst_13897);

(statearr_13993[(20)] = inst_13896);

(statearr_13993[(21)] = inst_13898);

return statearr_13993;
})();
var statearr_13994_14062 = state_13956__$1;
(statearr_13994_14062[(2)] = null);

(statearr_13994_14062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (43))){
var state_13956__$1 = state_13956;
var statearr_13995_14063 = state_13956__$1;
(statearr_13995_14063[(2)] = null);

(statearr_13995_14063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (29))){
var inst_13940 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_13996_14064 = state_13956__$1;
(statearr_13996_14064[(2)] = inst_13940);

(statearr_13996_14064[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (44))){
var inst_13949 = (state_13956[(2)]);
var state_13956__$1 = (function (){var statearr_13997 = state_13956;
(statearr_13997[(28)] = inst_13949);

return statearr_13997;
})();
var statearr_13998_14065 = state_13956__$1;
(statearr_13998_14065[(2)] = null);

(statearr_13998_14065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (6))){
var inst_13888 = (state_13956[(29)]);
var inst_13887 = cljs.core.deref.call(null,cs);
var inst_13888__$1 = cljs.core.keys.call(null,inst_13887);
var inst_13889 = cljs.core.count.call(null,inst_13888__$1);
var inst_13890 = cljs.core.reset_BANG_.call(null,dctr,inst_13889);
var inst_13895 = cljs.core.seq.call(null,inst_13888__$1);
var inst_13896 = inst_13895;
var inst_13897 = null;
var inst_13898 = (0);
var inst_13899 = (0);
var state_13956__$1 = (function (){var statearr_13999 = state_13956;
(statearr_13999[(29)] = inst_13888__$1);

(statearr_13999[(9)] = inst_13899);

(statearr_13999[(11)] = inst_13897);

(statearr_13999[(20)] = inst_13896);

(statearr_13999[(30)] = inst_13890);

(statearr_13999[(21)] = inst_13898);

return statearr_13999;
})();
var statearr_14000_14066 = state_13956__$1;
(statearr_14000_14066[(2)] = null);

(statearr_14000_14066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (28))){
var inst_13915 = (state_13956[(25)]);
var inst_13896 = (state_13956[(20)]);
var inst_13915__$1 = cljs.core.seq.call(null,inst_13896);
var state_13956__$1 = (function (){var statearr_14001 = state_13956;
(statearr_14001[(25)] = inst_13915__$1);

return statearr_14001;
})();
if(inst_13915__$1){
var statearr_14002_14067 = state_13956__$1;
(statearr_14002_14067[(1)] = (33));

} else {
var statearr_14003_14068 = state_13956__$1;
(statearr_14003_14068[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (25))){
var inst_13899 = (state_13956[(9)]);
var inst_13898 = (state_13956[(21)]);
var inst_13901 = (inst_13899 < inst_13898);
var inst_13902 = inst_13901;
var state_13956__$1 = state_13956;
if(cljs.core.truth_(inst_13902)){
var statearr_14004_14069 = state_13956__$1;
(statearr_14004_14069[(1)] = (27));

} else {
var statearr_14005_14070 = state_13956__$1;
(statearr_14005_14070[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (34))){
var state_13956__$1 = state_13956;
var statearr_14006_14071 = state_13956__$1;
(statearr_14006_14071[(2)] = null);

(statearr_14006_14071[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (17))){
var state_13956__$1 = state_13956;
var statearr_14007_14072 = state_13956__$1;
(statearr_14007_14072[(2)] = null);

(statearr_14007_14072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (3))){
var inst_13954 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13956__$1,inst_13954);
} else {
if((state_val_13957 === (12))){
var inst_13883 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_14008_14073 = state_13956__$1;
(statearr_14008_14073[(2)] = inst_13883);

(statearr_14008_14073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (2))){
var state_13956__$1 = state_13956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13956__$1,(4),ch);
} else {
if((state_val_13957 === (23))){
var state_13956__$1 = state_13956;
var statearr_14009_14074 = state_13956__$1;
(statearr_14009_14074[(2)] = null);

(statearr_14009_14074[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (35))){
var inst_13938 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_14010_14075 = state_13956__$1;
(statearr_14010_14075[(2)] = inst_13938);

(statearr_14010_14075[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (19))){
var inst_13855 = (state_13956[(7)]);
var inst_13859 = cljs.core.chunk_first.call(null,inst_13855);
var inst_13860 = cljs.core.chunk_rest.call(null,inst_13855);
var inst_13861 = cljs.core.count.call(null,inst_13859);
var inst_13833 = inst_13860;
var inst_13834 = inst_13859;
var inst_13835 = inst_13861;
var inst_13836 = (0);
var state_13956__$1 = (function (){var statearr_14011 = state_13956;
(statearr_14011[(13)] = inst_13833);

(statearr_14011[(14)] = inst_13834);

(statearr_14011[(15)] = inst_13836);

(statearr_14011[(16)] = inst_13835);

return statearr_14011;
})();
var statearr_14012_14076 = state_13956__$1;
(statearr_14012_14076[(2)] = null);

(statearr_14012_14076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (11))){
var inst_13833 = (state_13956[(13)]);
var inst_13855 = (state_13956[(7)]);
var inst_13855__$1 = cljs.core.seq.call(null,inst_13833);
var state_13956__$1 = (function (){var statearr_14013 = state_13956;
(statearr_14013[(7)] = inst_13855__$1);

return statearr_14013;
})();
if(inst_13855__$1){
var statearr_14014_14077 = state_13956__$1;
(statearr_14014_14077[(1)] = (16));

} else {
var statearr_14015_14078 = state_13956__$1;
(statearr_14015_14078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (9))){
var inst_13885 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_14016_14079 = state_13956__$1;
(statearr_14016_14079[(2)] = inst_13885);

(statearr_14016_14079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (5))){
var inst_13831 = cljs.core.deref.call(null,cs);
var inst_13832 = cljs.core.seq.call(null,inst_13831);
var inst_13833 = inst_13832;
var inst_13834 = null;
var inst_13835 = (0);
var inst_13836 = (0);
var state_13956__$1 = (function (){var statearr_14017 = state_13956;
(statearr_14017[(13)] = inst_13833);

(statearr_14017[(14)] = inst_13834);

(statearr_14017[(15)] = inst_13836);

(statearr_14017[(16)] = inst_13835);

return statearr_14017;
})();
var statearr_14018_14080 = state_13956__$1;
(statearr_14018_14080[(2)] = null);

(statearr_14018_14080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (14))){
var state_13956__$1 = state_13956;
var statearr_14019_14081 = state_13956__$1;
(statearr_14019_14081[(2)] = null);

(statearr_14019_14081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (45))){
var inst_13946 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_14020_14082 = state_13956__$1;
(statearr_14020_14082[(2)] = inst_13946);

(statearr_14020_14082[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (26))){
var inst_13888 = (state_13956[(29)]);
var inst_13942 = (state_13956[(2)]);
var inst_13943 = cljs.core.seq.call(null,inst_13888);
var state_13956__$1 = (function (){var statearr_14021 = state_13956;
(statearr_14021[(31)] = inst_13942);

return statearr_14021;
})();
if(inst_13943){
var statearr_14022_14083 = state_13956__$1;
(statearr_14022_14083[(1)] = (42));

} else {
var statearr_14023_14084 = state_13956__$1;
(statearr_14023_14084[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (16))){
var inst_13855 = (state_13956[(7)]);
var inst_13857 = cljs.core.chunked_seq_QMARK_.call(null,inst_13855);
var state_13956__$1 = state_13956;
if(inst_13857){
var statearr_14024_14085 = state_13956__$1;
(statearr_14024_14085[(1)] = (19));

} else {
var statearr_14025_14086 = state_13956__$1;
(statearr_14025_14086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (38))){
var inst_13935 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_14026_14087 = state_13956__$1;
(statearr_14026_14087[(2)] = inst_13935);

(statearr_14026_14087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (30))){
var state_13956__$1 = state_13956;
var statearr_14027_14088 = state_13956__$1;
(statearr_14027_14088[(2)] = null);

(statearr_14027_14088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (10))){
var inst_13834 = (state_13956[(14)]);
var inst_13836 = (state_13956[(15)]);
var inst_13844 = cljs.core._nth.call(null,inst_13834,inst_13836);
var inst_13845 = cljs.core.nth.call(null,inst_13844,(0),null);
var inst_13846 = cljs.core.nth.call(null,inst_13844,(1),null);
var state_13956__$1 = (function (){var statearr_14028 = state_13956;
(statearr_14028[(26)] = inst_13845);

return statearr_14028;
})();
if(cljs.core.truth_(inst_13846)){
var statearr_14029_14089 = state_13956__$1;
(statearr_14029_14089[(1)] = (13));

} else {
var statearr_14030_14090 = state_13956__$1;
(statearr_14030_14090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (18))){
var inst_13881 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_14031_14091 = state_13956__$1;
(statearr_14031_14091[(2)] = inst_13881);

(statearr_14031_14091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (42))){
var state_13956__$1 = state_13956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13956__$1,(45),dchan);
} else {
if((state_val_13957 === (37))){
var inst_13924 = (state_13956[(23)]);
var inst_13824 = (state_13956[(12)]);
var inst_13915 = (state_13956[(25)]);
var inst_13924__$1 = cljs.core.first.call(null,inst_13915);
var inst_13925 = cljs.core.async.put_BANG_.call(null,inst_13924__$1,inst_13824,done);
var state_13956__$1 = (function (){var statearr_14032 = state_13956;
(statearr_14032[(23)] = inst_13924__$1);

return statearr_14032;
})();
if(cljs.core.truth_(inst_13925)){
var statearr_14033_14092 = state_13956__$1;
(statearr_14033_14092[(1)] = (39));

} else {
var statearr_14034_14093 = state_13956__$1;
(statearr_14034_14093[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (8))){
var inst_13836 = (state_13956[(15)]);
var inst_13835 = (state_13956[(16)]);
var inst_13838 = (inst_13836 < inst_13835);
var inst_13839 = inst_13838;
var state_13956__$1 = state_13956;
if(cljs.core.truth_(inst_13839)){
var statearr_14035_14094 = state_13956__$1;
(statearr_14035_14094[(1)] = (10));

} else {
var statearr_14036_14095 = state_13956__$1;
(statearr_14036_14095[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14041,cs,m,dchan,dctr,done))
;
return ((function (switch__11226__auto__,c__11241__auto___14041,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11227__auto__ = null;
var cljs$core$async$mult_$_state_machine__11227__auto____0 = (function (){
var statearr_14037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14037[(0)] = cljs$core$async$mult_$_state_machine__11227__auto__);

(statearr_14037[(1)] = (1));

return statearr_14037;
});
var cljs$core$async$mult_$_state_machine__11227__auto____1 = (function (state_13956){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_13956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14038){if((e14038 instanceof Object)){
var ex__11230__auto__ = e14038;
var statearr_14039_14096 = state_13956;
(statearr_14039_14096[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14097 = state_13956;
state_13956 = G__14097;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11227__auto__ = function(state_13956){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11227__auto____1.call(this,state_13956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11227__auto____0;
cljs$core$async$mult_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11227__auto____1;
return cljs$core$async$mult_$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14041,cs,m,dchan,dctr,done))
})();
var state__11243__auto__ = (function (){var statearr_14040 = f__11242__auto__.call(null);
(statearr_14040[(6)] = c__11241__auto___14041);

return statearr_14040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14041,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14099 = arguments.length;
switch (G__14099) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m,ch);
} else {
var m__8657__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m,ch);
} else {
var m__8657__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m);
} else {
var m__8657__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m,state_map);
} else {
var m__8657__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8656__auto__ = (((m == null))?null:m);
var m__8657__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,m,mode);
} else {
var m__8657__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9149__auto__ = [];
var len__9142__auto___14111 = arguments.length;
var i__9143__auto___14112 = (0);
while(true){
if((i__9143__auto___14112 < len__9142__auto___14111)){
args__9149__auto__.push((arguments[i__9143__auto___14112]));

var G__14113 = (i__9143__auto___14112 + (1));
i__9143__auto___14112 = G__14113;
continue;
} else {
}
break;
}

var argseq__9150__auto__ = ((((3) < args__9149__auto__.length))?(new cljs.core.IndexedSeq(args__9149__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9150__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14105){
var map__14106 = p__14105;
var map__14106__$1 = ((((!((map__14106 == null)))?((((map__14106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14106):map__14106);
var opts = map__14106__$1;
var statearr_14108_14114 = state;
(statearr_14108_14114[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14106,map__14106__$1,opts){
return (function (val){
var statearr_14109_14115 = state;
(statearr_14109_14115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14106,map__14106__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14110_14116 = state;
(statearr_14110_14116[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14101){
var G__14102 = cljs.core.first.call(null,seq14101);
var seq14101__$1 = cljs.core.next.call(null,seq14101);
var G__14103 = cljs.core.first.call(null,seq14101__$1);
var seq14101__$2 = cljs.core.next.call(null,seq14101__$1);
var G__14104 = cljs.core.first.call(null,seq14101__$2);
var seq14101__$3 = cljs.core.next.call(null,seq14101__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14102,G__14103,G__14104,seq14101__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14117 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14118){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14118 = meta14118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14119,meta14118__$1){
var self__ = this;
var _14119__$1 = this;
return (new cljs.core.async.t_cljs$core$async14117(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14118__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14119){
var self__ = this;
var _14119__$1 = this;
return self__.meta14118;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14118","meta14118",-1517264653,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14117";

cljs.core.async.t_cljs$core$async14117.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async14117");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14117 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14117(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14118){
return (new cljs.core.async.t_cljs$core$async14117(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14118));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14117(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11241__auto___14281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14221){
var state_val_14222 = (state_14221[(1)]);
if((state_val_14222 === (7))){
var inst_14136 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
var statearr_14223_14282 = state_14221__$1;
(statearr_14223_14282[(2)] = inst_14136);

(statearr_14223_14282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (20))){
var inst_14148 = (state_14221[(7)]);
var state_14221__$1 = state_14221;
var statearr_14224_14283 = state_14221__$1;
(statearr_14224_14283[(2)] = inst_14148);

(statearr_14224_14283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (27))){
var state_14221__$1 = state_14221;
var statearr_14225_14284 = state_14221__$1;
(statearr_14225_14284[(2)] = null);

(statearr_14225_14284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (1))){
var inst_14123 = (state_14221[(8)]);
var inst_14123__$1 = calc_state.call(null);
var inst_14125 = (inst_14123__$1 == null);
var inst_14126 = cljs.core.not.call(null,inst_14125);
var state_14221__$1 = (function (){var statearr_14226 = state_14221;
(statearr_14226[(8)] = inst_14123__$1);

return statearr_14226;
})();
if(inst_14126){
var statearr_14227_14285 = state_14221__$1;
(statearr_14227_14285[(1)] = (2));

} else {
var statearr_14228_14286 = state_14221__$1;
(statearr_14228_14286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (24))){
var inst_14172 = (state_14221[(9)]);
var inst_14195 = (state_14221[(10)]);
var inst_14181 = (state_14221[(11)]);
var inst_14195__$1 = inst_14172.call(null,inst_14181);
var state_14221__$1 = (function (){var statearr_14229 = state_14221;
(statearr_14229[(10)] = inst_14195__$1);

return statearr_14229;
})();
if(cljs.core.truth_(inst_14195__$1)){
var statearr_14230_14287 = state_14221__$1;
(statearr_14230_14287[(1)] = (29));

} else {
var statearr_14231_14288 = state_14221__$1;
(statearr_14231_14288[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (4))){
var inst_14139 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14139)){
var statearr_14232_14289 = state_14221__$1;
(statearr_14232_14289[(1)] = (8));

} else {
var statearr_14233_14290 = state_14221__$1;
(statearr_14233_14290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (15))){
var inst_14166 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14166)){
var statearr_14234_14291 = state_14221__$1;
(statearr_14234_14291[(1)] = (19));

} else {
var statearr_14235_14292 = state_14221__$1;
(statearr_14235_14292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (21))){
var inst_14171 = (state_14221[(12)]);
var inst_14171__$1 = (state_14221[(2)]);
var inst_14172 = cljs.core.get.call(null,inst_14171__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14173 = cljs.core.get.call(null,inst_14171__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14174 = cljs.core.get.call(null,inst_14171__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14221__$1 = (function (){var statearr_14236 = state_14221;
(statearr_14236[(13)] = inst_14173);

(statearr_14236[(12)] = inst_14171__$1);

(statearr_14236[(9)] = inst_14172);

return statearr_14236;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14221__$1,(22),inst_14174);
} else {
if((state_val_14222 === (31))){
var inst_14203 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14203)){
var statearr_14237_14293 = state_14221__$1;
(statearr_14237_14293[(1)] = (32));

} else {
var statearr_14238_14294 = state_14221__$1;
(statearr_14238_14294[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (32))){
var inst_14180 = (state_14221[(14)]);
var state_14221__$1 = state_14221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14221__$1,(35),out,inst_14180);
} else {
if((state_val_14222 === (33))){
var inst_14171 = (state_14221[(12)]);
var inst_14148 = inst_14171;
var state_14221__$1 = (function (){var statearr_14239 = state_14221;
(statearr_14239[(7)] = inst_14148);

return statearr_14239;
})();
var statearr_14240_14295 = state_14221__$1;
(statearr_14240_14295[(2)] = null);

(statearr_14240_14295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (13))){
var inst_14148 = (state_14221[(7)]);
var inst_14155 = inst_14148.cljs$lang$protocol_mask$partition0$;
var inst_14156 = (inst_14155 & (64));
var inst_14157 = inst_14148.cljs$core$ISeq$;
var inst_14158 = (cljs.core.PROTOCOL_SENTINEL === inst_14157);
var inst_14159 = (inst_14156) || (inst_14158);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14159)){
var statearr_14241_14296 = state_14221__$1;
(statearr_14241_14296[(1)] = (16));

} else {
var statearr_14242_14297 = state_14221__$1;
(statearr_14242_14297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (22))){
var inst_14180 = (state_14221[(14)]);
var inst_14181 = (state_14221[(11)]);
var inst_14179 = (state_14221[(2)]);
var inst_14180__$1 = cljs.core.nth.call(null,inst_14179,(0),null);
var inst_14181__$1 = cljs.core.nth.call(null,inst_14179,(1),null);
var inst_14182 = (inst_14180__$1 == null);
var inst_14183 = cljs.core._EQ_.call(null,inst_14181__$1,change);
var inst_14184 = (inst_14182) || (inst_14183);
var state_14221__$1 = (function (){var statearr_14243 = state_14221;
(statearr_14243[(14)] = inst_14180__$1);

(statearr_14243[(11)] = inst_14181__$1);

return statearr_14243;
})();
if(cljs.core.truth_(inst_14184)){
var statearr_14244_14298 = state_14221__$1;
(statearr_14244_14298[(1)] = (23));

} else {
var statearr_14245_14299 = state_14221__$1;
(statearr_14245_14299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (36))){
var inst_14171 = (state_14221[(12)]);
var inst_14148 = inst_14171;
var state_14221__$1 = (function (){var statearr_14246 = state_14221;
(statearr_14246[(7)] = inst_14148);

return statearr_14246;
})();
var statearr_14247_14300 = state_14221__$1;
(statearr_14247_14300[(2)] = null);

(statearr_14247_14300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (29))){
var inst_14195 = (state_14221[(10)]);
var state_14221__$1 = state_14221;
var statearr_14248_14301 = state_14221__$1;
(statearr_14248_14301[(2)] = inst_14195);

(statearr_14248_14301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (6))){
var state_14221__$1 = state_14221;
var statearr_14249_14302 = state_14221__$1;
(statearr_14249_14302[(2)] = false);

(statearr_14249_14302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (28))){
var inst_14191 = (state_14221[(2)]);
var inst_14192 = calc_state.call(null);
var inst_14148 = inst_14192;
var state_14221__$1 = (function (){var statearr_14250 = state_14221;
(statearr_14250[(15)] = inst_14191);

(statearr_14250[(7)] = inst_14148);

return statearr_14250;
})();
var statearr_14251_14303 = state_14221__$1;
(statearr_14251_14303[(2)] = null);

(statearr_14251_14303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (25))){
var inst_14217 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
var statearr_14252_14304 = state_14221__$1;
(statearr_14252_14304[(2)] = inst_14217);

(statearr_14252_14304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (34))){
var inst_14215 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
var statearr_14253_14305 = state_14221__$1;
(statearr_14253_14305[(2)] = inst_14215);

(statearr_14253_14305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (17))){
var state_14221__$1 = state_14221;
var statearr_14254_14306 = state_14221__$1;
(statearr_14254_14306[(2)] = false);

(statearr_14254_14306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (3))){
var state_14221__$1 = state_14221;
var statearr_14255_14307 = state_14221__$1;
(statearr_14255_14307[(2)] = false);

(statearr_14255_14307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (12))){
var inst_14219 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14221__$1,inst_14219);
} else {
if((state_val_14222 === (2))){
var inst_14123 = (state_14221[(8)]);
var inst_14128 = inst_14123.cljs$lang$protocol_mask$partition0$;
var inst_14129 = (inst_14128 & (64));
var inst_14130 = inst_14123.cljs$core$ISeq$;
var inst_14131 = (cljs.core.PROTOCOL_SENTINEL === inst_14130);
var inst_14132 = (inst_14129) || (inst_14131);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14132)){
var statearr_14256_14308 = state_14221__$1;
(statearr_14256_14308[(1)] = (5));

} else {
var statearr_14257_14309 = state_14221__$1;
(statearr_14257_14309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (23))){
var inst_14180 = (state_14221[(14)]);
var inst_14186 = (inst_14180 == null);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14186)){
var statearr_14258_14310 = state_14221__$1;
(statearr_14258_14310[(1)] = (26));

} else {
var statearr_14259_14311 = state_14221__$1;
(statearr_14259_14311[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (35))){
var inst_14206 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
if(cljs.core.truth_(inst_14206)){
var statearr_14260_14312 = state_14221__$1;
(statearr_14260_14312[(1)] = (36));

} else {
var statearr_14261_14313 = state_14221__$1;
(statearr_14261_14313[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (19))){
var inst_14148 = (state_14221[(7)]);
var inst_14168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14148);
var state_14221__$1 = state_14221;
var statearr_14262_14314 = state_14221__$1;
(statearr_14262_14314[(2)] = inst_14168);

(statearr_14262_14314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (11))){
var inst_14148 = (state_14221[(7)]);
var inst_14152 = (inst_14148 == null);
var inst_14153 = cljs.core.not.call(null,inst_14152);
var state_14221__$1 = state_14221;
if(inst_14153){
var statearr_14263_14315 = state_14221__$1;
(statearr_14263_14315[(1)] = (13));

} else {
var statearr_14264_14316 = state_14221__$1;
(statearr_14264_14316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (9))){
var inst_14123 = (state_14221[(8)]);
var state_14221__$1 = state_14221;
var statearr_14265_14317 = state_14221__$1;
(statearr_14265_14317[(2)] = inst_14123);

(statearr_14265_14317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (5))){
var state_14221__$1 = state_14221;
var statearr_14266_14318 = state_14221__$1;
(statearr_14266_14318[(2)] = true);

(statearr_14266_14318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (14))){
var state_14221__$1 = state_14221;
var statearr_14267_14319 = state_14221__$1;
(statearr_14267_14319[(2)] = false);

(statearr_14267_14319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (26))){
var inst_14181 = (state_14221[(11)]);
var inst_14188 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14181);
var state_14221__$1 = state_14221;
var statearr_14268_14320 = state_14221__$1;
(statearr_14268_14320[(2)] = inst_14188);

(statearr_14268_14320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (16))){
var state_14221__$1 = state_14221;
var statearr_14269_14321 = state_14221__$1;
(statearr_14269_14321[(2)] = true);

(statearr_14269_14321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (38))){
var inst_14211 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
var statearr_14270_14322 = state_14221__$1;
(statearr_14270_14322[(2)] = inst_14211);

(statearr_14270_14322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (30))){
var inst_14173 = (state_14221[(13)]);
var inst_14172 = (state_14221[(9)]);
var inst_14181 = (state_14221[(11)]);
var inst_14198 = cljs.core.empty_QMARK_.call(null,inst_14172);
var inst_14199 = inst_14173.call(null,inst_14181);
var inst_14200 = cljs.core.not.call(null,inst_14199);
var inst_14201 = (inst_14198) && (inst_14200);
var state_14221__$1 = state_14221;
var statearr_14271_14323 = state_14221__$1;
(statearr_14271_14323[(2)] = inst_14201);

(statearr_14271_14323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (10))){
var inst_14123 = (state_14221[(8)]);
var inst_14144 = (state_14221[(2)]);
var inst_14145 = cljs.core.get.call(null,inst_14144,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14146 = cljs.core.get.call(null,inst_14144,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14147 = cljs.core.get.call(null,inst_14144,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14148 = inst_14123;
var state_14221__$1 = (function (){var statearr_14272 = state_14221;
(statearr_14272[(16)] = inst_14147);

(statearr_14272[(17)] = inst_14146);

(statearr_14272[(7)] = inst_14148);

(statearr_14272[(18)] = inst_14145);

return statearr_14272;
})();
var statearr_14273_14324 = state_14221__$1;
(statearr_14273_14324[(2)] = null);

(statearr_14273_14324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (18))){
var inst_14163 = (state_14221[(2)]);
var state_14221__$1 = state_14221;
var statearr_14274_14325 = state_14221__$1;
(statearr_14274_14325[(2)] = inst_14163);

(statearr_14274_14325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (37))){
var state_14221__$1 = state_14221;
var statearr_14275_14326 = state_14221__$1;
(statearr_14275_14326[(2)] = null);

(statearr_14275_14326[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14222 === (8))){
var inst_14123 = (state_14221[(8)]);
var inst_14141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14123);
var state_14221__$1 = state_14221;
var statearr_14276_14327 = state_14221__$1;
(statearr_14276_14327[(2)] = inst_14141);

(statearr_14276_14327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11226__auto__,c__11241__auto___14281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11227__auto__ = null;
var cljs$core$async$mix_$_state_machine__11227__auto____0 = (function (){
var statearr_14277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14277[(0)] = cljs$core$async$mix_$_state_machine__11227__auto__);

(statearr_14277[(1)] = (1));

return statearr_14277;
});
var cljs$core$async$mix_$_state_machine__11227__auto____1 = (function (state_14221){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14278){if((e14278 instanceof Object)){
var ex__11230__auto__ = e14278;
var statearr_14279_14328 = state_14221;
(statearr_14279_14328[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14329 = state_14221;
state_14221 = G__14329;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11227__auto__ = function(state_14221){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11227__auto____1.call(this,state_14221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11227__auto____0;
cljs$core$async$mix_$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11227__auto____1;
return cljs$core$async$mix_$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11243__auto__ = (function (){var statearr_14280 = f__11242__auto__.call(null);
(statearr_14280[(6)] = c__11241__auto___14281);

return statearr_14280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8656__auto__ = (((p == null))?null:p);
var m__8657__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8657__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8656__auto__ = (((p == null))?null:p);
var m__8657__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,p,v,ch);
} else {
var m__8657__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14331 = arguments.length;
switch (G__14331) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8656__auto__ = (((p == null))?null:p);
var m__8657__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,p);
} else {
var m__8657__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8656__auto__ = (((p == null))?null:p);
var m__8657__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,p,v);
} else {
var m__8657__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14335 = arguments.length;
switch (G__14335) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7973__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7973__auto__)){
return or__7973__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7973__auto__,mults){
return (function (p1__14333_SHARP_){
if(cljs.core.truth_(p1__14333_SHARP_.call(null,topic))){
return p1__14333_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14333_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7973__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14336 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14337){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14337 = meta14337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14338,meta14337__$1){
var self__ = this;
var _14338__$1 = this;
return (new cljs.core.async.t_cljs$core$async14336(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14337__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14338){
var self__ = this;
var _14338__$1 = this;
return self__.meta14337;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14337","meta14337",-1797584382,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14336";

cljs.core.async.t_cljs$core$async14336.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async14336");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14336 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14336(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14337){
return (new cljs.core.async.t_cljs$core$async14336(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14337));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14336(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11241__auto___14456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14456,mults,ensure_mult,p){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14456,mults,ensure_mult,p){
return (function (state_14410){
var state_val_14411 = (state_14410[(1)]);
if((state_val_14411 === (7))){
var inst_14406 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
var statearr_14412_14457 = state_14410__$1;
(statearr_14412_14457[(2)] = inst_14406);

(statearr_14412_14457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (20))){
var state_14410__$1 = state_14410;
var statearr_14413_14458 = state_14410__$1;
(statearr_14413_14458[(2)] = null);

(statearr_14413_14458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (1))){
var state_14410__$1 = state_14410;
var statearr_14414_14459 = state_14410__$1;
(statearr_14414_14459[(2)] = null);

(statearr_14414_14459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (24))){
var inst_14389 = (state_14410[(7)]);
var inst_14398 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14389);
var state_14410__$1 = state_14410;
var statearr_14415_14460 = state_14410__$1;
(statearr_14415_14460[(2)] = inst_14398);

(statearr_14415_14460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (4))){
var inst_14341 = (state_14410[(8)]);
var inst_14341__$1 = (state_14410[(2)]);
var inst_14342 = (inst_14341__$1 == null);
var state_14410__$1 = (function (){var statearr_14416 = state_14410;
(statearr_14416[(8)] = inst_14341__$1);

return statearr_14416;
})();
if(cljs.core.truth_(inst_14342)){
var statearr_14417_14461 = state_14410__$1;
(statearr_14417_14461[(1)] = (5));

} else {
var statearr_14418_14462 = state_14410__$1;
(statearr_14418_14462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (15))){
var inst_14383 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
var statearr_14419_14463 = state_14410__$1;
(statearr_14419_14463[(2)] = inst_14383);

(statearr_14419_14463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (21))){
var inst_14403 = (state_14410[(2)]);
var state_14410__$1 = (function (){var statearr_14420 = state_14410;
(statearr_14420[(9)] = inst_14403);

return statearr_14420;
})();
var statearr_14421_14464 = state_14410__$1;
(statearr_14421_14464[(2)] = null);

(statearr_14421_14464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (13))){
var inst_14365 = (state_14410[(10)]);
var inst_14367 = cljs.core.chunked_seq_QMARK_.call(null,inst_14365);
var state_14410__$1 = state_14410;
if(inst_14367){
var statearr_14422_14465 = state_14410__$1;
(statearr_14422_14465[(1)] = (16));

} else {
var statearr_14423_14466 = state_14410__$1;
(statearr_14423_14466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (22))){
var inst_14395 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
if(cljs.core.truth_(inst_14395)){
var statearr_14424_14467 = state_14410__$1;
(statearr_14424_14467[(1)] = (23));

} else {
var statearr_14425_14468 = state_14410__$1;
(statearr_14425_14468[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (6))){
var inst_14391 = (state_14410[(11)]);
var inst_14389 = (state_14410[(7)]);
var inst_14341 = (state_14410[(8)]);
var inst_14389__$1 = topic_fn.call(null,inst_14341);
var inst_14390 = cljs.core.deref.call(null,mults);
var inst_14391__$1 = cljs.core.get.call(null,inst_14390,inst_14389__$1);
var state_14410__$1 = (function (){var statearr_14426 = state_14410;
(statearr_14426[(11)] = inst_14391__$1);

(statearr_14426[(7)] = inst_14389__$1);

return statearr_14426;
})();
if(cljs.core.truth_(inst_14391__$1)){
var statearr_14427_14469 = state_14410__$1;
(statearr_14427_14469[(1)] = (19));

} else {
var statearr_14428_14470 = state_14410__$1;
(statearr_14428_14470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (25))){
var inst_14400 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
var statearr_14429_14471 = state_14410__$1;
(statearr_14429_14471[(2)] = inst_14400);

(statearr_14429_14471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (17))){
var inst_14365 = (state_14410[(10)]);
var inst_14374 = cljs.core.first.call(null,inst_14365);
var inst_14375 = cljs.core.async.muxch_STAR_.call(null,inst_14374);
var inst_14376 = cljs.core.async.close_BANG_.call(null,inst_14375);
var inst_14377 = cljs.core.next.call(null,inst_14365);
var inst_14351 = inst_14377;
var inst_14352 = null;
var inst_14353 = (0);
var inst_14354 = (0);
var state_14410__$1 = (function (){var statearr_14430 = state_14410;
(statearr_14430[(12)] = inst_14352);

(statearr_14430[(13)] = inst_14351);

(statearr_14430[(14)] = inst_14353);

(statearr_14430[(15)] = inst_14376);

(statearr_14430[(16)] = inst_14354);

return statearr_14430;
})();
var statearr_14431_14472 = state_14410__$1;
(statearr_14431_14472[(2)] = null);

(statearr_14431_14472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (3))){
var inst_14408 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14410__$1,inst_14408);
} else {
if((state_val_14411 === (12))){
var inst_14385 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
var statearr_14432_14473 = state_14410__$1;
(statearr_14432_14473[(2)] = inst_14385);

(statearr_14432_14473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (2))){
var state_14410__$1 = state_14410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14410__$1,(4),ch);
} else {
if((state_val_14411 === (23))){
var state_14410__$1 = state_14410;
var statearr_14433_14474 = state_14410__$1;
(statearr_14433_14474[(2)] = null);

(statearr_14433_14474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (19))){
var inst_14391 = (state_14410[(11)]);
var inst_14341 = (state_14410[(8)]);
var inst_14393 = cljs.core.async.muxch_STAR_.call(null,inst_14391);
var state_14410__$1 = state_14410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14410__$1,(22),inst_14393,inst_14341);
} else {
if((state_val_14411 === (11))){
var inst_14351 = (state_14410[(13)]);
var inst_14365 = (state_14410[(10)]);
var inst_14365__$1 = cljs.core.seq.call(null,inst_14351);
var state_14410__$1 = (function (){var statearr_14434 = state_14410;
(statearr_14434[(10)] = inst_14365__$1);

return statearr_14434;
})();
if(inst_14365__$1){
var statearr_14435_14475 = state_14410__$1;
(statearr_14435_14475[(1)] = (13));

} else {
var statearr_14436_14476 = state_14410__$1;
(statearr_14436_14476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (9))){
var inst_14387 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
var statearr_14437_14477 = state_14410__$1;
(statearr_14437_14477[(2)] = inst_14387);

(statearr_14437_14477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (5))){
var inst_14348 = cljs.core.deref.call(null,mults);
var inst_14349 = cljs.core.vals.call(null,inst_14348);
var inst_14350 = cljs.core.seq.call(null,inst_14349);
var inst_14351 = inst_14350;
var inst_14352 = null;
var inst_14353 = (0);
var inst_14354 = (0);
var state_14410__$1 = (function (){var statearr_14438 = state_14410;
(statearr_14438[(12)] = inst_14352);

(statearr_14438[(13)] = inst_14351);

(statearr_14438[(14)] = inst_14353);

(statearr_14438[(16)] = inst_14354);

return statearr_14438;
})();
var statearr_14439_14478 = state_14410__$1;
(statearr_14439_14478[(2)] = null);

(statearr_14439_14478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (14))){
var state_14410__$1 = state_14410;
var statearr_14443_14479 = state_14410__$1;
(statearr_14443_14479[(2)] = null);

(statearr_14443_14479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (16))){
var inst_14365 = (state_14410[(10)]);
var inst_14369 = cljs.core.chunk_first.call(null,inst_14365);
var inst_14370 = cljs.core.chunk_rest.call(null,inst_14365);
var inst_14371 = cljs.core.count.call(null,inst_14369);
var inst_14351 = inst_14370;
var inst_14352 = inst_14369;
var inst_14353 = inst_14371;
var inst_14354 = (0);
var state_14410__$1 = (function (){var statearr_14444 = state_14410;
(statearr_14444[(12)] = inst_14352);

(statearr_14444[(13)] = inst_14351);

(statearr_14444[(14)] = inst_14353);

(statearr_14444[(16)] = inst_14354);

return statearr_14444;
})();
var statearr_14445_14480 = state_14410__$1;
(statearr_14445_14480[(2)] = null);

(statearr_14445_14480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (10))){
var inst_14352 = (state_14410[(12)]);
var inst_14351 = (state_14410[(13)]);
var inst_14353 = (state_14410[(14)]);
var inst_14354 = (state_14410[(16)]);
var inst_14359 = cljs.core._nth.call(null,inst_14352,inst_14354);
var inst_14360 = cljs.core.async.muxch_STAR_.call(null,inst_14359);
var inst_14361 = cljs.core.async.close_BANG_.call(null,inst_14360);
var inst_14362 = (inst_14354 + (1));
var tmp14440 = inst_14352;
var tmp14441 = inst_14351;
var tmp14442 = inst_14353;
var inst_14351__$1 = tmp14441;
var inst_14352__$1 = tmp14440;
var inst_14353__$1 = tmp14442;
var inst_14354__$1 = inst_14362;
var state_14410__$1 = (function (){var statearr_14446 = state_14410;
(statearr_14446[(12)] = inst_14352__$1);

(statearr_14446[(13)] = inst_14351__$1);

(statearr_14446[(14)] = inst_14353__$1);

(statearr_14446[(16)] = inst_14354__$1);

(statearr_14446[(17)] = inst_14361);

return statearr_14446;
})();
var statearr_14447_14481 = state_14410__$1;
(statearr_14447_14481[(2)] = null);

(statearr_14447_14481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (18))){
var inst_14380 = (state_14410[(2)]);
var state_14410__$1 = state_14410;
var statearr_14448_14482 = state_14410__$1;
(statearr_14448_14482[(2)] = inst_14380);

(statearr_14448_14482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14411 === (8))){
var inst_14353 = (state_14410[(14)]);
var inst_14354 = (state_14410[(16)]);
var inst_14356 = (inst_14354 < inst_14353);
var inst_14357 = inst_14356;
var state_14410__$1 = state_14410;
if(cljs.core.truth_(inst_14357)){
var statearr_14449_14483 = state_14410__$1;
(statearr_14449_14483[(1)] = (10));

} else {
var statearr_14450_14484 = state_14410__$1;
(statearr_14450_14484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14456,mults,ensure_mult,p))
;
return ((function (switch__11226__auto__,c__11241__auto___14456,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_14451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14451[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_14451[(1)] = (1));

return statearr_14451;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_14410){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14452){if((e14452 instanceof Object)){
var ex__11230__auto__ = e14452;
var statearr_14453_14485 = state_14410;
(statearr_14453_14485[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14486 = state_14410;
state_14410 = G__14486;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_14410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_14410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14456,mults,ensure_mult,p))
})();
var state__11243__auto__ = (function (){var statearr_14454 = f__11242__auto__.call(null);
(statearr_14454[(6)] = c__11241__auto___14456);

return statearr_14454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14456,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14488 = arguments.length;
switch (G__14488) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14491 = arguments.length;
switch (G__14491) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14494 = arguments.length;
switch (G__14494) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11241__auto___14561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14561,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14561,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14533){
var state_val_14534 = (state_14533[(1)]);
if((state_val_14534 === (7))){
var state_14533__$1 = state_14533;
var statearr_14535_14562 = state_14533__$1;
(statearr_14535_14562[(2)] = null);

(statearr_14535_14562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (1))){
var state_14533__$1 = state_14533;
var statearr_14536_14563 = state_14533__$1;
(statearr_14536_14563[(2)] = null);

(statearr_14536_14563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (4))){
var inst_14497 = (state_14533[(7)]);
var inst_14499 = (inst_14497 < cnt);
var state_14533__$1 = state_14533;
if(cljs.core.truth_(inst_14499)){
var statearr_14537_14564 = state_14533__$1;
(statearr_14537_14564[(1)] = (6));

} else {
var statearr_14538_14565 = state_14533__$1;
(statearr_14538_14565[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (15))){
var inst_14529 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14539_14566 = state_14533__$1;
(statearr_14539_14566[(2)] = inst_14529);

(statearr_14539_14566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (13))){
var inst_14522 = cljs.core.async.close_BANG_.call(null,out);
var state_14533__$1 = state_14533;
var statearr_14540_14567 = state_14533__$1;
(statearr_14540_14567[(2)] = inst_14522);

(statearr_14540_14567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (6))){
var state_14533__$1 = state_14533;
var statearr_14541_14568 = state_14533__$1;
(statearr_14541_14568[(2)] = null);

(statearr_14541_14568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (3))){
var inst_14531 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14533__$1,inst_14531);
} else {
if((state_val_14534 === (12))){
var inst_14519 = (state_14533[(8)]);
var inst_14519__$1 = (state_14533[(2)]);
var inst_14520 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14519__$1);
var state_14533__$1 = (function (){var statearr_14542 = state_14533;
(statearr_14542[(8)] = inst_14519__$1);

return statearr_14542;
})();
if(cljs.core.truth_(inst_14520)){
var statearr_14543_14569 = state_14533__$1;
(statearr_14543_14569[(1)] = (13));

} else {
var statearr_14544_14570 = state_14533__$1;
(statearr_14544_14570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (2))){
var inst_14496 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14497 = (0);
var state_14533__$1 = (function (){var statearr_14545 = state_14533;
(statearr_14545[(7)] = inst_14497);

(statearr_14545[(9)] = inst_14496);

return statearr_14545;
})();
var statearr_14546_14571 = state_14533__$1;
(statearr_14546_14571[(2)] = null);

(statearr_14546_14571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (11))){
var inst_14497 = (state_14533[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14533,(10),Object,null,(9));
var inst_14506 = chs__$1.call(null,inst_14497);
var inst_14507 = done.call(null,inst_14497);
var inst_14508 = cljs.core.async.take_BANG_.call(null,inst_14506,inst_14507);
var state_14533__$1 = state_14533;
var statearr_14547_14572 = state_14533__$1;
(statearr_14547_14572[(2)] = inst_14508);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (9))){
var inst_14497 = (state_14533[(7)]);
var inst_14510 = (state_14533[(2)]);
var inst_14511 = (inst_14497 + (1));
var inst_14497__$1 = inst_14511;
var state_14533__$1 = (function (){var statearr_14548 = state_14533;
(statearr_14548[(10)] = inst_14510);

(statearr_14548[(7)] = inst_14497__$1);

return statearr_14548;
})();
var statearr_14549_14573 = state_14533__$1;
(statearr_14549_14573[(2)] = null);

(statearr_14549_14573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (5))){
var inst_14517 = (state_14533[(2)]);
var state_14533__$1 = (function (){var statearr_14550 = state_14533;
(statearr_14550[(11)] = inst_14517);

return statearr_14550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,(12),dchan);
} else {
if((state_val_14534 === (14))){
var inst_14519 = (state_14533[(8)]);
var inst_14524 = cljs.core.apply.call(null,f,inst_14519);
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14533__$1,(16),out,inst_14524);
} else {
if((state_val_14534 === (16))){
var inst_14526 = (state_14533[(2)]);
var state_14533__$1 = (function (){var statearr_14551 = state_14533;
(statearr_14551[(12)] = inst_14526);

return statearr_14551;
})();
var statearr_14552_14574 = state_14533__$1;
(statearr_14552_14574[(2)] = null);

(statearr_14552_14574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (10))){
var inst_14501 = (state_14533[(2)]);
var inst_14502 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14533__$1 = (function (){var statearr_14553 = state_14533;
(statearr_14553[(13)] = inst_14501);

return statearr_14553;
})();
var statearr_14554_14575 = state_14533__$1;
(statearr_14554_14575[(2)] = inst_14502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (8))){
var inst_14515 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14555_14576 = state_14533__$1;
(statearr_14555_14576[(2)] = inst_14515);

(statearr_14555_14576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14561,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11226__auto__,c__11241__auto___14561,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_14556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14556[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_14556[(1)] = (1));

return statearr_14556;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_14533){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14557){if((e14557 instanceof Object)){
var ex__11230__auto__ = e14557;
var statearr_14558_14577 = state_14533;
(statearr_14558_14577[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14578 = state_14533;
state_14533 = G__14578;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_14533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_14533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14561,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11243__auto__ = (function (){var statearr_14559 = f__11242__auto__.call(null);
(statearr_14559[(6)] = c__11241__auto___14561);

return statearr_14559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14561,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14581 = arguments.length;
switch (G__14581) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11241__auto___14635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14635,out){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14635,out){
return (function (state_14613){
var state_val_14614 = (state_14613[(1)]);
if((state_val_14614 === (7))){
var inst_14592 = (state_14613[(7)]);
var inst_14593 = (state_14613[(8)]);
var inst_14592__$1 = (state_14613[(2)]);
var inst_14593__$1 = cljs.core.nth.call(null,inst_14592__$1,(0),null);
var inst_14594 = cljs.core.nth.call(null,inst_14592__$1,(1),null);
var inst_14595 = (inst_14593__$1 == null);
var state_14613__$1 = (function (){var statearr_14615 = state_14613;
(statearr_14615[(7)] = inst_14592__$1);

(statearr_14615[(9)] = inst_14594);

(statearr_14615[(8)] = inst_14593__$1);

return statearr_14615;
})();
if(cljs.core.truth_(inst_14595)){
var statearr_14616_14636 = state_14613__$1;
(statearr_14616_14636[(1)] = (8));

} else {
var statearr_14617_14637 = state_14613__$1;
(statearr_14617_14637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (1))){
var inst_14582 = cljs.core.vec.call(null,chs);
var inst_14583 = inst_14582;
var state_14613__$1 = (function (){var statearr_14618 = state_14613;
(statearr_14618[(10)] = inst_14583);

return statearr_14618;
})();
var statearr_14619_14638 = state_14613__$1;
(statearr_14619_14638[(2)] = null);

(statearr_14619_14638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (4))){
var inst_14583 = (state_14613[(10)]);
var state_14613__$1 = state_14613;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14613__$1,(7),inst_14583);
} else {
if((state_val_14614 === (6))){
var inst_14609 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
var statearr_14620_14639 = state_14613__$1;
(statearr_14620_14639[(2)] = inst_14609);

(statearr_14620_14639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (3))){
var inst_14611 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14613__$1,inst_14611);
} else {
if((state_val_14614 === (2))){
var inst_14583 = (state_14613[(10)]);
var inst_14585 = cljs.core.count.call(null,inst_14583);
var inst_14586 = (inst_14585 > (0));
var state_14613__$1 = state_14613;
if(cljs.core.truth_(inst_14586)){
var statearr_14622_14640 = state_14613__$1;
(statearr_14622_14640[(1)] = (4));

} else {
var statearr_14623_14641 = state_14613__$1;
(statearr_14623_14641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (11))){
var inst_14583 = (state_14613[(10)]);
var inst_14602 = (state_14613[(2)]);
var tmp14621 = inst_14583;
var inst_14583__$1 = tmp14621;
var state_14613__$1 = (function (){var statearr_14624 = state_14613;
(statearr_14624[(10)] = inst_14583__$1);

(statearr_14624[(11)] = inst_14602);

return statearr_14624;
})();
var statearr_14625_14642 = state_14613__$1;
(statearr_14625_14642[(2)] = null);

(statearr_14625_14642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (9))){
var inst_14593 = (state_14613[(8)]);
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14613__$1,(11),out,inst_14593);
} else {
if((state_val_14614 === (5))){
var inst_14607 = cljs.core.async.close_BANG_.call(null,out);
var state_14613__$1 = state_14613;
var statearr_14626_14643 = state_14613__$1;
(statearr_14626_14643[(2)] = inst_14607);

(statearr_14626_14643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (10))){
var inst_14605 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
var statearr_14627_14644 = state_14613__$1;
(statearr_14627_14644[(2)] = inst_14605);

(statearr_14627_14644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14614 === (8))){
var inst_14583 = (state_14613[(10)]);
var inst_14592 = (state_14613[(7)]);
var inst_14594 = (state_14613[(9)]);
var inst_14593 = (state_14613[(8)]);
var inst_14597 = (function (){var cs = inst_14583;
var vec__14588 = inst_14592;
var v = inst_14593;
var c = inst_14594;
return ((function (cs,vec__14588,v,c,inst_14583,inst_14592,inst_14594,inst_14593,state_val_14614,c__11241__auto___14635,out){
return (function (p1__14579_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14579_SHARP_);
});
;})(cs,vec__14588,v,c,inst_14583,inst_14592,inst_14594,inst_14593,state_val_14614,c__11241__auto___14635,out))
})();
var inst_14598 = cljs.core.filterv.call(null,inst_14597,inst_14583);
var inst_14583__$1 = inst_14598;
var state_14613__$1 = (function (){var statearr_14628 = state_14613;
(statearr_14628[(10)] = inst_14583__$1);

return statearr_14628;
})();
var statearr_14629_14645 = state_14613__$1;
(statearr_14629_14645[(2)] = null);

(statearr_14629_14645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14635,out))
;
return ((function (switch__11226__auto__,c__11241__auto___14635,out){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_14630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14630[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_14630[(1)] = (1));

return statearr_14630;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_14613){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14631){if((e14631 instanceof Object)){
var ex__11230__auto__ = e14631;
var statearr_14632_14646 = state_14613;
(statearr_14632_14646[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14647 = state_14613;
state_14613 = G__14647;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_14613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_14613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14635,out))
})();
var state__11243__auto__ = (function (){var statearr_14633 = f__11242__auto__.call(null);
(statearr_14633[(6)] = c__11241__auto___14635);

return statearr_14633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14635,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14649 = arguments.length;
switch (G__14649) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11241__auto___14694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14694,out){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14694,out){
return (function (state_14673){
var state_val_14674 = (state_14673[(1)]);
if((state_val_14674 === (7))){
var inst_14655 = (state_14673[(7)]);
var inst_14655__$1 = (state_14673[(2)]);
var inst_14656 = (inst_14655__$1 == null);
var inst_14657 = cljs.core.not.call(null,inst_14656);
var state_14673__$1 = (function (){var statearr_14675 = state_14673;
(statearr_14675[(7)] = inst_14655__$1);

return statearr_14675;
})();
if(inst_14657){
var statearr_14676_14695 = state_14673__$1;
(statearr_14676_14695[(1)] = (8));

} else {
var statearr_14677_14696 = state_14673__$1;
(statearr_14677_14696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (1))){
var inst_14650 = (0);
var state_14673__$1 = (function (){var statearr_14678 = state_14673;
(statearr_14678[(8)] = inst_14650);

return statearr_14678;
})();
var statearr_14679_14697 = state_14673__$1;
(statearr_14679_14697[(2)] = null);

(statearr_14679_14697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (4))){
var state_14673__$1 = state_14673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14673__$1,(7),ch);
} else {
if((state_val_14674 === (6))){
var inst_14668 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
var statearr_14680_14698 = state_14673__$1;
(statearr_14680_14698[(2)] = inst_14668);

(statearr_14680_14698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (3))){
var inst_14670 = (state_14673[(2)]);
var inst_14671 = cljs.core.async.close_BANG_.call(null,out);
var state_14673__$1 = (function (){var statearr_14681 = state_14673;
(statearr_14681[(9)] = inst_14670);

return statearr_14681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14673__$1,inst_14671);
} else {
if((state_val_14674 === (2))){
var inst_14650 = (state_14673[(8)]);
var inst_14652 = (inst_14650 < n);
var state_14673__$1 = state_14673;
if(cljs.core.truth_(inst_14652)){
var statearr_14682_14699 = state_14673__$1;
(statearr_14682_14699[(1)] = (4));

} else {
var statearr_14683_14700 = state_14673__$1;
(statearr_14683_14700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (11))){
var inst_14650 = (state_14673[(8)]);
var inst_14660 = (state_14673[(2)]);
var inst_14661 = (inst_14650 + (1));
var inst_14650__$1 = inst_14661;
var state_14673__$1 = (function (){var statearr_14684 = state_14673;
(statearr_14684[(8)] = inst_14650__$1);

(statearr_14684[(10)] = inst_14660);

return statearr_14684;
})();
var statearr_14685_14701 = state_14673__$1;
(statearr_14685_14701[(2)] = null);

(statearr_14685_14701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (9))){
var state_14673__$1 = state_14673;
var statearr_14686_14702 = state_14673__$1;
(statearr_14686_14702[(2)] = null);

(statearr_14686_14702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (5))){
var state_14673__$1 = state_14673;
var statearr_14687_14703 = state_14673__$1;
(statearr_14687_14703[(2)] = null);

(statearr_14687_14703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (10))){
var inst_14665 = (state_14673[(2)]);
var state_14673__$1 = state_14673;
var statearr_14688_14704 = state_14673__$1;
(statearr_14688_14704[(2)] = inst_14665);

(statearr_14688_14704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14674 === (8))){
var inst_14655 = (state_14673[(7)]);
var state_14673__$1 = state_14673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14673__$1,(11),out,inst_14655);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14694,out))
;
return ((function (switch__11226__auto__,c__11241__auto___14694,out){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_14689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14689[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_14689[(1)] = (1));

return statearr_14689;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_14673){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14690){if((e14690 instanceof Object)){
var ex__11230__auto__ = e14690;
var statearr_14691_14705 = state_14673;
(statearr_14691_14705[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14706 = state_14673;
state_14673 = G__14706;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_14673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_14673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14694,out))
})();
var state__11243__auto__ = (function (){var statearr_14692 = f__11242__auto__.call(null);
(statearr_14692[(6)] = c__11241__auto___14694);

return statearr_14692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14694,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14708 = (function (f,ch,meta14709){
this.f = f;
this.ch = ch;
this.meta14709 = meta14709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14710,meta14709__$1){
var self__ = this;
var _14710__$1 = this;
return (new cljs.core.async.t_cljs$core$async14708(self__.f,self__.ch,meta14709__$1));
});

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14710){
var self__ = this;
var _14710__$1 = this;
return self__.meta14709;
});

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14711 = (function (f,ch,meta14709,_,fn1,meta14712){
this.f = f;
this.ch = ch;
this.meta14709 = meta14709;
this._ = _;
this.fn1 = fn1;
this.meta14712 = meta14712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14713,meta14712__$1){
var self__ = this;
var _14713__$1 = this;
return (new cljs.core.async.t_cljs$core$async14711(self__.f,self__.ch,self__.meta14709,self__._,self__.fn1,meta14712__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14713){
var self__ = this;
var _14713__$1 = this;
return self__.meta14712;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14707_SHARP_){
return f1.call(null,(((p1__14707_SHARP_ == null))?null:self__.f.call(null,p1__14707_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14711.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14709","meta14709",885171195,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14708","cljs.core.async/t_cljs$core$async14708",-1821602334,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14712","meta14712",9169806,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14711";

cljs.core.async.t_cljs$core$async14711.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async14711");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14711 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14711(f__$1,ch__$1,meta14709__$1,___$2,fn1__$1,meta14712){
return (new cljs.core.async.t_cljs$core$async14711(f__$1,ch__$1,meta14709__$1,___$2,fn1__$1,meta14712));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14711(self__.f,self__.ch,self__.meta14709,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7961__auto__ = ret;
if(cljs.core.truth_(and__7961__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7961__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14709","meta14709",885171195,null)], null);
});

cljs.core.async.t_cljs$core$async14708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14708";

cljs.core.async.t_cljs$core$async14708.cljs$lang$ctorPrWriter = (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async14708");
});

cljs.core.async.__GT_t_cljs$core$async14708 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14708(f__$1,ch__$1,meta14709){
return (new cljs.core.async.t_cljs$core$async14708(f__$1,ch__$1,meta14709));
});

}

return (new cljs.core.async.t_cljs$core$async14708(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14714 = (function (f,ch,meta14715){
this.f = f;
this.ch = ch;
this.meta14715 = meta14715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14716,meta14715__$1){
var self__ = this;
var _14716__$1 = this;
return (new cljs.core.async.t_cljs$core$async14714(self__.f,self__.ch,meta14715__$1));
});

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14716){
var self__ = this;
var _14716__$1 = this;
return self__.meta14715;
});

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14715","meta14715",-287685465,null)], null);
});

cljs.core.async.t_cljs$core$async14714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14714";

cljs.core.async.t_cljs$core$async14714.cljs$lang$ctorPrWriter = (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async14714");
});

cljs.core.async.__GT_t_cljs$core$async14714 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14714(f__$1,ch__$1,meta14715){
return (new cljs.core.async.t_cljs$core$async14714(f__$1,ch__$1,meta14715));
});

}

return (new cljs.core.async.t_cljs$core$async14714(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14717 = (function (p,ch,meta14718){
this.p = p;
this.ch = ch;
this.meta14718 = meta14718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14719,meta14718__$1){
var self__ = this;
var _14719__$1 = this;
return (new cljs.core.async.t_cljs$core$async14717(self__.p,self__.ch,meta14718__$1));
});

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14719){
var self__ = this;
var _14719__$1 = this;
return self__.meta14718;
});

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14717.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14718","meta14718",2030725129,null)], null);
});

cljs.core.async.t_cljs$core$async14717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14717";

cljs.core.async.t_cljs$core$async14717.cljs$lang$ctorPrWriter = (function (this__8598__auto__,writer__8599__auto__,opt__8600__auto__){
return cljs.core._write.call(null,writer__8599__auto__,"cljs.core.async/t_cljs$core$async14717");
});

cljs.core.async.__GT_t_cljs$core$async14717 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14717(p__$1,ch__$1,meta14718){
return (new cljs.core.async.t_cljs$core$async14717(p__$1,ch__$1,meta14718));
});

}

return (new cljs.core.async.t_cljs$core$async14717(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14721 = arguments.length;
switch (G__14721) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11241__auto___14761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14761,out){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14761,out){
return (function (state_14742){
var state_val_14743 = (state_14742[(1)]);
if((state_val_14743 === (7))){
var inst_14738 = (state_14742[(2)]);
var state_14742__$1 = state_14742;
var statearr_14744_14762 = state_14742__$1;
(statearr_14744_14762[(2)] = inst_14738);

(statearr_14744_14762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (1))){
var state_14742__$1 = state_14742;
var statearr_14745_14763 = state_14742__$1;
(statearr_14745_14763[(2)] = null);

(statearr_14745_14763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (4))){
var inst_14724 = (state_14742[(7)]);
var inst_14724__$1 = (state_14742[(2)]);
var inst_14725 = (inst_14724__$1 == null);
var state_14742__$1 = (function (){var statearr_14746 = state_14742;
(statearr_14746[(7)] = inst_14724__$1);

return statearr_14746;
})();
if(cljs.core.truth_(inst_14725)){
var statearr_14747_14764 = state_14742__$1;
(statearr_14747_14764[(1)] = (5));

} else {
var statearr_14748_14765 = state_14742__$1;
(statearr_14748_14765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (6))){
var inst_14724 = (state_14742[(7)]);
var inst_14729 = p.call(null,inst_14724);
var state_14742__$1 = state_14742;
if(cljs.core.truth_(inst_14729)){
var statearr_14749_14766 = state_14742__$1;
(statearr_14749_14766[(1)] = (8));

} else {
var statearr_14750_14767 = state_14742__$1;
(statearr_14750_14767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (3))){
var inst_14740 = (state_14742[(2)]);
var state_14742__$1 = state_14742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14742__$1,inst_14740);
} else {
if((state_val_14743 === (2))){
var state_14742__$1 = state_14742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14742__$1,(4),ch);
} else {
if((state_val_14743 === (11))){
var inst_14732 = (state_14742[(2)]);
var state_14742__$1 = state_14742;
var statearr_14751_14768 = state_14742__$1;
(statearr_14751_14768[(2)] = inst_14732);

(statearr_14751_14768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (9))){
var state_14742__$1 = state_14742;
var statearr_14752_14769 = state_14742__$1;
(statearr_14752_14769[(2)] = null);

(statearr_14752_14769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (5))){
var inst_14727 = cljs.core.async.close_BANG_.call(null,out);
var state_14742__$1 = state_14742;
var statearr_14753_14770 = state_14742__$1;
(statearr_14753_14770[(2)] = inst_14727);

(statearr_14753_14770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (10))){
var inst_14735 = (state_14742[(2)]);
var state_14742__$1 = (function (){var statearr_14754 = state_14742;
(statearr_14754[(8)] = inst_14735);

return statearr_14754;
})();
var statearr_14755_14771 = state_14742__$1;
(statearr_14755_14771[(2)] = null);

(statearr_14755_14771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14743 === (8))){
var inst_14724 = (state_14742[(7)]);
var state_14742__$1 = state_14742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14742__$1,(11),out,inst_14724);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14761,out))
;
return ((function (switch__11226__auto__,c__11241__auto___14761,out){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_14756 = [null,null,null,null,null,null,null,null,null];
(statearr_14756[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_14756[(1)] = (1));

return statearr_14756;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_14742){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14757){if((e14757 instanceof Object)){
var ex__11230__auto__ = e14757;
var statearr_14758_14772 = state_14742;
(statearr_14758_14772[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14773 = state_14742;
state_14742 = G__14773;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_14742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_14742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14761,out))
})();
var state__11243__auto__ = (function (){var statearr_14759 = f__11242__auto__.call(null);
(statearr_14759[(6)] = c__11241__auto___14761);

return statearr_14759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14761,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14775 = arguments.length;
switch (G__14775) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto__){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto__){
return (function (state_14838){
var state_val_14839 = (state_14838[(1)]);
if((state_val_14839 === (7))){
var inst_14834 = (state_14838[(2)]);
var state_14838__$1 = state_14838;
var statearr_14840_14878 = state_14838__$1;
(statearr_14840_14878[(2)] = inst_14834);

(statearr_14840_14878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (20))){
var inst_14804 = (state_14838[(7)]);
var inst_14815 = (state_14838[(2)]);
var inst_14816 = cljs.core.next.call(null,inst_14804);
var inst_14790 = inst_14816;
var inst_14791 = null;
var inst_14792 = (0);
var inst_14793 = (0);
var state_14838__$1 = (function (){var statearr_14841 = state_14838;
(statearr_14841[(8)] = inst_14792);

(statearr_14841[(9)] = inst_14791);

(statearr_14841[(10)] = inst_14793);

(statearr_14841[(11)] = inst_14790);

(statearr_14841[(12)] = inst_14815);

return statearr_14841;
})();
var statearr_14842_14879 = state_14838__$1;
(statearr_14842_14879[(2)] = null);

(statearr_14842_14879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (1))){
var state_14838__$1 = state_14838;
var statearr_14843_14880 = state_14838__$1;
(statearr_14843_14880[(2)] = null);

(statearr_14843_14880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (4))){
var inst_14779 = (state_14838[(13)]);
var inst_14779__$1 = (state_14838[(2)]);
var inst_14780 = (inst_14779__$1 == null);
var state_14838__$1 = (function (){var statearr_14844 = state_14838;
(statearr_14844[(13)] = inst_14779__$1);

return statearr_14844;
})();
if(cljs.core.truth_(inst_14780)){
var statearr_14845_14881 = state_14838__$1;
(statearr_14845_14881[(1)] = (5));

} else {
var statearr_14846_14882 = state_14838__$1;
(statearr_14846_14882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (15))){
var state_14838__$1 = state_14838;
var statearr_14850_14883 = state_14838__$1;
(statearr_14850_14883[(2)] = null);

(statearr_14850_14883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (21))){
var state_14838__$1 = state_14838;
var statearr_14851_14884 = state_14838__$1;
(statearr_14851_14884[(2)] = null);

(statearr_14851_14884[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (13))){
var inst_14792 = (state_14838[(8)]);
var inst_14791 = (state_14838[(9)]);
var inst_14793 = (state_14838[(10)]);
var inst_14790 = (state_14838[(11)]);
var inst_14800 = (state_14838[(2)]);
var inst_14801 = (inst_14793 + (1));
var tmp14847 = inst_14792;
var tmp14848 = inst_14791;
var tmp14849 = inst_14790;
var inst_14790__$1 = tmp14849;
var inst_14791__$1 = tmp14848;
var inst_14792__$1 = tmp14847;
var inst_14793__$1 = inst_14801;
var state_14838__$1 = (function (){var statearr_14852 = state_14838;
(statearr_14852[(8)] = inst_14792__$1);

(statearr_14852[(9)] = inst_14791__$1);

(statearr_14852[(10)] = inst_14793__$1);

(statearr_14852[(11)] = inst_14790__$1);

(statearr_14852[(14)] = inst_14800);

return statearr_14852;
})();
var statearr_14853_14885 = state_14838__$1;
(statearr_14853_14885[(2)] = null);

(statearr_14853_14885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (22))){
var state_14838__$1 = state_14838;
var statearr_14854_14886 = state_14838__$1;
(statearr_14854_14886[(2)] = null);

(statearr_14854_14886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (6))){
var inst_14779 = (state_14838[(13)]);
var inst_14788 = f.call(null,inst_14779);
var inst_14789 = cljs.core.seq.call(null,inst_14788);
var inst_14790 = inst_14789;
var inst_14791 = null;
var inst_14792 = (0);
var inst_14793 = (0);
var state_14838__$1 = (function (){var statearr_14855 = state_14838;
(statearr_14855[(8)] = inst_14792);

(statearr_14855[(9)] = inst_14791);

(statearr_14855[(10)] = inst_14793);

(statearr_14855[(11)] = inst_14790);

return statearr_14855;
})();
var statearr_14856_14887 = state_14838__$1;
(statearr_14856_14887[(2)] = null);

(statearr_14856_14887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (17))){
var inst_14804 = (state_14838[(7)]);
var inst_14808 = cljs.core.chunk_first.call(null,inst_14804);
var inst_14809 = cljs.core.chunk_rest.call(null,inst_14804);
var inst_14810 = cljs.core.count.call(null,inst_14808);
var inst_14790 = inst_14809;
var inst_14791 = inst_14808;
var inst_14792 = inst_14810;
var inst_14793 = (0);
var state_14838__$1 = (function (){var statearr_14857 = state_14838;
(statearr_14857[(8)] = inst_14792);

(statearr_14857[(9)] = inst_14791);

(statearr_14857[(10)] = inst_14793);

(statearr_14857[(11)] = inst_14790);

return statearr_14857;
})();
var statearr_14858_14888 = state_14838__$1;
(statearr_14858_14888[(2)] = null);

(statearr_14858_14888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (3))){
var inst_14836 = (state_14838[(2)]);
var state_14838__$1 = state_14838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14838__$1,inst_14836);
} else {
if((state_val_14839 === (12))){
var inst_14824 = (state_14838[(2)]);
var state_14838__$1 = state_14838;
var statearr_14859_14889 = state_14838__$1;
(statearr_14859_14889[(2)] = inst_14824);

(statearr_14859_14889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (2))){
var state_14838__$1 = state_14838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14838__$1,(4),in$);
} else {
if((state_val_14839 === (23))){
var inst_14832 = (state_14838[(2)]);
var state_14838__$1 = state_14838;
var statearr_14860_14890 = state_14838__$1;
(statearr_14860_14890[(2)] = inst_14832);

(statearr_14860_14890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (19))){
var inst_14819 = (state_14838[(2)]);
var state_14838__$1 = state_14838;
var statearr_14861_14891 = state_14838__$1;
(statearr_14861_14891[(2)] = inst_14819);

(statearr_14861_14891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (11))){
var inst_14804 = (state_14838[(7)]);
var inst_14790 = (state_14838[(11)]);
var inst_14804__$1 = cljs.core.seq.call(null,inst_14790);
var state_14838__$1 = (function (){var statearr_14862 = state_14838;
(statearr_14862[(7)] = inst_14804__$1);

return statearr_14862;
})();
if(inst_14804__$1){
var statearr_14863_14892 = state_14838__$1;
(statearr_14863_14892[(1)] = (14));

} else {
var statearr_14864_14893 = state_14838__$1;
(statearr_14864_14893[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (9))){
var inst_14826 = (state_14838[(2)]);
var inst_14827 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14838__$1 = (function (){var statearr_14865 = state_14838;
(statearr_14865[(15)] = inst_14826);

return statearr_14865;
})();
if(cljs.core.truth_(inst_14827)){
var statearr_14866_14894 = state_14838__$1;
(statearr_14866_14894[(1)] = (21));

} else {
var statearr_14867_14895 = state_14838__$1;
(statearr_14867_14895[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (5))){
var inst_14782 = cljs.core.async.close_BANG_.call(null,out);
var state_14838__$1 = state_14838;
var statearr_14868_14896 = state_14838__$1;
(statearr_14868_14896[(2)] = inst_14782);

(statearr_14868_14896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (14))){
var inst_14804 = (state_14838[(7)]);
var inst_14806 = cljs.core.chunked_seq_QMARK_.call(null,inst_14804);
var state_14838__$1 = state_14838;
if(inst_14806){
var statearr_14869_14897 = state_14838__$1;
(statearr_14869_14897[(1)] = (17));

} else {
var statearr_14870_14898 = state_14838__$1;
(statearr_14870_14898[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (16))){
var inst_14822 = (state_14838[(2)]);
var state_14838__$1 = state_14838;
var statearr_14871_14899 = state_14838__$1;
(statearr_14871_14899[(2)] = inst_14822);

(statearr_14871_14899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14839 === (10))){
var inst_14791 = (state_14838[(9)]);
var inst_14793 = (state_14838[(10)]);
var inst_14798 = cljs.core._nth.call(null,inst_14791,inst_14793);
var state_14838__$1 = state_14838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14838__$1,(13),out,inst_14798);
} else {
if((state_val_14839 === (18))){
var inst_14804 = (state_14838[(7)]);
var inst_14813 = cljs.core.first.call(null,inst_14804);
var state_14838__$1 = state_14838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14838__$1,(20),out,inst_14813);
} else {
if((state_val_14839 === (8))){
var inst_14792 = (state_14838[(8)]);
var inst_14793 = (state_14838[(10)]);
var inst_14795 = (inst_14793 < inst_14792);
var inst_14796 = inst_14795;
var state_14838__$1 = state_14838;
if(cljs.core.truth_(inst_14796)){
var statearr_14872_14900 = state_14838__$1;
(statearr_14872_14900[(1)] = (10));

} else {
var statearr_14873_14901 = state_14838__$1;
(statearr_14873_14901[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto__))
;
return ((function (switch__11226__auto__,c__11241__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11227__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11227__auto____0 = (function (){
var statearr_14874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14874[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11227__auto__);

(statearr_14874[(1)] = (1));

return statearr_14874;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11227__auto____1 = (function (state_14838){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14875){if((e14875 instanceof Object)){
var ex__11230__auto__ = e14875;
var statearr_14876_14902 = state_14838;
(statearr_14876_14902[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14903 = state_14838;
state_14838 = G__14903;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11227__auto__ = function(state_14838){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11227__auto____1.call(this,state_14838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11227__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11227__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto__))
})();
var state__11243__auto__ = (function (){var statearr_14877 = f__11242__auto__.call(null);
(statearr_14877[(6)] = c__11241__auto__);

return statearr_14877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto__))
);

return c__11241__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14905 = arguments.length;
switch (G__14905) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14908 = arguments.length;
switch (G__14908) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14911 = arguments.length;
switch (G__14911) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11241__auto___14958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___14958,out){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___14958,out){
return (function (state_14935){
var state_val_14936 = (state_14935[(1)]);
if((state_val_14936 === (7))){
var inst_14930 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14937_14959 = state_14935__$1;
(statearr_14937_14959[(2)] = inst_14930);

(statearr_14937_14959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (1))){
var inst_14912 = null;
var state_14935__$1 = (function (){var statearr_14938 = state_14935;
(statearr_14938[(7)] = inst_14912);

return statearr_14938;
})();
var statearr_14939_14960 = state_14935__$1;
(statearr_14939_14960[(2)] = null);

(statearr_14939_14960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (4))){
var inst_14915 = (state_14935[(8)]);
var inst_14915__$1 = (state_14935[(2)]);
var inst_14916 = (inst_14915__$1 == null);
var inst_14917 = cljs.core.not.call(null,inst_14916);
var state_14935__$1 = (function (){var statearr_14940 = state_14935;
(statearr_14940[(8)] = inst_14915__$1);

return statearr_14940;
})();
if(inst_14917){
var statearr_14941_14961 = state_14935__$1;
(statearr_14941_14961[(1)] = (5));

} else {
var statearr_14942_14962 = state_14935__$1;
(statearr_14942_14962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (6))){
var state_14935__$1 = state_14935;
var statearr_14943_14963 = state_14935__$1;
(statearr_14943_14963[(2)] = null);

(statearr_14943_14963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (3))){
var inst_14932 = (state_14935[(2)]);
var inst_14933 = cljs.core.async.close_BANG_.call(null,out);
var state_14935__$1 = (function (){var statearr_14944 = state_14935;
(statearr_14944[(9)] = inst_14932);

return statearr_14944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14935__$1,inst_14933);
} else {
if((state_val_14936 === (2))){
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14935__$1,(4),ch);
} else {
if((state_val_14936 === (11))){
var inst_14915 = (state_14935[(8)]);
var inst_14924 = (state_14935[(2)]);
var inst_14912 = inst_14915;
var state_14935__$1 = (function (){var statearr_14945 = state_14935;
(statearr_14945[(7)] = inst_14912);

(statearr_14945[(10)] = inst_14924);

return statearr_14945;
})();
var statearr_14946_14964 = state_14935__$1;
(statearr_14946_14964[(2)] = null);

(statearr_14946_14964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (9))){
var inst_14915 = (state_14935[(8)]);
var state_14935__$1 = state_14935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14935__$1,(11),out,inst_14915);
} else {
if((state_val_14936 === (5))){
var inst_14915 = (state_14935[(8)]);
var inst_14912 = (state_14935[(7)]);
var inst_14919 = cljs.core._EQ_.call(null,inst_14915,inst_14912);
var state_14935__$1 = state_14935;
if(inst_14919){
var statearr_14948_14965 = state_14935__$1;
(statearr_14948_14965[(1)] = (8));

} else {
var statearr_14949_14966 = state_14935__$1;
(statearr_14949_14966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (10))){
var inst_14927 = (state_14935[(2)]);
var state_14935__$1 = state_14935;
var statearr_14950_14967 = state_14935__$1;
(statearr_14950_14967[(2)] = inst_14927);

(statearr_14950_14967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14936 === (8))){
var inst_14912 = (state_14935[(7)]);
var tmp14947 = inst_14912;
var inst_14912__$1 = tmp14947;
var state_14935__$1 = (function (){var statearr_14951 = state_14935;
(statearr_14951[(7)] = inst_14912__$1);

return statearr_14951;
})();
var statearr_14952_14968 = state_14935__$1;
(statearr_14952_14968[(2)] = null);

(statearr_14952_14968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___14958,out))
;
return ((function (switch__11226__auto__,c__11241__auto___14958,out){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_14953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14953[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_14953[(1)] = (1));

return statearr_14953;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_14935){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_14935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e14954){if((e14954 instanceof Object)){
var ex__11230__auto__ = e14954;
var statearr_14955_14969 = state_14935;
(statearr_14955_14969[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14970 = state_14935;
state_14935 = G__14970;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_14935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_14935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___14958,out))
})();
var state__11243__auto__ = (function (){var statearr_14956 = f__11242__auto__.call(null);
(statearr_14956[(6)] = c__11241__auto___14958);

return statearr_14956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___14958,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14972 = arguments.length;
switch (G__14972) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11241__auto___15038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___15038,out){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___15038,out){
return (function (state_15010){
var state_val_15011 = (state_15010[(1)]);
if((state_val_15011 === (7))){
var inst_15006 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15012_15039 = state_15010__$1;
(statearr_15012_15039[(2)] = inst_15006);

(statearr_15012_15039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (1))){
var inst_14973 = (new Array(n));
var inst_14974 = inst_14973;
var inst_14975 = (0);
var state_15010__$1 = (function (){var statearr_15013 = state_15010;
(statearr_15013[(7)] = inst_14974);

(statearr_15013[(8)] = inst_14975);

return statearr_15013;
})();
var statearr_15014_15040 = state_15010__$1;
(statearr_15014_15040[(2)] = null);

(statearr_15014_15040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (4))){
var inst_14978 = (state_15010[(9)]);
var inst_14978__$1 = (state_15010[(2)]);
var inst_14979 = (inst_14978__$1 == null);
var inst_14980 = cljs.core.not.call(null,inst_14979);
var state_15010__$1 = (function (){var statearr_15015 = state_15010;
(statearr_15015[(9)] = inst_14978__$1);

return statearr_15015;
})();
if(inst_14980){
var statearr_15016_15041 = state_15010__$1;
(statearr_15016_15041[(1)] = (5));

} else {
var statearr_15017_15042 = state_15010__$1;
(statearr_15017_15042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (15))){
var inst_15000 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15018_15043 = state_15010__$1;
(statearr_15018_15043[(2)] = inst_15000);

(statearr_15018_15043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (13))){
var state_15010__$1 = state_15010;
var statearr_15019_15044 = state_15010__$1;
(statearr_15019_15044[(2)] = null);

(statearr_15019_15044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (6))){
var inst_14975 = (state_15010[(8)]);
var inst_14996 = (inst_14975 > (0));
var state_15010__$1 = state_15010;
if(cljs.core.truth_(inst_14996)){
var statearr_15020_15045 = state_15010__$1;
(statearr_15020_15045[(1)] = (12));

} else {
var statearr_15021_15046 = state_15010__$1;
(statearr_15021_15046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (3))){
var inst_15008 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15010__$1,inst_15008);
} else {
if((state_val_15011 === (12))){
var inst_14974 = (state_15010[(7)]);
var inst_14998 = cljs.core.vec.call(null,inst_14974);
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15010__$1,(15),out,inst_14998);
} else {
if((state_val_15011 === (2))){
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15010__$1,(4),ch);
} else {
if((state_val_15011 === (11))){
var inst_14990 = (state_15010[(2)]);
var inst_14991 = (new Array(n));
var inst_14974 = inst_14991;
var inst_14975 = (0);
var state_15010__$1 = (function (){var statearr_15022 = state_15010;
(statearr_15022[(10)] = inst_14990);

(statearr_15022[(7)] = inst_14974);

(statearr_15022[(8)] = inst_14975);

return statearr_15022;
})();
var statearr_15023_15047 = state_15010__$1;
(statearr_15023_15047[(2)] = null);

(statearr_15023_15047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (9))){
var inst_14974 = (state_15010[(7)]);
var inst_14988 = cljs.core.vec.call(null,inst_14974);
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15010__$1,(11),out,inst_14988);
} else {
if((state_val_15011 === (5))){
var inst_14983 = (state_15010[(11)]);
var inst_14974 = (state_15010[(7)]);
var inst_14975 = (state_15010[(8)]);
var inst_14978 = (state_15010[(9)]);
var inst_14982 = (inst_14974[inst_14975] = inst_14978);
var inst_14983__$1 = (inst_14975 + (1));
var inst_14984 = (inst_14983__$1 < n);
var state_15010__$1 = (function (){var statearr_15024 = state_15010;
(statearr_15024[(11)] = inst_14983__$1);

(statearr_15024[(12)] = inst_14982);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14984)){
var statearr_15025_15048 = state_15010__$1;
(statearr_15025_15048[(1)] = (8));

} else {
var statearr_15026_15049 = state_15010__$1;
(statearr_15026_15049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (14))){
var inst_15003 = (state_15010[(2)]);
var inst_15004 = cljs.core.async.close_BANG_.call(null,out);
var state_15010__$1 = (function (){var statearr_15028 = state_15010;
(statearr_15028[(13)] = inst_15003);

return statearr_15028;
})();
var statearr_15029_15050 = state_15010__$1;
(statearr_15029_15050[(2)] = inst_15004);

(statearr_15029_15050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (10))){
var inst_14994 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15030_15051 = state_15010__$1;
(statearr_15030_15051[(2)] = inst_14994);

(statearr_15030_15051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (8))){
var inst_14983 = (state_15010[(11)]);
var inst_14974 = (state_15010[(7)]);
var tmp15027 = inst_14974;
var inst_14974__$1 = tmp15027;
var inst_14975 = inst_14983;
var state_15010__$1 = (function (){var statearr_15031 = state_15010;
(statearr_15031[(7)] = inst_14974__$1);

(statearr_15031[(8)] = inst_14975);

return statearr_15031;
})();
var statearr_15032_15052 = state_15010__$1;
(statearr_15032_15052[(2)] = null);

(statearr_15032_15052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___15038,out))
;
return ((function (switch__11226__auto__,c__11241__auto___15038,out){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_15033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15033[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_15033[(1)] = (1));

return statearr_15033;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_15010){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_15010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e15034){if((e15034 instanceof Object)){
var ex__11230__auto__ = e15034;
var statearr_15035_15053 = state_15010;
(statearr_15035_15053[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15054 = state_15010;
state_15010 = G__15054;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_15010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_15010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___15038,out))
})();
var state__11243__auto__ = (function (){var statearr_15036 = f__11242__auto__.call(null);
(statearr_15036[(6)] = c__11241__auto___15038);

return statearr_15036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___15038,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15056 = arguments.length;
switch (G__15056) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11241__auto___15126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11241__auto___15126,out){
return (function (){
var f__11242__auto__ = (function (){var switch__11226__auto__ = ((function (c__11241__auto___15126,out){
return (function (state_15098){
var state_val_15099 = (state_15098[(1)]);
if((state_val_15099 === (7))){
var inst_15094 = (state_15098[(2)]);
var state_15098__$1 = state_15098;
var statearr_15100_15127 = state_15098__$1;
(statearr_15100_15127[(2)] = inst_15094);

(statearr_15100_15127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (1))){
var inst_15057 = [];
var inst_15058 = inst_15057;
var inst_15059 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15098__$1 = (function (){var statearr_15101 = state_15098;
(statearr_15101[(7)] = inst_15059);

(statearr_15101[(8)] = inst_15058);

return statearr_15101;
})();
var statearr_15102_15128 = state_15098__$1;
(statearr_15102_15128[(2)] = null);

(statearr_15102_15128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (4))){
var inst_15062 = (state_15098[(9)]);
var inst_15062__$1 = (state_15098[(2)]);
var inst_15063 = (inst_15062__$1 == null);
var inst_15064 = cljs.core.not.call(null,inst_15063);
var state_15098__$1 = (function (){var statearr_15103 = state_15098;
(statearr_15103[(9)] = inst_15062__$1);

return statearr_15103;
})();
if(inst_15064){
var statearr_15104_15129 = state_15098__$1;
(statearr_15104_15129[(1)] = (5));

} else {
var statearr_15105_15130 = state_15098__$1;
(statearr_15105_15130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (15))){
var inst_15088 = (state_15098[(2)]);
var state_15098__$1 = state_15098;
var statearr_15106_15131 = state_15098__$1;
(statearr_15106_15131[(2)] = inst_15088);

(statearr_15106_15131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (13))){
var state_15098__$1 = state_15098;
var statearr_15107_15132 = state_15098__$1;
(statearr_15107_15132[(2)] = null);

(statearr_15107_15132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (6))){
var inst_15058 = (state_15098[(8)]);
var inst_15083 = inst_15058.length;
var inst_15084 = (inst_15083 > (0));
var state_15098__$1 = state_15098;
if(cljs.core.truth_(inst_15084)){
var statearr_15108_15133 = state_15098__$1;
(statearr_15108_15133[(1)] = (12));

} else {
var statearr_15109_15134 = state_15098__$1;
(statearr_15109_15134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (3))){
var inst_15096 = (state_15098[(2)]);
var state_15098__$1 = state_15098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15098__$1,inst_15096);
} else {
if((state_val_15099 === (12))){
var inst_15058 = (state_15098[(8)]);
var inst_15086 = cljs.core.vec.call(null,inst_15058);
var state_15098__$1 = state_15098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15098__$1,(15),out,inst_15086);
} else {
if((state_val_15099 === (2))){
var state_15098__$1 = state_15098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15098__$1,(4),ch);
} else {
if((state_val_15099 === (11))){
var inst_15062 = (state_15098[(9)]);
var inst_15066 = (state_15098[(10)]);
var inst_15076 = (state_15098[(2)]);
var inst_15077 = [];
var inst_15078 = inst_15077.push(inst_15062);
var inst_15058 = inst_15077;
var inst_15059 = inst_15066;
var state_15098__$1 = (function (){var statearr_15110 = state_15098;
(statearr_15110[(11)] = inst_15078);

(statearr_15110[(7)] = inst_15059);

(statearr_15110[(8)] = inst_15058);

(statearr_15110[(12)] = inst_15076);

return statearr_15110;
})();
var statearr_15111_15135 = state_15098__$1;
(statearr_15111_15135[(2)] = null);

(statearr_15111_15135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (9))){
var inst_15058 = (state_15098[(8)]);
var inst_15074 = cljs.core.vec.call(null,inst_15058);
var state_15098__$1 = state_15098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15098__$1,(11),out,inst_15074);
} else {
if((state_val_15099 === (5))){
var inst_15062 = (state_15098[(9)]);
var inst_15059 = (state_15098[(7)]);
var inst_15066 = (state_15098[(10)]);
var inst_15066__$1 = f.call(null,inst_15062);
var inst_15067 = cljs.core._EQ_.call(null,inst_15066__$1,inst_15059);
var inst_15068 = cljs.core.keyword_identical_QMARK_.call(null,inst_15059,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15069 = (inst_15067) || (inst_15068);
var state_15098__$1 = (function (){var statearr_15112 = state_15098;
(statearr_15112[(10)] = inst_15066__$1);

return statearr_15112;
})();
if(cljs.core.truth_(inst_15069)){
var statearr_15113_15136 = state_15098__$1;
(statearr_15113_15136[(1)] = (8));

} else {
var statearr_15114_15137 = state_15098__$1;
(statearr_15114_15137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (14))){
var inst_15091 = (state_15098[(2)]);
var inst_15092 = cljs.core.async.close_BANG_.call(null,out);
var state_15098__$1 = (function (){var statearr_15116 = state_15098;
(statearr_15116[(13)] = inst_15091);

return statearr_15116;
})();
var statearr_15117_15138 = state_15098__$1;
(statearr_15117_15138[(2)] = inst_15092);

(statearr_15117_15138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (10))){
var inst_15081 = (state_15098[(2)]);
var state_15098__$1 = state_15098;
var statearr_15118_15139 = state_15098__$1;
(statearr_15118_15139[(2)] = inst_15081);

(statearr_15118_15139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15099 === (8))){
var inst_15062 = (state_15098[(9)]);
var inst_15058 = (state_15098[(8)]);
var inst_15066 = (state_15098[(10)]);
var inst_15071 = inst_15058.push(inst_15062);
var tmp15115 = inst_15058;
var inst_15058__$1 = tmp15115;
var inst_15059 = inst_15066;
var state_15098__$1 = (function (){var statearr_15119 = state_15098;
(statearr_15119[(14)] = inst_15071);

(statearr_15119[(7)] = inst_15059);

(statearr_15119[(8)] = inst_15058__$1);

return statearr_15119;
})();
var statearr_15120_15140 = state_15098__$1;
(statearr_15120_15140[(2)] = null);

(statearr_15120_15140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11241__auto___15126,out))
;
return ((function (switch__11226__auto__,c__11241__auto___15126,out){
return (function() {
var cljs$core$async$state_machine__11227__auto__ = null;
var cljs$core$async$state_machine__11227__auto____0 = (function (){
var statearr_15121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15121[(0)] = cljs$core$async$state_machine__11227__auto__);

(statearr_15121[(1)] = (1));

return statearr_15121;
});
var cljs$core$async$state_machine__11227__auto____1 = (function (state_15098){
while(true){
var ret_value__11228__auto__ = (function (){try{while(true){
var result__11229__auto__ = switch__11226__auto__.call(null,state_15098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11229__auto__;
}
break;
}
}catch (e15122){if((e15122 instanceof Object)){
var ex__11230__auto__ = e15122;
var statearr_15123_15141 = state_15098;
(statearr_15123_15141[(5)] = ex__11230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15142 = state_15098;
state_15098 = G__15142;
continue;
} else {
return ret_value__11228__auto__;
}
break;
}
});
cljs$core$async$state_machine__11227__auto__ = function(state_15098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11227__auto____1.call(this,state_15098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11227__auto____0;
cljs$core$async$state_machine__11227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11227__auto____1;
return cljs$core$async$state_machine__11227__auto__;
})()
;})(switch__11226__auto__,c__11241__auto___15126,out))
})();
var state__11243__auto__ = (function (){var statearr_15124 = f__11242__auto__.call(null);
(statearr_15124[(6)] = c__11241__auto___15126);

return statearr_15124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11243__auto__);
});})(c__11241__auto___15126,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
