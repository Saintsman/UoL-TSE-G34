(this["webpackJsonpg34-covid-analyser"]=this["webpackJsonpg34-covid-analyser"]||[]).push([[0],{133:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},306:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(56),r=a.n(s),l=(a(205),a(39)),c=a(40),o=a(21),d=a(41),h=a(44),j=(a(206),a(207),a(31)),u=a(33),b=a(32),p=a(16),x=a(64),F=a(332),O=a(116),C=a(334),y=a(336),v=a(3),m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("g",{children:[Object(v.jsx)(C.a,Object(O.a)({},this.props)),Object(v.jsx)(y.a,Object(O.a)(Object(O.a)({},this.props),{},{x:200,y:250,orientation:"top",pointerLength:0,cornerRadius:50,flyoutWidth:100,flyoutHeight:100,flyoutStyle:{fill:"black"}}))]})}}]),a}(n.Component),f=[["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"],["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"]],k=function(e){var t={axis:{style:{tickLabels:{fill:"white"}}}},a=["Cases - cumulative total","Cases - cumulative total per 100000 population","Cases - newly reported in last 24 hours","Cases - newly reported in last 7 days","Cases - newly reported in last 7 days per 100000 population"],n=["Deaths - cumulative total","Deaths - cumulative total per 100000 population","Deaths - newly reported in last 24 hours","Deaths - newly reported in last 7 days","Deaths - newly reported in last 7 days per 100000 population"];return Object(v.jsxs)(j.a,{fluid:!0,style:{backgroundColor:"#293742",alignSelf:"center"},children:[Object(v.jsx)(u.a,{children:Object(v.jsx)(j.a,{children:Object(v.jsxs)(x.a,{className:"text-white",style:{backgroundColor:"#202B33"},children:[Object(v.jsx)("h1",{children:"Welcome to G34 Covid Analyser"}),Object(v.jsxs)(u.a,{style:{marginBottom:"10px"},children:[Object(v.jsx)(b.a,{}),Object(v.jsx)(b.a,{xs:6,children:Object(v.jsx)(p.a,{style:{backgroundColor:"#193038"},children:Object(v.jsx)(p.a.Body,{children:Object(v.jsxs)("p",{children:["You are currently viewing the data in this mode: ",["Cumulative total","Cumulative total per 100000 population","Newly reported in last 24 hours","Newly repoted in last 7 days"][e.retrievalType],"."]})})})}),Object(v.jsx)(b.a,{})]}),Object(v.jsxs)(u.a,{children:[Object(v.jsxs)(b.a,{children:[Object(v.jsx)("h3",{children:e.data.home_data.Name}),Object(v.jsx)("div",{className:"jumbo-charts",children:Object(v.jsx)(F.a,{animate:{easing:"exp",duration:1e3},data:[{x:"Deaths",y:e.data.home_data[n[e.retrievalType]]},{x:"Cases",y:e.data.home_data[a[e.retrievalType]]}],width:250,height:250,style:{labels:{fontSize:12,fill:"white"},data:{fillOpacity:1}},colorScale:f[0],innerRadius:50,theme:t})}),Object(v.jsx)(p.a,{style:{backgroundColor:"#193038"},children:Object(v.jsxs)(p.a.Body,{children:[Object(v.jsxs)("h6",{color:"#388087",children:["Deaths: ",e.data.home_data[n[e.retrievalType]]]}),Object(v.jsxs)("h6",{color:"#6fb3b8",children:["Cases: ",e.data.home_data[a[e.retrievalType]]]})]})})]}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)("h3",{children:"Global"}),Object(v.jsx)("div",{className:"jumbo-charts",children:Object(v.jsx)(F.a,{animate:{easing:"exp",duration:1e3},data:[{x:"Deaths",y:e.data.global_data[n[e.retrievalType]]},{x:"Cases",y:e.data.global_data[a[e.retrievalType]]}],width:250,height:250,style:{labels:{fontSize:12,fill:"white"},data:{fillOpacity:1}},colorScale:f[0],innerRadius:50,theme:t})}),Object(v.jsx)(p.a,{style:{backgroundColor:"#193038"},children:Object(v.jsxs)(p.a.Body,{children:[Object(v.jsxs)("h6",{color:"#388087",children:["Deaths: ",e.data.global_data[n[e.retrievalType]]]}),Object(v.jsxs)("h6",{color:"#6fb3b8",children:["Cases: ",e.data.global_data[a[e.retrievalType]]]})]})})]})]})]})})}),Object(v.jsx)(u.a,{children:e.data.region_data.map((function(i,s){return Object(v.jsx)(b.a,{children:Object(v.jsx)("div",{style:{width:"20rem",backgroundColor:"#293742",alignContent:"center",marginRight:"10px",marginTop:"10px"},children:Object(v.jsx)(p.a,{className:"text-white",style:{width:"20rem",backgroundColor:"#202B33"},children:Object(v.jsxs)(p.a.Body,{children:[Object(v.jsx)(p.a.Title,{children:i.Name}),Object(v.jsx)(p.a.Subtitle,{className:"mb-2 text-muted",children:"Deaths / Cases"}),Object(v.jsx)(p.a.Body,{style:{padding:"2px"},children:Object(v.jsx)(F.a,{animate:{easing:"exp",duration:1e3},data:[{x:"Deaths",y:i[n[e.retrievalType]]},{x:"Cases",y:i[a[e.retrievalType]]}],width:250,height:250,style:{labels:{fontSize:12,fill:"white"},data:{fillOpacity:1}},colorScale:f[s],innerRadius:50,theme:t,labelComponent:Object(v.jsx)(m,{})})}),Object(v.jsxs)(p.a.Text,{children:[Object(v.jsxs)("h4",{children:["Cases: ",i[a[e.retrievalType]]]}),Object(v.jsxs)("h4",{children:["Deaths: ",i[n[e.retrievalType]]]})]}),Object(v.jsx)(p.a.Link,{href:"#",children:"Enlarge"}),Object(v.jsx)(p.a.Link,{href:"#",children:"Edit"})]})})})})}))})]})},g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return Object(v.jsx)(j.a,{fluid:!0,style:{padding:"5px",backgroundColor:"#293742",alignSelf:"center"},children:Object(v.jsx)(u.a,{style:{width:"100%"},children:Object(v.jsx)(k,{style:{alignSelf:"center"},data:this.props.data,retrievalType:this.props.retrievalType})})})}}]),a}(n.Component);var w=function(){return Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(x.a,{children:[Object(v.jsx)("h1",{children:"Welcome to G34 Covid Analyser"}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Max Pittock (19700422)"}),Object(v.jsx)("h3",{children:"Galani Anagnostopoulou (06061790)"}),Object(v.jsx)("h3",{children:"Jack Hartman (19702197)"}),Object(v.jsx)("h3",{children:"Joseph Murphy (19700614)"}),Object(v.jsx)("h3",{children:"Thomas Houghton (19697363)"})]}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)("h1",{children:"Promotion"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"video-responsive",children:Object(v.jsx)("iframe",{width:"100%",height:"580px",src:"https://www.youtube.com/embed/IdHhK-H0v_I",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})]})]})},D=(a(133),function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{class:"loader",children:Object(v.jsxs)("div",{class:"loader-inner",children:[Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})})]})})})}),E=a(46),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={Countries:["none"]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.tse.jackhartman.dev","/who-countries")).then((function(e){if(e.ok)return e.json()})).then((function(t){e.setState((function(e){return{Countries:t.countries}}))}))}},{key:"render",value:function(){var e=this;return console.log(this.state.Countries),Object(v.jsx)("div",{children:Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(x.a,{className:"text-white",style:{marginTop:"30px",backgroundColor:"#202B33"},children:[Object(v.jsx)("h1",{children:"Welcome to G34 Covid Analyser"}),Object(v.jsx)("p",{children:"Please select the country that you are from:"})]}),Object(v.jsx)(v.Fragment,{children:1===this.state.Countries.length?Object(v.jsxs)("div",{class:"loader-inner",children:[Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})})]}):this.state.Countries.map((function(t){return Object(v.jsx)(E.a,{variant:"info",style:{margin:"10px"},onClick:function(){e.props.action(t)},children:t})}))})]})})}}]),a}(i.a.Component),B=(a(306),a(141)),T=a(190),S=a(330),P=a(338),N=a(333),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={Countries:["none"],SelectedCountries:[]},n.colors=[["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"],["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"]],n.chartTheme={axis:{style:{tickLabels:{fill:"white"}}}},n.dataChoice=["Cumulative total","Cumulative total per 100000 population","Newly reported in last 24 hours","Newly repoted in last 7 days"],n.jsonDataChoice={cases:["Cases - cumulative total","Cases - cumulative total per 100000 population","Cases - newly reported in last 24 hours","Cases - newly reported in last 7 days","Cases - newly reported in last 7 days per 100000 population"],deaths:["Deaths - cumulative total","Deaths - cumulative total per 100000 population","Deaths - newly reported in last 24 hours","Deaths - newly reported in last 7 days","Deaths - newly reported in last 7 days per 100000 population"]},n.clearCountries=n.clearCountries.bind(Object(o.a)(n)),n.RemoveCountry=n.RemoveCountry.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.tse.jackhartman.dev","/who-countries")).then((function(e){if(e.ok)return e.json()})).then((function(t){e.setState((function(e){return{Countries:t.countries}}))}))}},{key:"listClick",value:function(e){var t=this;4===this.state.SelectedCountries.length?console.log("Selected too many countries"):(console.log("List click: ".concat(e)),fetch("".concat("https://api.tse.jackhartman.dev","/worldwide?country=").concat(e)).then((function(e){if(e.ok)return console.log(e),e.json()})).then((function(e){var a=t.state.SelectedCountries;a.push(e.home_data),t.setState((function(e){return{SelectedCountries:a}}))})))}},{key:"clearCountries",value:function(){this.setState((function(e){return{SelectedCountries:[]}}))}},{key:"GetCountryIndex",value:function(e){var t=0;return this.state.SelectedCountries.some((function(a){if(a.Name===e)return t;t++})),t}},{key:"RemoveCountry",value:function(e){var t=this.GetCountryIndex(e);if(t>-1){var a=this.state.SelectedCountries;a.splice(t,1),console.log(a),this.setState((function(e){return{SelectedCountries:a}}))}}},{key:"render",value:function(){var e=this;return Object(v.jsx)(j.a,{fluid:!0,children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(b.a,{xs:2,children:Object(v.jsx)(p.a,{className:"scrollable",style:{width:"14rem",height:"50rem",backgroundColor:"#202B33",color:"white",borderColor:"#A7FFF4"},children:Object(v.jsx)(B.a,{variant:"flush",children:Object(v.jsx)(v.Fragment,{children:1===this.state.Countries.length?Object(v.jsxs)("div",{class:"loader-inner",children:[Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})}),Object(v.jsx)("div",{class:"loader-line-wrap",children:Object(v.jsx)("div",{class:"loader-line"})})]}):this.state.Countries.map((function(t){return Object(v.jsx)(B.a.Item,{style:{backgroundColor:"#202B33",color:"white",borderColor:"#A7FFF4"},onClick:function(){return e.listClick(t)},children:t})}))})})})}),Object(v.jsx)(b.a,{xs:10,children:Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(p.a,{className:"text-white",style:{width:"60rem",marginBottom:"20px",backgroundColor:"#202B33"},children:[Object(v.jsx)(p.a.Header,{as:"h5",children:"Key and data"}),Object(v.jsxs)("h3",{style:{paddingLeft:"20px"},children:["Currently viewing: ",this.dataChoice[this.props.retrievalType]]}),Object(v.jsxs)(p.a.Body,{children:[Object(v.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Color"}),Object(v.jsx)("th",{children:"Country"}),Object(v.jsx)("th",{children:"Cases"}),Object(v.jsx)("th",{children:"Deaths"}),Object(v.jsx)("th",{children:"Actions"})]})}),Object(v.jsx)("tbody",{children:this.state.SelectedCountries.map((function(t,a){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{style:{backgroundColor:e.colors[a+10][0],color:"white"},children:a+1}),Object(v.jsx)("td",{children:t.Name}),Object(v.jsx)("td",{children:t[e.jsonDataChoice.cases[e.props.retrievalType]]}),Object(v.jsx)("td",{children:t[e.jsonDataChoice.deaths[e.props.retrievalType]]}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{type:"button",rel:"tooltip",class:"btn btn-danger btn-sm btn-round btn-icon",onClick:function(){return e.RemoveCountry(t.Name)},title:"Delete",children:"Remove"})})]})}))})]}),Object(v.jsx)(p.a.Link,{onClick:this.clearCountries,children:"Clear"})]})]}),Object(v.jsxs)(p.a,{className:"text-white",style:{width:"60rem",backgroundColor:"#202B33"},children:[Object(v.jsx)(p.a.Header,{as:"h5",children:" Cases Comparison"}),Object(v.jsx)(p.a.Body,{children:"The key with all assosiated colours goes here."}),Object(v.jsxs)(p.a.Body,{children:[Object(v.jsx)(p.a.Title,{children:"Cases Compared"}),Object(v.jsx)("div",{style:{padding:"20px"},children:Object(v.jsx)(S.a,{theme:this.chartTheme,style:{grid:{stroke:"none",parent:{border:"3px solid #ffffff"}}},padding:{left:80,bottom:40,right:20},domainPadding:{x:50,y:50},children:Object(v.jsx)(P.a,{offset:10,children:this.state.SelectedCountries.map((function(t,a){return Object(v.jsx)(N.a,{style:{data:{fill:e.colors[a+10][0]}},data:[{x:t.Name,y:t[e.jsonDataChoice.cases[e.props.retrievalType]]}]})}))})})})]})]}),Object(v.jsxs)(p.a,{className:"text-white",style:{width:"60rem",marginTop:"20px",backgroundColor:"#202B33"},children:[Object(v.jsx)(p.a.Header,{as:"h5",children:"Deaths Comparison"}),Object(v.jsx)(p.a.Body,{children:"The key with all assosiated colours goes here."}),Object(v.jsxs)(p.a.Body,{children:[Object(v.jsx)(p.a.Title,{children:"Deaths Compared"}),Object(v.jsx)(S.a,{theme:this.chartTheme,style:{grid:{stroke:"none",parent:{border:"3px solid #ffffff"}}},padding:{left:80,bottom:40,right:20},domainPadding:{x:50},children:Object(v.jsx)(P.a,{offset:20,children:this.state.SelectedCountries.map((function(t,a){return Object(v.jsx)(N.a,{style:{data:{fill:e.colors[a+10][0]}},data:[{x:t.Name,y:t[e.jsonDataChoice.deaths[e.props.retrievalType]]}]})}))})})]})]})]})})]})})}}]),a}(n.Component),H=a(140),I=a(197),V=a(60),W=a(196),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={View:"findCountry",Data:"null",Home:"null",RetrievalType:0},n.handleAboutClick=n.handleAboutClick.bind(Object(o.a)(n)),n.handleCreateClick=n.handleCreateClick.bind(Object(o.a)(n)),n.handleHomeClick=n.handleHomeClick.bind(Object(o.a)(n)),n.handleSetHomeClick=n.handleSetHomeClick.bind(Object(o.a)(n)),n.handleCompareClick=n.handleCompareClick.bind(Object(o.a)(n)),n.handler=n.handler.bind(Object(o.a)(n)),n.cumulativeTotalClick=n.cumulativeTotalClick.bind(Object(o.a)(n)),n.cumulativeTotalPerPop=n.cumulativeTotalPerPop.bind(Object(o.a)(n)),n.reportedInPastDay=n.reportedInPastDay.bind(Object(o.a)(n)),n.reportedInPastWeek=n.reportedInPastWeek.bind(Object(o.a)(n)),n.reportedInPastWeekPerPop=n.reportedInPastWeekPerPop.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"handler",value:function(e){var t=this;console.log(e),this.setState((function(t){return{View:"loading",Home:e}}),(function(){setTimeout((function(){fetch("".concat("https://api.tse.jackhartman.dev","/worldwide?country=").concat(t.state.Home)).then((function(e){if(e.ok)return console.log(e),e.json()})).then((function(e){console.log(e),t.setState((function(t){return{View:"default",Data:e}})),console.log(t.state.Data)}))}),1e3)}))}},{key:"stateHandler",value:function(){this.setState((function(e){return{View:"loading"}}))}},{key:"getCurrentView",value:function(){return this.state}},{key:"handleNavClick",value:function(e){this.setState((function(e){return{View:"about"}}))}},{key:"handleCreateClick",value:function(){this.setState((function(e){return{View:"create"}}))}},{key:"handleSetHomeClick",value:function(){this.setState((function(e){return{View:"findCountry"}}))}},{key:"handleAboutClick",value:function(){this.setState((function(e){return{View:"about"}}))}},{key:"handleCompareClick",value:function(){this.setState((function(e){return{View:"compare"}}))}},{key:"handleHomeClick",value:function(){"null"!=this.state.Home?this.setState((function(e){return{View:"default"}})):this.setState((function(e){return{View:"findCountry"}}))}},{key:"cumulativeTotalClick",value:function(){this.setState((function(e){return{RetrievalType:0}}))}},{key:"cumulativeTotalPerPop",value:function(){this.setState((function(e){return{RetrievalType:1}}))}},{key:"reportedInPastDay",value:function(){this.setState((function(e){return{RetrievalType:2}}))}},{key:"reportedInPastWeek",value:function(){this.setState((function(e){return{RetrievalType:3}}))}},{key:"reportedInPastWeekPerPop",value:function(){this.setState((function(e){return{RetrievalType:4}}))}},{key:"render",value:function(){var e;return document.title="Covid Analyser","default"===this.state.View?e=Object(v.jsx)(g,{data:this.state.Data,production:this.isProduction,retrievalType:this.state.RetrievalType}):"about"===this.state.View?e=Object(v.jsx)(w,{}):"loading"===this.state.View?e=Object(v.jsx)(D,{}):"findCountry"===this.state.View?e=Object(v.jsx)(A,{action:this.handler,production:this.isProduction}):"compare"===this.state.View&&(e=Object(v.jsx)(R,{production:this.isProduction,retrievalType:this.state.RetrievalType})),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(H.a,{style:{backgroundColor:"#30404D"},className:"text-white",children:[Object(v.jsx)(H.a.Brand,{style:{color:"#ffffff"},children:"G34 Covid Analyser"}),Object(v.jsxs)(I.a,{className:"mr-auto",children:[Object(v.jsx)(E.a,{className:"navButton",style:{paddingRight:"5px"},variant:"primary",onClick:this.handleHomeClick,children:"Home"}),Object(v.jsx)(E.a,{className:"navButton",style:{paddingRight:"5px"},variant:"primary",onClick:this.handleCompareClick,children:"Compare"}),Object(v.jsx)(E.a,{className:"navButton",style:{paddingRight:"5px"},variant:"info",onClick:this.handleAboutClick,children:"About"}),Object(v.jsx)(E.a,{className:"navButton",style:{paddingRight:"5px"},variant:"info",onClick:this.handleSetHomeClick,children:"Set Home Country"}),Object(v.jsxs)(W.a,{id:"dropdown-basic-button",title:"Select your option",children:[Object(v.jsx)(V.a.Item,{href:"#/action-1",onClick:this.reportedInPastDay,children:"Newly Reported in last 24 Hours"}),Object(v.jsx)(V.a.Item,{href:"#/action-2",onClick:this.reportedInPastWeek,children:"Newly Reported in last 7 days"}),Object(v.jsx)(V.a.Item,{onClick:this.reportedInPastWeekPerPop,children:"Newly Reported in last 7 days per 100000 population"}),Object(v.jsx)(V.a.Item,{onClick:this.cumulativeTotalClick,children:"Cumulative total"}),Object(v.jsx)(V.a.Item,{onClick:this.cumulativeTotalPerPop,children:"Cumulative total per 100000 population"})]})]})]}),e]})}}]),a}(n.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,340)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),L()}},[[318,1,2]]]);
//# sourceMappingURL=main.c4af4a7a.chunk.js.map