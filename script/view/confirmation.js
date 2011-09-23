MegaDeal.confirmationHeader = new Ext.Panel({
 		id : 'confirmHeader',
		dock : 'top',
		title:'Confirmation',
	    //layout : 'vbox',
	    html: '<div class="simpleHeader">Confirmation</div>'
});

MegaDeal.confirmationFooter = new Ext.Panel({
 		id : 'logoC',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.confirmationMain = new Ext.Panel({
 	id: 'confirmation',
	width: 300,
	 ui: 'plain',
	 cls: '',
      baseCls: '',
	html:'<div class="content">    <div class="description"><img src="resources/images/item-img.jpg" width="123" height="73" align="left" hspace="5" >      <span>Voucher Code: 1234567<br/>      Redemption Code: 1234567<br/>      Expires: 05/05/2011<br/><br/></span>    25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instea</div><div class="buyDetails"><div class="singleAmount">Single Amount<br/>€75</div>  <div class="amount">Amount</div><div class="total">Total<br/>€75</div><div class="totalText">Total</div><div class="totalValue">€75</div></div>  </div>',
	 items: [{
		 		  xtype: 'spinnerfield',
				  ui:'small',
				  name : 'cant',
				  //label: 'cant'
				  cls: 'spinner',
			     // baseCls: '',
     }]
});

MegaDeal.confirmBuyButton = new Ext.Button({
	id: 'confirmBuyButton',
	ui:'plain',
	width: 280,
	height:25,
    listeners: {
      tap: function() {
		  MegaDeal.Viewport.setActiveItem('congratulationsMsg', {type:'fade'});
     }
   }
});

MegaDeal.confirmationContent = new Ext.Panel({
	id: 'confirmationContent',
	autoScroll: true,
	scroll: 'vertical',
	height:'90%',
	html:'<div class="content"></div>',
	items:[MegaDeal.confirmationMain, MegaDeal.confirmBuyButton],
});



MegaDeal.confirmationBuy = new Ext.Panel({
	id:'confirmationBuy',
	items:[],
	dockedItems:[MegaDeal.confirmationHeader, MegaDeal.confirmationContent, MegaDeal.confirmationFooter],
	//html: '<div class="border"></div>',
});