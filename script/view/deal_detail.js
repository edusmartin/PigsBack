//create function for cout down
var dateFuture = new Date(2013,3,16,0,0,0);

var GetCount = function(){
        dateNow = new Date(); //grab current date
        amount = dateFuture.getTime() - dateNow.getTime(); //calc milliseconds between dates
        delete dateNow;

		days=0;hours=0;mins=0;secs=0;out="";

		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds

		if(days != 0){out += days +" DAY"+((days!=1)?"S":"")+"<span class='spacer'> </span>";}
		if(days != 0 || hours != 0){out += hours +" HR"+((hours!=1)?"S":"")+"<span class='spacer'> </span>";}
		if(days != 0 || hours != 0 || mins != 0){out += mins +" MIN"+((mins!=1)?"S":"")+"<span class='spacer'> </span>";}
		out += secs +" SEC";
		
		console.log("1");
		
		return out;
        
};


// define your toolbar - note the handler
MegaDeal.tb = new Ext.Toolbar({
	id:'dealTabs',
	dock:'top',
	ui: 'plain',
	layout: {
			pack: 'center',
			align: 'strech'
    },
	items:[
	  {
		  text:'Details',
		  cls: 'tab',
		  handler:function(){MegaDeal.myLayout.setActiveItem(0)}
	  },{
		  text:'Terms & Conditions',
		  cls: 'tab',
		  handler:function(){MegaDeal.myLayout.setActiveItem(1)}
	  },{
		  text:'Location',
		  cls: 'tab',
		  handler:function(){MegaDeal.myLayout.setActiveItem(2)}
	  }
	]
});


// layout the content panels
// these panels plus the toolbar will be part of the layout called "myLayout"

MegaDeal.p1 = new Ext.Panel({
	cls: 'detailPanel',
	html:'<div class="detailText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et </div>'
	//style:'background-color:#7dc892',
	
});

MegaDeal.p2 = new Ext.Panel({
	cls: 'detailPanel',
	html:'<div class="detailText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab </div>'
	//style:'background-color:#7db9c8',
});

MegaDeal.p3 = new Ext.Panel({
	cls: 'detailPanel',
	html:'<div class="detailText">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot </div>'
	//style:'background-color:#7d8bc8',
});


// Here as in the first example you see everything put together - exactly the same as before
MegaDeal.myLayout = new Ext.Panel({
	id:'detailsContent',
	height:200,
	items:[MegaDeal.p1,MegaDeal.p2,MegaDeal.p3],
	dockedItems:[MegaDeal.tb],
	html: '<div class="border"></div>',
	layout: {
    type: 'card',
},
	cardSwitchAnimation: {type: 'fade', duration:500}
});

MegaDeal.countDown = {
	id : 'countDown',
	dock : 'top',
	 html: '<div class="countdown"><div class="count">'+GetCount()+'</div></div>',
};

MegaDeal.itemContentPhoto = {
	id : 'itemContentPhoto',
	dock : 'top',
	html: '<div class="photo"><img src="resources/images/item-detail-img.jpg" width="272" height="160"></div>',
};

MegaDeal.itemDesc = {
  	id : 'itemDesc',
  	height :100,
   	autoScroll: true,
	centered: true,
	scroll: 'vertical',
  	dock : 'top',
  	html: '<div class="dealDesc"> <div class="price">€100.50</div><div class="discount">Discount<br/><strong>25%</strong></div><div class="sold">1000 sold</div><div class="itemText">25 instead of 50 for 2 Main Course Dishes plus a Bottle of  asda 25 instead of 50 for 2 Main Course Dishes plus a Bottle of 25 instead of 50 for 2 Main Course Dishes plus a Bottle of  asda</div></div>',
};

MegaDeal.buyButtonSup = new Ext.Button({
	id: 'buyButton',
	ui:'small',
	width: 280,
	height :25,
    listeners: {
      tap: function() {
		  MegaDeal.Viewport.setActiveItem('loginPanel', {type:'slide', direction:'left'});
      /*Ext.Ajax.request({
        success: updateStatus,
        failure: updateStatus 
	  });*/
     }
   }
});

MegaDeal.buyButtonInf = new Ext.Button({
	id: 'buyButtonInf',
	ui:'plain',
	width: 280,
	height :50,
    listeners: {
      tap: function() {
		   MegaDeal.Viewport.setActiveItem('loginPanel', {type:'slide', direction:'left'});
      /*Ext.Ajax.request({
        success: updateStatus,
        failure: updateStatus 
	  });*/
     }
   }
});