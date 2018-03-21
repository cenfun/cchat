(function(window) {
	var u = window.location.href;
	if (u.indexOf("/forum-12-1.html") != -1) {
		return;
	}
	var d = new Date();
	var time = d.getHours();
	var week = d.getDay();
	if (week == 0 || week == 6 || (time <= 8 || time >= 18)) {
		var url = "http://cchat.sinaapp.com/cchat.swf";
		var msie = /msie/.test(navigator.userAgent.toLowerCase());
		var htm = '<object ';
		htm += msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ' : 'type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" data="'+url+'" ';
		htm += 'width="100%" height="395" id="cchat_cmpbbs"'
		htm += msie ? '><param name="movie" value="'+url+'" />' : '>';
		
		var vars = [];
		if (week == 0 || week == 6 || (week == 5 && time >= 19)) {
			vars.push("auto_live=1");
		}
		
		var d = document.getElementsByTagName("strong");
		if (d.length) {
			for (var i = 0; i < d.length; i ++) {
				var s = d.item(i);
				var c = String(s.getAttribute("class"));
				if (c && c.indexOf("vwmy") != -1)	{
					var a = s.getElementsByTagName("a");
					if (a) {
						var n = a.item(0).innerHTML;
						if (n != "cenfun") {
							vars.push("username=" + n);
						}
					}
				}
			}
			
		}
		
		htm += '<param name="flashvars" value="' + vars.join("&") + '" />';
		htm += '</object>';
		document.write(htm);
	}
})(window);