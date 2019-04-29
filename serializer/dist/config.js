(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gameConfig"] = factory();
	else
		root["gameConfig"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@egret_ts-binary-serializer@1.2.6@@egret/ts-binary-serializer/dist/BinarySerializer.es.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/_@egret_ts-binary-serializer@1.2.6@@egret/ts-binary-serializer/dist/BinarySerializer.es.js ***!
  \*****************************************************************************************************************/
/*! exports provided: BinarySerializeOptions, BinarySerialize, BinaryDeserialize, SerializeField, DataType, TypeReflector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinarySerializeOptions", function() { return BinarySerializeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinarySerialize", function() { return BinarySerialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryDeserialize", function() { return BinaryDeserialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerializeField", function() { return SerializeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeReflector", function() { return TypeReflector; });
var TypeMetaProperty = /** @class */ (function () {
    function TypeMetaProperty(key, datatype, isary, pclass) {
        if (isary === void 0) { isary = false; }
        this.isArray = false;
        this.key = key;
        this.datatype = datatype;
        this.isArray = isary;
        this.pclass = pclass;
    }
    return TypeMetaProperty;
}());
var TypeMetaClass = /** @class */ (function () {
    function TypeMetaClass() {
        this.m_needSort = true;
    }
    Object.defineProperty(TypeMetaClass.prototype, "prototype", {
        get: function () {
            return this.m_prototype;
        },
        set: function (v) {
            this.m_prototype = v;
            this.pname = this.protoName;
        },
        enumerable: true,
        configurable: true
    });
    TypeMetaClass.prototype.addProperty = function (k, t, isary) {
        if (isary === void 0) { isary = false; }
        var p = this.properties;
        for (var i = 0, len = p.length; i < len; i++) {
            if (p[i].key == k)
                return;
        }
        p.push(new TypeMetaProperty(k, t, isary));
        this.m_needSort = true;
    };
    Object.defineProperty(TypeMetaClass.prototype, "protoName", {
        get: function () {
            return this.prototype.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    TypeMetaClass.prototype.sortProperty = function () {
        if (!this.m_needSort)
            return;
        // this.properties.sort((a, b) => sort(a, b));
        this.m_needSort = false;
        return this;
    };
    return TypeMetaClass;
}());

var DataType;
(function (DataType) {
    DataType[DataType["Null"] = 0] = "Null";
    DataType[DataType["Float32"] = 1] = "Float32";
    DataType[DataType["Float64"] = 2] = "Float64";
    DataType[DataType["Int32"] = 3] = "Int32";
    DataType[DataType["Int16"] = 4] = "Int16";
    DataType[DataType["Int8"] = 5] = "Int8";
    DataType[DataType["Uint32"] = 6] = "Uint32";
    DataType[DataType["Uint16"] = 7] = "Uint16";
    DataType[DataType["Uint8"] = 8] = "Uint8";
    DataType[DataType["String"] = 9] = "String";
    DataType[DataType["Bool"] = 10] = "Bool";
    DataType[DataType["Object"] = 11] = "Object";
    DataType[DataType["Float16"] = 12] = "Float16";
    DataType[DataType["Map"] = 13] = "Map";
})(DataType || (DataType = {}));

var TypeReflector = /** @class */ (function () {
    function TypeReflector() {
    }
    TypeReflector.register = function (proto, property, type, array, ptype) {
        if (array === void 0) { array = false; }
        var metaclass = TypeReflector.getMetaClass(proto);
        if (metaclass == null) {
            metaclass = new TypeMetaClass();
            metaclass.prototype = proto;
            metaclass.properties = [];
            TypeReflector.meta.push(metaclass);
        }
        var mp = new TypeMetaProperty(property, type, array);
        if (type == DataType.Object || type == DataType.Map) {
            if (typeof ptype === "number") {
                if (ptype == DataType.Null || ptype == DataType.Object || ptype == DataType.Map) {
                    throw new Error("invalid pclass for object/map");
                }
                mp.pclass = ptype;
            }
            else {
                mp.pclass = TypeReflector.getMetaClass(ptype.prototype);
            }
        }
        metaclass.properties.push(mp);
    };
    TypeReflector.getMetaClass = function (prototype) {
        var meta = TypeReflector.meta;
        for (var i = 0, len = meta.length; i < len; i++) {
            var m = meta[i];
            if (m.prototype === prototype)
                return m;
        }
        return null;
    };
    TypeReflector.meta = [];
    return TypeReflector;
}());

var Float16 = /** @class */ (function () {
    function Float16() {
    }
    Float16.ByteToFloat16 = function (uint16) {
        var d = uint16;
        var negative = ((d >> 15) & 1) != 0;
        var mask = 31;
        var exponent = (d >> 10) & mask;
        var significand = d & 1023;
        if (exponent == 0 && significand == 0) {
            return negative ? -0 : 0;
        }
        if (exponent == mask) {
            if (significand == 0) {
                return negative ? -Infinity : Infinity;
            }
            else {
                return NaN;
            }
        }
        var f = 0;
        if (exponent == 0) {
            f = significand / 512.0;
        }
        else {
            f = (1.0 + significand / 1024.0);
        }
        return (negative ? -1.0 : 1.0) * Math.pow(2, exponent - 15) * f;
    };
    Float16.Float16ToByte = function (float16) {
        var f = float16;
        if (isNaN(f))
            return 31745;
        if (1 / f === -Infinity)
            return 32768;
        if (f === 0)
            return 0;
        if (f === -Infinity)
            return 64512;
        if (f === Infinity)
            return 31744;
        var negative = f < 0;
        f = Math.abs(f);
        var fe = Math.floor(f);
        var e = 0;
        var si = 0;
        if (fe > 0) {
            while (fe > 0) {
                e++;
                fe = fe >> 1;
            }
            e += 14;
            var em = Math.pow(2, e - 15);
            var s = f / em - 1.0;
            si = Math.round(s * 1024);
        }
        else {
            var fi = f * (1 << 15);
            fe = Math.floor(fi);
            if (fe > 0) {
                while (fe > 0) {
                    e++;
                    fe = fe >> 1;
                }
                e--;
            }
            if (e == 0) {
                si = Math.round(fi * 512);
            }
            else {
                var em = 1 << e;
                var s = fi / em - 1.0;
                si = Math.round(s * 1024);
            }
        }
        return ((e << 10) + si) + (negative ? 1 << 15 : 0);
    };
    return Float16;
}());

var BinaryBuffer = /** @class */ (function () {
    function BinaryBuffer() {
        this.m_arrayBufferCurrentSize = BinaryBuffer.DEFAULT_BUFFER_SIZE;
        this.m_pos = 0;
    }
    BinaryBuffer.initialize = function () {
        for (var t in DataType) {
            if (!isNaN(Number(t)))
                continue;
            var v = DataType[t];
            this.WriteFuncMap[v] = "write" + t;
            this.ReadFuncMap[v] = "read" + t;
        }
    };
    Object.defineProperty(BinaryBuffer.prototype, "pos", {
        get: function () {
            return this.m_pos;
        },
        enumerable: true,
        configurable: true
    });
    BinaryBuffer.create = function () {
        var buffer = new BinaryBuffer();
        var uint8ary = new Uint8Array(BinaryBuffer.DEFAULT_BUFFER_SIZE);
        buffer.m_arrayBuffer = uint8ary;
        buffer.m_view = new DataView(uint8ary.buffer);
        return buffer;
    };
    BinaryBuffer.prototype.checkBufferExpand = function (appendSize) {
        if (appendSize === void 0) { appendSize = 8; }
        var cursize = this.m_arrayBufferCurrentSize;
        if (this.m_pos + appendSize >= cursize) {
            var tarsize = cursize + appendSize;
            while (cursize < tarsize) {
                cursize = cursize << 1;
            }
            var curbuf = this.m_arrayBuffer;
            var newbuf = new Uint8Array(cursize);
            newbuf.set(curbuf, 0);
            this.m_arrayBuffer = newbuf;
            this.m_arrayBufferCurrentSize = cursize;
            this.m_view = new DataView(newbuf.buffer, 0, cursize);
        }
    };
    BinaryBuffer.createWithView = function (arybuffer, offset, bytesize) {
        var buffer = new BinaryBuffer();
        buffer.m_arrayBuffer = new Uint8Array(arybuffer);
        buffer.m_view = new DataView(arybuffer, offset, bytesize);
        buffer.m_pos = offset;
        return buffer;
    };
    BinaryBuffer.prototype.pushProperty = function (type, val, isary, tmc) {
        if (isary === void 0) { isary = false; }
        if (val == null) {
            this.writeType(DataType.Null);
            return;
        }
        this.writeType(type);
        var f = this[BinaryBuffer.WriteFuncMap[type]];
        var isobj = type == DataType.Object;
        var ismap = type == DataType.Map;
        if (!isary) {
            this.checkBufferExpand(8);
            if (isobj) {
                Reflect.apply(f, this, [tmc]);
            }
            else if (ismap) {
                this.writeMap(val, tmc);
            }
            else {
                Reflect.apply(f, this, [val]);
            }
            return;
        }
        if (!Array.isArray(val)) {
            var msg = "target property: " + val + " is not an array.";
            throw new Error(msg);
        }
        var ary = val;
        var arylen = ary.length;
        if (arylen > 65535) {
            throw new Error('array length exceeded.');
        }
        this.checkBufferExpand(arylen * 8 + 4);
        this.writeUint16(arylen);
        if (isobj) {
            for (var i = 0; i < arylen; i++) {
                Reflect.apply(f, this, [ary[i], tmc]);
            }
        }
        else if (ismap) {
            for (var i = 0; i < arylen; i++) {
                this.writeMap(ary[i], tmc);
            }
        }
        else {
            for (var i = 0; i < arylen; i++) {
                f.call(this, ary[i]);
            }
        }
    };
    BinaryBuffer.prototype.readProperty = function (type, isary, tmc) {
        if (isary === void 0) { isary = false; }
        var t = this.readType();
        if (t == DataType.Null)
            return null;
        if (t != type)
            throw new Error("data type mismatch " + t + " " + type);
        var f = this[BinaryBuffer.ReadFuncMap[type]];
        var isobj = type == DataType.Object;
        var ismap = type == DataType.Map;
        if (!isary) {
            if (isobj) {
                if (tmc == null) {
                    throw new Error('tmc is null');
                }
                return f.call(this, tmc);
            }
            else if (ismap) {
                if (tmc == null)
                    throw new Error("read property tmc missing: " + type);
                return this.readMap(tmc);
            }
            else {
                return f.call(this, null);
            }
        }
        var arylen = this.readUint16();
        if (arylen == 0)
            return [];
        var ary = [];
        if (isobj) {
            for (var i = 0; i < arylen; i++) {
                ary.push(f.call(this, tmc));
            }
        }
        else if (ismap) {
            if (tmc == null)
                throw new Error("read property tmc missing: " + type);
            for (var i = 0; i < arylen; i++) {
                ary.push(this.readMap(tmc));
            }
        }
        else {
            for (var i = 0; i < arylen; i++) {
                ary.push(f.call(this, null));
            }
        }
        return ary;
    };
    BinaryBuffer.prototype.writeMap = function (o, tmc) {
        if (o == null) {
            this.writeUint16(0);
            return;
        }
        var ownnames = Object.getOwnPropertyNames(o);
        ownnames.sort();
        if (tmc == null)
            throw new Error("type not found for:" + o);
        var len = ownnames.length;
        if (len > 65535)
            throw new Error("map size exceed!");
        this.writeUint16(len);
        for (var t = 0, len_1 = ownnames.length; t < len_1; t++) {
            var key = ownnames[t];
            this.writeString(key);
            var v = o[key];
            if (v == null) {
                this.writeBool(false);
            }
            else {
                this.writeBool(true);
                if (tmc instanceof TypeMetaClass) {
                    this.writeObject(v, tmc);
                }
                else {
                    var f = this[BinaryBuffer.WriteFuncMap[tmc]];
                    f.call(this, v);
                }
            }
        }
    };
    BinaryBuffer.prototype.readMap = function (tmc) {
        var len = this.readUint16();
        if (len == 0)
            return null;
        var ret = {};
        for (var t = 0; t < len; t++) {
            var key = this.readString();
            if (key == null)
                throw new Error("key is null");
            var notnull = this.readBool();
            if (notnull) {
                if (tmc instanceof TypeMetaClass) {
                    ret[key] = this.readObject(tmc);
                }
                else {
                    var f = this[BinaryBuffer.ReadFuncMap[tmc]];
                    ret[key] = f.call(this, null);
                }
            }
            else {
                ret[key] = null;
            }
        }
        return ret;
    };
    BinaryBuffer.prototype.writeFloat16 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        var d = Float16.Float16ToByte(v);
        view.setUint16(p, d);
        this.m_pos += 2;
    };
    BinaryBuffer.prototype.readFloat16 = function () {
        var view = this.m_view;
        var d = view.getUint16(this.m_pos);
        var ret = Float16.ByteToFloat16(d);
        this.m_pos += 2;
        return ret;
    };
    BinaryBuffer.prototype.writeFloat32 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setFloat32(p, v);
        this.m_pos += 4;
    };
    BinaryBuffer.prototype.readFloat32 = function () {
        var view = this.m_view;
        var ret = view.getFloat32(this.m_pos);
        this.m_pos += 4;
        return ret;
    };
    BinaryBuffer.prototype.writeFloat64 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        try {
            view.setFloat64(p, v);
        }
        catch (e) {
            console.log(p, this.m_arrayBufferCurrentSize);
            throw e;
        }
        this.m_pos += 8;
    };
    BinaryBuffer.prototype.readFloat64 = function () {
        var view = this.m_view;
        var ret = view.getFloat64(this.m_pos);
        this.m_pos += 8;
        return ret;
    };
    BinaryBuffer.prototype.writeInt8 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setInt8(p, v);
        this.m_pos++;
    };
    BinaryBuffer.prototype.readInt8 = function () {
        var view = this.m_view;
        var ret = view.getInt8(this.m_pos);
        this.m_pos += 1;
        return ret;
    };
    BinaryBuffer.prototype.writeUint8 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setUint8(p, v);
        this.m_pos++;
    };
    BinaryBuffer.prototype.readUint8 = function () {
        var view = this.m_view;
        var ret = view.getUint8(this.m_pos);
        this.m_pos += 1;
        return ret;
    };
    BinaryBuffer.prototype.writeInt16 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setInt16(p, v);
        this.m_pos += 2;
    };
    BinaryBuffer.prototype.readInt16 = function () {
        var view = this.m_view;
        var ret = view.getInt16(this.m_pos);
        this.m_pos += 2;
        return ret;
    };
    BinaryBuffer.prototype.writeUint16 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setUint16(p, v);
        this.m_pos += 2;
    };
    BinaryBuffer.prototype.readUint16 = function () {
        var view = this.m_view;
        var ret = view.getUint16(this.m_pos);
        this.m_pos += 2;
        return ret;
    };
    BinaryBuffer.prototype.writeInt32 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setInt32(p, v);
        this.m_pos += 4;
    };
    BinaryBuffer.prototype.readInt32 = function () {
        var view = this.m_view;
        var ret = view.getInt32(this.m_pos);
        this.m_pos += 4;
        return ret;
    };
    BinaryBuffer.prototype.writeUint32 = function (v) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setUint32(p, v);
        this.m_pos += 4;
    };
    BinaryBuffer.prototype.readUint32 = function () {
        var view = this.m_view;
        var ret = view.getUint32(this.m_pos);
        this.m_pos += 4;
        return ret;
    };
    BinaryBuffer.prototype.writeBool = function (b) {
        var view = this.m_view;
        var p = this.m_pos;
        view.setUint8(p, b
            ? 1
            : 0);
        this.m_pos++;
    };
    BinaryBuffer.prototype.readBool = function () {
        var view = this.m_view;
        var ret = view.getUint8(this.m_pos);
        this.m_pos++;
        return ret == 1;
    };
    BinaryBuffer.prototype.writeString = function (s) {
        this.writeUTF8StrFast(s);
    };
    BinaryBuffer.prototype.readString = function () {
        return this.readUTF8StrFast();
    };
    // hack implement https://stackoverflow.com/questions/17191945/conversion-between-utf-8-arraybuffer-and-string
    BinaryBuffer.prototype.readUTF8StrFast = function () {
        var len = this.readInt32();
        if (len == -1)
            return null;
        var ary = new Array(len);
        var s = this.m_pos;
        var buf = this.m_arrayBuffer;
        for (var t = 0; t < len; t++) {
            ary[t] = buf[s++];
        }
        var ustr = String.fromCharCode.apply(String, ary);
        this.m_pos = s;
        return decodeURIComponent(escape(ustr));
    };
    BinaryBuffer.prototype.writeUTF8StrFast = function (str) {
        if (str == null) {
            this.writeInt32(-1);
            return;
        }
        var utf8 = unescape(encodeURIComponent(str));
        var len = utf8.length;
        this.writeInt32(len);
        this.checkBufferExpand(len);
        var view = this.m_view;
        var p = this.m_pos;
        for (var t = 0; t < len; t++) {
            view.setUint8(p++, utf8.charCodeAt(t));
        }
        this.m_pos = p;
    };
    BinaryBuffer.prototype.writeUTF8Str = function (str) {
        if (str == null) {
            this.writeInt32(-1);
            return;
        }
        var len = str.length;
        this.writeInt32(len);
        this.checkBufferExpand(len * 4);
        var view = this.m_view;
        var p = this.m_pos;
        for (var t = 0; t < len; t++) {
            var c = str.charCodeAt(t);
            if (c < 0x80) {
                view.setUint8(p++, c);
            }
            else if (c < 0x800) {
                view.setUint8(p++, (c >> 6) | 0xc0);
                view.setUint8(p++, 0x80 | (c & 0x3f));
            }
            else if (c < 0x10000) {
                view.setUint8(p++, 0xe0 | (c >> 12));
                view.setUint8(p++, 0x80 | ((c >> 6) & 0x3f));
                view.setUint8(p++, 0x80 | (c & 0x3f));
            }
            else {
                view.setUint8(p++, 0xf0 | (c >> 18));
                view.setUint8(p++, 0x80 | ((c >> 12) & 0x3f));
                view.setUint8(p++, 0x80 | ((c >> 6) & 0x3f));
                view.setUint8(p++, 0x80 | (c & 0x3f));
            }
        }
        this.m_pos = p;
    };
    BinaryBuffer.prototype.readUTF8Str = function () {
        var len = this.readInt32();
        if (len == -1) {
            return null;
        }
        var charary = new Array(len);
        for (var t = 0; t < len; t++) {
            var c0 = this.readUint8();
            if (c0 >> 7 == 0) {
                charary[t] = c0;
            }
            else if (c0 >> 5 == 6) {
                var c1 = this.readUint8();
                charary[t] = ((c0 & 0x1F) << 6) | (c1 & 0x3F);
            }
            else if (c0 >> 4 == 14) {
                var c1 = this.readUint8();
                var c2 = this.readUint8();
                charary[t] = ((c0 & 0x0F) << 12) | ((c1 & 0x3F) << 6) | (c2 & 0x3F);
            }
            else {
                var c1 = this.readUint8();
                var c2 = this.readUint8();
                var c3 = this.readUint8();
                charary[t] = ((c0 & 0x07) << 18) | ((c1 & 0x3F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
            }
        }
        return String.fromCharCode.apply(String, charary);
    };
    BinaryBuffer.prototype.writeType = function (t) {
        this.writeUint8(t);
    };
    BinaryBuffer.prototype.readType = function () {
        var ret = this.readUint8();
        return ret;
    };
    BinaryBuffer.prototype.writeObject = function (o, tmc) {
        this.serialize(tmc, o);
    };
    BinaryBuffer.prototype.readObject = function (tmc) {
        var tar = Object.create(tmc.prototype);
        this.deserialize(tar, tmc);
        return tar;
    };
    BinaryBuffer.prototype.serialize = function (mc, obj) {
        var properties = mc.properties;
        for (var i = 0, len = properties.length; i < len; i++) {
            var p = properties[i];
            this.pushProperty(p.datatype, obj[p.key], p.isArray, p.pclass);
        }
    };
    BinaryBuffer.prototype.deserialize = function (tar, mc) {
        if (mc == null) {
            throw new Error('typeMetaClass is null');
        }
        mc.sortProperty();
        var properties = mc.properties;
        for (var i = 0, len = properties.length; i < len; i++) {
            var p = properties[i];
            var val = this.readProperty(p.datatype, p.isArray, p.pclass);
            tar[p.key] = val;
        }
        return tar;
    };
    BinaryBuffer.DEFAULT_BUFFER_SIZE = 512;
    BinaryBuffer.WriteFuncMap = {};
    BinaryBuffer.ReadFuncMap = {};
    return BinaryBuffer;
}());
BinaryBuffer.initialize();

