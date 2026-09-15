(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(i.map(i=>{if(i=t(i,a),i=u(i),i in n)return;n[i]=!0;let o=i.endsWith(`.css`);for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:e,o||(s.as=`script`),s.crossOrigin=``,s.href=i,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,t)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})},i=Object.defineProperty,a=(e,t)=>i(e,`name`,{value:t,configurable:!0}),o=(e=>(e[e.Julian=0]=`Julian`,e[e.Gregorian=1]=`Gregorian`,e))(o||{}),s=(e=>(e[e.Sun=0]=`Sun`,e[e.Moon=1]=`Moon`,e[e.Mercury=2]=`Mercury`,e[e.Venus=3]=`Venus`,e[e.Mars=4]=`Mars`,e[e.Jupiter=5]=`Jupiter`,e[e.Saturn=6]=`Saturn`,e[e.Uranus=7]=`Uranus`,e[e.Neptune=8]=`Neptune`,e[e.Pluto=9]=`Pluto`,e[e.Earth=14]=`Earth`,e[e.EclipticNutation=-1]=`EclipticNutation`,e[e.FixedStar=-10]=`FixedStar`,e))(s||{}),c=(e=>(e.Placidus=`P`,e.Koch=`K`,e.Porphyrius=`O`,e.Regiomontanus=`R`,e.Campanus=`C`,e.Equal=`A`,e.VehlowEqual=`V`,e.WholeSign=`W`,e.Meridian=`X`,e.Azimuthal=`H`,e.PolichPage=`T`,e.Alcabitus=`B`,e.Morinus=`M`,e))(c||{}),l=(e=>(e[e.Ascendant=0]=`Ascendant`,e[e.MC=1]=`MC`,e[e.ARMC=2]=`ARMC`,e[e.Vertex=3]=`Vertex`,e[e.EquatorialAscendant=4]=`EquatorialAscendant`,e[e.CoAscendant1=5]=`CoAscendant1`,e[e.CoAscendant2=6]=`CoAscendant2`,e[e.PolarAscendant=7]=`PolarAscendant`,e))(l||{}),u=(e=>(e[e.JPLEphemeris=1]=`JPLEphemeris`,e[e.SwissEphemeris=2]=`SwissEphemeris`,e[e.MoshierEphemeris=4]=`MoshierEphemeris`,e[e.Heliocentric=8]=`Heliocentric`,e[e.TruePositions=16]=`TruePositions`,e[e.J2000=32]=`J2000`,e[e.NoNutation=64]=`NoNutation`,e[e.Speed3=128]=`Speed3`,e[e.Speed=256]=`Speed`,e[e.NoGravitationalDeflection=512]=`NoGravitationalDeflection`,e[e.NoAberration=1024]=`NoAberration`,e[e.Equatorial=2048]=`Equatorial`,e[e.XYZ=4096]=`XYZ`,e[e.Radians=8192]=`Radians`,e[e.Barycentric=16384]=`Barycentric`,e[e.Topocentric=32768]=`Topocentric`,e[e.Sidereal=65536]=`Sidereal`,e[e.ICRS=131072]=`ICRS`,e[e.DpsidepsIAU1980=262144]=`DpsidepsIAU1980`,e[e.JPLHorizons=524288]=`JPLHorizons`,e[e.JPLHorizonsApprox=1048576]=`JPLHorizonsApprox`,e))(u||{}),d={Astrometric:1536,DefaultSwissEphemeris:258,DefaultMoshier:260},f=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.totalBegin=i,this.totalEnd=a,this.penumbralBegin=o,this.penumbralEnd=s}isTotal(){return!!(this.type&4)}isPartial(){return!!(this.type&16)}isPenumbralOnly(){return!!(this.type&64)&&!(this.type&20)}getTotalityDuration(){if(!this.isTotal()||this.totalBegin===0||this.totalEnd===0)return 0;let e=(this.totalEnd-this.totalBegin)*24;return e>0?e:0}getPartialDuration(){if(this.partialBegin===0||this.partialEnd===0)return 0;let e=(this.partialEnd-this.partialBegin)*24;return e>0?e:0}getTotalDuration(){if(this.penumbralBegin===0||this.penumbralEnd===0)return 0;let e=(this.penumbralEnd-this.penumbralBegin)*24;return e>0?e:0}},p=(a(f,`LunarEclipseImpl`),f),m=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.centralBegin=i,this.centralEnd=a,this.centerLineBegin=o,this.centerLineEnd=s}isTotal(){return!!(this.type&4)}isAnnular(){return!!(this.type&8)}isHybrid(){return!!(this.type&32)}isPartial(){return!!(this.type&16)}isCentral(){return!!(this.type&1)}isNonCentral(){return!!(this.type&2)}},h=(a(m,`SolarEclipseImpl`),m),g=class{constructor(e,t,n,r,i=1){this.year=e,this.month=t,this.day=n,this.hour=r,this.calendarType=i}toISOString(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60),n=Math.floor(((this.hour-e)*60-t)*60),r=Math.floor((((this.hour-e)*60-t)*60-n)*1e3),i=Math.abs(this.year).toString().padStart(4,`0`);return`${this.year<0?`-`:``}${i}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)}T${e.toString().padStart(2,`0`)}:${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}.${r.toString().padStart(3,`0`)}Z`}toString(){let e=this.calendarType===1?`Gregorian`:`Julian`;return`${this.year<0?`${Math.abs(this.year)} BCE`:this.year.toString()}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)} ${this.hour.toFixed(6)} hours (${e})`}},_=(a(g,`DateTimeImpl`),g),v=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}remove(e){return Array.isArray(e)?e.forEach(e=>this.flags&=~e):this.flags&=~e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new v(e)}static get swissEphemerisWithSpeed(){return v.from(2,256)}static get moshierWithSpeed(){return v.from(4,256)}static get astrometric(){return v.from(2,1024,512)}static get heliocentric(){return v.from(2,8)}static get topocentric(){return v.from(2,32768)}static get equatorial(){return v.from(2,2048,256)}},y=(a(v,`_CalculationFlags`),v),b=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new b(e)}static get allSolar(){return new b([1,2,4,8,16,32])}static get allLunar(){return new b([4,16,64])}static get totalOnly(){return b.from(4)}static get totalAndPartial(){return b.from(4,16)}},x=(a(b,`_EclipseTypeFlags`),b);function S(e){return typeof e==`number`?e:e instanceof y?e.toNumber():Array.isArray(e)?y.from(...e).toNumber():e}a(S,`normalizeFlags`);function C(e){return typeof e==`number`?e:e instanceof x?e.toNumber():Array.isArray(e)?x.from(...e).toNumber():e}a(C,`normalizeEclipseTypes`);var w=class{constructor(){this.module=null,this.ready=!1}async init(e){if(this.ready)return;let t=await r(()=>import(`./swisseph-BtfJwKK5.js`),[],import.meta.url),n;if(n=typeof t.default==`function`?t.default:typeof t==`function`?t:t.default?t.default:t.SwissEphModule||t,typeof n!=`function`)throw Error(`Failed to load WASM module: SwissEphModule factory function not found`);let i=e;if(!i)try{i=new URL(``+new URL(`swisseph-BmP0Bw24.wasm`,import.meta.url).href,``+import.meta.url).href}catch{i=`swisseph.wasm`}this.module=await n({locateFile:a((e,t)=>e===`swisseph.wasm`?i:t?t+e:e,`locateFile`)}),this._wrapFunctions(),this.ready=!0,console.log(`Swiss Ephemeris WASM initialized:`,this.version())}_wrapFunctions(){let e=this.module;this._julday=e.cwrap(`swe_julday_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`]),this._getPlanetName=e.cwrap(`swe_get_planet_name_wrap`,`string`,[`number`]),this._setSiderealMode=e.cwrap(`swe_set_sid_mode_wrap`,null,[`number`,`number`,`number`]),this._getAyanamsa=e.cwrap(`swe_get_ayanamsa_ut_wrap`,`number`,[`number`]),this._close=e.cwrap(`swe_close_wrap`,null,[]),this._version=e.cwrap(`swe_version_wrap`,`string`,[])}_checkReady(){if(!this.ready)throw Error(`SwissEphemeris not initialized. Call await swe.init() first.`)}version(){return this._checkReady(),this._version()}setEphemerisPath(e){this._checkReady();let t=this.module,n=t.allocateUTF8(e||``);t.ccall(`swe_set_ephe_path_wrap`,null,[`number`],[n]),t._free(n)}async loadStandardEphemeris(){let e=`https://cdn.jsdelivr.net/gh/aloistr/swisseph/ephe`;await this.loadEphemerisFiles([{name:`sepl_18.se1`,url:`${e}/sepl_18.se1`},{name:`semo_18.se1`,url:`${e}/semo_18.se1`},{name:`seas_18.se1`,url:`${e}/seas_18.se1`}])}async loadEphemerisFiles(e){this._checkReady();let t=this.module;try{t.FS.mkdir(`/ephemeris`)}catch{}for(let n of e){let e=await fetch(n.url);if(!e.ok)throw Error(`Failed to download ${n.name}: ${e.statusText}`);let r=await e.arrayBuffer(),i=new Uint8Array(r);t.FS.writeFile(`/ephemeris/${n.name}`,i)}this.setEphemerisPath(`/ephemeris`)}julianDay(e,t,n,r=0,i=o.Gregorian){if(this._checkReady(),!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r))throw TypeError(`julianDay requires finite numbers. Received: year=${e}, month=${t}, day=${n}, hour=${r}`);return this._julday(e,t,n,r,i)}dateToJulianDay(e,t=o.Gregorian){if(this._checkReady(),!(e instanceof Date))throw TypeError(`dateToJulianDay expects a Date object`);let n=e.getUTCFullYear(),r=e.getUTCMonth()+1,i=e.getUTCDate(),a=e.getUTCHours(),s=e.getUTCMinutes(),c=e.getUTCSeconds(),l=e.getUTCMilliseconds();if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))throw TypeError(`Invalid Date object provided to dateToJulianDay. Date.toString() returned: "${e.toString()}". Please ensure the date is valid (e.g., avoid new Date("invalid")).`);let u=a+s/60+c/3600+l/36e5;return this.julianDay(n,r,i,u,t)}julianDayToDate(e,t=o.Gregorian){this._checkReady();let n=this.module,r=n._malloc(4),i=n._malloc(4),a=n._malloc(4),s=n._malloc(8);n.ccall(`swe_revjul_wrap`,null,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,r,i,a,s]);let c=n.getValue(r,`i32`),l=n.getValue(i,`i32`),u=n.getValue(a,`i32`),d=n.getValue(s,`double`);return n._free(r),n._free(i),n._free(a),n._free(s),new _(c,l,u,d,t)}calculatePosition(e,t,n=d.DefaultMoshier){this._checkReady();let r=S(n),i=this.module,a=i._malloc(48),o=i._malloc(256),s=i.ccall(`swe_calc_ut_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`],[e,t,r,a,o]);if(s<0){let e=i.UTF8ToString(o);throw i._free(a),i._free(o),Error(e)}let c=[];for(let e=0;e<6;e++)c[e]=i.getValue(a+e*8,`double`);return i._free(a),i._free(o),{longitude:c[0],latitude:c[1],distance:c[2],longitudeSpeed:c[3],latitudeSpeed:c[4],distanceSpeed:c[5],flags:s}}getCelestialBodyName(e){return this._checkReady(),this._getPlanetName(e)}setSiderealMode(e,t=0,n=0){this._checkReady(),this._setSiderealMode(e,t,n)}getAyanamsa(e){return this._checkReady(),this._getAyanamsa(e)}getAyanamsaExUt(e,t=u.SwissEphemeris){this._checkReady();let n=S(t),r=this.module,i=r._malloc(8),a=r._malloc(256);try{if(r.ccall(`swe_get_ayanamsa_ex_ut_wrap`,`number`,[`number`,`number`,`number`,`number`],[e,n,i,a])<0){let e=r.UTF8ToString(a);throw Error(e||`Failed to calculate ayanamsa`)}return r.getValue(i,`double`)}finally{r._free(i),r._free(a)}}findNextLunarEclipse(e,t=u.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=S(t),a=C(n),o=this.module,s=o._malloc(80),c=o._malloc(256),l=o.ccall(`swe_lun_eclipse_when_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(l<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new p(l,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}findNextSolarEclipse(e,t=u.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=S(t),a=C(n),o=this.module,s=o._malloc(80),c=o._malloc(256),l=o.ccall(`swe_sol_eclipse_when_glob_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(l<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new h(l,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}calculateHouses(e,t,n,r=c.Placidus){this._checkReady();let i=this.module,a=i._malloc(104),o=i._malloc(80),s=r.charCodeAt(0);i.ccall(`swe_houses_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,n,s,a,o]);let u=[];for(let e=0;e<13;e++)u[e]=i.getValue(a+e*8,`double`);let d=[];for(let e=0;e<10;e++)d[e]=i.getValue(o+e*8,`double`);return i._free(a),i._free(o),{cusps:u,ascendant:d[l.Ascendant],mc:d[l.MC],armc:d[l.ARMC],vertex:d[l.Vertex],equatorialAscendant:d[l.EquatorialAscendant],coAscendant1:d[l.CoAscendant1],coAscendant2:d[l.CoAscendant2],polarAscendant:d[l.PolarAscendant],houseSystem:r}}close(){this.ready&&this._close()}};a(w,`SwissEphemeris`);var T=w,ee=new T;typeof window<`u`&&(window.SwissEphemeris=T,window.swisseph=ee);var E={"0_0_120":{title:`がんばらなくても大丈夫。自然に褒められるご褒美デー`,desc:`💻無理に気合いを入れすぎなくても、いつものあなたのままで仕事がサクサク進む日です。周りから自然と頑張りが認められやすいよ。
❤️飾らないいつものあなたが一番愛される日。気になるお相手とも、緊張せずにリラックスして楽しいおしゃべりができます。
🪙嬉しいご褒美が舞い込みやすい日。ずっと欲しかったものを素直に買ってあげると、お金の巡りがさらに良くなります。`},"0_1_120":{title:`心のお財布をゆるめて。感情がふんわり満たされる極上のお休みデー`,desc:`💻職場の人間関係がとても優しくなって、穏やかなペースで仕事が進みます。机の上を少し片付けたり、次の準備をのんびりやるのがおすすめ。
❤️おうちで一緒においしいスイーツを食べたり、ゴロゴロしながら映画を観るような、あったかいデートが一番うまくいきます。
🪙暮らしをちょっとリッチにするプチお買い物がおすすめ。上質なタオルやアロマを買うと、さらに良いお金の引き寄せが起きます。`},"0_2_120":{title:`頭がスッキリ冴え渡る！おしゃべりやメールがサクサク進む知性日`,desc:`💻頭の回転が軽やかになる日！ブログの文章を書いたり、大事なメールの返信、会議での発表、アイデア出しはすべて今日やるのがベスト。
❤️言葉のセンスが可愛くなる日。メッセージのやり取りをすると会話が大盛り上がりします。ずっと伝えたかった本音を伝えるのにも最高。
🪙お仕事用の勉強グッズ or 必要な書類の手続きを進めるのにぴったり。本や便利なツールを買うと、使ったお金以上の結果になります。`},"0_3_120":{title:`愛され運がマックス！ただそこにいるだけでみんなに優しくされる日`,desc:`💻あなたの可愛いセンスや笑顔が、職場の人やお客さまから大絶賛される日。お願いごとも、あなたの愛嬌のおかげでトントン拍子に進みます。
❤️恋の追い風がびゅんびゅん吹く日！可愛くお洒落をしてお出かけすると、行く先々で親切にされたり、嬉しいおねだりがすんなり通ります。
🪙コスメやファッション、自分をいたわるケアグッズを買うのにこれ以上ない最高の日。心が大満足してお財布にもハッピーが還ります。`},"0_4_120":{title:`フットワークが超軽い！面倒なことも笑顔でクリアできるアクティブ日`,desc:`💻体と心の元気がぴったり噛み合って、いつもなら「面倒だな」と思う仕事もサクサク片付けられるパワーが長続きします。
❤️あなたの真っ直ぐな「好き」の気持ちが、お相手の心に届く日。自分から「ここに行こう！」と明るくデートに誘うと大成功します。
🪙フットワーク軽くお出かけした先に嬉しい金運のヒントがあります。健康的なアイテムや、アクティブに動くための新しい靴への投資が吉。`},"0_0_90":{title:`焦りは禁物。ハーブティーを飲んでゆっくり進むお休みデー`,desc:`💻やる気にブレーキがかかるように感じるかも。焦って無理に進めようとせず、今日は書類のミスをチェックしてのんびり過ごすのが大正解。
❤️自分を可愛く見せようとして空回りしやすい日。お相手の顔色を気にしすぎなくても大丈夫。おうちで自分のためにケアをしてゆっくり過ごしてね。
🪙ストレスから衝動買いしたくなっちゃうかも！お財布を開く前にあったかいお茶を飲んで一呼吸置くと、無駄遣いをきれいに防げます。`},"0_1_90":{title:`感情がうるうる揺れやすい日。スマホを閉じて早く寝るのが大正解`,desc:`💻身近な人のちょっとした一言に心がチクッと傷ついてしまいがち。難しい仕事は明日に回し、自分の心を一番に守ってサクッと帰りましょう。
❤️寂しさからお相手に「もっと優しくして！」と拗ねてケンカしちゃいそうな予感。スマホを閉じて、ふわふわの毛布にくるまって早く寝てね。
🪙イライラをお買い物で埋めたくなったら星のいたずら。今日はおサイフをしまって、コンビニのおいしいスイーツを1個だけ買って自愛して。`},"0_3_90":{title:`お買い物欲が暴走しそう！？わがままをスイーツで癒やすリセット日`,desc:`💻集中力が途切れがちでお洒落のことばかり考えて上の空になっちゃうかも。「1時間だけがんばる！」と細かく時間を区切って気分転換してね。
❤️お相手の態度にヤキモチを焼いてモヤモヤしがち。それはあなたがピュアな証拠。今日はお相手を追いかけず、友達とおしゃべりして発散✨
🪙可愛い洋服を見つけて予算オーバーしそうなお買い物欲が湧いてきそう！「明日でも大丈夫」と言い聞かせて、大きな買い物は数日待って。`},"0_4_90":{title:`心がソワソワ焦る日。勢いで決めずに、一呼吸置いて進もう`,desc:`💻気持ちばかりが焦って予定が急に変わりイライラしやすい日。フライングしそうな時は、温かいお茶を飲んでスケジュールをノートに書き直して。
❤️お相手に対してちょっぴりキツい口調で怒りをぶつけてしまいがち。売り言葉に買い言葉になりそうな時はストップ！音楽を聴いて自愛して。
🪙勢いに任せてお金を動かすと、後で「失敗したな」と後悔しがち。今日はお札を動かさず、おいしいスープでも飲んでおうちでのんびり過ごして。`},"0_5_120":{title:`可能性が無限に広がる！やること為すことすべてに追い風が吹く大吉日`,desc:`💻あなたの持つポテンシャルが社会的に大きく認められる最高の発展日です。新しい企画の提案や、思い切ったキャリアの挑戦は今日動くとトントン拍子に進みます。
❤️出会い運・パートナー運が最高潮。オープンな気持ちで人と関わることで、あなたの未来を豊かにしてくれる素晴らしい縁が引き寄せられます。
🪙自己投資や大きめの買い物にツキがあります。今日使ったお金は、将来何倍もの大きな豊かさの財産となってあなたの元へ還ってきます。`},"0_6_120":{title:`努力の成果が形になる。ブレない信頼の土台を築き上げる日`,desc:`💻これまで地道に積み重ねてきた努力が、目に見える実績や周囲からの確固たる信頼としてカチッと固まる日です。丁寧な仕事ぶりが絶賛されるよ。
❤️派手さはなくても、これからの安心できる関係を真面目に話し合うのに最適な日。お相手への誠実な態度が、２人の絆をより強固なものにします。
🪙長期的な貯蓄の計画を立てたり、長く使える一生モノの上質なアイテムを購入するのにこれ以上ない大吉日です。`},"0_9_0":{title:`古い脱皮を終えて生まれ変わる！圧倒的な底力がみなぎる覚醒デー`,desc:`💻これまでの限界をガツンと打ち破るような、凄まじい集中力とブレイクスルーが起きる日です。諦めかけていた難しいタスクも、力技で解決できます。
❤️中途半端な関係を終わらせて新しいステージへ進むような、ドラマチックな再生の引力が働きます。お相手の心に真っ直ぐ響く強いメッセージが送れる日。
🪙おサイフや身の回りのものを丸ごとリセットして新しく新調すると、劇的な金運の若返りと強力な引き寄せがスタートします。`},"2_0_0":{title:`言葉の魔法が使える日！大事な連絡やブログの書き込みに最高の日`,desc:`💻頭の回転がいつもより何倍もスッキリ早くなる日です！ブログの文章を書いたり、大事なメールの返信、これからの計画を立てる仕事はすべて今日がベスト。
❤️おしゃべりのテンポが心地よく弾む日。ずっと言えずにいた真面目なお願いや、今後の相談ごとを、重くならずにサラッと優しく伝えるのに一番良いタイミング。
🪙色々と調べることでおトクな情報が見つかる日。スマホの買い替え、お仕事に役立つ便利なツールの購入、スキルアップのための勉強にお金を使うと何倍ものプラスに。`},"2_1_0":{title:`自分の『本当の気持ち』と向き合う日。ノートに願いを書くノートタイム`,desc:`💻これからの目標ややりたい仕事を、ノートに書き出して頭の中を整理するのにぴったり。ゴチャゴチャしていた作業の順番がすっきり分かって、具体的なステップが見えます。
❤️心の中にある「本当はもっとこうしたい」という優しい本音に気づける日。カフェで手帳に想いを書き出してみると、一番素直で可愛い言葉が見つかるよ。
🪙毎日の暮らしに役立つ、知的なお買い物にツキがあります。おうちで家計簿をつけたり、これからの計画的なお金の細かな計算を静かに進めておくと金運アップ。`},"2_3_0":{title:`おしゃべりが楽しすぎる日！あなたの言葉が周りをハッピーにする日`,desc:`💻あなたの書く文章や発言に、可愛い愛嬌とハッピーな魅力が最高に乗る日！SNSでの告知、接客や営業トーク、お店の案内文は今日書くのが大成功のコツです。
❤️メッセージがスムーズに弾むトキメキ日！お相手をクスッと笑わせる可愛いスタンプを送ったり、小さなおねだりを伝えてみると、トントン拍子にデートが決まる予感。
🪙センスの良い素敵なおトク情報が集まる日。クチコミを頼りに、気になっていた話題の美容アイテムや、自分へのご褒美スイーツをネットでポチッと買うと大満足。`},"2_4_0":{title:`迷いが消えてサクッと決まる！たまった作業を爆速で片付ける日`,desc:`💻ウジウジ悩むのを完全にやめて、即断即決で動ける日！たまっていた面倒な事務作業、山積みのメール返信、後回しにしていた苦手なタスクを一気に終わらせてスッキリ。
❤️心のモヤモヤや弱気がバサッと消え去ります。自分から自然な流れで「ここに行こう！」と誘ったり、関係を一歩前に進めるためのハッキリとした優しい勇気が湧く日。
🪙お買い物の決断力が上がる日。買おうか迷っていたお仕事用の機材や、自分を高めるための勉強レッスン代など、必要なものへスピーディーに支払うと未来の豊かさを呼び寄せます。`},"2_0_90":{title:`連絡のすれ違いやスマホの誤送信に注意。確認重視の丁寧ピリオド`,desc:`💻頭が急いで空回りしやすく、メールの誤字脱字やスケジュールの勘違いが起きやすいとき。大事な連絡は、送る前にもう一度「宛先」と「日時」を指差し確認してね。
❤️「そんなつもりで言ったんじゃないのに…」という言葉のすれ違いが起きやすい波。可愛い絵文字やスタンプをいつもより多めに添えて気持ちをまろやかに伝えて。
🪙ネットの買い物で、サイズや色を間違えてポチッと注文してしまいがち。決済ボタンを押す前に、買い物かごの中身をゆっくり見直すのが大正解です。`},"2_4_90":{title:`言葉がちょっぴりトゲトゲしちゃうかも。一拍置いて話す作戦期`,desc:`💻正論を相手にぶつけたくなったり、周りの仕事の遅さにイライラしちゃうかも。それはあなたの知性が鋭くなっている証拠。会議では一呼吸置いてから発言してね。
❤️お相手に対して「なんで分かってくれないの？」と、言葉のキックを飛ばしたくなる予感。モヤモヤしたらスマホを裏返し、音楽を大音量で聴いてゴゲンにしよう✨
🪙「今すぐ買わなきゃ！」と焦ってお金を払いたくなるかも。今買わなくても逃げません。あったかいココアでも飲んで、一晩寝かせてからもう一度考えてみて。`},"3_0_0":{title:`愛されオーラが全開！ただそこにいるだけでみんなに優しくされる日`,desc:`💻あなたの可愛いセンスや笑顔が120%発揮される日。あなたが職場にいるだけで雰囲気がパッと明るくなり、接客やお願いごとがびっくりするほどまろやかに進みます。
❤️お姫様スポットライトデー！あなたの魅力が一番輝くので、お相手から褒め言葉を貰いやすいハッピー日です。デートの約束や新しい出会いの場に最高のタイミング。
🪙美容や自分磨きへのお金使いが大吉。可愛くお洒落をしてお出かけすると、行く先々で親切にされたり、ずっと欲しかったものを最高のタイミングで手に入れられます。`},"3_1_0":{title:`おうち時間を最高にリッチに。大好きな空間でのんびり過ごす贅沢デー`,desc:`💻ガツガツがんばるのをそっとお休みして、心地よいペースでお仕事をがんばる日。仕事デスクの上にお気に入りの小物を1つ置くだけで、良いアイデアが浮かびます。
❤️プライベートの心が100%満たされる日。おうちでおいしいお茶を淹れて、親しい人と他愛ないおしゃべりをしたり映画をのんびり観るようなリラックスデートで愛が深まります。
🪙インテリアや上質なルームウェア、おうち時間を贅沢にしてくれるお取り寄せスイーツにお金を使うのが大吉。心がホッと満たされるとお金の巡りも良くなります。`},"3_2_0":{title:`送るメッセージに恋の魔法がかかる✨ 嬉しい返信がすぐ届くトキメキ日`,desc:`💻あなたが作る文章やお礼のメールに、とても優しい気配りが宿る日。日頃お世話になっている人へ感謝のメッセージを送ると、信頼関係がバシッと強くなります。
❤️送るLINEに可愛い魔法がかかる日！可愛くおねだりするメッセージを送ったりデートの約束を提案すると、お相手から驚くほどトントン拍子に嬉しい返信が返ってきます。
🪙読みたかった本や、センスを磨くためのマニュアルを探すのに向いている日。言葉を扱う趣味や、知的な自分磨きへのプチ投資が、将来大きなハッピーになって返ります。`},"3_4_90":{title:`ご褒美のやりすぎにちょっぴり注意。自分を甘やかすリセット期`,desc:`💻お仕事モードが完全にオフになり、サボりたくなったり甘いものばかり食べたくなっちゃうかも！「30分だけ集中したら美味しいチョコを食べる」と決めて乗り切ろう。
❤️寂しがりやな自分や、おねだりしたい気持ちがムクムク湧いてきて空回りしやすいとき。お相手にぶつける前に、まずはお気に入りの入浴剤でお風呂を楽しんで。
🪙お買い物欲が暴走して、予算オーバーのコスメや洋服を勢いで買ってしまいがち。今日はウインドウショッピングで可愛いエネルギーを充電するだけに留めるのが大大吉。`},"3_5_120":{title:`ハッピーの連鎖が止まらない！愛と豊かさに満たされる祝福サークル`,desc:`💻あなたのセンスや明るいキャラクターが社会的に大絶賛される日。堅苦しいやり取りも、あなたの愛嬌のおかげで面白いほどトントン拍子に進みます。
❤️全天体があなたを祝福するような最高のときめき日！お洒落をしてお出かけすると、行く先々で親切にされたり、お相手から極上の愛の言葉を貰える予感✨
🪙欲しかったものを買うのにこれ以上ない最高の日。値段で迷っていたものも、今日買うと心が120%大満足してお財布にもハッピーな豊かさが巡ります。`},"3_8_120":{title:`ロマンチックなインスピレーションが溢れる、心がとろける芸術デー`,desc:`💻クリエイティブなアイデアや、お洒落なデザインのセンスが神がかる日。直感に従って作った作品や文章が、周りの人の心を優しく感動させます。
❤️おとぎ話のようなロマンチックで優しい愛に包まれる日。お互いの心の境界線が溶け合うような、あったかいピュアなデートが楽しめます。
🪙美しい音楽を聴きに行ったり、映画を観たり、アートや美容などの「心を豊かにしてくれるもの」へお金を使うと金運の巡りが大好転します。`},"4_0_0":{title:`やる気エンジン全開！ダメ元で一歩踏み出すと壁をぶち抜ける日`,desc:`💻圧倒的な行動力がみなぎる日です！後回しにしていた大変な仕事や、苦手な人への連絡、新しい企画の提案など、強気でダイレクトに切り込んで片付けちゃいましょう。
❤️普段なら恥ずかしくて待ってしまう場面でも、今日だけは自分から大胆にリードしたくなる熱いパッションが宿ります。自分から楽しいお誘いを仕掛ける大チャンス！
🪙勝負運がめちゃくちゃ強い大吉日。ずっとやりたかったお仕事にお金を投資したり、独立に向けた具体的な一歩としておサイフを開くのが最高。自分を信じて動こう。`},"4_1_0":{title:`モヤモヤをパワーに変える！お部屋を丸ごと大掃除するお片付けデー`,desc:`💻心の中にため込んでいたイライラが突破力に変わる日。たまったゴミや古い書類、いらないデータをバサバサと一気に整理して、お仕事環境を新しく生まれ変わらせて。
❤️ちょっぴり短気になりやすい反面、自分の本音をしっかりと行動に移せるパワフルな日です。感情をお相手にぶつけそうな時は、思いきりスポーツをして発散させてね。
🪙おうちをピカピカに掃除するための便利グッズを買ったり、スタミナをつけるための贅沢なお肉料理にお金を使うのが大吉。環境を整えることで金運の通り道がキレイになります。`},"4_2_0":{title:`頭のキレが最高レベル！たまった事務作業を爆速で片付ける日`,desc:`💻あなたの知性に強烈なブースターがつきます！言葉のスピードが速くなり、面倒な書類作成や事務作業、山積みの連絡を一気に爆速で片付けられます。交渉事もあなたが主導権を。
❤️お互いの本音をぶつけ合う徹底的な対話に向いている日。売り言葉に買い言葉にならないよう、一呼吸置きながら本気で向き合うことで、うやむやだった関係がすっきり解決します。
🪙作業の効率を劇的にアップさせてくれる最新のスマホやパソコン、便利なツールを購入すると大正解。ここで使うツールへの投資は、あとから何倍もの成果になって戻ってきます。`},"4_3_0":{title:`あなたが恋の主導権を握る時！お洒落をして大胆にアプローチする日`,desc:`💻あなたの作品やクリエイティブなアイデアが、周りの人の心を熱く揺さぶる日。一歩前に出て、攻めの発信や自分の価値を大きくアピールする発信をすると大成功を収めます。
❤️強烈なときめきが湧き上がる日！大人な余裕を持って、お相手を可愛く転がしたり、自分からデートを仕掛けて主導権をガチッと握っちゃいましょう。メイクが武器になるよ。
🪙お洒落の攻め期です！いつもより大胆なお洋服、勝負コスメ、大人の香水を購入すると、あなたの放つ引力が最大に跳ね上がります。自分を輝かせるためのお買い物が最高の金運を呼びます。`},"4_3_120":{title:`趣味も仕事もパッション全開！あなたの『好き』が周りを巻き込むとき`,desc:`💻あなたのクリエイティブなアイデアや、熱い情熱にスポットライトが当たるとき。やりたかった企画を発信すると、驚くほどトントン拍子にファンや味方が増えていきます。
❤️恋の戦闘力が最高レベルにアップ！受け身の姿勢をやめて、自分から「ここに行きたいな！」と明るくデートを仕掛けると、お相手のハートをガチッと射止めちゃうハッピー期です✨
🪙自分を一番輝かせるためのお洒落、勝負コスメへの投資が最高の金運を呼びます。お財布を開いて新しい自分の魅力を手に入れることで、未来の豊かな財運が力強く動き出します。`}},te=[{id:`sun_venus`,p1:0,p2:3,name:`太陽 × 金星`,title:`あたたかい絆に満たされる「愛情と家庭の調和サイクル」`,desc:`家庭的な雰囲気のあたたかい愛情に恵まれる時期です。身近な人と心の通い合う穏やかな時間を過ごすことで、人生の幸福度がグッと高まります。`},{id:`sun_jupiter`,p1:0,p2:5,name:`太陽 × 木星`,title:`発展の可能性が開く「運命の転換サイクル」`,desc:`あなた自身の社会的な発展の可能性や、素晴らしい好転のチャンスとなる転機が訪れます。恐れずに新しい扉を開くことで、ステージが引き上げられます。`},{id:`sun_neptune`,p1:0,p2:8,name:`太陽 × 海王星`,title:`無理せずエネルギーを養う「心身のごご自愛期間」`,desc:`体力の低下や、精神的な落ち込みが起きやすいタイミングです。これは「しっかり休んで」という星からのサイン。健康を守るためにも、自分を一番に甘やかして英気を養いましょう。`},{id:`sun_pluto`,p1:0,p2:9,name:`太陽 × 冥王星`,title:`新たな局面へと突き進む「大飛躍のタイミング」`,desc:`あなたの中に強力なリーダーシップが増加し、人生の新しい局面へと堂々と踏み出していく時期です。圧倒的な底力で大きな飛躍を遂げることができます。`},{id:`sun_node`,p1:0,p2:10,name:`太陽 × ドラゴンヘッド`,title:`絆を整え調和をもたらす「家庭の絆・問題解決期」`,desc:`家庭的な人的構成や、身近な対人関係における問題解決がスムーズに進む期間です。素晴らしいチームワークが生まれ、絆がより強固なものへと変化します。`},{id:`sun_asc`,p1:0,p2:11,name:`太陽 × ASC`,title:`関わりから気付きを得る「自己認識アップデート期」`,desc:`他者との関係性によってもたらされる問題点や課題に、ハッとスポットライトが当たる時期です。相手を通して本当の自分を深く認識し、アップデートできます。`},{id:`sun_mc`,p1:0,p2:12,name:`太陽 × MC`,title:`自分らしさをまっすぐ打ち出す「人間性の確立期間」`,desc:`自己主張の強さがポジティブな形で社会へ発揮される時期です。あなたという人間性のコアを堂々と周囲に示すことで、確固たる信頼を勝ち取れます。`},{id:`moon_venus`,p1:1,p2:3,name:`月 × 金星`,title:`素直に甘えて愛される「きらめき愛情サイクル」`,desc:`恋愛運が最高潮に達し、ちょっぴり甘え体質な一面が魅力として輝く時期です。大切な人とピュアな愛情の喜びを心ゆくまで満喫することができます。`},{id:`moon_uranus`,p1:1,p2:7,name:`月 × 天王星`,title:`新鮮な風を受け入れる「突発的な環境アップデート」`,desc:`プライベートや環境に、突然の変化がもたらされやすいタイミングです。あなたの柔軟な感性を活かして機転を利かせ、スマートに対応していくことで新しい道が開けます。`},{id:`moon_neptune`,p1:1,p2:8,name:`月 × 海王星`,title:`インスピレーションが湧き出る「芸術センスの目覚め」`,desc:`あなたの内側に眠っていた芸術的な才能や、豊かな感受性がパッと目覚める時期です。創作活動や直感を活かしたアクションに素晴らしい追い風が吹きます。`},{id:`mercury_venus`,p1:2,p2:3,name:`水星 × 金星`,title:`技術や知識の完成度を高める「芸事・スキルの熟練期」`,desc:`誰かへの教えやすさや、あなた自身のスキルの熟練度が爆発的に高まる時期です。学び事やレッスン、クリエイティブな表現が素晴らしい成果を結びます。`},{id:`mercury_jupiter`,p1:2,p2:5,name:`水星 × 木星`,title:`思考とアイデアが冴え渡る「精神の活気みなぎる期間」`,desc:`あなた自身の精神活動の状態が、非常に活気に満ちてポジティブになる期間です。素晴らしいアイデアが次々と溢れ、ビジネスや勉強がサクサク進みます。`},{id:`mercury_pluto`,p1:2,p2:9,name:`水星 × 冥王星`,title:`あなたの名前が広く知れ渡る「名誉・ステップアップ期」`,desc:`あなたの手がけた発信や研究が社会から認められ、名誉や栄誉を獲得して有名になるチャンスが巡ってきます。強烈な影響力を世の中に与える時期です。`},{id:`mercury_node`,p1:2,p2:10,name:`水星 × ドラゴンヘッド`,title:`次のステージへ舵を切る「新規開拓・チーム結成期」`,desc:`新規の仕事を立ち上げたり、将来の右腕となるような素晴らしい人材を獲得するビジネスチャンス期です。新たな契約やパートナーシップが実を結います。`},{id:`venus_mars`,p1:3,p2:4,name:`金星 × 火星`,title:`情熱の炎がパッと燃え上がる「情熱ロマンスブースター」`,desc:`理屈抜きで、一目で相手に惚れてしまうような強烈な恋 of 衝動が訪れるロマンス期です。あなたの中の眠っていたパッションが最高潮に呼び覚まされます。`},{id:`venus_jupiter`,p1:3,p2:5,name:`金星 × 木星`,title:`全天体があなたを祝福する「愛の喜び満喫サークル」`,desc:`人生における愛情の喜びをこれでもかと全身で感じられる最高のハッピータイムです。素晴らしい幸福感と引き寄せの波があなたを包み込みます。`},{id:`venus_uranus`,p1:3,p2:7,name:`金星 × 天王星`,title:`電撃的なときめきに包まれる「新鮮ロマンス遭遇期」`,desc:`日常をガラリと変えるような、新鮮なロマンスやときめきに遭遇する時期です。予想もしなかったドラマチックな愛の展開があなたを驚かせます。`},{id:`venus_neptune`,p1:3,p2:8,name:`金星 × 海王星`,title:`境界線を整え本実を見つめる「愛のデトックス成熟期」`,desc:`これまでの関係性が優しく変化し、環境の移り変わりによる別れや、愛の境界線を整える時期です。依存を手放し、本当の自立した愛へと成熟するための大切なステップです。`},{id:`venus_pluto`,p1:3,p2:9,name:`金星 × 冥王星`,title:`魂を揺さぶる至福を味わう「最高幸福・絶頂期」`,desc:`心の底から湧き上がる大きな喜びと、奇跡の豊かさを掴む最高幸福・絶頂期です。人生における素晴らしい喜びを感じるドラマチックな体験が訪れます。運命を動かすほどの強い愛の磁力が発生します。`},{id:`venus_mc`,p1:3,p2:12,name:`金星 × MC`,title:`大好きな想いを形にする「自由恋愛の実現サークル」`,desc:`あなたの望んでいた理想の自由恋愛が、見事に成就・実現へと向かう嬉しい時期です。社会的な立場や世間の目を気にせず、純粋な愛の形を謳歌できます。`},{id:`mars_jupiter`,p1:4,p2:5,name:`火星 × 木星`,title:`独自の魅力がスポットライトを浴びる「才能開花・タレント期」`,desc:`あなたの中に眠っていた圧倒的なタレント性やスター性が周囲に認められる時期です。自己表現やパフォーマンスにおいて、人気と注目を一身に集めます。`},{id:`mars_saturn`,p1:4,p2:6,name:`火星 × 土星`,title:`次章へ進むための美しい節目「運命の軌道修正・一段落期」`,desc:`走り続けてきた足を一度止め、次の章へ進むための美しい節目・一段落期です。これまでの無理な働き方や活動に、何らかの終了、休止、またはホッとするひと区切りがもたらされる時期です。荷物を下ろして休息をとりましょう。`},{id:`mars_uranus`,p1:4,p2:7,name:`火星 × 天王星`,title:`心身を美しく整え直す「セルフケア・治療改善サイクル」`,desc:`医療による適切な治療や、徹底的なセルフケアによって、体調や環境をガラリと新しく改善できる時期です。素晴らしい技術によって不調を克服できます。`},{id:`mars_neptune`,p1:4,p2:8,name:`火星 × 海王星`,title:`無理せず心身を解放する「ディープクレンジング期間」`,desc:`心と体の抵抗力の著しい低下を感じやすいデトックス期間です。エネルギーが漏れてしまわないよう、この時期は戦うのをやめ、心身をディープに浄化してあげましょう。`},{id:`mars_pluto`,p1:4,p2:9,name:`火星 × 冥王星`,title:`不可能を可能に変える「ブレイクスルー・大成サイクル」`,desc:`どんな高い壁や大きな困難に対しても、それをガツンとぶち抜いていく圧倒的な突破力が湧いてくる時期です。あなたのこれまでの努力が見事に大成します。`},{id:`jupiter_saturn`,p1:5,p2:6,name:`木星 × 土星`,title:`じっくりと土台を馴染ませる「安心基盤・適応サイクル」`,desc:`新しい環境や人生の大きな変化に対して、じっくりと時間をかけて適応していく期間です。焦らず忍耐強く土台を固めることで、今後の確固たる安定が作られます。`},{id:`jupiter_uranus`,p1:5,p2:7,name:`木星 × 天王星`,title:`まさかのラッキーが舞い込む「ミラクル棚ぼた転機」`,desc:`現状を劇的に好転させる、突然の変化のチャンスが巡ってきます。「棚ぼた」のようなミラクルな引き寄せを体験しやすい、大いなる飛躍のタイミングです。`},{id:`jupiter_neptune`,p1:5,p2:8,name:`木星 × 海王星`,title:`視野を広げて正解を選び直す「視野拡大・軌道修正期」`,desc:`これまでの見込み違いや、判断の誤りにハッと気違い、正しい方向へサッと軌道修正ができる時期です。思い込みのバイアスが消去され、視界がクリアになります。`},{id:`jupiter_pluto`,p1:5,p2:9,name:`木星 × 冥王星`,title:`莫大な果実を手にする「大成功ラッシュ期間」`,desc:`手がけているビジネスや、ここ一番での勝負、あるいはギャンブルなどで圧倒的な大成功を収めるチャンス期間です。富と成功のエネルギーが一点集中します。`},{id:`jupiter_node`,p1:5,p2:10,name:`木星 × ドラゴンヘッド`,title:`最高の仲間に巡り合う「強力協調・発展サイクル」`,desc:`他者との共同による仕事やプロジェクトが、素晴らしい調和の元で大発展していく時期です。人脈からの協力によって、夢の実現スピードが何倍にも加速します。`},{id:`jupiter_mc`,p1:5,p2:12,name:`木星 × MC`,title:`社会的評価がガツンと上がる「キャリア栄転タイミング」`,desc:`あなた自身の社会的な地位の向上による成功をしっかりと掴み取れる華やかな時期です。キャリアにおける大きな栄転や、憧れの立場を獲得できます。`},{id:`saturn_uranus`,p1:6,p2:7,name:`土星 × 天王星`,title:`プレッシャーを跳ね返す「困難克服・新風ブースター」`,desc:`心地よい精神の緊張感や、目の前の大きな困難を見事な知恵と精神力で克服していく時期です。この壁を乗り越えることで、一回り大きな自分に成長できます。`},{id:`saturn_neptune`,p1:6,p2:8,name:`土星 × 海王星`,title:`静かに心をヒーリングする「リフレッシュ・休息期間」`,desc:`過度なストレスによる精神的な落ち込みや、不調を感じやすい時期です。星が「少し立ち止まって」と教えてくれているので、静かな環境で心をたっぷり労わってあげましょう。`},{id:`saturn_pluto`,p1:6,p2:9,name:`土星 × 冥王星`,title:`1途な情熱を注ぎ込む「一意専心・こだわり期間」`,desc:`自分自身の能力を過信することによるこだわりが強まる時期です。その凄まじい集中力を専門分野に向けることで、唯一無二の偉業を達成できます。`},{id:`uranus_neptune`,p1:7,p2:8,name:`天王星 × 海王星`,title:`魂の関係性を美しく昇華する「魂のステップアップ期」`,desc:`親しい人との関係性の変化や、環境の移り変わりによる別れを経験する時期です。これは寂しいことではなく、お互いの魂が次のステージへ進化するための必要な節目です。`},{id:`uranus_pluto`,p1:7,p2:9,name:`天王星 × 冥王星`,title:`常識をアップデートする「ライフスタイル革新サイクル」`,desc:`あなたの中にこれまでにない強烈な創造力や、斬新な発想力が溢れ出てくる時期です。これまでの古いやり方をガラリと塗り替える、自分自身の人生革命を起こせます。`},{id:`uranus_asc`,p1:7,p2:11,name:`天王星 × ASC`,title:`新しい環境へ軽やかに馴染む「機敏適応フェーズ」`,desc:`新体制や新しいライフスタイルへの適応性が、驚くほど機敏に発揮される時期です。周囲の環境が変わっても、持ち前のフットワークの軽さで瞬時に味方にできます。`},{id:`neptune_pluto`,p1:8,p2:9,name:`海王星 × 冥王星`,title:`ブレる心を優しくリセットする「宿命再生のタイミング」`,desc:`意志薄弱による一時的な自己嫌悪や、迷いが生じやすい宿命の調整期間です。自分の弱さを丸ごと愛してあげることで、ブレない強い精神へと生まれ変わることができます。`},{id:`neptune_node`,p1:8,p2:10,name:`海王星 × ドラゴンヘッド`,title:`不要な欲を手放して軽くなる「メンタル調停サイクル」`,desc:`過剰な欲求によるバランスの崩れが出やすいタイミングです。「本当に大切なものは何か」を思い出し、心のバランスを綺麗に調停してあげることで深い安心が手に入ります。`},{id:`pluto_mc`,p1:9,p2:12,name:`冥王星 × MC`,title:`主導権を完全に掌握する「完全自由・大成功サイクル」`,desc:`すべての自由裁量（自分の決断）によって、人生のビッグチャンスや成功を掴み取る強烈な時期です。他人に雇われるのではなく、自分の意志で未来を切り拓いていけます。`}];function D(e,t){let n=e.filter(e=>e.rawDate&&e.rawDate.getMonth()===t);return n.length===0?`穏やかで心地よい星の余白月`:n[0]&&n[0].title?n[0].title.replace(/【.*?】/g,``)+` ✨`:`穏やかで心地よい星の余白月`}var ne=`
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

/* セレクトはインラインstyleをやめてCSSに集約 */
select.form-control {
  background-color: #14120f;
  border: 1px solid rgba(197, 168, 128, 0.5);
  border-radius: 6px;
  padding: 10px 8px;
  appearance: none;
  -webkit-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #c5a880 50%), linear-gradient(135deg, #c5a880 50%, transparent 50%);
  background-position: calc(100% - 15px) 50%, calc(100% - 10px) 50%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  padding-right: 26px;
}
select.form-control:focus { border-color: var(--accent-gold); }

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
`,O=Math.PI/180,k=180/Math.PI;function A(e){let t=e%360;return t<0?t+360:t}function re(e){let t=e.getUTCFullYear(),n=e.getUTCMonth()+1,r=e.getUTCDate(),i=e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600;n<=2&&(t--,n+=12);let a=Math.floor(t/100),o=2-a+Math.floor(a/4);return Math.floor(365.25*(t+4716))+Math.floor(30.6001*(n+1))+r+o-1524.5+i/24}var ie={MERCURY:[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593,37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081],VENUS:[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255,39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418],EARTH:[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0,562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0],MARS:[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891,1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343],JUPITER:[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909,-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106],SATURN:[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448,-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794],URANUS:[19.18916464,.04725744,.77263783,313.23810451,170.9542763,74.01692503,-.00196176,-4397e-8,-.00242939,428.48202785,.40805281,.04240589],NEPTUNE:[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574,26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664],PLUTO:[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684,-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482]},ae={2:`MERCURY`,3:`VENUS`,4:`MARS`,5:`JUPITER`,6:`SATURN`,7:`URANUS`,8:`NEPTUNE`,9:`PLUTO`};function oe(e,t){let n=e+t*Math.sin(e);for(let r=0;r<12;r++){let r=(n-t*Math.sin(n)-e)/(1-t*Math.cos(n));if(n-=r,Math.abs(r)<1e-12)break}return n}function j(e,t){let n=ie[e],r=n[0]+n[6]*t,i=n[1]+n[7]*t,a=(n[2]+n[8]*t)*O,o=n[3]+n[9]*t,s=n[4]+n[10]*t,c=(n[5]+n[11]*t)*O,l=s*O-c,u=A(o-s);u>180&&(u-=360);let d=oe(u*O,i),f=r*(Math.cos(d)-i),p=r*Math.sqrt(1-i*i)*Math.sin(d),m=Math.cos(c),h=Math.sin(c),g=Math.cos(l),_=Math.sin(l),v=Math.cos(a),y=Math.sin(a);return[(g*m-_*h*v)*f+(-_*m-g*h*v)*p,(g*h+_*m*v)*f+(-_*h+g*m*v)*p,_*y*f+g*y*p]}function se(e){let t=(e-2451545)/36525,n=280.46646+36000.76983*t+3032e-7*t*t,r=(357.52911+35999.05029*t-1537e-7*t*t)*O;return A(n+((1.914602-.004817*t-14e-6*t*t)*Math.sin(r)+(.019993-101e-6*t)*Math.sin(2*r)+289e-6*Math.sin(3*r)))}function ce(e){let t=e-2451543.5,n=(125.1228-.0529538083*t)*O,r=5.1454*O,i=(318.0634+.1643573223*t)*O,a=60.2666,o=.0549,s=A(115.3654+13.0649929509*t)*O,c=s+o*Math.sin(s)*(1+o*Math.cos(s));for(let e=0;e<8;e++)c-=(c-o*Math.sin(c)-s)/(1-o*Math.cos(c));let l=a*(Math.cos(c)-o),u=a*Math.sqrt(1-o*o)*Math.sin(c),d=Math.atan2(u,l),f=Math.sqrt(l*l+u*u),p=f*(Math.cos(n)*Math.cos(d+i)-Math.sin(n)*Math.sin(d+i)*Math.cos(r)),m=f*(Math.sin(n)*Math.cos(d+i)+Math.cos(n)*Math.sin(d+i)*Math.cos(r));f*Math.sin(d+i)*Math.sin(r);let h=Math.atan2(m,p)*k,g=A(282.9404+470935e-10*t+356.047+.9856002585*t),_=A(356.047+.9856002585*t),v=A(n*k+i*k+s*k),y=A(s*k),b=A(v-g),x=A(v-n*k);return h+=-1.274*Math.sin((y-2*b)*O)+.658*Math.sin(2*b*O)-.186*Math.sin(_*O)-.059*Math.sin((2*y-2*b)*O)-.057*Math.sin((y-2*b+_)*O)+.053*Math.sin((y+2*b)*O)+.046*Math.sin((2*b-_)*O)+.041*Math.sin((y-_)*O)-.035*Math.sin(b*O)-.031*Math.sin((y+_)*O)-.015*Math.sin((2*x-2*b)*O)+.011*Math.sin((y-4*b)*O),A(h)}function le(e){let t=(e-2451545)/36525;return A(125.0445479-1934.1362891*t+.0020754*t*t)}function ue(e){let t=(e-2451545)/36525;return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function de(e){let t=(e-2451545)/36525;return A(280.46061837+360.98564736629*(e-2451545)+387933e-9*t*t-t*t*t/3871e4)}function fe(e,t,n){let r=ue(e)*O,i=A(de(e)+n)*O,a=A(Math.atan2(Math.sin(i),Math.cos(i)*Math.cos(r))*k),o=t*O,s=Math.atan2(Math.cos(i),-(Math.sin(i)*Math.cos(r)+Math.tan(o)*Math.sin(r)))*k;return s=A(s),A(s-a)>180&&(s=A(s+180)),{asc:s,mc:a}}function pe(e,t){if(t===0)return se(e);if(t===1)return ce(e);if(t===10)return le(e);let n=ae[t];if(!n)return NaN;let r=(e-2451545)/36525,i=j(`EARTH`,r),a=j(n,r),o=a[0]-i[0],s=a[1]-i[1],c=a[2]-i[2],l=j(n,r-Math.sqrt(o*o+s*s+c*c)*.0057755183/36525),u=l[0]-i[0],d=l[1]-i[1];return A(Math.atan2(d,u)*k)}var me={0:`Sun`,1:`Moon`,2:`Mercury`,3:`Venus`,4:`Mars`,5:`Jupiter`,6:`Saturn`,7:`Uranus`,8:`Neptune`,9:`Pluto`},M=[{id:0,name:`自分自身・本質`,emoji:`☉`},{id:1,name:`私生活・心`,emoji:`☾`},{id:2,name:`知性・会話`,emoji:`☿`},{id:3,name:`恋愛・楽しさ`,emoji:`♀`},{id:4,name:`やる気・行動`,emoji:`♂`},{id:5,name:`拡大・幸運`,emoji:`♃`},{id:6,name:`課題・試練`,emoji:`♄`},{id:7,name:`個性・打破`,emoji:`♅`},{id:8,name:`理想・スピ`,emoji:`♆`},{id:9,name:`底力・リセット`,emoji:`♇`}],he=[{id:0,name:`太陽（舞台）`,emoji:`☉`},{id:2,name:`水星（仕事）`,emoji:`☿`},{id:3,name:`金星（ワクワク）`,emoji:`♀`},{id:4,name:`火星（情熱）`,emoji:`♂`},{id:5,name:`木星（拡大）`,emoji:`♃`},{id:6,name:`土星（課題）`,emoji:`♄`},{id:7,name:`天王星（打破）`,emoji:`♅`},{id:8,name:`海王星（理想）`,emoji:`♆`},{id:9,name:`冥王星`,emoji:`♇`}],N=[0,2,3,4],P=[5,6,7,8,9],F=[...N,...P],ge={0:5,2:4,3:4,4:4.5,5:5,6:5,7:4,8:4,9:4},_e=[{angle:0,name:`合`,emoji:`☌`,type:`good`,weight:4},{angle:180,name:`オポジション`,emoji:`☍`,type:`bad`,weight:3},{angle:90,name:`スクエア`,emoji:`□`,type:`bad`,weight:2},{angle:120,name:`トライン`,emoji:`△`,type:`good`,weight:1}],I={0:5,4:4,3:3,2:2},ve=3,L={0:{name:`太陽`,emoji:`☉`},1:{name:`月`,emoji:`☾`},2:{name:`水星`,emoji:`☿`},3:{name:`金星`,emoji:`♀`},4:{name:`火星`,emoji:`♂`},5:{name:`木星`,emoji:`♃`},6:{name:`土星`,emoji:`♄`},7:{name:`天王星`,emoji:`♅`},8:{name:`海王星`,emoji:`♆`},9:{name:`冥王星`,emoji:`♇`},10:{name:`ドラゴンヘッド`,emoji:`☊`},11:{name:`ASC`,emoji:`✨`},12:{name:`MC`,emoji:`👑`}},R=[{key:`hokkaido`,name:`北海道（札幌）`,lat:43.06,lon:141.35},{key:`aomori`,name:`青森県`,lat:40.82,lon:140.74},{key:`iwate`,name:`岩手県`,lat:39.7,lon:141.15},{key:`miyagi`,name:`宮城県（仙台）`,lat:38.27,lon:140.87},{key:`akita`,name:`秋田県`,lat:39.72,lon:140.1},{key:`yamagata`,name:`山形県`,lat:38.24,lon:140.36},{key:`fukushima`,name:`福島県`,lat:37.75,lon:140.47},{key:`ibaraki`,name:`茨城県`,lat:36.34,lon:140.45},{key:`tochigi`,name:`栃木県`,lat:36.57,lon:139.88},{key:`gunma`,name:`群馬県`,lat:36.39,lon:139.06},{key:`saitama`,name:`埼玉県`,lat:35.86,lon:139.65},{key:`chiba`,name:`千葉県`,lat:35.6,lon:140.12},{key:`tokyo`,name:`東京都`,lat:35.69,lon:139.69},{key:`kanagawa`,name:`神奈川県（横浜）`,lat:35.45,lon:139.64},{key:`niigata`,name:`新潟県`,lat:37.9,lon:139.02},{key:`toyama`,name:`富山県`,lat:36.7,lon:137.21},{key:`ishikawa`,name:`石川県（金沢）`,lat:36.59,lon:136.63},{key:`fukui`,name:`福井県`,lat:36.07,lon:136.22},{key:`yamanashi`,name:`山梨県（甲府）`,lat:35.66,lon:138.57},{key:`nagano`,name:`長野県`,lat:36.65,lon:138.18},{key:`gifu`,name:`岐阜県`,lat:35.39,lon:136.72},{key:`shizuoka`,name:`静岡県`,lat:34.98,lon:138.38},{key:`aichi`,name:`愛知県（名古屋）`,lat:35.18,lon:136.91},{key:`mie`,name:`三重県（津）`,lat:34.73,lon:136.51},{key:`shiga`,name:`滋賀県（大津）`,lat:35,lon:135.87},{key:`kyoto`,name:`京都府`,lat:35.02,lon:135.76},{key:`osaka`,name:`大阪府`,lat:34.69,lon:135.5},{key:`hyogo`,name:`兵庫県（神戸）`,lat:34.69,lon:135.18},{key:`nara`,name:`奈良県`,lat:34.69,lon:135.83},{key:`wakayama`,name:`和歌山県`,lat:34.23,lon:135.17},{key:`tottori`,name:`鳥取県`,lat:35.5,lon:134.24},{key:`shimane`,name:`島根県（松江）`,lat:35.47,lon:133.05},{key:`okayama`,name:`岡山県`,lat:34.66,lon:133.93},{key:`hiroshima`,name:`広島県`,lat:34.39,lon:132.46},{key:`yamaguchi`,name:`山口県`,lat:34.19,lon:131.47},{key:`tokushima`,name:`徳島県`,lat:34.07,lon:134.56},{key:`kagawa`,name:`香川県（高松）`,lat:34.34,lon:134.04},{key:`ehime`,name:`愛媛県（松山）`,lat:33.84,lon:132.77},{key:`kochi`,name:`高知県`,lat:33.56,lon:133.53},{key:`fukuoka`,name:`福岡県`,lat:33.59,lon:130.4},{key:`saga`,name:`佐賀県`,lat:33.25,lon:130.3},{key:`nagasaki`,name:`長崎県`,lat:32.75,lon:129.87},{key:`kumamoto`,name:`熊本県`,lat:32.79,lon:130.74},{key:`oita`,name:`大分県`,lat:33.24,lon:131.61},{key:`miyazaki`,name:`宮崎県`,lat:31.91,lon:131.42},{key:`kagoshima`,name:`鹿児島県`,lat:31.56,lon:130.56},{key:`okinawa`,name:`沖縄県（那覇）`,lat:26.21,lon:127.68}],ye=31556925190.08,z=864e5,B=null,V=!1,H=[],U=[],W=[],G=1,K=null,q=540;function J(e,t,n,r,i,a){let o=Date.UTC(e,t-1,n,r,i)-a*6e4;return re(new Date(o))}function Y(e,t){let n=(e-2440587.5)*z+t*6e4,r=new Date(n);return{y:r.getUTCFullYear(),m:r.getUTCMonth()+1,d:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes()}}function be(e,t,n){return J(e,1,1,12,0,n)+t}function xe(e){return e%4==0&&e%100!=0||e%400==0?366:365}async function X(e,t){let n=me[t];if(V&&B&&n&&s[n]!==void 0)try{let t=B.calculatePosition(e,s[n]);if(t&&typeof t.longitude==`number`&&!isNaN(t.longitude))return t.longitude}catch(e){console.warn(`[chronoscope] Swiss Ephemeris の計算に失敗（${n}）、内蔵計算に切り替えます`,e)}let r=pe(e,t);return isNaN(r)?0:r}function Se(e,t,n){if(V&&B&&c&&c.Placidus!==void 0)try{let r=B.calculateHouses(e,t,n,c.Placidus);if(r&&typeof r.ascendant==`number`&&typeof r.mc==`number`)return{asc:r.ascendant,mc:r.mc}}catch(e){console.warn(`[chronoscope] Swiss Ephemeris のハウス計算に失敗、内蔵計算に切り替えます`,e)}return fe(e,t,n)}function Z(e,t,n){let r=(e-t-n)%360;return r>180&&(r-=360),r<=-180&&(r+=360),r}function Ce(e){return e===0?[0]:e===180?[180]:[e,-e]}async function we(e,t,n,r,i){let a=e,o=t,s=Z(await X(a,n),r,i);for(let e=0;e<14;e++){let e=(a+o)/2,t=Z(await X(e,n),r,i);s<=0&&t<=0||s>0&&t>0?(a=e,s=t):o=e}return(a+o)/2}async function Te(e,t,n){let r=xe(t)+3,i=e=>be(t,e-1,n),a={};for(let e of F){let t=Array(r);for(let n=0;n<r;n++)t[n]=await X(i(n),e);a[e]=t}let o=[];for(let s of F){let c=he.find(e=>e.id===s),l=ge[s],u=a[s];for(let a of M){let d=e[String(a.id)];if(typeof d==`number`)for(let e of _e)for(let f of Ce(e.angle)){let p=u.map(e=>Z(e,d,f));for(let u=0;u<r-1;u++)if(!(Math.abs(p[u])>30||Math.abs(p[u+1])>30)&&(p[u]===0||p[u]<0!=p[u+1]<0)){let m=await we(i(u),i(u+1),s,d,f),h=Y(m,n);if(h.y!==t)continue;let g=u,_=u+1;for(;g>0&&Math.abs(p[g-1])<=l;)g--;for(;_<r-1&&Math.abs(p[_+1])<=l;)_++;o.push({transitId:s,natalId:a.id,angle:e.angle,transitPlanet:c,natalPlanet:a,aspect:e,exactJd:m,exact:h,startJd:i(g),endJd:i(_)})}}}}return o.sort((e,t)=>e.exactJd-t.exactJd),o}var Q={0:{good:{intro:`太陽が味方して、自分らしさに自然と光が当たる時間。`,work:`太陽の後押しで、あなたの存在感がまっすぐ伝わりやすいタイミングです。`,love:`太陽の温かさで、飾らない魅力がいちばん輝く日です。`,money:`太陽のように堂々とした直感が、お財布にも良い風を運びます。`},bad:{intro:`太陽の光が強すぎて、自分を大きく見せたくなる緊張が生まれやすい時間。`,work:`太陽の影響で、周囲の評価が気になりすぎてしまいやすいので、注意のサインです。`,love:`太陽の影響で、自分を認めてほしい気持ちが強く出やすいタイミングです。`,money:`太陽の影響で、見栄や体裁にお金を使いたくなりやすいので、注意のサインです。`}},2:{good:{intro:`水星が味方して、頭の回転と会話がいつも以上に冴えわたる時間。`,work:`水星の後押しで、ひらめきや伝え方がスムーズに決まりやすいタイミングです。`,love:`水星の軽やかさで、言葉のキャッチボールが自然と弾む日です。`,money:`水星が働く情報収集力が、お得な選択を引き寄せます。`},bad:{intro:`水星が少しいたずらをして、言葉や情報にノイズが入りやすい時間。`,work:`水星の影響で、連絡ミスや行き違いが起きやすいので、注意のサインです。`,love:`水星の影響で、言葉のニュアンスが誤解されやすいタイミングです。`,money:`水星の影響で、契約や細かい文字を見落としやすいので、注意のサインです。`}},3:{good:{intro:`金星が味方して、愛され力と心地よさが自然とにじみ出る時間。`,work:`金星の後押しで、周りとの相性やチームワークが噛み合いやすいタイミングです。`,love:`金星の魅力全開で、愛しさが伝わりやすいご褒美デーです。`,money:`金星が働く"好き"の直感が、満足度の高い買い物につながります。`},bad:{intro:`金星が少し甘えん坊になって、遠慮や我慢が空回りしやすい時間。`,work:`金星の影響で、気を遣いすぎて疲れが溜まりやすいので、注意のサインです。`,love:`金星の影響で、甘えたい気持ちが伝わりにくく感じやすいタイミングです。`,money:`金星の影響で、財布の紐がゆるみやすいので、注意のサインです。`}},4:{good:{intro:`火星が味方して、行動力とやる気に一気に火がつく時間。`,work:`火星の後押しで、動いた分だけ結果につながりやすいタイミングです。`,love:`火星の情熱で、まっすぐな気持ちが伝わりやすい追い風の日です。`,money:`火星が働く決断力が、迷いのない選択を後押しします。`},bad:{intro:`火星が少し暴走気味で、焦りや苛立ちが先走りやすい時間。`,work:`火星の影響で、カッとなって言い返したくなりやすいので、注意のサインです。`,love:`火星の影響で、売り言葉に買い言葉になりやすいタイミングです。`,money:`火星の影響で、勢い任せの出費をしたくなりやすいので、注意のサインです。`}},5:{good:{intro:`木星が味方して、視野も可能性もぐんと広がる拡大期。`,work:`木星の後押しで、挑戦したことがそのまま追い風になりやすいタイミングです。`,love:`木星のおおらかさで、心にゆとりが生まれやすい日です。`,money:`木星が働く楽観力が、思わぬ幸運を引き寄せます。`},bad:{intro:`木星が少し気が大きくなりすぎて、キャパオーバーが心配な時間。`,work:`木星の影響で、手を広げすぎてしまいやすいので、注意のサインです。`,love:`木星の影響で、約束や見通しが大きくなりすぎやすいタイミングです。`,money:`木星の影響で、気が大きくなって出費がかさみやすいので、注意のサインです。`}},6:{good:{intro:`土星が味方して、積み重ねてきた努力が形になりやすい安定期。`,work:`土星の後押しで、地道な取り組みがしっかり評価されやすいタイミングです。`,love:`土星の落ち着きで、信頼を育む時間が心地よく流れます。`,money:`土星が働く堅実さが、着実な資産形成を後押しします。`},bad:{intro:`土星が少し厳しめの視線を向けてきて、プレッシャーを感じやすい時間。`,work:`土星の影響で、自分に厳しくなりすぎてしまいやすいので、注意のサインです。`,love:`土星の影響で、相手の欠点ばかり目についてしまいやすいタイミングです。`,money:`土星の影響で、締め付けすぎて心がカサカサになりやすいので、注意のサインです。`}},7:{good:{intro:`天王星が味方して、思いがけない新風が吹き込む変化期。`,work:`天王星の後押しで、既存のやり方を超えるアイデアが浮かびやすいタイミングです。`,love:`天王星の自由さで、新鮮な刺激が関係に活気を与えます。`,money:`天王星が働くひらめきが、意外な収入源を運ぶことも。`},bad:{intro:`天王星が少しいたずらをして、予定外の変化が起きやすい時間。`,work:`天王星の影響で、突発的なトラブルが起きやすいので、注意のサインです。`,love:`天王星の影響で、急な予定変更に戸惑いやすいタイミングです。`,money:`天王星の影響で、予期せぬ出費が発生しやすいので、注意のサインです。`}},8:{good:{intro:`海王星が味方して、感性やインスピレーションが澄みわたる時間。`,work:`海王星の後押しで、直感的なアイデアが形になりやすいタイミングです。`,love:`海王星の優しさで、ロマンチックな気持ちが満たされやすい日です。`,money:`海王星が働く直感が、意外な形で豊かさを運ぶことも。`},bad:{intro:`海王星が少し霧をかけて、輪郭がぼやけやすい時間。`,work:`海王星の影響で、確認ミスや思い込みが起きやすいので、注意のサインです。`,love:`海王星の影響で、相手への期待が膨らみすぎやすいタイミングです。`,money:`海王星の影響で、うまい話に気を取られやすいので、注意のサインです。`}},9:{good:{intro:`冥王星が味方して、眠っていた底力が静かに目覚める覚醒期。`,work:`冥王星の後押しで、根本からの立て直しが力に変わりやすいタイミングです。`,love:`冥王星の深さで、本音でつながる絆が育まれやすい日です。`,money:`冥王星が働く整理整頓の力が、思わぬ形で運気を底上げします。`},bad:{intro:`冥王星が少し過去を揺さぶって、眠っていた感情が再燃しやすい時間。`,work:`冥王星の影響で、古い問題やしがらみが表面化しやすいので、注意のサインです。`,love:`冥王星の影響で、執着や過去への未練が顔を出しやすいタイミングです。`,money:`冥王星の影響で、手放すべきものにしがみつきやすいので、注意のサインです。`}}};function Ee(e,t,n){let r=(Q[e]||Q[0])[n?`good`:`bad`];if(n){let e=t===0?`あなたの存在感が高まり大抜擢の予感！【これから・お休み中】やりたい仕事への最高の引き寄せが働く日です。`:`ひらめきや効率が爆発的にUPします。【これから・お休み中】新しい資格や学びをスタートする最高のチャンス！`,n=t===3?`お互いの愛しさが全開になりサプライズのご褒美デー💖【フリー】キュンとする出会いや嬉しい連絡が舞い込む予感！`:`私生活が居心地よく調律され、お家デートが最高に盛り上がります。【フリー】心のゆとりが魅力となり惹きつけ力が高まります。`;return{intro:`${r.intro} あなたの持っている可能性のスイッチをパッと明るくオンにする好調期です。`,work:`${r.work} 【お仕事中】${e}`,love:`${r.love} 【恋人あり】${n}`,money:`${r.money} 【金運】自分の直感を信じてお買い物や投資をすると、想像以上の大満足やリターンを得られるラッキーな引き寄せサインです✨`}}let i={0:{intro:`周りの顔色や世間の『正しさ』を気にしすぎて、自分の本音をぎゅっと我慢しがちかも。焦りは禁物ですよ。`,work:`【お仕事中】無理なタスクを引き受けがち。今日は『これ明日でもいいですか？』と言うだけでトラブルをハッピーに回避できます！【これから・お休み中】焦ってミスマッチな仕事を選びやすい日。今日のエントリーは一旦保留が吉。`,love:`【恋人あり】相手にマウントを取りたくなったら星のイタズラです。『いつもありがとう』の一言で空気がまろやかに調律されます。【フリー】寂しさから妥協したくなりそう。今日は自分を世界一甘やかすお留守番デーにしてね。`,money:`【金運】見栄やストレスでの衝動買いに注意。レジに進む前に『本当にこれ大好き？』と3秒問いかけるだけで、お財布をハッピーに守れます！`},1:{intro:`些細な一言に心がチクッと痛んだり、プライベートで妙にイライラやモヤモヤが溜まりやすいサインです。`,work:`【お仕事中】職場の人間関係に過敏になりがち。今日は一歩引いて、美味しいコーヒーを飲む休憩を多めに挟んでね。【これから・お休み中】就職活動への不安が爆発しそう。今日は履歴書を閉じて、好きな映画を見て早く寝るのが最強の魔除けです。`,love:`【恋人あり】『なんで分かってくれないの！』と感情が爆発しそう。今日は無理に話し合わず、1人のご自愛時間を死守してね。【フリー】過去の切ない恋愛を思い出して感傷的になりがち。温かいココアを飲んで心の体温を上げてあげましょう💖`,money:`【金運】心が寂しいと、穴を埋めるようにお金を使いがち。今日は物ではなく、極上の入浴剤など『自分の身体を労わる美容』にお金を使うとハッピーに回避できます！`},2:{intro:`思考の回路に少しだけノイズが走りやすく、言葉のすれ違いやうっかりミスが起きやすい星の交差点です。`,work:`【お仕事中】メールの誤送信や遅刻の危機を検知。大事な返信は送る前に『2回見直す』だけで、すべてのトラブルを綺麗にすり抜けてハッピーに回避できます！【これから・お休み中】面接などで言葉が空回りしそう。結論からシンプルに短く話すのを意識してみてね。`,love:`【恋人あり】LINEの文字数を見誤ってトゲがあるように伝わりがち。今日は絵文字をいつもより多めにするか、電話で声を聞くのが安心の基盤。【フリー】連絡が来なくて既読スルーにハッピーを奪われがち。スマホを置いて部屋のお掃除をするとひらめきが戻ります！`,money:`【金運】契約書や規約の細かい文字を見落としがち。大きな買い物や定期購入のサブスクを始めるなら、今日ではなく明日に回すのが大正解。`},3:{intro:`楽しみたい気持ちが空回りしたり、優しすぎて『断れないモード』になって心が少し疲れちゃいそうなサイン。`,work:`【お仕事中】職場の雰囲気を良くしようと、お節介や気疲れを引き受けがち。今日は自分のデスクの世界だけに集中してまったり過ごしてね。【これから・お休み中】気が乗らない業界や条件を『せっかく紹介されたから』と受け入れそう。笑顔で『また今度✨』でOK！`,love:`【恋人あり】相手への不満をお買い物や趣味への現実逃避で埋めたくなりそう。夜にご自愛セット期間として美味しいデザートを2人で食べて調律してね。【フリー】甘い誘惑に流されやすい時。不誠実な気配を感じたら、すぐに連絡を既読スルーするのが最高の回避アクション。`,money:`【金運】お財布の紐がとろとろに緩みがち。予算オーバーな高級品に手が伸びたら、『本当に欲しいものは来月買う！』と決めて、今日のところは引き返してね。`},4:{intro:`情熱のエネルギーが少しだけ熱くなりすぎて、焦りやピリピリ感としてカラ回りしやすいアクティブ注意報です。`,work:`【お仕事中】イラッとする場面があっても、言い返す前に『ふぅー』と深呼吸。デスクの引き出しを整理整頓すると、怒りが最高の突破力に大変化します！【これから・お休み中】早く結果を出したくて焦る時。焦って無理なスケジュールを組まないのが安心の基盤です。`,love:`【恋人あり】小さな意見の食い違いから、売り言葉に買い言葉でケンカに発展しがち。今日は一歩引いて相手に花を持たせてあげてね。【フリー】強引なアプローチに戸惑ったり、逆に焦って自分から自爆メッセージを送りそう。送る前に親友に相談するのが回避のコツ。`,money:`【金運】ギャンブル的な出費や、勢いだけで高額なスクールに申し込むのは危険。深呼吸して、一晩ぐっすり眠ってから判断しましょう。`},5:{intro:`引き寄せの器が大きくなりすぎて、キャパオーバーや楽観視しすぎによる自爆が起きやすい時。ハードルを下げてね。`,work:`【仕事】手を広げすぎ。半分は明日に回して！`,love:`【恋愛】約束のダブルブッキングに注意。`,money:`【金運】気が大きくなって奢りすぎ注意。`},6:{intro:`自分に厳しくなり、孤独感やプレッシャーの沼にハマりそうな星のイタズラ。自分を褒めてね。`,work:`【仕事】自分を責めないで、歩んできた実績を眺めて！`,love:`【恋愛】相手の欠点ばかり目につきがち。加点方式で見てね。`,money:`【金運】ケチケチしすぎて心がカサカサになりそう。プチご褒美を。`},7:{intro:`突発的な予定変更やトラブルなど、ライフスタイルに新風が吹く日。ゲーム感覚で面白がって！`,work:`【仕事】パソコンのフリーズ注意！小まめな保存を。`,love:`【恋愛】急なドタキャンがあっても、新しい神展開へのサイン！`,money:`【金運】電子決済のエラーや予期せぬ出費の予感。`},8:{intro:`頭がぼーっとして集中力が切れたり、美しい理想に迷い込みやすいお留守番日。アラームを多めに！`,work:`【仕事】確認ミスに注意。チェックシートを作ってね。`,love:`【恋愛】相手に過度な期待をして勝気に傷つきがち。ありのままを愛して。`,money:`【金運】怪しい儲け話やうまい話に騙されやすいのでスルー！`},9:{intro:`古い感情や諦めていた問題が再燃しやすいドラマチックな覚醒時。不要なものはバサッとポイして！`,work:`【仕事】古い書類や未練を整理すると、真の底力が目覚めます。【これから】過去の失敗トラウマをリセットする最高の覚醒期。`,love:`【恋人あり】執着や束縛を手放すことで、絆が深まります。【フリー】腐れ縁を断ち切ることで、最高の新しい幸運スペースが空きます！`,money:`【金運】不用品をフリマアプリに出すと、驚くほど高値で売れる引き寄せサイン！`}}[t]||{intro:`いつもより少しだけ深呼吸を多めにして、まったり過ごすのが安心の基盤になりますよ🍃`,work:`【仕事】焦らずマイペースに片付けましょう。`,love:`【恋愛】夜は自分を全力で労ってあげてね✨`,money:`【金運】お財布を大切に扱いましょう。`};return{intro:`${r.intro} ${i.intro}`,work:`${r.work} ${i.work}`,love:`${r.love} ${i.love}`,money:`${r.money} ${i.money}`}}function De(e){let t=`${e.transitId}_${e.natalId}_${e.angle}`,n=E&&E[t],r=`【 ${e.transitPlanet.emoji} ${e.aspect.emoji} ${e.natalPlanet.emoji} 】`;if(n&&n.title)return{title:n.title,desc:`<div style="margin-bottom:10px; font-weight:700; color:#c5a880;">${r}</div><div style="color:#faf6f0;">${String(n.desc||``).replace(/\n/g,`<br>`)}</div>`};let i=Ee(e.transitId,e.natalId,e.aspect.type===`good`);return{title:r,desc:`<div style="margin-bottom:12px; font-weight:700; color:#c5a880;">${i.intro}</div><div style="margin-bottom:8px; color:#faf6f0;">${i.work}</div><div style="margin-bottom:8px; color:#faf6f0;">${i.love}</div><div style="color:#faf6f0;">${i.money}</div>`}}function Oe(e,t,n){let r=e.filter(e=>N.includes(e.transitId)),i=new Map;for(let e of r){let t=`${e.exact.m}-${e.exact.d}`;i.has(t)||i.set(t,[]),i.get(t).push(e)}let a=[];for(let[,e]of i){e.sort((e,t)=>I[t.transitId]+t.aspect.weight-(I[e.transitId]+e.aspect.weight));for(let t of e.slice(0,ve)){let e=Y(t.startJd,n),r=Y(t.endJd,n),i=De(t),o=e.m===r.m&&e.d===r.d?`${e.m}月${e.d}日`:`${e.m}月${e.d}日 〜 ${r.m}月${r.d}日`;a.push({transitPlanet:t.transitPlanet,natalPlanet:t.natalPlanet,aspect:t.aspect,title:i.title,desc:i.desc,monthNum:t.exact.m,dateRangeLabel:o,peakDayLabel:`${t.exact.m}月${t.exact.d}日`,exactHour:t.exact.hour,sortKey:t.exactJd,isNotice:!1})}}a.sort((e,t)=>e.sortKey-t.sortKey);for(let e=1;e<=12;e++)a.push({transitPlanet:{id:99,name:`案内`,emoji:`🔮`},natalPlanet:{id:99,name:`内側`,emoji:`✨`},aspect:{angle:99,name:`調律`,emoji:`🍃`,type:`flat`},title:``,desc:`💡 <strong>カレンダーに日付がない日は、前後の星の動きをじっくり参考にしてみてね（星の影響が何もないって事じゃないですよ✨）</strong>`,monthNum:e,dateRangeLabel:`${e}月全体`,peakDayLabel:`${e}月`,isNotice:!0,sortKey:2**53-1});return a.sort((e,t)=>e.monthNum-t.monthNum||e.sortKey-t.sortKey),a}function ke(e,t){return e.filter(e=>P.includes(e.transitId)).map(e=>{let n=Y(e.startJd,t),r=Y(e.endJd,t),i=De(e);return{transitPlanet:e.transitPlanet,natalPlanet:e.natalPlanet,aspect:e.aspect,title:i.title,desc:i.desc,startJd:e.startJd,endJd:e.endJd,startStr:`${n.y}年${n.m}月${n.d}日`,endStr:`${r.y}年${r.m}月${r.d}日`,peakStr:`${e.exact.m}月${e.exact.d}日`,exactJd:e.exactJd}})}function Ae(e){let t=e%45;return t<0?t+45:t}function je(e,t){let n=Math.abs(e-t),r=(e+t)/2;return n>180&&(r+=180),Ae(r)}async function Me(e,t,n,r){let i=[],a=te.map(t=>{let n=e[String(t.p1)],r=e[String(t.p2)];return typeof n!=`number`||typeof r!=`number`?null:{...t,dialPos:je(n,r)}}).filter(Boolean),o=1095,s=J(n-1,1,1,12,0,r),c=Array(o);for(let e=0;e<o;e++){let n=s+e;if(n<t){c[e]=null;continue}let r=(n-t)*z/ye;c[e]=Ae(await X(t+r,0))}for(let e of a){let t=null,a=null,l=!1,u=1/0,d=null;for(let f=0;f<o;f++){if(c[f]===null)continue;let o=Math.abs(c[f]-e.dialPos);o>22.5&&(o=45-o);let p=o<=1,m=Y(s+f,r).y;p?(t===null&&(t=f,u=1/0,d=null),a=f,o<u&&(u=o,d=f),m===n&&(l=!0)):t!==null&&(l&&Ne(i,e,s+t,s+a,s+(d??t),n,r),t=null,a=null,l=!1)}t!==null&&l&&Ne(i,e,s+t,s+a,s+(d??t),n,r)}return i.sort((e,t)=>e.peakJd-t.peakJd),i}function Ne(e,t,n,r,i,a,o){let s=L[t.p1],c=L[t.p2],l=J(a,1,1,0,0,o),u=J(a,12,31,23,59,o),d=n<l,f=r>u,p=d?l:n,m=f?u:r,h=Math.min(Math.max(i,p),m),g=Y(p,o),_=Y(m,o),v=Y(h,o);e.push({planetComboStr:`${s.emoji} ${s.name} × ${c.emoji} ${c.name}`,title:t.title,desc:t.desc||``,startJd:p,endJd:m,peakJd:h,startStr:`${g.y}年${g.m}月${g.d}日`,endStr:`${_.y}年${_.m}月${_.d}日`,peakStr:`${v.y}年${v.m}月${v.d}日`,continuesFromPrevYear:d,continuesToNextYear:f})}function Pe(){let e=document.getElementById(`monthTabs`);if(!e)return;let t=``;for(let e=1;e<=12;e++)t+=`<button class="month-tab-btn ${e===G?`active`:``}" data-month="${e}">${e}月</button>`;e.innerHTML=t,e.querySelectorAll(`.month-tab-btn`).forEach(t=>{t.addEventListener(`click`,()=>{G=parseInt(t.getAttribute(`data-month`),10),e.querySelectorAll(`.month-tab-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),$()})})}function Fe(e){let t=e.aspect.type===`good`,n=t?`#ff69b4`:`#ffd700`,r=t?`💖 好調期`:`⚠️ 注意期`;return`
    <div class="schedule-card planet-${e.transitPlanet.id}">
      <div class="card-top-row">
        <div class="card-badges-group">
          <span class="peak-day-gold-badge">🎯 ${e.peakDayLabel}</span>
          ${e.dateRangeLabel===e.peakDayLabel?``:`<span class="card-badge-period">📅 影響期間: ${e.dateRangeLabel}</span>`}
        </div>
        <span style="font-size:13px; font-weight:800; color:${n};">
          ${r} (${e.transitPlanet.emoji} ${e.aspect.emoji} ${e.natalPlanet.emoji})
        </span>
      </div>
      <div class="card-title">${e.title}</div>
      <div class="card-desc">${e.desc}</div>
    </div>`}function Ie(e){return`
    <div class="schedule-card planet-${e.transitPlanet.id}">
      <div class="card-top-row">
        <div class="card-badges-group">
          <span class="peak-day-gold-badge">🎯 ジャスト ${e.peakStr}</span>
          <span class="card-badge-period">📅 影響期間: ${e.startStr} 〜 ${e.endStr}</span>
        </div>
        <span style="font-size:13px; font-weight:800; color:${e.aspect.type===`good`?`#ff69b4`:`#ffd700`};">
          🌌 ${e.transitPlanet.emoji} ${e.aspect.emoji} ${e.natalPlanet.emoji}
        </span>
      </div>
      <div class="card-title">${e.title}</div>
      <div class="card-desc">${e.desc}</div>
    </div>`}function Le(e){let t=e.desc&&e.desc.trim()!==``?e.desc:`人生の極めて重要な大転換期の期間です。`;return`
    <div class="schedule-card" style="border-left:4px solid #c5a880;">
      <div class="card-top-row">
        <div class="card-badges-group">
          <span class="peak-day-gold-badge">🎯 ${e.peakStr}</span>
          <span class="card-badge-period">⏳ ${e.startStr} 〜 ${e.endStr}</span>
        </div>
        <span style="font-size:13px; font-weight:800; color:#c5a880;">🧭 運命のサイクル</span>
      </div>
      <div class="card-stimulus" style="color:#faf6f0; font-weight:700; font-size:15px; margin-top:8px;">${e.title}</div>
      <div class="card-title" style="font-size:13px; color:#c5a880 !important; margin-top:6px; font-weight:700;">💫 響き合うあなたの星： ${e.planetComboStr}</div>
      <div class="card-desc" style="margin-top:10px; color:#faf6f0;">${t.replace(/\n/g,`<br>`)}</div>
    </div>`}function Re(e){let t=[];return H.filter(t=>t&&!t.isNotice&&t.monthNum===e).forEach(e=>t.push({anchorJd:e.sortKey,html:Fe(e)})),U.filter(t=>Y(t.exactJd,q).m===e).forEach(e=>t.push({anchorJd:e.exactJd,html:Ie(e)})),W.filter(t=>Y(t.peakJd,q).m===e).forEach(e=>t.push({anchorJd:e.peakJd,html:Le(e)})),t.sort((e,t)=>e.anchorJd-t.anchorJd),t}function $(){let e=document.getElementById(`scheduleList`);if(!e)return;let t=H.filter(e=>e&&e.monthNum===G),n=t.filter(e=>!e.isNotice).map(e=>({transitPlanetId:e.transitPlanet?e.transitPlanet.id:null,title:e.title,rawDate:new Date(Date.UTC(K||2026,G-1,1))})),r=``;typeof D==`function`&&(r=D(n,G-1)||``);let i=r.trim()!==``&&!r.includes(`余白月`)&&!r.includes(`undefined`),a=`<div class="monthly-header-divider"><h2>🌙 ${G}月の星</h2>${i?`<p class="monthly-sub">${r}</p>`:``}</div>`,o=Re(G);o.length>0?a+=o.map(e=>e.html).join(``):a+=`<div class="no-data">この月のデータは見つかりませんでした。</div>`,t.filter(e=>e.isNotice).forEach(e=>{a+=`
      <div class="schedule-card" style="border-left:4px dashed #c5a880; background:rgba(13,12,10,0.9); padding:20px; margin-top:24px;">
        <div class="card-desc" style="font-size:13.5px; line-height:1.7; color:#faf6f0;">${e.desc}</div>
      </div>`}),e.innerHTML=a}function ze(){let e=document.getElementById(`halfSumSection`);e&&(e.innerHTML=`
    <div class="monthly-header-divider" style="margin-top:30px;"><h2>🧭 運命サイクルについて</h2></div>
    <div class="schedule-card" style="border:1px dashed #c5a880; background:rgba(13,12,10,0.8); color:#c4b9ae;">
      チャンスと一時的な疲れが同時に起きるのは、星が正しく動いている最高のデトックスの証拠です✨夜は自分を全力で労わる「ご自愛セット期間」として楽しんでみてくださいね。
      <div style="margin-top:12px; font-size:11px; color:#8c8279;">🎯 ジャスト日は${V?`Swiss Ephemeris による高精度計算で算出しています。`:`内蔵の天文計算エンジンで算出しています（逆行も反映されます）。`}</div>
    </div>`)}async function Be(){let e=parseInt(document.getElementById(`birth_year`).value,10),t=parseInt(document.getElementById(`birth_month`).value,10),n=parseInt(document.getElementById(`birth_day`).value,10),r=document.getElementById(`birthtime`).value,i=parseInt(document.getElementById(`tzoffset`).value,10),a=document.getElementById(`birthplace`).value,o=document.getElementById(`scanyear`).value;if(!e||!t||!n||!r||!o){alert(`生まれた年月日と出生時間、占いたい西暦を入力してね🔮✨`);return}let s=parseInt(o,10);if(!s||s<e){alert(`生まれた年以降を入力してね🔮✨`);return}let c=R.find(e=>e.key===a)||R.find(e=>e.key===`tokyo`),[l,u]=r.split(`:`).map(Number);localStorage.setItem(`astrology_byear`,String(e)),localStorage.setItem(`astrology_bmonth`,String(t)),localStorage.setItem(`astrology_bday`,String(n)),localStorage.setItem(`astrology_btime`,r),localStorage.setItem(`astrology_tz`,String(i)),localStorage.setItem(`astrology_place`,c.key),localStorage.setItem(`astrology_scan_year`,String(s)),q=i,K=s;let d=document.getElementById(`calcBtn`),f=document.getElementById(`resultSection`),p=document.getElementById(`scanChara`),m=d&&d.getAttribute(`data-origin`)||`大スキャン！`;p&&(p.innerHTML=`<div class="scan-bubble">星々をスキャン中！<br>ちょっと待ってね✨</div>`);let h=document.getElementById(`scanCharaChaser`);h&&(h.classList.remove(`active`),h.offsetWidth,h.classList.add(`active`)),d.textContent=`大スキャン中... ⏳`,d.disabled=!0,f.style.display=`none`,H=[],U=[],W=[],await new Promise(e=>setTimeout(e,300));try{let r=J(e,t,n,l,u,i),a={};for(let e of M){let t=await X(r,e.id);a[String(e.id)]=typeof t==`number`&&!isNaN(t)?t:0}a[10]=await X(r,10);let o=Se(r,c.lat,c.lon);a[11]=o.asc,a[12]=o.mc;let d=await Te(a,s,i);H=Oe(d,s,i),U=ke(d,i),G=1,Pe(),f.style.display=`block`,$(),W=await Me(a,r,s,i),$(),ze()}catch(e){console.error(`[chronoscope] スキャンに失敗しました`,e),alert(`計算中にエラーが起きました。時間をおいてもう一度お試しください🙏`)}finally{p&&(p.innerHTML=``),setTimeout(()=>{let e=document.getElementById(`scanCharaChaser`);e&&e.classList.remove(`active`)},100),d.textContent=m,d.style.opacity=`1`,d.disabled=!1}}async function Ve(){let e=document.createElement(`style`);e.textContent=ne,document.head.appendChild(e);try{B=new T,await B.init();let e=B.calculatePosition(2451545,s.Sun);e&&typeof e.longitude==`number`&&!isNaN(e.longitude)?(V=!0,console.info(`[chronoscope] Swiss Ephemeris (Moshier) で計算します`)):console.warn(`[chronoscope] Swiss Ephemeris の応答が不正です。内蔵計算を使用します。`)}catch(e){console.warn(`[chronoscope] Swiss Ephemeris を初期化できませんでした。内蔵計算を使用します。`,e)}let t=localStorage.getItem(`astrology_byear`)||`1995`,n=localStorage.getItem(`astrology_bmonth`)||`10`,r=localStorage.getItem(`astrology_bday`)||`10`,i=localStorage.getItem(`astrology_btime`)||`12:00`,a=localStorage.getItem(`astrology_tz`)||`540`,o=localStorage.getItem(`astrology_place`)||`tokyo`,c=localStorage.getItem(`astrology_scan_year`)||String(new Date().getFullYear()),l=new Date().getFullYear(),u=``;for(let e=1940;e<=l;e++)u+=`<option value="${e}" ${String(e)===t?`selected`:``}>${e}年</option>`;let d=``;for(let e=1;e<=12;e++)d+=`<option value="${e}" ${String(e)===n?`selected`:``}>${e}月</option>`;let f=``;for(let e=1;e<=31;e++)f+=`<option value="${e}" ${String(e)===r?`selected`:``}>${e}日</option>`;let p=R.map(e=>`<option value="${e.key}" ${e.key===o?`selected`:``}>${e.name}</option>`).join(``),m=[{v:540,label:`日本 (UTC+9)`},{v:480,label:`中国・台湾 (UTC+8)`},{v:0,label:`イギリス (UTC+0)`},{v:-300,label:`米国東部 (UTC-5)`},{v:-480,label:`米国西部 (UTC-8)`}].map(e=>`<option value="${e.v}" ${String(e.v)===a?`selected`:``}>${e.label}</option>`).join(``),h=document.getElementById(`app`);if(!h)return;h.innerHTML=`
    <div id="scanCharaChaser" class="scan-dash-chara"></div>
    <div class="container">
      <div class="header">
        <h1>クロノスコープ運勢</h1>
        <p class="notice-text">🔮 効果の保証はありません</p>
        <p class="author">produced by れいさん</p>
      </div>
      <div class="input-card">
        <div class="form-row" style="display:flex; flex-direction:column; gap:12px;">
          <div class="form-group">
            <label>📅 生まれた年月日（年 / 月 / 日）</label>
            <div style="display:flex; gap:8px; margin-top:4px;">
              <select id="birth_year" class="form-control" style="flex:1;">${u}</select>
              <select id="birth_month" class="form-control" style="flex:1;">${d}</select>
              <select id="birth_day" class="form-control" style="flex:1;">${f}</select>
            </div>
          </div>
          <div class="form-group">
            <label>⏱ 出生時間（時・分）</label>
            <input type="time" id="birthtime" class="form-control" value="${i}">
          </div>
          <div class="form-group">
            <label>🌍 出生地とタイムゾーン</label>
            <div style="display:flex; gap:8px; margin-top:4px;">
              <select id="birthplace" class="form-control" style="flex:1;">${p}</select>
              <select id="tzoffset" class="form-control" style="flex:1;">${m}</select>
            </div>
          </div>
          <div class="form-group">
            <label>占いたい西暦</label>
            <input type="number" id="scanyear" class="form-control" value="${c}" min="1900" max="2100">
          </div>
        </div>
        <button id="calcBtn" class="btn-submit" style="margin-top:20px;">大スキャン！</button>
        <div id="scanChara"></div>
      </div>
      <div id="resultSection" style="display:none;">
        <div class="month-tabs" id="monthTabs"></div>
        <div class="schedule-list" id="scheduleList"></div>
        <div id="halfSumSection"></div>
      </div>
    </div>`;let g=document.getElementById(`calcBtn`);g&&(g.setAttribute(`data-origin`,g.textContent),g.addEventListener(`click`,Be))}Ve();