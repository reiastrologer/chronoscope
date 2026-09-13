(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(i.map(i=>{if(i=t(i,a),i=u(i),i in n)return;n[i]=!0;let o=i.endsWith(`.css`);for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:e,o||(s.as=`script`),s.crossOrigin=``,s.href=i,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,t)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})},i=Object.defineProperty,a=(e,t)=>i(e,`name`,{value:t,configurable:!0}),o=(e=>(e[e.Julian=0]=`Julian`,e[e.Gregorian=1]=`Gregorian`,e))(o||{}),s=(e=>(e.Placidus=`P`,e.Koch=`K`,e.Porphyrius=`O`,e.Regiomontanus=`R`,e.Campanus=`C`,e.Equal=`A`,e.VehlowEqual=`V`,e.WholeSign=`W`,e.Meridian=`X`,e.Azimuthal=`H`,e.PolichPage=`T`,e.Alcabitus=`B`,e.Morinus=`M`,e))(s||{}),c=(e=>(e[e.Ascendant=0]=`Ascendant`,e[e.MC=1]=`MC`,e[e.ARMC=2]=`ARMC`,e[e.Vertex=3]=`Vertex`,e[e.EquatorialAscendant=4]=`EquatorialAscendant`,e[e.CoAscendant1=5]=`CoAscendant1`,e[e.CoAscendant2=6]=`CoAscendant2`,e[e.PolarAscendant=7]=`PolarAscendant`,e))(c||{}),l=(e=>(e[e.JPLEphemeris=1]=`JPLEphemeris`,e[e.SwissEphemeris=2]=`SwissEphemeris`,e[e.MoshierEphemeris=4]=`MoshierEphemeris`,e[e.Heliocentric=8]=`Heliocentric`,e[e.TruePositions=16]=`TruePositions`,e[e.J2000=32]=`J2000`,e[e.NoNutation=64]=`NoNutation`,e[e.Speed3=128]=`Speed3`,e[e.Speed=256]=`Speed`,e[e.NoGravitationalDeflection=512]=`NoGravitationalDeflection`,e[e.NoAberration=1024]=`NoAberration`,e[e.Equatorial=2048]=`Equatorial`,e[e.XYZ=4096]=`XYZ`,e[e.Radians=8192]=`Radians`,e[e.Barycentric=16384]=`Barycentric`,e[e.Topocentric=32768]=`Topocentric`,e[e.Sidereal=65536]=`Sidereal`,e[e.ICRS=131072]=`ICRS`,e[e.DpsidepsIAU1980=262144]=`DpsidepsIAU1980`,e[e.JPLHorizons=524288]=`JPLHorizons`,e[e.JPLHorizonsApprox=1048576]=`JPLHorizonsApprox`,e))(l||{}),u={Astrometric:1536,DefaultSwissEphemeris:258,DefaultMoshier:260},d=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.totalBegin=i,this.totalEnd=a,this.penumbralBegin=o,this.penumbralEnd=s}isTotal(){return!!(this.type&4)}isPartial(){return!!(this.type&16)}isPenumbralOnly(){return!!(this.type&64)&&!(this.type&20)}getTotalityDuration(){if(!this.isTotal()||this.totalBegin===0||this.totalEnd===0)return 0;let e=(this.totalEnd-this.totalBegin)*24;return e>0?e:0}getPartialDuration(){if(this.partialBegin===0||this.partialEnd===0)return 0;let e=(this.partialEnd-this.partialBegin)*24;return e>0?e:0}getTotalDuration(){if(this.penumbralBegin===0||this.penumbralEnd===0)return 0;let e=(this.penumbralEnd-this.penumbralBegin)*24;return e>0?e:0}},f=(a(d,`LunarEclipseImpl`),d),p=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.centralBegin=i,this.centralEnd=a,this.centerLineBegin=o,this.centerLineEnd=s}isTotal(){return!!(this.type&4)}isAnnular(){return!!(this.type&8)}isHybrid(){return!!(this.type&32)}isPartial(){return!!(this.type&16)}isCentral(){return!!(this.type&1)}isNonCentral(){return!!(this.type&2)}},m=(a(p,`SolarEclipseImpl`),p),h=class{constructor(e,t,n,r,i=1){this.year=e,this.month=t,this.day=n,this.hour=r,this.calendarType=i}toISOString(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60),n=Math.floor(((this.hour-e)*60-t)*60),r=Math.floor((((this.hour-e)*60-t)*60-n)*1e3),i=Math.abs(this.year).toString().padStart(4,`0`);return`${this.year<0?`-`:``}${i}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)}T${e.toString().padStart(2,`0`)}:${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}.${r.toString().padStart(3,`0`)}Z`}toString(){let e=this.calendarType===1?`Gregorian`:`Julian`;return`${this.year<0?`${Math.abs(this.year)} BCE`:this.year.toString()}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)} ${this.hour.toFixed(6)} hours (${e})`}},g=(a(h,`DateTimeImpl`),h),_=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}remove(e){return Array.isArray(e)?e.forEach(e=>this.flags&=~e):this.flags&=~e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new _(e)}static get swissEphemerisWithSpeed(){return _.from(2,256)}static get moshierWithSpeed(){return _.from(4,256)}static get astrometric(){return _.from(2,1024,512)}static get heliocentric(){return _.from(2,8)}static get topocentric(){return _.from(2,32768)}static get equatorial(){return _.from(2,2048,256)}},v=(a(_,`_CalculationFlags`),_),y=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new y(e)}static get allSolar(){return new y([1,2,4,8,16,32])}static get allLunar(){return new y([4,16,64])}static get totalOnly(){return y.from(4)}static get totalAndPartial(){return y.from(4,16)}},b=(a(y,`_EclipseTypeFlags`),y);function x(e){return typeof e==`number`?e:e instanceof v?e.toNumber():Array.isArray(e)?v.from(...e).toNumber():e}a(x,`normalizeFlags`);function S(e){return typeof e==`number`?e:e instanceof b?e.toNumber():Array.isArray(e)?b.from(...e).toNumber():e}a(S,`normalizeEclipseTypes`);var C=class{constructor(){this.module=null,this.ready=!1}async init(e){if(this.ready)return;let t=await r(()=>import(`./swisseph-BtfJwKK5.js`),[],import.meta.url),n;if(n=typeof t.default==`function`?t.default:typeof t==`function`?t:t.default?t.default:t.SwissEphModule||t,typeof n!=`function`)throw Error(`Failed to load WASM module: SwissEphModule factory function not found`);let i=e;if(!i)try{i=new URL(``+new URL(`swisseph-BmP0Bw24.wasm`,import.meta.url).href,``+import.meta.url).href}catch{i=`swisseph.wasm`}this.module=await n({locateFile:a((e,t)=>e===`swisseph.wasm`?i:t?t+e:e,`locateFile`)}),this._wrapFunctions(),this.ready=!0,console.log(`Swiss Ephemeris WASM initialized:`,this.version())}_wrapFunctions(){let e=this.module;this._julday=e.cwrap(`swe_julday_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`]),this._getPlanetName=e.cwrap(`swe_get_planet_name_wrap`,`string`,[`number`]),this._setSiderealMode=e.cwrap(`swe_set_sid_mode_wrap`,null,[`number`,`number`,`number`]),this._getAyanamsa=e.cwrap(`swe_get_ayanamsa_ut_wrap`,`number`,[`number`]),this._close=e.cwrap(`swe_close_wrap`,null,[]),this._version=e.cwrap(`swe_version_wrap`,`string`,[])}_checkReady(){if(!this.ready)throw Error(`SwissEphemeris not initialized. Call await swe.init() first.`)}version(){return this._checkReady(),this._version()}setEphemerisPath(e){this._checkReady();let t=this.module,n=t.allocateUTF8(e||``);t.ccall(`swe_set_ephe_path_wrap`,null,[`number`],[n]),t._free(n)}async loadStandardEphemeris(){let e=`https://cdn.jsdelivr.net/gh/aloistr/swisseph/ephe`;await this.loadEphemerisFiles([{name:`sepl_18.se1`,url:`${e}/sepl_18.se1`},{name:`semo_18.se1`,url:`${e}/semo_18.se1`},{name:`seas_18.se1`,url:`${e}/seas_18.se1`}])}async loadEphemerisFiles(e){this._checkReady();let t=this.module;try{t.FS.mkdir(`/ephemeris`)}catch{}for(let n of e){let e=await fetch(n.url);if(!e.ok)throw Error(`Failed to download ${n.name}: ${e.statusText}`);let r=await e.arrayBuffer(),i=new Uint8Array(r);t.FS.writeFile(`/ephemeris/${n.name}`,i)}this.setEphemerisPath(`/ephemeris`)}julianDay(e,t,n,r=0,i=o.Gregorian){if(this._checkReady(),!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r))throw TypeError(`julianDay requires finite numbers. Received: year=${e}, month=${t}, day=${n}, hour=${r}`);return this._julday(e,t,n,r,i)}dateToJulianDay(e,t=o.Gregorian){if(this._checkReady(),!(e instanceof Date))throw TypeError(`dateToJulianDay expects a Date object`);let n=e.getUTCFullYear(),r=e.getUTCMonth()+1,i=e.getUTCDate(),a=e.getUTCHours(),s=e.getUTCMinutes(),c=e.getUTCSeconds(),l=e.getUTCMilliseconds();if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))throw TypeError(`Invalid Date object provided to dateToJulianDay. Date.toString() returned: "${e.toString()}". Please ensure the date is valid (e.g., avoid new Date("invalid")).`);let u=a+s/60+c/3600+l/36e5;return this.julianDay(n,r,i,u,t)}julianDayToDate(e,t=o.Gregorian){this._checkReady();let n=this.module,r=n._malloc(4),i=n._malloc(4),a=n._malloc(4),s=n._malloc(8);n.ccall(`swe_revjul_wrap`,null,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,r,i,a,s]);let c=n.getValue(r,`i32`),l=n.getValue(i,`i32`),u=n.getValue(a,`i32`),d=n.getValue(s,`double`);return n._free(r),n._free(i),n._free(a),n._free(s),new g(c,l,u,d,t)}calculatePosition(e,t,n=u.DefaultMoshier){this._checkReady();let r=x(n),i=this.module,a=i._malloc(48),o=i._malloc(256),s=i.ccall(`swe_calc_ut_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`],[e,t,r,a,o]);if(s<0){let e=i.UTF8ToString(o);throw i._free(a),i._free(o),Error(e)}let c=[];for(let e=0;e<6;e++)c[e]=i.getValue(a+e*8,`double`);return i._free(a),i._free(o),{longitude:c[0],latitude:c[1],distance:c[2],longitudeSpeed:c[3],latitudeSpeed:c[4],distanceSpeed:c[5],flags:s}}getCelestialBodyName(e){return this._checkReady(),this._getPlanetName(e)}setSiderealMode(e,t=0,n=0){this._checkReady(),this._setSiderealMode(e,t,n)}getAyanamsa(e){return this._checkReady(),this._getAyanamsa(e)}getAyanamsaExUt(e,t=l.SwissEphemeris){this._checkReady();let n=x(t),r=this.module,i=r._malloc(8),a=r._malloc(256);try{if(r.ccall(`swe_get_ayanamsa_ex_ut_wrap`,`number`,[`number`,`number`,`number`,`number`],[e,n,i,a])<0){let e=r.UTF8ToString(a);throw Error(e||`Failed to calculate ayanamsa`)}return r.getValue(i,`double`)}finally{r._free(i),r._free(a)}}findNextLunarEclipse(e,t=l.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=x(t),a=S(n),o=this.module,s=o._malloc(80),c=o._malloc(256),u=o.ccall(`swe_lun_eclipse_when_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(u<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new f(u,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}findNextSolarEclipse(e,t=l.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=x(t),a=S(n),o=this.module,s=o._malloc(80),c=o._malloc(256),u=o.ccall(`swe_sol_eclipse_when_glob_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(u<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new m(u,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}calculateHouses(e,t,n,r=s.Placidus){this._checkReady();let i=this.module,a=i._malloc(104),o=i._malloc(80),l=r.charCodeAt(0);i.ccall(`swe_houses_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,n,l,a,o]);let u=[];for(let e=0;e<13;e++)u[e]=i.getValue(a+e*8,`double`);let d=[];for(let e=0;e<10;e++)d[e]=i.getValue(o+e*8,`double`);return i._free(a),i._free(o),{cusps:u,ascendant:d[c.Ascendant],mc:d[c.MC],armc:d[c.ARMC],vertex:d[c.Vertex],equatorialAscendant:d[c.EquatorialAscendant],coAscendant1:d[c.CoAscendant1],coAscendant2:d[c.CoAscendant2],polarAscendant:d[c.PolarAscendant],houseSystem:r}}close(){this.ready&&this._close()}};a(C,`SwissEphemeris`);var w=C,T=new w;typeof window<`u`&&(window.SwissEphemeris=w,window.swisseph=T);var E=[{id:`sun_venus`,p1:0,p2:3,name:`太陽 × 金星`,title:`あたたかい絆に満たされる「愛情と家庭の調和サイクル」`,desc:`家庭的な雰囲気のあたたかい愛情に恵まれる時期です。身近な人と心の通い合う穏やかな時間を過ごすことで、人生の幸福度がグッと高まります。`},{id:`sun_jupiter`,p1:0,p2:5,name:`太陽 × 木星`,title:`発展の可能性が開く「運命の転換サイクル」`,desc:`あなた自身の社会的な発展の可能性や、素晴らしい好転のチャンスとなる転機が訪れます。恐れずに新しい扉を開くことで、ステージが引き上げられます。`},{id:`sun_neptune`,p1:0,p2:8,name:`太陽 × 海王星`,title:`無理せずエネルギーを養う「心身のごご自愛期間」`,desc:`体力の低下や、精神的な落ち込みが起きやすいタイミングです。これは「しっかり休んで」という星からのサイン。健康を守るためにも、自分を一番に甘やかして英気を養いましょう。`},{id:`sun_pluto`,p1:0,p2:9,name:`太陽 × 冥王星`,title:`新たな局面へと突き進む「大飛躍のタイミング」`,desc:`あなたの中に強力なリーダーシップが増加し、人生の新しい局面へと堂々と踏み出していく時期です。圧倒的な底力で大きな飛躍を遂げることができます。`},{id:`sun_node`,p1:0,p2:10,name:`太陽 × ドラゴンヘッド`,title:`絆を整え調和をもたらす「家庭の絆・問題解決期」`,desc:`家庭的な人的構成や、身近な対人関係における問題解決がスムーズに進む期間です。素晴らしいチームワークが生まれ、絆がより強固なものへと変化します。`},{id:`sun_asc`,p1:0,p2:11,name:`太陽 × ASC`,title:`関わりから気付きを得る「自己認識アップデート期」`,desc:`他者との関係性によってもたらされる問題点や課題に、ハッとスポットライトが当たる時期です。相手を通して本当の自分を深く認識し、アップデートできます。`},{id:`sun_mc`,p1:0,p2:12,name:`太陽 × MC`,title:`自分らしさをまっすぐ打ち出す「人間性の確立期間」`,desc:`自己主張の強さがポジティブな形で社会へ発揮される時期です。あなたという人間性のコアを堂々と周囲に示すことで、確固たる信頼を勝ち取れます。`},{id:`moon_venus`,p1:1,p2:3,name:`月 × 金星`,title:`素直に甘えて愛される「きらめき愛情サイクル」`,desc:`恋愛運が最高潮に達し、ちょっぴり甘え体質な一面が魅力として輝く時期です。大切な人とピュアな愛情の喜びを心ゆくまで満喫することができます。`},{id:`moon_uranus`,p1:1,p2:7,name:`月 × 天王星`,title:`新鮮な風を受け入れる「突発的な環境アップデート」`,desc:`プライベートや環境に、突然の変化がもたらされやすいタイミングです。あなたの柔軟な感性を活かして機転を利かせ、スマートに対応していくことで新しい道が開けます。`},{id:`moon_neptune`,p1:1,p2:8,name:`月 × 海王星`,title:`インスピレーションが湧き出る「芸術センスの目覚め」`,desc:`あなたの内側に眠っていた芸術的な才能や、豊かな感受性がパッと目覚める時期です。創作活動や直感を活かしたアクションに素晴らしい追い風が吹きます。`},{id:`mercury_venus`,p1:2,p2:3,name:`水星 × 金星`,title:`技術や知識の完成度を高める「芸事・スキルの熟練期」`,desc:`誰かへの教えやすさや、あなた自身のスキルの熟練度が爆発的に高まる時期です。学び事やレッスン、クリエイティブな表現が素晴らしい成果を結びます。`},{id:`mercury_jupiter`,p1:2,p2:5,name:`水星 × 木星`,title:`思考とアイデアが冴え渡る「精神の活気みなぎる期間」`,desc:`あなた自身の精神活動の状態が、非常に活気に満ちてポジティブになる期間です。素晴らしいアイデアが次々と溢れ、ビジネスや勉強がサクサク進みます。`},{id:`mercury_pluto`,p1:2,p2:9,name:`水星 × 冥王星`,title:`あなたの名前が広く知れ渡る「名誉・ステップアップ期」`,desc:`あなたの手がけた発信や研究が社会から認められ、名誉や栄誉を獲得して有名になるチャンスが巡ってきます。強烈な影響力を世の中に与える時期です。`},{id:`mercury_node`,p1:2,p2:10,name:`水星 × ドラゴンヘッド`,title:`次のステージへ舵を切る「新規開拓・チーム結成期」`,desc:`新規の仕事を立ち上げたり、将来の右腕となるような素晴らしい人材を獲得するビジネスチャンス期です。新たな契約やパートナーシップが実を結います。`},{id:`venus_mars`,p1:3,p2:4,name:`金星 × 火星`,title:`情熱の炎がパッと燃え上がる「情熱ロマンスブースター」`,desc:`理屈抜きで、一目で相手に惚れてしまうような強烈な恋 of 衝動が訪れるロマンス期です。あなたの中の眠っていたパッションが最高潮に呼び覚まされます。`},{id:`venus_jupiter`,p1:3,p2:5,name:`金星 × 木星`,title:`全天体があなたを祝福する「愛の喜び満喫サークル」`,desc:`人生における愛情の喜びをこれでもかと全身で感じられる最高のハッピータイムです。素晴らしい幸福感と引き寄せの波があなたを包み込みます。`},{id:`venus_uranus`,p1:3,p2:7,name:`金星 × 天王星`,title:`電撃的なときめきに包まれる「新鮮ロマンス遭遇期」`,desc:`日常をガラリと変えるような、新鮮なロマンスやときめきに遭遇する時期です。予想もしなかったドラマチックな愛の展開があなたを驚かせます。`},{id:`venus_neptune`,p1:3,p2:8,name:`金星 × 海王星`,title:`境界線を整え本実を見つめる「愛のデトックス成熟期」`,desc:`これまでの関係性が優しく変化し、環境の移り変わりによる別れや、愛の境界線を整える時期です。依存を手放し、本当の自立した愛へと成熟するための大切なステップです。`},{id:`venus_pluto`,p1:3,p2:9,name:`金星 × 冥王星`,title:`魂を揺さぶる至福を味わう「最高幸福・絶頂期」`,desc:`心の底から湧き上がる大きな喜びと、奇跡の豊かさを掴む最高幸福・絶頂期です。人生における素晴らしい喜びを感じるドラマチックな体験が訪れます。運命を動かすほどの強い愛の磁力が発生します。`},{id:`venus_mc`,p1:3,p2:12,name:`金星 × MC`,title:`大好きな想いを形にする「自由恋愛の実現サークル」`,desc:`あなたの望んでいた理想の自由恋愛が、見事に成就・実現へと向かう嬉しい時期です。社会的な立場や世間の目を気にせず、純粋な愛の形を謳歌できます。`},{id:`mars_jupiter`,p1:4,p2:5,name:`火星 × 木星`,title:`独自の魅力がスポットライトを浴びる「才能開花・タレント期」`,desc:`あなたの中に眠っていた圧倒的なタレント性やスター性が周囲に認められる時期です。自己表現やパフォーマンスにおいて、人気と注目を一身に集めます。`},{id:`mars_saturn`,p1:4,p2:6,name:`火星 × 土星`,title:`次章へ進むための美しい節目「運命の軌道修正・一段落期」`,desc:`走り続けてきた足を一度止め、次の章へ進むための美しい節目・一段落期です。これまでの無理な働き方や活動に、何らかの終了、休止、またはホッとするひと区切りがもたらされる時期です。荷物を下ろして休息をとりましょう。`},{id:`mars_uranus`,p1:4,p2:7,name:`火星 × 天王星`,title:`心身を美しく整え直す「セルフケア・治療改善サイクル」`,desc:`医療による適切な治療や、徹底的なセルフケアによって、体調や環境をガラリと新しく改善できる時期です。素晴らしい技術によって不調を克服できます。`},{id:`mars_neptune`,p1:4,p2:8,name:`火星 × 海王星`,title:`無理せず心身を解放する「ディープクレンジング期間」`,desc:`心と体の抵抗力の著しい低下を感じやすいデトックス期間です。エネルギーが漏れてしまわないよう、この時期は戦うのをやめ、心身をディープに浄化してあげましょう。`},{id:`mars_pluto`,p1:4,p2:9,name:`火星 × 冥王星`,title:`不可能を可能に変える「ブレイクスルー・大成サイクル」`,desc:`どんな高い壁や大きな困難に対しても、それをガツンとぶち抜いていく圧倒的な突破力が湧いてくる時期です。あなたのこれまでの努力が見事に大成します。`},{id:`jupiter_saturn`,p1:5,p2:6,name:`木星 × 土星`,title:`じっくりと土台を馴染ませる「安心基盤・適応サイクル」`,desc:`新しい環境や人生の大きな変化に対して、じっくりと時間をかけて適応していく期間です。焦らず忍耐強く土台を固めることで、今後の確固たる安定が作られます。`},{id:`jupiter_uranus`,p1:5,p2:7,name:`木星 × 天王星`,title:`まさかのラッキーが舞い込む「ミラクル棚ぼた転機」`,desc:`現状を劇的に好転させる、突然の変化のチャンスが巡ってきます。「棚ぼた」のようなミラクルな引き寄せを体験しやすい、大いなる飛躍のタイミングです。`},{id:`jupiter_neptune`,p1:5,p2:8,name:`木星 × 海王星`,title:`視野を広げて正解を選び直す「視野拡大・軌道修正期」`,desc:`これまでの見込み違いや、判断の誤りにハッと気違い、正しい方向へサッと軌道修正ができる時期です。思い込みのバイアスが消去され、視界がクリアになります。`},{id:`jupiter_pluto`,p1:5,p2:9,name:`木星 × 冥王星`,title:`莫大な果実を手にする「大成功ラッシュ期間」`,desc:`手がけているビジネスや、ここ一番での勝負、あるいはギャンブルなどで圧倒的な大成功を収めるチャンス期間です。富と成功のエネルギーが一点集中します。`},{id:`jupiter_node`,p1:5,p2:10,name:`木星 × ドラゴンヘッド`,title:`最高の仲間に巡り合う「強力協調・発展サイクル」`,desc:`他者との共同による仕事やプロジェクトが、素晴らしい調和の元で大発展していく時期です。人脈からの協力によって、夢の実現スピードが何倍にも加速します。`},{id:`jupiter_mc`,p1:5,p2:12,name:`木星 × MC`,title:`社会的評価がガツンと上がる「キャリア栄転タイミング」`,desc:`あなた自身の社会的な地位の向上による成功をしっかりと掴み取れる華やかな時期です。キャリアにおける大きな栄転や、憧れの立場を獲得できます。`},{id:`saturn_uranus`,p1:6,p2:7,name:`土星 × 天王星`,title:`プレッシャーを跳ね返す「困難克服・新風ブースター」`,desc:`心地よい精神の緊張感や、目の前の大きな困難を見事な知恵と精神力で克服していく時期です。この壁を乗り越えることで、一回り大きな自分に成長できます。`},{id:`saturn_neptune`,p1:6,p2:8,name:`土星 × 海王星`,title:`静かに心をヒーリングする「リフレッシュ・休息期間」`,desc:`過度なストレスによる精神的な落ち込みや、不調を感じやすい時期です。星が「少し立ち止まって」と教えてくれているので、静かな環境で心をたっぷり労わってあげましょう。`},{id:`saturn_pluto`,p1:6,p2:9,name:`土星 × 冥王星`,title:`1途な情熱を注ぎ込む「一意専心・こだわり期間」`,desc:`自分自身の能力を過信することによるこだわりが強まる時期です。その凄まじい集中力を専門分野に向けることで、唯一無二の偉業を達成できます。`},{id:`uranus_neptune`,p1:7,p2:8,name:`天王星 × 海王星`,title:`魂の関係性を美しく昇華する「魂のステップアップ期」`,desc:`親しい人との関係性の変化や、環境の移り変わりによる別れを経験する時期です。これは寂しいことではなく、お互いの魂が次のステージへ進化するための必要な節目です。`},{id:`uranus_pluto`,p1:7,p2:9,name:`天王星 × 冥王星`,title:`常識をアップデートする「ライフスタイル革新サイクル」`,desc:`あなたの中にこれまでにない強烈な創造力や、斬新な発想力が溢れ出てくる時期です。これまでの古いやり方をガラリと塗り替える、自分自身の人生革命を起こせます。`},{id:`uranus_asc`,p1:7,p2:11,name:`天王星 × ASC`,title:`新しい環境へ軽やかに馴染む「機敏適応フェーズ」`,desc:`新体制や新しいライフスタイルへの適応性が、驚くほど機敏に発揮される時期です。周囲の環境が変わっても、持ち前のフットワークの軽さで瞬時に味方にできます。`},{id:`neptune_pluto`,p1:8,p2:9,name:`海王星 × 冥王星`,title:`ブレる心を優しくリセットする「宿命再生のタイミング」`,desc:`意志薄弱による一時的な自己嫌悪や、迷いが生じやすい宿命の調整期間です。自分の弱さを丸ごと愛してあげることで、ブレない強い精神へと生まれ変わることができます。`},{id:`neptune_node`,p1:8,p2:10,name:`海王星 × ドラゴンヘッド`,title:`不要な欲を手放して軽くなる「メンタル調停サイクル」`,desc:`過剰な欲求によるバランスの崩れが出やすいタイミングです。「本当に大切なものは何か」を思い出し、心のバランスを綺麗に調停してあげることで深い安心が手に入ります。`},{id:`pluto_mc`,p1:9,p2:12,name:`冥王星 × MC`,title:`主導権を完全に掌握する「完全自由・大成功サイクル」`,desc:`すべての自由裁量（自分の決断）によって、人生のビッグチャンスや成功を掴み取る強烈な時期です。他人に雇われるのではなく、自分の意志で未来を切り拓いていけます。`}];function D(e,t){let n=e.filter(e=>e.rawDate&&e.rawDate.getMonth()===t);return n.length===0?`穏やかで心地よい星の余白月`:n[0]&&n[0].title?n[0].title.replace(/【.*?】/g,``)+` ✨`:`穏やかで心地よい星の余白月`}var O=`
:root {
  --bg-main: #0d0c0a; /* 🌌 夜空をイメージした洗練された漆黒 */
  --bg-input-card: #181614; /* 💡 入力エリアは高級感のある黒 */
  
  /* 💜 メッセージカード専用の神秘的なくすみパープル */
  --bg-msg-card: linear-gradient(135deg, #231b30 0%, #1a1526 100%); 
  
  --text-main: #faf6f0; /* 生成りホワイトで目に優しい明るさ */
  --text-sub: #c4b9ae; /* 読みやすさを追求した明るいベージュ */
  --accent-gold: #c5a880; /* 上品なアクセントゴールド */
  --border-light: rgba(197, 168, 128, 0.2);

  /* 🎨 漆黒と紫の背景に美しく映える、光を宿したくすみカラーパレット */
  --planet-color-0: #f0a395; /* 太陽: シルキーピンク */
  --planet-color-2: #a5b7d4; /* 水星: ミスティブルー */
  --planet-color-3: #ebd0d9; /* 金星: シャンパンローズ */
  --planet-color-4: #de9b8e; /* 火星: コーラルレッド */
  --planet-color-5: #e3cca1; /* 木星: ルミナスゴールド */
  --planet-color-6: #b8b1aa; /* 土星: スモーキーグレー */
  --planet-color-7: #a7bfae; /* 天王星: ペールミント */
  --planet-color-8: #cbbce3; /* 海王星: シアーラベンダー */
  --planet-color-9: #948294; /* 冥王星: アンティークモーヴ */
}

body {
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.container { max-width: 680px; margin: 0 auto; padding: 40px 20px; }

.header { text-align: center; margin-bottom: 32px; }
.header h1 { font-family: 'Noto Serif JP', serif; font-weight: 700; font-size: 24px; letter-spacing: 0.05em; color: var(--text-main); }
.header .notice-text { color: #b3a79d !important; font-size: 12px; margin-top: 4px; }
.header .author { color: var(--accent-gold) !important; font-size: 13px; font-weight: 500; margin-top: 2px; }

.input-card { 
  background: var(--bg-input-card); 
  padding: 24px; 
  border-radius: 16px; 
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4); 
  margin-bottom: 32px; 
  border: 1px solid var(--border-light); 
}

.input-card label { color: #b3a79d; font-size: 13px; font-weight: 500; display: block; margin-bottom: 6px; }

.form-control { 
  width: 100%; 
  padding: 12px; 
  font-size: 14px; 
  border: 1px solid rgba(226, 222, 213, 0.15); 
  border-radius: 8px; 
  background-color: #24211e; 
  color: var(--text-main); 
  outline: none; 
  box-sizing: border-box;
}
.form-control::-webkit-calendar-picker-indicator { filter: invert(0.9); }

.btn-submit { 
  width: 100%; 
  padding: 14px; 
  background: var(--accent-gold); 
  color: #0d0c0a; 
  border: none; 
  border-radius: 8px; 
  font-size: 15px; 
  font-weight: 700; 
  cursor: pointer; 
  letter-spacing: 0.05em; 
  transition: opacity 0.2s;
  box-sizing: border-box;
}
.btn-submit:hover { opacity: 0.9; }

.btn-submit:disabled { 
  background: #24211e !important; 
  color: #c4b9ae !important; 
  border: 1px solid rgba(197, 168, 128, 0.2); 
  cursor: not-allowed; 
}

#scanChara {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 14px;
}

.scan-bubble {
  position: relative; 
  display: inline-block;
  background: #24211e; 
  color: #faf6f0; 
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #c5a880; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(197, 168, 128, 0.15);
  letter-spacing: 0.04em;
  line-height: 1.6;
  text-align: center;
  box-sizing: border-box;
  animation: bubblePulse 1.5s infinite ease-in-out;
}

@keyframes bubblePulse {
  0% { opacity: 0.85; transform: scale(0.99); }
  50% { opacity: 1; transform: scale(1.01); }
  100% { opacity: 0.85; transform: scale(0.99); }
}

/* 🚗 画面をハイスピードで横切るキャラクター単体のアニメーション */
.scan-dash-chara {
  position: fixed;
  top: 25%; 
  left: -200px;
  width: 130px;
  height: 130px;
  background: url('chronospeed.png') no-repeat center/contain;
  z-index: 9999;
  pointer-events: none;
}
.scan-dash-chara.active {
  animation: scanDashEffect 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes scanDashEffect {
  0% { left: -200px; transform: scale(0.8) rotate(0deg); }
  25% { left: 30%; transform: scale(1) rotate(-6deg); }
  40% { left: 25%; transform: scale(1) rotate(6deg); }
  100% { left: 100vw; transform: scale(1.2) rotate(-3deg); }
}

.filter-tabs { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 24px; }
.tab-btn { white-space: nowrap; padding: 8px 14px; background: #24211e; border: 1px solid var(--border-light); border-radius: 20px; font-size: 13px; color: #b3a79d; cursor: pointer; }
.tab-btn.active { background: var(--text-main); color: var(--bg-main); border-color: var(--text-main); font-weight: 700; }

.schedule-card {
  position: relative; 
  margin-bottom: 16px; 
  padding: 18px; 
  border-radius: 12px; 
  background: var(--bg-msg-card) !important; 
  box-shadow: 0 4px 20px rgba(15, 10, 25, 0.5); 
  border-left: 4px solid var(--p-color, var(--accent-gold));
  border-top: 1px solid rgba(197, 168, 128, 0.12);
  border-right: 1px solid rgba(197, 168, 128, 0.05);
  border-bottom: 1px solid rgba(197, 168, 128, 0.05);
  box-sizing: border-box;
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.card-badges-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 📅 大きくなって見やすくなった日付・期間バッジ */
.card-badge-period {
  display: inline-block; 
  font-size: 13px; 
  padding: 3px 10px; 
  border-radius: 12px; 
  background: rgba(13, 12, 10, 0.4) !important; 
  color: var(--text-sub) !important;
  border: 1px solid rgba(197, 168, 128, 0.15);
}

/* 🎯 大きくなって見やすくなったゴールドピーク日付バッジ */
.peak-day-gold-badge {
  display: inline-block;
  font-size: 13px; 
  padding: 3px 10px; 
  border-radius: 12px;
  background: rgba(197, 168, 128, 0.15) !important;
  color: var(--accent-gold) !important;
  border: 1px solid rgba(197, 168, 128, 0.3);
  font-weight: 700;
}

.card-stimulus {
  font-size: 12px;
  color: var(--accent-gold);
  font-weight: 600;
  margin-bottom: 4px;
}

.card-title {
  font-family: 'Noto Serif JP', serif; 
  font-size: 16px; 
  color: var(--text-main) !important; 
  margin-bottom: 8px; 
  font-weight: 700;
  letter-spacing: 0.02em;
}

.card-desc {
  font-size: 13px; 
  color: var(--text-sub) !important; 
  line-height: 1.6;
}

.monthly-header-divider {
  margin-top: 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 12px;
}
.monthly-header-divider h2 {
  font-family: 'Noto Serif JP', serif;
  font-size: 20px;
  margin: 0;
  color: var(--text-main);
}
.monthly-sub {
  font-size: 13px;
  color: var(--text-sub);
  margin: 4px 0 0 0;
}

.no-data {
  text-align: center;
  padding: 32px;
  color: var(--text-sub);
  font-size: 14px;
  background: var(--bg-input-card);
  border-radius: 12px;
  border: 1px dashed var(--border-light);
}

.retro-notice {
  margin-top: 12px !important; 
  padding: 10px 14px !important; 
  background: rgba(255, 158, 187, 0.08) !important; 
  border-radius: 8px !important; 
  font-size: 12px !important; 
  color: #ff9ebb !important; 
  border: 1px dashed rgba(255, 158, 187, 0.4) !important; 
  font-weight: 700 !important; 
  letter-spacing: 0.03em !important;
  text-align: left !important; 
  line-height: 1.5 !important;
}

.schedule-card.planet-0 { --p-color: var(--planet-color-0); }
.schedule-card.planet-2 { --p-color: var(--planet-color-2); }
.schedule-card.planet-3 { --p-color: var(--planet-color-3); }
.schedule-card.planet-4 { --p-color: var(--planet-color-4); }
.schedule-card.planet-5 { --p-color: var(--planet-color-5); }
.schedule-card.planet-6 { --p-color: var(--planet-color-6); }
.schedule-card.planet-7 { --p-color: var(--planet-color-7); }
.schedule-card.planet-8 { --p-color: var(--planet-color-8); }
.schedule-card.planet-9 { --p-color: var(--planet-color-9); }

.month-tabs {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 24px;
}
@media (max-width: 480px) {
  .month-tabs {
    grid-template-columns: repeat(4, 1fr);
  }
}
.month-tab-btn {
  padding: 10px 6px;
  background: #1e1b18;
  border: 1px solid rgba(197, 168, 128, 0.2);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #c4b9ae;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}
.month-tab-btn.active {
  background: #c5a880;
  color: #0d0c0a;
  border-color: #c5a880;
  font-weight: 700;
  box-shadow: 0 0 12px rgba(197, 168, 128, 0.3);
}
`,k=[{id:0,name:`自分自身・本質`,emoji:`☉`},{id:1,name:`私生活・心`,emoji:`☾`},{id:2,name:`知性・会話`,emoji:`☿`},{id:3,name:`恋愛・楽しさ`,emoji:`♀`},{id:4,name:`やる気・行動`,emoji:`♂`},{id:5,name:`拡大・幸運`,emoji:`♃`},{id:6,name:`課題・試練`,emoji:`♄`},{id:7,name:`個性・打破`,emoji:`♅`},{id:8,name:`理想・スピ`,emoji:`♆`},{id:9,name:`底力・リセット`,emoji:`♇`}],A=[{id:0,name:`太陽（舞台）`,emoji:`☉`},{id:2,name:`水星（仕事）`,emoji:`☿`},{id:3,name:`金星（ワクワク）`,emoji:`♀`},{id:4,name:`火星（情熱）`,emoji:`♂`},{id:5,name:`木星（拡大）`,emoji:`♃`},{id:6,name:`土星（課題）`,emoji:`♄`},{id:7,name:`天王星（打破）`,emoji:`♅`},{id:8,name:`海王星（理想）`,emoji:`♆`},{id:9,name:`冥王星`,emoji:`♇`}],j=[0,2,3,4,5,6,7,8,9],M=[{angle:0,name:`合`,emoji:`☌`,type:`good`},{angle:120,name:`トライン`,emoji:`△`,type:`good`},{angle:90,name:`スクエア`,emoji:`□`,type:`bad`},{angle:180,name:`オポジション`,emoji:`☍`,type:`bad`}],N={0:{name:`太陽`,emoji:`☉`},1:{name:`月`,emoji:`☾`},2:{name:`水星`,emoji:`☿`},3:{name:`金星`,emoji:`♀`},4:{name:`火星`,emoji:`♂`},5:{name:`木星`,emoji:`♃`},6:{name:`土星`,emoji:`♄`},7:{name:`天王星`,emoji:`♅`},8:{name:`海王星`,emoji:`♆`},9:{name:`冥王星`,emoji:`♇`},10:{name:`ドラゴンヘッド`,emoji:`☊`},11:{name:`ASC`,emoji:`✨`},12:{name:`MC`,emoji:`👑`}},P=null,F=[],I=1,L=[],R=null;function z(e){let t=e%45;return t<0?t+45:t}function B(e,t){let n=Math.abs(e-t),r=(e+t)/2;return n>180&&(r+=180),z(r)}function V(e){let t=e.getUTCFullYear(),n=e.getUTCMonth()+1,r=e.getUTCDate(),i=e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600;n<=2&&(t--,n+=12);let a=Math.floor(t/100),o=2-a+Math.floor(a/4);return Math.floor(365.25*(t+4716))+Math.floor(30.6001*(n+1))+r+o-1524.5+i/24}async function H(e,t){try{if(P&&typeof P.calculatePosition==`function`){let n=await P.calculatePosition(e,t,0);if(n&&typeof n.longitude==`number`&&!isNaN(n.longitude))return n.longitude}}catch{}let n=(e-2451545)/36525,r={0:{L:280.466+36000.77*n,w:282.937,e:.0167},1:{L:218.316+481267.88*n,w:83.353,e:.0549},2:{L:252.251+149472.67*n,w:77.456,e:.2056},3:{L:181.979+58517.815*n,w:131.532,e:.0068},4:{L:355.453+19140.303*n,w:336.041,e:.0934},5:{L:34.404+3034.746*n,w:14.753,e:.0484},6:{L:49.944+1222.114*n,w:92.431,e:.0541},7:{L:313.232+428.482*n,w:170.964,e:.0473},8:{L:304.88+218.459*n,w:44.971,e:.0086},9:{base:240,speed:.004}}[t];if(t===9){let t=(r.base+e*r.speed)%360;return t<0?t+360:t}let i=r||{L:0,w:0,e:0},a=i.L%360;a<0&&(a+=360);let o=(a-i.w)*Math.PI/180,s=(2*i.e-i.e**3/4)*Math.sin(o)+1.25*i.e**2*Math.sin(2*o),c=a+s*180/Math.PI;if(t===2||t===3||t===4){let e=(280.466+36000.77*n)%360,r=(a-e)*Math.PI/180;c+=(t===2?14:t===3?28:8.5)*Math.sin(r)}return c%=360,c<0?c+360:c}async function U(e,t,n){let r=[],i=new Date(t),a={...e};a[10]||=a[0]?(a[0]+120)%360:45,a[11]||=a[0]?(a[0]+90)%360:15,a[12]||=a[0]?(a[0]+180)%360:105;let o=E.map(e=>{let t=a[String(e.p1)]===void 0?0:a[String(e.p1)],n=a[String(e.p2)]===void 0?0:a[String(e.p2)];return{...e,dialPos:B(t,n)}});for(let e of o){let t=null,a=null,o=!1,s=new Date(n-1,0,1);for(let c=0;c<1095;c++){let l=new Date(s.getTime()+c*24*60*60*1e3);if(l.getTime()<i.getTime())continue;let u=(l.getTime()-i.getTime())/31536e6,d=z(await H(V(new Date(i.getTime()+u*24*60*60*1e3)),0)),f=Math.abs(d-e.dialPos);f>22.5&&(f=45-f),f<=1?(t||=new Date(l),a=new Date(l),l.getFullYear()===n&&(o=!0)):t&&o?(W(r,e,t,a,n),t=null,o=!1):o||(t=null)}t&&o&&W(r,e,t,a,n)}return r}function W(e,t,n,r,i){let a=N[t.p1],o=N[t.p2],s=new Date(i,0,1),c=new Date(i,11,31,23,59,59),l=n.getTime()<s.getTime(),u=r.getTime()>c.getTime(),d=l?s:n,f=u?c:r;e.push({planetComboStr:`${a.emoji} ${a.name} × ${o.emoji} ${o.name}`,title:t.title,desc:t.desc||``,startDate:new Date(d),endDate:new Date(f),startStr:`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`,endStr:`${f.getFullYear()}年${f.getMonth()+1}月${f.getDate()}日`,continuesFromPrevYear:l,continuesToNextYear:u})}function G(e){if(!R||L.length===0)return``;let t=new Date(R,e-1,1,0,0,0),n=new Date(R,e,0,23,59,59),r=L.filter(e=>e.startDate.getTime()<=n.getTime()&&e.endDate.getTime()>=t.getTime());if(r.length===0)return``;let i=`<p class="monthly-sub" style="margin: 16px 0 12px; font-weight:700; color:#c5a880;">🧭 今月を包む壮大な運命サイクル</p>`;return r.forEach(e=>{let t=e.desc&&e.desc.trim()!==``?e.desc:`人生の極めて重要な大転換期の期間です。`;i+=`
      <div class="schedule-card" style="border-left: 4px solid #c5a880; margin-bottom: 16px;">
        <div class="card-top-row">
          <div class="card-badges-group">
            <span class="card-badge-period">⏳ 運命のサイクル</span>
            <span class="peak-day-gold-badge">🎯 ${e.startStr} ～ ${e.endStr}</span>
          </div>
        </div>
        <div class="card-stimulus" style="color: #faf6f0; font-weight: 700; font-size: 15px; margin-top:8px;">${e.title}</div>
        <div class="card-title" style="font-size: 13px; color: #c5a880 !important; margin-top: 6px; font-weight: 700;">💫 響き合うあなたの星： ${e.planetComboStr}</div>
        <div class="card-desc" style="margin-top: 10px; font-size: 13px; line-height: 1.6; color: #faf6f0;">${t.replace(/\n/g,`<br>`)}</div>
      </div>`}),i}function K(){let e=document.getElementById(`monthTabs`);if(!e)return;let t=``;for(let e=1;e<=12;e++)t+=`<button class="month-tab-btn ${e===I?`active`:``}" data-month="${e}">${e}月</button>`;e.innerHTML=t,e.querySelectorAll(`.month-tab-btn`).forEach(t=>{t.addEventListener(`click`,t=>{e.querySelectorAll(`.month-tab-btn`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),I=parseInt(t.target.getAttribute(`data-month`),10),q(F)})})}function q(e){let t=document.getElementById(`scheduleList`);if(!t)return;let n=e.filter(e=>e&&e.monthNum===I);if(n.length===0&&L.length===0){t.innerHTML=`<div class="no-data">この月のデータは見つかりませんでした。</div>`;return}let r=n.map(e=>({transitPlanetId:e.transitPlanet?e.transitPlanet.id:null,title:e.title,rawDate:new Date(R||2026,I-1,1)})),i=``;typeof D==`function`&&(i=D(r,I-1));let a=i&&i.trim()!==``&&!i.includes(`余白月`)&&!i.includes(`undefined`),o=`<div class="monthly-header-divider"><h2>🌙 ${I}月の星</h2>${a?`<p class="monthly-sub">${i}</p>`:``}</div>`;o+=G(I),n.length>0&&n.forEach(e=>{if(!e||!e.aspect||!e.transitPlanet||!e.natalPlanet)return;if(e.transitPlanet.id===99){o+=`
          <div class="schedule-card" style="border-left: 4px dashed #c5a880; background: rgba(13,12,10,0.9); padding: 20px; margin-top: 24px;">
            <div class="card-desc" style="font-size: 13.5px; line-height: 1.7; color: #faf6f0; margin-top: 0;">${e.desc}</div>
          </div>`;return}let t=e.aspect.type===`good`,n=t?`#ff69b4`:`#ffd700`,r=t?`💖 好調期`:`⚠️ 注意期`;o+=`
        <div class="schedule-card planet-${e.transitPlanet.id}">
          <div class="card-top-row">
            <div class="card-badges-group"><span class="card-badge-period">📅 ${e.dateRangeLabel}</span><span class="peak-day-gold-badge">🎯 ${e.peakDayLabel}</span></div>
            <span style="font-size:13px; font-weight:800; color:${n};">${r} (${e.transitPlanet.emoji} ${e.aspect.emoji} ${e.natalPlanet.emoji})</span>
          </div>
          <div class="card-title">${e.title}</div>
          <div class="card-desc">${e.desc}</div>
        </div>`}),t.innerHTML=o}async function J(){let e=document.getElementById(`birth_year`).value,t=document.getElementById(`birth_month`).value,n=document.getElementById(`birth_day`).value,r=document.getElementById(`birthtime`).value,i=document.getElementById(`scanyear`).value;if(!e||!t||!n||!r||!i){alert(`生まれた年月日と出生時間、占いたい西暦を入力してね🔮✨`);return}let a=`${e}-${String(t).padStart(2,`0`)}-${String(n).padStart(2,`0`)}`,o=`${a}T${r}`;localStorage.setItem(`astrology_byear`,e),localStorage.setItem(`astrology_bmonth`,t),localStorage.setItem(`astrology_bday`,n),localStorage.setItem(`astrology_btime`,r),localStorage.setItem(`astrology_scan_year`,i);let s=document.getElementById(`calcBtn`),c=document.getElementById(`resultSection`),l=document.getElementById(`scanChara`),u=s&&s.getAttribute(`data-origin`)||`大スキャン！`;l&&(l.innerHTML=`<div class="scan-bubble">星々をスキャン中！<br>ちょっと待ってね✨</div>`);let d=document.getElementById(`scanCharaChaser`);d&&(d.classList.remove(`active`),d.offsetWidth,d.classList.add(`active`)),s.textContent=`大スキャン中... ⏳`,s.disabled=!0,c.style.display=`none`,F=[],await new Promise(e=>setTimeout(e,300));try{let e=k,t=new Date(o),n=V(t),r={};for(let t=0;t<e.length;t++){let i=e[t],a=await H(n,i.id);r[String(i.id)]=typeof a==`number`&&!isNaN(a)?a:0}let s=parseInt(i,10);if(s<t.getFullYear()){alert(`生まれた年以降を入力してね🔮✨`);return}let l=s%4==0&&s%100!=0||s%400==0?366:365,u=new Date(s,0,1,12,0,0),d=V(u),f=Array.from({length:l},()=>[]),p=(e,t,n,r,i)=>t?{intro:`今の空をめぐるエネルギーが、あなたの持っている可能性のスイッチをパッと明るくオンにする好調期です。`,work:e===0?`【お仕事中】あなたの存在感が高まり大抜擢の予感！【これから・お休み中】やりたい仕事への最高の引き寄せが働く日です。`:`【お仕事中】ひらめきや効率が爆発的にUPします。【これから・お休み中】新しい資格や学びをスタートする最高のチャンス！`,love:e===3?`【恋人あり】お互いの愛しさが全開になりサプライズのご褒美デー💖【フリー】キュンとする出会いや嬉しい連絡が舞い込む予感！`:`【恋人あり】私生活が居心地よく調律され、お家デートが最高に盛り上がります。【フリー】心のゆとりが魅力となり惹きつけ力が高まります。`,money:`【金運】自分の直感を信じてお買い物や投資をすると、想像以上の大満足やリターンを得られるラッキーな引き寄せサインです✨`}:{0:{intro:`周りの顔色や世間の『正しさ』を気にしすぎて、自分の本音をぎゅっと我慢しがちかも。焦りは禁物ですよ。`,work:`【お仕事中】無理なタスクを引き受けがち。今日は『これ明日でもいいですか？』と言うだけでトラブルをハッピーに回避できます！【これから・お休み中】焦ってミスマッチな仕事を選びやすい日。今日のエントリーは一旦保留が吉。`,love:`【恋人あり】相手にマウントを取りたくなったら星のイタズラです。『いつもありがとう』の一言で空気がまろやかに調律されます。【フリー】寂しさから妥協したくなりそう。今日は自分を世界一甘やかすお留守番デーにしてね。`,money:`【金運】見栄やストレスでの衝動買いに注意。レジに進む前に『本当にこれ大好き？』と3秒問いかけるだけで、お財布をハッピーに守れます！`},1:{intro:`些細な一言に心がチクッと痛んだり、プライベートで妙にイライラやモヤモヤが溜まりやすいサインです。`,work:`【お仕事中】職場の人間関係に過敏になりがち。今日は一歩引いて、美味しいコーヒーを飲む休憩を多めに挟んでね。【これから・お休み中】就職活動への不安が爆発しそう。今日は履歴書を閉じて、好きな映画を見て早く寝るのが最強の魔除けです。`,love:`【恋人あり】『なんで分かってくれないの！』と感情が爆発しそう。今日は無理に話し合わず、1人のご自愛時間を死守してね。【フリー】過去の切ない恋愛を思い出して感傷的になりがち。温かいココアを飲んで心の体温を上げてあげましょう💖`,money:`【金運】心が寂しいと、穴を埋めるようにお金を使いがち。今日は物ではなく、極上の入浴剤など『自分の身体を労わる美容』にお金を使うとハッピーに回避できます！`},2:{intro:`思考の回路に少しだけノイズが走りやすく、言葉のすれ違いやうっかりミスが起きやすい星の交差点です。`,work:`【お仕事中】メールの誤送信や遅刻の危機を検知。大事な返信は送る前に『2回見直す』だけで、すべてのトラブルを綺麗にすり抜けてハッピーに回避できます！【これから・お休み中】面接などで言葉が空回りしそう。結論からシンプルに短く話すのを意識してみてね。`,love:`【恋人あり】LINEの文字数を見誤ってトゲがあるように伝わりがち。今日は絵文字をいつもより多めにするか、電話で声を聞くのが安心の基盤。【フリー】連絡が来なくて既読スルーにハッピーを奪われがち。スマホを置いて部屋のお掃除をするとひらめきが戻ります！`,money:`【金運】契約書や規約の細かい文字を見落としがち。大きな買い物や定期購入のサブスクを始めるなら、今日ではなく明日に回すのが大正解。`},3:{intro:`楽しみたい気持ちが空回りしたり、優しすぎて『断れないモード』になって心が少し疲れちゃいそうなサイン。`,work:`【お仕事中】職場の雰囲気を良くしようと、お節介や気疲れを引き受けがち。今日は自分のデスクの世界だけに集中してまったり過ごしてね。【これから・お休み中】気が乗らない業界や条件を『せっかく紹介されたから』と受け入れそう。笑顔で『また今度✨』でOK！`,love:`【恋人あり】相手への不満をお買い物や趣味への現実逃避で埋めたくなりそう。夜にご自愛セット期間として美味しいデザートを2人で食べて調律してね。【フリー】甘い誘惑に流されやすい時。不誠実な気配を感じたら、すぐに連絡を既読スルーするのが最高の回避アクション。`,money:`【金運】お財布の紐がとろとろに緩みがち。予算オーバーな高級品に手が伸びたら、『本当に欲しいものは来月買う！』と決めて、今日のところは引き返してね。`},4:{intro:`情熱のエネルギーが少しだけ熱くなりすぎて、焦りやピリピリ感としてカラ回りしやすいアクティブ注意報です。`,work:`【お仕事中】イラッとする場面があっても、言い返す前に『ふぅー』と深呼吸。デスクの引き出しを整理整頓すると、怒りが最高の突破力に大変化します！【これから・お休み中】早く結果を出したくて焦る時。焦って無理なスケジュールを組まないのが安心の基盤です。`,love:`【恋人あり】小さな意見の食い違いから、売り言葉に買い言葉でケンカに発展しがち。今日は一歩引いて相手に花を持たせてあげてね。【フリー】強引なアプローチに戸惑ったり、逆に焦って自分から自爆メッセージを送りそう。送る前に親友に相談するのが回避のコツ。`,money:`【金運】ギャンブル的な出費や、勢いだけで高額なスクールに申し込むのは危険。深呼吸して、一晩ぐっすり眠ってから判断しましょう。`},5:{intro:`引き寄せの器が大きくなりすぎて、キャパオーバーや楽観視しすぎによる自爆が起きやすい時。ハードルを下げてね。`,work:`【仕事】手を広げすぎ。半分は明日に回して！`,love:`【恋愛】約束のダブルブッキングに注意。`,money:`【金運】気が大きくなって奢りすぎ注意。`},6:{intro:`自分に厳しくなり、孤独感やプレッシャーの沼にハマりそうな星のイタズラ。自分を褒めてね。`,work:`【仕事】自分を責めないで、歩んできた実績を眺めて！`,love:`【恋愛】相手の欠点ばかり目につきがち。加点方式で見てね。`,money:`【金運】ケチケチしすぎて心がカサカサになりそう。プチご褒美を。`},7:{intro:`突発的な予定変更やトラブルなど、ライフスタイルに新風が吹く日。ゲーム感覚で面白がって！`,work:`【仕事】パソコンのフリーズ注意！小まめな保存を。`,love:`【恋愛】急なドタキャンがあっても、新しい神展開へのサイン！`,money:`【金運】電子決済のエラーや予期せぬ出費の予感。`},8:{intro:`頭がぼーっとして集中力が切れたり、美しい理想に迷い込みやすいお留守番日。アラームを多めに！`,work:`【仕事】確認ミスに注意。チェックシートを作ってね。`,love:`【恋愛】相手に過度な期待をして勝気に傷つきがち。ありのままを愛して。`,money:`【金運】怪しい儲け話やうまい話に騙されやすいのでスルー！`},9:{intro:`古い感情や諦めていた問題が再燃しやすいドラマチックな覚醒時。不要なものはバサッとポイして！`,work:`【仕事】古い書類や未練を整理すると、真の底力が目覚めます。【これから】過去の失敗トラウマをリセットする最高の覚醒期。`,love:`【恋人あり】執着や束縛を手放すことで、絆が深まります。【フリー】腐れ縁を断ち切ることで、最高の新しい幸運スペースが空きます！`,money:`【金運】不用品をフリマアプリに出すと、驚くほど高値で売れる引き寄せサイン！`}}[e]||{intro:`いつもより少しだけ深呼吸を多めにして、まったり過ごすのが安心の基盤になりますよ🍃`,work:`【仕事】焦らずマイペースに片付けましょう。`,love:`【恋愛】夜は自分を全力で労ってあげてね✨`,money:`【金運】お財布を大切に扱いましょう。`};for(let t=0;t<l;t++){let n=d+t;for(let i of j){let a=A.find(e=>e.id===i),o=await H(n,i);for(let n of e){let e=r[String(n.id)],s=Math.abs(o-e);s>180&&(s=360-s);for(let e of M){let r=Math.abs(s-e.angle);if(r<=6){let o=`【 ${a.emoji} ${e.emoji} ${n.emoji} 】`,s=e.type===`good`,c=p(n.id,s,a.emoji,e.emoji,n.emoji),l=`<div style="margin-bottom:12px; font-weight:700; color:#c5a880;">${c.intro}</div><div style="margin-bottom:8px; color:#faf6f0;">${c.work}</div><div style="margin-bottom:8px; color:#faf6f0;">${c.love}</div><div style="margin-bottom:0; color:#faf6f0;">${c.money}</div>`;f[t].push({transitId:i,natalId:n.id,angle:e.angle,type:e.type,score:r,title:o,desc:l,transitPlanet:a,natalPlanet:n,aspect:e})}}}}}for(let e=1;e<=12;e++){let t=new Date(s,e,0).getDate(),n=1;for(;n<=t;){let r=(new Date(s,e-1,n).getTime()-u.getTime())/864e5,i=(f[Math.floor(r)]||[]).filter(e=>[0,2,3,4].includes(e.transitId));if(i.length>0){let r=null,a=-1;for(let o of i){let i=n;for(let r=n+1;r<=t;r++){let t=(new Date(s,e-1,r).getTime()-u.getTime())/864e5;if((f[Math.floor(t)]||[]).some(e=>e.transitId===o.transitId&&e.natalId===o.natalId&&e.angle===o.angle))i=r;else break}let c=i-n+1;c>a&&(a=c,r={data:o,start:n,end:i})}let o=r.data,c=r.start,l=r.end,d=c===l?`${e}月${c}日`:`${e}月${c}日～${l===t?`月末`:l+`日頃`}`;F.push({transitPlanet:o.transitPlanet,natalPlanet:o.natalPlanet,aspect:o.aspect,title:o.title,desc:o.desc,monthNum:e,dateRangeLabel:d,peakDayLabel:`${e}月${c}日頃`,isFlat:!1,startDay:c}),n=l+1}else n++}F.push({transitPlanet:{id:99,name:`案内`,emoji:`🔮`},natalPlanet:{id:99,name:`内側`,emoji:`✨`},aspect:{angle:99,name:`調律`,emoji:`🍃`,type:`flat`},title:``,desc:`💡 **カレンダーに日付がない日は、前後の星の動きをじっくり参考にしてみてね（星の影響が何もないって事じゃないですよ✨）**`,monthNum:e,dateRangeLabel:`${e}月全体`,peakDayLabel:`${e}月`,isTopNotice:!0,startDay:999})}F.sort((e,t)=>e.monthNum===t.monthNum?e.startDay-t.startDay:e.monthNum-t.monthNum),I=1,K(),c.style.display=`block`;let m=await U(r,a,s);L=m,R=s,q(F),Y(m)}catch(e){console.error(e)}finally{l&&(l.innerHTML=``),setTimeout(()=>{let e=document.getElementById(`scanCharaChaser`);e&&e.classList.remove(`active`)},100),s.textContent=u,s.style.opacity=`1`,s.disabled=!1}}function Y(e){let t=document.getElementById(`halfSumSection`);t&&(t.innerHTML=`
    <div class="monthly-header-divider" style="margin-top: 30px;"><h2>🧭 運命サイクルについて</h2></div>
    <div class="schedule-card" style="border: 1px dashed #c5a880; background: rgba(13,12,10,0.8); padding: 15px; border-radius: 8px; font-size: 13px; line-height: 1.6; color: #c4b9ae;">
      チャンスと一時的な疲れが同時に起きるのは、星が正しく動いている最高のデトックスの証拠です✨夜は自分を全力で労わる「ご自愛セット期間」として楽しんでみてくださいね。
    </div>`)}async function X(){let e=document.createElement(`style`);e.textContent=O,document.head.appendChild(e);try{let e=window.location.pathname.endsWith(`/`)?window.location.pathname:window.location.pathname.substring(0,window.location.pathname.lastIndexOf(`/`)+1);P=new w({ephePath:e+`ephe/`,wasmBinaryFile:e+`assets/swisseph-BmP0Bw24.wasm`}),P&&typeof P.init==`function`&&await P.init()}catch{}let t=localStorage.getItem(`astrology_byear`)||`1995`,n=localStorage.getItem(`astrology_bmonth`)||`10`,r=localStorage.getItem(`astrology_bday`)||`10`,i=localStorage.getItem(`astrology_btime`)||`12:00`,a=localStorage.getItem(`astrology_scan_year`)||`2026`,o=``;for(let e=1940;e<=2026;e++)o+=`<option value="${e}" ${String(e)===t?`selected`:``}>${e}年</option>`;let s=``;for(let e=1;e<=12;e++)s+=`<option value="${e}" ${String(e)===n?`selected`:``}>${e}月</option>`;let c=``;for(let e=1;e<=31;e++)c+=`<option value="${e}" ${String(e)===r?`selected`:``}>${e}日</option>`;let l=document.getElementById(`app`);if(!l)return;l.innerHTML=`
    <div id="scanCharaChaser" class="scan-dash-chara"></div>
    <div class="container">
      <div class="header"><h1>クロノスコープ運勢</h1><p class="notice-text">🔮 効果の保証はありません</p><p class="author">produced by れいさん</p></div>
      <div class="input-card">
        <div class="form-row" style="display:flex; flex-direction:column; gap:12px;">
          <div class="form-group">
            <label>📅 生まれた年月日（年 / 月 / 日）</label>
            <div style="display:flex; gap:8px; margin-top:4px;">
              <select id="birth_year" class="form-control" style="flex:1; background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:8px;">${o}</select>
              <select id="birth_month" class="form-control" style="flex:1; background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:8px;">${s}</select>
              <select id="birth_day" class="form-control" style="flex:1; background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:8px;">${c}</select>
            </div>
          </div>
          <div class="form-group"><label>⏱ 出生時間（時・分）</label><input type="time" id="birthtime" class="form-control" value="${i}"></div>
          <div class="form-group"><label>占いたい西暦</label><input type="number" id="scanyear" class="form-control" value="${a}" min="1900" max="2100"></div>
        </div>
        <button id="calcBtn" class="btn-submit" style="margin-top:20px;">大スキャン！</button><div id="scanChara" style="margin-top: 16px; text-align: center; width: 100%;"></div>
      </div>
      <div id="resultSection" style="display: none;">
        <div class="month-tabs" id="monthTabs"></div>
        <div class="filter-tabs" id="filterTabs" style="display:none;"><button class="tab-btn active" data-type="all">✨ すべて</button></div>
        <div class="schedule-list" id="scheduleList"></div>
        <div id="halfSumSection"></div>
      </div>
    </div>`;let u=document.getElementById(`calcBtn`);u&&(u.setAttribute(`data-origin`,u.textContent),u.addEventListener(`click`,J))}X();