/**
 *
 * @param type BasicDataType
 * @param array flag for labeling the property is arrayObject
 * @param ptype when type is set to DataType.Object ptype must be the constructor; DataType.Map ptype can be
 */
function SerializeField(type, array, ptype) {
    if (array === void 0) { array = false; }
    return function (target, key) {
        TypeReflector.register(target, key, type, array, ptype);
    };
}

var BinarySerializeOptions = /** @class */ (function () {
    function BinarySerializeOptions() {
        this.includeEntryInfo = false;
    }
    return BinarySerializeOptions;
}());
function BinarySerialize(obj, type, options) {
    var p = Object.getPrototypeOf(obj);
    if (p == null || p.constructor.name == "Object") {
        if (type == null) {
            throw new Error('param type is required.');
        }
        p = type.prototype;
    }
    var mc = TypeReflector.getMetaClass(p);
    if (mc == null) {
        var msg = "reflect class: " + p.name + " invalid";
        throw new Error(msg);
    }
    mc.sortProperty();
    var binarybuffer = BinaryBuffer.create();
    binarybuffer.serialize(mc, obj);
    return binarybuffer.m_arrayBuffer.buffer.slice(0, binarybuffer.pos);
}
function BinaryDeserialize(type, databuffer) {
    var obj = Object.create(type.prototype);
    var mc = TypeReflector.getMetaClass(type.prototype);
    if (mc == null) {
        var msg = "reflect class " + type.prototype + " invalid.";
        throw new Error(msg);
    }
    mc.sortProperty();
    var binarybuffer = BinaryBuffer.createWithView(databuffer, 0, databuffer.byteLength);
    return binarybuffer.deserialize(obj, mc);
}




