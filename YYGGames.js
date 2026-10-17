(function() {
	'use strict';
	var extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || ({
				__proto__: []
			}
			instanceof Array && function(d, b) {
				d.__proto__ = b
			}) || function(d, b) {
			for (var p in b)
				if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
		};
		return extendStatics(d, b)
	};

	function __extends(d, b) {
		extendStatics(d, b);

		function __() {
			this.constructor = d
		}
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
	}
	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s)
					if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
			}
			return t
		};
		return __assign.apply(this, arguments)
	};

	function __rest(s, e) {
		var t = {};
		for (var p in s)
			if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
		if (s != null && typeof Object.getOwnPropertySymbols === "function")
			for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
				if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]]
			}
		return t
	}

	function __decorate(decorators, target, key, desc) {
		var c = arguments.length,
			r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
			d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r
	}

	function __param(paramIndex, decorator) {
		return function(target, key) {
			decorator(target, key, paramIndex)
		}
	}

	function __metadata(metadataKey, metadataValue) {
		if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue)
	}

	function __awaiter(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P ? value : new P(function(resolve) {
				resolve(value)
			})
		}
		return new(P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}

			function rejected(value) {
				try {
					step(generator["throw"](value))
				} catch (e) {
					reject(e)
				}
			}

			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next())
		})
	}

	function __generator(thisArg, body) {
		var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1];
					return t[1]
				},
				trys: [],
				ops: []
			},
			f, y, t, g;
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function verb(n) {
			return function(v) {
				return step([n, v])
			}
		}

		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1], done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue
						}
						if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
							_.label = op[1];
							break
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue
				}
				op = body.call(thisArg, _)
			} catch (e) {
				op = [6, e];
				y = 0
			} finally {
				f = t = 0
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			}
		}
	}
	var __createBinding = Object.create ? (function(o, m, k, k2) {
		if (k2 === undefined) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k]
			}
		})
	}) : (function(o, m, k, k2) {
		if (k2 === undefined) k2 = k;
		o[k2] = m[k]
	});

	function __exportStar(m, o) {
		for (var p in m)
			if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p)
	}

	function __values(o) {
		var s = typeof Symbol === "function" && Symbol.iterator,
			m = s && o[s],
			i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return {
			next: function() {
				if (o && i >= o.length) o = void 0;
				return {
					value: o && o[i++],
					done: !o
				}
			}
		};
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}

	function __read(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o),
			r, ar = [],
			e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
		} catch (error) {
			e = {
				error: error
			}
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i)
			} finally {
				if (e) throw e.error;
			}
		}
		return ar
	}

	function __spread() {
		for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
		return ar
	}

	function __spreadArrays() {
		for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
		for (var r = Array(s), k = 0, i = 0; i < il; i++)
			for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
		return r
	};

	function __await(v) {
		return this instanceof __await ? (this.v = v, this) : new __await(v)
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var g = generator.apply(thisArg, _arguments || []),
			i, q = [];
		return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
			return this
		}, i;

		function verb(n) {
			if (g[n]) i[n] = function(v) {
				return new Promise(function(a, b) {
					q.push([n, v, a, b]) > 1 || resume(n, v)
				})
			}
		}

		function resume(n, v) {
			try {
				step(g[n](v))
			} catch (e) {
				settle(q[0][3], e)
			}
		}

		function step(r) {
			r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r)
		}

		function fulfill(value) {
			resume("next", value)
		}

		function reject(value) {
			resume("throw", value)
		}

		function settle(f, v) {
			if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1])
		}
	}

	function __asyncDelegator(o) {
		var i, p;
		return i = {}, verb("next"), verb("throw", function(e) {
			throw e;
		}), verb("return"), i[Symbol.iterator] = function() {
			return this
		}, i;

		function verb(n, f) {
			i[n] = o[n] ? function(v) {
				return (p = !p) ? {
					value: __await(o[n](v)),
					done: n === "return"
				} : f ? f(v) : v
			} : f
		}
	}

	function __asyncValues(o) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var m = o[Symbol.asyncIterator],
			i;
		return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
			return this
		}, i);

		function verb(n) {
			i[n] = o[n] && function(v) {
				return new Promise(function(resolve, reject) {
					v = o[n](v), settle(resolve, reject, v.done, v.value)
				})
			}
		}

		function settle(resolve, reject, d, v) {
			Promise.resolve(v).then(function(v) {
				resolve({
					value: v,
					done: d
				})
			}, reject)
		}
	}

	function __makeTemplateObject(cooked, raw) {
		if (Object.defineProperty) {
			Object.defineProperty(cooked, "raw", {
				value: raw
			})
		} else {
			cooked.raw = raw
		}
		return cooked
	};
	var __setModuleDefault = Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		})
	}) : function(o, v) {
		o["default"] = v
	};

	function __importStar(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result
	}

	function __importDefault(mod) {
		return (mod && mod.__esModule) ? mod : {
			default: mod
		}
	}

	function __classPrivateFieldGet(receiver, privateMap) {
		if (!privateMap.has(receiver)) {
			throw new TypeError("attempted to get private field on non-instance");
		}
		return privateMap.get(receiver)
	}

	function __classPrivateFieldSet(receiver, privateMap, value) {
		if (!privateMap.has(receiver)) {
			throw new TypeError("attempted to set private field on non-instance");
		}
		privateMap.set(receiver, value);
		return value
	}
	var AdPlatformType;
	(function(AdPlatformType) {
		AdPlatformType[AdPlatformType["en_ADBREAK"] = 0] = "en_ADBREAK";
		AdPlatformType[AdPlatformType["en_GAMEDISTRIBUTION"] = 1] = "en_GAMEDISTRIBUTION";
		AdPlatformType[AdPlatformType["en_GAMEMONETIZE"] = 2] = "en_GAMEMONETIZE";
		AdPlatformType[AdPlatformType["en_TRANSSION"] = 3] = "en_TRANSSION";
		AdPlatformType[AdPlatformType["en_XIAOMI"] = 4] = "en_XIAOMI";
		AdPlatformType[AdPlatformType["en_Mobiuspace"] = 5] = "en_Mobiuspace";
		AdPlatformType[AdPlatformType["en_Xishanju"] = 6] = "en_Xishanju";
		AdPlatformType[AdPlatformType["en_TCL"] = 7] = "en_TCL"
	})(AdPlatformType || (AdPlatformType = {}));
	var ChannelType;
	(function(ChannelType) {
		ChannelType[ChannelType["en_YAD"] = 0] = "en_YAD";
		ChannelType[ChannelType["en_YIV"] = 1] = "en_YIV";
		ChannelType[ChannelType["en_BABYGAMES"] = 2] = "en_BABYGAMES";
		ChannelType[ChannelType["en_BESTGAMES"] = 3] = "en_BESTGAMES";
		ChannelType[ChannelType["en_CARGAMES"] = 4] = "en_CARGAMES";
		ChannelType[ChannelType["en_Puzzlegame"] = 5] = "en_Puzzlegame"
	})(ChannelType || (ChannelType = {}));
	var ConfigType;
	(function(ConfigType) {
		ConfigType[ConfigType["en_CHANNEL"] = 0] = "en_CHANNEL";
		ConfigType[ConfigType["en_APPNAME"] = 1] = "en_APPNAME";
		ConfigType[ConfigType["en_ADCHANNELID"] = 2] = "en_ADCHANNELID";
		ConfigType[ConfigType["en_CHANNELNAME"] = 3] = "en_CHANNELNAME";
		ConfigType[ConfigType["en_WEBSITEADDRESS"] = 4] = "en_WEBSITEADDRESS";
		ConfigType[ConfigType["en_DEBUGOPEN"] = 5] = "en_DEBUGOPEN";
		ConfigType[ConfigType["en_ADPLATFORM"] = 6] = "en_ADPLATFORM";
		ConfigType[ConfigType["en_GAMEDISTRIBUTIONID"] = 7] = "en_GAMEDISTRIBUTIONID";
		ConfigType[ConfigType["en_GAMEMONETIZEID"] = 8] = "en_GAMEMONETIZEID";
		ConfigType[ConfigType["en_TRANSSION"] = 9] = "en_TRANSSION";
		ConfigType[ConfigType["en_ADPUBID"] = 10] = "en_ADPUBID";
		ConfigType[ConfigType["en_BANNERENABLE"] = 11] = "en_BANNERENABLE"
	})(ConfigType || (ConfigType = {}));
	class Entity {
		constructor() {
			++Entity.ID;
			this._myID = Entity.ID
		}
		getMyID() {
			return this._myID
		}
	}
	Entity.ID = 0;
	class ConfigManager {
		constructor() {
			this.configs = new Map()
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new ConfigManager()
			}
			return this._gInstance
		}
		get(name) {
			return this.configs.get(name)
		}
		set(name, value) {
			this.configs.set(name, value)
		}
	}
	class Logger extends Entity {
		constructor() {
			super();
			const iframe = document.createElement("iframe");
			iframe.style.display = 'none';
			document.head.appendChild(iframe);
			this.gConsole = iframe.contentWindow["console"]
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new Logger()
			}
			return this._gInstance
		}
		trace(...msg) {
			// const platformType = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			// if (platformType == AdPlatformType.en_GAMEDISTRIBUTION) {
			// 	return
			// }
			var optionalParams = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				optionalParams[_i - 1] = arguments[_i]
			}
			this.gConsole.log.apply(this, ["%c %c %c YYGGAMES:", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", arguments[0]].concat(optionalParams))
		}
		traceWarn(msg) {
			// const platformType = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			// if (platformType == AdPlatformType.en_GAMEDISTRIBUTION) {
			// 	return
			// }
			this.gConsole.log.apply(this, ["%c %c %c YYGGAMES: %c%s", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ff0300", msg])
		}
		traceVersion(msg) {
			// const platformType = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			// if (platformType == AdPlatformType.en_GAMEDISTRIBUTION) {
			// 	return
			// }
			this.gConsole.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", msg, "background: #d44a52", "background: #fb8cb3"])
		}
	}
	class StringUtils {
		static format(ofmt, ...a) {
			var regex = ['([^%]*)', '%', '([\'\\-+ #0]*?)', '([1-9]\\d*)?', '(\\.([1-9]\\d*))?', '[lhjztL]*?', '([diouxXfFeEgGaAcCsSp%jr])'].join('');
			var re = new RegExp(regex);
			var args = Array.prototype.slice.call(arguments, 1);
			var fmt = ofmt;
			var flags, width, precision, conversion;
			var left, pad, sign, arg, match;
			var ret = '';
			var argn = 1;
			var posn = 0;
			var convposn;
			var curconv;
			while ((match = re.exec(fmt)) !== null) {
				ret += match[1];
				fmt = fmt.substring(match[0].length);
				curconv = match[0].substring(match[1].length);
				convposn = posn + match[1].length + 1;
				posn += match[0].length;
				flags = match[2] || '';
				width = match[3] || 0;
				precision = match[4] || '';
				conversion = match[6];
				left = false;
				sign = false;
				pad = ' ';
				if (conversion == '%') {
					ret += '%';
					continue
				}
				arg = args.shift();
				argn++;
				if (flags.match(/-/)) left = true;
				if (flags.match(/0/)) pad = '0';
				if (flags.match(/\+/)) sign = true;
				switch (conversion) {
					case 's':
						ret += this.doPad(pad, width, left, arg.toString());
						break;
					case 'd':
						arg = Math.floor(arg);
					case 'f':
						sign = sign && arg > 0 ? '+' : '';
						ret += sign + this.doPad(pad, width, left, arg.toString());
						break;
					case 'x':
						ret += this.doPad(pad, width, left, arg.toString(16));
						break;
					default:
						throw ("is not supported");
				}
			}
			ret += fmt;
			return (ret)
		}
		static doPad(chr, width, left, str) {
			var ret = str;
			while (ret.length < width) {
				if (left) ret += chr;
				else ret = chr + ret
			}
			return (ret)
		}
	}
	class LoadingLayer extends Entity {
		constructor() {
			super();
			const body = document.body || document.getElementsByTagName("body")[0];
			const style = document.createElement("style");
			const spriteId = StringUtils.format("LoadingLayer%d", this.getMyID());
			const styleAttribute = `.${spriteId},.${spriteId}:before,.${spriteId}:after{border-radius:50%;width:2.0em;height:2.0em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7 1.8s infinite ease-in-out;animation:load7 1.8s infinite ease-in-out}.${spriteId}{color:#ffffff;font-size:10px;margin:0px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s}.${spriteId}:before,.${spriteId}:after{content:'';position:absolute;top:0}.${spriteId}:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.${spriteId}:after{left:3.5em}@-webkit-keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0-1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0-1.3em}40%{box-shadow:0 2.5em 0 0}}`;
			style.textContent += styleAttribute;
			body.appendChild(style);
			this.background = document.createElement("div");
			this.background.style.position = "fixed";
			this.background.style.zIndex = "0";
			this.background.style.top = "0";
			this.background.style.left = "0";
			this.background.style.width = "100%";
			this.background.style.height = "100%";
			this.background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
			this.sprite = document.createElement("div");
			this.sprite.className = spriteId;
			this.sprite.style.top = "40%";
			this.background.appendChild(this.sprite);
			this.background.style.display = "none";
			body.appendChild(this.background)
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new LoadingLayer()
			}
			return this._gInstance
		}
		setAlpha(alpha) {
			this.background.style.backgroundColor = StringUtils.format("rgba(0, 0, 0, %d)", alpha);
			if (alpha == 0) {
				this.sprite.style.display = "none"
			}
		}
		showLoading() {
			this.background.style.zIndex = "1000";
			this.background.style.display = "block"
		}
		hideLoading() {
			this.background.style.zIndex = "0";
			this.background.style.display = "none"
		}
	}
	class TipMessageLayer extends Entity {
		constructor() {
			super();
			const body = document.body || document.getElementsByTagName("body")[0];
			const style = document.createElement("style");
			const messageAttributeId = StringUtils.format("TipMessageLayer1_%d", this.getMyID());
			const backgroundAttributeId = StringUtils.format("TipMessageLayer2_%d", this.getMyID());
			const titleAttributeId = StringUtils.format("TipMessageLayer3_%d", this.getMyID());
			const msgAttributeId = StringUtils.format("TipMessageLayer4_%d", this.getMyID());
			const boxAttributeId = StringUtils.format("TipMessageLayer5_%d", this.getMyID());
			const closeAttributeId = StringUtils.format("TipMessageLayer6_%d", this.getMyID());
			const buttonAttributeId = StringUtils.format("TipMessageLayer7_%d", this.getMyID());
			const messageAttribute = `#${messageAttributeId}{position:fixed;z-index:1050;width:100%;height:100%}`;
			const backgroundAttribute = `#${backgroundAttributeId}{padding:4px 10px 4px 10px;position:fixed;z-index:1051;font-family:Verdana;min-width:300px;max-width:430px;width:80%;min-height:160px;color:#00335e;-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;-moz-box-shadow:0px 0px 11px#000000;-webkit-box-shadow:0px 0px 11px#000000;box-shadow:0px 0px 11px#000000;left:50%;top:50%;transform:translate(-50%,-50%);opacity:1;background-color:#bcbcbc}`;
			const titleAttribute = `#${titleAttributeId}{padding:5px 0 5px 0;font-variant:small-caps;font-size:16pt;font-weight:lighter;color:#00335e;width:100%;border-bottom:1px solid#002c5f}`;
			const msgAttribute = `#${msgAttributeId}{line-height:18px;padding:10px 0 0 0}`;
			const closeAttribute = `#${closeAttributeId}{position:absolute;right:-15px;top:-15px;width:30px;height:30px;border-radius:25px;box-shadow:2px 2px 5px 0px black;background:red;cursor:pointer}#${closeAttributeId}:hover{background:red}#${closeAttributeId}:before{position:absolute;content:'';width:4px;height:20px;background:white;transform:rotate(45deg);top:5px;left:13px}#${closeAttributeId}:after{position:absolute;content:'';width:4px;height:20px;background:white;transform:rotate(-45deg);top:5px;left:13px}`;
			const buttonAttribute = `#${buttonAttributeId}{display:inline-block;width:100%;text-align:right}#${buttonAttributeId}input[type='button']{cursor:pointer;margin:2px;height:35px;border:1px solid#AFAFAF;background-color:#004076;color:#FFFFFF;-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;outline:none}#${buttonAttributeId}input[type='button']:hover{background-color:#00549c;color:White}#${buttonAttributeId}input[type='button']:active{background-color:#AAAAAA;color:White}#${buttonAttributeId}input[type='button']:focus{outline:none;border:solid 2px#FFCC66;-o-transform:rotate(0)}#${buttonAttributeId}input[type='button']::-moz-focus-inner{outline:none;border:none}`;
			const otherAttribute = `@media screen and(min-width:280px){#${boxAttributeId}{line-height:22px}}@media screen and(min-width:523px){#${boxAttributeId}{line-height:22px;font-size:15px}}`;
			style.textContent += messageAttribute;
			style.textContent += backgroundAttribute;
			style.textContent += titleAttribute;
			style.textContent += msgAttribute;
			style.textContent += otherAttribute;
			style.textContent += closeAttribute;
			style.textContent += buttonAttribute;
			body.appendChild(style);
			this.message = document.createElement("div");
			this.message.id = messageAttributeId;
			body.appendChild(this.message);
			this.background = document.createElement("div");
			this.background.id = backgroundAttributeId;
			this.message.appendChild(this.background);
			this.title = document.createElement("div");
			this.title.id = titleAttributeId;
			this.title.textContent = "";
			this.background.appendChild(this.title);
			this.btnClose = document.createElement("div");
			this.btnClose.id = closeAttributeId;
			this.btnClose.onclick = this.onbtnClose.bind(this);
			this.background.appendChild(this.btnClose);
			let div = document.createElement("div");
			this.background.appendChild(div);
			let box = document.createElement("div");
			box.id = boxAttributeId;
			div.appendChild(box);
			let p = document.createElement("p");
			this.msg = document.createElement("span");
			p.appendChild(this.msg);
			this.msg.textContent = "Without ads, we will not survive. Please disable adblock on our site and then click refresh button, thank you!";
			box.appendChild(p);
			let button = document.createElement("div");
			button.id = buttonAttributeId;
			div.appendChild(button);
			this.inputButton = document.createElement("input");
			this.inputButton.type = "button";
			this.inputButton.onclick = this.onInputButton.bind(this);
			this.inputButton.value = "Refresh";
			button.appendChild(this.inputButton);
			this.message.addEventListener('click', function(e) {
				e.preventDefault();
				e.stopPropagation()
			}, false)
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new TipMessageLayer()
			}
			return this._gInstance
		}
		onbtnClose() {
			if (this.options && this.options.cancel) {
				this.options.cancel();
				this.options.cancel = null
			}
		}
		onInputButton() {
			if (this.options && this.options.confirm) {
				this.options.confirm();
				this.options.confirm = null
			}
		}
		showMsg(options) {
			this.options = options || {};
			if (this.options.msg) {
				this.msg.textContent = this.options.msg
			}
			this.options.showCancel = (this.options.showCancel == void 0) ? true : this.options.showCancel;
			if (this.options.showCancel) {
				this.btnClose.style.display = "show"
			} else {
				this.btnClose.style.display = "none"
			}
			this.message.style.display = "show"
		}
		hideMsg() {
			this.options = null;
			this.message.style.display = "none"
		}
	}
	class utilities {
		static showLoading() {
			LoadingLayer.getInstance().showLoading()
		}
		static hideLoading() {
			LoadingLayer.getInstance().hideLoading()
		}
		static setLoadingAlpha(tAlpha) {
			LoadingLayer.getInstance().setAlpha(tAlpha)
		}
		static readDataSync(path) {
			return new Promise((resolve, reject) => {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", path, true);
				xhr.onerror = xhr.onabort = function(e) {
					reject()
				};
				xhr.onload = function(e) {
					var status = xhr.status !== undefined ? xhr.status : 200;
					if (status === 200 || status === 204 || status === 0) {
						resolve(JSON.parse(xhr.responseText))
					} else {
						reject()
					}
				};
				xhr.send()
			})
		}
		static trace(...msg) {
			Logger.getInstance().trace(...msg)
		}
		static traceWarn(msg) {
			Logger.getInstance().traceWarn(msg)
		}
		static traceVersion(msg) {
			Logger.getInstance().traceVersion(msg)
		}
		static showMsg(options) {}
		static hideMsg() {
			TipMessageLayer.getInstance().hideMsg()
		}
		static get(url) {
			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();
				xhr.open("GET", url, true);
				xhr.onload = function() {
					var response = xhr.response;
					if ((xhr.status != 200 && xhr.status != 0) || response.byteLength < 10) {
						resolve(null);
						return
					}
					var data = null;
					try {
						data = JSON.parse(response)
					} catch (error) {}
					resolve(data)
				};
				xhr.onerror = function(e) {
					resolve(null)
				};
				xhr.send(null)
			})
		}
		addAsyncScript(src, scriptId, cb) {
			var element = document.getElementById(scriptId);
			if (!element) {
				element = document.createElement('script');
				element.async = true;
				element.onload = cb;
				element.src = src;
				document.head.appendChild(element)
			}
		}
	}
	class EventsManager {
		constructor() {
			this._events = {}
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new EventsManager()
			}
			return this._gInstance
		}
		hasListener(type) {
			var listener = this._events && this._events[type];
			return !!listener
		}
		event(type, data = null) {
			if (!this._events || !this._events[type]) return false;
			var listeners = this._events[type];
			if (listeners.run) {
				if (listeners.once) delete this._events[type];
				data != null ? listeners.runWith(data) : listeners.run()
			} else {
				for (var i = 0, n = listeners.length; i < n; i++) {
					var listener = listeners[i];
					if (listener) {
						(data != null) ? listener.runWith(data): listener.run()
					}
					if (!listener || listener.once) {
						listeners.splice(i, 1);
						i--;
						n--
					}
				}
				if (listeners.length === 0 && this._events) delete this._events[type]
			}
			return true
		}
		on(type, caller, listener, args = null) {
			return this._createListener(type, caller, listener, args, false)
		}
		once(type, caller, listener, args = null) {
			return this._createListener(type, caller, listener, args, true)
		}
		_createListener(type, caller, listener, args, once, offBefore = true) {
			offBefore && this.off(type, caller, listener, once);
			var handler = EventHandler.create(caller || this, listener, args, once);
			this._events || (this._events = {});
			var events = this._events;
			if (!events[type]) events[type] = handler;
			else {
				if (!events[type].run) events[type].push(handler);
				else events[type] = [events[type], handler]
			}
			return this
		}
		off(type, caller, listener, onceOnly = false) {
			if (!this._events || !this._events[type]) return this;
			var listeners = this._events[type];
			if (listeners != null) {
				if (listeners.run) {
					if ((!caller || listeners.caller === caller) && (listener == null || listeners.method === listener) && (!onceOnly || listeners.once)) {
						delete this._events[type];
						listeners.recover()
					}
				} else {
					var count = 0;
					for (var i = 0, n = listeners.length; i < n; i++) {
						var item = listeners[i];
						if (!item) {
							count++;
							continue
						}
						if (item && (!caller || item.caller === caller) && (listener == null || item.method === listener) && (!onceOnly || item.once)) {
							count++;
							listeners[i] = null;
							item.recover()
						}
					}
					if (count === n) delete this._events[type]
				}
			}
			return this
		}
		offAll(type = null) {
			var events = this._events;
			if (!events) return this;
			if (type) {
				this._recoverHandlers(events[type]);
				delete events[type]
			} else {
				for (var name in events) {
					this._recoverHandlers(events[name])
				}
				this._events = null
			}
			return this
		}
		offAllCaller(caller) {
			if (caller && this._events) {
				for (var name in this._events) {
					this.off(name, caller, null)
				}
			}
			return this
		}
		_recoverHandlers(arr) {
			if (!arr) return;
			if (arr.run) {
				arr.recover()
			} else {
				for (var i = arr.length - 1; i > -1; i--) {
					if (arr[i]) {
						arr[i].recover();
						arr[i] = null
					}
				}
			}
		}
	}
	class Handler {
		constructor(caller = null, method = null, args = null, once = false) {
			this.once = false;
			this._id = 0;
			this.setTo(caller, method, args, once)
		}
		setTo(caller, method, args, once = false) {
			this._id = Handler._gid++;
			this.caller = caller;
			this.method = method;
			this.args = args;
			this.once = once;
			return this
		}
		run() {
			if (this.method == null) return null;
			var id = this._id;
			var result = this.method.apply(this.caller, this.args);
			this._id === id && this.once && this.recover();
			return result
		}
		runWith(data) {
			if (this.method == null) return null;
			var id = this._id;
			if (data == null) var result = this.method.apply(this.caller, this.args);
			else if (!this.args && !data.unshift) result = this.method.call(this.caller, data);
			else if (this.args) result = this.method.apply(this.caller, this.args.concat(data));
			else result = this.method.apply(this.caller, data);
			this._id === id && this.once && this.recover();
			return result
		}
		clear() {
			this.caller = null;
			this.method = null;
			this.args = null;
			return this
		}
		recover() {
			if (this._id > 0) {
				this._id = 0;
				Handler._pool.push(this.clear())
			}
		}
		static create(caller, method, args = null, once = true) {
			if (Handler._pool.length) return Handler._pool.pop().setTo(caller, method, args, once);
			return new Handler(caller, method, args, once)
		}
	}
	Handler._pool = [];
	Handler._gid = 1;
	class EventHandler extends Handler {
		constructor(caller, method, args, once) {
			super(caller, method, args, once)
		}
		recover() {
			if (this._id > 0) {
				this._id = 0;
				EventHandler._pool.push(this.clear())
			}
		}
		static create(caller, method, args = null, once = true) {
			if (EventHandler._pool.length) return EventHandler._pool.pop().setTo(caller, method, args, once);
			return new EventHandler(caller, method, args, once)
		}
	}
	EventHandler._pool = [];
	class AdBreakManager {
		constructor() {
			this.showInterstitialCount = 0;
			this.interstitialCooldown = 0
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new AdBreakManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				var script = document.createElement("script");
				script.async = true;
				script.setAttribute("data-ad-client", "ca-pub-8878716159434368");
				script.setAttribute("data-ad-channel", ConfigManager.getInstance().get(ConfigType.en_ADCHANNELID));
				script.setAttribute("data-ad-frequency-hint", "10s");
				try {
					const tHostname = location.hostname;
					const tChannelName = ConfigManager.getInstance().get(ConfigType.en_CHANNELNAME);
					if (tHostname.indexOf(tChannelName.toLowerCase()) < 0 && !ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
						ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, true);
						utilities.traceWarn("debugOpen original value is False, set to True because the game files are not host on " + tChannelName)
					}
				} catch (error) {
					utilities.trace("get hostname error", error)
				}
				if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
					script.setAttribute("data-adbreak-test", "on")
				}
				script.onload = () => {
					this.updateInterval = setInterval(this.onUpdate.bind(this), 1e3);
					resolve(true)
				};
				script.onerror = function() {
					reject()
				};
				script.src = "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
				document.head.appendChild(script);
				window["adsbygoogle"] = window["adsbygoogle"] || [];
				window["adBreak"] = window["adConfig"] = function(o) {
					window["adsbygoogle"].push(o)
				};
				window["adConfig"]({
					preloadAdBreaks: "on"
				});
				this.adBreak = function(o) {
					window["adsbygoogle"].push(o)
				}
			})
		}
		showInterstitial(options) {
			if (this.interstitialCooldown > 0) {
				if (options && options.beforeShowAd) {
					options.beforeShowAd();
					options.beforeShowAd = null
				}
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				utilities.trace("requesting Interstitial AD，less than 30s, ignored :", this.interstitialCooldown);
				return
			}
			utilities.trace("requesting Interstitial AD");
			if (this.options && this.options.afterShowAd) return;
			let typename = "next";
			if (this.showInterstitialCount == 0) {
				typename = "start";
				this.showInterstitialCount++
			}
			utilities.showLoading();
			clearTimeout(this.showLoading);
			this.showLoading = setTimeout(() => {
				this.interstitialCooldown = 30;
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				utilities.hideLoading()
			}, 1e3);
			this.options = options;
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null;
				EventsManager.getInstance().event("beforeShowAd")
			}
			this.adBreak({
				type: typename,
				name: "game",
				beforeAd: () => {
					clearTimeout(this.showLoading);
					window.blur()
				},
				afterAd: () => {
					utilities.trace("afterAd");
					utilities.hideLoading();
					if (options && options.afterShowAd) {
						options.afterShowAd();
						options.afterShowAd = null
					}
					this.interstitialCooldown = 30;
					window.focus();
					EventsManager.getInstance().event("afterShowAd")
				},
				adBreakDone: (res) => {
					utilities.trace("adBreakDone", res);
					clearTimeout(this.showLoading);
					utilities.hideLoading();
					if (options && options.afterShowAd) {
						options.afterShowAd();
						options.afterShowAd = null;
						EventsManager.getInstance().event("afterShowAd")
					}
				}
			});
			return true
		}
		canShowReward() {
			if (this.showAdFn) {
				return true
			} else {
				return false
			}
		}
		showReward(options) {
			if (!this.canShowReward()) {
				return false
			}
			utilities.trace("requesting Reward AD");
			this.rewardOptions = options;
			this.showAdFn();
			this.showAdFn = null;
			window.blur();
			return true
		}
		onUpdate() {
			if (this.interstitialCooldown >= 0) {
				this.interstitialCooldown--
			}
			this.checkReward()
		}
		checkReward() {
			if (this.showAdFn) return;
			this.adBreak({
				type: "reward",
				name: "reward",
				beforeAd: this.onRewardBeforeBreak.bind(this),
				afterAd: this.onRewardAfterBreak.bind(this),
				beforeReward: this.onBeforeReward.bind(this),
				adDismissed: this.onRewardDismissed.bind(this),
				adViewed: this.onRewardComplete.bind(this),
			})
		}
		onBeforeReward(showAdFn) {
			utilities.trace("load Reward AD Successful");
			this.showAdFn = showAdFn
		}
		onRewardBeforeBreak() {
			EventsManager.getInstance().event("beforeShowAd");
			this.rewardOptions.beforeShowAd && this.rewardOptions.beforeShowAd();
			this.rewardOptions.beforeShowAd = null
		}
		onRewardAfterBreak() {
			window.focus();
			this.rewardOptions.afterShowAd && this.rewardOptions.afterShowAd();
			this.rewardOptions.afterShowAd = null;
			this.showAdFn = null;
			EventsManager.getInstance().event("afterShowAd")
		}
		onRewardDismissed() {
			this.rewardOptions.rewardDismissed && this.rewardOptions.rewardDismissed();
			this.rewardOptions.rewardDismissed = null
		}
		onRewardComplete() {
			this.rewardOptions.rewardComplete && this.rewardOptions.rewardComplete();
			this.rewardOptions.rewardComplete = null
		}
		showBanner(options) {}
		hideBanner(options) {}
		showSplash(options) {}
		hideSplash(options) {}
	}
	class GamedistributionManager {
		constructor() {
			this.isReward = false;
			this.isCanShowReward = false
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new GamedistributionManager()
			}
			return this._gInstance
		};
		startup() {
			return new Promise((resolve, reject) => {
				resolve()
			})
		}
		onEvent(event) {}
		showInterstitial(options) {
			return true
		}
		onBeforeShowAd() {}
		onAfterShowAd() {
			window.focus();
			if (this.options && this.options.afterShowAd) {
				this.options.afterShowAd();
				this.options.afterShowAd = null
			}
			EventsManager.getInstance().event("afterShowAd")
		}
		showReward(options) {}
		preloadReward() {
			this.isCanShowReward = true;
		}
		canShowReward() {
			return true
		}
	}
	class GamemonetizeManager {
		constructor() {
			this.isReward = false;
			this.canReward = false;
			this.isCanShowReward = false
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new GamemonetizeManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				resolve()
			})
		}
		onEvent(event) {}
		showInterstitial(options) {
			return true
		}
		showReward(options) {}
		onBeforeShowAd() {}
		canShowReward() {
			return true
		}
	}
	class MobiuspaceManager {
		constructor() {
			this.interstitials = [];
			this.rewards = [];
			this.rePreloadAdCount = 0;
			this.canPreloadAd = true
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new MobiuspaceManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				var script = document.createElement("script");
				script.onload = () => {
					window["bridge"] = new DYWXBridge(ConfigManager.getInstance().get(ConfigType.en_APPNAME), () => {
						this.updateInterval = setInterval(this.onUpdate.bind(this), 15e3);
						this.preloadAd();
						resolve(true)
					})
				};
				script.onerror = function() {
					reject()
				};
				script.src = "http://us-east-web-static.s3.amazonaws.com/sthybrid/dywxbridge_0.1.js";
				document.head.appendChild(script)
			})
		}
		showInterstitial(options) {
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null
			}
			if (this.interstitials.length == 0) {
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				return
			}
			this.canPreloadAd = false;
			const params = this.interstitials.pop();
			this.showAd(options, params)
		}
		canShowReward() {
			return this.rewards.length > 0
		}
		showReward(options) {
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null
			}
			if (this.rewards.length == 0) {
				if (options && options.rewardDismissed) {
					options.rewardDismissed();
					options.rewardDismissed = null
				}
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				return
			}
			this.canPreloadAd = false;
			const params = this.rewards.pop();
			this.showAd(options, params)
		}
		onUpdate() {
			if (this.canPreloadAd) {
				if (this.rePreloadAdCount < 5) {
					if (this.interstitials.length == 0 || this.rewards.length == 0) {
						this.preloadAd()
					}
				}
			}
		}
		showAd(options, params) {
			const that = this;
			window["bridge"].showAd(params.placement, {
				page: params.page
			}, new DYWXBridge.AdCallback().onAdImpression(function(args) {
				console.log("onAdImpression: ", JSON.stringify(args))
			}).onAdClick(function(args) {
				console.log("onAdClick: ", JSON.stringify(args))
			}).onAdSkip(function(args) {
				console.log("onAdSkip: ", JSON.stringify(args));
				if (options && options.rewardDismissed) {
					options.rewardDismissed();
					options.rewardDismissed = null
				}
			}).onAdRewarded(function(args) {
				console.log("onAdRewarded: ", JSON.stringify(args));
				if (options && options.rewardComplete) {
					options.rewardComplete();
					options.rewardComplete = null
				}
			}).onAdClose(function(args) {
				console.log("onAdClose: ", JSON.stringify(args));
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				this.canPreloadAd = true;
				that.preloadAd()
			}).onAdError(function(args) {
				console.log("onAdError: ", JSON.stringify(args));
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				this.canPreloadAd = true;
				that.preloadAd()
			}))
		}
		preloadAd() {
			var that = this;
			console.log("preloadAd");
			if (this.rewards.length == 0) {
				window["bridge"].preloadAd("gahe_game", {
					page: "game"
				}, new DYWXBridge.AdCallback().onAdLoaded(function(args) {
					console.log("onAdLoaded: ", JSON.stringify(args));
					that.rePreloadAdCount = 0;
					that.rewards.push(args)
				}).onAdFailedToLoad(function(args) {
					that.rePreloadAdCount++;
					console.log("onAdFailedToLoad: ", JSON.stringify(args))
				}))
			}
			if (this.interstitials.length == 0) {
				window["bridge"].preloadAd("gahe_splash", {
					page: "game"
				}, new DYWXBridge.AdCallback().onAdLoaded(function(args) {
					console.log("onAdLoaded: ", JSON.stringify(args));
					that.rePreloadAdCount = 0;
					that.interstitials.push(args)
				}).onAdFailedToLoad(function(args) {
					that.rePreloadAdCount++;
					console.log("onAdFailedToLoad: ", JSON.stringify(args))
				}))
			}
		}
		showBanner(options) {}
		hideBanner(options) {}
		showSplash(options) {}
		hideSplash(options) {}
	}
	class TCLManager {
		constructor() {
			this.interstitialCooldown = 0;
			this.interstitialed = false;
			this.interstitialTimerout = 0;
			this.reinterstitialCount = 0
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new TCLManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				var script = document.createElement("script");
				script.async = true;
				ConfigManager.getInstance().set(ConfigType.en_ADPUBID, "ca-pub-6228750284884003");
				ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, "2246042049");
				script.setAttribute("data-ad-client", ConfigManager.getInstance().get(ConfigType.en_ADPUBID));
				script.setAttribute("data-ad-channel", ConfigManager.getInstance().get(ConfigType.en_ADCHANNELID));
				script.setAttribute("data-ad-frequency-hint", "10s");
				try {
					const tHostname = location.hostname;
					const tChannelName = "yof.com";
					if (tHostname.indexOf(tChannelName.toLowerCase()) < 0 && !ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
						ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, true);
						utilities.traceWarn("debugOpen original value is False, set to True because the game files are not host on " + tChannelName)
					}
				} catch (error) {
					utilities.trace("get hostname error", error)
				}
				if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
					script.setAttribute("data-adbreak-test", "on")
				}
				script.onload = () => {
					this.updateInterval = setInterval(this.onUpdate.bind(this), 1e3);
					this.showSplash();
					this.showBanner();
					resolve(true)
				};
				script.onerror = function() {
					reject()
				};
				script.src = "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
				document.head.appendChild(script);
				window["adsbygoogle"] = window["adsbygoogle"] || [];
				window["adBreak"] = window["adConfig"] = function(o) {
					window["adsbygoogle"].push(o)
				};
				window["adConfig"]({
					preloadAdBreaks: "on"
				});
				this.adBreak = function(o) {
					window["adsbygoogle"].push(o)
				};
				window["dataLayer"] = window["dataLayer"] || [];
				window["gtag"] = function(a, b) {
					window["dataLayer"].push(arguments)
				};
				window["gtag"]('js', new Date());
				window["gtag"]('config', 'UA-203001982-2');
				var gtagScript = document.createElement("script");
				gtagScript.async = true;
				gtagScript.src = "http://www.googletagmanager.com/gtag/js?id=UA-203001982-2";
				document.head.appendChild(gtagScript)
			})
		}
		onUpdate() {
			if (this.interstitialCooldown >= 0) {
				this.interstitialCooldown--
			}
			this.checkReward()
		}
		showBanner(options) {
			this.hideBanner();
			const body = document.body;
			const banner = document.createElement("ins");
			body.appendChild(banner);
			banner.className = "adsbygoogle";
			banner.id = "adsbygoogle_banner";
			banner.style.display = "block";
			banner.style.width = "320px";
			banner.style.height = "50px";
			banner.style.position = "absolute";
			banner.style.left = (window.innerWidth - 320) / 2 + "";
			if (options && options.top) {
				if (typeof options.top == 'number') {
					banner.style.top = options.top + "px"
				} else {
					banner.style.top = options.top
				}
			} else {
				banner.style.bottom = "0"
			}
			banner.setAttribute("data-ad-client", ConfigManager.getInstance().get(ConfigType.en_ADPUBID));
			banner.setAttribute("data-ad-slot", "4704497076");
			banner.setAttribute("data-full-width-responsive", "true");
			if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
				banner.style.background = "#FFFFFF";
				banner.setAttribute("data-adtest", "on")
			}(window["adsbygoogle"] = window["adsbygoogle"] || []).push({})
		}
		hideBanner(options) {
			const banner = document.getElementById("adsbygoogle_banner");
			if (banner) {
				banner.remove()
			}
		}
		showSplash(options) {
			utilities.trace("showSplash");
			clearTimeout(this.interstitialTimerout);
			if (this.reinterstitialCount > 5) {
				return
			}
			this.reinterstitialCount++;
			this.interstitialTimerout = setTimeout(() => {
				if (!this.interstitialed) {
					this.showSplash()
				}
			}, 1.0e3);
			this.adBreak({
				type: "next",
				name: "game",
				beforeAd: () => {
					window.blur();
					clearTimeout(this.interstitialTimerout);
					this.interstitialed = true
				},
				afterAd: () => {
					window.focus()
				}
			})
		}
		hideSplash(options) {}
		showInterstitial(options) {
			this.interstitialed = true;
			if (options) {
				options.beforeShowAd && options.beforeShowAd();
				options.afterShowAd && options.afterShowAd();
				options.beforeShowAd = null;
				options.afterShowAd = null
			}
			return true
		}
		canShowReward() {
			if (this.showAdFn) {
				return true
			} else {
				return false
			}
		}
		showReward(options) {
			if (!this.canShowReward()) {
				return false
			}
			utilities.trace("requesting Reward AD");
			this.rewardOptions = options;
			this.showAdFn();
			this.showAdFn = null;
			return true
		}
		checkReward() {
			if (this.showAdFn) return;
			this.adBreak({
				type: "reward",
				name: "reward",
				beforeAd: this.onRewardBeforeBreak.bind(this),
				afterAd: this.onRewardAfterBreak.bind(this),
				beforeReward: this.onBeforeReward.bind(this),
				adDismissed: this.onRewardDismissed.bind(this),
				adViewed: this.onRewardComplete.bind(this),
			})
		}
		onBeforeReward(showAdFn) {
			utilities.trace("load Reward AD Successful");
			this.showAdFn = showAdFn
		}
		onRewardBeforeBreak() {
			this.rewardOptions.beforeShowAd && this.rewardOptions.beforeShowAd();
			this.rewardOptions.beforeShowAd = null
		}
		onRewardAfterBreak() {
			window.focus();
			this.rewardOptions.afterShowAd && this.rewardOptions.afterShowAd();
			this.rewardOptions.afterShowAd = null;
			this.showAdFn = null
		}
		onRewardDismissed() {
			this.rewardOptions.rewardDismissed && this.rewardOptions.rewardDismissed();
			this.rewardOptions.rewardDismissed = null
		}
		onRewardComplete() {
			this.rewardOptions.rewardComplete && this.rewardOptions.rewardComplete();
			this.rewardOptions.rewardComplete = null
		}
	}
	class TranssionManager {
		constructor() {
			this.showInterstitialCount = 0;
			this.interstitialTimerout = 0;
			this.interstitialCooldown = 0
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new TranssionManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				var script = document.createElement("script");
				script.async = true;
				script.setAttribute("data-ad-client", "ca-pub-2270136017335510");
				script.setAttribute("data-ad-channel", "5504056973");
				script.setAttribute("data-ad-frequency-hint", "10s");
				try {
					const tHostname = location.hostname;
					const tChannelName = "yyggames.com";
					if (tHostname.indexOf(tChannelName.toLowerCase()) < 0 && !ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
						ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, true);
						utilities.traceWarn("debugOpen original value is False, set to True because the game files are not host on " + tChannelName)
					}
				} catch (error) {
					utilities.trace("get hostname error", error)
				}
				if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
					script.setAttribute("data-adbreak-test", "on")
				}
				script.onload = () => {
					this.updateInterval = setInterval(this.onUpdate.bind(this), 1e3);
					resolve(true)
				};
				script.onerror = function() {
					reject()
				};
				var h = "h";
				var t = "t";
				var p = "p";
				var s = "s";
				var m = "m";
				var o = "o";
				script.src = h + t + t + p + s + "://" + p + "agead2.g" + o + o + "glesyndication.c" + o + m + "/pagead/j" + s + "/adsbyg" + o + o + "gle.j" + s;
				document.head.appendChild(script);
				window["adsbygoogle"] = window["adsbygoogle"] || [];
				window["adBreak"] = window["adConfig"] = function(o) {
					window["adsbygoogle"].push(o)
				};
				window["adConfig"]({
					preloadAdBreaks: "on"
				});
				this.adBreak = function(o) {
					window["adsbygoogle"].push(o)
				};
				var g_tag = document.createElement("script");
				g_tag.id = 'g-tag';
				document.head.appendChild(g_tag);
				window["dataLayer"] = window["dataLayer"] || [];
				window["gtag"] = function(a, b) {
					window["dataLayer"].push(arguments)
				};
				window["gtag"]('js', new Date());
				window["gtag"]('config', 'UA-120043346-74');
				var gtagScript = document.createElement("script");
				gtagScript.async = true;
				gtagScript.src = "http://www.googletagmanager.com/gtag/js?id=UA-120043346-74";
				document.head.appendChild(gtagScript);

				function addAsyncScriptAfter(src, targetId, cb) {
					var targetJsEle = document.getElementById(targetId);
					var jsEle = document.createElement('script');
					jsEle.async = true;
					jsEle.onload = cb;
					jsEle.src = src;
					insertAfter(jsEle, targetJsEle)
				}

				function insertAfter(newEle, targetEle) {
					var parent = targetEle.parentNode;
					if (parent.lastChild == targetEle) {
						parent.appendChild(newEle)
					} else {
						parent.insertBefore(newEle, targetEle.nextSibling)
					}
				}
				addAsyncScriptAfter('http://tstatic.hippoobox.com/h5/static/hippooBack.min.js', 'g-tag', function() {
					var btnObj = {
						id: 'hippooBackBtn',
						canDrag: true,
						left: '10px',
						top: '25px',
						btnType: 0
					};
					window["$hb"].createBackBtn(btnObj)
				})
			})
		}
		onUpdate() {
			if (this.interstitialCooldown >= 0) {
				this.interstitialCooldown--
			}
			this.checkReward()
		}
		showBanner(options) {
			this.hideBanner();
			const body = document.body;
			const banner = document.createElement("ins");
			body.appendChild(banner);
			banner.className = "adsbygoogle";
			banner.id = "adsbygoogle_banner";
			banner.style.display = "inline-block";
			banner.style.width = "320px";
			banner.style.height = "50px";
			banner.style.color = "#FFFFFF";
			banner.style.position = "absolute";
			banner.style.left = (window.innerWidth - 320) / 2 + "";
			if (options && options.top) {
				if (typeof options.top == 'number') {
					banner.style.top = options.top + "px"
				} else {
					banner.style.top = options.top
				}
			} else {
				banner.style.bottom = "0"
			}
			banner.setAttribute("data-ad-client", "ca-pub-2270136017335510");
			banner.setAttribute("data-ad-slot", "4706529368");
			if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
				banner.setAttribute("data-adtest", "on")
			}(window["adsbygoogle"] = window["adsbygoogle"] || []).push({})
		}
		hideBanner(options) {
			const banner = document.getElementById("adsbygoogle_banner");
			if (banner) {
				banner.remove()
			}
		}
		showSplash(options) {
			this.hideSplash();
			const body = document.body;
			const splash = document.createElement("ins");
			body.appendChild(splash);
			splash.className = "adsbygoogle";
			splash.id = "adsbygoogle_splash";
			splash.style.display = "block";
			if (options && options.top) {
				if (typeof options.top == 'number') {
					splash.style.marginTop = options.top + "px"
				} else {
					splash.style.marginTop = options.top
				}
			} else {
				splash.style.marginTop = "50%"
			}
			splash.style.marginTop = options && options.top ? options.top + "px" : "50%";
			splash.setAttribute("data-ad-client", "ca-pub-2270136017335510");
			splash.setAttribute("data-ad-slot", "9412061139");
			splash.setAttribute("data-ad-format", "auto");
			splash.setAttribute("data-full-width-responsive", "true");
			if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
				splash.setAttribute("data-adtest", "on")
			}(window["adsbygoogle"] = window["adsbygoogle"] || []).push({})
		}
		hideSplash(options) {
			const splash = document.getElementById("adsbygoogle_splash");
			if (splash) {
				splash.remove()
			}
		}
		showInterstitial(options) {
			if (this.interstitialCooldown > 0) {
				if (options && options.beforeShowAd) {
					options.beforeShowAd();
					options.beforeShowAd = null
				}
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				utilities.trace("requesting Interstitial AD，less than 30s, ignored :", this.interstitialCooldown);
				return
			}
			utilities.trace("requesting Interstitial AD");
			if (this.options && this.options.afterShowAd) return;
			let typename = "next";
			if (this.showInterstitialCount == 0) {
				typename = "start";
				this.showInterstitialCount++
			}
			utilities.showLoading();
			this.options = options;
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null;
				EventsManager.getInstance().event("beforeShowAd")
			}
			this.adBreak({
				type: typename,
				name: "game",
				beforeAd: () => {
					window.blur()
				},
				afterAd: () => {
					utilities.hideLoading();
					if (options && options.afterShowAd) {
						options.afterShowAd();
						options.afterShowAd = null;
						EventsManager.getInstance().event("afterShowAd")
					}
					this.interstitialCooldown = 30;
					window.focus()
				},
				adBreakDone: (res) => {
					utilities.trace("adBreakDone", res);
					utilities.hideLoading();
					if (options && options.afterShowAd) {
						options.afterShowAd();
						options.afterShowAd = null;
						EventsManager.getInstance().event("afterShowAd")
					}
				}
			});
			return true
		}
		canShowReward() {
			if (this.showAdFn) {
				return true
			} else {
				return false
			}
		}
		showReward(options) {
			if (!this.canShowReward()) {
				return false
			}
			utilities.trace("requesting Reward AD");
			this.rewardOptions = options;
			this.showAdFn();
			this.showAdFn = null;
			return true
		}
		checkReward() {
			if (this.showAdFn) return;
			this.adBreak({
				type: "reward",
				name: "reward",
				beforeAd: this.onRewardBeforeBreak.bind(this),
				afterAd: this.onRewardAfterBreak.bind(this),
				beforeReward: this.onBeforeReward.bind(this),
				adDismissed: this.onRewardDismissed.bind(this),
				adViewed: this.onRewardComplete.bind(this),
			})
		}
		onBeforeReward(showAdFn) {
			utilities.trace("load Reward AD Successful");
			this.showAdFn = showAdFn
		}
		onRewardBeforeBreak() {
			this.rewardOptions.beforeShowAd && this.rewardOptions.beforeShowAd();
			this.rewardOptions.beforeShowAd = null
		}
		onRewardAfterBreak() {
			window.focus();
			this.rewardOptions.afterShowAd && this.rewardOptions.afterShowAd();
			this.rewardOptions.afterShowAd = null;
			this.showAdFn = null
		}
		onRewardDismissed() {
			this.rewardOptions.rewardDismissed && this.rewardOptions.rewardDismissed();
			this.rewardOptions.rewardDismissed = null
		}
		onRewardComplete() {
			this.rewardOptions.rewardComplete && this.rewardOptions.rewardComplete();
			this.rewardOptions.rewardComplete = null
		}
	}
	class XiaomiManager {
		constructor() {
			this.showInterstitialCount = 0;
			this.interstitialTimerout = 0;
			this.interstitialCooldown = 0
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new XiaomiManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				var script = document.createElement("script");
				script.async = true;
				script.setAttribute("data-ad-client", ConfigManager.getInstance().get(ConfigType.en_ADPUBID));
				script.setAttribute("data-ad-channel", ConfigManager.getInstance().get(ConfigType.en_ADCHANNELID));
				script.setAttribute("data-ad-frequency-hint", "10s");
				try {
					const tHostname = location.hostname;
					const tChannelName = "yof.com";
					if (tHostname.indexOf(tChannelName.toLowerCase()) < 0 && !ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
						ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, true);
						utilities.traceWarn("debugOpen original value is False, set to True because the game files are not host on " + tChannelName)
					}
				} catch (error) {
					utilities.trace("get hostname error", error)
				}
				if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
					script.setAttribute("data-adbreak-test", "on")
				}
				script.onload = () => {
					this.updateInterval = setInterval(this.onUpdate.bind(this), 1e3);
					resolve(true)
				};
				script.onerror = function() {
					reject()
				};
				script.src = "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
				document.head.appendChild(script);
				window["adsbygoogle"] = window["adsbygoogle"] || [];
				window["adBreak"] = window["adConfig"] = function(o) {
					window["adsbygoogle"].push(o)
				};
				window["adConfig"]({
					preloadAdBreaks: "on"
				});
				this.adBreak = function(o) {
					window["adsbygoogle"].push(o)
				};
				window["dataLayer"] = window["dataLayer"] || [];
				window["gtag"] = function(a, b) {
					window["dataLayer"].push(arguments)
				};
				window["gtag"]('js', new Date());
				window["gtag"]('config', 'UA-203001982-1');
				var gtagScript = document.createElement("script");
				gtagScript.async = true;
				gtagScript.src = "http://www.googletagmanager.com/gtag/js?id=UA-203001982-1";
				document.head.appendChild(gtagScript)
			})
		}
		showInterstitial(options) {
			if (this.interstitialCooldown > 0) {
				if (options && options.beforeShowAd) {
					options.beforeShowAd();
					options.beforeShowAd = null
				}
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
				utilities.trace("requesting Interstitial AD，less than 30s, ignored :", this.interstitialCooldown);
				return
			}
			utilities.trace("requesting Interstitial AD");
			if (this.options && this.options.afterShowAd) return;
			let typename = "next";
			if (this.showInterstitialCount == 0) {
				typename = "start";
				this.showInterstitialCount++
			}
			utilities.showLoading();
			this.options = options;
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null;
				EventsManager.getInstance().event("beforeShowAd")
			}
			this.adBreak({
				type: typename,
				name: "game",
				beforeAd: () => {
					window.blur()
				},
				afterAd: () => {
					utilities.hideLoading();
					if (options && options.afterShowAd) {
						options.afterShowAd();
						options.afterShowAd = null
					}
					this.interstitialCooldown = 30;
					window.focus();
					EventsManager.getInstance().event("afterShowAd")
				},
				adBreakDone: (res) => {
					utilities.trace("adBreakDone", res);
					utilities.hideLoading();
					if (options && options.afterShowAd) {
						options.afterShowAd();
						options.afterShowAd = null;
						EventsManager.getInstance().event("afterShowAd")
					}
				}
			});
			return true
		}
		canShowReward() {
			if (this.showAdFn) {
				return true
			} else {
				return false
			}
		}
		showReward(options) {
			if (!this.canShowReward()) {
				return false
			}
			utilities.trace("requesting Reward AD");
			this.rewardOptions = options;
			this.showAdFn();
			this.showAdFn = null;
			window.blur();
			return true
		}
		onUpdate() {
			if (this.interstitialCooldown >= 0) {
				this.interstitialCooldown--
			}
			this.checkReward()
		}
		checkReward() {
			if (this.showAdFn) return;
			this.adBreak({
				type: "reward",
				name: "reward",
				beforeAd: this.onRewardBeforeBreak.bind(this),
				afterAd: this.onRewardAfterBreak.bind(this),
				beforeReward: this.onBeforeReward.bind(this),
				adDismissed: this.onRewardDismissed.bind(this),
				adViewed: this.onRewardComplete.bind(this),
			})
		}
		onBeforeReward(showAdFn) {
			utilities.trace("load Reward AD Successful");
			this.showAdFn = showAdFn
		}
		onRewardBeforeBreak() {
			this.rewardOptions.beforeShowAd && this.rewardOptions.beforeShowAd();
			this.rewardOptions.beforeShowAd = null
		}
		onRewardAfterBreak() {
			window.focus();
			this.rewardOptions.afterShowAd && this.rewardOptions.afterShowAd();
			this.rewardOptions.afterShowAd = null;
			this.showAdFn = null
		}
		onRewardDismissed() {
			this.rewardOptions.rewardDismissed && this.rewardOptions.rewardDismissed();
			this.rewardOptions.rewardDismissed = null
		}
		onRewardComplete() {
			this.rewardOptions.rewardComplete && this.rewardOptions.rewardComplete();
			this.rewardOptions.rewardComplete = null
		}
		showBanner(options) {}
		hideBanner(options) {}
		showSplash(options) {
			const debug = ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN);
			const enable = ConfigManager.getInstance().get(ConfigType.en_BANNERENABLE);
			if (!enable && !debug) {
				return
			}
			this.hideSplash();
			const body = document.body;
			const splash = document.createElement("ins");
			body.appendChild(splash);
			splash.className = "adsbygoogle";
			splash.id = "adsbygoogle_splash";
			splash.style.display = "block";
			if (options && options.top) {
				if (typeof options.top == 'number') {
					splash.style.marginTop = options.top + "px"
				} else {
					splash.style.marginTop = options.top
				}
			} else {
				splash.style.marginTop = "50%"
			}
			splash.style.marginTop = options && options.top ? options.top + "px" : "50%";
			splash.setAttribute("data-ad-client", "ca-pub-5907420070029753");
			splash.setAttribute("data-ad-slot", "4555556324");
			splash.setAttribute("data-ad-format", "auto");
			splash.setAttribute("data-full-width-responsive", "true");
			if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
				splash.setAttribute("data-adtest", "on")
			}(window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
			return true
		}
		hideSplash(options) {
			const splash = document.getElementById("adsbygoogle_splash");
			if (splash) {
				splash.remove()
			}
			return true
		}
	}
	class XishanjuManager {
		constructor() {
			this.showInterstitialCount = 0;
			this.interstitialTimerout = 0;
			this.interstitialCooldown = 0
		}
		static getInstance() {
			if (!this._gInstance) {
				this._gInstance = new XishanjuManager()
			}
			return this._gInstance
		}
		startup() {
			return new Promise((resolve, reject) => {
				var script = document.createElement("script");
				script.async = false;
				script.onload = () => {
					utilities.trace("开始登录");
					vigoo.Login((res) => {
						utilities.trace("登录成功", res);
						resolve(true)
					})
				};
				script.onerror = function() {
					reject()
				};
				script.src = "http://sdk.vigoo.com/vigoo/sdk.js";
				document.head.appendChild(script);
				window["dataLayer"] = window["dataLayer"] || [];
				window["gtag"] = function(a, b) {
					window["dataLayer"].push(arguments)
				};
				window["gtag"]('js', new Date());
				window["gtag"]('config', 'UA-203001982-3');
				var gtagScript = document.createElement("script");
				gtagScript.async = true;
				gtagScript.src = "http://www.googletagmanager.com/gtag/js?id=UA-203001982-3";
				document.head.appendChild(gtagScript)
			})
		}
		showInterstitial(options) {
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null
			}
			utilities.trace("requesting Interstitial AD");
			vigoo.ShowScreenVideo("下一关", (res) => {
				const type = res.type;
				console.log("ShowScreenVideo", res);
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
			});
			return true
		}
		canShowReward() {
			return true
		}
		showReward(options) {
			if (!this.canShowReward()) {
				return false
			}
			utilities.trace("requesting Reward AD");
			if (options && options.beforeShowAd) {
				options.beforeShowAd();
				options.beforeShowAd = null
			}
			window.blur();
			vigoo.ShowExcitationVideoAdv((ret) => {
				const type = ret.type;
				if (type == 3) {
					if (options && options.rewardComplete) {
						options.rewardComplete();
						options.rewardComplete = null
					}
				} else {
					if (options && options.rewardComplete) {
						options.rewardDismissed();
						options.rewardDismissed = null
					}
				}
				if (options && options.afterShowAd) {
					options.afterShowAd();
					options.afterShowAd = null
				}
			});
			return true
		}
		onUpdate() {
			if (this.interstitialCooldown >= 0) {
				this.interstitialCooldown--
			}
			this.checkReward()
		}
		checkReward() {
			if (this.showAdFn) return;
			this.adBreak({
				type: "reward",
				name: "reward",
				beforeAd: this.onRewardBeforeBreak.bind(this),
				afterAd: this.onRewardAfterBreak.bind(this),
				beforeReward: this.onBeforeReward.bind(this),
				adDismissed: this.onRewardDismissed.bind(this),
				adViewed: this.onRewardComplete.bind(this),
			})
		}
		onBeforeReward(showAdFn) {
			utilities.trace("load Reward AD Successful");
			this.showAdFn = showAdFn
		}
		onRewardBeforeBreak() {
			this.rewardOptions.beforeShowAd && this.rewardOptions.beforeShowAd();
			this.rewardOptions.beforeShowAd = null
		}
		onRewardAfterBreak() {
			window.focus();
			this.rewardOptions.afterShowAd && this.rewardOptions.afterShowAd();
			this.rewardOptions.afterShowAd = null;
			this.showAdFn = null
		}
		onRewardDismissed() {
			this.rewardOptions.rewardDismissed && this.rewardOptions.rewardDismissed();
			this.rewardOptions.rewardDismissed = null
		}
		onRewardComplete() {
			this.rewardOptions.rewardComplete && this.rewardOptions.rewardComplete();
			this.rewardOptions.rewardComplete = null
		}
		showBanner(options) {}
		hideBanner(options) {}
		showSplash(options) {}
		hideSplash(options) {
			const splash = document.getElementById("adsbygoogle_splash");
			if (splash) {
				splash.remove()
			}
		}
	}
	class YYGGames {
		constructor() {
			this.version = "1.0.33";
			this.isStartuped = false
		}
		static create() {
			return new YYGGames()
		}
		startupByYad(options) {
			return __awaiter(this, void 0, void 0, function*() {
				options.channel = ChannelType.en_YAD;
				return this.startup(options)
			})
		}
		startupByCargames(options) {
			return __awaiter(this, void 0, void 0, function*() {
				options.channel = ChannelType.en_CARGAMES;
				return this.startup(options)
			})
		}
		startupByBestGames(options) {
			return __awaiter(this, void 0, void 0, function*() {
				options.channel = ChannelType.en_BESTGAMES;
				return this.startup(options)
			})
		}
		startupByBabyGames(options) {
			return __awaiter(this, void 0, void 0, function*() {
				options.channel = ChannelType.en_BABYGAMES;
				return this.startup(options)
			})
		}
		startupByYiv(options) {
			return __awaiter(this, void 0, void 0, function*() {
				options.channel = ChannelType.en_YIV;
				return this.startup(options)
			})
		}
		getForgames(channel) {
			return __awaiter(this, void 0, void 0, function*() {
				const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
				switch (en_AdPlatform) {
					case AdPlatformType.en_ADBREAK:
						break;
					case AdPlatformType.en_GAMEDISTRIBUTION:
					case AdPlatformType.en_TRANSSION:
					case AdPlatformType.en_XIAOMI:
					case AdPlatformType.en_Xishanju:
					case AdPlatformType.en_TCL:
						this.forgames = [];
						return this.forgames;
					default:
						break
				}
				let websiteAddress = "";
				if (!this.forgames) {
					var configChannel = ConfigManager.getInstance().get(ConfigType.en_CHANNEL);
					var appName = ConfigManager.getInstance().get(ConfigType.en_APPNAME);
					if (!configChannel) {
						configChannel = channel
					}
					switch (configChannel) {
						case ChannelType.en_YAD:
							websiteAddress = "http://www.yad.com/";
							break;
						case ChannelType.en_YIV:
							websiteAddress = "http://www.yiv.com/";
							break;
						case ChannelType.en_BABYGAMES:
							websiteAddress = "http://www.babygames.com/";
							break;
						case ChannelType.en_BESTGAMES:
							websiteAddress = "http://www.bestgames.com/";
							break;
						case ChannelType.en_CARGAMES:
							websiteAddress = "http://cargames.com/";
							break;
						default:
							this.forgames = [];
							return this.forgames
					}
					const data = yield utilities.readDataSync(websiteAddress + "forgame/games.json").catch(() => {
						return []
					});
					this.forgames = [];
					for (const iter of data) {
						const thumb = iter.thumb;
						iter.appName = thumb.replace(websiteAddress + "thumb/", "").replace(".jpg", "");
						if (iter.appName !== appName) {
							this.forgames.push(iter)
						}
					}
				}
				return this.forgames
			})
		}
		startup(options) {
			return __awaiter(this, void 0, void 0, function*() {
				if (this.isStartuped) return;
				let channel = options.channel;
				let appName = options.appName;
				if (appName == void 0 && options.config) {
					appName = options.config.appName
				}
				let websiteAddress = "http://www.yad.com/";
				let channelName = "";
				let adChannelId = 0;
				switch (channel) {
					case ChannelType.en_YAD:
						websiteAddress = "http://www.yad.com/";
						channelName = "YAD.Com";
						adChannelId = 4967854051;
						break;
					case ChannelType.en_YIV:
						websiteAddress = "http://www.yiv.com/";
						channelName = "YIV.Com";
						adChannelId = 2341690715;
						break;
					case ChannelType.en_BABYGAMES:
						websiteAddress = "http://www.babygames.com/";
						channelName = "BabyGames.Com";
						adChannelId = 8743447538;
						break;
					case ChannelType.en_BESTGAMES:
						websiteAddress = "http://www.bestgames.com/";
						channelName = "BestGames.Com";
						adChannelId = 4804202528;
						break;
					case ChannelType.en_CARGAMES:
						websiteAddress = "http://cargames.com/";
						channelName = "CarGames.Com";
						adChannelId = 1220180734;
						break;
					case ChannelType.en_Puzzlegame:
						websiteAddress = "http://puzzlegame.com/";
						channelName = "PuzzleGame.Com";
						adChannelId = 1986691204;
						break;
					default:
						break
				}
				ConfigManager.getInstance().set(ConfigType.en_CHANNEL, channel);
				ConfigManager.getInstance().set(ConfigType.en_APPNAME, appName);
				ConfigManager.getInstance().set(ConfigType.en_CHANNELNAME, channelName);
				ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, adChannelId);
				ConfigManager.getInstance().set(ConfigType.en_WEBSITEADDRESS, websiteAddress);
				ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, false);
				const params = new URLSearchParams(location.search);
				const platform = params.get("platform") || "";
				if (params.get("debug")) {
					ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, true)
				}
				const href = location.href;
				let onGamedistribution = href.indexOf("gamedistribution.com".toLowerCase()) > -1;
				let onGamemonetize = href.indexOf("gamemonetize.com".toLowerCase()) > -1;
				const onTranssion = href.indexOf("yyggames.com".toLowerCase()) > -1;
				const onMobiuspace = href.indexOf("partner/games/dayu".toLowerCase()) > -1;
				const onXishanju = href.indexOf("partner/games/xsj".toLowerCase()) > -1;
				const onTCL = href.indexOf("partner/games/tcl".toLowerCase()) > -1;
				var onXiaomi = href.indexOf("yof.com".toLowerCase()) > -1 && !onMobiuspace && !onXishanju && !onTCL;
				if (!onXiaomi) {
					onXiaomi = platform.indexOf("xiaomi") > -1
				}
				const YYGGAMES_CONFIG = window["YYGGAMES_CONFIG"];
				if (YYGGAMES_CONFIG) {
					if (YYGGAMES_CONFIG.onBeforeShowAd) {
						this.onBeforeShowAd(YYGGAMES_CONFIG.onBeforeShowAd)
					}
					if (YYGGAMES_CONFIG.onAfterShowAd) {
						this.onAfterShowAd(YYGGAMES_CONFIG.onAfterShowAd)
					}
				}
				options.config = options.config || YYGGAMES_CONFIG;
				if (options.config) {
					if (!onGamedistribution) {
						onGamedistribution = options.config.gamedistributionId && options.config.gamedistributionId.length > 5
					}
					if (!onGamemonetize) {
						onGamemonetize = options.config.gamemonetizeId && options.config.gamemonetizeId.length > 5
					}
				}
				if (onGamedistribution) {
					let gamedistributionId = options.config.gamedistributionId.trim();
					ConfigManager.getInstance().set(ConfigType.en_GAMEDISTRIBUTIONID, gamedistributionId);
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_GAMEDISTRIBUTION);
					yield GamedistributionManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else if (onXiaomi) {
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_XIAOMI);
					ConfigManager.getInstance().set(ConfigType.en_ADPUBID, "ca-pub-5907420070029753");
					ConfigManager.getInstance().set(ConfigType.en_BANNERENABLE, false);
					const appName = ConfigManager.getInstance().get(ConfigType.en_APPNAME);
					const res = yield utilities.get(StringUtils.format("http://www.yof.com/AdManager/getId.php?platform=%s&nameid=%s", platform, appName.toLocaleLowerCase()));
					console.log("res", res);
					if (res) {
						ConfigManager.getInstance().set(ConfigType.en_BANNERENABLE, res.banner == 1);
						ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, res.channel);
						ConfigManager.getInstance().set(ConfigType.en_ADPUBID, res.pubid);
						if (res.default == 1 && options && options.config && options.config.xiaomi) {
							ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, options.config.xiaomi.channelId)
						}
					} else {
						if (options && options.config) {
							const config = options.config.xiaomi;
							if (config) {
								ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, config.channelId)
							}
						}
					}
					yield XiaomiManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else if (onTranssion) {
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_TRANSSION);
					yield TranssionManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else if (onTCL) {
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_TCL);
					yield TCLManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else if (onGamemonetize) {
					let gamemonetizeId = options.config.gamemonetizeId.trim();
					ConfigManager.getInstance().set(ConfigType.en_GAMEMONETIZEID, gamemonetizeId);
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_GAMEMONETIZE);
					yield GamemonetizeManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else if (onMobiuspace) {
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_Mobiuspace);
					yield MobiuspaceManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else if (onXishanju) {
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_Xishanju);
					const params = new URLSearchParams(location.search);
					const platform = params.get("platform") || "xsj";
					const appName = ConfigManager.getInstance().get(ConfigType.en_APPNAME);
					ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, 2505090592);
					const res = yield utilities.get(StringUtils.format("http://www.yof.com/AdManager/getId.php?platform=%s&nameid=%s", platform, appName.toLocaleLowerCase()));
					console.log("xsj:", res);
					if (res) {
						ConfigManager.getInstance().set(ConfigType.en_ADPUBID, res.pubid)
					}
					yield XishanjuManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				} else {
					ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_ADBREAK);
					yield AdBreakManager.getInstance().startup().catch(e => {
						utilities.showMsg({
							showCancel: false,
							confirm: function() {
								location.reload()
							}
						})
					})
				}
				yield this.getForgames(channel);
				if (options.complete) {
					options.complete();
					options.complete = null
				}
				this.isStartuped = true;
				const tChannel = AdPlatformType[ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM)];
				utilities.traceVersion(this.version + " " + channelName + " " + tChannel);
				utilities.trace(appName);
				utilities.trace("pubid:", ConfigManager.getInstance().get(ConfigType.en_ADPUBID), "channel:", ConfigManager.getInstance().get(ConfigType.en_ADCHANNELID));
				EventsManager.getInstance().event("onStartup");
				return true
			})
		}
		getAdPlatformType() {
			if (!this.isStartuped) {
				const href = location.href;
				const onGamedistribution = href.indexOf("gamedistribution.com".toLowerCase()) > -1;
				const onGamemonetize = href.indexOf("gamemonetize.com".toLowerCase()) > -1;
				const onTranssion = href.indexOf("yyggames.com".toLowerCase()) > -1;
				const onMobiuspace = href.indexOf("yof.com/partner/games/dayu".toLowerCase()) > -1;
				const onXishanju = href.indexOf("yof.com/partner/games/xsj".toLowerCase()) > -1;
				const onTCL = href.indexOf("yof.com/partner/games/tcl".toLowerCase()) > -1;
				if (onGamedistribution) {
					return AdPlatformType.en_GAMEDISTRIBUTION
				} else if (onGamemonetize) {
					return AdPlatformType.en_GAMEMONETIZE
				} else if (onTranssion) {
					return AdPlatformType.en_GAMEMONETIZE
				} else if (onMobiuspace) {
					return AdPlatformType.en_Mobiuspace
				} else if (onXishanju) {
					return AdPlatformType.en_Xishanju
				} else if (onTCL) {
					return AdPlatformType.en_TCL
				}
				return AdPlatformType.en_ADBREAK
			}
			return ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM)
		}
		getDebugOpen() {
			return ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)
		}
		showInterstitial(options) {
			return __awaiter(this, void 0, void 0, function*() {
				const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
				switch (en_AdPlatform) {
					case AdPlatformType.en_ADBREAK:
						return AdBreakManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_GAMEDISTRIBUTION:
						return GamedistributionManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_GAMEMONETIZE:
						return GamemonetizeManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_TRANSSION:
						return TranssionManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_XIAOMI:
						return XiaomiManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_Mobiuspace:
						return MobiuspaceManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_Xishanju:
						return XishanjuManager.getInstance().showInterstitial(options);
					case AdPlatformType.en_TCL:
						return TCLManager.getInstance().showInterstitial(options);
					default:
						break
				}
				return false
			})
		}
		showReward(options) {
			return __awaiter(this, void 0, void 0, function*() {
				const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
				switch (en_AdPlatform) {
					case AdPlatformType.en_ADBREAK:
						return AdBreakManager.getInstance().showReward(options);
					case AdPlatformType.en_GAMEDISTRIBUTION:
						return GamedistributionManager.getInstance().showReward(options);
					case AdPlatformType.en_GAMEMONETIZE:
						return GamemonetizeManager.getInstance().showReward(options);
					case AdPlatformType.en_TRANSSION:
						return TranssionManager.getInstance().showReward(options);
					case AdPlatformType.en_XIAOMI:
						return XiaomiManager.getInstance().showReward(options);
					case AdPlatformType.en_Mobiuspace:
						return MobiuspaceManager.getInstance().showReward(options);
					case AdPlatformType.en_Xishanju:
						return XishanjuManager.getInstance().showReward(options);
					case AdPlatformType.en_TCL:
						return TCLManager.getInstance().showReward(options);
					default:
						break
				}
				return false
			})
		}
		showBanner(options) {
			return __awaiter(this, void 0, void 0, function*() {
				const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
				switch (en_AdPlatform) {
					case AdPlatformType.en_TRANSSION:
						return TranssionManager.getInstance().showBanner(options);
					case AdPlatformType.en_ADBREAK:
						return AdBreakManager.getInstance().showBanner(options);
					case AdPlatformType.en_TCL:
						return TCLManager.getInstance().showBanner(options);
					default:
						break
				}
				return false
			})
		}
		hideBanner() {
			const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			switch (en_AdPlatform) {
				case AdPlatformType.en_TRANSSION:
					return TranssionManager.getInstance().hideBanner();
				case AdPlatformType.en_ADBREAK:
					return AdBreakManager.getInstance().hideBanner();
				case AdPlatformType.en_TCL:
					return TCLManager.getInstance().hideBanner();
				default:
					break
			}
		}
		showSplash(options) {
			return __awaiter(this, void 0, void 0, function*() {
				const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
				switch (en_AdPlatform) {
					case AdPlatformType.en_TRANSSION:
						return TranssionManager.getInstance().showSplash(options);
					case AdPlatformType.en_XIAOMI:
						return XiaomiManager.getInstance().showSplash(options);
					case AdPlatformType.en_ADBREAK:
						return AdBreakManager.getInstance().showSplash(options);
					default:
						const hostname = location.hostname;
						const onTranssion = hostname.indexOf("yyggames.com".toLowerCase()) > -1 || hostname.indexOf("192.168.1".toLowerCase()) > -1;
						if (onTranssion && !this.isStartuped) {
							return TranssionManager.getInstance().showSplash(options)
						}
						break
				}
				return true
			})
		}
		hideSplash() {
			const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			switch (en_AdPlatform) {
				case AdPlatformType.en_TRANSSION:
					return TranssionManager.getInstance().hideSplash();
				case AdPlatformType.en_XIAOMI:
					return XiaomiManager.getInstance().hideSplash();
				case AdPlatformType.en_ADBREAK:
					return AdBreakManager.getInstance().hideSplash();
				default:
					break
			}
		}
		canShowReward() {
			const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			switch (en_AdPlatform) {
				case AdPlatformType.en_ADBREAK:
					return AdBreakManager.getInstance().canShowReward();
				case AdPlatformType.en_GAMEDISTRIBUTION:
					return GamedistributionManager.getInstance().canShowReward();
				case AdPlatformType.en_TRANSSION:
					return TranssionManager.getInstance().canShowReward();
				case AdPlatformType.en_XIAOMI:
					return XiaomiManager.getInstance().canShowReward();
				default:
					return true
			}
		}
		navigate(screenName, buttonName, gameId) {
			const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
			switch (en_AdPlatform) {
				case AdPlatformType.en_GAMEDISTRIBUTION:
				case AdPlatformType.en_XIAOMI:
				case AdPlatformType.en_Mobiuspace:
				case AdPlatformType.en_Xishanju:
				case AdPlatformType.en_TCL:
					return;
				case AdPlatformType.en_GAMEMONETIZE:
				case AdPlatformType.en_ADBREAK:
					break;
				default:
					break
			}
			const appName = ConfigManager.getInstance().get(ConfigType.en_APPNAME);
			let websiteAddress = ConfigManager.getInstance().get(ConfigType.en_WEBSITEADDRESS);
			gameId = gameId || "";
			var domain = document.referrer;
			if (typeof gameId === 'undefined' || gameId == "" || gameId == "undefined") {} else {
				websiteAddress = websiteAddress + "?pic=" + gameId
			}
			if (typeof domain === 'undefined' || domain == "" || domain == "undefined") {
				domain = "unknown"
			} else {
				domain = domain.split('/')[2]
			}
			if (websiteAddress.indexOf("?") > -1) {
				websiteAddress = websiteAddress + "&"
			} else {
				websiteAddress = websiteAddress + "?"
			}
			websiteAddress = websiteAddress + "utm_source=" + domain + "&utm_medium=" + screenName + "-" + buttonName + "&utm_campaign=game-" + appName;
			try {
				if (window.open(websiteAddress)) {} else {}
			} catch (error) {}
		};
		onStartup(onStartup) {
			if (this.isStartuped) {
				onStartup && onStartup();
				return
			}
			EventsManager.getInstance().on("onStartup", this, () => {
				onStartup && onStartup()
			})
		}
		onBeforeShowAd(beforeShowAd) {
			EventsManager.getInstance().on("beforeShowAd", this, () => {
				beforeShowAd && beforeShowAd()
			})
		}
		onAfterShowAd(afterShowAd) {
			EventsManager.getInstance().on("afterShowAd", this, () => {
				afterShowAd && afterShowAd()
			})
		}
		getSystemInfoSync() {
			return {
				windowHeight: window.innerHeight,
				windowWidth: window.innerWidth
			}
		}
	}
	const sYYGGames = YYGGames.create();
	window['YYGGames'] = sYYGGames;
	window['AdPlatformType'] = AdPlatformType
}());