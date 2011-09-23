MegaDeal.congratulationsHeader = new Ext.Panel({
 		id : 'congratulationsHeader',
		dock : 'top',
		title:'Confirmation',
	    //layout : 'vbox',
	    html: '<div class="simpleHeader">Confirmation</div>'
});

MegaDeal.congratulationsFooter = new Ext.Panel({
 		id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.congratulationsMain = new Ext.Panel({
 	id: 'congratulations',
	html:'<div class="content">  <div class="title"><span>Congratulations your order has been received</span></div>    <div class="description"><img src="resources/images/item-img.jpg" width="123" height="73" align="left" hspace="5" >      <span>Voucher Code: 1234567<br/>      Redemption Code: 1234567<br/>      Expires: 05/05/2011<br/><br/></span>    25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instea</div> </div>',
});

MegaDeal.congratulationsContent = new Ext.Panel({
	id: 'congratulationsContent',
	autoScroll: true,
	scroll: 'vertical',
	height:'90%',
	items:[MegaDeal.congratulationsMain],
});

MegaDeal.congratulationsMsg = new Ext.Panel({
	id:'congratulationsMsg',
	items:[],
	dockedItems:[MegaDeal.congratulationsHeader, MegaDeal.congratulationsContent, MegaDeal.congratulationsFooter],
	//html: '<div class="border"></div>',
});