/***/ }),

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_binary_serializer_1 = __webpack_require__(/*! @egret/ts-binary-serializer */ "./node_modules/_@egret_ts-binary-serializer@1.2.6@@egret/ts-binary-serializer/dist/BinarySerializer.es.js");
var $collectionMapping = {};
;
function setConfig(clz, arraybuffer) {
    var gameCollection = new GameConfigCollection(clz);
    gameCollection.setConfig(arraybuffer);
    $collectionMapping[clz['name']] = gameCollection;
}
exports.setConfig = setConfig;
function getConfig(clz, id, throwErr) {
    if (throwErr === void 0) { throwErr = true; }
    var gameCollection = $collectionMapping[clz['name']];
    return gameCollection.getConfig(id, throwErr);
}
exports.getConfig = getConfig;
function getAllConfig(clz) {
    var gameCollection = $collectionMapping[clz['name']];
    return gameCollection.getAllConfig();
}
exports.getAllConfig = getAllConfig;
function readHeader(arraybuffer) {
    var header = new Uint32Array(arraybuffer, 0, 1);
    var itemCount = header[0];
    var HEADER_ITEM_LENGTH = 2;
    var itemHeader = new Uint32Array(arraybuffer, 0, itemCount * HEADER_ITEM_LENGTH + 1);
    var obj = {};
    var index = itemHeader.byteLength;
    for (var i = 1; i < itemCount * HEADER_ITEM_LENGTH; i = i + HEADER_ITEM_LENGTH) {
        var from = index;
        var id = itemHeader[i];
        var itemLength = itemHeader[i + 1];
        var to = from + itemLength;
        index = to;
        obj[id] = { from: from, to: to };
    }
    return obj;
}
var GameConfigCollection = /** @class */ (function () {
    function GameConfigCollection(clz) {
        this.clz = clz;
        this.configs = {};
    }
    GameConfigCollection.prototype.setConfig = function (arraybuffer) {
        this.arraybuffer = arraybuffer;
    };
    GameConfigCollection.prototype.getConfig = function (id, throwErr) {
        if (typeof id === "string") {
            id = parseInt(id, 10);
        }
        if (this.configs[id]) {
            return this.configs[id];
        }
        else {
            var result = getConfigFromArrayBuffer(this.arraybuffer, this.clz, id, this.header, throwErr);
            this.configs[id] = result;
            return result;
        }
    };
    GameConfigCollection.prototype.getAllConfig = function (throwErr) {
        if (throwErr === void 0) { throwErr = true; }
        this.header = readHeader(this.arraybuffer);
        var array = [];
        for (var key in this.header) {
            var obj = this.getConfig(key, throwErr);
            array.push(obj);
        }
        return array;
    };
    return GameConfigCollection;
}());
function getConfigFromArrayBuffer(arraybuffer, clzz, id, header, throwErr) {
    if (throwErr === void 0) { throwErr = true; }
    var headerObj = header || readHeader(arraybuffer);
    if (headerObj === undefined || headerObj[id] === undefined) {
        if (throwErr) {
            throw new Error("missing " + id + "$ in class:" + clzz);
        }
        else {
            console.warn("missing " + id + "$ in class:" + clzz);
            return null;
        }
    }
    var _a = headerObj[id], from = _a.from, to = _a.to;
    var buffer = arraybuffer.slice(from, to); // mem alloc
    var obj = ts_binary_serializer_1.BinaryDeserialize(clzz, buffer);
    return obj;
}


