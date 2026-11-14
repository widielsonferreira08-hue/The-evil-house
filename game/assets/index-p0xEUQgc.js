(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Br="152",Tl=0,Qr=1,Al=2,Rl=0,Bo=1,Cl=2,pn=3,Cn=0,Te=1,an=2,Rn=0,xi=1,ta=2,ea=3,na=4,Ll=5,gi=100,Pl=101,Dl=102,ia=103,sa=104,Il=200,Ul=201,Nl=202,Fl=203,Go=204,Ho=205,Ol=206,zl=207,kl=208,Bl=209,Gl=210,Hl=0,Vl=1,Wl=2,Lr=3,Xl=4,ql=5,Yl=6,jl=7,Gr=0,Kl=1,$l=2,mn=0,Zl=1,Jl=2,Ql=3,tc=4,ec=5,Vo=300,Si=301,Ei=302,Pr=303,Dr=304,Bs=306,Ns=1e3,Ye=1001,Ir=1002,Qt=1003,ra=1004,Ks=1005,Oe=1006,nc=1007,qi=1008,Kn=1009,ic=1010,sc=1011,Wo=1012,rc=1013,Vn=1014,Wn=1015,Yi=1016,ac=1017,oc=1018,vi=1020,lc=1021,je=1023,cc=1024,hc=1025,qn=1026,bi=1027,dc=1028,uc=1029,fc=1030,pc=1031,mc=1033,$s=33776,Zs=33777,Js=33778,Qs=33779,aa=35840,oa=35841,la=35842,ca=35843,gc=36196,ha=37492,da=37496,ua=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,va=37815,Ma=37816,ya=37817,Sa=37818,Ea=37819,ba=37820,wa=37821,tr=36492,_c=36283,Ta=36284,Aa=36285,Ra=36286,Xo=3e3,Yn=3001,xc=3200,vc=3201,qo=0,Mc=1,jn="",At="srgb",on="srgb-linear",Yo="display-p3",er=7680,yc=519,Ca=35044,La="300 es",Ur=1035;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,Fs=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function nr(i,t,e){return(1-e)*i+e*t}function Pa(i){return(i&i-1)===0&&i!==0}function Ec(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,s,r,a,o,h,l){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],c=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],v=s[1],M=s[4],w=s[7],A=s[2],R=s[5],C=s[8];return r[0]=a*_+o*v+h*A,r[3]=a*m+o*M+h*R,r[6]=a*f+o*w+h*C,r[1]=l*_+c*v+u*A,r[4]=l*m+c*M+u*R,r[7]=l*f+c*w+u*C,r[2]=d*_+p*v+g*A,r[5]=d*m+p*M+g*R,r[8]=d*f+p*w+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*o*l-n*r*c+n*o*h+s*r*l-s*a*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=c*a-o*l,d=o*h-c*r,p=l*r-a*h,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-c*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(c*e-s*h)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*h-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ir.makeScale(t,e)),this}rotate(t){return this.premultiply(ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(ir.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new zt;function jo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Da={};function Vi(i){i in Da||(Da[i]=!0,console.warn(i))}function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bc=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),wc=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Tc(i){return i.convertSRGBToLinear().applyMatrix3(wc)}function Ac(i){return i.applyMatrix3(bc).convertLinearToSRGB()}const Rc={[on]:i=>i,[At]:i=>i.convertSRGBToLinear(),[Yo]:Tc},Cc={[on]:i=>i,[At]:i=>i.convertLinearToSRGB(),[Yo]:Ac},He={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return on},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Rc[t],s=Cc[e];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Qn;class Ko{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=ji("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class $o{constructor(t=null){this.isSource=!0,this.uuid=Zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rr(s[a].image)):r.push(rr(s[a]))}else r=rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lc=0;class ye extends Ri{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=Ye,s=Ye,r=Oe,a=qi,o=je,h=Kn,l=ye.DEFAULT_ANISOTROPY,c=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Zi(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Yn?At:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Yn:Xo}set encoding(t){Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?At:jn}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Vo;ye.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,s=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,l=h[0],c=h[4],u=h[8],d=h[1],p=h[5],g=h[9],_=h[2],m=h[6],f=h[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(p+1)/2,A=(f+1)/2,R=(c+d)/4,C=(u+_)/4,F=(g+m)/4;return M>w&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=C/n):w>A?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=F/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=F/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-c)/v,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends Ri{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Vi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?At:jn),this.texture=new ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Oe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zo extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],l=n[s+1],c=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||h!==d||l!==p||c!==g){let m=1-o;const f=h*d+l*p+c*g+u*_,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,f*v);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const w=o*v;if(h=h*m+d*w,l=l*m+p*w,c=c*m+g*w,u=u*m+_*w,m===1-o){const A=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=A,l*=A,c*=A,u*=A}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],h=n[s+1],l=n[s+2],c=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+c*u+h*p-l*d,t[e+1]=h*g+c*d+l*u-o*p,t[e+2]=l*g+c*p+o*d-h*u,t[e+3]=c*g-o*u-h*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),c=o(s/2),u=o(r/2),d=h(n/2),p=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=d*c*u+l*p*g,this._y=l*p*u-d*c*g,this._z=l*c*g+d*p*u,this._w=l*c*u-d*p*g;break;case"YXZ":this._x=d*c*u+l*p*g,this._y=l*p*u-d*c*g,this._z=l*c*g-d*p*u,this._w=l*c*u+d*p*g;break;case"ZXY":this._x=d*c*u-l*p*g,this._y=l*p*u+d*c*g,this._z=l*c*g+d*p*u,this._w=l*c*u-d*p*g;break;case"ZYX":this._x=d*c*u-l*p*g,this._y=l*p*u+d*c*g,this._z=l*c*g-d*p*u,this._w=l*c*u+d*p*g;break;case"YZX":this._x=d*c*u+l*p*g,this._y=l*p*u+d*c*g,this._z=l*c*g-d*p*u,this._w=l*c*u-d*p*g;break;case"XZY":this._x=d*c*u-l*p*g,this._y=l*p*u-d*c*g,this._z=l*c*g+d*p*u,this._w=l*c*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],c=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-h)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(c-h)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=n*c+a*o+s*l-r*h,this._y=s*c+a*h+r*o-n*l,this._z=r*c+a*l+n*h-s*o,this._w=a*c-n*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,o),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=h*e+a*s-o*n,c=h*n+o*e-r*s,u=h*s+r*n-a*e,d=-r*e-a*n-o*s;return this.x=l*h+d*-r+c*-o-u*-a,this.y=c*h+d*-a+u*-r-l*-o,this.z=u*h+d*-o+l*-a-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ar.copy(this).projectOnVector(t),this.sub(ar)}reflect(t){return this.sub(ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new P,Ia=new Ji;class Qi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ti.copy(t.boundingBox),ti.applyMatrix4(t.matrixWorld),this.union(ti);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)cn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(cn)}else s.boundingBox===null&&s.computeBoundingBox(),ti.copy(s.boundingBox),ti.applyMatrix4(t.matrixWorld),this.union(ti)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),rs.subVectors(this.max,Ii),ei.subVectors(t.a,Ii),ni.subVectors(t.b,Ii),ii.subVectors(t.c,Ii),Mn.subVectors(ni,ei),yn.subVectors(ii,ni),Un.subVectors(ei,ii);let e=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Un.y,Un.x,0];return!or(e,ei,ni,ii,rs)||(e=[1,0,0,0,1,0,0,0,1],!or(e,ei,ni,ii,rs))?!1:(as.crossVectors(Mn,yn),e=[as.x,as.y,as.z],or(e,ei,ni,ii,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new P,new P,new P,new P,new P,new P,new P,new P],cn=new P,ti=new Qi,ei=new P,ni=new P,ii=new P,Mn=new P,yn=new P,Un=new P,Ii=new P,rs=new P,as=new P,Nn=new P;function or(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Nn.fromArray(i,r);const o=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),h=t.dot(Nn),l=e.dot(Nn),c=n.dot(Nn);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const Dc=new Qi,Ui=new P,lr=new P;class ts{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(lr)),this.expandByPoint(Ui.copy(t.center).sub(lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new P,cr=new P,os=new P,Sn=new P,hr=new P,ls=new P,dr=new P;class Hr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cr.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(cr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(os),o=Sn.dot(this.direction),h=-Sn.dot(os),l=Sn.lengthSq(),c=Math.abs(1-a*a);let u,d,p,g;if(c>0)if(u=a*h-o,d=a*o-h,g=r*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*h)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*h)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*h)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-h),r),p=-u*u+d*(d+2*h)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-h),r),p=d*(d+2*h)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-h),r),p=-u*u+d*(d+2*h)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cr).addScaledVector(os,d),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){hr.subVectors(e,t),ls.subVectors(n,t),dr.crossVectors(hr,ls);let a=this.direction.dot(dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);const h=o*this.direction.dot(ls.crossVectors(Sn,ls));if(h<0)return null;const l=o*this.direction.dot(hr.cross(Sn));if(l<0||h+l>a)return null;const c=-o*Sn.dot(dr);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,s,r,a,o,h,l,c,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=h,f[2]=l,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*c,p=a*u,g=o*c,_=o*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*h,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*h}else if(t.order==="YXZ"){const d=h*c,p=h*u,g=l*c,_=l*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*h}else if(t.order==="ZXY"){const d=h*c,p=h*u,g=l*c,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*c,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const d=a*c,p=a*u,g=o*c,_=o*u;e[0]=h*c,e[4]=g*l-p,e[8]=d*l+_,e[1]=h*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const d=a*h,p=a*l,g=o*h,_=o*l;e[0]=h*c,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-l*c,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*h,p=a*l,g=o*h,_=o*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=d*u+_,e[5]=a*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ic,t,Uc)}lookAt(t,e,n){const s=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),En.crossVectors(n,Ce),En.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),En.crossVectors(n,Ce)),En.normalize(),cs.crossVectors(Ce,En),s[0]=En.x,s[4]=cs.x,s[8]=Ce.x,s[1]=En.y,s[5]=cs.y,s[9]=Ce.y,s[2]=En.z,s[6]=cs.z,s[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],c=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],M=n[7],w=n[11],A=n[15],R=s[0],C=s[4],F=s[8],x=s[12],E=s[1],B=s[5],G=s[9],U=s[13],z=s[2],W=s[6],S=s[10],I=s[14],N=s[3],V=s[7],K=s[11],ut=s[15];return r[0]=a*R+o*E+h*z+l*N,r[4]=a*C+o*B+h*W+l*V,r[8]=a*F+o*G+h*S+l*K,r[12]=a*x+o*U+h*I+l*ut,r[1]=c*R+u*E+d*z+p*N,r[5]=c*C+u*B+d*W+p*V,r[9]=c*F+u*G+d*S+p*K,r[13]=c*x+u*U+d*I+p*ut,r[2]=g*R+_*E+m*z+f*N,r[6]=g*C+_*B+m*W+f*V,r[10]=g*F+_*G+m*S+f*K,r[14]=g*x+_*U+m*I+f*ut,r[3]=v*R+M*E+w*z+A*N,r[7]=v*C+M*B+w*W+A*V,r[11]=v*F+M*G+w*S+A*K,r[15]=v*x+M*U+w*I+A*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],c=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*h*u-s*l*u-r*o*d+n*l*d+s*o*p-n*h*p)+_*(+e*h*p-e*l*d+r*a*d-s*a*p+s*l*c-r*h*c)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*c-n*l*c)+f*(-s*o*c-e*h*u+e*o*d+s*a*u-n*a*d+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=u*m*l-_*d*l+_*h*p-o*m*p-u*h*f+o*d*f,M=g*d*l-c*m*l-g*h*p+a*m*p+c*h*f-a*d*f,w=c*_*l-g*u*l+g*o*p-a*_*p-c*o*f+a*u*f,A=g*u*h-c*_*h-g*o*d+a*_*d+c*o*m-a*u*m,R=e*v+n*M+s*w+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=v*C,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*C,t[2]=(o*m*r-_*h*r+_*s*l-n*m*l-o*s*f+n*h*f)*C,t[3]=(u*h*r-o*d*r-u*s*l+n*d*l+o*s*p-n*h*p)*C,t[4]=M*C,t[5]=(c*m*r-g*d*r+g*s*p-e*m*p-c*s*f+e*d*f)*C,t[6]=(g*h*r-a*m*r-g*s*l+e*m*l+a*s*f-e*h*f)*C,t[7]=(a*d*r-c*h*r+c*s*l-e*d*l-a*s*p+e*h*p)*C,t[8]=w*C,t[9]=(g*u*r-c*_*r-g*n*p+e*_*p+c*n*f-e*u*f)*C,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*C,t[11]=(c*o*r-a*u*r-c*n*l+e*u*l+a*n*p-e*o*p)*C,t[12]=A*C,t[13]=(c*_*s-g*u*s+g*n*d-e*_*d-c*n*m+e*u*m)*C,t[14]=(g*o*s-a*_*s-g*n*h+e*_*h+a*n*m-e*o*m)*C,t[15]=(a*u*s-c*o*s+c*n*h-e*u*h-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,l=r*a,c=r*o;return this.set(l*a+n,l*o-s*h,l*h+s*o,0,l*o+s*h,c*o+n,c*h-s*a,0,l*h-s*o,c*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,c=a+a,u=o+o,d=r*l,p=r*c,g=r*u,_=a*c,m=a*u,f=o*u,v=h*l,M=h*c,w=h*u,A=n.x,R=n.y,C=n.z;return s[0]=(1-(_+f))*A,s[1]=(p+w)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(d+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+M)*C,s[9]=(m-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const a=si.set(s[4],s[5],s[6]).length(),o=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);const l=1/r,c=1/a,u=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=c,Ve.elements[5]*=c,Ve.elements[6]*=c,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a){const o=this.elements,h=2*r/(e-t),l=2*r/(n-s),c=(e+t)/(e-t),u=(n+s)/(n-s),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=h,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,r,a){const o=this.elements,h=1/(e-t),l=1/(n-s),c=1/(a-r),u=(e+t)*h,d=(n+s)*l,p=(a+r)*c;return o[0]=2*h,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new P,Ve=new $t,Ic=new P(0,0,0),Uc=new P(1,1,1),En=new P,cs=new P,Ce=new P,Ua=new $t,Na=new Ji;class Gs{constructor(t=0,e=0,n=0,s=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],c=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nc=0;const Fa=new P,ri=new Ji,dn=new $t,hs=new P,Ni=new P,Fc=new P,Oc=new Ji,Oa=new P(1,0,0),za=new P(0,1,0),ka=new P(0,0,1),zc={type:"added"},Ba={type:"removed"};class te extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DEFAULT_UP.clone();const t=new P,e=new Gs,n=new Ji,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new zt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(za,t)}rotateZ(t){return this.rotateOnAxis(ka,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(za,t)}translateZ(t){return this.translateOnAxis(ka,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ni,hs,this.up):dn.lookAt(hs,Ni,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(dn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ba)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ba)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Oc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}te.DEFAULT_UP=new P(0,1,0);te.DEFAULT_MATRIX_AUTO_UPDATE=!0;te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new P,un=new P,ur=new P,fn=new P,ai=new P,oi=new P,Ga=new P,fr=new P,pr=new P,mr=new P;let ds=!1;class ze{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),un.subVectors(n,e),ur.subVectors(t,e);const a=We.dot(We),o=We.dot(un),h=We.dot(ur),l=un.dot(un),c=un.dot(ur),u=a*l-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(l*h-o*c)*d,g=(a*c-o*h)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(t,e,n,s,r,a,o,h){return ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ds=!0),this.getInterpolation(t,e,n,s,r,a,o,h)}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,fn),h.setScalar(0),h.addScaledVector(r,fn.x),h.addScaledVector(a,fn.y),h.addScaledVector(o,fn.z),h}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),un.subVectors(t,e),We.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),un.subVectors(this.a,this.b),We.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ds=!0),ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ai.subVectors(s,n),oi.subVectors(r,n),fr.subVectors(t,n);const h=ai.dot(fr),l=oi.dot(fr);if(h<=0&&l<=0)return e.copy(n);pr.subVectors(t,s);const c=ai.dot(pr),u=oi.dot(pr);if(c>=0&&u<=c)return e.copy(s);const d=h*u-c*l;if(d<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(n).addScaledVector(ai,a);mr.subVectors(t,r);const p=ai.dot(mr),g=oi.dot(mr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-h*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(oi,o);const m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Ga.subVectors(r,s),o=(u-c)/(u-c+(p-g)),e.copy(s).addScaledVector(Ga,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let kc=0;class Jn extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=xi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={h:0,s:0,l:0},us={h:0,s:0,l:0};function gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=At){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=He.workingColorSpace){return this.r=t,this.g=e,this.b=n,He.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=He.workingColorSpace){if(t=Sc(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gr(a,r,t+1/3),this.g=gr(a,r,t),this.b=gr(a,r,t-1/3)}return He.toWorkingColorSpace(this,s),this}setStyle(t,e=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=At){const n=Qo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=At){return He.fromWorkingColorSpace(_e.copy(this),t),Math.round(we(_e.r*255,0,255))*65536+Math.round(we(_e.g*255,0,255))*256+Math.round(we(_e.b*255,0,255))}getHexString(t=At){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,s=_e.g,r=_e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let h,l;const c=(o+a)/2;if(o===a)h=0,l=0;else{const u=a-o;switch(l=c<=.5?u/(a+o):u/(2-a-o),a){case n:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-n)/u+2;break;case r:h=(n-s)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=He.workingColorSpace){return He.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=At){He.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,s=_e.b;return t!==At?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xe),Xe.h+=t,Xe.s+=e,Xe.l+=n,this.setHSL(Xe.h,Xe.s,Xe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xe),t.getHSL(us);const n=nr(Xe.h,us.h,e),s=nr(Xe.s,us.s,e),r=nr(Xe.l,us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new It;It.NAMES=Qo;class Ln extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ne=new P,fs=new Gt;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix3(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix4(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyNormalMatrix(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.transformDirection(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tl extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class el extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bc=0;const Fe=new $t,_r=new te,li=new P,Le=new Qi,Fi=new Qi,de=new P;class Se extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jo(t)?el:tl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return _r.lookAt(t),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Le.min,Fi.min),Le.expandByPoint(de),de.addVectors(Le.max,Fi.max),Le.expandByPoint(de)):(Le.expandByPoint(Fi.min),Le.expandByPoint(Fi.max))}Le.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)de.fromBufferAttribute(o,l),h&&(li.fromBufferAttribute(t,l),de.add(li)),s=Math.max(s,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let E=0;E<o;E++)l[E]=new P,c[E]=new P;const u=new P,d=new P,p=new P,g=new Gt,_=new Gt,m=new Gt,f=new P,v=new P;function M(E,B,G){u.fromArray(s,E*3),d.fromArray(s,B*3),p.fromArray(s,G*3),g.fromArray(a,E*2),_.fromArray(a,B*2),m.fromArray(a,G*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(U),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(U),l[E].add(f),l[B].add(f),l[G].add(f),c[E].add(v),c[B].add(v),c[G].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,B=w.length;E<B;++E){const G=w[E],U=G.start,z=G.count;for(let W=U,S=U+z;W<S;W+=3)M(n[W+0],n[W+1],n[W+2])}const A=new P,R=new P,C=new P,F=new P;function x(E){C.fromArray(r,E*3),F.copy(C);const B=l[E];A.copy(B),A.sub(C.multiplyScalar(C.dot(B))).normalize(),R.crossVectors(F,B);const U=R.dot(c[E])<0?-1:1;h[E*4]=A.x,h[E*4+1]=A.y,h[E*4+2]=A.z,h[E*4+3]=U}for(let E=0,B=w.length;E<B;++E){const G=w[E],U=G.start,z=G.count;for(let W=U,S=U+z;W<S;W+=3)x(n[W+0]),x(n[W+1]),x(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,h=new P,l=new P,c=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(c),h.add(c),l.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,u=o.normalized,d=new l.constructor(h.length*c);let p=0,g=0;for(let _=0,m=h.length;_<m;_++){o.isInterleavedBufferAttribute?p=h[_]*o.data.stride+o.offset:p=h[_]*c;for(let f=0;f<c;f++)d[g++]=l[p++]}return new $e(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const o in s){const h=s[o],l=t(h,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const h=[],l=r[o];for(let c=0,u=l.length;c<u;c++){const d=l[c],p=t(d,n);h.push(p)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];c.push(p.toJSON(t.data))}c.length>0&&(s[h]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new $t,tn=new Hr,ps=new ts,Va=new P,ci=new P,hi=new P,di=new P,xr=new P,ms=new P,gs=new Gt,_s=new Gt,xs=new Gt,Wa=new P,Xa=new P,qa=new P,vs=new P,Ms=new P;class Et extends te{constructor(t=new Se,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=o[h],u=r[h];c!==0&&(xr.fromBufferAttribute(u,t),a?ms.addScaledVector(xr,c):ms.addScaledVector(xr.sub(e),c))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),tn.copy(t.ray).recast(t.near),!(ps.containsPoint(tn.origin)===!1&&(tn.intersectSphere(ps,Va)===null||tn.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(Ha.copy(r).invert(),tn.copy(t.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let n;const s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,h=s.attributes.uv,l=s.attributes.uv1,c=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=u.length;p<g;p++){const _=u[p],m=r[_.materialIndex],f=Math.max(_.start,d.start),v=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let M=f,w=v;M<w;M+=3){const A=a.getX(M),R=a.getX(M+1),C=a.getX(M+2);n=ys(this,m,t,tn,h,l,c,A,R,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);n=ys(this,r,t,tn,h,l,c,f,v,M),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,g=u.length;p<g;p++){const _=u[p],m=r[_.materialIndex],f=Math.max(_.start,d.start),v=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let M=f,w=v;M<w;M+=3){const A=M,R=M+1,C=M+2;n=ys(this,m,t,tn,h,l,c,A,R,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=_,v=_+1,M=_+2;n=ys(this,r,t,tn,h,l,c,f,v,M),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}}}function Gc(i,t,e,n,s,r,a,o){let h;if(t.side===Te?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Cn,o),h===null)return null;Ms.copy(o),Ms.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ms);return l<e.near||l>e.far?null:{distance:l,point:Ms.clone(),object:i}}function ys(i,t,e,n,s,r,a,o,h,l){i.getVertexPosition(o,ci),i.getVertexPosition(h,hi),i.getVertexPosition(l,di);const c=Gc(i,t,e,n,ci,hi,di,vs);if(c){s&&(gs.fromBufferAttribute(s,o),_s.fromBufferAttribute(s,h),xs.fromBufferAttribute(s,l),c.uv=ze.getInterpolation(vs,ci,hi,di,gs,_s,xs,new Gt)),r&&(gs.fromBufferAttribute(r,o),_s.fromBufferAttribute(r,h),xs.fromBufferAttribute(r,l),c.uv1=ze.getInterpolation(vs,ci,hi,di,gs,_s,xs,new Gt),c.uv2=c.uv1),a&&(Wa.fromBufferAttribute(a,o),Xa.fromBufferAttribute(a,h),qa.fromBufferAttribute(a,l),c.normal=ze.getInterpolation(vs,ci,hi,di,Wa,Xa,qa,new P),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:h,c:l,normal:new P,materialIndex:0};ze.getNormal(ci,hi,di,u.normal),c.face=u}return c}class Ue extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],l=[],c=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,f,v,M,w,A,R,C,F,x){const E=w/C,B=A/F,G=w/2,U=A/2,z=R/2,W=C+1,S=F+1;let I=0,N=0;const V=new P;for(let K=0;K<S;K++){const ut=K*B-U;for(let J=0;J<W;J++){const k=J*E-G;V[_]=k*v,V[m]=ut*M,V[f]=z,l.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[f]=R>0?1:-1,c.push(V.x,V.y,V.z),u.push(J/C),u.push(1-K/F),I+=1}}for(let K=0;K<F;K++)for(let ut=0;ut<C;ut++){const J=d+ut+W*K,k=d+ut+W*(K+1),j=d+(ut+1)+W*(K+1),it=d+(ut+1)+W*K;h.push(J,k,it),h.push(k,j,it),N+=6}o.addGroup(p,N,x),p+=N,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=wi(i[e]);for(const s in n)t[s]=n[s]}return t}function Hc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nl(i){return i.getRenderTarget()===null?i.outputColorSpace:on}const Vc={clone:wi,merge:Me};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class il extends te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fe extends il{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/l,s*=a.width/h,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,fi=1;class qc extends te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new fe(ui,fi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new fe(ui,fi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new fe(ui,fi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new fe(ui,fi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const h=new fe(ui,fi,t,e);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const l=new fe(ui,fi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,h,l]=this.children,c=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=mn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,h),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(c),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class sl extends ye{constructor(t,e,n,s,r,a,o,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,s,r,a,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yc extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Vi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?At:jn),this.texture=new sl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ue(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Rn});r.uniforms.tEquirect.value=e;const a=new Et(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=Oe),new qc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const vr=new P,jc=new P,Kc=new zt;class Bn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=vr.subVectors(n,e).cross(jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kc.getNormalMatrix(t),s=this.coplanarPoint(vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new ts,Ss=new P;class Vr{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,s=n[0],r=n[1],a=n[2],o=n[3],h=n[4],l=n[5],c=n[6],u=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],v=n[14],M=n[15];return e[0].setComponents(o-s,u-h,_-d,M-m).normalize(),e[1].setComponents(o+s,u+h,_+d,M+m).normalize(),e[2].setComponents(o+r,u+l,_+p,M+f).normalize(),e[3].setComponents(o-r,u-l,_-p,M-f).normalize(),e[4].setComponents(o-a,u-c,_-g,M-v).normalize(),e[5].setComponents(o+a,u+c,_+g,M+v).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ss.x=s.normal.x>0?t.max.x:t.min.x,Ss.y=s.normal.y>0?t.max.y:t.min.y,Ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $c(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,c){const u=l.array,d=l.usage,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,u){const d=c.array,p=c.updateRange;i.bindBuffer(u,l),p.count===-1?i.bufferSubData(u,0,d):(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(i.deleteBuffer(c.buffer),n.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,s(l,c)):u.version<l.version&&(r(u.buffer,l,c),u.version=l.version)}return{get:a,remove:o,update:h}}class xn extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),l=o+1,c=h+1,u=t/o,d=e/h,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){const v=f*d-a;for(let M=0;M<l;M++){const w=M*u-r;g.push(w,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let v=0;v<o;v++){const M=v+l*f,w=v+l*(f+1),A=v+1+l*(f+1),R=v+1+l*f;p.push(M,w,R),p.push(w,A,R)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ih="vec3 transformed = vec3( position );",sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_h=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Gh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,td=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ld=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ru=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,au=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,du=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_u=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Su=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:Zc,alphamap_pars_fragment:Jc,alphatest_fragment:Qc,alphatest_pars_fragment:th,aomap_fragment:eh,aomap_pars_fragment:nh,begin_vertex:ih,beginnormal_vertex:sh,bsdfs:rh,iridescence_fragment:ah,bumpmap_pars_fragment:oh,clipping_planes_fragment:lh,clipping_planes_pars_fragment:ch,clipping_planes_pars_vertex:hh,clipping_planes_vertex:dh,color_fragment:uh,color_pars_fragment:fh,color_pars_vertex:ph,color_vertex:mh,common:gh,cube_uv_reflection_fragment:_h,defaultnormal_vertex:xh,displacementmap_pars_vertex:vh,displacementmap_vertex:Mh,emissivemap_fragment:yh,emissivemap_pars_fragment:Sh,encodings_fragment:Eh,encodings_pars_fragment:bh,envmap_fragment:wh,envmap_common_pars_fragment:Th,envmap_pars_fragment:Ah,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:Bh,envmap_vertex:Ch,fog_vertex:Lh,fog_pars_vertex:Ph,fog_fragment:Dh,fog_pars_fragment:Ih,gradientmap_pars_fragment:Uh,lightmap_fragment:Nh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Oh,lights_lambert_pars_fragment:zh,lights_pars_begin:kh,lights_toon_fragment:Gh,lights_toon_pars_fragment:Hh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:qh,lights_fragment_begin:Yh,lights_fragment_maps:jh,lights_fragment_end:Kh,logdepthbuf_fragment:$h,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:Jh,logdepthbuf_vertex:Qh,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphcolor_vertex:ad,morphnormal_vertex:od,morphtarget_pars_vertex:ld,morphtarget_vertex:cd,normal_fragment_begin:hd,normal_fragment_maps:dd,normal_pars_fragment:ud,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:xd,iridescence_pars_fragment:vd,output_fragment:Md,packing:yd,premultiplied_alpha_fragment:Sd,project_vertex:Ed,dithering_fragment:bd,dithering_pars_fragment:wd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Pd,skinbase_vertex:Dd,skinning_pars_vertex:Id,skinning_vertex:Ud,skinnormal_vertex:Nd,specularmap_fragment:Fd,specularmap_pars_fragment:Od,tonemapping_fragment:zd,tonemapping_pars_fragment:kd,transmission_fragment:Bd,transmission_pars_fragment:Gd,uv_pars_fragment:Hd,uv_pars_vertex:Vd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:qd,background_frag:Yd,backgroundCube_vert:jd,backgroundCube_frag:Kd,cube_vert:$d,cube_frag:Zd,depth_vert:Jd,depth_frag:Qd,distanceRGBA_vert:tu,distanceRGBA_frag:eu,equirect_vert:nu,equirect_frag:iu,linedashed_vert:su,linedashed_frag:ru,meshbasic_vert:au,meshbasic_frag:ou,meshlambert_vert:lu,meshlambert_frag:cu,meshmatcap_vert:hu,meshmatcap_frag:du,meshnormal_vert:uu,meshnormal_frag:fu,meshphong_vert:pu,meshphong_frag:mu,meshphysical_vert:gu,meshphysical_frag:_u,meshtoon_vert:xu,meshtoon_frag:vu,points_vert:Mu,points_frag:yu,shadow_vert:Su,shadow_frag:Eu,sprite_vert:bu,sprite_frag:wu},ot={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}}},rn={basic:{uniforms:Me([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Me([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Me([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Me([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Me([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Me([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Me([ot.points,ot.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Me([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Me([ot.common,ot.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Me([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Me([ot.sprite,ot.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Me([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Me([ot.lights,ot.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};rn.physical={uniforms:Me([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Es={r:0,b:0,g:0};function Tu(i,t,e,n,s,r,a){const o=new It(0);let h=r===!0?0:1,l,c,u=null,d=0,p=null;function g(m,f){let v=!1,M=f.isScene===!0?f.background:null;switch(M&&M.isTexture&&(M=(f.backgroundBlurriness>0?e:t).get(M)),M===null?_(o,h):M&&M.isColor&&(_(M,1),v=!0),i.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),v=!0;break}(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Bs)?(c===void 0&&(c=new Et(new Ue(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:wi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=M.colorSpace!==At,(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Et(new xn(2,2),new Zn({name:"BackgroundMaterial",uniforms:wi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=M.colorSpace!==At,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Es,nl(i)),n.buffers.color.setClear(Es.r,Es.g,Es.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),h=f,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:g}}function Au(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},h=m(null);let l=h,c=!1;function u(z,W,S,I,N){let V=!1;if(a){const K=_(I,S,W);l!==K&&(l=K,p(l.object)),V=f(z,I,S,N),V&&v(z,I,S,N)}else{const K=W.wireframe===!0;(l.geometry!==I.id||l.program!==S.id||l.wireframe!==K)&&(l.geometry=I.id,l.program=S.id,l.wireframe=K,V=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||c)&&(c=!1,F(z,W,S,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(z){return n.isWebGL2?i.bindVertexArray(z):r.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?i.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function _(z,W,S){const I=S.wireframe===!0;let N=o[z.id];N===void 0&&(N={},o[z.id]=N);let V=N[W.id];V===void 0&&(V={},N[W.id]=V);let K=V[I];return K===void 0&&(K=m(d()),V[I]=K),K}function m(z){const W=[],S=[],I=[];for(let N=0;N<s;N++)W[N]=0,S[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:S,attributeDivisors:I,object:z,attributes:{},index:null}}function f(z,W,S,I){const N=l.attributes,V=W.attributes;let K=0;const ut=S.getAttributes();for(const J in ut)if(ut[J].location>=0){const j=N[J];let it=V[J];if(it===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(it=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(it=z.instanceColor)),j===void 0||j.attribute!==it||it&&j.data!==it.data)return!0;K++}return l.attributesNum!==K||l.index!==I}function v(z,W,S,I){const N={},V=W.attributes;let K=0;const ut=S.getAttributes();for(const J in ut)if(ut[J].location>=0){let j=V[J];j===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(j=z.instanceColor));const it={};it.attribute=j,j&&j.data&&(it.data=j.data),N[J]=it,K++}l.attributes=N,l.attributesNum=K,l.index=I}function M(){const z=l.newAttributes;for(let W=0,S=z.length;W<S;W++)z[W]=0}function w(z){A(z,0)}function A(z,W){const S=l.newAttributes,I=l.enabledAttributes,N=l.attributeDivisors;S[z]=1,I[z]===0&&(i.enableVertexAttribArray(z),I[z]=1),N[z]!==W&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),N[z]=W)}function R(){const z=l.newAttributes,W=l.enabledAttributes;for(let S=0,I=W.length;S<I;S++)W[S]!==z[S]&&(i.disableVertexAttribArray(S),W[S]=0)}function C(z,W,S,I,N,V){n.isWebGL2===!0&&(S===i.INT||S===i.UNSIGNED_INT)?i.vertexAttribIPointer(z,W,S,N,V):i.vertexAttribPointer(z,W,S,I,N,V)}function F(z,W,S,I){if(n.isWebGL2===!1&&(z.isInstancedMesh||I.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const N=I.attributes,V=S.getAttributes(),K=W.defaultAttributeValues;for(const ut in V){const J=V[ut];if(J.location>=0){let k=N[ut];if(k===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(k=z.instanceColor)),k!==void 0){const j=k.normalized,it=k.itemSize,at=e.get(k);if(at===void 0)continue;const L=at.buffer,bt=at.type,xt=at.bytesPerElement;if(k.isInterleavedBufferAttribute){const rt=k.data,wt=rt.stride,Ht=k.offset;if(rt.isInstancedInterleavedBuffer){for(let _t=0;_t<J.locationSize;_t++)A(J.location+_t,rt.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let _t=0;_t<J.locationSize;_t++)w(J.location+_t);i.bindBuffer(i.ARRAY_BUFFER,L);for(let _t=0;_t<J.locationSize;_t++)C(J.location+_t,it/J.locationSize,bt,j,wt*xt,(Ht+it/J.locationSize*_t)*xt)}else{if(k.isInstancedBufferAttribute){for(let rt=0;rt<J.locationSize;rt++)A(J.location+rt,k.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let rt=0;rt<J.locationSize;rt++)w(J.location+rt);i.bindBuffer(i.ARRAY_BUFFER,L);for(let rt=0;rt<J.locationSize;rt++)C(J.location+rt,it/J.locationSize,bt,j,it*xt,it/J.locationSize*rt*xt)}}else if(K!==void 0){const j=K[ut];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(J.location,j);break;case 3:i.vertexAttrib3fv(J.location,j);break;case 4:i.vertexAttrib4fv(J.location,j);break;default:i.vertexAttrib1fv(J.location,j)}}}}R()}function x(){G();for(const z in o){const W=o[z];for(const S in W){const I=W[S];for(const N in I)g(I[N].object),delete I[N];delete W[S]}delete o[z]}}function E(z){if(o[z.id]===void 0)return;const W=o[z.id];for(const S in W){const I=W[S];for(const N in I)g(I[N].object),delete I[N];delete W[S]}delete o[z.id]}function B(z){for(const W in o){const S=o[W];if(S[z.id]===void 0)continue;const I=S[z.id];for(const N in I)g(I[N].object),delete I[N];delete S[z.id]}}function G(){U(),c=!0,l!==h&&(l=h,p(l.object))}function U(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:G,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:w,disableUnusedAttributes:R}}function Ru(i,t,e,n){const s=n.isWebGL2;let r;function a(l){r=l}function o(l,c){i.drawArrays(r,l,c),e.update(c,r,1)}function h(l,c,u){if(u===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,c,u),e.update(c,r,u)}this.setMode=a,this.render=o,this.renderInstances=h}function Cu(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const h=r(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const l=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,w=a||t.has("OES_texture_float"),A=M&&w,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:R}}function Lu(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bn,o=new zt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):l();else{const v=r?0:n,M=v*4;let w=f.clippingState||null;h.value=w,w=c(g,d,M,p);for(let A=0;A!==M;++A)w[A]=e[A];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,w=p;M!==_;++M,w+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(m,w),m[w+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Pu(i){let t=new WeakMap;function e(a,o){return o===Pr?a.mapping=Si:o===Dr&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Pr||o===Dr)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new Yc(h.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class al extends il{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,Ya=[.125,.215,.35,.446,.526,.582],Hn=20,Mr=new al,ja=new It;let yr=null;const Gn=(1+Math.sqrt(5))/2,pi=1/Gn,Ka=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Gn,pi),new P(0,Gn,-pi),new P(pi,0,Gn),new P(-pi,0,Gn),new P(Gn,pi,0),new P(-Gn,pi,0)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yr),t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Yi,format:je,colorSpace:on,depthBuffer:!1},s=Za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Du(r)),this._blurMaterial=Iu(r,t,e)}return s}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,s){const o=new fe(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(ja),c.toneMapping=mn,c.autoClear=!1;const p=new Ln({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Et(new Ue,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ja),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,h[f],0),o.lookAt(l[f],0,0)):v===1?(o.up.set(0,0,h[f]),o.lookAt(0,l[f],0)):(o.up.set(0,h[f],0),o.lookAt(0,0,l[f]));const M=this._cubeSize;bs(s,v*M,f>2?M:0,M,M),c.setRenderTarget(s),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Si||t.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ja());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const h=this._cubeSize;bs(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Mr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ka[(s-1)%Ka.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Et(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Hn;m>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const f=[];let v=0;for(let C=0;C<Hn;++C){const F=C/_,x=Math.exp(-F*F/2);f.push(x),C===0?v+=x:C<m&&(v+=2*x)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const w=this._sizeLods[s],A=3*w*(s>M-_i?s-M+_i:0),R=4*(this._cubeSize-w);bs(e,A,R,3*w,2*w),h.setRenderTarget(e),h.render(u,Mr)}}function Du(i){const t=[],e=[],n=[];let s=i;const r=i-_i+1+Ya.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let h=1/o;a>i-_i?h=Ya[a-i+_i-1]:a===0&&(h=0),n.push(h);const l=1/(o-2),c=-l,u=1+l,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,F=R>2?0:-1,x=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];v.set(x,_*g*R),M.set(d,m*g*R);const E=[R,R,R,R,R,R];w.set(E,f*g*R)}const A=new Se;A.setAttribute("position",new $e(v,_)),A.setAttribute("uv",new $e(M,m)),A.setAttribute("faceIndex",new $e(w,f)),t.push(A),s>_i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Za(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Iu(i,t,e){const n=new Float32Array(Hn),s=new P(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ja(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Qa(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,l=h===Pr||h===Dr,c=h===Si||h===Ei;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new $a(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||c&&u&&s(u)){e===null&&(e=new $a(i));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let h=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&h++;return h===l}function r(o){const h=o.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fu(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function h(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,w=v.length;M<w;M+=3){const A=v[M+0],R=v[M+1],C=v[M+2];d.push(A,R,R,C,C,A)}}else{const v=g.array;_=g.version;for(let M=0,w=v.length/3-1;M<w;M+=3){const A=M+0,R=M+1,C=M+2;d.push(A,R,R,C,C,A)}}const m=new(jo(d)?el:tl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function c(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:h,getWireframeAttribute:c}}function Ou(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,h;function l(d){o=d.type,h=d.bytesPerElement}function c(d,p){i.drawElements(r,p,o,d*h),e.update(p,r,1)}function u(d,p,g){if(g===0)return;let _,m;if(s)_=i,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,o,d*h,g),e.update(p,r,g)}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=u}function zu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ku(i,t){return i[0]-t[0]}function Bu(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Gu(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new jt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function h(l,c,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(c);if(m===void 0||m.count!==_){let W=function(){U.dispose(),r.delete(c),c.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],F=c.morphAttributes.color||[];let x=0;M===!0&&(x=1),w===!0&&(x=2),A===!0&&(x=3);let E=c.attributes.position.count*x,B=1;E>t.maxTextureSize&&(B=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const G=new Float32Array(E*B*4*_),U=new Zo(G,E,B,_);U.type=Wn,U.needsUpdate=!0;const z=x*4;for(let S=0;S<_;S++){const I=R[S],N=C[S],V=F[S],K=E*B*4*S;for(let ut=0;ut<I.count;ut++){const J=ut*z;M===!0&&(a.fromBufferAttribute(I,ut),G[K+J+0]=a.x,G[K+J+1]=a.y,G[K+J+2]=a.z,G[K+J+3]=0),w===!0&&(a.fromBufferAttribute(N,ut),G[K+J+4]=a.x,G[K+J+5]=a.y,G[K+J+6]=a.z,G[K+J+7]=0),A===!0&&(a.fromBufferAttribute(V,ut),G[K+J+8]=a.x,G[K+J+9]=a.y,G[K+J+10]=a.z,G[K+J+11]=V.itemSize===4?a.w:1)}}m={count:_,texture:U,size:new Gt(E,B)},r.set(c,m),c.addEventListener("dispose",W)}let f=0;for(let M=0;M<d.length;M++)f+=d[M];const v=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[c.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[c.id]=_}for(let w=0;w<g;w++){const A=_[w];A[0]=w,A[1]=d[w]}_.sort(Bu);for(let w=0;w<8;w++)w<g&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(ku);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const A=o[w],R=A[0],C=A[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+w)!==m[R]&&c.setAttribute("morphTarget"+w,m[R]),f&&c.getAttribute("morphNormal"+w)!==f[R]&&c.setAttribute("morphNormal"+w,f[R]),s[w]=C,v+=C):(m&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),f&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),s[w]=0)}const M=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function Hu(i,t,e,n){let s=new WeakMap;function r(h){const l=n.render.frame,c=h.geometry,u=t.get(h,c);return s.get(u)!==l&&(t.update(u),s.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER)),u}function a(){s=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const ol=new ye,ll=new Zo,cl=new Pc,hl=new sl,to=[],eo=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function Ci(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=to[s];if(r===void 0&&(r=new Float32Array(s),to[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hs(i,t){let e=eo[t];e===void 0&&(e=new Int32Array(t),eo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function Yu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;so.set(n),i.uniformMatrix2fv(this.addr,!1,so),oe(e,n)}}function ju(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;io.set(n),i.uniformMatrix3fv(this.addr,!1,io),oe(e,n)}}function Ku(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;no.set(n),i.uniformMatrix4fv(this.addr,!1,no),oe(e,n)}}function $u(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function Qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||ol,s)}function af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cl,s)}function of(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hl,s)}function lf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ll,s)}function cf(i){switch(i){case 5126:return Vu;case 35664:return Wu;case 35665:return Xu;case 35666:return qu;case 35674:return Yu;case 35675:return ju;case 35676:return Ku;case 5124:case 35670:return $u;case 35667:case 35671:return Zu;case 35668:case 35672:return Ju;case 35669:case 35673:return Qu;case 5125:return tf;case 36294:return ef;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function hf(i,t){i.uniform1fv(this.addr,t)}function df(i,t){const e=Ci(t,this.size,2);i.uniform2fv(this.addr,e)}function uf(i,t){const e=Ci(t,this.size,3);i.uniform3fv(this.addr,e)}function ff(i,t){const e=Ci(t,this.size,4);i.uniform4fv(this.addr,e)}function pf(i,t){const e=Ci(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mf(i,t){const e=Ci(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gf(i,t){const e=Ci(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _f(i,t){i.uniform1iv(this.addr,t)}function xf(i,t){i.uniform2iv(this.addr,t)}function vf(i,t){i.uniform3iv(this.addr,t)}function Mf(i,t){i.uniform4iv(this.addr,t)}function yf(i,t){i.uniform1uiv(this.addr,t)}function Sf(i,t){i.uniform2uiv(this.addr,t)}function Ef(i,t){i.uniform3uiv(this.addr,t)}function bf(i,t){i.uniform4uiv(this.addr,t)}function wf(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ol,r[a])}function Tf(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cl,r[a])}function Af(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hl,r[a])}function Rf(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ll,r[a])}function Cf(i){switch(i){case 5126:return hf;case 35664:return df;case 35665:return uf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return xf;case 35668:case 35672:return vf;case 35669:case 35673:return Mf;case 5125:return yf;case 36294:return Sf;case 36295:return Ef;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}class Lf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=cf(e.type)}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Cf(e.type)}}class Df{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function ro(i,t){i.seq.push(t),i.map[t.id]=t}function If(i,t,e){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){ro(e,l===void 0?new Lf(o,i,t):new Pf(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Df(o),ro(e,u)),e=u}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);If(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ao(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Uf=0;function Nf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ff(i){switch(i){case on:return["Linear","( value )"];case At:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function oo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Nf(i.getShaderSource(t),a)}else return s}function Of(i,t){const e=Ff(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function zf(i,t){let e;switch(t){case Zl:e="Linear";break;case Jl:e="Reinhard";break;case Ql:e="OptimizedCineon";break;case tc:e="ACESFilmic";break;case ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function Bf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hi(i){return i!==""}function lo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function co(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nr(i){return i.replace(Hf,Vf)}function Vf(i,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Nr(e)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(i){return i.replace(Wf,Xf)}function Xf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uo(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Ei:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Kf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gr:t="ENVMAP_BLENDING_MULTIPLY";break;case Kl:t="ENVMAP_BLENDING_MIX";break;case $l:t="ENVMAP_BLENDING_ADD";break}return t}function $f(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=qf(e),l=Yf(e),c=jf(e),u=Kf(e),d=$f(e),p=e.isWebGL2?"":kf(e),g=Bf(r),_=s.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Hi).join(`
`),f.length>0&&(f+=`
`)):(m=[uo(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),f=[p,uo(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==mn?zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.encodings_pars_fragment,Of("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Nr(a),a=lo(a,e),a=co(a,e),o=Nr(o),o=lo(o,e),o=co(o,e),a=ho(a),o=ho(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+a,w=v+f+o,A=ao(s,s.VERTEX_SHADER,M),R=ao(s,s.FRAGMENT_SHADER,w);if(s.attachShader(_,A),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),i.debug.checkShaderErrors){const x=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(R).trim();let G=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,R);else{const z=oo(s,A,"vertex"),W=oo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+z+`
`+W)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||B==="")&&(U=!1);U&&(this.diagnostics={runnable:G,programLog:x,vertexShader:{log:E,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(A),s.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new Us(s,_)),C};let F;return this.getAttributes=function(){return F===void 0&&(F=Gf(s,_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=Uf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tp(t),e.set(t,n)),n}}class tp{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function ep(i,t,e,n,s,r,a){const o=new Jo,h=new Qf,l=[],c=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,E,B,G,U){const z=G.fog,W=U.geometry,S=x.isMeshStandardMaterial?G.environment:null,I=(x.isMeshStandardMaterial?e:t).get(x.envMap||S),N=I&&I.mapping===Bs?I.image.height:null,V=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=K!==void 0?K.length:0;let J=0;W.morphAttributes.position!==void 0&&(J=1),W.morphAttributes.normal!==void 0&&(J=2),W.morphAttributes.color!==void 0&&(J=3);let k,j,it,at;if(V){const qt=rn[V];k=qt.vertexShader,j=qt.fragmentShader}else k=x.vertexShader,j=x.fragmentShader,h.update(x),it=h.getVertexShaderID(x),at=h.getFragmentShaderID(x);const L=i.getRenderTarget(),bt=U.isInstancedMesh===!0,xt=!!x.map,rt=!!x.matcap,wt=!!I,Ht=!!x.aoMap,_t=!!x.lightMap,Ft=!!x.bumpMap,le=!!x.normalMap,pe=!!x.displacementMap,ce=!!x.emissiveMap,se=!!x.metalnessMap,Vt=!!x.roughnessMap,Kt=x.clearcoat>0,Ee=x.iridescence>0,T=x.sheen>0,y=x.transmission>0,X=Kt&&!!x.clearcoatMap,et=Kt&&!!x.clearcoatNormalMap,nt=Kt&&!!x.clearcoatRoughnessMap,lt=Ee&&!!x.iridescenceMap,Tt=Ee&&!!x.iridescenceThicknessMap,dt=T&&!!x.sheenColorMap,$=T&&!!x.sheenRoughnessMap,mt=!!x.specularMap,vt=!!x.specularColorMap,yt=!!x.specularIntensityMap,ht=y&&!!x.transmissionMap,gt=y&&!!x.thicknessMap,kt=!!x.gradientMap,Wt=!!x.alphaMap,Zt=x.alphaTest>0,D=!!x.extensions,q=!!W.attributes.uv1,tt=!!W.attributes.uv2,ct=!!W.attributes.uv3;return{isWebGL2:c,shaderID:V,shaderName:x.type,vertexShader:k,fragmentShader:j,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:at,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:bt,instancingColor:bt&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:on,map:xt,matcap:rt,envMap:wt,envMapMode:wt&&I.mapping,envMapCubeUVHeight:N,aoMap:Ht,lightMap:_t,bumpMap:Ft,normalMap:le,displacementMap:d&&pe,emissiveMap:ce,normalMapObjectSpace:le&&x.normalMapType===Mc,normalMapTangentSpace:le&&x.normalMapType===qo,metalnessMap:se,roughnessMap:Vt,clearcoat:Kt,clearcoatMap:X,clearcoatNormalMap:et,clearcoatRoughnessMap:nt,iridescence:Ee,iridescenceMap:lt,iridescenceThicknessMap:Tt,sheen:T,sheenColorMap:dt,sheenRoughnessMap:$,specularMap:mt,specularColorMap:vt,specularIntensityMap:yt,transmission:y,transmissionMap:ht,thicknessMap:gt,gradientMap:kt,opaque:x.transparent===!1&&x.blending===xi,alphaMap:Wt,alphaTest:Zt,combine:x.combine,mapUv:xt&&_(x.map.channel),aoMapUv:Ht&&_(x.aoMap.channel),lightMapUv:_t&&_(x.lightMap.channel),bumpMapUv:Ft&&_(x.bumpMap.channel),normalMapUv:le&&_(x.normalMap.channel),displacementMapUv:pe&&_(x.displacementMap.channel),emissiveMapUv:ce&&_(x.emissiveMap.channel),metalnessMapUv:se&&_(x.metalnessMap.channel),roughnessMapUv:Vt&&_(x.roughnessMap.channel),clearcoatMapUv:X&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&_(x.sheenRoughnessMap.channel),specularMapUv:mt&&_(x.specularMap.channel),specularColorMapUv:vt&&_(x.specularColorMap.channel),specularIntensityMapUv:yt&&_(x.specularIntensityMap.channel),transmissionMapUv:ht&&_(x.transmissionMap.channel),thicknessMapUv:gt&&_(x.thicknessMap.channel),alphaMapUv:Wt&&_(x.alphaMap.channel),vertexTangents:le&&!!W.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:q,vertexUv2s:tt,vertexUv3s:ct,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(xt||Wt),fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:mn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===Te,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:D&&x.extensions.derivatives===!0,extensionFragDepth:D&&x.extensions.fragDepth===!0,extensionDrawBuffers:D&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)E.push(B),E.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(v(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),x.push(o.mask)}function w(x){const E=g[x.type];let B;if(E){const G=rn[E];B=Vc.clone(G.uniforms)}else B=x.uniforms;return B}function A(x,E){let B;for(let G=0,U=l.length;G<U;G++){const z=l[G];if(z.cacheKey===E){B=z,++B.usedTimes;break}}return B===void 0&&(B=new Zf(i,E,x,r),l.push(B)),B}function R(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function C(x){h.remove(x)}function F(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:F}}function np(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ip(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function po(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function h(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||ip),n.length>1&&n.sort(d||fo),s.length>1&&s.sort(d||fo)}function c(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:l}}function sp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new po,i.set(n,[a])):s>=r.length?(a=new po,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let op=0;function lp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cp(i,t){const e=new rp,n=ap(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)s.probe.push(new P);const r=new P,a=new $t,o=new $t;function h(c,u){let d=0,p=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let _=0,m=0,f=0,v=0,M=0,w=0,A=0,R=0,C=0,F=0;c.sort(lp);const x=u===!0?Math.PI:1;for(let B=0,G=c.length;B<G;B++){const U=c[B],z=U.color,W=U.intensity,S=U.distance,I=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*W*x,p+=z.g*W*x,g+=z.b*W*x;else if(U.isLightProbe)for(let N=0;N<9;N++)s.probe[N].addScaledVector(U.sh.coefficients[N],W);else if(U.isDirectionalLight){const N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const V=U.shadow,K=n.get(U);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,s.directionalShadow[_]=K,s.directionalShadowMap[_]=I,s.directionalShadowMatrix[_]=U.shadow.matrix,w++}s.directional[_]=N,_++}else if(U.isSpotLight){const N=e.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(z).multiplyScalar(W*x),N.distance=S,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,s.spot[f]=N;const V=U.shadow;if(U.map&&(s.spotLightMap[C]=U.map,C++,V.updateMatrices(U),U.castShadow&&F++),s.spotLightMatrix[f]=V.matrix,U.castShadow){const K=n.get(U);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,s.spotShadow[f]=K,s.spotShadowMap[f]=I,R++}f++}else if(U.isRectAreaLight){const N=e.get(U);N.color.copy(z).multiplyScalar(W),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),s.rectArea[v]=N,v++}else if(U.isPointLight){const N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*x),N.distance=U.distance,N.decay=U.decay,U.castShadow){const V=U.shadow,K=n.get(U);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,s.pointShadow[m]=K,s.pointShadowMap[m]=I,s.pointShadowMatrix[m]=U.shadow.matrix,A++}s.point[m]=N,m++}else if(U.isHemisphereLight){const N=e.get(U);N.skyColor.copy(U.color).multiplyScalar(W*x),N.groundColor.copy(U.groundColor).multiplyScalar(W*x),s.hemi[M]=N,M++}}v>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==v||E.hemiLength!==M||E.numDirectionalShadows!==w||E.numPointShadows!==A||E.numSpotShadows!==R||E.numSpotMaps!==C)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=v,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=R+C-F,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=F,E.directionalLength=_,E.pointLength=m,E.spotLength=f,E.rectAreaLength=v,E.hemiLength=M,E.numDirectionalShadows=w,E.numPointShadows=A,E.numSpotShadows=R,E.numSpotMaps=C,s.version=op++)}function l(c,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const w=c[v];if(w.isDirectionalLight){const A=s.directional[d];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),d++}else if(w.isSpotLight){const A=s.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(w.isRectAreaLight){const A=s.rectArea[_];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const A=s.point[p];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){const A=s.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:h,setupView:l,state:s}}function mo(i,t){const e=new cp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function h(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o}}function hp(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let h;return o===void 0?(h=new mo(i,t),e.set(r,[h])):a>=o.length?(h=new mo(i,t),o.push(h)):h=o[a],h}function s(){e=new WeakMap}return{get:n,dispose:s}}class dp extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class up extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mp(i,t,e){let n=new Vr;const s=new Gt,r=new Gt,a=new jt,o=new dp({depthPacking:vc}),h=new up,l={},c=e.maxTextureSize,u={[Cn]:Te,[Te]:Cn,[an]:an},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let f=this.type;this.render=function(A,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const F=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Rn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=f!==pn&&this.type===pn,U=f===pn&&this.type!==pn;for(let z=0,W=A.length;z<W;z++){const S=A[z],I=S.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",S,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const N=I.getFrameExtents();if(s.multiply(N),r.copy(I.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/N.x),s.x=r.x*N.x,I.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/N.y),s.y=r.y*N.y,I.mapSize.y=r.y)),I.map===null||G===!0||U===!0){const K=this.type!==pn?{minFilter:Qt,magFilter:Qt}:{};I.map!==null&&I.map.dispose(),I.map=new $n(s.x,s.y,K),I.map.texture.name=S.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const V=I.getViewportCount();for(let K=0;K<V;K++){const ut=I.getViewport(K);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),B.viewport(a),I.updateMatrices(S,K),n=I.getFrustum(),w(R,C,I.camera,S,this.type)}I.isPointLightShadow!==!0&&this.type===pn&&v(I,C),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(F,x,E)};function v(A,R){const C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,C,p,_,null)}function M(A,R,C,F){let x=null;const E=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?h:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=x.uuid,G=R.uuid;let U=l[B];U===void 0&&(U={},l[B]=U);let z=U[G];z===void 0&&(z=x.clone(),U[G]=z),x=z}if(x.visible=R.visible,x.wireframe=R.wireframe,F===pn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=C}return x}function w(A,R,C,F,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const G=t.update(A),U=A.material;if(Array.isArray(U)){const z=G.groups;for(let W=0,S=z.length;W<S;W++){const I=z[W],N=U[I.materialIndex];if(N&&N.visible){const V=M(A,N,F,x);i.renderBufferDirect(C,null,G,V,A,I)}}}else if(U.visible){const z=M(A,U,F,x);i.renderBufferDirect(C,null,G,z,A,null)}}const B=A.children;for(let G=0,U=B.length;G<U;G++)w(B[G],R,C,F,x)}}function gp(i,t,e){const n=e.isWebGL2;function s(){let D=!1;const q=new jt;let tt=null;const ct=new jt(0,0,0,0);return{setMask:function(pt){tt!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),tt=pt)},setLocked:function(pt){D=pt},setClear:function(pt,qt,Yt,me,vn){vn===!0&&(pt*=me,qt*=me,Yt*=me),q.set(pt,qt,Yt,me),ct.equals(q)===!1&&(i.clearColor(pt,qt,Yt,me),ct.copy(q))},reset:function(){D=!1,tt=null,ct.set(-1,0,0,0)}}}function r(){let D=!1,q=null,tt=null,ct=null;return{setTest:function(pt){pt?L(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(pt){q!==pt&&!D&&(i.depthMask(pt),q=pt)},setFunc:function(pt){if(tt!==pt){switch(pt){case Hl:i.depthFunc(i.NEVER);break;case Vl:i.depthFunc(i.ALWAYS);break;case Wl:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Xl:i.depthFunc(i.EQUAL);break;case ql:i.depthFunc(i.GEQUAL);break;case Yl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ct!==pt&&(i.clearDepth(pt),ct=pt)},reset:function(){D=!1,q=null,tt=null,ct=null}}}function a(){let D=!1,q=null,tt=null,ct=null,pt=null,qt=null,Yt=null,me=null,vn=null;return{setTest:function(Jt){D||(Jt?L(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Jt){q!==Jt&&!D&&(i.stencilMask(Jt),q=Jt)},setFunc:function(Jt,Ne,Qe){(tt!==Jt||ct!==Ne||pt!==Qe)&&(i.stencilFunc(Jt,Ne,Qe),tt=Jt,ct=Ne,pt=Qe)},setOp:function(Jt,Ne,Qe){(qt!==Jt||Yt!==Ne||me!==Qe)&&(i.stencilOp(Jt,Ne,Qe),qt=Jt,Yt=Ne,me=Qe)},setLocked:function(Jt){D=Jt},setClear:function(Jt){vn!==Jt&&(i.clearStencil(Jt),vn=Jt)},reset:function(){D=!1,q=null,tt=null,ct=null,pt=null,qt=null,Yt=null,me=null,vn=null}}}const o=new s,h=new r,l=new a,c=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,M=null,w=null,A=null,R=null,C=null,F=null,x=!1,E=null,B=null,G=null,U=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let S=!1,I=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),S=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),S=I>=2);let V=null,K={};const ut=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),k=new jt().fromArray(ut),j=new jt().fromArray(J);function it(D,q,tt,ct){const pt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(D,qt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<tt;Yt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(q,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(q+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return qt}const at={};at[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),l.setClear(0),L(i.DEPTH_TEST),h.setFunc(Lr),pe(!1),ce(Qr),L(i.CULL_FACE),Ft(Rn);function L(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function bt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function xt(D,q){return p[D]!==q?(i.bindFramebuffer(D,q),p[D]=q,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=q),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=q)),!0):!1}function rt(D,q){let tt=_,ct=!1;if(D)if(tt=g.get(q),tt===void 0&&(tt=[],g.set(q,tt)),D.isWebGLMultipleRenderTargets){const pt=D.texture;if(tt.length!==pt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Yt=pt.length;qt<Yt;qt++)tt[qt]=i.COLOR_ATTACHMENT0+qt;tt.length=pt.length,ct=!0}}else tt[0]!==i.COLOR_ATTACHMENT0&&(tt[0]=i.COLOR_ATTACHMENT0,ct=!0);else tt[0]!==i.BACK&&(tt[0]=i.BACK,ct=!0);ct&&(e.isWebGL2?i.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function wt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Ht={[gi]:i.FUNC_ADD,[Pl]:i.FUNC_SUBTRACT,[Dl]:i.FUNC_REVERSE_SUBTRACT};if(n)Ht[ia]=i.MIN,Ht[sa]=i.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(Ht[ia]=D.MIN_EXT,Ht[sa]=D.MAX_EXT)}const _t={[Il]:i.ZERO,[Ul]:i.ONE,[Nl]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Gl]:i.SRC_ALPHA_SATURATE,[kl]:i.DST_COLOR,[Ol]:i.DST_ALPHA,[Fl]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Bl]:i.ONE_MINUS_DST_COLOR,[zl]:i.ONE_MINUS_DST_ALPHA};function Ft(D,q,tt,ct,pt,qt,Yt,me){if(D===Rn){f===!0&&(bt(i.BLEND),f=!1);return}if(f===!1&&(L(i.BLEND),f=!0),D!==Ll){if(D!==v||me!==x){if((M!==gi||R!==gi)&&(i.blendEquation(i.FUNC_ADD),M=gi,R=gi),me)switch(D){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.ONE,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case na:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,A=null,C=null,F=null,v=D,x=me}return}pt=pt||q,qt=qt||tt,Yt=Yt||ct,(q!==M||pt!==R)&&(i.blendEquationSeparate(Ht[q],Ht[pt]),M=q,R=pt),(tt!==w||ct!==A||qt!==C||Yt!==F)&&(i.blendFuncSeparate(_t[tt],_t[ct],_t[qt],_t[Yt]),w=tt,A=ct,C=qt,F=Yt),v=D,x=!1}function le(D,q){D.side===an?bt(i.CULL_FACE):L(i.CULL_FACE);let tt=D.side===Te;q&&(tt=!tt),pe(tt),D.blending===xi&&D.transparent===!1?Ft(Rn):Ft(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),h.setFunc(D.depthFunc),h.setTest(D.depthTest),h.setMask(D.depthWrite),o.setMask(D.colorWrite);const ct=D.stencilWrite;l.setTest(ct),ct&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function ce(D){D!==Tl?(L(i.CULL_FACE),D!==B&&(D===Qr?i.cullFace(i.BACK):D===Al?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),B=D}function se(D){D!==G&&(S&&i.lineWidth(D),G=D)}function Vt(D,q,tt){D?(L(i.POLYGON_OFFSET_FILL),(U!==q||z!==tt)&&(i.polygonOffset(q,tt),U=q,z=tt)):bt(i.POLYGON_OFFSET_FILL)}function Kt(D){D?L(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Ee(D){D===void 0&&(D=i.TEXTURE0+W-1),V!==D&&(i.activeTexture(D),V=D)}function T(D,q,tt){tt===void 0&&(V===null?tt=i.TEXTURE0+W-1:tt=V);let ct=K[tt];ct===void 0&&(ct={type:void 0,texture:void 0},K[tt]=ct),(ct.type!==D||ct.texture!==q)&&(V!==tt&&(i.activeTexture(tt),V=tt),i.bindTexture(D,q||at[D]),ct.type=D,ct.texture=q)}function y(){const D=K[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){k.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),k.copy(D))}function gt(D){j.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function kt(D,q){let tt=u.get(q);tt===void 0&&(tt=new WeakMap,u.set(q,tt));let ct=tt.get(D);ct===void 0&&(ct=i.getUniformBlockIndex(q,D.name),tt.set(D,ct))}function Wt(D,q){const ct=u.get(q).get(D);c.get(q)!==ct&&(i.uniformBlockBinding(q,ct,D.__bindingPointIndex),c.set(q,ct))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},V=null,K={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,M=null,w=null,A=null,R=null,C=null,F=null,x=!1,E=null,B=null,G=null,U=null,z=null,k.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),h.reset(),l.reset()}return{buffers:{color:o,depth:h,stencil:l},enable:L,disable:bt,bindFramebuffer:xt,drawBuffers:rt,useProgram:wt,setBlending:Ft,setMaterial:le,setFlipSided:pe,setCullFace:ce,setLineWidth:se,setPolygonOffset:Vt,setScissorTest:Kt,activeTexture:Ee,bindTexture:T,unbindTexture:y,compressedTexImage2D:X,compressedTexImage3D:et,texImage2D:vt,texImage3D:yt,updateUBOMapping:kt,uniformBlockBinding:Wt,texStorage2D:$,texStorage3D:mt,texSubImage2D:nt,texSubImage3D:lt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:dt,scissor:ht,viewport:gt,reset:Zt}}function _p(i,t,e,n,s,r,a){const o=s.isWebGL2,h=s.maxTextures,l=s.maxCubemapSize,c=s.maxTextureSize,u=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,y){return f?new OffscreenCanvas(T,y):ji("canvas")}function M(T,y,X,et){let nt=1;if((T.width>et||T.height>et)&&(nt=et/Math.max(T.width,T.height)),nt<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const lt=y?Ec:Math.floor,Tt=lt(nt*T.width),dt=lt(nt*T.height);_===void 0&&(_=v(Tt,dt));const $=X?v(Tt,dt):_;return $.width=Tt,$.height=dt,$.getContext("2d").drawImage(T,0,0,Tt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Tt+"x"+dt+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function w(T){return Pa(T.width)&&Pa(T.height)}function A(T){return o?!1:T.wrapS!==Ye||T.wrapT!==Ye||T.minFilter!==Qt&&T.minFilter!==Oe}function R(T,y){return T.generateMipmaps&&y&&T.minFilter!==Qt&&T.minFilter!==Oe}function C(T){i.generateMipmap(T)}function F(T,y,X,et,nt=!1){if(o===!1)return y;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let lt=y;return y===i.RED&&(X===i.FLOAT&&(lt=i.R32F),X===i.HALF_FLOAT&&(lt=i.R16F),X===i.UNSIGNED_BYTE&&(lt=i.R8)),y===i.RG&&(X===i.FLOAT&&(lt=i.RG32F),X===i.HALF_FLOAT&&(lt=i.RG16F),X===i.UNSIGNED_BYTE&&(lt=i.RG8)),y===i.RGBA&&(X===i.FLOAT&&(lt=i.RGBA32F),X===i.HALF_FLOAT&&(lt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(lt=et===At&&nt===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)),(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function x(T,y,X){return R(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==Qt&&T.minFilter!==Oe?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){return T===Qt||T===ra||T===Ks?i.NEAREST:i.LINEAR}function B(T){const y=T.target;y.removeEventListener("dispose",B),U(y),y.isVideoTexture&&g.delete(y)}function G(T){const y=T.target;y.removeEventListener("dispose",G),W(y)}function U(T){const y=n.get(T);if(y.__webglInit===void 0)return;const X=T.source,et=m.get(X);if(et){const nt=et[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&z(T),Object.keys(et).length===0&&m.delete(X)}n.remove(T)}function z(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const X=T.source,et=m.get(X);delete et[y.__cacheKey],a.memory.textures--}function W(T){const y=T.texture,X=n.get(T),et=n.get(y);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)i.deleteFramebuffer(X.__webglFramebuffer[nt]),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[nt]);else{if(i.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let nt=0,lt=y.length;nt<lt;nt++){const Tt=n.get(y[nt]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(y[nt])}n.remove(y),n.remove(T)}let S=0;function I(){S=0}function N(){const T=S;return T>=h&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+h),S+=1,T}function V(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function K(T,y){const X=n.get(T);if(T.isVideoTexture&&Kt(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(X,T,y);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function ut(T,y){const X=n.get(T);if(T.version>0&&X.__version!==T.version){bt(X,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function J(T,y){const X=n.get(T);if(T.version>0&&X.__version!==T.version){bt(X,T,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function k(T,y){const X=n.get(T);if(T.version>0&&X.__version!==T.version){xt(X,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}const j={[Ns]:i.REPEAT,[Ye]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},it={[Qt]:i.NEAREST,[ra]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[nc]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR};function at(T,y,X){if(X?(i.texParameteri(T,i.TEXTURE_WRAP_S,j[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,j[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,j[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[y.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Ye||y.wrapT!==Ye)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,E(y.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==Qt&&y.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Qt||y.minFilter!==Ks&&y.minFilter!==qi||y.type===Wn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(T,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function L(T,y){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",B));const et=y.source;let nt=m.get(et);nt===void 0&&(nt={},m.set(et,nt));const lt=V(y);if(lt!==T.__cacheKey){nt[lt]===void 0&&(nt[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),nt[lt].usedTimes++;const Tt=nt[T.__cacheKey];Tt!==void 0&&(nt[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&z(y)),T.__cacheKey=lt,T.__webglTexture=nt[lt].texture}return X}function bt(T,y,X){let et=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=i.TEXTURE_3D);const nt=L(T,y),lt=y.source;e.bindTexture(et,T.__webglTexture,i.TEXTURE0+X);const Tt=n.get(lt);if(lt.version!==Tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const dt=A(y)&&w(y.image)===!1;let $=M(y.image,dt,!1,c);$=Ee(y,$);const mt=w($)||o,vt=r.convert(y.format,y.colorSpace);let yt=r.convert(y.type),ht=F(y.internalFormat,vt,yt,y.colorSpace);at(et,y,mt);let gt;const kt=y.mipmaps,Wt=o&&y.isVideoTexture!==!0,Zt=Tt.__version===void 0||nt===!0,D=x(y,$,mt);if(y.isDepthTexture)ht=i.DEPTH_COMPONENT,o?y.type===Wn?ht=i.DEPTH_COMPONENT32F:y.type===Vn?ht=i.DEPTH_COMPONENT24:y.type===vi?ht=i.DEPTH24_STENCIL8:ht=i.DEPTH_COMPONENT16:y.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===qn&&ht===i.DEPTH_COMPONENT&&y.type!==Wo&&y.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Vn,yt=r.convert(y.type)),y.format===bi&&ht===i.DEPTH_COMPONENT&&(ht=i.DEPTH_STENCIL,y.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=vi,yt=r.convert(y.type))),Zt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,ht,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,ht,$.width,$.height,0,vt,yt,null));else if(y.isDataTexture)if(kt.length>0&&mt){Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,D,ht,kt[0].width,kt[0].height);for(let q=0,tt=kt.length;q<tt;q++)gt=kt[q],Wt?e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,vt,yt,gt.data):e.texImage2D(i.TEXTURE_2D,q,ht,gt.width,gt.height,0,vt,yt,gt.data);y.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(i.TEXTURE_2D,D,ht,$.width,$.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,vt,yt,$.data)):e.texImage2D(i.TEXTURE_2D,0,ht,$.width,$.height,0,vt,yt,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,ht,kt[0].width,kt[0].height,$.depth);for(let q=0,tt=kt.length;q<tt;q++)gt=kt[q],y.format!==je?vt!==null?Wt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,$.depth,vt,gt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,ht,gt.width,gt.height,$.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,$.depth,vt,yt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,ht,gt.width,gt.height,$.depth,0,vt,yt,gt.data)}else{Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,D,ht,kt[0].width,kt[0].height);for(let q=0,tt=kt.length;q<tt;q++)gt=kt[q],y.format!==je?vt!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,ht,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,vt,yt,gt.data):e.texImage2D(i.TEXTURE_2D,q,ht,gt.width,gt.height,0,vt,yt,gt.data)}else if(y.isDataArrayTexture)Wt?(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,ht,$.width,$.height,$.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,vt,yt,$.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,$.width,$.height,$.depth,0,vt,yt,$.data);else if(y.isData3DTexture)Wt?(Zt&&e.texStorage3D(i.TEXTURE_3D,D,ht,$.width,$.height,$.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,vt,yt,$.data)):e.texImage3D(i.TEXTURE_3D,0,ht,$.width,$.height,$.depth,0,vt,yt,$.data);else if(y.isFramebufferTexture){if(Zt)if(Wt)e.texStorage2D(i.TEXTURE_2D,D,ht,$.width,$.height);else{let q=$.width,tt=$.height;for(let ct=0;ct<D;ct++)e.texImage2D(i.TEXTURE_2D,ct,ht,q,tt,0,vt,yt,null),q>>=1,tt>>=1}}else if(kt.length>0&&mt){Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,D,ht,kt[0].width,kt[0].height);for(let q=0,tt=kt.length;q<tt;q++)gt=kt[q],Wt?e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt,yt,gt):e.texImage2D(i.TEXTURE_2D,q,ht,vt,yt,gt);y.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(i.TEXTURE_2D,D,ht,$.width,$.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,yt,$)):e.texImage2D(i.TEXTURE_2D,0,ht,vt,yt,$);R(y,mt)&&C(et),Tt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xt(T,y,X){if(y.image.length!==6)return;const et=L(T,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+X);const lt=n.get(nt);if(nt.version!==lt.__version||et===!0){e.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,dt=y.image[0]&&y.image[0].isDataTexture,$=[];for(let q=0;q<6;q++)!Tt&&!dt?$[q]=M(y.image[q],!1,!0,l):$[q]=dt?y.image[q].image:y.image[q],$[q]=Ee(y,$[q]);const mt=$[0],vt=w(mt)||o,yt=r.convert(y.format,y.colorSpace),ht=r.convert(y.type),gt=F(y.internalFormat,yt,ht,y.colorSpace),kt=o&&y.isVideoTexture!==!0,Wt=lt.__version===void 0||et===!0;let Zt=x(y,mt,vt);at(i.TEXTURE_CUBE_MAP,y,vt);let D;if(Tt){kt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,gt,mt.width,mt.height);for(let q=0;q<6;q++){D=$[q].mipmaps;for(let tt=0;tt<D.length;tt++){const ct=D[tt];y.format!==je?yt!==null?kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt,0,0,ct.width,ct.height,yt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt,gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt,0,0,ct.width,ct.height,yt,ht,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt,gt,ct.width,ct.height,0,yt,ht,ct.data)}}}else{D=y.mipmaps,kt&&Wt&&(D.length>0&&Zt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,gt,$[0].width,$[0].height));for(let q=0;q<6;q++)if(dt){kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,$[q].width,$[q].height,yt,ht,$[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,gt,$[q].width,$[q].height,0,yt,ht,$[q].data);for(let tt=0;tt<D.length;tt++){const pt=D[tt].image[q].image;kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt+1,0,0,pt.width,pt.height,yt,ht,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt+1,gt,pt.width,pt.height,0,yt,ht,pt.data)}}else{kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,yt,ht,$[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,gt,yt,ht,$[q]);for(let tt=0;tt<D.length;tt++){const ct=D[tt];kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt+1,0,0,yt,ht,ct.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt+1,gt,yt,ht,ct.image[q])}}}R(y,vt)&&C(i.TEXTURE_CUBE_MAP),lt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function rt(T,y,X,et,nt){const lt=r.convert(X.format,X.colorSpace),Tt=r.convert(X.type),dt=F(X.internalFormat,lt,Tt,X.colorSpace);n.get(y).__hasExternalTextures||(nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,dt,y.width,y.height,y.depth,0,lt,Tt,null):e.texImage2D(nt,0,dt,y.width,y.height,0,lt,Tt,null)),e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(y)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,nt,n.get(X).__webglTexture,0,se(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,nt,n.get(X).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(T,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let et=i.DEPTH_COMPONENT16;if(X||Vt(y)){const nt=y.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Wn?et=i.DEPTH_COMPONENT32F:nt.type===Vn&&(et=i.DEPTH_COMPONENT24));const lt=se(y);Vt(y)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,et,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,et,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const et=se(y);X&&Vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,y.width,y.height):Vt(y)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const et=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let nt=0;nt<et.length;nt++){const lt=et[nt],Tt=r.convert(lt.format,lt.colorSpace),dt=r.convert(lt.type),$=F(lt.internalFormat,Tt,dt,lt.colorSpace),mt=se(y);X&&Vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,$,y.width,y.height):Vt(y)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const et=n.get(y.depthTexture).__webglTexture,nt=se(y);if(y.depthTexture.format===qn)Vt(y)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===bi)Vt(y)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function _t(T){const y=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ht(y.__webglFramebuffer,T)}else if(X){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]=i.createRenderbuffer(),wt(y.__webglDepthbuffer[et],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),wt(y.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,y,X){const et=n.get(T);y!==void 0&&rt(et.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),X!==void 0&&_t(T)}function le(T){const y=T.texture,X=n.get(T),et=n.get(y);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=y.version,a.memory.textures++);const nt=T.isWebGLCubeRenderTarget===!0,lt=T.isWebGLMultipleRenderTargets===!0,Tt=w(T)||o;if(nt){X.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)X.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(X.__webglFramebuffer=i.createFramebuffer(),lt)if(s.drawBuffers){const dt=T.texture;for(let $=0,mt=dt.length;$<mt;$++){const vt=n.get(dt[$]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Vt(T)===!1){const dt=lt?y:[y];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<dt.length;$++){const mt=dt[$];X.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[$]);const vt=r.convert(mt.format,mt.colorSpace),yt=r.convert(mt.type),ht=F(mt.internalFormat,vt,yt,mt.colorSpace,T.isXRRenderTarget===!0),gt=se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,X.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(X.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),at(i.TEXTURE_CUBE_MAP,y,Tt);for(let dt=0;dt<6;dt++)rt(X.__webglFramebuffer[dt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt);R(y,Tt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const dt=T.texture;for(let $=0,mt=dt.length;$<mt;$++){const vt=dt[$],yt=n.get(vt);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),at(i.TEXTURE_2D,vt,Tt),rt(X.__webglFramebuffer,T,vt,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D),R(vt,Tt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,et.__webglTexture),at(dt,y,Tt),rt(X.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,dt),R(y,Tt)&&C(dt),e.unbindTexture()}T.depthBuffer&&_t(T)}function pe(T){const y=w(T)||o,X=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let et=0,nt=X.length;et<nt;et++){const lt=X[et];if(R(lt,y)){const Tt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(lt).__webglTexture;e.bindTexture(Tt,dt),C(Tt),e.unbindTexture()}}}function ce(T){if(o&&T.samples>0&&Vt(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],X=T.width,et=T.height;let nt=i.COLOR_BUFFER_BIT;const lt=[],Tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(T),$=T.isWebGLMultipleRenderTargets===!0;if($)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){lt.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&lt.push(Tt);const vt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(vt===!1&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),$&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]),vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),$){const yt=n.get(y[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,X,et,0,0,X,et,nt,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const vt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function se(T){return Math.min(u,T.samples)}function Vt(T){const y=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Kt(T){const y=a.render.frame;g.get(T)!==y&&(g.set(T,y),T.update())}function Ee(T,y){const X=T.colorSpace,et=T.format,nt=T.type;return T.isCompressedTexture===!0||T.format===Ur||X!==on&&X!==jn&&(X===At?o===!1?t.has("EXT_sRGB")===!0&&et===je?(T.format=Ur,T.minFilter=Oe,T.generateMipmaps=!1):y=Ko.sRGBToLinear(y):(et!==je||nt!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=ut,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=le,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Vt}function xp(i,t,e){const n=e.isWebGL2;function s(r,a=jn){let o;if(r===Kn)return i.UNSIGNED_BYTE;if(r===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(r===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ic)return i.BYTE;if(r===sc)return i.SHORT;if(r===Wo)return i.UNSIGNED_SHORT;if(r===rc)return i.INT;if(r===Vn)return i.UNSIGNED_INT;if(r===Wn)return i.FLOAT;if(r===Yi)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===lc)return i.ALPHA;if(r===je)return i.RGBA;if(r===cc)return i.LUMINANCE;if(r===hc)return i.LUMINANCE_ALPHA;if(r===qn)return i.DEPTH_COMPONENT;if(r===bi)return i.DEPTH_STENCIL;if(r===Ur)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===dc)return i.RED;if(r===uc)return i.RED_INTEGER;if(r===fc)return i.RG;if(r===pc)return i.RG_INTEGER;if(r===mc)return i.RGBA_INTEGER;if(r===$s||r===Zs||r===Js||r===Qs)if(a===At)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===$s)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===$s)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===aa||r===oa||r===la||r===ca)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===aa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===la)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ca)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ha||r===da)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ha)return a===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===da)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ua||r===fa||r===pa||r===ma||r===ga||r===_a||r===xa||r===va||r===Ma||r===ya||r===Sa||r===Ea||r===ba||r===wa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ua)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fa)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pa)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ma)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ga)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_a)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xa)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===va)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ma)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ya)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sa)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ea)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ba)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wa)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===tr)return a===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===_c||r===Ta||r===Aa||r===Ra)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===tr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ta)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ra)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class vp extends fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rt extends te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class yp extends ye{constructor(t,e,n,s,r,a,o,h,l,c){if(c=c!==void 0?c:qn,c!==qn&&c!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===qn&&(n=Vn),n===void 0&&c===bi&&(n=vi),super(null,s,r,a,o,h,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qt,this.minFilter=h!==void 0?h:Qt,this.flipY=!1,this.generateMipmaps=!1}}class Sp extends Ri{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",h=1,l=null,c=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const v=[],M=[],w=new Set,A=new Map,R=new fe;R.layers.enable(1),R.viewport=new jt;const C=new fe;C.layers.enable(2),C.viewport=new jt;const F=[R,C],x=new vp;x.layers.enable(1),x.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=v[k];return j===void 0&&(j=new Er,v[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=v[k];return j===void 0&&(j=new Er,v[k]=j),j.getGripSpace()},this.getHand=function(k){let j=v[k];return j===void 0&&(j=new Er,v[k]=j),j.getHandSpace()};function G(k){const j=M.indexOf(k.inputSource);if(j===-1)return;const it=v[j];it!==void 0&&(it.update(k.inputSource,k.frame,l||a),it.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let k=0;k<v.length;k++){const j=M[k];j!==null&&(M[k]=null,v[k].disconnect(j))}E=null,B=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),f=new $n(p.framebufferWidth,p.framebufferHeight,{format:je,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,it=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?bi:qn,it=_.stencil?vi:Vn);const L={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(L),s.updateRenderState({layers:[d]}),f=new $n(d.textureWidth,d.textureHeight,{format:je,type:Kn,depthTexture:new yp(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const bt=t.properties.get(f);bt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(k){for(let j=0;j<k.removed.length;j++){const it=k.removed[j],at=M.indexOf(it);at>=0&&(M[at]=null,v[at].disconnect(it))}for(let j=0;j<k.added.length;j++){const it=k.added[j];let at=M.indexOf(it);if(at===-1){for(let bt=0;bt<v.length;bt++)if(bt>=M.length){M.push(it),at=bt;break}else if(M[bt]===null){M[bt]=it,at=bt;break}if(at===-1)break}const L=v[at];L&&L.connect(it)}}const W=new P,S=new P;function I(k,j,it){W.setFromMatrixPosition(j.matrixWorld),S.setFromMatrixPosition(it.matrixWorld);const at=W.distanceTo(S),L=j.projectionMatrix.elements,bt=it.projectionMatrix.elements,xt=L[14]/(L[10]-1),rt=L[14]/(L[10]+1),wt=(L[9]+1)/L[5],Ht=(L[9]-1)/L[5],_t=(L[8]-1)/L[0],Ft=(bt[8]+1)/bt[0],le=xt*_t,pe=xt*Ft,ce=at/(-_t+Ft),se=ce*-_t;j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(se),k.translateZ(ce),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Vt=xt+ce,Kt=rt+ce,Ee=le-se,T=pe+(at-se),y=wt*rt/Kt*Vt,X=Ht*rt/Kt*Vt;k.projectionMatrix.makePerspective(Ee,T,y,X,Vt,Kt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function N(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;x.near=C.near=R.near=k.near,x.far=C.far=R.far=k.far,(E!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,B=x.far);const j=k.parent,it=x.cameras;N(x,j);for(let at=0;at<it.length;at++)N(it[at],j);it.length===2?I(x,R,C):x.projectionMatrix.copy(R.projectionMatrix),V(k,x,j)};function V(k,j,it){it===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(it.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const at=k.children;for(let L=0,bt=at.length;L<bt;L++)at[L].updateMatrixWorld(!0);k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Fs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return h},this.setFoveation=function(k){h=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return w};let K=null;function ut(k,j){if(c=j.getViewerPose(l||a),g=j,c!==null){const it=c.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let at=!1;it.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let L=0;L<it.length;L++){const bt=it[L];let xt=null;if(p!==null)xt=p.getViewport(bt);else{const wt=u.getViewSubImage(d,bt);xt=wt.viewport,L===0&&(t.setRenderTargetTextures(f,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(f))}let rt=F[L];rt===void 0&&(rt=new fe,rt.layers.enable(L),rt.viewport=new jt,F[L]=rt),rt.matrix.fromArray(bt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(bt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(xt.x,xt.y,xt.width,xt.height),L===0&&(x.matrix.copy(rt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(rt)}}for(let it=0;it<v.length;it++){const at=M[it],L=v[it];at!==null&&L!==void 0&&L.update(at,j,l||a)}if(K&&K(k,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let it=null;for(const at of w)j.detectedPlanes.has(at)||(it===null&&(it=[]),it.push(at));if(it!==null)for(const at of it)w.delete(at),A.delete(at),n.dispatchEvent({type:"planeremoved",data:at});for(const at of j.detectedPlanes)if(!w.has(at))w.add(at),A.set(at,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:at});else{const L=A.get(at);at.lastChangedTime>L&&(A.set(at,at.lastChangedTime),n.dispatchEvent({type:"planechanged",data:at}))}}g=null}const J=new rl;J.setAnimationLoop(ut),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Ep(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?h(m,f,v,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Te&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Te&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*M,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bp(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(v,M){const w=M.program;n.uniformBlockBinding(v,w)}function l(v,M){let w=s[v.id];w===void 0&&(g(v),w=c(v),s[v.id]=w,v.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(v,A);const R=t.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function c(v){const M=u();v.__bindingPointIndex=M;const w=i.createBuffer(),A=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,C=w.length;R<C;R++){const F=w[R];if(p(F,R,A)===!0){const x=F.__offset,E=Array.isArray(F.value)?F.value:[F.value];let B=0;for(let G=0;G<E.length;G++){const U=E[G],z=_(U);typeof U=="number"?(F.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,x+B,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=U.elements[0],F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=U.elements[0],F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=U.elements[0]):(U.toArray(F.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,F.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,w){const A=v.value;if(w[M]===void 0){if(typeof A=="number")w[M]=A;else{const R=Array.isArray(A)?A:[A],C=[];for(let F=0;F<R.length;F++)C.push(R[F].clone());w[M]=C}return!0}else if(typeof A=="number"){if(w[M]!==A)return w[M]=A,!0}else{const R=Array.isArray(w[M])?w[M]:[w[M]],C=Array.isArray(A)?A:[A];for(let F=0;F<R.length;F++){const x=R[F];if(x.equals(C[F])===!1)return x.copy(C[F]),!0}}return!1}function g(v){const M=v.uniforms;let w=0;const A=16;let R=0;for(let C=0,F=M.length;C<F;C++){const x=M[C],E={boundary:0,storage:0},B=Array.isArray(x.value)?x.value:[x.value];for(let G=0,U=B.length;G<U;G++){const z=B[G],W=_(z);E.boundary+=W.boundary,E.storage+=W.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=w,C>0){R=w%A;const G=A-R;R!==0&&G-E.boundary<0&&(w+=A-R,x.__offset=w)}w+=E.storage}return R=w%A,R>0&&(w+=A-R),v.__size=w,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:h,update:l,dispose:f}}function wp(){const i=ji("canvas");return i.style.display="block",i}class dl{constructor(t={}){const{canvas:e=wp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=At,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const f=this;let v=!1,M=0,w=0,A=null,R=-1,C=null;const F=new jt,x=new jt;let E=null,B=e.width,G=e.height,U=1,z=null,W=null;const S=new jt(0,0,B,G),I=new jt(0,0,B,G);let N=!1;const V=new Vr;let K=!1,ut=!1,J=null;const k=new $t,j=new P,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return A===null?U:1}let L=n;function bt(b,H){for(let Y=0;Y<b.length;Y++){const O=b[Y],Z=e.getContext(O,H);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Br}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),L===null){const H=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&H.shift(),L=bt(H,b),L===null)throw bt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xt,rt,wt,Ht,_t,Ft,le,pe,ce,se,Vt,Kt,Ee,T,y,X,et,nt,lt,Tt,dt,$,mt,vt;function yt(){xt=new Nu(L),rt=new Cu(L,xt,t),xt.init(rt),$=new xp(L,xt,rt),wt=new gp(L,xt,rt),Ht=new zu(L),_t=new np,Ft=new _p(L,xt,wt,_t,rt,$,Ht),le=new Pu(f),pe=new Uu(f),ce=new $c(L,rt),mt=new Au(L,xt,ce,rt),se=new Fu(L,ce,Ht,mt),Vt=new Hu(L,se,ce,Ht),lt=new Gu(L,rt,Ft),X=new Lu(_t),Kt=new ep(f,le,pe,xt,rt,mt,X),Ee=new Ep(f,_t),T=new sp,y=new hp(xt,rt),nt=new Tu(f,le,pe,wt,Vt,d,h),et=new mp(f,Vt,rt),vt=new bp(L,Ht,rt,wt),Tt=new Ru(L,xt,Ht,rt),dt=new Ou(L,xt,Ht,rt),Ht.programs=Kt.programs,f.capabilities=rt,f.extensions=xt,f.properties=_t,f.renderLists=T,f.shadowMap=et,f.state=wt,f.info=Ht}yt();const ht=new Sp(f,L);this.xr=ht,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(B,G,!1))},this.getSize=function(b){return b.set(B,G)},this.setSize=function(b,H,Y=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,G=H,e.width=Math.floor(b*U),e.height=Math.floor(H*U),Y===!0&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(B*U,G*U).floor()},this.setDrawingBufferSize=function(b,H,Y){B=b,G=H,U=Y,e.width=Math.floor(b*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(S)},this.setViewport=function(b,H,Y,O){b.isVector4?S.set(b.x,b.y,b.z,b.w):S.set(b,H,Y,O),wt.viewport(F.copy(S).multiplyScalar(U).floor())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,H,Y,O){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,H,Y,O),wt.scissor(x.copy(I).multiplyScalar(U).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(b){wt.setScissorTest(N=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(b=!0,H=!0,Y=!0){let O=0;b&&(O|=L.COLOR_BUFFER_BIT),H&&(O|=L.DEPTH_BUFFER_BIT),Y&&(O|=L.STENCIL_BUFFER_BIT),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),T.dispose(),y.dispose(),_t.dispose(),le.dispose(),pe.dispose(),Vt.dispose(),mt.dispose(),vt.dispose(),Kt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",pt),ht.removeEventListener("sessionend",qt),J&&(J.dispose(),J=null),Yt.stop()};function gt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=Ht.autoReset,H=et.enabled,Y=et.autoUpdate,O=et.needsUpdate,Z=et.type;yt(),Ht.autoReset=b,et.enabled=H,et.autoUpdate=Y,et.needsUpdate=O,et.type=Z}function Wt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){const H=b.target;H.removeEventListener("dispose",Zt),D(H)}function D(b){q(b),_t.remove(b)}function q(b){const H=_t.get(b).programs;H!==void 0&&(H.forEach(function(Y){Kt.releaseProgram(Y)}),b.isShaderMaterial&&Kt.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,Y,O,Z,Mt){H===null&&(H=it);const St=Z.isMesh&&Z.matrixWorld.determinant()<0,Ct=Sl(b,H,Y,O,Z);wt.setMaterial(O,St);let Lt=Y.index,Ut=1;O.wireframe===!0&&(Lt=se.getWireframeAttribute(Y),Ut=2);const Nt=Y.drawRange,Ot=Y.attributes.position;let Xt=Nt.start*Ut,xe=(Nt.start+Nt.count)*Ut;Mt!==null&&(Xt=Math.max(Xt,Mt.start*Ut),xe=Math.min(xe,(Mt.start+Mt.count)*Ut)),Lt!==null?(Xt=Math.max(Xt,0),xe=Math.min(xe,Lt.count)):Ot!=null&&(Xt=Math.max(Xt,0),xe=Math.min(xe,Ot.count));const Ge=xe-Xt;if(Ge<0||Ge===1/0)return;mt.setup(Z,O,Ct,Y,Lt);let Pn,ee=Tt;if(Lt!==null&&(Pn=ce.get(Lt),ee=dt,ee.setIndex(Pn)),Z.isMesh)O.wireframe===!0?(wt.setLineWidth(O.wireframeLinewidth*at()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(Z.isLine){let Bt=O.linewidth;Bt===void 0&&(Bt=1),wt.setLineWidth(Bt*at()),Z.isLineSegments?ee.setMode(L.LINES):Z.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else Z.isPoints?ee.setMode(L.POINTS):Z.isSprite&&ee.setMode(L.TRIANGLES);if(Z.isInstancedMesh)ee.renderInstances(Xt,Ge,Z.count);else if(Y.isInstancedBufferGeometry){const Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xs=Math.min(Y.instanceCount,Bt);ee.renderInstances(Xt,Ge,Xs)}else ee.render(Xt,Ge)},this.compile=function(b,H){function Y(O,Z,Mt){O.transparent===!0&&O.side===an&&O.forceSinglePass===!1?(O.side=Te,O.needsUpdate=!0,is(O,Z,Mt),O.side=Cn,O.needsUpdate=!0,is(O,Z,Mt),O.side=an):is(O,Z,Mt)}g=y.get(b),g.init(),m.push(g),b.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(f.useLegacyLights),b.traverse(function(O){const Z=O.material;if(Z)if(Array.isArray(Z))for(let Mt=0;Mt<Z.length;Mt++){const St=Z[Mt];Y(St,b,O)}else Y(Z,b,O)}),m.pop(),g=null};let tt=null;function ct(b){tt&&tt(b)}function pt(){Yt.stop()}function qt(){Yt.start()}const Yt=new rl;Yt.setAnimationLoop(ct),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(b){tt=b,ht.setAnimationLoop(b),b===null?Yt.stop():Yt.start()},ht.addEventListener("sessionstart",pt),ht.addEventListener("sessionend",qt),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(H),H=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(f,b,H,A),g=y.get(b,m.length),g.init(),m.push(g),k.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),V.setFromProjectionMatrix(k),ut=this.localClippingEnabled,K=X.init(this.clippingPlanes,ut),p=T.get(b,_.length),p.init(),_.push(p),me(b,H,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(z,W),K===!0&&X.beginShadows();const Y=g.state.shadowsArray;if(et.render(Y,b,H),K===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(p,b),g.setupLights(f.useLegacyLights),H.isArrayCamera){const O=H.cameras;for(let Z=0,Mt=O.length;Z<Mt;Z++){const St=O[Z];vn(p,b,St,St.viewport)}}else vn(p,b,H);A!==null&&(Ft.updateMultisampleRenderTarget(A),Ft.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(f,b,H),mt.resetDefaultState(),R=-1,C=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function me(b,H,Y,O){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){O&&j.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const St=Vt.update(b),Ct=b.material;Ct.visible&&p.push(b,St,Ct,Y,j.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==Ht.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ht.render.frame);const St=Vt.update(b),Ct=b.material;if(O&&(St.boundingSphere===null&&St.computeBoundingSphere(),j.copy(St.boundingSphere.center).applyMatrix4(b.matrixWorld).applyMatrix4(k)),Array.isArray(Ct)){const Lt=St.groups;for(let Ut=0,Nt=Lt.length;Ut<Nt;Ut++){const Ot=Lt[Ut],Xt=Ct[Ot.materialIndex];Xt&&Xt.visible&&p.push(b,St,Xt,Y,j.z,Ot)}}else Ct.visible&&p.push(b,St,Ct,Y,j.z,null)}}const Mt=b.children;for(let St=0,Ct=Mt.length;St<Ct;St++)me(Mt[St],H,Y,O)}function vn(b,H,Y,O){const Z=b.opaque,Mt=b.transmissive,St=b.transparent;g.setupLightsView(Y),K===!0&&X.setGlobalState(f.clippingPlanes,Y),Mt.length>0&&Jt(Z,Mt,H,Y),O&&wt.viewport(F.copy(O)),Z.length>0&&Ne(Z,H,Y),Mt.length>0&&Ne(Mt,H,Y),St.length>0&&Ne(St,H,Y),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Jt(b,H,Y,O){if(J===null){const Ct=rt.isWebGL2;J=new $n(1024,1024,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Yi:Kn,minFilter:qi,samples:Ct&&o===!0?4:0})}const Z=f.getRenderTarget();f.setRenderTarget(J),f.clear();const Mt=f.toneMapping;f.toneMapping=mn,Ne(b,Y,O),Ft.updateMultisampleRenderTarget(J),Ft.updateRenderTargetMipmap(J);let St=!1;for(let Ct=0,Lt=H.length;Ct<Lt;Ct++){const Ut=H[Ct],Nt=Ut.object,Ot=Ut.geometry,Xt=Ut.material,xe=Ut.group;if(Xt.side===an&&Nt.layers.test(O.layers)){const Ge=Xt.side;Xt.side=Te,Xt.needsUpdate=!0,Qe(Nt,Y,O,Ot,Xt,xe),Xt.side=Ge,Xt.needsUpdate=!0,St=!0}}St===!0&&(Ft.updateMultisampleRenderTarget(J),Ft.updateRenderTargetMipmap(J)),f.setRenderTarget(Z),f.toneMapping=Mt}function Ne(b,H,Y){const O=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Mt=b.length;Z<Mt;Z++){const St=b[Z],Ct=St.object,Lt=St.geometry,Ut=O===null?St.material:O,Nt=St.group;Ct.layers.test(Y.layers)&&Qe(Ct,H,Y,Lt,Ut,Nt)}}function Qe(b,H,Y,O,Z,Mt){b.onBeforeRender(f,H,Y,O,Z,Mt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(f,H,Y,O,b,Mt),Z.transparent===!0&&Z.side===an&&Z.forceSinglePass===!1?(Z.side=Te,Z.needsUpdate=!0,f.renderBufferDirect(Y,H,O,Z,b,Mt),Z.side=Cn,Z.needsUpdate=!0,f.renderBufferDirect(Y,H,O,Z,b,Mt),Z.side=an):f.renderBufferDirect(Y,H,O,Z,b,Mt),b.onAfterRender(f,H,Y,O,Z,Mt)}function is(b,H,Y){H.isScene!==!0&&(H=it);const O=_t.get(b),Z=g.state.lights,Mt=g.state.shadowsArray,St=Z.state.version,Ct=Kt.getParameters(b,Z.state,Mt,H,Y),Lt=Kt.getProgramCacheKey(Ct);let Ut=O.programs;O.environment=b.isMeshStandardMaterial?H.environment:null,O.fog=H.fog,O.envMap=(b.isMeshStandardMaterial?pe:le).get(b.envMap||O.environment),Ut===void 0&&(b.addEventListener("dispose",Zt),Ut=new Map,O.programs=Ut);let Nt=Ut.get(Lt);if(Nt!==void 0){if(O.currentProgram===Nt&&O.lightsStateVersion===St)return $r(b,Ct),Nt}else Ct.uniforms=Kt.getUniforms(b),b.onBuild(Y,Ct,f),b.onBeforeCompile(Ct,f),Nt=Kt.acquireProgram(Ct,Lt),Ut.set(Lt,Nt),O.uniforms=Ct.uniforms;const Ot=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=X.uniform),$r(b,Ct),O.needsLights=bl(b),O.lightsStateVersion=St,O.needsLights&&(Ot.ambientLightColor.value=Z.state.ambient,Ot.lightProbe.value=Z.state.probe,Ot.directionalLights.value=Z.state.directional,Ot.directionalLightShadows.value=Z.state.directionalShadow,Ot.spotLights.value=Z.state.spot,Ot.spotLightShadows.value=Z.state.spotShadow,Ot.rectAreaLights.value=Z.state.rectArea,Ot.ltc_1.value=Z.state.rectAreaLTC1,Ot.ltc_2.value=Z.state.rectAreaLTC2,Ot.pointLights.value=Z.state.point,Ot.pointLightShadows.value=Z.state.pointShadow,Ot.hemisphereLights.value=Z.state.hemi,Ot.directionalShadowMap.value=Z.state.directionalShadowMap,Ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ot.spotShadowMap.value=Z.state.spotShadowMap,Ot.spotLightMatrix.value=Z.state.spotLightMatrix,Ot.spotLightMap.value=Z.state.spotLightMap,Ot.pointShadowMap.value=Z.state.pointShadowMap,Ot.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Xt=Nt.getUniforms(),xe=Us.seqWithValue(Xt.seq,Ot);return O.currentProgram=Nt,O.uniformsList=xe,Nt}function $r(b,H){const Y=_t.get(b);Y.outputColorSpace=H.outputColorSpace,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Sl(b,H,Y,O,Z){H.isScene!==!0&&(H=it),Ft.resetTextureUnits();const Mt=H.fog,St=O.isMeshStandardMaterial?H.environment:null,Ct=A===null?f.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:on,Lt=(O.isMeshStandardMaterial?pe:le).get(O.envMap||St),Ut=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Nt=!!O.normalMap&&!!Y.attributes.tangent,Ot=!!Y.morphAttributes.position,Xt=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color,Ge=O.toneMapped?f.toneMapping:mn,Pn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ee=Pn!==void 0?Pn.length:0,Bt=_t.get(O),Xs=g.state.lights;if(K===!0&&(ut===!0||b!==C)){const Ae=b===C&&O.id===R;X.setState(O,b,Ae)}let he=!1;O.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Xs.state.version||Bt.outputColorSpace!==Ct||Z.isInstancedMesh&&Bt.instancing===!1||!Z.isInstancedMesh&&Bt.instancing===!0||Z.isSkinnedMesh&&Bt.skinning===!1||!Z.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==Lt||O.fog===!0&&Bt.fog!==Mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==X.numPlanes||Bt.numIntersection!==X.numIntersection)||Bt.vertexAlphas!==Ut||Bt.vertexTangents!==Nt||Bt.morphTargets!==Ot||Bt.morphNormals!==Xt||Bt.morphColors!==xe||Bt.toneMapping!==Ge||rt.isWebGL2===!0&&Bt.morphTargetsCount!==ee)&&(he=!0):(he=!0,Bt.__version=O.version);let Dn=Bt.currentProgram;he===!0&&(Dn=is(O,H,Z));let Zr=!1,Di=!1,qs=!1;const ve=Dn.getUniforms(),In=Bt.uniforms;if(wt.useProgram(Dn.program)&&(Zr=!0,Di=!0,qs=!0),O.id!==R&&(R=O.id,Di=!0),Zr||C!==b){if(ve.setValue(L,"projectionMatrix",b.projectionMatrix),rt.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,Di=!0,qs=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Ae=ve.map.cameraPosition;Ae!==void 0&&Ae.setValue(L,j.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ve.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Z.isSkinnedMesh)&&ve.setValue(L,"viewMatrix",b.matrixWorldInverse)}if(Z.isSkinnedMesh){ve.setOptional(L,Z,"bindMatrix"),ve.setOptional(L,Z,"bindMatrixInverse");const Ae=Z.skeleton;Ae&&(rt.floatVertexTextures?(Ae.boneTexture===null&&Ae.computeBoneTexture(),ve.setValue(L,"boneTexture",Ae.boneTexture,Ft),ve.setValue(L,"boneTextureSize",Ae.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ys=Y.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&rt.isWebGL2===!0)&&lt.update(Z,Y,Dn),(Di||Bt.receiveShadow!==Z.receiveShadow)&&(Bt.receiveShadow=Z.receiveShadow,ve.setValue(L,"receiveShadow",Z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(In.envMap.value=Lt,In.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Di&&(ve.setValue(L,"toneMappingExposure",f.toneMappingExposure),Bt.needsLights&&El(In,qs),Mt&&O.fog===!0&&Ee.refreshFogUniforms(In,Mt),Ee.refreshMaterialUniforms(In,O,U,G,J),Us.upload(L,Bt.uniformsList,In,Ft)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Us.upload(L,Bt.uniformsList,In,Ft),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ve.setValue(L,"center",Z.center),ve.setValue(L,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(L,"normalMatrix",Z.normalMatrix),ve.setValue(L,"modelMatrix",Z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ae=O.uniformsGroups;for(let js=0,wl=Ae.length;js<wl;js++)if(rt.isWebGL2){const Jr=Ae[js];vt.update(Jr,Dn),vt.bind(Jr,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function El(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function bl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,H,Y){_t.get(b.texture).__webglTexture=H,_t.get(b.depthTexture).__webglTexture=Y;const O=_t.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const Y=_t.get(b);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,Y=0){A=b,M=H,w=Y;let O=!0,Z=null,Mt=!1,St=!1;if(b){const Lt=_t.get(b);Lt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(L.FRAMEBUFFER,null),O=!1):Lt.__webglFramebuffer===void 0?Ft.setupRenderTarget(b):Lt.__hasExternalTextures&&Ft.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(St=!0);const Nt=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Z=Nt[H],Mt=!0):rt.isWebGL2&&b.samples>0&&Ft.useMultisampledRTT(b)===!1?Z=_t.get(b).__webglMultisampledFramebuffer:Z=Nt,F.copy(b.viewport),x.copy(b.scissor),E=b.scissorTest}else F.copy(S).multiplyScalar(U).floor(),x.copy(I).multiplyScalar(U).floor(),E=N;if(wt.bindFramebuffer(L.FRAMEBUFFER,Z)&&rt.drawBuffers&&O&&wt.drawBuffers(b,Z),wt.viewport(F),wt.scissor(x),wt.setScissorTest(E),Mt){const Lt=_t.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,Y)}else if(St){const Lt=_t.get(b.texture),Ut=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,Y||0,Ut)}R=-1},this.readRenderTargetPixels=function(b,H,Y,O,Z,Mt,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){wt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Lt=b.texture,Ut=Lt.format,Nt=Lt.type;if(Ut!==je&&$.convert(Ut)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===Yi&&(xt.has("EXT_color_buffer_half_float")||rt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Nt!==Kn&&$.convert(Nt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Wn&&(rt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-O&&Y>=0&&Y<=b.height-Z&&L.readPixels(H,Y,O,Z,$.convert(Ut),$.convert(Nt),Mt)}finally{const Lt=A!==null?_t.get(A).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(b,H,Y=0){const O=Math.pow(2,-Y),Z=Math.floor(H.image.width*O),Mt=Math.floor(H.image.height*O);Ft.setTexture2D(H,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,b.x,b.y,Z,Mt),wt.unbindTexture()},this.copyTextureToTexture=function(b,H,Y,O=0){const Z=H.image.width,Mt=H.image.height,St=$.convert(Y.format),Ct=$.convert(Y.type);Ft.setTexture2D(Y,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,b.x,b.y,Z,Mt,St,Ct,H.image.data):H.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,St,H.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,O,b.x,b.y,St,Ct,H.image),O===0&&Y.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,H,Y,O,Z=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=b.max.x-b.min.x+1,St=b.max.y-b.min.y+1,Ct=b.max.z-b.min.z+1,Lt=$.convert(O.format),Ut=$.convert(O.type);let Nt;if(O.isData3DTexture)Ft.setTexture3D(O,0),Nt=L.TEXTURE_3D;else if(O.isDataArrayTexture)Ft.setTexture2DArray(O,0),Nt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Ot=L.getParameter(L.UNPACK_ROW_LENGTH),Xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xe=L.getParameter(L.UNPACK_SKIP_PIXELS),Ge=L.getParameter(L.UNPACK_SKIP_ROWS),Pn=L.getParameter(L.UNPACK_SKIP_IMAGES),ee=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?L.texSubImage3D(Nt,Z,H.x,H.y,H.z,Mt,St,Ct,Lt,Ut,ee.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Nt,Z,H.x,H.y,H.z,Mt,St,Ct,Lt,ee.data)):L.texSubImage3D(Nt,Z,H.x,H.y,H.z,Mt,St,Ct,Lt,Ut,ee),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pn),Z===0&&O.generateMipmaps&&L.generateMipmap(Nt),wt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ft.setTextureCube(b,0):b.isData3DTexture?Ft.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ft.setTexture2DArray(b,0):Ft.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){M=0,w=0,A=null,wt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Yn:Xo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?At:on}}class Tp extends dl{}Tp.prototype.isWebGL1Renderer=!0;class Ti{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new Ti(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class es extends te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ul extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const go=new P,_o=new P,xo=new $t,br=new Hr,ws=new ts;class Ap extends te{constructor(t=new Se,e=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)go.fromBufferAttribute(e,s-1),_o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=go.distanceTo(_o);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;xo.copy(s).invert(),br.copy(t.ray).applyMatrix4(xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=new P,c=new P,u=new P,d=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let M=f,w=v-1;M<w;M+=p){const A=g.getX(M),R=g.getX(M+1);if(l.fromBufferAttribute(m,A),c.fromBufferAttribute(m,R),br.distanceSqToSegment(l,c,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let M=f,w=v-1;M<w;M+=p){if(l.fromBufferAttribute(m,M),c.fromBufferAttribute(m,M+1),br.distanceSqToSegment(l,c,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const vo=new P,Mo=new P;class Rp extends Ap{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vo.fromBufferAttribute(e,s),Mo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vo.distanceTo(Mo);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xr extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yo=new $t,Fr=new Hr,Ts=new ts,As=new P;class fl extends te{constructor(t=new Se,e=new Xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=r,t.ray.intersectsSphere(Ts)===!1)return;yo.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(yo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);As.fromBufferAttribute(u,m),So(As,m,h,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)As.fromBufferAttribute(u,g),So(As,g,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function So(i,t,e,n,s,r,a){const o=Fr.distanceSqToPoint(i);if(o<e){const h=new P;Fr.closestPointToPoint(i,h),h.applyMatrix4(n);const l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:a})}}class ns extends ye{constructor(t,e,n,s,r,a,o,h,l){super(t,e,n,s,r,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Je extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function v(){const w=new P,A=new P;let R=0;const C=(e-t)/n;for(let F=0;F<=r;F++){const x=[],E=F/r,B=E*(e-t)+t;for(let G=0;G<=s;G++){const U=G/s,z=U*h+o,W=Math.sin(z),S=Math.cos(z);A.x=B*W,A.y=-E*n+m,A.z=B*S,u.push(A.x,A.y,A.z),w.set(W,C,S).normalize(),d.push(w.x,w.y,w.z),p.push(U,1-E),x.push(g++)}_.push(x)}for(let F=0;F<s;F++)for(let x=0;x<r;x++){const E=_[x][F],B=_[x+1][F],G=_[x+1][F+1],U=_[x][F+1];c.push(E,B,U),c.push(B,G,U),R+=6}l.addGroup(f,R,0),f+=R}function M(w){const A=g,R=new Gt,C=new P;let F=0;const x=w===!0?t:e,E=w===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const B=g;for(let G=0;G<=s;G++){const z=G/s*h+o,W=Math.cos(z),S=Math.sin(z);C.x=x*S,C.y=m*E,C.z=x*W,u.push(C.x,C.y,C.z),d.push(0,E,0),R.x=W*.5+.5,R.y=S*.5*E+.5,p.push(R.x,R.y),g++}for(let G=0;G<s;G++){const U=A+G,z=B+G;w===!0?c.push(z,z+1,U):c.push(z+1,z,U),F+=3}l.addGroup(f,F,w===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ze extends Je{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ze(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vs extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),c(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new P,w=new P,A=new P;for(let R=0;R<e.length;R+=3)p(e[R+0],M),p(e[R+1],w),p(e[R+2],A),h(M,w,A,v)}function h(v,M,w,A){const R=A+1,C=[];for(let F=0;F<=R;F++){C[F]=[];const x=v.clone().lerp(w,F/R),E=M.clone().lerp(w,F/R),B=R-F;for(let G=0;G<=B;G++)G===0&&F===R?C[F][G]=x:C[F][G]=x.clone().lerp(E,G/B)}for(let F=0;F<R;F++)for(let x=0;x<2*(R-F)-1;x++){const E=Math.floor(x/2);x%2===0?(d(C[F][E+1]),d(C[F+1][E]),d(C[F][E])):(d(C[F][E+1]),d(C[F+1][E+1]),d(C[F+1][E]))}}function l(v){const M=new P;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(v),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function c(){const v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const w=m(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;a.push(w,1-A)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){const M=a[v+0],w=a[v+2],A=a[v+4],R=Math.max(M,w,A),C=Math.min(M,w,A);R>.9&&C<.1&&(M<.2&&(a[v+0]+=1),w<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,M){const w=v*3;M.x=t[w+0],M.y=t[w+1],M.z=t[w+2]}function g(){const v=new P,M=new P,w=new P,A=new P,R=new Gt,C=new Gt,F=new Gt;for(let x=0,E=0;x<r.length;x+=9,E+=6){v.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),w.set(r[x+6],r[x+7],r[x+8]),R.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),F.set(a[E+4],a[E+5]),A.copy(v).add(M).add(w).divideScalar(3);const B=m(A);_(R,E+0,v,B),_(C,E+2,M,B),_(F,E+4,w,B)}}function _(v,M,w,A){A<0&&v.x===1&&(a[M]=v.x-1),w.x===0&&w.z===0&&(a[M]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.vertices,t.indices,t.radius,t.details)}}const Rs=new P,Cs=new P,wr=new P,Ls=new ze;class Cp extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Is*e),a=t.getIndex(),o=t.getAttribute("position"),h=a?a.count:o.count,l=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<h;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:f}=Ls;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ls.getNormal(wr),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const M=(v+1)%3,w=u[v],A=u[M],R=Ls[c[v]],C=Ls[c[M]],F=`${w}_${A}`,x=`${A}_${w}`;x in d&&d[x]?(wr.dot(d[x].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(C.x,C.y,C.z)),d[x]=null):F in d||(d[F]={index0:l[v],index1:l[M],normal:wr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Rs.fromBufferAttribute(o,_),Cs.fromBufferAttribute(o,m),p.push(Rs.x,Rs.y,Rs.z),p.push(Cs.x,Cs.y,Cs.z)}this.setAttribute("position",new ie(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ki extends Vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ki(t.radius,t.detail)}}class Li extends Vs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Li(t.radius,t.detail)}}class Pi extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],h=[],l=[],c=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(u,c).normalize(),h.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(_,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pl extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Eo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const Pp=new Lp;class ml{constructor(t){this.manager=t!==void 0?t:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Dp extends ml{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Eo.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ji("img");function h(){c(),Eo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){c(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ip extends ml{constructor(t){super(t)}load(t,e,n,s){const r=new ye,a=new Dp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ws extends te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Tr=new $t,bo=new P,wo=new P;class qr{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bo.setFromMatrixPosition(t.matrixWorld),e.position.copy(bo),wo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wo),e.updateMatrixWorld(),Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Up extends qr{constructor(){super(new fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Fs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gl extends Ws{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Up}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const To=new $t,Oi=new P,Ar=new P;class Np extends qr{constructor(){super(new fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Oi),Ar.copy(n.position),Ar.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ar),n.updateMatrixWorld(),s.makeTranslation(-Oi.x,-Oi.y,-Oi.z),To.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To)}}class Ai extends Ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fp extends qr{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yr extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $i extends Ws{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Br);const Ao="tei_settings_v1",Wi={low:{resolution:"240",renderScale:1,pixelation:1,textureQuality:"low",shadowQuality:"off",fog:1.25,aa:!1,fpsLimit:30,crt:.9,distortion:.6},medium:{resolution:"360",renderScale:1,pixelation:.6,textureQuality:"medium",shadowQuality:"low",fog:1,aa:!1,fpsLimit:60,crt:.7,distortion:.4},high:{resolution:"480",renderScale:1,pixelation:.3,textureQuality:"high",shadowQuality:"medium",fog:.85,aa:!0,fpsLimit:60,crt:.5,distortion:.25}},Ro={preset:"medium",...Wi.medium,brightness:1,sensitivity:1,fullscreen:!1,master:.8,music:.6,sfx:.9,ambient:.7,mute:!1};class Op{constructor(){this.data={...Ro},this.listeners=new Set;try{const t=localStorage.getItem(Ao);t&&(this.data={...Ro,...JSON.parse(t)})}catch(t){console.warn("settings load failed",t)}}get(t){return this.data[t]}set(t,e){this.data[t]!==e&&(this.data[t]=e,t in Wi.low&&t!=="preset"&&(this.data.preset="custom"),this.commit(t))}applyPreset(t){Wi[t]&&(Object.assign(this.data,Wi[t],{preset:t}),this.commit("preset"))}commit(t){try{localStorage.setItem(Ao,JSON.stringify(this.data))}catch{}this.listeners.forEach(e=>e(t,this.data))}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}}const Ps="tei_save_",Co="tei_meta_v1",zp=["1","2","3"];class kp{save(t,e){const n={v:1,at:Date.now(),...e};try{return localStorage.setItem(Ps+t,JSON.stringify(n)),localStorage.setItem(Ps+"last",String(t)),!0}catch(s){return console.warn("save failed",s),!1}}load(t){try{const e=localStorage.getItem(Ps+t);return e?JSON.parse(e):null}catch{return null}}has(t){return!!this.load(t)}last(){const t=localStorage.getItem(Ps+"last");return t&&this.has(t)?t:this.has("auto")?"auto":null}anySave(){return this.last()!==null||zp.some(t=>this.has(t))}describe(t){const e=this.load(t);if(!e)return null;const n=new Date(e.at);return{room:e.roomName||e.room,lives:e.lives,crystals:e.crystals,time:Math.floor((e.playTime||0)/60),date:n.toLocaleString()}}meta(){const t={endings:{good:!1,bad:!1},docs:[],finished:!1};try{const e=localStorage.getItem(Co);return e?{...t,...JSON.parse(e)}:t}catch{return t}}setMeta(t){try{localStorage.setItem(Co,JSON.stringify(t))}catch{}}}class Bp{constructor(t){this.s=t,this.ctx=null,this.musicTimer=null,this.ambientNodes=null,this.creakTimer=null,this.theme=null,this.step=0,t.onChange(()=>this.refresh())}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination),this.musicBus=e.createGain(),this.sfxBus=e.createGain(),this.ambBus=e.createGain(),[this.musicBus,this.sfxBus,this.ambBus].forEach(a=>a.connect(this.master)),this.delay=e.createDelay(1),this.delay.delayTime.value=.34;const n=e.createGain();n.gain.value=.38;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=1800,this.delay.connect(s),s.connect(n),n.connect(this.delay),s.connect(this.musicBus),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const r=this.noiseBuf.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.refresh()}refresh(){if(!this.ctx)return;const t=this.s,e=this.ctx.currentTime,n=t.get("mute")?0:1;this.master.gain.setTargetAtTime(t.get("master")*n,e,.05),this.musicBus.gain.setTargetAtTime(t.get("music"),e,.05),this.sfxBus.gain.setTargetAtTime(t.get("sfx"),e,.05),this.ambBus.gain.setTargetAtTime(t.get("ambient"),e,.05)}get ok(){return!!this.ctx&&this.ctx.state==="running"}tone(t,e,{type:n="square",vol:s=.15,slide:r=0,bus:a="sfxBus",delay:o=0,send:h=!1}={}){if(!this.ok)return;const l=this.ctx,c=l.currentTime+o,u=l.createOscillator(),d=l.createGain();u.type=n,u.frequency.setValueAtTime(t,c),r&&u.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),c+e),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(s,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+e),u.connect(d),d.connect(this[a]),h&&d.connect(this.delay),u.start(c),u.stop(c+e+.05)}noise(t,{vol:e=.2,freq:n=1e3,q:s=1,type:r="lowpass",bus:a="sfxBus",delay:o=0}={}){if(!this.ok)return;const h=this.ctx,l=h.currentTime+o,c=h.createBufferSource();c.buffer=this.noiseBuf;const u=h.createBiquadFilter();u.type=r,u.frequency.value=n,u.Q.value=s;const d=h.createGain();d.gain.setValueAtTime(e,l),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(u),u.connect(d),d.connect(this[a]),c.start(l,Math.random()),c.stop(l+t+.05)}select(){this.tone(520,.07,{type:"square",vol:.08})}confirm(){this.tone(330,.08,{vol:.1}),this.tone(660,.12,{vol:.1,delay:.07})}back(){this.tone(300,.1,{vol:.08,slide:-120})}footstep(t){this.noise(.07,{vol:t?.22:.13,freq:t?700:450})}door(){this.noise(.5,{vol:.25,freq:260,q:4}),this.tone(90,.5,{type:"sawtooth",vol:.08,slide:40})}locked(){this.tone(120,.08,{type:"square",vol:.15}),this.tone(100,.1,{type:"square",vol:.15,delay:.1})}flash(){this.noise(.03,{vol:.2,freq:3e3,type:"highpass"})}pickup(){this.tone(660,.08,{type:"triangle",vol:.14}),this.tone(990,.14,{type:"triangle",vol:.14,delay:.08})}crystal(){[880,1175,1568].forEach((t,e)=>this.tone(t,.25,{type:"sine",vol:.12,delay:e*.07,send:!0}))}shoot(){this.noise(.18,{vol:.35,freq:1500}),this.tone(900,.2,{type:"sawtooth",vol:.12,slide:-700})}click(){this.tone(180,.04,{vol:.1})}hit(){this.noise(.25,{vol:.35,freq:400}),this.tone(110,.3,{type:"sawtooth",vol:.2,slide:-60})}growl(){this.tone(70,.9,{type:"sawtooth",vol:.18,slide:-30}),this.noise(.8,{vol:.1,freq:200})}stinger(){[220,233,311].forEach(t=>this.tone(t,1.4,{type:"sawtooth",vol:.09,slide:-20,send:!0})),this.noise(.9,{vol:.15,freq:5e3,type:"highpass"})}heartbeat(){this.tone(55,.12,{type:"sine",vol:.4}),this.tone(50,.14,{type:"sine",vol:.35,delay:.17})}whisper(){this.noise(1.2,{vol:.08,freq:2500,q:6,type:"bandpass"})}boot(){[196,294,392,587,784].forEach((t,e)=>this.tone(t,1.6,{type:"sine",vol:.09,delay:e*.18,send:!0}))}thump(){this.tone(45,1.4,{type:"sine",vol:.5,slide:-15}),this.noise(1.2,{vol:.2,freq:120})}tape(){this.noise(2.5,{vol:.1,freq:3500,q:.6,type:"highpass",bus:"ambBus"})}startAmbient(){if(!this.ok||this.ambientNodes)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=380,n.Q.value=1.2;const s=t.createGain();s.gain.value=.07;const r=t.createOscillator(),a=t.createGain();r.frequency.value=.12,a.gain.value=.05,r.connect(a),a.connect(s.gain),r.start(),e.connect(n),n.connect(s),s.connect(this.ambBus),e.start();const o=t.createOscillator(),h=t.createOscillator(),l=t.createGain();o.type=h.type="sawtooth",o.frequency.value=55,h.frequency.value=55.7,l.gain.value=.025;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=160,o.connect(c),h.connect(c),c.connect(l),l.connect(this.ambBus),o.start(),h.start(),this.ambientNodes=[e,r,o,h];const u=()=>{if(!this.ambientNodes)return;const d=Math.random();d<.4?this.tone(140+Math.random()*60,.7,{type:"sawtooth",vol:.05,slide:40,bus:"ambBus"}):d<.7?this.noise(.4,{vol:.08,freq:220,bus:"ambBus"}):this.whisper(),this.creakTimer=setTimeout(u,6e3+Math.random()*12e3)};this.creakTimer=setTimeout(u,5e3)}stopAmbient(){this.ambientNodes&&(this.ambientNodes.forEach(t=>{try{t.stop()}catch{}}),this.ambientNodes=null,clearTimeout(this.creakTimer))}startMusic(t="menu"){if(!this.ok||this.theme===t&&this.musicTimer)return;this.stopMusic(),this.theme=t,this.step=0;const e={menu:{root:110,notes:[0,3,7,10,12,7,3,10],bpm:52,wave:"triangle"},game:{root:82.4,notes:[0,7,3,12,1,8,3,10],bpm:44,wave:"sine"},final:{root:73.4,notes:[0,1,6,7,12,13,6,1],bpm:70,wave:"sawtooth"},credits:{root:110,notes:[0,7,12,7,3,10,15,10],bpm:56,wave:"triangle"}},n=e[t]||e.menu,s=60/n.bpm,r=()=>{const a=n.notes[this.step%n.notes.length],o=n.root*Math.pow(2,a/12);this.tone(o,s*1.6,{type:n.wave,vol:t==="game"?.05:.07,bus:"musicBus",send:!0}),this.step%8===0&&this.tone(n.root/2,s*6,{type:"sine",vol:.09,bus:"musicBus"}),this.step++};r(),this.musicTimer=setInterval(r,s*1e3)}stopMusic(){clearInterval(this.musicTimer),this.musicTimer=null,this.theme=null}}const _l={uSnap:{value:0}};function xl(i){return i.onBeforeCompile=t=>{t.uniforms.uSnap=_l.uSnap,t.vertexShader=`uniform float uSnap;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
       if (uSnap > 0.5 && gl_Position.w > 0.2) {
         vec2 g = vec2(uSnap, uSnap * 0.75);
         gl_Position.xy = floor(gl_Position.xy / gl_Position.w * g + 0.5) / g * gl_Position.w;
       }`)},i.customProgramCacheKey=()=>"retro-snap",i}const re=(i={})=>xl(new pl({dithering:!0,flatShading:!0,...i})),De=(i={})=>xl(new Ln({dithering:!0,...i}));function Gp(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const en=(i,t,e,n,s)=>{for(let r=0;r<s;r++)i.fillStyle=n[e()*n.length|0],i.fillRect(e()*t|0,e()*t|0,Math.max(1,t/32),Math.max(1,t/32))},Lo={wood:(i,t,e)=>{i.fillStyle="#4b2f1b",i.fillRect(0,0,t,t),en(i,t,e,["#3a2312","#5c3a22","#2e1a0c"],t*3),i.fillStyle="#20110a";for(let n=0;n<4;n++)i.fillRect(0,n*t/4,t,Math.max(1,t/32));i.fillRect(t/2,0,Math.max(1,t/32),t/4)},darkwood:(i,t,e)=>{i.fillStyle="#2a1a10",i.fillRect(0,0,t,t),en(i,t,e,["#1c1008","#3a2616"],t*3),i.fillStyle="#120a05",i.fillRect(0,0,Math.max(1,t/16),t)},wall:(i,t,e)=>{i.fillStyle="#3a1828",i.fillRect(0,0,t,t),i.fillStyle="#4a2236";for(let n=0;n<4;n++)i.fillRect(n*t/4,0,t/8,t);i.fillStyle="#6a3a4c";for(let n=0;n<4;n++)for(let s=0;s<4;s++)i.fillRect(n*t/4+t/16,s*t/4+t/16,Math.max(1,t/32),Math.max(1,t/32));en(i,t,e,["#2a0f1c","#44202e"],t*2),i.fillStyle="#1a0c10",i.fillRect(0,t-t/8,t,t/8)},carpet:(i,t,e)=>{i.fillStyle="#6a0e1a",i.fillRect(0,0,t,t),en(i,t,e,["#520a14","#7e1424"],t*4),i.strokeStyle="#b8902a",i.lineWidth=Math.max(1,t/32),i.beginPath(),i.moveTo(t/2,t*.1),i.lineTo(t*.9,t/2),i.lineTo(t/2,t*.9),i.lineTo(t*.1,t/2),i.closePath(),i.stroke(),i.fillStyle="#b8902a",i.fillRect(t/2-1,t/2-1,Math.max(2,t/16),Math.max(2,t/16))},stone:(i,t,e)=>{i.fillStyle="#44444c",i.fillRect(0,0,t,t),en(i,t,e,["#33333a","#55555e","#2a2a30"],t*4),i.fillStyle="#18181c",i.fillRect(0,0,t,Math.max(1,t/24)),i.fillRect(0,t/2,t,Math.max(1,t/24)),i.fillRect(0,0,Math.max(1,t/24),t/2),i.fillRect(t/2,t/2,Math.max(1,t/24),t/2)},grass:(i,t,e)=>{i.fillStyle="#1b3518",i.fillRect(0,0,t,t),en(i,t,e,["#27502a","#10240f","#2f5a2c","#33301a"],t*6)},brick:(i,t,e)=>{i.fillStyle="#4e2a22",i.fillRect(0,0,t,t),en(i,t,e,["#5e3328","#3c1f19"],t*3),i.fillStyle="#1e1210";for(let n=0;n<4;n++){i.fillRect(0,n*t/4,t,Math.max(1,t/32));const s=n%2?0:t/2;i.fillRect(s,n*t/4,Math.max(1,t/32),t/4)}},plaster:(i,t,e)=>{i.fillStyle="#2a232e",i.fillRect(0,0,t,t),en(i,t,e,["#1e1822","#352d3a"],t*3)},tile:(i,t,e)=>{i.fillStyle="#2d2d36",i.fillRect(0,0,t,t),i.fillStyle="#23232b",i.fillRect(0,0,t/2,t/2),i.fillRect(t/2,t/2,t/2,t/2),en(i,t,e,["#18181e","#3a3a44"],t*3)},metal:(i,t,e)=>{i.fillStyle="#4a4d55",i.fillRect(0,0,t,t),en(i,t,e,["#3a3d44","#5c606a"],t*2),i.fillStyle="#22242a",i.fillRect(0,t/2,t,Math.max(1,t/32))},iron:(i,t)=>{i.fillStyle="#111114",i.fillRect(0,0,t,t),i.fillStyle="#1e1e24",i.fillRect(t/4,0,Math.max(1,t/16),t)}},vl={quality:"medium",cache:{},size(){return{low:32,medium:64,high:128}[this.quality]||64},get(i){if(this.cache[i])return this.cache[i].tex;const t=document.createElement("canvas"),e=new ns(t);return e.wrapS=e.wrapT=Ns,e.magFilter=e.minFilter=Qt,e.generateMipmaps=!1,e.colorSpace=At,this.cache[i]={canvas:t,tex:e},this.draw(i),e},draw(i){const{canvas:t,tex:e}=this.cache[i],n=this.size();t.width=t.height=n;const s=t.getContext("2d");s.imageSmoothingEnabled=!1;let r=0;for(const a of i)r=r*31+a.charCodeAt(0)|0;(Lo[i]||Lo.plaster)(s,n,Gp(r)),e.dispose(),e.needsUpdate=!0},setQuality(i){i!==this.quality&&(this.quality=i,Object.keys(this.cache).forEach(t=>this.draw(t)))}},gn={};function ft(i,t=16777215,e={}){const n=i+t+JSON.stringify(e);return gn[n]||(gn[n]=re({map:vl.get(i),color:t,...e})),gn[n]}function Dt(i,t={}){const e="s"+i+JSON.stringify(t);return gn[e]||(gn[e]=re({color:i,...t})),gn[e]}function ke(i,t={}){const e="g"+i+JSON.stringify(t);return gn[e]||(gn[e]=De({color:i,...t})),gn[e]}class Hp{constructor(t,e){this.app=t,this.container=e,this.scene=null,this.renderer=null,this.last=performance.now(),this.acc=0,this.time=0,this.running=!1,this.makeRenderer(),t.settings.onChange(n=>this.applySettings(n)),window.addEventListener("resize",()=>this.resize()),document.addEventListener("fullscreenchange",()=>{const n=!!document.fullscreenElement;t.settings.get("fullscreen")!==n&&t.settings.set("fullscreen",n)}),this.applySettings("all")}makeRenderer(){const t=this.renderer;this.renderer=new dl({antialias:!!this.app.settings.get("aa"),powerPreference:"high-performance"}),this.renderer.useLegacyLights=!0,this.renderer.setClearColor(0),this.renderer.shadowMap.type=Rl,this.container.replaceChildren(this.renderer.domElement),t&&t.dispose(),this.resize()}resize(){const t=this.app.settings,e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight,s=t.get("resolution"),r=t.get("renderScale"),a=Math.max(120,Math.round((s==="native"?n:parseInt(s,10))*r)),o=Math.round(a*(e/n));this.renderer.setPixelRatio(1),this.renderer.setSize(o,a,!1),this.scene&&this.scene.camera&&(this.scene.camera.aspect=e/n,this.scene.camera.updateProjectionMatrix())}applySettings(t){const e=this.app.settings,n=document.documentElement.style;(t==="aa"||t==="preset")&&this.renderer.capabilities&&this.app.settings.get("aa")!==this.renderer.getContext().getContextAttributes().antialias&&this.makeRenderer(),n.setProperty("--crt",e.get("crt")),n.setProperty("--distort",e.get("distortion")),n.setProperty("--bright",e.get("brightness")),vl.setQuality(e.get("textureQuality"));const s=e.get("pixelation");_l.uSnap.value=s<.02?0:Math.round(480-s*370);const r=e.get("shadowQuality")!=="off";this.renderer.shadowMap.enabled!==r&&(this.renderer.shadowMap.enabled=r,this.scene&&this.scene.scene.traverse(a=>{a.material&&[].concat(a.material).forEach(o=>{o.needsUpdate=!0})})),e.get("fullscreen")&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.().catch(()=>{}),!e.get("fullscreen")&&document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{}),this.resize(),this.scene&&this.scene.onSettings&&this.scene.onSettings(t)}setScene(t){this.scene=t,this.resize()}start(){this.running||(this.running=!0,requestAnimationFrame(t=>this.loop(t)))}loop(t){requestAnimationFrame(r=>this.loop(r));const e=Math.min(.1,(t-this.last)/1e3);this.last=t,this.acc+=e;const n=this.app.settings.get("fpsLimit");if(n>0&&this.acc<1/n-.002)return;const s=Math.min(this.acc,.05);if(this.acc=0,this.time+=s,this.scene)try{this.scene.update(s,this.time),this.renderer.render(this.scene.scene,this.scene.camera)}catch(r){this.app.fatal(r)}}}const Ie=()=>document.getElementById("ui");function Q(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}class jr{constructor(t,e,{className:n="pm",onEsc:s}={}){this.app=t,this.items=e,this.sel=e.findIndex(r=>!r.disabled),this.sel<0&&(this.sel=0),this.onEsc=s,this.el=Q("ul",n),this.lis=e.map((r,a)=>{const o=Q("li",r.disabled?"dis":"",r.label);return o.addEventListener("mouseenter",()=>this.setSel(a)),o.addEventListener("click",()=>this.choose(a)),this.el.appendChild(o),o}),this.setSel(this.sel,!0),this._k=r=>this.key(r)}setSel(t,e){this.items[t].disabled||(this.sel=t,this.lis.forEach((n,s)=>n.classList.toggle("sel",s===t)),e||this.app.audio.select())}choose(t){const e=this.items[t];if(e.disabled){this.app.audio.locked();return}this.app.audio.confirm(),e.action&&e.action()}key(t){const e=this.items.length,n=s=>{let r=this.sel;for(let a=0;a<e&&(r=(r+s+e)%e,!!this.items[r].disabled);a++);this.setSel(r)};if(t.code==="ArrowUp"||t.code==="KeyW")n(-1);else if(t.code==="ArrowDown"||t.code==="KeyS")n(1);else if(t.code==="Enter"||t.code==="Space"||t.code==="KeyE")this.choose(this.sel);else if(t.code==="Escape"&&this.onEsc)this.onEsc();else return;t.preventDefault(),t.stopPropagation()}attach(){return document.addEventListener("keydown",this._k),this}detach(){document.removeEventListener("keydown",this._k)}}function _n(i,t,e={}){const n=Q("div","overlay"),s=Q("div","panel");t&&s.appendChild(Q("h3","",t)),n.appendChild(s),Ie().appendChild(n);const r={ov:n,panel:s,close(){document.removeEventListener("keydown",r._k,!0),n.remove(),e.onClose&&e.onClose()}};return r._k=a=>{a.code==="Escape"&&!e.noEsc&&(a.preventDefault(),a.stopPropagation(),i.audio.back(),r.close())},document.addEventListener("keydown",r._k,!0),r}function Kr(i,t,e,n){const s=_n(i,null,{noEsc:!0});s.panel.appendChild(Q("p","mid",t)),s.panel.firstChild.style.marginBottom="12px";const r=Q("div","btns"),a=Q("button","btn","YES"),o=Q("button","btn","NO"),h=c=>{document.removeEventListener("keydown",l),s.close(),c&&c()};a.onclick=()=>{i.audio.confirm(),h(e)},o.onclick=()=>{i.audio.back(),h(n)};const l=c=>{c.code==="KeyY"||c.code==="Enter"?(c.preventDefault(),c.stopPropagation(),a.click()):(c.code==="KeyN"||c.code==="Escape")&&(c.preventDefault(),c.stopPropagation(),o.click())};document.addEventListener("keydown",l),r.append(o,a),s.panel.appendChild(r),o.focus()}function Os(i,t,e,n){const s=_n(i,t==="save"?"SAVE GAME":"LOAD GAME",{onClose:n}),r=Q("div","slots");s.panel.appendChild(r),(t==="save"?["1","2","3"]:["auto","1","2","3"]).forEach(l=>{const c=i.saves.describe(l),u=Q("div","slot"+(!c&&t==="load"?" lock":""),`<b>${l==="auto"?"AUTOSAVE":"SLOT "+l}</b>`+(c?`<small>${c.room} — Lives ${c.lives} — Crystals ${c.crystals} — ${c.time} min<br>${c.date}</small>`:"<small>— EMPTY —</small>"));u.onclick=()=>{if(!c&&t==="load"){i.audio.locked();return}i.audio.confirm(),t==="save"&&c?(s.ov.style.display="none",Kr(i,`Overwrite slot ${l}?`,()=>{s.ov.remove(),document.removeEventListener("keydown",s._k,!0),e(l)},()=>{s.ov.style.display=""})):(s.close=()=>{},s.ov.remove(),document.removeEventListener("keydown",s._k,!0),e(l))},r.appendChild(u)});const o=Q("div","btns"),h=Q("button","btn","BACK");h.onclick=()=>{i.audio.back(),s.close()},o.appendChild(h),s.panel.appendChild(o)}function Vp(){const i=Q("canvas");i.width=128,i.height=96,i.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;opacity:0";const t=i.getContext("2d"),e=t.createImageData(128,96);return i.draw=()=>{for(let n=0;n<e.data.length;n+=4){const s=Math.random()*255;e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}t.putImageData(e,0,0)},i}class Wp{constructor(t){this.app=t,this.scene=new es,this.camera=new fe(45,1.6,.1,50),this.camera.position.set(0,0,5.2),this.t=0,this.fired={},this.done=!1}enter(){const t=this.app;this.tex=new Ip().load("images/lost-disc-logo.jpg"),this.tex.colorSpace=At,this.tex.magFilter=this.tex.minFilter=Qt,this.mat=new Ln({map:this.tex,transparent:!0,opacity:0,color:0}),this.logo=new Et(new xn(3.6,3.6),this.mat),this.scene.add(this.logo),this.ui=Q("div","full"),this.ui.style.pointerEvents="none",this.noise=Vp(),this.cap=Q("div","px mid","THE LOST DISC ENTERTAINMENT"),this.cap.style.cssText="position:absolute;bottom:12%;left:0;right:0;text-align:center;color:#b9a6d8;opacity:0;letter-spacing:6px",this.hint=Q("div","small","ENTER — skip"),this.hint.style.cssText="position:absolute;right:14px;bottom:10px;opacity:.5",this.ui.append(this.noise,this.cap,this.hint),Ie().appendChild(this.ui),this.keyH=e=>{this.t>.4&&["Enter","Space","Escape"].includes(e.code)&&this.finish()},document.addEventListener("keydown",this.keyH),this.ui.style.pointerEvents="auto",this.ui.onclick=()=>this.t>.4&&this.finish(),t.audio.stopMusic()}finish(){this.done||(this.done=!0,this.app.goto("startup"))}update(t,e){this.t+=t;const n=this.t,s=this.app.audio,r=(d,p,g)=>Math.min(1,Math.max(0,(d-p)/(g-p))),a=1-r(n,.2,2.2)+(n>6.6?r(n,6.6,7.2)*.5:0);this.noise.style.opacity=(a*.55).toFixed(2),a>.01&&this.noise.draw(),n>.8&&!this.fired.tape&&(this.fired.tape=1,s.tape()),this.cap.style.opacity=r(n,1.2,2.6)*(1-r(n,6.3,7)),n>2.6&&!this.fired.thump&&(this.fired.thump=1,s.thump(),s.stinger());const o=r(n,2.6,4.2),h=1-r(n,6.4,7.4);this.mat.opacity=o*h;const l=.5+.5*Math.sin(n*2.2),c=new It().setRGB(.55+.45*l,.4+.2*(1-l),.7+.3*(1-l)).multiplyScalar(o);this.mat.color.copy(c),this.logo.rotation.y=Math.sin(n*.8)*.45,this.logo.rotation.x=Math.sin(n*.5)*.08;const u=.7+.3*o;this.logo.scale.setScalar(u),this.logo.position.y=.2,n>7.6&&this.finish()}exit(){document.removeEventListener("keydown",this.keyH),this.ui.remove(),this.tex.dispose(),this.mat.dispose()}}class Xp{constructor(t){this.app=t,this.scene=new es,this.scene.background=new It(197130),this.camera=new fe(50,1.6,.1,50),this.camera.position.set(0,0,7),this.t=0,this.done=!1,this.booted=!1}enter(){const t=this.app.audio;this.group=new Rt,this.scene.add(this.group);const e=(r,a)=>{const o=new Rp(new Cp(new Ue(r,r,r)),new ul({color:a}));return this.group.add(o),o};this.cubes=[e(1.2,10898943),e(2,4881151),e(2.8,8007632)],this.core=new Et(new Li(.55,0),new pl({color:12946431,flatShading:!0,emissive:5906336})),this.group.add(this.core);const n=new Ai(9059296,3,14);n.position.set(3,2,4);const s=new Ai(2775807,3,14);s.position.set(-3,-2,4),this.scene.add(n,s,new $i(2234948,1.2)),this.l1=n,this.l2=s,this.ui=Q("div","full"),this.ui.style.pointerEvents="none",this.ui.innerHTML='<div class="px big" id="su-t" style="margin-top:42vh;color:#c8b4ff;opacity:0;letter-spacing:10px">LDE·32</div><div class="small px" id="su-s" style="opacity:0;margin-top:8px">NOW STARTING SYSTEM...</div><div class="loadbar" id="su-b" style="opacity:0"><div></div></div>',Ie().appendChild(this.ui),this.tt=this.ui.querySelector("#su-t"),this.ts=this.ui.querySelector("#su-s"),this.tb=this.ui.querySelector("#su-b"),this.keyH=r=>{["Enter","Space","Escape"].includes(r.code)&&this.finish()},document.addEventListener("keydown",this.keyH),this.ui.style.pointerEvents="auto",this.ui.onclick=()=>this.finish(),t.boot()}finish(){this.done||(this.done=!0,this.app.goto("menu"))}update(t){this.t+=t;const e=this.t,n=(r,a,o)=>Math.min(1,Math.max(0,(r-a)/(o-a)));this.group.rotation.y=e*.9,this.group.rotation.x=Math.sin(e*.7)*.4,this.cubes.forEach((r,a)=>{const o=n(e,.3+a*.35,1.6+a*.35);r.scale.setScalar(.2+.8*o),r.rotation.y=e*(a+1)*.4,r.rotation.z=e*(3-a)*.25}),this.core.rotation.x=e*1.5,this.core.rotation.y=e,this.core.scale.setScalar(.5+.5*n(e,.2,1.2)+Math.sin(e*5)*.04),this.l1.intensity=2.5+Math.sin(e*3)*1.2,this.l2.intensity=2.5+Math.cos(e*2.4)*1.2;const s=document.getElementById("stage");s.style.transform=e<1.2?`translateX(${(Math.random()-.5)*14*(1.2-e)}px)`:"",this.tt.style.opacity=n(e,1.4,2.4),this.ts.style.opacity=n(e,2.2,3),this.tb.style.opacity=n(e,2.4,3),this.tb.firstChild.style.width=Math.floor(n(e,2.6,6.2)*20)*5+"%",e>6.6&&(s.style.transform="",this.finish())}exit(){document.removeEventListener("keydown",this.keyH),document.getElementById("stage").style.transform="",this.ui.remove()}}function qp(i){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d");e.fillStyle="#17121f",e.fillRect(0,0,32,32),e.fillStyle=i?"#d9a0ff":"#b58be0",e.fillRect(15,3,2,26);for(let s=0;s<5;s++)e.fillRect(6+s,6+s*4,20-s*2,2);e.fillStyle=i?"#6a1fb0":"#7a3fc0",e.fillRect(2,0,3,32),e.fillRect(27,0,3,32);const n=new ns(t);return n.magFilter=n.minFilter=Qt,n.colorSpace=At,n}function Yp(){const i=document.createElement("canvas");i.width=32,i.height=32;const t=i.getContext("2d");t.fillStyle="#f4eaff",t.fillRect(0,0,32,32),t.strokeStyle="#7a1fd0",t.lineWidth=2,t.beginPath();for(let n=0;n<18;n+=.2){const s=n*.85;t.lineTo(16+Math.cos(n)*s,16+Math.sin(n)*s)}t.stroke();const e=new ns(i);return e.magFilter=e.minFilter=Qt,e.colorSpace=At,e}const ue=(i,t,e,n,s=0,r=0,a=0)=>{const o=new Et(new Ue(i,t,e),n);return o.position.set(s,r,a),o},bn=(i,t,e,n,s,r,a,o=0,h=0)=>{const l=new Et(new Ze(i,t,e),n);return l.position.set(s,r,a),l.rotation.x=o,l.rotation.z=h,l};function Xn({possessed:i=!1}={}){const t=i,e=re({color:t?3807838:15763996}),n=re({color:t?6965902:16048832}),s=re({color:t?1380382:1841698}),r=re({color:t?1708584:2103852}),a=re({color:t?8007632:9064400}),o=re({color:13158612}),h=re({color:1381658}),l=re({color:13619160}),c=De(t?{map:Yp()}:{color:3129162}),u=qp(t),d=re({map:u}),p=re({map:u,color:11184810}),g=new Rt,_=new Rt;g.add(_);const m={};for(const B of[-1,1]){const G=new Rt;G.position.set(B*.26,.95,0),G.add(ue(.46,.85,.5,s,0,-.42,0)),G.add(ue(.4,.22,.62,h,0,-.84,.08)),G.add(ue(.42,.08,.66,l,0,-.93,.08)),G.add(ue(.05,.4,.05,t?De({color:13607167}):re({color:14211296}),B*.2,-.4,.26)),_.add(G),m[B<0?"legR":"legL"]=G}const f=new Et(new Ue(1,.85,.62),[r,r,r,r,d,p]);f.position.set(0,1.38,0),_.add(f),m.torso=f,_.add(ue(1.04,.14,.66,r,0,.98,0));for(const B of[-1,1]){const G=new Rt;if(G.position.set(B*.65,1.7,0),G.add(ue(.34,.8,.36,r,0,-.38,0)),G.add(ue(.1,.6,.02,a,B*0,-.36,.19)),G.add(ue(.28,.24,.28,e,0,-.86,.02)),t)for(let U=-1;U<=1;U++)G.add(bn(.035,.28,3,o,U*.08,-1.08,.1,Math.PI/2.6,0));_.add(G),m[B<0?"armR":"armL"]=G}const v=new Rt;v.position.set(0,2.12,0),_.add(v),m.head=v,v.add(ue(1,.8,.82,e,0,0,0)),v.add(ue(.56,.34,.42,n,0,-.18,.36)),v.add(ue(.14,.1,.1,s,0,-.07,.58)),v.add(ue(.46,.5,.08,n,0,-.1,.4));for(const B of[-1,1])v.add(ue(.2,t?.26:.22,.05,c,B*.26,.08,.42)),v.add(ue(.24,.05,.05,s,B*.26,t?.24:.2,.43)),v.add(bn(.3,.8,4,e,B*.34,.8,-.05,0,-B*.15)),v.add(bn(.18,.55,4,n,B*.33,.74,.03,0,-B*.15)),v.add(ue(.12,.5,.5,s,B*.52,-.05,-.05)),v.add(bn(.08,.32,3,s,B*.56,-.38,.1,0,B*.5));if(v.add(ue(1.08,.42,.96,s,0,.5,-.02)),v.add(ue(1.1,.12,.12,s,0,.28,.46)),[[-.45,.72,.1],[0,.74,.2],[.45,.72,.1],[-.3,.76,-.3],[.3,.76,-.3],[-.56,.5,.3],[.56,.5,.3],[-.2,.48,.5],[.2,.48,.5]].forEach(([B,G,U])=>v.add(bn(.07,.26,4,o,B,G,U,U>.35?Math.PI/2.4:0,B>.5?-1.2:B<-.5?1.2:0))),t){for(let B=-2;B<=2;B++)v.add(bn(.035,.12,3,De({color:16777215}),B*.09,-.34,.56,Math.PI,0));v.add(ue(.42,.05,.05,s,0,-.3,.58))}const w=new Rt;w.position.set(0,1.05,-.35),_.add(w),m.tail=w;const A=bn(.38,1.3,5,e,0,.35,-.55,-Math.PI/2.6,0);w.add(A);const R=bn(.22,.55,5,t?re({color:10115824}):n,0,.7,-1.15,-Math.PI/2.6,0);w.add(R);const C=new Rt;C.position.set(0,-.95,.18),C.rotation.x=Math.PI/2,C.add(new Et(new Je(.07,.09,.4,6),re({color:2763312})));const F=new Et(new Je(.1,.1,.03,6),De({color:16773824}));F.position.y=.21,C.add(F),m.armR.add(C),m.flashlight=C,m.lens=F,t&&(C.visible=!1);let x=null;if(t){const G=new Float32Array(120),U=new Se;U.setAttribute("position",new $e(G,3)),x=new fl(U,new Xr({color:11555071,size:.14,sizeAttenuation:!0,transparent:!0,opacity:.85})),x.userData.seed=Array.from({length:40},()=>Math.random()*10),g.add(x)}g.traverse(B=>{B.isMesh&&(B.castShadow=!0)}),g.scale.setScalar(t?1.15:1);const E={group:g,parts:m,anim:"idle",t:0,lookT:0,hurtT:0,deadT:0,speed:0,aura:x};return E.setAnim=B=>{E.anim!==B&&(E.anim=B,B==="hurt"&&(E.hurtT=.45),B==="death"&&(E.deadT=0))},E.update=(B,G=0)=>{E.t+=B;const U=E.t,z=m,W=E.anim==="run",S=E.anim==="walk",I=W?9:6.5,N=W?.95:.6;let V=0,K=0,ut=0,J=0,k=0,j=0,it=0;if((()=>{_.rotation.set(0,0,0),_.position.set(0,0,0),z.armL.rotation.set(0,0,0),z.armR.rotation.set(-1.25,0,0),z.head.rotation.set(0,0,0)})(),S||W){const L=Math.sin(U*I);V=L*N,K=-L*N,ut=L*N*.9,J=W?.18:.05,j=Math.abs(Math.cos(U*I))*(W?.1:.05),z.armL.rotation.x=-ut,z.armR.rotation.x=-1.25+ut*.15}else E.anim==="idle"||E.anim==="look"?(j=Math.sin(U*2)*.015,z.armL.rotation.x=Math.sin(U*2)*.05,E.anim==="look"&&(k=Math.sin(U*1.6)*.9)):E.anim==="scared"?(z.armL.rotation.set(-1.6,0,.5),z.armR.rotation.set(-1.7,0,-.5),J=-.12,_.position.x=Math.sin(U*40)*.015,it=.1):E.anim==="interact"?(z.armR.rotation.set(-1.45,0,0),z.armL.rotation.set(-1,0,0),J=.15):E.anim==="hurt"?(E.hurtT-=B,J=-.35,z.head.rotation.x=-.3,z.armL.rotation.z=.8,z.armR.rotation.z=-.8,E.hurtT<=0&&(E.anim="idle")):E.anim==="death"?(E.deadT=Math.min(1,E.deadT+B*1.4),_.rotation.x=-E.deadT*1.5,_.position.y=-E.deadT*.5,_.position.z=-E.deadT*.3):E.anim==="hide"&&(J=.1);if(z.legL.rotation.x=V,z.legR.rotation.x=K,_.rotation.x+=J,_.position.y+=j,z.head.rotation.y=k,z.head.rotation.x+=it,z.tail.rotation.y=Math.sin(U*(S||W?6:1.8))*(S||W?.35:.2),z.tail.rotation.x=W?-.25:0,x){const L=x.geometry.attributes.position,bt=x.userData.seed;for(let xt=0;xt<bt.length;xt++){const rt=bt[xt]+U*.8;L.setXYZ(xt,Math.sin(rt*1.7+xt)*.9,(rt*.6+xt*.07)%2.8,Math.cos(rt*1.3+xt*2)*.9)}L.needsUpdate=!0}},E}function st(i,t,e,n,s=0,r=0,a=0,o=2){const h=new Ue(i,t,e),l=h.attributes.uv,c=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let d=0;d<6;d++)for(let p=0;p<4;p++){const g=d*4+p;l.setXY(g,l.getX(g)*c[d][0]/o,l.getY(g)*c[d][1]/o)}const u=new Et(h,n);return u.position.set(s,r,a),u}function be(i,t,e,n,s,r,a="up",o=2){const h=new xn(i,t),l=h.attributes.uv;for(let u=0;u<l.count;u++)l.setXY(u,l.getX(u)*i/o,l.getY(u)*t/o);const c=new Et(h,e);return c.rotation.x=a==="up"?-Math.PI/2:Math.PI/2,c.position.set(n,s,r),c}const Be=(i,t,e,n,s,r=0,a=0,o=0)=>{const h=new Et(new Je(i,t,e,n),s);return h.position.set(r,a,o),h};function sn(i,t,e){const n=new Rt;n.add(Be(.05,.06,.25,5,Dt(15260864),0,.125,0));const s=new Et(new Ze(.045,.14,4),ke(16756800));return s.position.y=.32,n.add(s),n.userData.flame=s,n.position.set(i,t,e),n}function zi(i=3,t=3.2,e=0,n=1){const s=new Rt,r=ft("darkwood",16777215,{}),a=.6;s.add(st(i,t,.08,r,0,t/2,-a/2+.04)),s.add(st(.08,t,a,r,-i/2+.04,t/2,0)),s.add(st(.08,t,a,r,i/2-.04,t/2,0));let o=n;const h=()=>(o=o*16807%2147483647,o/2147483647),l=[5904922,1718874,3811866,2771498,4860506,6969898],c=5;for(let u=0;u<=c;u++){const d=u*(t-.1)/c+.05;if(s.add(st(i,.06,a,r,0,d,0)),u===c)break;let p=-i/2+.15;for(;p<i/2-.2;){const g=.08+h()*.1,_=.35+h()*.2;h()>.12&&s.add(st(g,_,.35,Dt(l[h()*l.length|0]),p+g/2,d+.03+_/2,.02)),p+=g+.01}}return s.rotation.y=e,s}function jp(i=2.4,t=1.1){const e=new Rt,n=ft("darkwood");return e.add(st(i,.1,t,n,0,.9,0)),e.add(st(.1,.9,t-.1,n,-i/2+.1,.45,0)),e.add(st(.1,.9,t-.1,n,i/2-.1,.45,0)),e.add(st(i-.2,.7,.08,n,0,.55,-t/2+.1)),e}function mi(i=2,t=1.2,e=.85){const n=new Rt,s=ft("wood");n.add(st(i,.1,t,s,0,e,0));for(const r of[-1,1])for(const a of[-1,1])n.add(st(.12,e,.12,s,r*(i/2-.12),e/2,a*(t/2-.12)));return n}function ki(){const i=new Rt,t=ft("darkwood");i.add(st(.6,.08,.6,t,0,.5,0)),i.add(st(.6,.8,.08,t,0,.9,-.28));for(const e of[-1,1])for(const n of[-1,1])i.add(st(.07,.5,.07,t,e*.25,.25,n*.25));return i}function Kp(i=0){const t=new Rt,e=ft("darkwood");return t.add(st(1.5,2.8,1,e,0,1.4,0)),t.add(st(.05,2.5,.05,Dt(656644),0,1.4,.52)),t.add(st(.1,.25,.06,Dt(12095530),-.12,1.4,.54)),t.add(st(.1,.25,.06,Dt(12095530),.12,1.4,.54)),t.rotation.y=i,t}function $p(i=0){const t=new Rt;return t.add(st(.9,1,.9,ft("metal"),0,.5,0)),t.add(Be(.18,.18,.08,8,Dt(12095530),0,.6,.47)).children.at(-1).rotation.x=Math.PI/2,t.add(st(.5,.18,.04,ke(3407718),0,.88,.46)),t.rotation.y=i,t}function Zp(){const i=new Rt;i.add(st(.9,.5,.6,ft("metal"),0,.25,0)),i.add(st(.7,.04,.4,ke(10898943),0,.52,0));const t=new Et(new Pi(.35,.03,4,8),ke(12946431));return t.rotation.x=Math.PI/2,t.position.y=.9,i.add(t),i.userData.ring=t,i}function On(i=1,t=1.1,e=1.5){const n=document.createElement("canvas");n.width=24,n.height=32;const s=n.getContext("2d");s.fillStyle="#1a1210",s.fillRect(0,0,24,32),s.fillStyle=["#6a5a48","#58504a","#6a4a40"][i%3],s.fillRect(7,8,10,12),s.fillRect(4,22,16,10),s.fillStyle="#000",s.fillRect(9,12,2,2),s.fillRect(14,12,2,2),i%2&&(s.fillStyle="#ff2020",s.fillRect(9,12,1,1),s.fillRect(14,12,1,1));const r=new ns(n);r.magFilter=r.minFilter=Qt,r.colorSpace=At;const a=new Rt;a.add(st(t+.2,e+.2,.08,Dt(6965780),0,0,0));const o=new Et(new xn(t,e),De({map:r,color:8947848}));return o.position.z=.05,a.add(o),a}function Po(i=0){const t=new Rt,e=ft("stone",10132136);t.add(st(1.2,1.2,1.2,e,0,.6,0)),t.add(st(.7,1,.5,e,0,1.7,0)),t.add(st(.5,.45,.5,e,0,2.4,.05));for(const n of[-1,1]){const s=new Et(new Ze(.12,.35,4),e);s.position.set(n*.17,2.8,.05),t.add(s),t.add(st(.07,.05,.03,ke(16724016),n*.12,2.45,.32))}return t.rotation.y=i,t}function Or(i=5,t=1){const e=new Rt,n=Dt(1709072);e.add(Be(.12,.3,i,5,n,0,i/2,0));for(let s=0;s<4;s++){const r=Be(.04,.1,2,4,n,0,0,0);r.position.set(Math.sin(s+t)*.7,i*(.55+s*.1),Math.cos(s*2+t)*.7),r.rotation.z=Math.sin(s+t)*1,r.rotation.x=Math.cos(s+t)*1,e.add(r)}return e}function Jp(i=4.5){const t=new Rt;return t.add(Be(.45,.5,i,6,ft("stone",8947882),0,i/2,0)),t.add(st(1.2,.3,1.2,ft("stone"),0,.15,0)),t}function Qp(){const i=new Rt;i.add(st(3,.6,2,ft("stone",9075368),0,.3,0)),i.add(st(2,.9,1.2,ft("stone",10128056),0,1.05,0));const t=new Et(new Je(.5,.5,.05,12),ke(12628223));return t.position.set(0,1.55,0),t.rotation.x=.4,i.add(t),i.userData.disc=t,i}function tm(){const i=new Et(new Li(.22,0),ke(11693055));return i.scale.y=1.5,i}function em(i){const t=new Rt;switch(i){case"crystal":t.add(tm());break;case"gear":{const e=new Et(new Je(.17,.17,.06,8),Dt(14200880));e.rotation.x=Math.PI/2,t.add(e),t.add(st(.1,.1,.08,Dt(4206602)));break}case"brass_key":case"cellar_key":case"bedroom_key":{const e=i==="cellar_key"?10133680:i==="bedroom_key"?13160672:14200880,n=new Et(new Pi(.1,.03,4,6),Dt(e));t.add(n);const s=st(.05,.3,.05,Dt(e),0,-.2,0);t.add(s),t.add(st(.12,.05,.05,Dt(e),.05,-.3,0));break}case"battery":t.add(Be(.09,.09,.3,6,Dt(4885050))),t.add(Be(.04,.04,.06,5,Dt(13421772),0,.17,0));break;case"medkit":t.add(st(.4,.28,.2,Dt(15263976))),t.add(st(.26,.07,.21,Dt(12589080))),t.add(st(.07,.2,.21,Dt(12589080)));break;case"ammo":t.add(st(.3,.18,.2,Dt(13213738))),t.add(st(.12,.1,.22,Dt(3811856)));break;default:t.add(st(.32,.03,.42,Dt(15260864))),t.add(st(.22,.032,.02,Dt(2236962),0,0,.1)),t.add(st(.22,.032,.02,Dt(2236962),0,0,0)),t.children.forEach(e=>e.rotation.x=0)}return t}function zr(i=1.2,t=1.8,e=13142586){const n=new Rt;n.add(st(i+.2,t+.2,.1,Dt(1182218)));const s=new Et(new xn(i,t),ke(e));return s.position.z=.06,n.add(s),n.add(st(.05,t,.02,Dt(1182218),0,0,.08)),n.add(st(i,.05,.02,Dt(1182218),0,.2,.08)),n}function nm(){const i=new Rt;i.add(Be(.03,.03,1,4,Dt(2236962),0,.5,0));const t=new Et(new Pi(.6,.04,4,8),Dt(12095530));t.rotation.x=Math.PI/2,i.add(t);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;i.add(sn(Math.cos(n)*.6,.02,Math.sin(n)*.6))}return i}function Do(i=0,t=4860506){const e=new Rt;return e.add(st(1.7,.45,2.7,ft("darkwood"),0,.23,0)),e.add(st(1.55,.22,2.5,Dt(t),0,.57,.05)),e.add(st(1.2,.18,.5,Dt(13156528),0,.77,-.95)),e.add(st(1.7,1.2,.1,ft("darkwood"),0,.9,-1.3)),e.rotation.y=i,e}function im(){const i=new Rt;i.add(st(1.5,.95,.9,ft("metal"),0,.475,0));for(const t of[-.4,.4])for(const e of[-.2,.2]){const n=Be(.17,.17,.03,8,Dt(657930),t,.97,e);i.add(n)}for(let t=0;t<3;t++)i.add(st(.1,.1,.06,ke(16756800),-.3+t*.3,.8,.47));return i}function sm(i=2.6){const t=new Rt;t.add(Be(.7,.7,.2,8,ft("metal"),0,.1,0)),t.add(Be(.7,.7,.2,8,ft("metal"),0,i,0));const e=new Et(new Je(.62,.62,i-.2,8,1,!0),De({color:7405520,transparent:!0,opacity:.25,side:an}));e.position.y=i/2,t.add(e);const n=new Et(new Li(.3,0),ke(8454064));return n.position.y=i/2,t.add(n),t.userData.core=n,t}function rm(){const i=new Rt;i.add(st(4,1.2,2,ft("metal",8956569),0,.6,0)),i.add(st(3.2,1.6,1.4,ft("metal",7838088),0,2,0));for(const e of[-1,0,1]){const n=Be(.35,.35,.12,8,Dt(14200880),e,2,.76);n.rotation.x=Math.PI/2,i.add(n)}const t=new Et(new Li(.35,0),ke(16728128));return t.position.set(0,3.2,0),i.add(t),i.userData.core=t,i}function am(){const i=new Rt;i.add(st(.2,.7,.5,ft("metal"),0,0,0));const t=st(.08,.7,.08,Dt(11542560),.2,.3,0);t.geometry.translate(0,.3,0);const e=new Rt;return e.position.set(.1,0,0),e.add(t),t.position.set(0,0,0),i.add(e),i.userData.rod=e,i}const Io=i=>i.map(([t,e])=>`<option value="${t}">${e}</option>`).join("");function Ml(i,t){const e=i.settings,n=_n(i,"SETTINGS",{onClose:t}),s=Q("div","tabs"),r=Q("div");n.panel.append(s,r);let a="gfx";const o=(p,g)=>{const _=Q("div","row");return _.appendChild(Q("label","",p)),_.appendChild(g),_},h=(p,g,_,m,f=v=>v.toFixed(2))=>{const v=Q("div");v.style.cssText="display:flex;gap:8px;align-items:center";const M=Q("input");M.type="range",M.min=g,M.max=_,M.step=m,M.value=e.get(p);const w=Q("span","val",f(+M.value));return M.oninput=()=>{e.set(p,+M.value),w.textContent=f(+M.value)},M.onchange=()=>i.audio.select(),v.append(M,w),v},l=(p,g,_=m=>m)=>{const m=Q("select","",Io(g));return m.value=String(e.get(p)),m.onchange=()=>{e.set(p,_(m.value)),i.audio.select()},m},c=p=>{const g=Q("input");return g.type="checkbox",g.checked=!!e.get(p),g.onchange=()=>{e.set(p,g.checked),i.audio.select()},g},u=p=>Math.round(p*100)+"%";function d(){if(s.innerHTML="",r.innerHTML="",[["gfx","GRAPHICS"],["aud","AUDIO"],["ctl","CONTROLS"]].forEach(([_,m])=>{const f=Q("div","tab"+(a===_?" on":""),m);f.onclick=()=>{a=_,i.audio.select(),d()},s.appendChild(f)}),a==="gfx"){const _=Q("select","",Io([["low","LOW — authentic PS1"],["medium","MEDIUM"],["high","HIGH"],["custom","CUSTOM"]]));_.value=e.get("preset"),_.onchange=()=>{Wi[_.value]&&(e.applyPreset(_.value),i.audio.confirm(),d())},r.appendChild(o("Preset",_)),r.appendChild(o("Internal resolution",l("resolution",[["native","Native"],["480","480p"],["360","360p"],["240","240p (PS1)"]]))),r.appendChild(o("Render scale",h("renderScale",.5,1.5,.05,u))),r.appendChild(o("Pixelation / vertex jitter",h("pixelation",0,1,.05,u))),r.appendChild(o("Texture quality",l("textureQuality",[["low","Low (32px)"],["medium","Medium (64px)"],["high","High (128px)"]]))),r.appendChild(o("Shadow quality",l("shadowQuality",[["off","Off"],["low","Low"],["medium","Medium"]]))),r.appendChild(o("Fog intensity",h("fog",.4,1.8,.05,u))),r.appendChild(o("Anti-aliasing",c("aa"))),r.appendChild(o("Frame limit",l("fpsLimit",[[30,"30 FPS (PS1)"],[60,"60 FPS"],[0,"Unlimited"]],m=>+m))),r.appendChild(o("Fullscreen",c("fullscreen"))),r.appendChild(o("CRT filter",h("crt",0,1,.05,u))),r.appendChild(o("Screen distortion",h("distortion",0,1,.05,u))),r.appendChild(o("Brightness",h("brightness",.6,1.6,.05,u)))}else if(a==="aud")r.appendChild(o("Master volume",h("master",0,1,.05,u))),r.appendChild(o("Music volume",h("music",0,1,.05,u))),r.appendChild(o("Sound effects volume",h("sfx",0,1,.05,u))),r.appendChild(o("Ambient volume",h("ambient",0,1,.05,u))),r.appendChild(o("Mute all",c("mute")));else{r.appendChild(o("Camera sensitivity",h("sensitivity",.3,2,.05,u)));const _=Q("div","small");_.style.cssText="line-height:1.8;margin-top:10px",_.innerHTML="W A S D — move &nbsp; SHIFT — run<br>E — interact / confirm &nbsp; F — flashlight<br>SPACE / LEFT CLICK — fire flash pistol<br>I — inventory &nbsp; ESC — pause<br>← → or mouse drag — rotate camera (free-camera areas)<br>Fixed-camera rooms keep your direction until you release the keys.",r.appendChild(_)}const p=Q("div","btns"),g=Q("button","btn","BACK");g.onclick=()=>{i.audio.back(),n.close()},p.appendChild(g),r.appendChild(p)}return d(),n}const Pe=4.6,nn=.4,wn=2.7,Xi=[{id:"kitchen",name:"THE KITCHEN",x1:-25,x2:-9,z1:-18,z2:0,cam:null,lamp:{p:[-17,3.4,-9],c:13696944,i:1.3,d:20},amb:[2767402,.5],fog:528394,music:"game"},{id:"bedrooms",name:"GUEST BEDROOMS",x1:25,x2:41,z1:-18,z2:0,cam:{pos:[26,4,-1.1],look:[34,.8,-9],fov:64},lamp:{p:[33,3.4,-9],c:9085183,i:1.2,d:20},amb:[2238538,.5],fog:461082,music:"game"},{id:"lab",name:"SECRET LABORATORY",x1:9,x2:25,z1:-18,z2:0,cam:null,lamp:{p:[17,3.4,-9],c:6356928,i:1.6,d:22},amb:[1718842,.55],fog:266254,music:"final"},{id:"cellar",name:"THE BASEMENT",x1:-9,x2:9,z1:-18,z2:0,cam:null,lamp:{p:[0,3.2,-9],c:10510591,i:1.5,d:22},amb:[2759236,.5],fog:656404,music:"final"},{id:"corridor",name:"RED CARPET CORRIDOR",x1:9,x2:25,z1:6.5,z2:9.5,cam:null,lamp:{p:[17,3.2,8],c:16738880,i:1.3,d:14},amb:[3807770,.5],fog:1181192,music:"game"},{id:"library",name:"THE LIBRARY",x1:25,x2:41,z1:0,z2:16,cam:{pos:[26,4,15.1],look:[34,.8,5],fov:64},lamp:{p:[33,3.4,8],c:16760944,i:1.5,d:20},amb:[3811874,.5],fog:920072,music:"game"},{id:"office",name:"THE OFFICE",x1:-25,x2:-9,z1:0,z2:16,cam:{pos:[-24,4,15.1],look:[-16,.8,5],fov:64},lamp:{p:[-17,3.4,8],c:16765072,i:1.4,d:20},amb:[2763322,.5],fog:657936,music:"game"},{id:"hall",name:"GRAND HALL",x1:-9,x2:9,z1:0,z2:16,cam:{pos:[-8.2,4.1,15.1],look:[2,.8,5],fov:66},lamp:{p:[0,3.8,8],c:16756848,i:1.7,d:24},amb:[3810360,.55],fog:853776,music:"game"},{id:"garden",name:"FRONT GARDEN",x1:-14,x2:14,z1:16,z2:40,cam:null,lamp:{p:[0,3,30],c:16752720,i:.8,d:16},amb:[2107466,.9],fog:789022,music:"game",outdoor:!0}],om=[{axis:"x",c:16,a:-14,b:14,gaps:[{at:0,w:3}],pos:"brick",neg:"wall"},{axis:"x",c:0,a:-9,b:9,gaps:[{at:0,w:3}],pos:"wall",neg:"stone"},{axis:"z",c:-9,a:0,b:16,gaps:[{at:8,w:2.4}],pos:"wall",neg:"wall"},{axis:"z",c:9,a:0,b:16,gaps:[{at:8,w:2.4}],pos:"wall",neg:"wall"},{axis:"x",c:6.5,a:9,b:25,gaps:[],pos:"wall",neg:"wall"},{axis:"x",c:9.5,a:9,b:25,gaps:[],pos:"wall",neg:"wall"},{axis:"z",c:25,a:0,b:16,gaps:[{at:8,w:2.4}],pos:"darkwood",neg:"wall"},{axis:"z",c:41,a:0,b:16,gaps:[],pos:"brick",neg:"darkwood"},{axis:"x",c:0,a:25,b:41,gaps:[{at:33.5,w:2.4}],pos:"darkwood",neg:"wall"},{axis:"x",c:16,a:25,b:41,gaps:[],pos:"brick",neg:"darkwood"},{axis:"z",c:-25,a:0,b:16,gaps:[],pos:"wall",neg:"brick"},{axis:"x",c:0,a:-25,b:-9,gaps:[{at:-17,w:2.4}],pos:"wall",neg:"brick"},{axis:"x",c:16,a:-25,b:-9,gaps:[],pos:"brick",neg:"wall"},{axis:"z",c:-9,a:-18,b:0,gaps:[],pos:"stone",neg:"brick"},{axis:"z",c:9,a:-18,b:0,gaps:[],pos:"brick",neg:"stone"},{axis:"x",c:-18,a:-9,b:9,gaps:[],pos:"stone",neg:"brick"},{axis:"z",c:-25,a:-18,b:0,gaps:[],pos:"brick",neg:"brick"},{axis:"x",c:-18,a:-25,b:-9,gaps:[],pos:"brick",neg:"brick"},{axis:"z",c:41,a:-18,b:0,gaps:[],pos:"brick",neg:"wall"},{axis:"x",c:-18,a:25,b:41,gaps:[],pos:"wall",neg:"brick"},{axis:"z",c:25,a:-18,b:0,gaps:[{at:-9,w:2}],pos:"wall",neg:"stone"},{axis:"x",c:-18,a:9,b:25,gaps:[],pos:"stone",neg:"brick"},{axis:"x",c:0,a:9,b:25,gaps:[],pos:"brick",neg:"stone"},{axis:"x",c:4,a:35,b:41,gaps:[{at:39.5,w:2}],pos:"darkwood",neg:"darkwood",low:!0},{axis:"z",c:35,a:0,b:4,gaps:[],pos:"darkwood",neg:"darkwood",low:!0}],lm=[{id:"front",axis:"x",c:16,at:0,w:3,name:"Front Door",lockedMsg:"The front door slammed shut. It will not open."},{id:"cellar",axis:"x",c:0,at:0,w:3,name:"Basement Door",lock:"cellar_key",lockedMsg:"Locked. It needs an iron key."},{id:"office",axis:"z",c:-9,at:8,w:2.4,name:"Office Door",lock:"brass_key",lockedMsg:"Locked. The lock is brass."},{id:"corridor",axis:"z",c:9,at:8,w:2.4,name:"Corridor Door"},{id:"library",axis:"z",c:25,at:8,w:2.4,name:"Library Door"},{id:"kitchen",axis:"x",c:0,at:-17,w:2.4,name:"Kitchen Door"},{id:"bedroom",axis:"x",c:0,at:33.5,w:2.4,name:"Bedroom Door",lock:"bedroom_key",lockedMsg:"Locked. The tag reads: GUEST ROOMS."},{id:"labdoor",axis:"z",c:25,at:-9,w:2,name:"Hidden Door",tex:"stone",lockFlag:"lab_open",lockedMsg:"Just a stone wall... but you can hear gears behind it."},{id:"secret",axis:"x",c:4,at:39.5,w:2,name:"Bookshelf",shelf:!0,lockFlag:"secret",lockedMsg:"The shelf is fixed to the wall... something is missing."}],kr=[{id:"g_note",type:"doc",doc:"gate_note",x:0,z:35},{id:"g_key",type:"brass_key",x:-9,z:25},{id:"g_bat",type:"battery",x:10.5,z:28},{id:"g_cry",type:"crystal",x:11.5,z:19.5},{id:"g_ammo",type:"ammo",x:-11,z:34,qty:4},{id:"h_med",type:"medkit",x:-7.4,z:2.4},{id:"h_cry",type:"crystal",x:7.6,z:1.6},{id:"h_ammo",type:"ammo",x:-4,z:14.6,qty:3},{id:"c_doc",type:"doc",doc:"corridor_scrap",x:12,z:8},{id:"c_bat",type:"battery",x:20,z:8.7},{id:"c_cry",type:"crystal",x:23.6,z:8},{id:"l_doc",type:"doc",doc:"library_diary",x:33,z:8.2},{id:"l_doc2",type:"doc",doc:"symbol_hint",x:29,z:1.4},{id:"l_ammo",type:"ammo",x:38.6,z:13,qty:4},{id:"l_bat",type:"battery",x:27,z:3},{id:"l_cry",type:"crystal",x:38,z:1.8},{id:"l_med",type:"medkit",x:36.5,z:1.8},{id:"l_ammo2",type:"ammo",x:39.8,z:1.2,qty:5},{id:"o_doc",type:"doc",doc:"office_memo",x:-20.6,z:3.5},{id:"o_cry",type:"crystal",x:-19.2,z:3.4},{id:"o_med",type:"medkit",x:-12,z:14.6},{id:"o_ammo",type:"ammo",x:-23.4,z:14.4,qty:4},{id:"k_doc",type:"doc",doc:"kitchen_note",x:-15,z:-8},{id:"k_key",type:"bedroom_key",x:-10.6,z:-15.4},{id:"k_gear",type:"gear",x:-23.8,z:-14.6,req:"cabinet"},{id:"k_bat",type:"battery",x:-12,z:-1.8},{id:"k_med",type:"medkit",x:-23.5,z:-2},{id:"k_cry",type:"crystal",x:-20.5,z:-16.2},{id:"k_ammo",type:"ammo",x:-13,z:-16.4,qty:4},{id:"b_doc",type:"doc",doc:"bedroom_diary",x:30.6,z:-16.8},{id:"b_gear",type:"gear",x:36.5,z:-15.5},{id:"b_cry",type:"crystal",x:39.2,z:-9},{id:"b_ammo",type:"ammo",x:27.4,z:-3.4,qty:5},{id:"b_bat",type:"battery",x:38.8,z:-2.2},{id:"b_med",type:"medkit",x:29.5,z:-12.5},{id:"m_doc",type:"doc",doc:"lab_log",x:12,z:-3.2},{id:"m_ammo",type:"ammo",x:22.8,z:-2.4,qty:5},{id:"m_med",type:"medkit",x:10.5,z:-16.2},{id:"m_cry1",type:"crystal",x:13.2,z:-13,req:"machine"},{id:"m_cry2",type:"crystal",x:20.8,z:-13,req:"machine"},{id:"m_doc2",type:"doc",doc:"lab_vault",x:17,z:-11.2,req:"machine"},{id:"x_cry",type:"crystal",x:-7.4,z:-15.6},{id:"x_doc",type:"doc",doc:"cellar_tape",x:7,z:-2.6},{id:"x_ammo",type:"ammo",x:7.4,z:-5,qty:4}],cm=[{id:"w_bed",x:39.6,z:-17.1,rot:0},{id:"w_kit",x:-23.4,z:-17.1,rot:0},{id:"w_hall",x:7.7,z:14.2,rot:-Math.PI/2},{id:"w_lib",x:39.6,z:14.4,rot:Math.PI},{id:"w_off",x:-23.4,z:1,rot:0}],hm=[{id:"s_hall",x:-6.6,z:13.4},{id:"s_lib",x:27.4,z:14.4},{id:"s_off",x:-10.6,z:14.4},{id:"s_kit",x:-10.6,z:-3},{id:"s_bed",x:27.4,z:-2.6},{id:"s_lab",x:11,z:-2.4}],zn={x:-24.3,z:8,rot:Math.PI/2},Uo={x:33},Ds={x:-22,z:-16},Rr={x:26.1,z:-5.5},Bi={x:17,z:-14},Tn={x:0,z:-15.4},dm=[[-4.8,-6],[4.8,-6],[-4.8,-11.5],[4.8,-11.5]],um=[[0,13],[-5,8],[5,8],[0,3],[7.4,8],[11,8],[17,8],[23,8],[27,8],[32,12],[32,4],[38,8],[36,13],[27,3],[-6,3],[6,12]],fm=[[0,13],[0,3],[7.4,8],[17,8],[27,8],[33,12],[36,8],[32,4],[27,8],[17,8],[7.4,8],[-5,8]],pm=[[30,14],[36,12],[28,5]],No={x:0,z:37,ry:Math.PI},yi={kitchen_note:{title:"Kitchen Note",text:`The cook never cooked for guests.

The three dials on the stove were set by the Archivist's daughter. 'Her birthday', he wrote on the fridge. He used it for everything.

The cabinet beside the stove holds what the house keeps from visitors: a brass gear.

There are two such gears. One is upstairs, in the guest rooms.`},bedroom_diary:{title:"Mira's Diary",text:`I was seven when we arrived.

Papa says the guest rooms are for people who stay forever. I do not like how the dark moves in here. It follows the corners. It hates the flashlight.

My birthday is on the 2nd of September. Papa uses 2-0-9 for everything. Everything.

There is a lever by the west wall. Papa says never to pull it.`},lab_log:{title:"Laboratory Log",text:`EXPERIMENT 7 — MEMORY EXTRACTION.

The crystals are not minerals. They are memories, solidified.

The machine needs two brass gears to open the vault. Without it, nobody can reach the last crystals.

Subject W resists. Subject W keeps asking for a way home.`},lab_vault:{title:"Vault Note — Subject W",text:`She came here as a child and never left.

What you call the Possessed one is not a monster. It is Subject W: every fear and every forgotten day, given a body.

Gather every crystal you can. The more you remember, the less it can take.

There are eleven in total.`},gate_note:{title:"Willow's Note",text:`The gate was open.

I don't remember driving here. I don't remember anything after the rain.

The house looks like the one from my dreams... the one with a light in the top window.

That window is on now.

— W.`},corridor_scrap:{title:"Torn Page",text:`IT FOLLOWS THE LIGHT.

It cannot see what it cannot find. The old wardrobes are deep enough to hide in. Hold your breath. Wait.

If you can't hide — RUN. It is faster than it looks, but not faster than you.

The small ones die with a single spark.`},library_diary:{title:"The Archivist's Diary",text:`Day 112.

The clock in the office stopped the night everything went wrong. The hands never moved again.

FOUR for the hour I arrived.
ONE for the night I tried to leave.
SEVEN for the years I have been here.

I locked the cellar key inside the office safe. Whatever sleeps down there must never wake.`},symbol_hint:{title:"Scratched Wall Note",text:`THE MOON WATCHES.
THE EYE REMEMBERS.
THE FOX RETURNS.

(The panel on the south wall has four symbols. Order matters.)`},office_memo:{title:"Office Memo",text:`To whoever finds this:

The house feeds on memories. Every crystal I found was a piece of someone who came before.

Gather them. If you hold enough of them — five, maybe more — you will remember who you are when you stand before the altar.

If not... it will wear your face.

The safe code is in the library.`},cellar_tape:{title:"Cursed Memories — Tape 7",text:`[static]

"...she came back. They always come back.

The thing on the altar is not a monster. It is what is left of the girl who never left this house. It wants someone to remember her.

But if you forget your own name down there... it will take yours."

[static]`}};class mm{constructor(t,{onNew:e,onContinue:n,onLoad:s}){this.app=t,this.el=Q("div","full"),this.el.style.pointerEvents="none",this.el.innerHTML='<div class="title"><h1 class="px">THE EVIL HOUSE</h1><h2 class="px">CURSED MEMORIES</h2></div><div class="studio">© THE LOST DISC ENTERTAINMENT — SLUS-00666 — Press ENTER</div>',Ie().appendChild(this.el);const r=o=>{this.menu.detach(),this.el.style.display="none",o(()=>{this.el.style.display="",this.menu.attach()})},a=t.saves.anySave();this.menu=new jr(t,[{label:"NEW GAME",action:()=>{a?r(o=>Kr(t,"You already have saved progress. Start a NEW GAME anyway?",()=>e(),o)):e()}},{label:"CONTINUE",disabled:!a,action:()=>n()},{label:"LOAD GAME",action:()=>r(o=>Os(t,"load",h=>s(h),o))},{label:"SETTINGS",action:()=>r(o=>Ml(t,o))},{label:"EXTRAS",action:()=>r(o=>_m(t,o))},{label:"CREDITS",action:()=>{this.menu.detach(),this.el.style.display="none",yl(t,()=>{this.el.style.display="",this.menu.attach()})}},{label:"EXIT GAME",action:()=>r(o=>gm(t,o))}],{className:"menu"}),this.menu.el.style.pointerEvents="auto",this.el.appendChild(this.menu.el),this.menu.attach()}dispose(){this.menu.detach(),this.el.remove()}}function gm(i,t){const e=Q("div","full black");e.style.zIndex=50,e.innerHTML='<div class="mid px" style="color:#a64dff">IT IS NOW SAFE TO CLOSE THIS TAB.</div><div class="small" style="margin-top:14px">(Browsers do not allow a page to close itself — the game has stopped.)</div>';const n=Q("button","btn","BACK TO TITLE");n.style.marginTop="24px",e.appendChild(n),Ie().appendChild(e),i.audio.stopMusic(),i.audio.stopAmbient();try{window.close()}catch{}const s=()=>{e.remove(),t()};n.onclick=s}function _m(i,t){const e=i.saves.meta(),n=_n(i,"EXTRAS",{onClose:t}),s=Q("div","tabs"),r=Q("div");n.panel.append(s,r);const a=d=>`images/${d}`,o=["CHARACTERS","ENEMIES","ARTWORK","INFO","SECRET FILES","ENDINGS"];let h=0;const l=d=>{const p=_n(i,null,{}),g=Q("img","big-img");g.src=d,p.panel.appendChild(g),p.panel.style.padding="8px"},c=d=>{const p=Q("div","gal");return d.forEach(([g,_])=>{const m=Q("img");m.src=a(g),m.title=_,m.onclick=()=>l(a(g)),p.appendChild(m)}),p};function u(){s.innerHTML="",r.innerHTML="",o.forEach((g,_)=>{const m=Q("div","tab"+(_===h?" on":""),g);m.onclick=()=>{h=_,i.audio.select(),u()},s.appendChild(m)}),h===0?(r.appendChild(c([["willow-sheet.jpg","Willow — model sheet"],["willow-selfie.jpg","Willow — selfie"]])),r.appendChild(Q("p","small",'<br><b style="color:var(--orange)">WILLOW</b> — an anthropomorphic fox with a spiked beanie, a skeleton hoodie and a lot of questions. She carries a flashlight and a flash pistol. She does not remember how she got here.'))):h===1?(r.appendChild(c([["gameplay-refs.jpg","Enemy encounters"]])),r.appendChild(Q("div","small",'<br><b style="color:var(--orange)">THE WATCHER</b> — tall, dark, glowing eyes. Patrols the mansion. Hide in wardrobes; it cannot be killed, only stunned.<br><br><b style="color:var(--orange)">THE CRAWLERS</b> — small things that skitter in the library. One spark is enough.<br><br><b style="color:var(--orange)">THE POSSESSED FOX</b> — purple spiral eyes, sharp smile. It wears her face.<br><br><b style="color:var(--orange)">THE SHADOWS</b> — stalk the dark rooms (kitchen, guest rooms, laboratory). Light makes them dissolve.'))):h===2?r.appendChild(c([["cover-forgotten.jpg","Cover — Some houses should stay forgotten"],["cover-cursed-memories.jpg","Cover — Cursed Memories"],["lost-disc-logo.jpg","The Lost Disc Entertainment"],["willow-selfie.jpg","Selfie"],["gameplay-refs.jpg","Gameplay references"]])):h===3?r.appendChild(Q("div","doc small",`THE EVIL HOUSE — CURSED MEMORIES
Developer: THE LOST DISC ENTERTAINMENT
Platform concept: PlayStation 1 (1999) — played in a browser.
Engine: Three.js + Vite. All audio is generated live with the Web Audio API.

CHAPTER 1 — "THE FRONT DOOR":
Garden · Grand Hall · Red Carpet Corridor · Library · Office · Kitchen · Guest Bedrooms · Secret Laboratory · Basement.
There are 11 crystals. Find 5+ to be able to remember yourself...`)):h===4?e.finished?r.appendChild(Q("div","doc",Object.values(yi).map(g=>`■ ${g.title}
${g.text}`).join(`

─────────

`))):r.appendChild(Q("div","small lock","🔒 Finish the game once to unlock all secret files.")):r.appendChild(Q("div","doc",`GOOD ENDING — ${e.endings.good?"UNLOCKED":"🔒 locked"}
BAD ENDING — ${e.endings.bad?"UNLOCKED":"🔒 locked"}`));const d=Q("div","btns"),p=Q("button","btn","BACK");p.onclick=()=>{i.audio.back(),n.close()},d.appendChild(p),r.appendChild(d)}u()}function yl(i,t){const e=Q("div","credits");e.style.zIndex=40,e.innerHTML=`<div class="roll"><h4>THE LOST DISC ENTERTAINMENT</h4><div>PRESENTS</div><h1 class="px">THE EVIL HOUSE</h1><div class="px" style="color:#a64dff;letter-spacing:8px">CURSED MEMORIES</div><div class="small">A RETRO SURVIVAL HORROR EXPERIENCE</div>
  <h4>CHARACTER &amp; ART DIRECTION</h4><div>THE LOST DISC ENTERTAINMENT</div><h4>GAME DESIGN</h4><div>THE LOST DISC ENTERTAINMENT</div><h4>PROGRAMMING</h4><div>Three.js · Vite · Web Audio API</div>
  <h4>MUSIC &amp; SOUND</h4><div>Procedurally generated in your browser</div><h4>SPECIAL THANKS</h4><div>Everyone who ever blew into a PS1 disc</div><h4>&nbsp;</h4><div class="small">SOMETHING IS WATCHING IN THE DARK...</div><br><br><br><div class="small blink">PRESS ENTER TO RETURN</div></div>`,Ie().appendChild(e),i.audio.startMusic("credits");let n=!1;const s=()=>{n||(n=!0,document.removeEventListener("keydown",r,!0),e.remove(),i.audio.startMusic("menu"),t&&t())},r=a=>{["Escape","Enter","Space"].includes(a.code)&&(a.preventDefault(),a.stopPropagation(),s())};document.addEventListener("keydown",r,!0),e.onclick=s,e.querySelector(".roll").addEventListener("animationend",s)}const zs=8,Ke={flashlight:{name:"Flashlight",icon:"🔦",stack:1,desc:"It still has some battery. Press F to switch it on or off."},battery:{name:"Battery",icon:"🔋",stack:3,use:"battery",desc:"Restores 50% of flashlight power."},medkit:{name:"Med Kit",icon:"✚",stack:2,use:"heal",desc:"Restores 50 HP."},brass_key:{name:"Brass Key",icon:"🗝",stack:1,desc:"An old brass key. The tag reads: OFFICE."},bedroom_key:{name:"Bedroom Key",icon:"🗝",stack:1,desc:"A small silver key. The tag reads: GUEST ROOMS."},gear:{name:"Brass Gear",icon:"⚙",stack:2,desc:"A heavy brass gear from an old mechanism. There must be a machine that needs it."},cellar_key:{name:"Iron Key",icon:"🔑",stack:1,desc:"A cold iron key. It smells of damp stone. It must open something below."}};class xm{constructor(){this.slots=[]}add(t,e=1){const n=Ke[t];if(!n)return!1;let s=e;for(const r of this.slots)if(r.id===t&&r.qty<n.stack&&s>0){const a=Math.min(n.stack-r.qty,s);r.qty+=a,s-=a}for(;s>0;){if(this.slots.length>=zs)return s<e;const r=Math.min(n.stack,s);this.slots.push({id:t,qty:r}),s-=r}return!0}canAdd(t){const e=Ke[t];return this.slots.some(n=>n.id===t&&n.qty<e.stack)||this.slots.length<zs}count(t){return this.slots.filter(e=>e.id===t).reduce((e,n)=>e+n.qty,0)}has(t){return this.count(t)>0}remove(t,e=1){for(let n=this.slots.length-1;n>=0&&e>0;n--){const s=this.slots[n];if(s.id!==t)continue;const r=Math.min(s.qty,e);s.qty-=r,e-=r,s.qty<=0&&this.slots.splice(n,1)}}toJSON(){return this.slots.map(t=>({...t}))}fromJSON(t){this.slots=Array.isArray(t)?t.filter(e=>Ke[e.id]).map(e=>({id:e.id,qty:e.qty})):[]}}class ks{constructor(){this.reset()}reset(){this.hp=100,this.lives=3,this.ammo=8,this.battery=100,this.crystals=0,this.light=!0,this.inv=new xm,this.inv.add("flashlight"),this.docs=[],this.flags={},this.taken=[],this.doors={},this.pos={...No},this.room="garden",this.roomName="FRONT GARDEN",this.checkpoint={...No},this.playTime=0,this.ending=null}serialize(){const{hp:t,lives:e,ammo:n,battery:s,crystals:r,light:a,docs:o,flags:h,taken:l,doors:c,pos:u,room:d,roomName:p,checkpoint:g,playTime:_}=this;return JSON.parse(JSON.stringify({hp:t,lives:e,ammo:n,battery:s,crystals:r,light:a,docs:o,flags:h,taken:l,doors:c,pos:u,room:d,roomName:p,checkpoint:g,playTime:_,inv:this.inv.toJSON()}))}static from(t){const e=new ks;return Object.assign(e,{hp:t.hp,lives:t.lives,ammo:t.ammo,battery:t.battery,crystals:t.crystals,light:t.light!==!1,docs:t.docs||[],flags:t.flags||{},taken:t.taken||[],doors:t.doors||{},pos:t.pos||e.pos,room:t.room||"garden",roomName:t.roomName||"",checkpoint:t.checkpoint||t.pos||e.pos,playTime:t.playTime||0}),e.inv.fromJSON(t.inv),e.inv.has("flashlight")||e.inv.add("flashlight"),e}useItem(t){const e=Ke[t];return!e||!e.use?e?"Nothing happens.":"":e.use==="battery"?this.battery>=100?"The flashlight is already full.":(this.battery=Math.min(100,this.battery+50),this.inv.remove(t),"Flashlight recharged."):e.use==="heal"?this.hp>=100?"You are not hurt.":(this.hp=Math.min(100,this.hp+50),this.inv.remove(t),"You feel a little better."):""}}class vm{constructor(t){this.app=t,this.scene=new es,this.camera=new fe(48,1.6,.1,200),this.scene.background=new It(722968),this.scene.fog=new Ti(722968,.028),this.t=0,this.windows=[]}enter(){const t=this.app,e=this.scene;e.add(new $i(3813472,1.1));const n=new Yr(8425727,1.2);n.position.set(-10,20,10),e.add(n),e.add(be(200,200,ft("grass",5592422),0,0,0,"up",4));const s=ft("brick",6969958),r=Dt(1183262),a=(d,p,g,_)=>(d.position.set(p,g,_),e.add(d),d);a(st(26,11,8,s,0,0,0,3),6,5.5,-22);const o=a(new Et(new Ze(15,6,4),r),6,14,-22);o.rotation.y=Math.PI/4,o.scale.set(1.4,1,.6),a(st(5,10,5,s,0,0,0,3),6,16,-23);const h=a(new Et(new Ze(4,5,4),r),6,23.5,-23);h.rotation.y=Math.PI/4,a(st(7,8,6,s,0,0,0,3),-10,4,-20),a(st(7,8,6,s,0,0,0,3),22,4,-20);for(const[d,p]of[[-3,3],[1,3],[11,3],[15,3],[-3,8],[1,8],[11,8],[15,8],[6,17.5],[-10,5],[22,5]]){const g=zr(1.1,1.8,13140016);g.position.set(d,p,-17.9),e.add(g),this.windows.push(g)}this.silhouette=a(st(.5,1.1,.1,Dt(0),0,0,0),6,17.2,-17.8);const l=zr(2,3,6961688);l.position.set(6,1.6,-17.9),e.add(l);for(let d=0;d<7;d++){const p=Or(9+d%3,d);p.position.set(-22+d*8+d%2*3,0,-10-d%3*5),e.add(p)}for(let d=0;d<20;d++)a(st(.08,2.4,.08,ft("iron"),0,0,0),-10+d*1.1,1.2,-9);a(be(3,20,ft("stone",7829384),0,0,0,"up",2),6,.02,-8),a(new Et(new Ki(3,1),new Ln({color:14735615,fog:!1})),-22,24,-60),this.fogs=[];for(let d=0;d<5;d++){const p=new Et(new xn(26,4),new Ln({color:9076912,transparent:!0,opacity:.1,depthWrite:!1}));p.position.set(-20+d*9,1.4,-4-d*2),p.userData.s=.25+d*.07,e.add(p),this.fogs.push(p)}this.fox=Xn(),this.fox.group.position.set(-2.4,0,3),this.fox.group.rotation.y=.6,e.add(this.fox.group),this.fox.parts.armR.rotation.set(-1.45,0,-.35),this.fox.setAnim("idle");const c=new gl(16773320,3.5,30,.5,.6,1);c.position.set(-3.2,1.7,3.6),c.target.position.set(-6,.5,-3),e.add(c,c.target);const u=new Ai(10502399,1.2,12);u.position.set(.5,3,4),e.add(u),this.camera.position.set(1.5,2.1,8.5),this.ui=new mm(t,{onNew:()=>{t.audio.stopMusic(),t.goto("game",{state:new ks,intro:!0})},onContinue:()=>this.load(t.saves.last()),onLoad:d=>this.load(d)}),t.audio.startMusic("menu"),t.audio.stopAmbient(),t.audio.startAmbient()}load(t){const e=t&&this.app.saves.load(t);if(!e){this.app.audio.locked();return}this.app.audio.stopMusic(),this.app.goto("game",{state:ks.from(e)})}update(t,e){this.t+=t;const n=this.t;this.camera.position.x=1.5+Math.sin(n*.18)*.9,this.camera.position.y=2.1+Math.sin(n*.13)*.15,this.camera.lookAt(-.5,2.6,-2),this.fox.update(t),this.fox.parts.armR.rotation.x=-1.45+Math.sin(n*1.1)*.03,this.fogs.forEach(r=>{r.position.x+=t*r.userData.s,r.position.x>28&&(r.position.x=-28)}),this.windows.forEach((r,a)=>{r.visible=!(Math.sin(n*(1.3+a*.37)+a*5)>.97)}),this.silhouette.visible=Math.sin(n*.35)>.6;const s=this.app.settings;this.scene.fog.density=.028*s.get("fog")}exit(){this.ui.dispose()}}const Mm=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","KeyE","KeyF","KeyI","Tab"]);class ym{constructor(t=window){this.down=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDown=!1,this.mousePressed=!1,this.enabled=!0,this._kd=e=>{Mm.has(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)},this._ku=e=>this.down.delete(e.code),this._md=e=>{e.button===0&&(this.mouseDown=!0,this.mousePressed=!0)},this._mu=e=>{e.button===0&&(this.mouseDown=!1)},this._mm=e=>{(e.buttons&2||e.buttons&1)&&(this.mouseDX+=e.movementX||0)},this._blur=()=>{this.down.clear(),this.mouseDown=!1},this._ctx=e=>e.preventDefault(),t.addEventListener("keydown",this._kd),t.addEventListener("keyup",this._ku),t.addEventListener("mousedown",this._md),t.addEventListener("mouseup",this._mu),t.addEventListener("mousemove",this._mm),t.addEventListener("blur",this._blur),t.addEventListener("contextmenu",this._ctx),this.target=t}isDown(t){return this.enabled&&this.down.has(t)}wasPressed(t){return this.enabled&&this.pressed.has(t)}endFrame(){this.pressed.clear(),this.mouseDX=0,this.mousePressed=!1}clear(){this.down.clear(),this.pressed.clear(),this.mouseDX=0,this.mouseDown=!1,this.mousePressed=!1}dispose(){const t=this.target;t.removeEventListener("keydown",this._kd),t.removeEventListener("keyup",this._ku),t.removeEventListener("mousedown",this._md),t.removeEventListener("mouseup",this._mu),t.removeEventListener("mousemove",this._mm),t.removeEventListener("blur",this._blur),t.removeEventListener("contextmenu",this._ctx)}}class Sm{constructor(){this.boxes=[]}add(t,e,n,s,r={}){const a={minx:t,maxx:e,minz:n,maxz:s,enabled:!0,door:!1,sight:!0,...r};return this.boxes.push(a),a}resolve(t,e,n,{ignoreDoors:s=!1}={}){for(let r=0;r<2;r++)for(const a of this.boxes){if(!a.enabled||s&&a.door)continue;const o=Math.max(a.minx,Math.min(t,a.maxx)),h=Math.max(a.minz,Math.min(e,a.maxz));let l=t-o,c=e-h;const u=l*l+c*c;if(!(u>=n*n))if(u>1e-8){const d=Math.sqrt(u),p=n-d;t+=l/d*p,e+=c/d*p}else{const d=t-a.minx,p=a.maxx-t,g=e-a.minz,_=a.maxz-e,m=Math.min(d,p,g,_);m===d?t=a.minx-n:m===p?t=a.maxx+n:m===g?e=a.minz-n:e=a.maxz+n}}return{x:t,z:e}}segmentBlocked(t,e,n,s,{ignoreDoors:r=!1,forCamera:a=!1}={}){const o=n-t,h=s-e;for(const l of this.boxes){if(!l.enabled||r&&l.door||!a&&!l.sight)continue;let c=0,u=1;const d=(p,g,_,m)=>{if(Math.abs(g)<1e-9)return p>=_&&p<=m;let f=(_-p)/g,v=(m-p)/g;if(f>v){const M=f;f=v,v=M}return c=Math.max(c,f),u=Math.min(u,v),c<=u};if(d(t,o,l.minx,l.maxx)&&d(e,h,l.minz,l.maxz))return!0}return!1}}class Em{constructor(t){this.cam=t,this.yaw=0,this.dist=5.4,this.height=3.1,this.pos=new P(0,4,5),this.look=new P,this.fov=60,this.fixed=null,this.sens=1}setRoom(t){this.fixed=t&&t.cam?t.cam:null}snap(t,e){this.update(10,t,e,0,!0)}update(t,e,n,s=0,r=!1){const a=e.x,o=e.z,h=r?1:1-Math.exp(-t*5);let l,c=new P,u=new P;if(this.fixed){c.set(...this.fixed.pos);const p=new P(...this.fixed.look);u.set(a,1,o).lerp(p,.35),l=this.fixed.fov||62}else{this.yaw+=s*this.sens;const p=Math.sin(this.yaw),g=Math.cos(this.yaw);let _=1;for(;_>.3&&n.segmentBlocked(a,o,a+p*this.dist*_+p*.4,o+g*this.dist*_+g*.4,{forCamera:!0});_-=.1);c.set(a+p*this.dist*_,this.height*(.55+.45*_),o+g*this.dist*_),u.set(a,1.3,o),l=62}const d=this.fixed?1-Math.exp(-t*3):h;this.pos.lerp(c,r?1:d),this.look.lerp(u,r?1:1-Math.exp(-t*6)),this.fov+=(l-this.fov)*(r?1:1-Math.exp(-t*3)),this.cam.position.copy(this.pos),this.cam.fov=this.fov,this.cam.updateProjectionMatrix(),this.cam.lookAt(this.look)}basis(){const t=new P().subVectors(this.look,this.pos);return t.y=0,t.lengthSq()<1e-6&&t.set(0,0,-1),t.normalize(),{fx:t.x,fz:t.z,rx:-t.z,rz:t.x}}}class bm{constructor(){this.model=Xn(),this.group=this.model.group,this.x=0,this.z=0,this.ry=Math.PI,this.radius=.4,this.moving=!1,this.running=!1,this.hidden=!1,this.dead=!1,this.light=!0,this.invuln=0,this.stepT=0,this.spot=new gl(16773320,3.2,26,.55,.55,1.1),this.spot.position.set(-.65,1.55,.5),this.target=new te,this.target.position.set(-.65,.9,9),this.group.add(this.spot,this.target),this.spot.target=this.target,this.lens=this.model.parts.lens}setPos(t,e,n){this.x=t,this.z=e,n!==void 0&&(this.ry=n),this.sync()}sync(){this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.ry}setLight(t){this.light=t,this.spot.visible=t,this.lens.material.color.setHex(t?16773824:4473924)}move(t,e,n,s){this.moving=!!e,this.running=!!e&&n;let r=!1;if(e){const a=n?4.4:2.5,o=s.resolve(this.x+e.x*a*t,this.z+e.z*a*t,this.radius);this.x=o.x,this.z=o.z;let l=Math.atan2(e.x,e.z)-this.ry;l=Math.atan2(Math.sin(l),Math.cos(l)),this.ry+=l*Math.min(1,t*14),this.stepT-=t,this.stepT<=0&&(this.stepT=n?.27:.46,r=!0)}return this.sync(),r}}class Fo{constructor(t,e){this.n=t.map(([n,s])=>({x:n,z:s})),this.col=e,this.adj=this.n.map((n,s)=>this.n.map((r,a)=>a).filter(r=>r!==s&&!e.segmentBlocked(n.x,n.z,this.n[r].x,this.n[r].z,{ignoreDoors:!0,forCamera:!0})))}nearestVisible(t,e){let n=-1,s=1e9;return this.n.forEach((r,a)=>{const o=Math.hypot(r.x-t,r.z-e);o<s&&!this.col.segmentBlocked(t,e,r.x,r.z,{ignoreDoors:!0,forCamera:!0})&&(s=o,n=a)}),n}next(t,e,n,s){if(!this.col.segmentBlocked(t,e,n,s,{ignoreDoors:!0,forCamera:!0}))return{x:n,z:s};const r=this.nearestVisible(t,e),a=this.nearestVisible(n,s);if(r<0||a<0)return{x:n,z:s};if(r===a)return{x:this.n[a].x,z:this.n[a].z};const o=new Array(this.n.length).fill(-2);o[r]=-1;const h=[r];for(;h.length;){const u=h.shift();if(u===a)break;for(const d of this.adj[u])o[d]===-2&&(o[d]=u,h.push(d))}if(o[a]===-2)return{x:this.n[a].x,z:this.n[a].z};let l=a,c=a;for(;o[l]!==-1;)c=l,l=o[l];return{x:this.n[c].x,z:this.n[c].z}}}class Cr{constructor(t){Object.assign(this,{x:0,z:0,ry:0,state:"patrol",speedPatrol:1.3,speedChase:3.4,sight:11,fov:Math.PI*.6,hearWalk:3.2,hearRun:8,radius:.45,attackRange:1.5,damage:34,windup:.45,patrol:[],wpi:0,nav:null,timer:0,wait:0,lastKnown:null,stagger:0,lostT:0,cd:0,moving:!1,canHit:!0,attackDone:!1,ignoreDoors:!0,home:null},t),this.home=this.home||{x:this.x,z:this.z}}reset(){this.x=this.home.x,this.z=this.home.z,this.state="patrol",this.timer=0,this.stagger=0,this.lastKnown=null,this.wpi=0,this.cd=0}sees(t,e){if(t.hidden||t.dead)return!1;const n=t.x-this.x,s=t.z-this.z,r=Math.hypot(n,s),a=this.sight*(t.light?1.15:.85);if(r>a)return!1;const o=Math.sin(this.ry),h=Math.cos(this.ry),l=Math.acos(Math.max(-1,Math.min(1,(o*n+h*s)/(r||1)))),c=r<(t.running?this.hearRun:t.moving?this.hearWalk:1.6);return l>this.fov/2&&!c?!1:!e.segmentBlocked(this.x,this.z,t.x,t.z)}step(t,e,n,s,r){const a=t-this.x,o=e-this.z,h=Math.hypot(a,o);if(h<.05)return this.moving=!1,h;const l=Math.min(h,n*s)/h,c=r.resolve(this.x+a*l,this.z+o*l,this.radius,{ignoreDoors:this.ignoreDoors});this.x=c.x,this.z=c.z,this.moving=!0;let d=Math.atan2(a,o)-this.ry;return d=Math.atan2(Math.sin(d),Math.cos(d)),this.ry+=d*Math.min(1,s*8),h}face(t,e,n){let r=Math.atan2(t-this.x,e-this.z)-this.ry;r=Math.atan2(Math.sin(r),Math.cos(r)),this.ry+=r*Math.min(1,n*8)}update(t,e,n){const s=[];if(this.moving=!1,this.cd=Math.max(0,this.cd-t),this.stagger>0)return this.stagger-=t,s;const r=this.sees(e,n),a=Math.hypot(e.x-this.x,e.z-this.z),o=(h,l,c)=>{const u=this.nav?this.nav.next(this.x,this.z,h,l):{x:h,z:l};return this.step(u.x,u.z,c,t,n)};switch(this.state){case"patrol":{if(this.wait>0){this.wait-=t;break}const h=this.patrol[this.wpi%this.patrol.length];if(!h)break;o(h[0],h[1],this.speedPatrol)<.7&&(this.wpi++,this.wait=.8),r&&(this.state="alert",this.timer=.7,s.push("alert"));break}case"alert":this.face(e.x,e.z,t),this.timer-=t,this.timer<=0&&(this.state="chase",this.lostT=0);break;case"chase":{if(r?(this.lastKnown={x:e.x,z:e.z},this.lostT=0):this.lostT+=t,r&&a<this.attackRange){this.state="attack",this.timer=this.windup,this.attackDone=!1;break}if(this.lostT>1.6&&!r){this.state="search",this.timer=5;break}const h=r?e:this.lastKnown||e;o(h.x,h.z,this.speedChase);break}case"attack":{this.face(e.x,e.z,t),this.timer-=t,this.timer<=0&&!this.attackDone&&(this.attackDone=!0,a<this.attackRange+.35&&!e.hidden&&s.push("attack"),this.cd=1),this.attackDone&&this.cd<=0&&(this.state="chase",this.lostT=0);break}case"search":{if(r){this.state="alert",this.timer=.4,s.push("alert");break}const h=this.lastKnown;if(h&&o(h.x,h.z,this.speedPatrol*1.4)>.8)break;if(this.timer-=t,this.ry+=t*1.6,this.timer<=0){this.state="patrol";let l=0,c=1e9;this.patrol.forEach((u,d)=>{const p=Math.hypot(u[0]-this.x,u[1]-this.z);p<c&&(c=p,l=d)}),this.wpi=l,this.lastKnown=null}break}}return s}}const wm=(i,t,e,n)=>({cx:(i+t)/2,cz:(e+n)/2,w:t-i,d:n-e});function Tm(i,t){const e={rooms:Xi,doors:{},wardrobes:[],saves:[],anim:[],flames:[]},n=(S,I,N,V,K=0)=>(S.position.set(I,N,V),S.rotation.y=K,i.add(S),S),s=(S,I,N,V,K=!1)=>t.add(S-N/2,S+N/2,I-V/2,I+V/2,{sight:K}),r=S=>(e.flames.push(S.userData.flame),S),a=be(300,300,ft("grass",6320224),0,-.02,0,"up",4);i.add(a);const o=new Se,h=[];for(let S=0;S<260;S++){const I=Math.random()*Math.PI*2,N=.15+Math.random()*1.2,V=150;h.push(Math.cos(I)*Math.cos(N)*V,Math.sin(N)*V,Math.sin(I)*Math.cos(N)*V)}o.setAttribute("position",new ie(h,3));const l=new fl(o,new Xr({color:14209279,size:1.3,sizeAttenuation:!1,fog:!1}));i.add(l);const c=new Et(new Ki(7,1),new Ln({color:14735615,fog:!1}));c.position.set(-60,70,110),i.add(c),e.sky=[l,c];const u={garden:["grass",3],hall:["wood",3],corridor:["wood",3],library:["wood",3],office:["wood",3],cellar:["tile",3],kitchen:["tile",3],bedrooms:["wood",3],lab:["metal",3]};for(const S of Xi){const I=wm(S.x1,S.x2,S.z1,S.z2),[N,V]=u[S.id],K=be(I.w,I.d,ft(N,S.id==="garden"?16777215:14540253),I.cx,0,I.cz,"up",V);K.receiveShadow=!0,i.add(K),S.outdoor||i.add(be(I.w,I.d,ft("plaster"),I.cx,Pe,I.cz,"down",3))}i.add(be(3,24,ft("stone",11184810),0,.02,28,"up",2)),i.add(be(3.2,15.4,ft("carpet"),0,.02,8,"up",2)),i.add(be(15.6,1.8,ft("carpet"),17,.02,8,"up",2)),i.add(be(7,5,ft("carpet",13408665),33,.02,8,"up",2)),i.add(be(6,4.6,ft("carpet",10070732),-17,.02,8,"up",2));const d=ft("plaster");for(const S of om){const I=(S.gaps||[]).map(k=>({a:k.at-k.w/2,b:k.at+k.w/2})).sort((k,j)=>k.a-j.a),N=[];let V=S.a;for(const k of I)k.a>V&&N.push([V,k.a]),V=k.b;V<S.b&&N.push([V,S.b]);const K=ft(S.pos),ut=ft(S.neg),J=S.axis==="x"?[d,d,d,d,K,ut]:[K,ut,d,d,d,d];for(const[k,j]of N){const it=j-k,at=(k+j)/2,L=k===S.a?nn/2:0,bt=j===S.b?nn/2:0;S.axis==="x"?(i.add(st(it,Pe,nn,J,at,Pe/2,S.c,3)),t.add(k-L,j+bt,S.c-nn/2,S.c+nn/2)):(i.add(st(nn,Pe,it,J,S.c,Pe/2,at,3)),t.add(S.c-nn/2,S.c+nn/2,k-L,j+bt))}for(const k of I){const j=k.b-k.a,it=(k.a+k.b)/2,at=Pe-wn;i.add(S.axis==="x"?st(j,at,nn,J,it,wn+at/2,S.c,3):st(nn,at,j,J,S.c,wn+at/2,it,3))}}for(const S of lm){const I=S.at-S.w/2,N=new Rt;S.axis==="x"?N.position.set(I,0,S.c):N.position.set(S.c,0,I);let V;S.shelf?(V=zi(S.w,wn,0,7),V.position.set(S.w/2,0,0)):(V=new Rt,S.axis==="x"?(V.add(st(S.w-.06,wn,.16,ft(S.tex||"darkwood",12303291),S.w/2,wn/2,0,1.5)),V.add(st(.12,.12,.3,Dt(13148208),S.w-.25,1.2,0))):(V.add(st(.16,wn,S.w-.06,ft(S.tex||"darkwood",12303291),0,wn/2,S.w/2,1.5)),V.add(st(.3,.12,.12,Dt(13148208),0,1.2,S.w-.25)))),N.add(V),i.add(N);const K=S.axis==="x"?t.add(S.at-S.w/2,S.at+S.w/2,S.c-.18,S.c+.18,{door:!0}):t.add(S.c-.18,S.c+.18,S.at-S.w/2,S.at+S.w/2,{door:!0}),ut={def:S,piv:N,collider:K,open:0,target:0,sign:S.axis==="x"?-1:1,x:S.axis==="x"?S.at:S.c,z:S.axis==="x"?S.c:S.at,setOpen(J,k){this.target=J?1:0,k&&(this.open=this.target,this.apply())},apply(){this.piv.rotation.y=this.sign*this.open*1.75,this.collider.enabled=this.open<.5},update(J){Math.abs(this.target-this.open)>.001&&(this.open+=(this.target-this.open)*Math.min(1,J*4),this.apply())}};e.doors[S.id]=ut}const p=ft("brick",10061960,{}),g=Dt(1446688);i.add(st(29,6,3,p,0,Pe+3,14.6,3));const _=new Et(new Ze(15,6,4),g);_.rotation.y=Math.PI/4,_.scale.set(1.45,1,.55),_.position.set(0,Pe+9,8),i.add(_),i.add(st(5,9,5,p,0,Pe+4.5,12,3));const m=new Et(new Ze(4.2,4,4),g);m.rotation.y=Math.PI/4,m.position.set(0,Pe+11,12),i.add(m);const f=(S,I,N,V,K)=>n(zr(1.1,1.7,K),S,I,N,V);for(const S of[-11,-7,7,11])f(S,2.6,16.28,0,13140016);for(const S of[-11,-6,6,11])f(S,7.2,16.12,0,S%2?12611624:9064640);f(0,Pe+6,14.55,0,16765056);const v=ft("iron"),M=(S,I,N,V)=>{const K=Math.hypot(N-S,V-I),ut=Math.floor(K/.6);for(let J=0;J<=ut;J++){const k=J/ut,j=st(.07,2.6,.07,v,S+(N-S)*k,1.3,I+(V-I)*k);i.add(j);const it=new Et(new Ze(.07,.25,4),v);it.position.set(j.position.x,2.72,j.position.z),i.add(it)}i.add(st(Math.abs(N-S)||.05,.08,Math.abs(V-I)||.05,v,(S+N)/2,2.2,(I+V)/2)),i.add(st(Math.abs(N-S)||.05,.08,Math.abs(V-I)||.05,v,(S+N)/2,.5,(I+V)/2))};M(-14,16,-14,40),M(14,16,14,40),M(-14,40,14,40),t.add(-14.2,-13.8,16,40.2,{sight:!1}),t.add(13.8,14.2,16,40.2,{sight:!1}),t.add(-14,14,39.8,40.2,{sight:!1});for(const S of[-2.4,2.4]){i.add(st(1,3.4,1,ft("stone",10061977),S,1.7,40));const I=new Et(new Ki(.4,0),ft("stone",11184810));I.position.set(S,3.7,40),i.add(I)}n(Po(Math.PI),-9.5,0,23),s(-9.5,23,1.2,1.2),n(Po(Math.PI),9.5,0,23),s(9.5,23,1.2,1.2);for(let S=0;S<18;S++){const I=S%2?1:-1,N=18+(S>>1)*6+Math.random()*2;n(Or(5+Math.random()*3,S),I*(17+Math.random()*10),0,N+Math.random()*6)}for(let S=0;S<6;S++)n(Or(6,S+20),-20+S*8,0,48+Math.random()*6);for(const[S,I]of[[-11,27],[-8,29],[8.5,30],[11,26.5],[-12,20.5],[12,33]])n(st(.8,1.2,.25,ft("stone",8947865),0,0,0,1),S,.6,I,(Math.random()-.5)*.4),s(S,I,.9,.4);const w=n(nm(),0,Pe-1.2,8);e.chandelier=w,w.children.forEach(S=>S.userData.flame&&r(S));for(const[S,I,N,V]of[[-8.7,3,Math.PI/2,1],[-8.7,13,Math.PI/2,2],[8.7,13,-Math.PI/2,3],[-4.5,.25,0,4],[4.5,.25,0,5]])n(On(V),S,2.7,I,N);for(const S of[-2.6,2.6])n(mi(.9,.9,.8),S,0,.9),s(S,.9,.9,.9),r(n(sn(0,0,0),S,.88,.9));for(let S=0;S<6;S++)i.add(st(.55,.3*(S+1),2.8,ft("wood",8943462),5.4+S*.55,.15*(S+1),4,1.5));i.add(st(.15,2.4,2.9,ft("darkwood"),5.1,1.2,4)),i.add(st(.25,2.6,2.9,ft("darkwood",5588019),8.55,3,4)),t.add(4.9,8.8,2.5,5.5,{sight:!1});const A=be(2,2,ft("carpet"),-2,.03,9,"up",2);i.add(A);for(const S of[13,19,22.5])r(n(sn(0,0,0),S,1.6,6.8)),n(st(.5,.06,.25,ft("darkwood"),0,0,0),S,1.45,6.8);for(const[S,I,N,V]of[[14.5,6.72,0,2],[20.5,6.72,0,3],[16,9.28,Math.PI,4],[22,9.28,Math.PI,1]])n(On(V,.9,1.3),S,2.5,I,N);for(const S of[27.5,30.5])n(zi(3,3.6,0,S|0),S,0,.55),s(S,.55,3,.6,!1);for(const S of[3.2,6,11,13.6])S!==6&&(n(zi(2.6,3.6,Math.PI/2,S*3|0),25.55,0,S),s(25.55,S,.6,2.6));for(const S of[6.2,9.6,12.2])n(zi(2.8,3.6,-Math.PI/2,S|0),40.45,0,S),s(40.45,S,.6,2.8);n(mi(2.6,1.3),33,0,8),s(33,8,2.6,1.3),n(ki(),33,0,9.5,Math.PI),n(ki(),31.4,0,8,-Math.PI/2),r(n(sn(0,0,0),34,.9,7.6)),n(On(2,1.2,1.6),33,2.8,15.72,Math.PI);const R=document.createElement("canvas");R.width=96,R.height=32;const C=R.getContext("2d");C.fillStyle="#120a1c",C.fillRect(0,0,96,32),C.fillStyle="#a64dff",C.font="22px monospace",C.fillText("☾",6,24),C.fillText("◉",38,24),C.fillText("Ψ",70,24),C.fillText("▲",38,8);const F=new ns(R);F.magFilter=F.minFilter=Qt,F.colorSpace=At;const x=new Rt;x.add(st(1.8,.8,.1,ft("stone",10061977)));const E=new Et(new xn(1.5,.5),De({map:F}));E.position.z=.06,x.add(E),n(x,Uo.x,1.5,15.7,Math.PI),e.panel={x:Uo.x,z:15},r(n(sn(0,0,0),37,.05,1)),n(jp(2.4,1.1),-20,0,3.4),s(-20,3.4,2.4,1.1),n(ki(),-20,0,4.7,Math.PI);for(const S of[-12.5,-15.5])n(zi(3,3.4,0,S|0),S,0,.55),s(S,.55,3,.6);n(mi(1.6,.9,.7),-12.5,0,12),s(-12.5,12,1.6,.9),r(n(sn(0,0,0),-19.2,1,3.2)),n(On(5,1,1.4),-17,2.8,.25,0);const B=n($p(zn.rot),zn.x,0,zn.z);s(zn.x,zn.z,.9,.9),e.safe={x:zn.x+.6,z:zn.z,mesh:B},dm.forEach(([S,I])=>{n(Jp(Pe),S,0,I),t.add(S-.5,S+.5,I-.5,I+.5,{sight:!0})});const G=n(Qp(),Tn.x,0,Tn.z);t.add(Tn.x-1.5,Tn.x+1.5,Tn.z-1,Tn.z+1,{sight:!1}),e.altar={x:Tn.x,z:Tn.z+1.8,disc:G.userData.disc};const U=new Et(new Pi(2.4,.05,4,16),ke(9059296));U.rotation.x=Math.PI/2,U.position.set(0,.05,-13.2),i.add(U);for(const[S,I]of[[-2.2,-16.5],[2.2,-16.5],[-3.5,-14],[3.5,-14]])r(n(sn(0,0,0),S,0,I));n(st(10,.95,.8,ft("stone",9079446),0,0,0),-15.5,.475,-17.5),s(-15.5,-17.5,10,.8),n(im(),Ds.x,0,-17.4),s(Ds.x,-17.4,1.5,.9),e.stove={x:Ds.x,z:Ds.z},n(st(1.2,2.2,.9,ft("metal",12303291),0,0,0),-10.5,1.1,-17.4),s(-10.5,-17.4,1.2,.9),n(mi(2.6,1.4),-15,0,-8),s(-15,-8,2.6,1.4),n(ki(),-15,0,-6.4,Math.PI),n(ki(),-17,0,-8,-Math.PI/2),n(st(1.6,2.2,.8,ft("darkwood"),0,0,0),-24.2,1.1,-14.4),s(-24.2,-14.4,.8,1.6);for(const S of[-19,-16,-13]){const I=new Et(new Je(.25,.2,.3,6),ft("metal"));I.position.set(S,3.4,-12),i.add(I);const N=new Et(new Je(.02,.02,1.2,3),Dt(2236962));N.position.set(S,4.1,-12),i.add(N)}r(n(sn(0,0,0),-14.4,.85,-7.6)),n(On(3,.9,1.2),-24.75,2.6,-6,Math.PI/2),i.add(be(9,6,ft("carpet",8952251),33,.02,-9,"up",2)),n(Do(0,4860506),28,0,-16.4),s(28,-16.4,1.7,2.7),n(Do(0,2767450),33,0,-16.4),s(33,-16.4,1.7,2.7),n(st(.8,.8,.6,ft("darkwood"),0,0,0),30.6,.4,-17.5),s(30.6,-17.5,.8,.6),r(n(sn(0,0,0),30.9,.8,-17.5)),n(st(2.2,1.1,.7,ft("darkwood"),0,0,0),37,.55,-1),s(37,-1,2.2,.7),n(mi(1.2,1.2,.7),38.5,0,-9),s(38.5,-9,1.2,1.2),n(On(1,1,1.4),40.75,2.7,-8,-Math.PI/2),n(On(4,.9,1.2),33,2.7,-17.75,0);const z=n(am(),25.35,1.3,Rr.z,-Math.PI/2);e.lever={x:Rr.x,z:Rr.z,rod:z.userData.rod};const W=n(rm(),Bi.x,0,-16.6);t.add(Bi.x-2,Bi.x+2,-17.6,-15.6,{sight:!1}),e.machine={x:Bi.x,z:Bi.z,core:W.userData.core},e.tanks=[];for(const[S,I]of[[11,-15.5],[23,-15.5],[11,-8],[23,-8]]){const N=n(sm(2.8),S,0,I);t.add(S-.8,S+.8,I-.8,I+.8,{sight:!1}),e.tanks.push(N.userData.core)}for(const S of[14.5,19.5])n(mi(2.2,1.1,.9),S,0,-4),s(S,-4,2.2,1.1);i.add(be(4,3,ft("carpet",5605495),17,.02,-12,"up",2)),r(n(sn(0,0,0),14.5,.95,-4));for(const S of cm){n(Kp(S.rot),S.x,0,S.z);const I=Math.abs(Math.sin(S.rot))>.5;t.add(S.x-(I?.5:.75),S.x+(I?.5:.75),S.z-(I?.75:.5),S.z+(I?.75:.5),{sight:!1}),e.wardrobes.push({...S,fx:S.x+Math.sin(S.rot)*1.4,fz:S.z+Math.cos(S.rot)*1.4})}for(const S of hm){const I=n(Zp(),S.x,0,S.z);s(S.x,S.z,.9,.6),e.saves.push({...S,ring:I.userData.ring})}return e.update=(S,I)=>{Object.values(e.doors).forEach(N=>N.update(S)),e.flames.forEach((N,V)=>{N.scale.set(1,.8+Math.sin(I*14+V*3)*.25+Math.random()*.15,1)}),e.chandelier&&(e.chandelier.rotation.z=Math.sin(I*.7)*.025),e.saves.forEach(N=>{N.ring.rotation.z=I*2,N.ring.position.y=.9+Math.sin(I*2)*.05}),e.tanks&&e.tanks.forEach((N,V)=>{N.rotation.y=I*(1+V*.3),N.position.y=1.4+Math.sin(I*2+V)*.08}),e.machine&&(e.machine.core.rotation.y=I*2,e.machine.core.rotation.x=I),e.altar.disc&&(e.altar.disc.rotation.y=I*1.5,e.altar.disc.position.y=1.6+Math.sin(I*2)*.05)},e}const kn=(i,t,e,n,s=0,r=0,a=0)=>{const o=new Et(new Ue(i,t,e),n);return o.position.set(s,r,a),o};function Am(){const i=re({color:723472}),t=re({color:1315354}),e=De({color:16777215}),n=new Rt,s=new Rt;n.add(s);const r=[],a=[];for(const c of[-1,1]){const u=new Rt;u.position.set(c*.22,1.7,0),u.add(kn(.2,1.7,.22,i,0,-.85,0)),s.add(u),r.push(u);const d=new Rt;d.position.set(c*.5,3,0),d.add(kn(.14,1.9,.14,i,0,-.95,0)),d.add(kn(.1,.4,.1,i,0,-2,.05)),s.add(d),a.push(d)}s.add(kn(.8,1.4,.4,t,0,2.5,0));const o=new Et(new Ze(.55,1.2,5),t);o.position.set(0,1.75,0),o.rotation.y=.3,s.add(o);const h=new Rt;h.position.set(0,3.5,.05),s.add(h),h.add(kn(.38,.62,.34,i)),h.add(kn(.09,.05,.04,e,-.1,.08,.18)),h.add(kn(.09,.05,.04,e,.1,.08,.18));const l=new Ai(16777215,0,6);return h.add(l),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),{group:n,update(c,u,d){const p=Math.sin(c*(d?8:4))*(u?.6:0);r[0].rotation.x=p,r[1].rotation.x=-p,a[0].rotation.x=-p*.5+(d?-.9:0),a[1].rotation.x=p*.5+(d?-.9:0),s.rotation.x=d?.25:0,h.rotation.z=Math.sin(c*1.3)*.1,s.position.y=u?Math.abs(Math.cos(c*4))*.05:0}}}const Gi=(i,t,e,n,s=0,r=0,a=0)=>{const o=new Et(new Ue(i,t,e),n);return o.position.set(s,r,a),o};function Rm(){const i=re({color:2759706}),t=re({color:1314831}),e=De({color:16722474}),n=new Rt;n.add(Gi(.55,.28,.9,i,0,.3,0)),n.add(Gi(.4,.25,.32,i,0,.32,.55)),n.add(Gi(.07,.05,.04,e,-.1,.38,.72)),n.add(Gi(.07,.05,.04,e,.1,.38,.72));const s=[];for(let r=0;r<3;r++)for(const a of[-1,1]){const o=Gi(.5,.05,.05,t,a*.4,.2,-.25+r*.3);o.rotation.z=-a*.5,n.add(o),s.push(o)}return n.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),{group:n,update(r,a){s.forEach((o,h)=>{o.rotation.y=Math.sin(r*18+h)*.4*(a>0?1:.1)})}}}const An=(i,t,e,n,s=0,r=0,a=0)=>{const o=new Et(new Ue(i,t,e),n);return o.position.set(s,r,a),o};function Cm(){const i=De({color:328456,transparent:!0,opacity:.85}),t=De({color:16777215}),e=new Rt,n=new Rt;return e.add(n),n.add(An(.7,1.3,.3,i,0,1.2,0)),n.add(An(.5,.55,.3,i,0,2.15,0)),n.add(An(.18,1.5,.12,i,-.5,1.2,0)),n.add(An(.18,1.5,.12,i,.5,1.2,0)),n.add(An(.25,.9,.2,i,-.2,.45,0)),n.add(An(.25,.9,.2,i,.2,.45,0)),n.add(An(.12,.07,.04,t,-.12,2.2,.17)),n.add(An(.12,.07,.04,t,.12,2.2,.17)),{group:e,mats:[i],update(s,r,a){n.position.y=Math.sin(s*3)*.05,n.rotation.z=Math.sin(s*2.2)*.06+(r?Math.sin(s*9)*.08:0),i.opacity=.85*(1-a),n.scale.set(1+a*.4,1-a*.3,1)}}}const Lm=()=>Xn({possessed:!0});class Pm{constructor(){this.el=Q("div"),this.el.id="hud",Ie().appendChild(this.el),this.el.innerHTML=`
      <div class="hud-tl"><div class="port"></div><div><div class="lives px">03</div><div class="hpbar"><div></div></div></div></div>
      <div class="hud-tr px"><div class="gem"></div><span class="cry">00</span></div>
      <div class="hud-bl px"><div class="ammo">00</div><div class="bat">FLASH 100%</div></div>
      <div class="roomname px"></div><div class="msg px"></div><div class="prompt px"></div>
      <div class="hurt"></div><div class="fadeblk"></div>`;const t=e=>this.el.querySelector(e);this.lives=t(".lives"),this.hp=t(".hpbar>div"),this.cry=t(".cry"),this.ammo=t(".ammo"),this.bat=t(".bat"),this.room=t(".roomname"),this.msg=t(".msg"),this.prompt=t(".prompt"),this.hurtEl=t(".hurt"),this.fadeEl=t(".fadeblk"),this.dlg=null,this.dlgQueue=[],this.dlgDone=null,this.typed=0,this.msgT=0,this.roomT=0}update(t,e){this.lives.textContent=String(t.lives).padStart(2,"0"),this.hp.style.width=Math.max(0,t.hp)+"%",this.hp.style.background=t.hp>50?"#7ad03a":t.hp>25?"#d0b03a":"#d03a3a",this.cry.textContent=String(t.crystals).padStart(2,"0"),this.ammo.textContent=String(t.ammo).padStart(2,"0");const n=Math.ceil(t.battery);if(this.bat.textContent=`FLASH ${n}%${t.light?"":" OFF"}`,this.bat.classList.toggle("low",n<=15),this.msgT>0&&(this.msgT-=e,this.msgT<=0&&(this.msg.textContent="")),this.roomT>0&&(this.roomT-=e,this.roomT<=0&&this.room.classList.remove("on")),this.dlg){this.typed+=e*55;const s=this.dlgCur.text;this.dlgTxt.textContent=s.slice(0,Math.floor(this.typed)),this.dlgNx.style.visibility=this.typed>=s.length?"visible":"hidden"}}setPrompt(t){this.prompt.textContent=t||""}toast(t,e=2.6){this.msg.textContent=t,this.msgT=e}roomName(t){this.room.textContent=t,this.room.classList.add("on"),this.roomT=2.6}hurt(){this.hurtEl.classList.add("on"),requestAnimationFrame(()=>requestAnimationFrame(()=>this.hurtEl.classList.remove("on")))}fade(t){this.fadeEl.classList.toggle("on",t)}get talking(){return!!this.dlg}say(t,e){this.dlgQueue=t.slice(),this.dlgDone=e,this.next(!0)}next(t){if(this.dlg&&!t&&this.typed<this.dlgCur.text.length){this.typed=1e9;return}if(!this.dlgQueue.length){this.dlg&&(this.dlg.remove(),this.dlg=null);const e=this.dlgDone;this.dlgDone=null,e&&e();return}this.dlgCur=this.dlgQueue.shift(),this.typed=0,this.dlg||(this.dlg=Q("div","dlg"),this.dlg.innerHTML='<div class="who px"></div><div class="txt"></div><div class="nx">▼</div>',this.dlg.onclick=()=>this.next(),this.el.appendChild(this.dlg),this.dlgWho=this.dlg.querySelector(".who"),this.dlgTxt=this.dlg.querySelector(".txt"),this.dlgNx=this.dlg.querySelector(".nx")),this.dlgWho.textContent=this.dlgCur.who?this.dlgCur.who+":":"",this.dlgWho.style.color=this.dlgCur.color||""}dispose(){this.el.remove()}}class Dm{constructor(t,e){this.app=t,this.scene=e,this.open=!1}show(){if(this.open)return;this.open=!0;const t=this.app;this.ov=Q("div","overlay");const e=Q("div","panel");e.appendChild(Q("h3","","PAUSED")),this.ov.appendChild(e),Ie().appendChild(this.ov);const n=s=>{this.menu.detach(),this.ov.style.display="none",s(()=>{this.ov.style.display="",this.menu.attach()})};this.menu=new jr(t,[{label:"RESUME",action:()=>this.hide()},{label:"INVENTORY",action:()=>n(s=>this.scene.openInventory(s))},{label:"SETTINGS",action:()=>n(s=>Ml(t,s))},{label:"SAVE GAME",action:()=>n(s=>Os(t,"save",r=>{this.scene.saveTo(r),s()},s))},{label:"LOAD GAME",action:()=>n(s=>Os(t,"load",r=>{this.hide(!0),this.scene.loadFrom(r)},s))},{label:"RETURN TO MAIN MENU",action:()=>n(s=>Kr(t,"Return to the main menu? Unsaved progress will be lost.",()=>{this.hide(!0),t.goto("menu")},s))}],{onEsc:()=>this.hide()}),e.appendChild(this.menu.el),this.menu.attach()}hide(t){this.open&&(this.open=!1,this.menu.detach(),this.ov.remove(),t||this.scene.resume())}}function Im(i,t,{onClose:e,onUse:n}={}){const s=_n(i,"INVENTORY",{onClose:e,noEsc:!0});let r="item",a=0;const o=Q("div","tabs"),h=Q("div");s.panel.append(o,h);const l=()=>{i.audio.back(),document.removeEventListener("keydown",u,!0),s.close()};function c(){o.innerHTML="",h.innerHTML="",[["item","ITEM"],["files","FILES"]].forEach(([p,g])=>{const _=Q("div","tab"+(r===p?" on":""),g);_.onclick=()=>{r=p,a=0,i.audio.select(),c()},o.appendChild(_)});const d=Q("div","invwrap");if(h.appendChild(d),r==="item"){const p=Q("div","inv");d.appendChild(p);for(let v=0;v<zs;v++){const M=t.inv.slots[v],w=Q("div","cell"+(v===a?" sel":""),M?Ke[M.id].icon+(M.qty>1?`<span class="q">x${M.qty}</span>`:""):"");w.onclick=()=>{a=v,i.audio.select(),c()},p.appendChild(w)}const g=t.inv.slots[a],_=Q("div","desc");_.innerHTML=g?`<b>${Ke[g.id].name}</b>${Ke[g.id].desc}<br><br>Qty: ${g.qty}`:"<b>—</b>Empty slot.",d.appendChild(_);const m=Q("div","btns");if(g&&Ke[g.id].use){const v=Q("button","btn","USE");v.onclick=()=>{const M=n?n(g.id):t.useItem(g.id);i.audio.confirm(),c(),_.innerHTML+=`<br><br><span style="color:#ffd9a0">${M}</span>`},m.appendChild(v)}const f=Q("button","btn","CLOSE");f.onclick=l,m.appendChild(f),h.appendChild(m),h.insertAdjacentHTML("beforeend",`<div class="small" style="margin-top:8px">Crystals: ${t.crystals} &nbsp; Ammo: ${t.ammo} &nbsp; Flash: ${Math.ceil(t.battery)}%</div>`)}else{const p=Q("div","slots");p.style.minWidth="180px",d.appendChild(p),t.docs.length||p.appendChild(Q("div","small","No files found yet.")),t.docs.forEach((v,M)=>{const w=Q("div","slot"+(M===a?" sel":""),yi[v].title);w.onclick=()=>{a=M,i.audio.select(),c()},p.appendChild(w)});const g=t.docs[a],_=Q("div","doc",g?`<b style="color:var(--orange)">${yi[g].title}</b>

${yi[g].text}`:"");d.appendChild(_);const m=Q("div","btns"),f=Q("button","btn","CLOSE");f.onclick=l,m.appendChild(f),h.appendChild(m)}}const u=d=>{if(d.code==="Escape"||d.code==="KeyI"){d.preventDefault(),d.stopPropagation(),l();return}const p=r==="item"?zs:Math.max(1,t.docs.length);if(d.code==="ArrowRight"||d.code==="KeyD")a=(a+1)%p,i.audio.select(),c();else if(d.code==="ArrowLeft"||d.code==="KeyA")a=(a+p-1)%p,i.audio.select(),c();else if(d.code==="ArrowDown"||d.code==="KeyS")a=r==="item"?(a+4)%p:(a+1)%p,i.audio.select(),c();else if(d.code==="ArrowUp"||d.code==="KeyW")a=r==="item"?(a+p-4)%p:(a+p-1)%p,i.audio.select(),c();else if(d.code==="Tab")r=r==="item"?"files":"item",a=0,i.audio.select(),c();else if(d.code==="KeyE"||d.code==="Enter"){const g=h.querySelector(".btn");g&&g.textContent==="USE"&&g.click()}else return;d.preventDefault(),d.stopPropagation()};return document.addEventListener("keydown",u,!0),c(),s}function Um(i,t,e){const n=yi[t],s=_n(i,n.title,{onClose:e,noEsc:!0});s.panel.appendChild(Q("div","doc",n.text));const r=Q("div","btns"),a=Q("button","btn","CLOSE");r.appendChild(a),s.panel.appendChild(r);const o=()=>{document.removeEventListener("keydown",h,!0),i.audio.back(),s.close()},h=l=>{["Escape","Enter","KeyE","Space"].includes(l.code)&&(l.preventDefault(),l.stopPropagation(),o())};document.addEventListener("keydown",h,!0),a.onclick=o}const Nm={l_doc:1.05,o_doc:1.1,o_cry:1.15,k_doc:1.05,b_doc:.95},Fm=["bedrooms","lab","kitchen"],Oo=kr.filter(i=>i.type==="crystal").length+1,Om=[[-6,-4],[6,-4],[0,-9],[-6,-13],[6,-13],[0,-6]],zm=[[0,-3],[-6,-3],[6,-3],[0,-8.5],[-7,-9],[7,-9],[0,-12],[-7,-14],[7,-14],[-2,-6],[2,-6]],zo=(i,t,e,n=0)=>t>=i.x1+n&&t<=i.x2-n&&e>=i.z1+n&&e<=i.z2-n;class km{constructor(t){this.app=t,this.scene=new es,this.camera=new fe(62,1.6,.1,140),this.col=new Sm,this.input=new ym(window),this.paused=!1,this.uiOpen=!1,this.skip=0,this.basis=null,this.t=0,this.items=[],this.enemies=[],this.fireCd=0,this.beam=null,this.lampT=null,this.hiddenT=0,this.over=!1,this.stepAcc=0,this.hb=0}get S(){return this.app.settings}enter({state:t,intro:e}){const n=this.app,s=this.st=t,r=this.scene;this.hud=new Pm,this.pause=new Dm(n,this),this.ambient=new $i(2760768,.6),this.moon=new Yr(7373055,0),this.moon.position.set(-20,40,30),this.lamp=new Ai(16756848,1.5,20,1.6),r.add(this.ambient,this.moon,this.lamp),this.world=Tm(r,this.col),this.player=new bm,r.add(this.player.group),this.player.setPos(s.pos.x,s.pos.z,s.pos.ry),this.player.setLight(s.light&&s.battery>0),this.rig=new Em(this.camera),this.rig.sens=this.S.get("sensitivity"),this.setShadows();for(const c of kr)s.taken.includes(c.id)||c.req&&!s.flags[c.req]||this.spawnItem(c);for(const[c,u]of Object.entries(this.world.doors))s.doors[c]&&u.setOpen(!0,!0);s.flags.secret&&this.world.doors.secret.setOpen(!0,!0),s.flags.sealed&&this.world.doors.front.setOpen(!1,!0);const a=new Fo(um,this.col),o=new Fo(zm,this.col),h=Am();r.add(h.group),this.watcher={ai:new Cr({x:36,z:12,patrol:fm,nav:a,speedPatrol:1.5,speedChase:3.5,sight:12,damage:34,home:{x:36,z:12}}),model:h,kind:"watcher",alive:!0};const l=Lm();r.add(l.group),this.fox={ai:new Cr({x:-6,z:-14,patrol:Om,nav:o,speedPatrol:1.8,speedChase:3.7,sight:20,fov:Math.PI*2,damage:30,attackRange:1.7,home:{x:-6,z:-14}}),model:l,kind:"fox",alive:!0},this.crawlers=pm.map(([c,u],d)=>{const p=Rm();return r.add(p.group),{ai:new Cr({x:c,z:u,patrol:[[c,u],[c+2,u+1.5],[c-1,u+2]],speedPatrol:1,speedChase:3.1,sight:8,fov:Math.PI*2,damage:10,attackRange:1,windup:.25,radius:.3,ignoreDoors:!1,hearWalk:6,home:{x:c,z:u}}),model:p,kind:"crawler",alive:!0}}),this.enemies=[this.watcher,this.fox,...this.crawlers],this.shadows=[0,1].map(()=>{const c=Cm();return c.group.visible=!1,r.add(c.group),{kind:"shadow",alive:!0,model:c,ai:{x:0,z:0,ry:0,moving:!1},state:"gone",timer:3,lit:0,cd:0}}),s.flags.lab_open&&(this.world.lever.rod.rotation.z=-1),this.syncEnemyVisibility(),this.room=this.roomAt(s.pos.x,s.pos.z)||Xi[5],this.applyRoom(this.room,!0),this.rig.setRoom(this.room),this.rig.snap(this.player,this.col),this.hud.roomName(this.room.name),n.audio.stopMusic(),n.audio.startAmbient(),n.audio.startMusic(this.room.music||"game"),this.onSettings(),e&&(this.skip=2,this.hud.say([{who:"Willow",text:"This is the place... the house from my dreams.",color:"#ff8a1e"},{who:"Willow",text:"The light in the top window is on. Somebody is home.",color:"#ff8a1e"}],()=>this.hud.toast("WASD move · SHIFT run · E interact · F flashlight · I inventory · SPACE fire",6)))}spawnItem(t){const e=em(t.type),n=Nm[t.id]??(t.type==="crystal"?.6:.4);e.position.set(t.x,n,t.z),this.scene.add(e),this.items.push({d:t,m:e,y:n})}revealReq(t){for(const e of kr)e.req===t&&!this.st.taken.includes(e.id)&&!this.items.some(n=>n.d===e)&&this.spawnItem(e)}roomAt(t,e){return Xi.find(n=>zo(n,t,e))}setShadows(){const t=this.S.get("shadowQuality"),e=this.player.spot;e.castShadow=t!=="off";const n=t==="medium"?512:256;e.shadow.mapSize.x!==n&&(e.shadow.mapSize.set(n,n),e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null)),e.shadow.camera.near=.5,e.shadow.camera.far=24,e.shadow.bias=-.002}onSettings(){this.player&&(this.setShadows(),this.rig.sens=this.S.get("sensitivity"))}syncEnemyVisibility(){const t=this.st.flags;this.watcher.model.group.visible=!!t.watcher_on&&this.watcher.alive,this.fox.model.group.visible=!!t.fox_on,this.crawlers.forEach(e=>{e.model.group.visible=e.alive})}applyRoom(t,e){this.amb={c:new It(t.amb[0]),i:t.amb[1]},this.lampT={...t.lamp,p:new P(...t.lamp.p),c:new It(t.lamp.c)},this.fogCol=new It(t.fog),this.world.sky.forEach(n=>{n.visible=!!t.outdoor}),this.scene.fog||(this.scene.fog=new Ti(t.fog,.03)),e&&(this.ambient.color.copy(this.amb.c),this.ambient.intensity=this.amb.i,this.lamp.position.copy(this.lampT.p),this.lamp.color.copy(this.lampT.c),this.lamp.intensity=this.lampT.i,this.scene.fog.color.copy(this.fogCol)),this.moon.intensity=t.outdoor?.55:0,this.baseFog=t.outdoor?.04:.03,this.app.audio.theme!==(t.music||"game")&&!this.st.flags.fox_on&&this.app.audio.startMusic(t.music||"game")}say(t,e){this.hud.say(t,()=>{this.skip=2,e&&e()})}nameOf(t){return t.d.type==="doc"?"Read "+yi[t.d.doc].title:t.d.type==="crystal"?"Take Purple Crystal":t.d.type==="ammo"?"Take Ammo":"Take "+Ke[t.d.type].name}update(t,e){this.t+=t;const n=this.input,s=this.st,r=this.hud,a=this.player;if(this.skip>0&&(this.skip--,n.clear()),this.world.update(t,this.t),r.update(s,t),this.paused||this.uiOpen||this.over){this.animateOnly(t),n.endFrame();return}if(r.talking){a.model.setAnim("idle"),a.model.update(t),(n.wasPressed("KeyE")||n.wasPressed("Enter")||n.wasPressed("Space")||n.mousePressed)&&r.next(),this.camAndLights(t,0),n.endFrame();return}if(n.wasPressed("Escape")){this.paused=!0,this.pause.show(),n.endFrame();return}if(n.wasPressed("KeyI")&&!a.dead){this.openInventory(),n.endFrame();return}s.playTime+=t,a.dead||(n.wasPressed("KeyF")&&!a.hidden&&this.toggleLight(),this.fireCd-=t,(n.wasPressed("Space")||n.mousePressed)&&!a.hidden&&this.fire(),this.movement(t),this.interaction(),s.light&&s.battery>0&&!a.hidden&&(s.battery=Math.max(0,s.battery-t*.22),s.battery<=0&&(this.toggleLight(!0),r.toast("The flashlight died."))),a.invuln=Math.max(0,a.invuln-t),this.trackRoom()),this.updateEnemies(t),this.animateItems(t),this.camAndLights(t,1),n.endFrame()}animateOnly(t){this.player.model.update(t),this.animateItems(t),this.camAndLights(t,0)}animateItems(t){for(const e of this.items)e.m.rotation.y+=t*1.6,e.m.position.y=e.y+Math.sin(this.t*2+e.d.x)*.05}camAndLights(t,e){const n=this.input,s=this.player;let r=0;e&&(r=((n.isDown("ArrowLeft")?1:0)-(n.isDown("ArrowRight")?1:0))*t*2-n.mouseDX*.005),this.rig.update(t,s,this.col,r);const a=1-Math.exp(-t*3);this.ambient.color.lerp(this.amb.c,a),this.ambient.intensity+=(this.amb.i-this.ambient.intensity)*a,this.lamp.position.lerp(this.lampT.p,a),this.lamp.color.lerp(this.lampT.c,a);const o=1+Math.sin(this.t*17)*.03+(Math.random()<.02?-.25:0);this.lamp.intensity+=(this.lampT.i*o-this.lamp.intensity)*Math.min(1,t*8),this.lamp.distance=this.lampT.d,this.scene.fog.color.lerp(this.fogCol,a),this.scene.background=this.scene.fog.color,this.scene.fog.density=this.baseFog*this.S.get("fog"),this.beam&&(this.beam.t-=t,this.beam.t<=0&&(this.scene.remove(this.beam.m),this.beam=null)),this.player.light&&(s.spot.intensity=3.2+Math.sin(this.t*23)*.05)}movement(t){const e=this.input,n=this.player;if(n.hidden){n.model.setAnim("hide"),n.model.update(t),e.wasPressed("KeyE")&&this.exitHide();return}const s=(e.isDown("KeyW")||e.isDown("ArrowUp")?1:0)-(e.isDown("KeyS")||e.isDown("ArrowDown")?1:0),r=(e.isDown("KeyD")?1:0)-(e.isDown("KeyA")?1:0);let a=null;if(s||r){this.basis||(this.basis=this.rig.basis());const l=this.basis;let c=l.fx*s+l.rx*r,u=l.fz*s+l.rz*r;const d=Math.hypot(c,u)||1;a={x:c/d,z:u/d}}else this.basis=null;const o=e.isDown("ShiftLeft")||e.isDown("ShiftRight");n.move(t,a,o,this.col)&&this.app.audio.footstep(o),n.model.anim!=="hurt"&&n.model.setAnim(this.over?"idle":a?o?"run":"walk":this.t%14>11?"look":"idle"),n.model.update(t)}toggleLight(t){const e=this.st,n=t?!1:!e.light;if(n&&e.battery<=0){this.hud.toast("The battery is empty."),this.app.audio.locked();return}e.light=n,this.player.setLight(n),this.app.audio.click()}fire(){const t=this.st,e=this.player;if(this.fireCd>0)return;if(this.fireCd=.5,t.ammo<=0){this.app.audio.click(),this.hud.toast("Out of ammo.");return}t.ammo--,this.app.audio.shoot(),this.app.audio.flash();const n=Math.sin(e.ry),s=Math.cos(e.ry),r=new Ue(.06,.06,12),a=new Et(r,new Ln({color:14262527}));a.position.set(e.x+n*6.5-Math.cos(e.ry)*.6,1.5,e.z+s*6.5+Math.sin(e.ry)*.6),a.rotation.y=e.ry,this.scene.add(a),this.beam={m:a,t:.08};let o=null,h=1e9;for(const l of[...this.enemies,...this.shadows]){if(!l.alive||!l.model.group.visible)continue;const c=l.ai.x-e.x,u=l.ai.z-e.z,d=Math.hypot(c,u);d>13||d<.1||(n*c+s*u)/d<.93-(d<3?.2:0)||this.col.segmentBlocked(e.x,e.z,l.ai.x,l.ai.z)||d<h&&(h=d,o=l)}o&&(o.kind==="crawler"?(o.alive=!1,o.model.group.visible=!1,this.app.audio.hit(),this.hud.toast("Crawler destroyed.")):o.kind==="shadow"?(o.state="gone",o.timer=9,o.model.group.visible=!1,this.app.audio.hit(),this.hud.toast("The shadow dissolves.")):o.kind==="watcher"?(o.ai.stagger=2.8,this.app.audio.growl(),this.hud.toast("The Watcher is stunned!")):this.hud.toast("It does not even flinch..."))}hurtPlayer(t){const e=this.st,n=this.player;n.invuln>0||n.dead||(e.hp-=t,n.invuln=1.1,this.app.audio.hit(),this.hud.hurt(),n.model.setAnim("hurt"),e.hp<=0&&this.die())}die(){const t=this.player,e=this.st;t.dead=!0,t.model.setAnim("death"),this.app.audio.stinger(),t.setLight(!1),setTimeout(()=>{this.live&&this.hud.fade(!0)},900),setTimeout(()=>{if(!this.live)return;if(e.lives--,e.lives<=0){this.gameOver();return}e.hp=60,t.dead=!1,t.hidden=!1,t.group.visible=!0,t.model.setAnim("idle");const n=e.checkpoint;t.setPos(n.x,n.z,n.ry),t.setLight(e.light&&e.battery>0),this.enemies.forEach(s=>s.ai.reset()),this.shadows.forEach(s=>{s.state="gone",s.timer=3}),this.room=this.roomAt(n.x,n.z)||this.room,this.rig.setRoom(this.room),this.applyRoom(this.room,!0),this.rig.snap(t,this.col),this.hud.fade(!1),this.hud.toast("LIFE LOST — "+e.lives+" left",3.5),this.skip=2},2600)}get live(){return!!this.hud}gameOver(){this.over=!0;const t=this.app,e=Q("div","full black");e.style.zIndex=30,e.innerHTML='<div class="px big" style="color:#b3122e;font-size:clamp(40px,9vw,110px)">GAME OVER</div><div class="small" style="margin:10px 0 24px">The house remembers you.</div>';const n=t.saves.last(),s=new jr(t,[{label:n?"RETRY FROM LAST SAVE":"TRY AGAIN",action:()=>{s.detach(),e.remove(),this.loadFrom(n)}},{label:"RETURN TO MAIN MENU",action:()=>{s.detach(),e.remove(),t.goto("menu")}}]);e.appendChild(s.el),Ie().appendChild(e),s.attach()}updateEnemies(t){const e=this.st,n=this.player,s=this.app.audio,r={x:n.x,z:n.z,hidden:n.hidden,dead:n.dead,running:n.running,moving:n.moving,light:n.light};let a=99,o=!1,h=!1;const l=!!e.flags.watcher_on;for(const c of this.enemies){if(!(c.kind==="watcher"&&l||c.kind==="fox"&&e.flags.fox_on||c.kind==="crawler"&&e.flags.crawlers_on)||!c.alive)continue;const d=c.ai.update(t,r,this.col);for(const m of d)m==="alert"&&(s.stinger(),c.kind==="watcher"&&this.hud.toast("It has seen you. RUN!")),m==="attack"&&(this.hurtPlayer(c.ai.damage),c.kind==="crawler"&&s.hit());const p=c.model.group;p.position.set(c.ai.x,0,c.ai.z),p.rotation.y=c.ai.ry;const g=c.ai.state==="chase"||c.ai.state==="attack";c.kind==="fox"?c.model.update(t,c.ai.moving):c.model.update(this.t,c.ai.moving?1:0,g),c.kind==="fox"&&c.model.setAnim(c.ai.moving?g?"run":"walk":"idle");const _=Math.hypot(c.ai.x-n.x,c.ai.z-n.z);a=Math.min(a,_),g&&(o=!0),n.hidden&&_<2.3&&c.kind!=="crawler"&&(h=!0)}l&&this.watcher.alive&&this.watcherDoors(),this.updateShadows(t),this.hb-=t,(o||a<5)&&this.hb<=0&&(s.heartbeat(),this.hb=o?.7:1.1),n.hidden&&(this.hiddenT=h?this.hiddenT+t:Math.max(0,this.hiddenT-t),this.hiddenT>3.2&&(this.hiddenT=0,this.exitHide(),this.hurtPlayer(30),this.hud.toast("It found you!")))}updateShadows(t){const e=this.st,n=this.player,s=this.t,r=!!e.flags.shadows_on&&Fm.includes(this.room.id)&&!n.dead;for(const a of this.shadows){const o=a.ai;if(!r){a.model.group.visible=!1,a.state="gone",a.timer=Math.min(a.timer,2.5);continue}if(a.state==="gone"){a.timer-=t,a.model.group.visible=!1,a.timer<=0&&this.spawnShadow(a);continue}a.model.group.visible=!0,a.cd-=t;const h=n.x-o.x,l=n.z-o.z,c=Math.hypot(h,l)||1,u=(Math.sin(n.ry)*-h+Math.cos(n.ry)*-l)/c,d=n.light&&!n.hidden&&c<13&&u>.8&&!this.col.segmentBlocked(n.x,n.z,o.x,o.z);if(a.lit=d?a.lit+t:Math.max(0,a.lit-t*.6),a.lit>.8){a.state="gone",a.timer=7,a.model.group.visible=!1;continue}if(o.moving=!1,!d&&!n.hidden){const g=n.light?2.1:3.2,_=Math.min(c,g*t)/c,m=this.col.resolve(o.x+h*_,o.z+l*_,.35);o.x=m.x,o.z=m.z,o.moving=!0,o.ry=Math.atan2(h,l)}c<1.1&&a.cd<=0&&!n.hidden&&(a.cd=1.4,this.hurtPlayer(15));const p=a.model.group;p.position.set(o.x,0,o.z),p.rotation.y=o.ry,a.model.update(s,o.moving,Math.min(1,a.lit/.8))}}spawnShadow(t){const e=this.room,n=this.player;for(let s=0;s<14;s++){const r=e.x1+2+Math.random()*(e.x2-e.x1-4),a=e.z1+2+Math.random()*(e.z2-e.z1-4);if(Math.hypot(r-n.x,a-n.z)<7)continue;const o=this.col.resolve(r,a,.4);if(!(Math.hypot(o.x-r,o.z-a)>.01)){t.ai.x=r,t.ai.z=a,t.state="stalk",t.lit=0,t.cd=1;return}}t.timer=1}watcherDoors(){const t=this.watcher.ai,e=this.player;for(const n of["corridor","library"]){const s=this.world.doors[n],r=Math.hypot(t.x-s.x,t.z-s.z),a=Math.hypot(e.x-s.x,e.z-s.z);r<2.8&&s.target===0?(s.setOpen(!0),s.byEnemy=!0,this.app.audio.door()):s.byEnemy&&r>6&&a>4&&s.target===1&&(s.setOpen(!1),s.byEnemy=!1)}}trackRoom(){const t=this.player,e=Xi.find(o=>zo(o,t.x,t.z,.4));if(!e||e===this.room)return;this.room=e,this.rig.setRoom(e),this.applyRoom(e),this.hud.roomName(e.name);const n=this.st;n.room=e.id,n.roomName=e.name,n.checkpoint={x:t.x,z:t.z,ry:t.ry},this.basis=this.basis;const s=n.flags,r=this.world.doors,a=this.app.audio;e.id==="hall"&&!s.hall_seen&&(s.hall_seen=!0,setTimeout(()=>{this.live&&(r.front.setOpen(!1),s.sealed=!0,a.door(),a.stinger(),s.watcher_on=!0,this.watcher.ai.reset(),this.syncEnemyVisibility(),this.say([{who:"Willow",text:"The door slammed shut behind me!",color:"#ff8a1e"},{who:"Willow",text:"Something is moving in this house. I need to find another way out.",color:"#ff8a1e"}]))},700)),e.id==="library"&&!s.lib_seen&&(s.lib_seen=!0,s.crawlers_on=!0,this.hud.toast("Something skitters between the shelves...",3.5),a.whisper()),e.id==="cellar"&&!s.cellar_seen&&(s.cellar_seen=!0,r.cellar.setOpen(!1),s.cellar_sealed=!0,s.fox_on=!0,s.watcher_on=!1,this.watcher.model.group.visible=!1,a.door(),a.stopMusic(),a.startMusic("final"),a.growl(),this.syncEnemyVisibility(),this.say([{who:"???",text:"...Willow...",color:"#a64dff"},{who:"Willow",text:"That voice... it sounds like mine.",color:"#ff8a1e"},{who:"Willow",text:"The altar. Whatever I came here for, it is on the altar.",color:"#ff8a1e"}])),e.id==="bedrooms"&&!s.bed_seen&&(s.bed_seen=!0,s.shadows_on=!0,a.whisper(),this.say([{who:"Willow",text:"Did that shadow just move?",color:"#ff8a1e"},{who:"Willow",text:"Light seems to make them fade. Keep the flashlight pointed at them.",color:"#ff8a1e"}])),e.id==="kitchen"&&!s.kit_seen&&(s.kit_seen=!0,s.shadows_on=!0,this.hud.toast("Something stirs in the dark corners...",3.5)),e.id==="lab"&&!s.lab_seen&&(s.lab_seen=!0,a.stinger(),this.say([{who:"Willow",text:"So this is where the crystals came from...",color:"#ff8a1e"},{who:"Willow",text:"Memories. Somebody turned memories into stone.",color:"#ff8a1e"}])),this.autosave()}snapshot(){const t=this.st,e=this.player;t.pos={x:e.x,z:e.z,ry:e.ry},t.light=this.st.light;for(const[n,s]of Object.entries(this.world.doors))t.doors[n]=s.target>.5;return t.serialize()}autosave(){this.app.saves.save("auto",this.snapshot())}saveTo(t){const e=this.app.saves.save(t,this.snapshot());this.hud.toast(e?"Game saved.":"Save failed (storage unavailable)."),this.app.audio.pickup()}loadFrom(t){const e=t&&this.app.saves.load(t);if(!e){this.app.goto("game",{state:new this.st.constructor,intro:!0});return}this.app.goto("game",{state:this.st.constructor.from(e)})}interaction(){const t=this.player,e=this.st,n=this.input,s=this.world;let r=null,a=1e9;const o=(h,l,c,u,d)=>{const p=Math.hypot(t.x-h,t.z-l);p<c&&p<a&&(a=p,r={label:u,act:d})};if(t.hidden){this.hud.setPrompt("E — Come out");return}for(const h of this.items)o(h.d.x,h.d.z,1.6,this.nameOf(h),()=>this.pickItem(h));for(const h of Object.values(s.doors))o(h.x,h.z,h.def.shelf?2.6:2.3,(h.target>.5?"Close ":"Open ")+h.def.name,()=>this.useDoor(h));for(const h of s.saves)o(h.x,h.z,1.7,"Save game",()=>this.useSave());for(const h of s.wardrobes)o(h.fx,h.fz,1.5,"Hide",()=>this.enterHide(h));o(s.safe.x,s.safe.z,1.8,e.flags.safe_open?"Empty safe":"Use safe",()=>this.useSafe()),o(s.panel.x,s.panel.z,1.9,e.flags.secret?"Symbol panel (solved)":"Examine symbol panel",()=>this.usePanel()),o(s.stove.x,s.stove.z,1.7,e.flags.cabinet?"Stove (nothing more here)":"Turn the stove dials",()=>this.useStove()),o(s.lever.x,s.lever.z,1.7,e.flags.lab_open?"Lever (already pulled)":"Pull the lever",()=>this.useLever()),o(s.machine.x,s.machine.z,2.2,e.flags.machine?"Machine (running)":"Examine the machine",()=>this.useMachine()),o(s.altar.x,s.altar.z,2.4,"Touch the altar",()=>this.useAltar()),this.hud.setPrompt(r?"E — "+r.label:""),r&&n.wasPressed("KeyE")&&r.act()}lockUI(t){this.uiOpen=!0,t(()=>{this.uiOpen=!1,this.skip=3})}pickItem(t){const e=this.st,n=this.app.audio,s=t.d.type,r=()=>{e.taken.push(t.d.id),this.scene.remove(t.m),this.items.splice(this.items.indexOf(t),1)};if(s==="doc"){r(),n.pickup(),e.docs.includes(t.d.doc)||e.docs.push(t.d.doc);const a=this.app.saves.meta();a.docs.includes(t.d.doc)||(a.docs.push(t.d.doc),this.app.saves.setMeta(a)),this.lockUI(o=>Um(this.app,t.d.doc,o));return}if(s==="crystal"){r(),e.crystals++,n.crystal(),this.hud.toast(`Purple crystal (${e.crystals}/${Oo})`);return}if(s==="ammo"){r(),e.ammo+=t.d.qty||3,n.pickup(),this.hud.toast(`+${t.d.qty||3} ammo`);return}if(!e.inv.canAdd(s)){this.hud.toast("Inventory full."),n.locked();return}e.inv.add(s),r(),n.pickup(),this.hud.toast("Picked up "+Ke[s].name)}useDoor(t){const e=this.st,n=t.def,s=this.app.audio,r=e.flags;if(t.target>.5){t.setOpen(!1),s.door();return}const a=o=>{s.locked(),this.hud.toast(o||n.lockedMsg||"Locked.")};if(n.id==="front"&&r.sealed)return a();if(n.id==="cellar"&&r.cellar_sealed)return a("It will not open anymore.");if(n.lockFlag&&!r[n.lockFlag])return a();if(n.lock&&!r["unlocked_"+n.id])if(e.inv.has(n.lock))r["unlocked_"+n.id]=!0,e.inv.remove(n.lock),this.hud.toast("Unlocked with the "+Ke[n.lock].name+".");else return a();t.setOpen(!0),s.door()}useSave(){const t=this.player,e=this.st;this.app.audio.tape(),e.checkpoint={x:t.x,z:t.z,ry:t.ry},this.lockUI(n=>Os(this.app,"save",s=>{this.saveTo(s),n()},n))}enterHide(t){const e=this.player;e.hidden=!0,e.setPos(t.x,t.z),e.group.visible=!1,e.spot.visible=!1,this.app.audio.door(),this.hud.toast("Hiding... hold still."),this.hiddenT=0,this.hideSpot=t}exitHide(){const t=this.player,e=this.hideSpot;t.hidden=!1,t.group.visible=!0,t.setPos(e.fx,e.fz),t.setLight(this.st.light&&this.st.battery>0),this.app.audio.door(),this.skip=1}codeLock(t,e,n,s){this.lockUI(r=>{const a=_n(this.app,t,{onClose:r}),o=[0,0,0],h=Q("div","dial");for(let p=0;p<3;p++){const g=Q("div"),_=Q("button","btn","▲"),m=Q("span","","0"),f=Q("button","btn","▼");_.onclick=()=>{o[p]=(o[p]+1)%10,m.textContent=o[p],this.app.audio.select()},f.onclick=()=>{o[p]=(o[p]+9)%10,m.textContent=o[p],this.app.audio.select()},g.append(_,m,f),h.appendChild(g)}a.panel.appendChild(h);const l=Q("div","small",n);a.panel.appendChild(l);const c=Q("div","btns"),u=Q("button","btn","OPEN"),d=Q("button","btn","CLOSE");c.append(d,u),a.panel.appendChild(c),d.onclick=()=>a.close(),u.onclick=()=>{o.join("")===e?(a.close(),s()):(this.app.audio.locked(),l.textContent="ERROR — wrong code.",l.style.color="#ff6a6a")}})}useSafe(){const t=this.st,e=t.flags;if(e.safe_open){this.hud.toast("The safe is empty.");return}this.codeLock("SAFE — 3 DIGITS","417","Four... one... seven? Somebody wrote it down somewhere.",()=>{e.safe_open=!0,this.app.audio.crystal(),t.inv.add("cellar_key"),t.crystals++,t.ammo+=4,this.hud.toast("Safe opened: Iron Key, crystal, ammo.",4)})}useStove(){const t=this.st.flags;if(t.cabinet){this.hud.toast("The cabinet beside the stove is open.");return}this.codeLock("STOVE DIALS","209","Three dials. Somebody here had a birthday...",()=>{t.cabinet=!0,this.revealReq("cabinet"),this.app.audio.door(),this.hud.toast("Click — the cabinet beside the stove opened.",4)})}useLever(){const t=this.st.flags,e=this.app.audio;if(t.lab_open){this.hud.toast("The lever is already pulled.");return}t.lab_open=!0,this.world.lever.rod.rotation.z=-1,this.world.doors.labdoor.setOpen(!0),e.door(),e.thump(),this.hud.toast("Stone grinds against stone... a hidden door opened.",4)}useMachine(){const t=this.st,e=t.flags,n=t.inv.count("gear");if(e.machine){this.hud.toast("The machine hums quietly.");return}if(n<2){this.app.audio.locked(),this.hud.toast(`The mechanism is missing brass gears (${n}/2).`,3.5);return}t.inv.remove("gear",2),e.machine=!0,this.revealReq("machine"),this.world.machine.core.material.color.setHex(6356880),this.app.audio.crystal(),this.app.audio.thump(),this.hud.toast("The vault opened! Crystals gleam inside.",4)}usePanel(){const t=this.st.flags;if(t.secret){this.hud.toast("The panel is already solved.");return}const e=["☾","◉","Ψ","▲"],n=[3,3,3];this.lockUI(s=>{const r=_n(this.app,"SYMBOL PANEL",{onClose:s}),a=Q("div","dial");for(let u=0;u<3;u++){const d=Q("span","",e[n[u]]);d.style.cursor="pointer",d.onclick=()=>{n[u]=(n[u]+1)%4,d.textContent=e[n[u]],this.app.audio.select()},a.appendChild(d)}r.panel.appendChild(a);const o=Q("div","small","Click a symbol to change it. Three slots, order matters.");r.panel.appendChild(o);const h=Q("div","btns"),l=Q("button","btn","CONFIRM"),c=Q("button","btn","CLOSE");h.append(c,l),r.panel.appendChild(h),c.onclick=()=>r.close(),l.onclick=()=>{n.join()==="0,1,2"?(t.secret=!0,this.world.doors.secret.setOpen(!0),this.app.audio.door(),this.app.audio.crystal(),this.hud.toast("Something moved in the library...",4),r.close()):(this.app.audio.locked(),o.textContent="Nothing happens.",o.style.color="#ff6a6a")}})}useAltar(){const t=this.st,e=t.crystals>=5?"good":"bad";this.over=!0,this.app.audio.stinger(),this.hud.fade(!0),setTimeout(()=>this.app.goto("ending",{ending:e,state:t,perfect:t.crystals>=Oo}),1200)}openInventory(t){this.lockUI(e=>Im(this.app,this.st,{onClose:()=>{e(),t&&t()},onUse:n=>{const s=this.st.useItem(n);return this.app.audio.pickup(),s}}))}resume(){this.paused=!1,this.skip=3,this.input.clear()}exit(){this.pause.hide(!0),this.input.dispose(),this.hud.dispose(),this.hud=null,this.app.audio.stopAmbient(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()})}}class Bm{constructor(t){this.app=t,this.scene=new es,this.camera=new fe(50,1.6,.1,100),this.t=0,this.lines=[],this.li=-1,this.stage=0}enter({ending:t,perfect:e}){const n=this.app,s=this.scene;this.ending=t;const r=n.saves.meta();if(r.endings[t]=!0,r.finished=!0,n.saves.setMeta(r),n.stopAll(),s.add(be(60,60,ft("stone",6710903),0,0,0,"up",3)),t==="bad")s.background=new It(459278),s.fog=new Ti(459278,.05),s.add(new $i(3807834,1.2)),this.pl=new Ai(10502399,4,14),this.pl.position.set(0,3,3),s.add(this.pl),this.fox=Xn({possessed:!0}),this.fox.group.scale.setScalar(2.2),this.fox.group.position.set(0,-2.2,0),s.add(this.fox.group),this.fox.setAnim("scared"),this.camera.position.set(0,2.2,4.4),n.audio.startMusic("final"),n.audio.stinger(),this.lines=[{who:"Willow?",text:"...Help me... Please...",color:"#a64dff"},{who:"",text:"You reached the altar without remembering enough of yourself."},{who:"",text:"The house remembers. And now it wears your face.",color:"#b3122e"}],this.title="BAD ENDING";else{s.background=new It(4863328),s.fog=new Ti(5913184,.03),s.add(new $i(10125488,1.2));const a=new Yr(16760960,2.2);a.position.set(-6,5,8),s.add(a),this.fox=Xn({possessed:!0}),this.fox.group.position.set(1.6,.4,0),this.fox.group.rotation.set(0,-.6,0),this.fox.setAnim("idle"),s.add(this.fox.group),this.fox.group.rotation.z=Math.PI/2*.9,this.will=Xn(),this.will.group.position.set(-1.4,0,0),this.will.group.rotation.y=.5,s.add(this.will.group),this.twin=Xn(),this.twin.group.position.set(1.6,0,0),this.twin.group.rotation.y=-.5,this.twin.group.visible=!1,this.twin.group.scale.setScalar(.95),s.add(this.twin.group),this.camera.position.set(0,2.4,7.5),n.audio.startMusic("credits"),this.lines=[{who:"???",text:"You found her...",color:"#a64dff"},{who:"Willow",text:"I remember now. She was me — the part I left behind in this house.",color:"#ff8a1e"},{who:"Willow",text:"Come home with me.",color:"#ff8a1e"},...e?[{who:"",text:"All eleven crystals shine at once. Every lost memory finds its way home.",color:"#c58bff"}]:[],{who:"",text:"The dark lets go. Dawn comes through the broken windows, and the front door swings open."}],this.title="GOOD ENDING"}this.ui=Q("div","full"),this.ui.style.cssText+=";pointer-events:auto",Ie().appendChild(this.ui),this.dlg=Q("div","dlg"),this.dlg.innerHTML='<div class="who px"></div><div class="txt"></div><div class="nx">▼</div>',this.ui.appendChild(this.dlg),this.keyH=a=>{["Enter","Space","KeyE"].includes(a.code)&&this.next()},document.addEventListener("keydown",this.keyH),this.ui.onclick=()=>this.next(),this.fadeEl=Q("div","fadeblk on"),this.ui.appendChild(this.fadeEl),requestAnimationFrame(()=>requestAnimationFrame(()=>this.fadeEl.classList.remove("on"))),setTimeout(()=>this.next(),1800)}next(){if(this.stage!==2){if(this.typing&&this.typed<this.cur.text.length){this.typed=1e9;return}if(this.li++,this.li>=this.lines.length){this.finish();return}this.cur=this.lines[this.li],this.typed=0,this.typing=!0,this.dlg.querySelector(".who").textContent=this.cur.who?this.cur.who+":":"",this.dlg.querySelector(".who").style.color=this.cur.color||"",this.ending==="good"&&this.li===2&&(this.fox.group.visible=!1,this.twin.group.visible=!0,this.app.audio.crystal()),this.ending==="bad"&&this.li===1&&this.app.audio.growl()}}finish(){this.stage=2,this.dlg.remove();const t=Q("div","px big",this.title);t.style.cssText="color:"+(this.ending==="bad"?"#b3122e":"#ffd080")+";letter-spacing:10px",this.ui.appendChild(t),setTimeout(()=>{this.ui.remove(),yl(this.app,()=>this.app.goto("menu"))},3200)}update(t){this.t+=t;const e=this.t;if(this.typing&&this.cur){this.typed+=t*40;const n=this.cur.text;this.dlg.querySelector(".txt").textContent=n.slice(0,Math.floor(this.typed)),this.dlg.querySelector(".nx").style.visibility=this.typed>=n.length?"visible":"hidden"}this.ending==="bad"?(this.fox.update(t),this.fox.group.rotation.y=Math.sin(e*.6)*.25,this.fox.group.position.y=-2.2+Math.sin(e*2)*.03,this.camera.position.z=4.4-Math.min(1.2,e*.08),this.camera.lookAt(0,2.5,0),this.pl.intensity=3+Math.sin(e*9)*1.2):(this.fox.update(t),this.will.update(t),this.twin.update(t),this.will.setAnim("idle"),this.twin.setAnim("idle"),this.camera.position.x=Math.sin(e*.2)*1.2,this.camera.lookAt(0,1.4,0))}exit(){document.removeEventListener("keydown",this.keyH),this.ui&&this.ui.remove()}}const Gm={intro:Wp,startup:Xp,menu:vm,game:km,ending:Bm},ko=["lost-disc-logo.jpg","willow-portrait.png","willow-sheet.jpg","willow-selfie.jpg","gameplay-refs.jpg","cover-forgotten.jpg","cover-cursed-memories.jpg"];function Hm(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}const qe={settings:new Op,saves:new kp,current:null,fatal(i){if(console.error(i),document.getElementById("fatal"))return;const t=Q("div","full black");t.id="fatal",t.style.zIndex=99,t.innerHTML=`<div class="px mid" style="color:#b3122e">SOMETHING WENT WRONG</div><div class="small" style="max-width:80vw;margin:12px">${String(i&&i.message||i)}</div>`;const e=Q("button","btn","RELOAD");e.onclick=()=>location.reload(),t.appendChild(e),Ie().appendChild(t)},stopAll(){this.audio.stopMusic(),this.audio.stopAmbient()},goto(i,t={}){if(this.current&&this.current.exit)try{this.current.exit()}catch(n){console.warn(n)}Ie().innerHTML="",document.getElementById("stage").style.transform="";const e=new Gm[i](this);this.current=e,this.engine.setScene(e),e.enter(t)}};qe.audio=new Bp(qe.settings);async function Vm(){const i=Ie();if(!Hm()){qe.fatal(new Error("WebGL is not available in this browser. Try a recent Chrome, Edge or Firefox on desktop."));return}qe.engine=new Hp(qe,document.getElementById("stage")),qe.engine.start(),window.addEventListener("error",r=>qe.fatal(r.error||r.message)),window.addEventListener("unhandledrejection",r=>qe.fatal(r.reason));const t=Q("div","full black");t.innerHTML='<div class="px mid" style="color:#a64dff;letter-spacing:6px">THE EVIL HOUSE</div><div class="small px" style="margin-top:6px">LOADING...</div><div class="loadbar"><div></div></div><div class="small blink" id="go" style="margin-top:22px;opacity:0">PRESS ANY KEY OR CLICK TO START</div><div class="small" style="margin-top:30px;max-width:80vw">Best played with headphones, in the dark, in fullscreen.</div>',i.appendChild(t);const e=t.querySelector(".loadbar>div");let n=0;await Promise.all(ko.map(r=>new Promise(a=>{const o=new Image;o.onload=o.onerror=()=>{n++,e.style.width=n/ko.length*100+"%",a()},o.src="images/"+r}))),t.querySelector("#go").style.opacity=1;const s=()=>{window.removeEventListener("keydown",s),t.removeEventListener("click",s),qe.audio.init(),qe.goto(new URLSearchParams(location.search).has("skip")?"menu":"intro")};window.addEventListener("keydown",s),t.addEventListener("click",s)}Vm().catch(i=>qe.fatal(i));
