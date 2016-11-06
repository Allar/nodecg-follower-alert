(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 800,
	height: 200,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.TwitchLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// svg3355
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6441A5").s().p("ABaCbIAAk1IBoAAIAAE1gAjBCbIAAk1IBoAAIAAE1g");
	this.shape.setTransform(7.8,-16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6441A5").s().p("AlDJ9IAAiDIjqAAIAAumIA0jQIQnAAIAALXImgGfIjNAAIiCCDgAmRDcIDqAAIAACdICcidIEbAAIC3i2IAAo5ItYAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-63.7,111.8,127.4);


(lib.ThanksForFollowing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Thanks For Following", "50px 'Roboto Lt'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 492;
	this.text.parent = this;
	this.text.setTransform(247.9,-30);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-38,513,82);


(lib.FollowerText = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.followerText = new cjs.Text("NEW FOLLOWER", "64px 'Roboto Lt'", "#FFFFFF");
	this.followerText.name = "followerText";
	this.followerText.textAlign = "center";
	this.followerText.lineHeight = 79;
	this.followerText.lineWidth = 634;
	this.followerText.parent = this;
	this.followerText.setTransform(0.1,-38.4);
	this.followerText.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.followerText).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.9,-43.4,651,94);


(lib.BeamLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6D3C97","#3EC7F4"],[0,1],56.8,-111.3,-56.7,111.4).s().p("AnlR/QjghfititQiuithejgQhijogBj+QABj8BijpQBejgCuitQCtiuDgheQDphiD8gBQD+ABDoBiQDgBeCtCuQCtCtBfDgQBjDpAAD8QAAD+hjDoQhfDgitCtQitCtjgBfQjoBjj+AAQj8AAjphjgAyQguQgUADAAArQAADyBdDdQBbDWCkCkQCkCkDWBbQDdBdDxAAQBlAAhHitQgdhIi4lXQEyAqEEkEQECkBgnkwQFOC1BPAgQCtBFAAhoQAAjwhdjeQhajVililQikikjWhaQjchdjyAAQgrgBgDAVQgEATAfApQANAQC7DJQCoCzBdCPQCHDNAZC5Qlki/jFg6QkqhYiGCFQiGCIBWEpQA5DFC+FhQi4gajNiHQiOheiximQjHi5gRgNQglgcgTAAIgEAAg");
	this.shape.setTransform(125,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262262").s().p("AmuGvQiziyAAj9QAAj7CzizQCzizD7AAQD8AACzCzQCzCzAAD7QAAD8izCzQizCzj8AAQj7AAizizg");
	this.shape_1.setTransform(127.7,127.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnTRfQjehYipiiQirijhejWQhgjfAAj6QAAj4BhjkQBejdCqiqQCqiqDdheQDkhgD5AAQD6AADiBgQDaBeCmCqQCmCqBaDdQBeDkAAD5QAAD7heDeQhZDWinCjQilChjbBYQjhBaj7AAQj6AAjjhag");
	this.shape_2.setTransform(124.3,124.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.PlatformLogo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{beam:0,twitch:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.BeamLogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,125,125);

	this.instance_1 = new lib.TwitchLogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.3,2.256,2.256,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,250);


// stage content:



(lib.FollowerAlert = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:2,stop:179});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.showAlert = function(name, platform) {
			this.followerName = name;
			this.followerPlatform = platform;
			this.gotoAndPlay("start");
		}
	}
	this.frame_2 = function() {
		this.platformLogo.gotoAndStop(this.followerPlatform);
	}
	this.frame_3 = function() {
		this.platformLogo.gotoAndStop(this.followerPlatform);
	}
	this.frame_50 = function() {
		this.followerText.followerText.text = this.followerName;
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(47).call(this.frame_50).wait(129).call(this.frame_179).wait(1));

	// Layer 5
	this.platformLogo = new lib.PlatformLogo();
	this.platformLogo.parent = this;
	this.platformLogo.setTransform(400,100,0.04,0.04);
	this.platformLogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.platformLogo).wait(2).to({_off:false},0).to({regX:0.7,scaleX:0.5,scaleY:0.5,rotation:360,x:400.3},13).to({rotation:0,x:85.4},15).wait(130).to({regX:0,scaleX:0.04,scaleY:0.04,x:480},18).to({_off:true},1).wait(1));

	// Layer 7
	this.instance = new lib.ThanksForFollowing();
	this.instance.parent = this;
	this.instance.setTransform(321.4,100,0.016,0.016,0,0,0,247.8,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,x:477.2},15).wait(11).to({regX:247.9,scaleX:0.66,scaleY:0.66,x:480.1,y:32},9,cjs.Ease.get(1)).wait(38).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Layer 6
	this.followerText = new lib.FollowerText();
	this.followerText.parent = this;
	this.followerText.setTransform(480,100,0.013,0.013,0,180,0);
	this.followerText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.followerText).wait(50).to({_off:false},0).to({regX:0.8,regY:-1.4,scaleX:1,scaleY:1,skewX:0,x:480.1,y:98.6},18,cjs.Ease.get(1)).wait(92).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01,skewX:180,x:408,y:100},18).to({_off:true},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.529)").s().p("AguAvIAAhdIBdAAIAABdg");
	this.shape.setTransform(400,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.529)").s().p("Ai8BRIAAihIF5AAIAAChg");
	this.shape_1.setTransform(400,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.525)").s().p("AlJBzIAAjlIKTAAIAADlg");
	this.shape_2.setTransform(400,100);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.525)").s().p("AnXCVIAAkpIOvAAIAAEpg");
	this.shape_3.setTransform(400,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.525)").s().p("AplC3IAAltITLAAIAAFtg");
	this.shape_4.setTransform(400,100);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.525)").s().p("ArzDZIAAmxIXnAAIAAGxg");
	this.shape_5.setTransform(400,100);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.522)").s().p("AuBD7IAAn1IcDAAIAAH1g");
	this.shape_6.setTransform(400,100);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.522)").s().p("AwOEdIAAo5MAgeAAAIAAI5g");
	this.shape_7.setTransform(400,100);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,102,102,0.522)").s().p("AycE/IAAp9MAk5AAAIAAJ9g");
	this.shape_8.setTransform(400,100);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,102,102,0.518)").s().p("A0qFhIAArBMApVAAAIAALBg");
	this.shape_9.setTransform(400,100);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,102,102,0.518)").s().p("A24GDIAAsFMAtxAAAIAAMFg");
	this.shape_10.setTransform(400,100);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,102,102,0.518)").s().p("A5GGlIAAtJMAyNAAAIAANJg");
	this.shape_11.setTransform(400,100);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,102,102,0.518)").s().p("A7THHIAAuNMA2nAAAIAAONg");
	this.shape_12.setTransform(400,100);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,102,102,0.514)").s().p("A9hHpIAAvRMA7DAAAIAAPRg");
	this.shape_13.setTransform(400,100);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,102,102,0.514)").s().p("A/vILIAAwVMA/fAAAIAAQVg");
	this.shape_14.setTransform(400.1,100);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,102,102,0.514)").s().p("Egh9AItIAAxaMBD7AAAIAARag");
	this.shape_15.setTransform(400,100);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,102,102,0.51)").s().p("EgkLAJQIAAyfMBIXAAAIAASfg");
	this.shape_16.setTransform(400,100);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,102,102,0.51)").s().p("EgmYAJyIAAziMBMxAAAIAATig");
	this.shape_17.setTransform(400,100);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,102,102,0.51)").s().p("EgomAKTIAA0lMBRNAAAIAAUlg");
	this.shape_18.setTransform(400,100);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,102,102,0.51)").s().p("Egq0AK1IAA1pMBVpAAAIAAVpg");
	this.shape_19.setTransform(400.1,100);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,102,102,0.506)").s().p("EgtCALYIAA2vMBaFAAAIAAWvg");
	this.shape_20.setTransform(400,100);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,102,102,0.506)").s().p("EgvPAL6IAA3zMBefAAAIAAXzg");
	this.shape_21.setTransform(400.1,100);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(102,102,102,0.506)").s().p("EgxdAMcIAA42MBi7AAAIAAY2g");
	this.shape_22.setTransform(400,100);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,102,102,0.502)").s().p("EgzrAM9IAA55MBnXAAAIAAZ5g");
	this.shape_23.setTransform(400.1,100);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(102,102,102,0.502)").s().p("Eg15ANfIAA6+MBrzAAAIAAa+g");
	this.shape_24.setTransform(400.1,100);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,102,102,0.502)").s().p("Eg4GAOCIAA8DMBwNAAAIAAcDg");
	this.shape_25.setTransform(400.1,100);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(102,102,102,0.502)").s().p("Eg6VAOkIAA9GMB0rAAAIAAdGg");
	this.shape_26.setTransform(400.1,100);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,102,102,0.498)").s().p("Eg8iAPFIAA+JMB5FAAAIAAeJg");
	this.shape_27.setTransform(400.1,100);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(102,102,102,0.498)").s().p("Eg+wAPnIAA/OMB9hAAAIAAfOg");
	this.shape_28.setTransform(400.1,100);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,102,102,0.498)").s().p("Eg7bAOyIAA9jMB23AAAIAAdjg");
	this.shape_29.setTransform(400.1,100);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(102,102,102,0.498)").s().p("Eg4FAN9IAA75MBwLAAAIAAb5g");
	this.shape_30.setTransform(400.1,100);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(102,102,102,0.498)").s().p("Eg0wANJIAA6QMBphAAAIAAaQg");
	this.shape_31.setTransform(400.1,100);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(102,102,102,0.498)").s().p("EgxbAMUIAA4nMBi3AAAIAAYng");
	this.shape_32.setTransform(400.1,100);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(102,102,102,0.498)").s().p("EguGALfIAA29MBcNAAAIAAW9g");
	this.shape_33.setTransform(400.1,100);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(102,102,102,0.498)").s().p("EgqwAKqIAA1TMBVhAAAIAAVTg");
	this.shape_34.setTransform(400.1,100);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(102,102,102,0.498)").s().p("EgnaAJ1IAAzpMBO1AAAIAATpg");
	this.shape_35.setTransform(400.1,100);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(102,102,102,0.498)").s().p("EgkGAJAIAAx/MBINAAAIAAR/g");
	this.shape_36.setTransform(400.1,100);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(102,102,102,0.498)").s().p("EggwAILIAAwVMBBhAAAIAAQVg");
	this.shape_37.setTransform(400.1,100);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(102,102,102,0.498)").s().p("A9aHWIAAurMA61AAAIAAOrg");
	this.shape_38.setTransform(400.1,100);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(102,102,102,0.498)").s().p("A6GGiIAAtCMA0NAAAIAANCg");
	this.shape_39.setTransform(400.1,100);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(102,102,102,0.498)").s().p("A2wFtIAArYMAthAAAIAALYg");
	this.shape_40.setTransform(400.1,100);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(102,102,102,0.498)").s().p("AzaE4IAApvMAm1AAAIAAJvg");
	this.shape_41.setTransform(400.1,100);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(102,102,102,0.498)").s().p("AwGEDIAAoFMAgNAAAIAAIFg");
	this.shape_42.setTransform(400.1,100);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(102,102,102,0.498)").s().p("AswDOIAAmbIZhAAIAAGbg");
	this.shape_43.setTransform(400.1,100);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(102,102,102,0.498)").s().p("ApaCZIAAkxIS1AAIAAExg");
	this.shape_44.setTransform(400.1,100);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(102,102,102,0.498)").s().p("AmFBkIAAjHIMLAAIAADHg");
	this.shape_45.setTransform(400.1,100);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(102,102,102,0.498)").s().p("AiwAvIAAhdIFhAAIAABdg");
	this.shape_46.setTransform(400.1,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},130).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;