// this is the code which will be injected into a given page...

(function() {

	var aHolder = document.getElementById("aHolder");
	var pingHolder = document.createElement("div")
    
    pingHolder.textContent = `loading`;
    /*pingHolder.style.color = "white";
    pingHolder.style.marginBottom = "20px";
	pingHolder.style.fontSize = "50px";*/
	pingHolder.style = "color: #fff; position: absolute; bottom: 20px; font-size: 50px; left: 25px"
	pingHolder.id = "pingHolder"
	
	aHolder.appendChild(pingHolder)

!function(){"use strict";function e(e){const t=4294967296;let r,n,i=new Uint8Array(128),o=0;return f(e),i.subarray(0,o);function f(e){switch(typeof e){case"undefined":a(e);break;case"boolean":!function(e){u(e?195:194)}(e);break;case"number":!function(e){if(isFinite(e)&&Math.floor(e)===e)if(e>=0&&e<=127)u(e);else if(e<0&&e>=-32)u(e);else if(e>0&&e<=255)c([204,e]);else if(e>=-128&&e<=127)c([208,e]);else if(e>0&&e<=65535)c([205,e>>>8,e]);else if(e>=-32768&&e<=32767)c([209,e>>>8,e]);else if(e>0&&e<=4294967295)c([206,e>>>24,e>>>16,e>>>8,e]);else if(e>=-2147483648&&e<=2147483647)c([210,e>>>24,e>>>16,e>>>8,e]);else if(e>0&&e<=0x10000000000000000){let r=e/t,n=e%t;c([211,r>>>24,r>>>16,r>>>8,r,n>>>24,n>>>16,n>>>8,n])}else e>=-0x8000000000000000&&e<=0x8000000000000000?(u(211),s(e)):c(e<0?[211,128,0,0,0,0,0,0,0]:[207,255,255,255,255,255,255,255,255]);else n||(r=new ArrayBuffer(8),n=new DataView(r)),n.setFloat64(0,e),u(203),c(new Uint8Array(r))}(e);break;case"string":!function(e){let t=function(e){let t=!0,r=e.length;for(let n=0;n<r;n++)if(e.charCodeAt(n)>127){t=!1;break}let n=0,i=new Uint8Array(e.length*(t?1:4));for(let t=0;t!==r;t++){let o=e.charCodeAt(t);if(o<128)i[n++]=o;else{if(o<2048)i[n++]=o>>6|192;else{if(o>55295&&o<56320){if(++t>=r)throw new Error("UTF-8 encode: incomplete surrogate pair");let f=e.charCodeAt(t);if(f<56320||f>57343)throw new Error("UTF-8 encode: second surrogate character 0x"+f.toString(16)+" at index "+t+" out of range");o=65536+((1023&o)<<10)+(1023&f),i[n++]=o>>18|240,i[n++]=o>>12&63|128}else i[n++]=o>>12|224;i[n++]=o>>6&63|128}i[n++]=63&o|128}}return t?i:i.subarray(0,n)}(e),r=t.length;r<=31?u(160+r):c(r<=255?[217,r]:r<=65535?[218,r>>>8,r]:[219,r>>>24,r>>>16,r>>>8,r]);c(t)}(e);break;case"object":null===e?a(e):e instanceof Date?function(e){let r=e.getTime()/1e3;if(0===e.getMilliseconds()&&r>=0&&r<4294967296)c([214,255,r>>>24,r>>>16,r>>>8,r]);else if(r>=0&&r<17179869184){let n=1e6*e.getMilliseconds();c([215,255,n>>>22,n>>>14,n>>>6,n<<2>>>0|r/t,r>>>24,r>>>16,r>>>8,r])}else{let t=1e6*e.getMilliseconds();c([199,12,255,t>>>24,t>>>16,t>>>8,t]),s(r)}}(e):Array.isArray(e)?l(e):e instanceof Uint8Array||e instanceof Uint8ClampedArray?function(e){let t=e.length;c(t<=15?[196,t]:t<=65535?[197,t>>>8,t]:[198,t>>>24,t>>>16,t>>>8,t]);c(e)}(e):e instanceof Int8Array||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array?l(e):function(e){let t=0;for(let r in e)t++;t<=15?u(128+t):c(t<=65535?[222,t>>>8,t]:[223,t>>>24,t>>>16,t>>>8,t]);for(let t in e)f(t),f(e[t])}(e)}}function a(e){u(192)}function l(e){let t=e.length;t<=15?u(144+t):c(t<=65535?[220,t>>>8,t]:[221,t>>>24,t>>>16,t>>>8,t]);for(let r=0;r<t;r++)f(e[r])}function u(e){if(i.length<o+1){let e=2*i.length;for(;e<o+1;)e*=2;let t=new Uint8Array(e);t.set(i),i=t}i[o]=e,o++}function c(e){if(i.length<o+e.length){let t=2*i.length;for(;t<o+e.length;)t*=2;let r=new Uint8Array(t);r.set(i),i=r}i.set(e,o),o+=e.length}function s(e){let r,n;e>=0?(r=e/t,n=e%t):(e++,r=~(r=Math.abs(e)/t),n=~(n=Math.abs(e)%t)),c([r>>>24,r>>>16,r>>>8,r,n>>>24,n>>>16,n>>>8,n])}}function t(e){const t=4294967296;let r=0;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),"object"!=typeof e||void 0===e.length)throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");if(!e.length)throw new Error("Invalid argument: The byte array to deserialize is empty.");e instanceof Uint8Array||(e=new Uint8Array(e));let n=i();return e.length,n;function i(){const t=e[r++];if(t>=0&&t<=127)return t;if(t>=128&&t<=143)return u(t-128);if(t>=144&&t<=159)return c(t-144);if(t>=160&&t<=191)return s(t-160);if(192===t)return null;if(193===t)throw new Error("Invalid byte code 0xc1 found.");if(194===t)return!1;if(195===t)return!0;if(196===t)return l(-1,1);if(197===t)return l(-1,2);if(198===t)return l(-1,4);if(199===t)return d(-1,1);if(200===t)return d(-1,2);if(201===t)return d(-1,4);if(202===t)return a(4);if(203===t)return a(8);if(204===t)return f(1);if(205===t)return f(2);if(206===t)return f(4);if(207===t)return f(8);if(208===t)return o(1);if(209===t)return o(2);if(210===t)return o(4);if(211===t)return o(8);if(212===t)return d(1);if(213===t)return d(2);if(214===t)return d(4);if(215===t)return d(8);if(216===t)return d(16);if(217===t)return s(-1,1);if(218===t)return s(-1,2);if(219===t)return s(-1,4);if(220===t)return c(-1,2);if(221===t)return c(-1,4);if(222===t)return u(-1,2);if(223===t)return u(-1,4);if(t>=224&&t<=255)return t-256;throw console.debug("msgpack array:",e),new Error("Invalid byte value '"+t+"' at index "+(r-1)+" in the MessagePack binary data (length "+e.length+"): Expecting a range of 0 to 255. This is not a byte array.")}function o(t){let n=0,i=!0;for(;t-- >0;)if(i){let t=e[r++];n+=127&t,128&t&&(n-=128),i=!1}else n*=256,n+=e[r++];return n}function f(t){let n=0;for(;t-- >0;)n*=256,n+=e[r++];return n}function a(t){let n=new DataView(e.buffer,r,t);return r+=t,4===t?n.getFloat32(0,!1):8===t?n.getFloat64(0,!1):void 0}function l(t,n){t<0&&(t=f(n));let i=e.subarray(r,r+t);return r+=t,i}function u(e,t){e<0&&(e=f(t));let r={};for(;e-- >0;){r[i()]=i()}return r}function c(e,t){e<0&&(e=f(t));let r=[];for(;e-- >0;)r.push(i());return r}function s(t,n){t<0&&(t=f(n));let i=r;return r+=t,function(e,t,r){let n=t,i="";r+=t;for(;n<r;){let t=e[n++];if(t>127)if(t>191&&t<224){if(n>=r)throw new Error("UTF-8 decode: incomplete 2-byte sequence");t=(31&t)<<6|63&e[n++]}else if(t>223&&t<240){if(n+1>=r)throw new Error("UTF-8 decode: incomplete 3-byte sequence");t=(15&t)<<12|(63&e[n++])<<6|63&e[n++]}else{if(!(t>239&&t<248))throw new Error("UTF-8 decode: unknown multibyte start 0x"+t.toString(16)+" at index "+(n-1));if(n+2>=r)throw new Error("UTF-8 decode: incomplete 4-byte sequence");t=(7&t)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++]}if(t<=65535)i+=String.fromCharCode(t);else{if(!(t<=1114111))throw new Error("UTF-8 decode: code point 0x"+t.toString(16)+" exceeds UTF-16 reach");t-=65536,i+=String.fromCharCode(t>>10|55296),i+=String.fromCharCode(1023&t|56320)}}return i}(e,i,t)}function d(e,n){e<0&&(e=f(n));let i=f(1),a=l(e);switch(i){case 255:return function(e){if(4===e.length){let t=(e[0]<<24>>>0)+(e[1]<<16>>>0)+(e[2]<<8>>>0)+e[3];return new Date(1e3*t)}if(8===e.length){let r=(e[0]<<22>>>0)+(e[1]<<14>>>0)+(e[2]<<6>>>0)+(e[3]>>>2),n=(3&e[3])*t+(e[4]<<24>>>0)+(e[5]<<16>>>0)+(e[6]<<8>>>0)+e[7];return new Date(1e3*n+r/1e6)}if(12===e.length){let t=(e[0]<<24>>>0)+(e[1]<<16>>>0)+(e[2]<<8>>>0)+e[3];r-=8;let n=o(8);return new Date(1e3*n+t/1e6)}throw new Error("Invalid data length for a date value.")}(a)}return{type:i,data:a}}}let r={serialize:e,deserialize:t,encode:e,decode:t};"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=r:window[window.msgpackJsName||"msgpack"]=r}();
//# sourceMappingURL=msgpack.min.js.map
    
this.socket = new WebSocket('wss://krunker_social.krunker.io/ws');

var pingEncoded = msgpack.serialize([ 'po', [] ]).buffer;

this.socket.onopen = () => {
	console.log('connected');
	pong();
};

this.socket.onmessage = async function(event) {
	var blob = event.data;
	var arrayBuffer = null;

	arrayBuffer = await new Response(blob).arrayBuffer();

	var data = msgpack.deserialize(arrayBuffer);

	if (data[0] == 'pi') {
		pong();
	} else if (data[0] == 'pir') {
		const ping = data[1];
		displayPing(ping);
	}
};

function pong() {
	this.socket.send(pingEncoded);
}

function displayPing(value) {
	document.getElementById('pingHolder').textContent = `Ping: ${value}ms`;
}
    
})();

