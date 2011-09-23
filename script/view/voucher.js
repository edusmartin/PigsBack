var popup = new Ext.Panel({
			id:'popVoucher',
            floating: true,
            centered: true,
            modal: true,
            width: 310,
            height: 257,
            styleHtmlContent: true,
			ui:'plain',
			cls: 'pop',
          	baseCls: '',
			items:[{
                xtype: 'panel',
				id:'popText',
			    height: 140,
				 styleHtmlContent: true,
			    html: 'This will remove the voucher from the system. Only do this once at the point of purchases. Are you sure you wish to redeem the voucher?',
				cls: 'texto',
				baseCls: '',
			   //inputType:'onofftoggle',
                //label: 'Push Notification 1',
				//cls: 'item',
            },{
               xtype: 'button',
			   layout : 'hbox',
               text: 'OK',
			   ui:'confirm',
			   cls: 'loginBtn',
			   handler: function(){
                  popup.hide();
              }
            },{
               xtype: 'button',
			   layout : 'hbox',
               text: 'CANCEL',
			   ui:'confirm',
			   cls: 'loginBtn',
			   handler: function(){
                  popup.hide();
              }
            }],
            dockedItems: [{
                xtype: 'toolbar',
				id:'popTitle',
				cls: 'title',
          		baseCls: '',
                title: 'Redeem Voucher',
              /*  items: [{
                    xtype: 'spacer'
                },{
                    text: 'Close',
                    handler: function(){
                        popup.hide();
                    }
                }]*/
       }]
 });

var getVoucher = function(){
		MegaDeal.Viewport.setActiveItem('summaryPanel',{type:'slide', direction:'right'});
};

var voucherTopBar = [
	{ ui: 'plain', text: 'BACK' , id: 'backVoucherBtn'},
    { ui: 'small', text: 'USE THIS MEGA DEAL' , id: 'refundBtn'},
	
	]

MegaDeal.voucherNavBar = new Ext.Toolbar({
	id: 'voucherNavBar',
	//title:'Purchase Mega Deal',
	dock : 'top',
	//html: '<div class="simpleHeader">Sign Up</div>',
	items: [voucherTopBar],
	defaults: { handler: function(btn, evt) {
		if (btn.id == "backVoucherBtn" ) {
			 MegaDeal.Viewport.setActiveItem('summaryPanel',{type:'slide', direction:'right'});
			 //setActiveItem('list')
		}
		if (btn.id == "refundBtn" ) {
			 Ext.Msg.alert('Status', 'Refund');
			 //setActiveItem('list')
		}
	} },
});

MegaDeal.voucherFooter = new Ext.Panel({
 		id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.voucherMain = new Ext.Panel({
 	id: 'vouchure',
	width: 300,
	html:'<div class="content"><div class="title">€17 instead of €35 for <span>Noodle Facial</span></div>    <div class="description"><img src="resources/images/item-img.jpg" width="123" height="73" align="left" hspace="5" >      <span>Voucher Code: 1234567<br/>      Redemption Code: 1234567<br/>      Expires: 05/05/2011<br/><br/></span>    25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare25 instea</div><div class="codeBar"><img src="resources/images/codeBar.png" width="262" height="165"></div>  </div>',});

MegaDeal.vButton = new Ext.Button({
	id: 'vButton',
	ui:'small',
	text:'Redeem',
	width:118,
	height:21,
    listeners: {
      tap: function() {
		  popup.show();
		 //Ext.Msg.alert('Status', 'Use this Mega Deal');
     }
   }
});

MegaDeal.vcont = new Ext.Panel({
	id: 'vcont',
	autoScroll: true,
	scroll: 'vertical',
	height:'80%',
	items:[MegaDeal.voucherMain, MegaDeal.vButton],
});



MegaDeal.voucherPanel = new Ext.Panel({
	id:'voucherPanel',
	items:[],
	dockedItems:[MegaDeal.voucherNavBar, MegaDeal.vcont, MegaDeal.voucherFooter],
	//html: '<div class="border"></div>',
});