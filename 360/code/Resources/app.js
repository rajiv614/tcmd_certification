
var ot = {};

(function(){
	
	ot.ui = {};
	ot.controller = {};
	ot.model = {};
	
	ot.model.desc = [];
	ot.model.desc[0] = 'Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan\'s first number one in Britain since New Morning in 1970.';
	ot.model.desc[1] = 'test2';
	ot.model.desc[2] = 'test3';
	
	//ot.data.picture = [{},{},{}];
	
	ot.ui.lblArtist = Ti.UI.createLabel({
			text: 'Bob Dylan',
			width: 320,
			height: 'auto',
			top: 260,
			textAlign: 'center',
			font: {fontSize: 22, fontFamily: 'AmericanTypewriter-Bold'}
		});
		
	ot.ui.audioContols = Ti.UI.createView({
		backgroundColor: '#333',
		backgroundImage: 'images/dylan.png',
		width: 240,
		height: 240,
		top: 10
	})
	
	ot.ui.additionalCopy = Ti.UI.createLabel({
		text: ot.model.desc[0],
		width: 240,
		height: 240,
		bottom: 10,
		font: {fontSize: 10, fontFamily: 'AmericanTypewriter'}
	});
	
	
	ot.controller.isLandscape = function(o) {
		o = o || Ti.UI.orientation;
		return o == Ti.UI.LANDSCAPE_LEFT || o == Ti.UI.LANDSCAPE_RIGHT;
	}
	
	ot.controller.isPortrait = function(o) {
		o = o || Ti.UI.orientation;
		return o == Ti.UI.PORTRAIT || o == Ti.UI.UPSIDE_PORTRAIT;
	}
	
	Ti.Gesture.addEventListener('orientationchange', function(e) {
		if (ot.controller.isLandscape(e.orientation)) {
			Ti.API.info('landscape');
			
			ot.ui.lblArtist.left= 250;
			ot.ui.lblArtist.top = 240;
			
			ot.ui.audioContols.left = 10;
			ot.ui.audioContols.top = null;
		} else {
			Ti.API.info('portrait');
			
			ot.ui.lblArtist.left= null;
			ot.ui.lblArtist.top = 260;
			
			ot.ui.audioContols.left = null;
			ot.ui.audioContols.top = 10;
			
			
		}
		Ti.API.info('changed');
	});

	
	ot.ui.createWindow = function() {
		
		var win = Ti.UI.createWindow({
			backgroundColor: '#fff',
			orientationModes: [
				Ti.UI.LANDSCAPE_LEFT,
				Ti.UI.LANDSCAPE_RIGHT,
				Ti.UI.PORTRAIT,
				Ti.UI.UPSIDE_PORTRAIT
			]
		});
	
		win.add(ot.ui.lblArtist);
		win.add(ot.ui.additionalCopy);
		win.add(ot.ui.audioContols);
		
		return win;
	}
	
})();

var w = ot.ui.createWindow();
	w.open();