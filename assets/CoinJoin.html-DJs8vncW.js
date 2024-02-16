import{_ as c}from"./AutoStartCoinjoinThreshold-B0lFY-5G.js";import{_ as h}from"./CoinjoinStrategy-BZrDbG5n.js";import{_ as d,r as l,o as u,c as p,a as e,d as n,w as i,b as t,e as r}from"./app-BrpS1wO3.js";const b="/MusicBoxAwaitingToAutoStartCoinjoin.png",f="/MusicBoxAwaitingOtherParticipants.png",m="/MusicBoxCoinjoinInProgress.png",g="/MusicBoxCoinjoinSuccessful.png",_="/CoinjoinSettings.png",y="/CoinjoinSettingsAutomaticallyStartCoinjoin.png",w="/CoinjoinStrategySettings.png",j={},v=e("h1",{id:"coinjoin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coinjoin"},[e("span",null,"Coinjoin")])],-1),x={class:"table-of-contents"},k=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction"},[e("span",null,"Introduction")])],-1),A={href:"https://en.bitcoin.it/Privacy#CoinJoin",target:"_blank",rel:"noopener noreferrer"},C={href:"https://bitcointalk.org/index.php?topic=279249.msg2983902",target:"_blank",rel:"noopener noreferrer"},T={href:"https://eprint.iacr.org/2021/206",target:"_blank",rel:"noopener noreferrer"},S={href:"https://youtu.be/dGATztn5Ql8",target:"_blank",rel:"noopener noreferrer"},W=e("img",{src:"https://img.youtube.com/vi/dGATztn5Ql8/maxresdefault.jpg",alt:"WabiSabi Coinjoin Explained in 3 Minutes"},null,-1),B=r('<h2 id="coinjoin-step-by-step" tabindex="-1"><a class="header-anchor" href="#coinjoin-step-by-step"><span>Coinjoin step-by-step</span></a></h2><ol><li>Launch Wasabi and open your wallet.</li><li>Wait. Wasabi coinjoins automatically in the background.</li><li>You&#39;re done! You can make private payments now.</li></ol><h3 id="music-box" tabindex="-1"><a class="header-anchor" href="#music-box"><span>Music box</span></a></h3><p>After opening a hot wallet, it will automatically start a countdown to start coinjoining (±10 minutes). This and other coinjoin related information is shown in the music box.</p><p><img src="'+b+'" alt="Music Box Countdown" title="Music Box Countdown"></p>',5),I=e("em",null,"Waiting to auto-start coinjoin",-1),M=e("p",null,"A blue aura will show up at the the bottom of the wallet, which indicates that the wallet is coinjoining, and the music box message will change.",-1),q=e("p",null,[e("img",{src:f,alt:"Music Box Awaiting Other Participants",title:"Music Box Awaiting Other Participants"})],-1),F=e("p",null,"After some time the blue aura will change to an orange one, this indicates that the coinjoin process is now in a critical phase. Wasabi will prevent you from shutting down the app during the orange aura to not disrupt the coinjoin round.",-1),P=e("p",null,[e("img",{src:m,alt:"Music Box Coinjoin In Progress",title:"Music Box Coinjoin In Progress"})],-1),Q=r('<p><img src="'+g+'" alt="Music Box Success" title="Music Box Success"></p><p>Notice that the wallet might have to repeat the coinjoin steps multiple times before a successful coinjoin is created. So it is possible that the aura colors will change without a successful coinjoin. Please leave Wasabi Wallet running, and eventually there will be a successful coinjoin.</p><h3 id="more-details" tabindex="-1"><a class="header-anchor" href="#more-details"><span>More Details</span></a></h3><p>By default, Wasabi starts automatically coinjoining your funds when the total value of the non-private coins is equal to or above the <code>Auto-start coinjoin threshold</code> (0.01 BTC by default). <code>Automatically start coinjoin</code> can be disabled from the coinjoin settings. In case you want to start the process manually, then click the play button; if you want to stop coinjoin, then click the pause button.</p><p>Once a coin achieves enough privacy (reaches the <code>Anonymity score target</code>), then the corresponding amount will show up in the wallet&#39;s main view as &quot;PRIVATE&quot;.</p><p>Notice that it is not yet possible to coinjoin from a hardware wallet, the keys must be &quot;hot&quot; on your computer.</p><h3 id="fees" tabindex="-1"><a class="header-anchor" href="#fees"><span>Fees</span></a></h3><p>A 0.3% coordination fee will be taken from fresh coins bigger than 0.01 BTC. Coins less than or equal to 0.01 BTC don&#39;t pay coordination fees at all, according to the <em>PlebsDontPay</em> threshold.</p>',8),N=e("h2",{id:"wabisabi-protocol-step-by-step",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wabisabi-protocol-step-by-step"},[e("span",null,"WabiSabi protocol step-by-step")])],-1),z=e("p",null,"WabiSabi protocol requires 5 steps to successfully create and broadcast a coinjoin transaction to the bitcoin network.",-1),O=e("p",null,"The round starts either as soon as the number of registered inputs reaches the maximum, or after the input registration time is reached and as long as the minimum number of inputs is satisfied.",-1),D=e("h3",{id:"input-registration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#input-registration"},[e("span",null,"Input registration")])],-1),E={href:"https://tb-manual.torproject.org/managing-identities/",target:"_blank",rel:"noopener noreferrer"},U=e("strong",null,"Alice",-1),J=r('<p>The Wasabi coordinator now verifies that:</p><ul><li>There is still room for more inputs on this coinjoin.</li><li>The input has not already been registered, is not banned, is unspent, and that the input proof is valid.</li><li>The input has at least 5000 sats value.</li></ul><p>Only when all these checks are passed, does the coordinator allow this input to be registered. The coordinator creates and sends a credential back to Alice, which has the same amount as the input minus fees.</p><p>The input registration phase ends when either: the number of registered inputs reaches the maximum, or when the time elapsed and the minimum number of inputs is satisfied.</p><h3 id="connection-confirmation" tabindex="-1"><a class="header-anchor" href="#connection-confirmation"><span>Connection confirmation</span></a></h3><p>There are many users registering their inputs (with different Alice for each input) in the first phase, and this takes a while. The connection confirmation phase makes sure that all of them are still online and ready to continue. The coordinator verifies the unique ID from each Alice, and if everyone is still communicating. The coordinator sends a zero value credential to each Alice for each successful connection confirmation.</p><p>The round is abandoned and re-started if too many Alices have dropped, for example when their Wasabi is shut down, or when their Tor connection is temporarily broken. The connection confirmation phase ends when all Alices have provided their unique IDs, or after a timeout and the number of online Alices is still larger than the minimum number of inputs.</p><h3 id="output-registration" tabindex="-1"><a class="header-anchor" href="#output-registration"><span>Output registration</span></a></h3>',8),L=e("p",null,"First, every client needs to change the value of their credentials to the desired output values. For this, the client presents to the coordinator two old credentials, and two newly created ones. The coordinator does not know the amount value of any of those credentials, but it can verify, that the two pairs sum up to exactly the same value. For example, a user can present one 5 btc and one 0 btc credential, and redeem one 2 btc and one 3 btc credential. Or a user can present one 4 btc and one 1 btc credential, and redeem one 5 btc and one 0 btc credential. After potentially many rounds of reissuance, each client has exactly the amount credential it desires. Each of these reissuance is perfectly private, so the coordinator cannot link any of them to the same user.",-1),R=e("p",null,[t("Next, your Wasabi client generates multiple new Tor identities called "),e("strong",null,"Bob"),t(", which are in no way tied to any Alice. Bob sends to the Wasabi coordinator:")],-1),V=e("ul",null,[e("li",null,"An unblinded credential signed by the coordinator"),e("li",null,"A new (unused) bitcoin address")],-1),G=e("p",null,"Because the coordinator can verify its own credential, it knows that this credential came into existence after an input of at least this much value was registered. However, it cannot know which input exactly.",-1),H=e("p",null,"It is very important that the coordinator cannot link Alice to Bob. Because Alice has sent the cleartext input, and Bob sends the cleartext output. So, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1. Because Alice received a credential from the coordinator, and because Bob is a new Tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but it cannot deanonymize the peers.",-1),K=e("p",null,"The output registration phase ends when the value of cleartext outputs is equal to the value of inputs, meaning that all Bobs have registered. If after a timeout not all outputs are registered, then this round is abandoned, the missing inputs are temporarily banned, and a new round is started.",-1),Y={class:"custom-container tip"},$=e("p",{class:"custom-container-title"},"Possibility of Taproot outputs from coinjoin",-1),X={href:"https://github.com/zkSNACKs/WalletWasabi/releases/tag/v2.0.3",target:"_blank",rel:"noopener noreferrer"},Z=e("h3",{id:"signing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#signing"},[e("span",null,"Signing")])],-1),ee=r('<p>Each Alice does the following:</p><ul><li>Verifies that her input and output are included.</li><li>Signs the transaction with the private key of her input.</li><li>Sends the signature to the coordinator, who verifies this information.</li></ul><p>The signing phase ends when the coordinator has received all the valid signatures for all the registered inputs.</p><h3 id="blame-round" tabindex="-1"><a class="header-anchor" href="#blame-round"><span>Blame round</span></a></h3><p>When the signing phase fails due to some Alices disrupting the round (failing to sign or send the signature to the coordinator), then the successful Alices will continue into a blame round. The blame round will redo the coinjoin phases in order to create a successful coinjoin.</p><p>This mecanism also prevents coinjoins from being DDoS-ed because bad actors that are willingly disturbing rounds won&#39;t be able to join the blame round. The client will keep going to the blame round until there are not enough Alices left to meet the minimum input count of 150.</p><p>The blame round is not a mandatory phase of the coinjoin process. It was introduced in order to have a higher coinjoin success rate.</p><h3 id="broadcasting" tabindex="-1"><a class="header-anchor" href="#broadcasting"><span>Broadcasting</span></a></h3>',8),te=r('<h2 id="coinjoin-settings" tabindex="-1"><a class="header-anchor" href="#coinjoin-settings"><span>Coinjoin Settings</span></a></h2><p>Wasabi Wallet has automatic coinjoin. It is done by the built-in automatic coinjoin &quot;robot&quot;. The robot contains instructions/settings, like how often and when to coinjoin. The user is able to specify these settings in the <code>Coinjoin Settings</code> dialog, according to his own preferences. The wallet ships with default settings, which are good enough for most users.</p><p><img src="'+_+'" alt="Wasabi Wallet Coinjoin Settings" title="Wasabi Wallet Coinjoin Settings"></p><div class="custom-container tip"><p class="custom-container-title">Coinjoin settings are wallet specific</p><p>As the coinjoin settings apply per individual wallet, it is possible to have multiple wallets with different coinjoin settings.</p></div><h3 id="automatically-start-coinjoin" tabindex="-1"><a class="header-anchor" href="#automatically-start-coinjoin"><span>Automatically start coinjoin</span></a></h3><p>This setting is enabled by default.</p><p>When this is enabled, the wallet will automatically start coinjoining soon after the wallet is loaded. The wallet will coinjoin until the <code>privacy progress</code> is 100%.</p><p>When this is not enabled, the user will have to manually press the Play button in order to start coinjoining.</p><p><img src="'+y+'" alt="Coinjoin Settings Automatically Start Coinjoin" title="Coinjoin Settings Automatically Start Coinjoin"></p><h3 id="auto-start-coinjoin-threshold" tabindex="-1"><a class="header-anchor" href="#auto-start-coinjoin-threshold"><span>Auto-start coinjoin threshold</span></a></h3><p>The default Auto-start coinjoin threshold is 0.01 BTC.</p><p>The wallet will not automatically start coinjoining if the non-private balance is below the <code>Auto-start coinjoin threshold</code>, even if the <code>Automatically start coinjoin</code> is enabled. In this case the user has to manually press Play to start coinjoining. This setting can be used to prevent paying (relatively) high fees for smaller bitcoin amounts.</p><p>For example, if the non-private balance is 0.005 BTC and the Auto-start coinjoin threshold is 0.01 BTC, the user will have to manually press Play to start coinjoining.</p><p><img src="'+c+'" alt="Auto-start Coinjoin Threshold" title="Auto-start Coinjoin Threshold"></p><div class="custom-container tip"><p class="custom-container-title">It is OK to set the Auto-start coinjoin threshold to 0</p><p>If you have some small non-private left overs: you can coinjoin these by pressing Play, or wait until you receive more funds. If you want to always automatically coinjoin ALL your coins, this can be set to 0 BTC. Note that you might pay relatively more fees for coinjoining smaller amounts.</p></div><h3 id="coinjoin-strategy" tabindex="-1"><a class="header-anchor" href="#coinjoin-strategy"><span>Coinjoin Strategy</span></a></h3>',16),ne=e("code",null,"Minimize Costs",-1),ie=e("code",null,"Maximize Speed",-1),oe=e("code",null,"Maximize Privacy",-1),ae=e("code",null,"Anonymity score target",-1),se=e("code",null,"Coinjoin time preference",-1),re=e("code",null,"Red coin isolation",-1),le=e("p",null,[e("img",{src:w,alt:"Coinjoin Strategy Settings",title:"Coinjoin Strategy Settings"})],-1),ce=e("p",null,[t("The default strategy is "),e("code",null,"Maximize Speed"),t(".")],-1),he=e("p",null,"It is possible to make your own custom strategy by using the customize button.",-1),de=e("p",null,[e("img",{src:h,alt:"Coinjoin Strategy",title:"Coinjoin Strategy"})],-1),ue=e("h2",{id:"wasabi-coinjoin-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wasabi-coinjoin-examples"},[e("span",null,"Wasabi Coinjoin examples")])],-1),pe=e("p",null,"Here's a list of Wasabi coinjoin examples and how they appear on a block explorer:",-1),be={href:"https://mempool.space/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70",target:"_blank",rel:"noopener noreferrer"},fe={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70",target:"_blank",rel:"noopener noreferrer"},me={href:"https://mempool.space/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e",target:"_blank",rel:"noopener noreferrer"},ge={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://mempool.space/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d",target:"_blank",rel:"noopener noreferrer"},ye={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d",target:"_blank",rel:"noopener noreferrer"},we={href:"https://mempool.space/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e",target:"_blank",rel:"noopener noreferrer"},je={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://mempool.space/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc",target:"_blank",rel:"noopener noreferrer"},xe={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/tx/aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc",target:"_blank",rel:"noopener noreferrer"};function ke(Ae,Ce){const o=l("router-link"),a=l("ExternalLinkIcon"),s=l("RouteLink");return u(),p("div",null,[v,e("nav",x,[e("ul",null,[e("li",null,[n(o,{to:"#introduction"},{default:i(()=>[t("Introduction")]),_:1})]),e("li",null,[n(o,{to:"#coinjoin-step-by-step"},{default:i(()=>[t("Coinjoin step-by-step")]),_:1}),e("ul",null,[e("li",null,[n(o,{to:"#music-box"},{default:i(()=>[t("Music box")]),_:1})]),e("li",null,[n(o,{to:"#more-details"},{default:i(()=>[t("More Details")]),_:1})]),e("li",null,[n(o,{to:"#fees"},{default:i(()=>[t("Fees")]),_:1})])])]),e("li",null,[n(o,{to:"#wabisabi-protocol-step-by-step"},{default:i(()=>[t("WabiSabi protocol step-by-step")]),_:1}),e("ul",null,[e("li",null,[n(o,{to:"#input-registration"},{default:i(()=>[t("Input registration")]),_:1})]),e("li",null,[n(o,{to:"#connection-confirmation"},{default:i(()=>[t("Connection confirmation")]),_:1})]),e("li",null,[n(o,{to:"#output-registration"},{default:i(()=>[t("Output registration")]),_:1})]),e("li",null,[n(o,{to:"#signing"},{default:i(()=>[t("Signing")]),_:1})]),e("li",null,[n(o,{to:"#blame-round"},{default:i(()=>[t("Blame round")]),_:1})]),e("li",null,[n(o,{to:"#broadcasting"},{default:i(()=>[t("Broadcasting")]),_:1})])])]),e("li",null,[n(o,{to:"#coinjoin-settings"},{default:i(()=>[t("Coinjoin Settings")]),_:1}),e("ul",null,[e("li",null,[n(o,{to:"#automatically-start-coinjoin"},{default:i(()=>[t("Automatically start coinjoin")]),_:1})]),e("li",null,[n(o,{to:"#auto-start-coinjoin-threshold"},{default:i(()=>[t("Auto-start coinjoin threshold")]),_:1})]),e("li",null,[n(o,{to:"#coinjoin-strategy"},{default:i(()=>[t("Coinjoin Strategy")]),_:1})])])]),e("li",null,[n(o,{to:"#wasabi-coinjoin-examples"},{default:i(()=>[t("Wasabi Coinjoin examples")]),_:1})])])]),k,e("p",null,[t("A "),e("a",A,[t("coinjoin"),n(a)]),t(" is a special Bitcoin transaction where several peers get together to literally join their coins in a single transaction. They collaboratively build a transaction where each of them provides some coins as inputs, and fresh addresses as outputs. The concept has been around since the early days of Bitcoin, and it was formalized by the great Greg Maxwell in "),e("a",C,[t("this awesome introductory thread"),n(a)]),t(".")]),e("p",null,[t('The goal is to gain privacy by breaking the link of which input "pays" which output so that none of the outputs can be attributed to the owner of the input. WabiSabi enables centrally coordinated coinjoins with variable amounts in a trustless (meaning nobody can steal) and private (meaning even the coordinator cannot spy) manner, as described in the '),e("a",T,[t("WabiSabi paper"),n(a)]),t(".")]),e("p",null,[e("a",S,[W,n(a)])]),B,e("p",null,[t("After the "),I,t(" countdown is finished the wallet should start participating in the "),n(s,{to:"/using-wasabi/CoinJoin.html#wabisabi-protocol-step-by-step"},{default:i(()=>[t("coinjoin process")]),_:1}),t(".")]),M,q,F,P,e("p",null,[t("If this is succesfull, the coinjoin is completed and the coinjoin "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-see-coinjoins-in-the-history-list"},{default:i(()=>[t("will show up in the history list")]),_:1}),t(".")]),Q,e("p",null,[t("Remixing is free, as well as coinjoining coins 1 hop from a coinjoin, although, Bitcoin mining fees still do apply, as shown in "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#what-are-the-fees-for-the-coinjoin"},{default:i(()=>[t("this table")]),_:1}),t(". So if you send a coinjoined coin and receive a change output, you will not be charged the coordination fee for this change output. The recipient of the payment will not have to pay the coordination fee, as long as he is making coinjoins with the same coordinator.")]),N,z,O,D,e("p",null,[t("During the "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-input-registration-phase"},{default:i(()=>[t("input registration")]),_:1}),t(", the client selects how many and which coins will be registered for coinjoin. These coins need to be confirmed on the Bitcoin blockchain. In the background Wasabi generates input proofs, which are signatures over challenge messages, made with the private keys that lock up the coins. With this, the coordinator can verify that you actually own these coins.")]),e("p",null,[t("Wasabi wallet generates a new "),e("a",E,[t("Tor identity"),n(a)]),t(" called "),U,t(" for each input. She is a separate entity, and for every round you use a new Alice who is not linked to any other input or previous connection. With Alice, you send the input ownership proof to the coordinator.")]),J,e("p",null,[t("Now that all peers are online, we are ready to proceed with the "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-output-registration-phase"},{default:i(()=>[t("output registration phase")]),_:1}),t(" of the round.")]),L,R,V,G,H,K,e("div",Y,[$,e("p",null,[t("Since Wasabi "),e("a",X,[t("version 2.0.3"),n(a)]),t(" coinjoin outputs can be SegWit v0 and SegWit v1 (Taproot). If running this version or higher, the client registers the output type in a semi-random way (~50% chance of receiving Taproot output).")])]),Z,e("p",null,[t("Now that all inputs and outputs are registered, the coordinator can start the "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-signing-phase"},{default:i(()=>[t("signing phase")]),_:1}),t(", by building the coinjoin transaction with all the registered inputs and outputs. It sends this transaction to all the Alices of the round.")]),ee,e("p",null,[t("The coinjoin transaction has been successfully built and signed, and it is now ready to be "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-broadcasting-phase"},{default:i(()=>[t("broadcast")]),_:1}),t(" to the peers of the Bitcoin network. The coordinator sends this transaction over the Tor network to random Bitcoin P2P nodes, and from there it is gossiped to other nodes and miners. To save on mining fees, the target confirmation time is roughly 24 hours.")]),te,e("p",null,[t("Wasabi ships with 3 coinjoin strategies: "),ne,t(", "),ie,t(", and "),oe,t(". Each of these contain different configurations, as shown in "),n(s,{to:"/FAQ/FAQ-UseWasabi.html#what-are-the-differences-settings-per-coinjoin-strategy"},{default:i(()=>[t("this table")]),_:1}),t(". They determine the "),ae,t(", "),se,t(", and if "),re,t(" is enabled or not.")]),le,ce,he,de,ue,pe,e("ul",null,[e("li",null,[e("a",be,[t("198aee6e1b2cad9b7c3e4cd12962980fbaab0b20c07016031d0c2416b3ef9b70"),n(a)]),t(" | "),e("a",fe,[t(".onion version"),n(a)])]),e("li",null,[e("a",me,[t("b77cb1ad9a1c164c868f89927193178ec44f1006ca154f8b97008d14bf2c4a6e"),n(a)]),t(" | "),e("a",ge,[t(".onion version"),n(a)])]),e("li",null,[e("a",_e,[t("72f4b05845564c59982b4b5ae0d8aa7322d08907198fbcdae48390fbe0538e8d"),n(a)]),t(" | "),e("a",ye,[t(".onion version"),n(a)])]),e("li",null,[e("a",we,[t("063f001403aaa4e44f9f35faf44507f373824657a7ef39907a6907298d9ee56e"),n(a)]),t(" | "),e("a",je,[t(".onion version"),n(a)])]),e("li",null,[e("a",ve,[t("aabb0a2b43b274c9ae287e3837f9f8a8d8a378ce93153dc52de9978d2bb72cbc"),n(a)]),t(" | "),e("a",xe,[t(".onion version"),n(a)])])])])}const Be=d(j,[["render",ke],["__file","CoinJoin.html.vue"]]),Ie=JSON.parse('{"path":"/using-wasabi/CoinJoin.html","title":"Coinjoin","lang":"en-US","frontmatter":{"title":"Coinjoin","description":"A detailed explanation about how WabiSabi coinjoins work under the hood. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Coinjoin step-by-step","slug":"coinjoin-step-by-step","link":"#coinjoin-step-by-step","children":[{"level":3,"title":"Music box","slug":"music-box","link":"#music-box","children":[]},{"level":3,"title":"More Details","slug":"more-details","link":"#more-details","children":[]},{"level":3,"title":"Fees","slug":"fees","link":"#fees","children":[]}]},{"level":2,"title":"WabiSabi protocol step-by-step","slug":"wabisabi-protocol-step-by-step","link":"#wabisabi-protocol-step-by-step","children":[{"level":3,"title":"Input registration","slug":"input-registration","link":"#input-registration","children":[]},{"level":3,"title":"Connection confirmation","slug":"connection-confirmation","link":"#connection-confirmation","children":[]},{"level":3,"title":"Output registration","slug":"output-registration","link":"#output-registration","children":[]},{"level":3,"title":"Signing","slug":"signing","link":"#signing","children":[]},{"level":3,"title":"Blame round","slug":"blame-round","link":"#blame-round","children":[]},{"level":3,"title":"Broadcasting","slug":"broadcasting","link":"#broadcasting","children":[]}]},{"level":2,"title":"Coinjoin Settings","slug":"coinjoin-settings","link":"#coinjoin-settings","children":[{"level":3,"title":"Automatically start coinjoin","slug":"automatically-start-coinjoin","link":"#automatically-start-coinjoin","children":[]},{"level":3,"title":"Auto-start coinjoin threshold","slug":"auto-start-coinjoin-threshold","link":"#auto-start-coinjoin-threshold","children":[]},{"level":3,"title":"Coinjoin Strategy","slug":"coinjoin-strategy","link":"#coinjoin-strategy","children":[]}]},{"level":2,"title":"Wasabi Coinjoin examples","slug":"wasabi-coinjoin-examples","link":"#wasabi-coinjoin-examples","children":[]}],"git":{"updatedTime":1694446273000},"filePathRelative":"using-wasabi/CoinJoin.md"}');export{Be as comp,Ie as data};
