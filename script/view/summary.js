var getVoucher = function(){
		MegaDeal.Viewport.setActiveItem('voucherPanel',{type:'slide', direction:'left'});
};

var summaryTopBar = [
    { ui: 'small', text: 'USE THIS MEGA DEAL' , id: 'summaryBtn'},
	]

MegaDeal.summaryNavBar = new Ext.Toolbar({
	id: 'summaryNavBar',
	//title:'Purchase Mega Deal',
	dock : 'top',
	//html: '<div class="simpleHeader">Sign Up</div>',
	items: [summaryTopBar],
	defaults: { handler: function(btn, evt) {
		if (btn.id == "backSignupBtn" ) {
			 Ext.Msg.alert('Status', 'Use this Mega Deal');
			 //setActiveItem('list')
		}
	} },
});

MegaDeal.summaryFooter = new Ext.Panel({
 		id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.summaryMain = new Ext.Panel({
 	id: 'summary',
	width: 300,
	html:'<div class="content">    <div class="title">€17 instead of €35 for <span>Noodle Facial</span></div>     <div class="summaryNext"><img src="resources/images/summaryNext.png" width="16" height="72" align="left" hspace="5" ></div>    <div class="description"><img src="resources/images/item-img.jpg" width="123" height="73" align="left" hspace="5" >      <span>Voucher Code: 1234567<br/>      Redemption Code: 1234567<br/>      Expires: 05/05/2011<br/><br/></span>    25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instea</div><div class="termsCnd"><div class="termstitle">Terms & Conditions</div><div class="text">25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian </div></div>  </div>',});

MegaDeal.redeemButton = new Ext.Button({
	id: 'redeemButton',
	ui:'small',
	text:'Redeem',
	width:118,
	height:21,
    listeners: {
      tap: function() {
		 Ext.Msg.alert('Status', 'Use this Mega Deal');
     }
   }
});

MegaDeal.summaryContent = new Ext.Panel({
	id: 'summaryContent',
	autoScroll: true,
	scroll: 'vertical',
	height:'100%',
	items:[MegaDeal.summaryMain, MegaDeal.redeemButton],
});



MegaDeal.summaryPanel = new Ext.Panel({
	id:'summaryPanel',
	items:[MegaDeal.summaryContent],
	dockedItems:[MegaDeal.summaryNavBar, MegaDeal.summaryFooter],
	//html: '<div class="border"></div>',
	listeners: {
                body: {
                    tap: getVoucher,
                    delegate: '.summaryNext img'     
               }
    }
});