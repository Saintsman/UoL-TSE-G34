(this["webpackJsonpg34-covid-analyser"]=this["webpackJsonpg34-covid-analyser"]||[]).push([[0],{204:function(e,t,a){},205:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(56),s=a.n(r),c=(a(204),a(39)),l=a(40),o=a(21),d=a(41),h=a(44),u=(a(205),a(206),a(31)),j=a(33),b=a(32),p=a(16),F=a(67),C=a(332),x=a(116),y=a(334),O=a(336),f=a(3),m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("g",{children:[Object(f.jsx)(y.a,Object(x.a)({},this.props)),Object(f.jsx)(O.a,Object(x.a)(Object(x.a)({},this.props),{},{x:200,y:250,orientation:"top",pointerLength:0,cornerRadius:50,flyoutWidth:100,flyoutHeight:100,flyoutStyle:{fill:"black"}}))]})}}]),a}(n.Component),v=[["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"],["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"]],k=function(e){var t={axis:{style:{tickLabels:{fill:"white"}}}},a=["Cases - cumulative total","Cases - cumulative total per 100000 population","Cases - newly reported in last 24 hours","Cases - newly reported in last 7 days","Cases - newly reported in last 7 days per 100000 population"],n=["Deaths - cumulative total","Deaths - cumulative total per 100000 population","Deaths - newly reported in last 24 hours","Deaths - newly reported in last 7 days","Deaths - newly reported in last 7 days per 100000 population"];return Object(f.jsxs)(u.a,{fluid:!0,style:{backgroundColor:"#293742",alignSelf:"center"},children:[Object(f.jsx)(j.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(F.a,{className:"text-white",style:{backgroundColor:"#202B33"},children:[Object(f.jsx)("h1",{children:"Welcome to G34 Covid Analyser"}),Object(f.jsxs)(j.a,{style:{marginBottom:"10px"},children:[Object(f.jsx)(b.a,{}),Object(f.jsx)(b.a,{xs:6,children:Object(f.jsx)(p.a,{style:{backgroundColor:"#193038"},children:Object(f.jsx)(p.a.Body,{children:Object(f.jsxs)("p",{children:["You are currently viewing the data in this mode: ",["Cumulative total","Cumulative total per 100000 population","Newly reported in last 24 hours","Newly repoted in last 7 days"][e.retrievalType],"."]})})})}),Object(f.jsx)(b.a,{})]}),Object(f.jsxs)(j.a,{children:[Object(f.jsxs)(b.a,{children:[Object(f.jsx)("h3",{children:e.data.home_data.Name}),Object(f.jsx)("div",{className:"jumbo-charts",children:Object(f.jsx)(C.a,{animate:{easing:"exp",duration:1e3},data:[{x:"Deaths",y:e.data.home_data[n[e.retrievalType]]},{x:"Cases",y:e.data.home_data[a[e.retrievalType]]}],width:250,height:250,style:{labels:{fontSize:12,fill:"white"},data:{fillOpacity:1}},colorScale:v[0],innerRadius:50,theme:t})}),Object(f.jsx)(p.a,{style:{backgroundColor:"#193038"},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsxs)("h6",{color:"#388087",children:["Deaths: ",e.data.home_data[n[e.retrievalType]]]}),Object(f.jsxs)("h6",{color:"#6fb3b8",children:["Cases: ",e.data.home_data[a[e.retrievalType]]]})]})})]}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)("h3",{children:"Global"}),Object(f.jsx)("div",{className:"jumbo-charts",children:Object(f.jsx)(C.a,{animate:{easing:"exp",duration:1e3},data:[{x:"Deaths",y:e.data.global_data[n[e.retrievalType]]},{x:"Cases",y:e.data.global_data[a[e.retrievalType]]}],width:250,height:250,style:{labels:{fontSize:12,fill:"white"},data:{fillOpacity:1}},colorScale:v[0],innerRadius:50,theme:t})}),Object(f.jsx)(p.a,{style:{backgroundColor:"#193038"},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsxs)("h6",{color:"#388087",children:["Deaths: ",e.data.global_data[n[e.retrievalType]]]}),Object(f.jsxs)("h6",{color:"#6fb3b8",children:["Cases: ",e.data.global_data[a[e.retrievalType]]]})]})})]})]})]})})}),Object(f.jsx)(j.a,{children:e.data.region_data.map((function(i,r){return Object(f.jsx)(b.a,{children:Object(f.jsx)("div",{style:{width:"20rem",backgroundColor:"#293742",alignContent:"center",marginRight:"10px",marginTop:"10px"},children:Object(f.jsx)(p.a,{className:"text-white",style:{width:"20rem",backgroundColor:"#202B33"},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{children:i.Name}),Object(f.jsx)(p.a.Subtitle,{className:"mb-2 text-muted",children:"Deaths / Cases"}),Object(f.jsx)(p.a.Body,{style:{padding:"2px"},children:Object(f.jsx)(C.a,{animate:{easing:"exp",duration:1e3},data:[{x:"Deaths",y:i[n[e.retrievalType]]},{x:"Cases",y:i[a[e.retrievalType]]}],width:250,height:250,style:{labels:{fontSize:12,fill:"white"},data:{fillOpacity:1}},colorScale:v[r],innerRadius:50,theme:t,labelComponent:Object(f.jsx)(m,{})})}),Object(f.jsxs)(p.a.Text,{children:[Object(f.jsxs)("h4",{children:["Cases: ",i[a[e.retrievalType]]]}),Object(f.jsxs)("h4",{children:["Deaths: ",i[n[e.retrievalType]]]})]}),Object(f.jsx)(p.a.Link,{href:"#",children:"Enlarge"}),Object(f.jsx)(p.a.Link,{href:"#",children:"Edit"})]})})})})}))})]})},g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(u.a,{fluid:!0,style:{padding:"5px",backgroundColor:"#293742",alignSelf:"center"},children:Object(f.jsx)(j.a,{style:{width:"100%"},children:Object(f.jsx)(k,{style:{alignSelf:"center"},data:this.props.data,retrievalType:this.props.retrievalType})})})}}]),a}(n.Component);var D=function(){return Object(f.jsx)(u.a,{children:Object(f.jsxs)(F.a,{children:[Object(f.jsx)("h1",{children:"Welcome to G34 Covid Analyser"}),Object(f.jsx)("h3",{children:"Max Pittock"}),Object(f.jsx)("h3",{children:"Galani Anagnostopoulou"}),Object(f.jsx)("h3",{children:"Jack Hartman"}),Object(f.jsx)("h3",{children:"Joeseph Murphy"}),Object(f.jsx)("h3",{children:"Thomas Houghton"})]})})},E=(a(305),function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{class:"loader",children:Object(f.jsxs)("div",{class:"loader-inner",children:[Object(f.jsx)("div",{class:"loader-line-wrap",children:Object(f.jsx)("div",{class:"loader-line"})}),Object(f.jsx)("div",{class:"loader-line-wrap",children:Object(f.jsx)("div",{class:"loader-line"})}),Object(f.jsx)("div",{class:"loader-line-wrap",children:Object(f.jsx)("div",{class:"loader-line"})}),Object(f.jsx)("div",{class:"loader-line-wrap",children:Object(f.jsx)("div",{class:"loader-line"})}),Object(f.jsx)("div",{class:"loader-line-wrap",children:Object(f.jsx)("div",{class:"loader-line"})})]})})})}),w=a(46),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={Countries:["none"]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.tse.jackhartman.dev","/who-countries")).then((function(e){if(e.ok)return e.json()})).then((function(t){e.setState((function(e){return{Countries:t.countries}}))}))}},{key:"render",value:function(){var e=this;return console.log(this.state.Countries),Object(f.jsx)("div",{children:Object(f.jsxs)(u.a,{children:[Object(f.jsxs)(F.a,{className:"text-white",style:{marginTop:"30px",backgroundColor:"#202B33"},children:[Object(f.jsx)("h1",{children:"Welcome to G34 Covid Analyser"}),Object(f.jsx)("p",{children:"Please select the country that you are from:"})]}),Object(f.jsx)(f.Fragment,{children:1===this.state.Countries.length?Object(f.jsx)("center",{children:Object(f.jsx)(E,{})}):this.state.Countries.map((function(t){return Object(f.jsx)(w.a,{variant:"info",style:{margin:"10px"},onClick:function(){e.props.action(t)},children:t})}))})]})})}}]),a}(i.a.Component),B=(a(306),a(140)),T=a(189),S=a(330),P=a(338),N=a(333),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={Countries:["none"],SelectedCountries:[]},n.colors=[["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"],["#388087","#6fb3b8"],["#5D7529","#DBF7A0"],["#36752E","#B3F7AA"],["#317546","#B1F7C6"],["#2F745D","#AFF7DF"],["#347175","#B6F2F7"],["#374775","#BECCF7"],["#4C3374","#CFB6F7"],["#603074","#E1AFF7"],["#75276F","#F79BEF"],["#751930","#F77E9C"],["#751D17","#F7837B"],["#75311A","#F79E80"],["#754E1D","#F7C588"],["#755419","#F7CA7E"],["#746337","#F7E6BE"],["#756D1B","#F7ED83"],["#A8608E","#E1FFDE"],["#A87060","#DEFFF6"],["#A88560","#DEF6FF"],["#A89F60","#E3DEFF"],["#60A8A1","#FFE8DE"],["#6079A8","#FFF5DE"],["#357C8F","#F96B64"],["#37358F","#F9A54F"],["#82358F","#F9E272"],["#8F5435","#76FA85"],["#906C35","#74F6C4"]],n.chartTheme={axis:{style:{tickLabels:{fill:"white"}}}},n.dataChoice=["Cumulative total","Cumulative total per 100000 population","Newly reported in last 24 hours","Newly repoted in last 7 days"],n.jsonDataChoice={cases:["Cases - cumulative total","Cases - cumulative total per 100000 population","Cases - newly reported in last 24 hours","Cases - newly reported in last 7 days","Cases - newly reported in last 7 days per 100000 population"],deaths:["Deaths - cumulative total","Deaths - cumulative total per 100000 population","Deaths - newly reported in last 24 hours","Deaths - newly reported in last 7 days","Deaths - newly reported in last 7 days per 100000 population"]},n.clearCountries=n.clearCountries.bind(Object(o.a)(n)),n.RemoveCountry=n.RemoveCountry.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.tse.jackhartman.dev","/who-countries")).then((function(e){if(e.ok)return e.json()})).then((function(t){e.setState((function(e){return{Countries:t.countries}}))}))}},{key:"listClick",value:function(e){var t=this;4===this.state.SelectedCountries.length?console.log("Selected too many countries"):(console.log("List click: ".concat(e)),fetch("".concat("https://api.tse.jackhartman.dev","/worldwide?country=").concat(e)).then((function(e){if(e.ok)return console.log(e),e.json()})).then((function(e){var a=t.state.SelectedCountries;a.push(e.home_data),t.setState((function(e){return{SelectedCountries:a}}))})))}},{key:"clearCountries",value:function(){this.setState((function(e){return{SelectedCountries:[]}}))}},{key:"GetCountryIndex",value:function(e){var t=0;return this.state.SelectedCountries.some((function(a){if(a.Name===e)return t;t++})),t}},{key:"RemoveCountry",value:function(e){var t=this.GetCountryIndex(e);if(t>-1){var a=this.state.SelectedCountries;a.splice(t,1),console.log(a),this.setState((function(e){return{SelectedCountries:a}}))}}},{key:"render",value:function(){var e=this;return Object(f.jsx)(u.a,{fluid:!0,children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{xs:2,children:Object(f.jsx)(p.a,{className:"scrollable",style:{width:"14rem",height:"50rem",backgroundColor:"#202B33",color:"white",borderColor:"#A7FFF4"},children:Object(f.jsx)(B.a,{variant:"flush",children:this.state.Countries.map((function(t){return Object(f.jsx)(B.a.Item,{style:{backgroundColor:"#202B33",color:"white",borderColor:"#A7FFF4"},onClick:function(){return e.listClick(t)},children:t})}))})})}),Object(f.jsx)(b.a,{xs:10,children:Object(f.jsxs)(u.a,{children:[Object(f.jsxs)(p.a,{className:"text-white",style:{width:"60rem",marginBottom:"20px",backgroundColor:"#202B33"},children:[Object(f.jsx)(p.a.Header,{as:"h5",children:"Key and data"}),Object(f.jsxs)("h3",{style:{paddingLeft:"20px"},children:["Currently viewing: ",this.dataChoice[this.props.retrievalType]]}),Object(f.jsxs)(p.a.Body,{children:[Object(f.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Color"}),Object(f.jsx)("th",{children:"Country"}),Object(f.jsx)("th",{children:"Cases"}),Object(f.jsx)("th",{children:"Deaths"}),Object(f.jsx)("th",{children:"Actions"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsx)(f.Fragment,{children:1===this.state.Countries.length?Object(f.jsx)("center",{children:Object(f.jsx)(E,{})}):this.state.SelectedCountries.map((function(t,a){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{style:{backgroundColor:e.colors[a+10][0],color:"white"},children:a+1}),Object(f.jsx)("td",{children:t.Name}),Object(f.jsx)("td",{children:t[e.jsonDataChoice.cases[e.props.retrievalType]]}),Object(f.jsx)("td",{children:t[e.jsonDataChoice.deaths[e.props.retrievalType]]}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{type:"button",rel:"tooltip",class:"btn btn-danger btn-sm btn-round btn-icon",onClick:function(){return e.RemoveCountry(t.Name)},title:"Delete",children:"Remove"})})]})}))})})]}),Object(f.jsx)(p.a.Link,{onClick:this.clearCountries,children:"Clear"})]})]}),Object(f.jsxs)(p.a,{className:"text-white",style:{width:"60rem",backgroundColor:"#202B33"},children:[Object(f.jsx)(p.a.Header,{as:"h5",children:" Cases Comparison"}),Object(f.jsx)(p.a.Body,{children:"The key with all assosiated colours goes here."}),Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{children:"Cases Compared"}),Object(f.jsx)("div",{style:{padding:"20px"},children:Object(f.jsx)(S.a,{theme:this.chartTheme,style:{grid:{stroke:"none",parent:{border:"3px solid #ffffff"}}},padding:{left:80,bottom:40,right:20},domainPadding:{x:50,y:50},children:Object(f.jsx)(P.a,{offset:10,children:this.state.SelectedCountries.map((function(t,a){return Object(f.jsx)(N.a,{style:{data:{fill:e.colors[a+10][0]}},data:[{x:t.Name,y:t[e.jsonDataChoice.cases[e.props.retrievalType]]}]})}))})})})]})]}),Object(f.jsxs)(p.a,{className:"text-white",style:{width:"60rem",marginTop:"20px",backgroundColor:"#202B33"},children:[Object(f.jsx)(p.a.Header,{as:"h5",children:"Deaths Comparison"}),Object(f.jsx)(p.a.Body,{children:"The key with all assosiated colours goes here."}),Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{children:"Deaths Compared"}),Object(f.jsx)(S.a,{theme:this.chartTheme,style:{grid:{stroke:"none",parent:{border:"3px solid #ffffff"}}},padding:{left:80,bottom:40,right:20},domainPadding:{x:50},children:Object(f.jsx)(P.a,{offset:20,children:this.state.SelectedCountries.map((function(t,a){return Object(f.jsx)(N.a,{style:{data:{fill:e.colors[a+10][0]}},data:[{x:t.Name,y:t[e.jsonDataChoice.deaths[e.props.retrievalType]]}]})}))})})]})]})]})})]})})}}]),a}(n.Component),H=a(139),I=a(196),V=a(60),W=a(195),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={View:"findCountry",Data:"null",Home:"null",RetrievalType:0},n.handleAboutClick=n.handleAboutClick.bind(Object(o.a)(n)),n.handleCreateClick=n.handleCreateClick.bind(Object(o.a)(n)),n.handleHomeClick=n.handleHomeClick.bind(Object(o.a)(n)),n.handleSetHomeClick=n.handleSetHomeClick.bind(Object(o.a)(n)),n.handleCompareClick=n.handleCompareClick.bind(Object(o.a)(n)),n.handler=n.handler.bind(Object(o.a)(n)),n.cumulativeTotalClick=n.cumulativeTotalClick.bind(Object(o.a)(n)),n.cumulativeTotalPerPop=n.cumulativeTotalPerPop.bind(Object(o.a)(n)),n.reportedInPastDay=n.reportedInPastDay.bind(Object(o.a)(n)),n.reportedInPastWeek=n.reportedInPastWeek.bind(Object(o.a)(n)),n.reportedInPastWeekPerPop=n.reportedInPastWeekPerPop.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handler",value:function(e){var t=this;console.log(e),this.setState((function(t){return{View:"loading",Home:e}}),(function(){setTimeout((function(){fetch("".concat("https://api.tse.jackhartman.dev","/worldwide?country=").concat(t.state.Home)).then((function(e){if(e.ok)return console.log(e),e.json()})).then((function(e){console.log(e),t.setState((function(t){return{View:"default",Data:e}})),console.log(t.state.Data)}))}),1e3)}))}},{key:"stateHandler",value:function(){this.setState((function(e){return{View:"loading"}}))}},{key:"getCurrentView",value:function(){return this.state}},{key:"handleNavClick",value:function(e){this.setState((function(e){return{View:"about"}}))}},{key:"handleCreateClick",value:function(){this.setState((function(e){return{View:"create"}}))}},{key:"handleSetHomeClick",value:function(){this.setState((function(e){return{View:"findCountry"}}))}},{key:"handleAboutClick",value:function(){this.setState((function(e){return{View:"about"}}))}},{key:"handleCompareClick",value:function(){this.setState((function(e){return{View:"compare"}}))}},{key:"handleHomeClick",value:function(){"null"!=this.state.Home?this.setState((function(e){return{View:"default"}})):this.setState((function(e){return{View:"findCountry"}}))}},{key:"cumulativeTotalClick",value:function(){this.setState((function(e){return{RetrievalType:0}}))}},{key:"cumulativeTotalPerPop",value:function(){this.setState((function(e){return{RetrievalType:1}}))}},{key:"reportedInPastDay",value:function(){this.setState((function(e){return{RetrievalType:2}}))}},{key:"reportedInPastWeek",value:function(){this.setState((function(e){return{RetrievalType:3}}))}},{key:"reportedInPastWeekPerPop",value:function(){this.setState((function(e){return{RetrievalType:4}}))}},{key:"render",value:function(){var e;return document.title="Covid Analyser","default"===this.state.View?e=Object(f.jsx)(g,{data:this.state.Data,production:this.isProduction,retrievalType:this.state.RetrievalType}):"about"===this.state.View?e=Object(f.jsx)(D,{}):"loading"===this.state.View?e=Object(f.jsx)(E,{}):"findCountry"===this.state.View?e=Object(f.jsx)(A,{action:this.handler,production:this.isProduction}):"compare"===this.state.View&&(e=Object(f.jsx)(R,{production:this.isProduction,retrievalType:this.state.RetrievalType})),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(H.a,{style:{backgroundColor:"#30404D"},className:"text-white",children:[Object(f.jsx)(H.a.Brand,{style:{color:"#ffffff"},children:"G34 Covid Analyser"}),Object(f.jsxs)(I.a,{className:"mr-auto",children:[Object(f.jsx)(w.a,{className:"navButton",style:{paddingRight:"5px"},variant:"primary",onClick:this.handleHomeClick,children:"Home"}),Object(f.jsx)(w.a,{className:"navButton",style:{paddingRight:"5px"},variant:"primary",onClick:this.handleCompareClick,children:"Compare"}),Object(f.jsx)(w.a,{className:"navButton",style:{paddingRight:"5px"},variant:"info",onClick:this.handleAboutClick,children:"About"}),Object(f.jsx)(w.a,{className:"navButton",style:{paddingRight:"5px"},variant:"info",onClick:this.handleSetHomeClick,children:"Set Home Country"}),Object(f.jsxs)(W.a,{id:"dropdown-basic-button",title:"Select your option",children:[Object(f.jsx)(V.a.Item,{href:"#/action-1",onClick:this.reportedInPastDay,children:"Newly Reported in last 24 Hours"}),Object(f.jsx)(V.a.Item,{href:"#/action-2",onClick:this.reportedInPastWeek,children:"Newly Reported in last 7 days"}),Object(f.jsx)(V.a.Item,{onClick:this.reportedInPastWeekPerPop,children:"Newly Reported in last 7 days per 100000 population"}),Object(f.jsx)(V.a.Item,{onClick:this.cumulativeTotalClick,children:"Cumulative total"}),Object(f.jsx)(V.a.Item,{onClick:this.cumulativeTotalPerPop,children:"Cumulative total per 100000 population"})]})]})]}),e]})}}]),a}(n.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,340)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),L()}},[[318,1,2]]]);
//# sourceMappingURL=main.0648236f.chunk.js.map