/***/ }),

/***/ "./src/NewZoneRushItemClientConfig.ts":
/*!********************************************!*\
  !*** ./src/NewZoneRushItemClientConfig.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_binary_serializer_1 = __webpack_require__(/*! @egret/ts-binary-serializer */ "./node_modules/_@egret_ts-binary-serializer@1.2.6@@egret/ts-binary-serializer/dist/BinarySerializer.es.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
// const a = {
//     "id": 1001,
//     "rushtype": 1,
//     "rushid": 1,
//     "sort": 1,
//     "goal": [2, 150000],
//     "reward": 800,
//     "desc": "当日提升战力150000",
//     "goto": 1001,
//     "guideUI": ["openui", "UI_Equipment", "ShowMainUserData"]
// };
var NewZoneRushItemClientConfig = /** @class */ (function () {
    function NewZoneRushItemClientConfig() {
    }
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, false)
    ], NewZoneRushItemClientConfig.prototype, "id", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, false)
    ], NewZoneRushItemClientConfig.prototype, "rushtype", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, false)
    ], NewZoneRushItemClientConfig.prototype, "rushid", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, false)
    ], NewZoneRushItemClientConfig.prototype, "sort", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, true)
    ], NewZoneRushItemClientConfig.prototype, "goal", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, false)
    ], NewZoneRushItemClientConfig.prototype, "reward", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.String, false)
    ], NewZoneRushItemClientConfig.prototype, "desc", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.Int32, false)
    ], NewZoneRushItemClientConfig.prototype, "goto", void 0);
    __decorate([
        ts_binary_serializer_1.SerializeField(ts_binary_serializer_1.DataType.String, true)
    ], NewZoneRushItemClientConfig.prototype, "guideUI", void 0);
    NewZoneRushItemClientConfig = __decorate([
        utils_1.filename('newzonerush_item_client1')
    ], NewZoneRushItemClientConfig);
    return NewZoneRushItemClientConfig;
}());
exports.NewZoneRushItemClientConfig = NewZoneRushItemClientConfig;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./NewZoneRushItemClientConfig */ "./src/NewZoneRushItemClientConfig.ts"));
__export(__webpack_require__(/*! @egret/ts-binary-serializer */ "./node_modules/_@egret_ts-binary-serializer@1.2.6@@egret/ts-binary-serializer/dist/BinarySerializer.es.js"));
__export(__webpack_require__(/*! ./GameConfig */ "./src/GameConfig.ts"));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filename = function (filename) { return function (target) {
    target.filename = filename;
}; };


/***/ })

/******/ });
});