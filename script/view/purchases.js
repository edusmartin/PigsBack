var NextStep = function(){
		MegaDeal.Viewport.setActiveItem('summaryPanel',{type:'slide', direction:'left'});
};

MegaDeal.purchasesSearch = new Ext.form.FormPanel({
		  id: 'search-panel',
		  dock : 'top',
		  height:80,
		 // centered: true,
		  hideOnMaskTap: false,
		  ui: 'plain',
		  cls: '',
          baseCls: '',
		  items: [{
		  xtype: 'searchfield',
		  name: 'searchDeal',
		  cls: 'search',
		  inputCls: 'search'
          //baseCls: 'search',
	  }]
});
// define your toolbar - note the handler
MegaDeal.purchasesTabs = new Ext.Toolbar({
	id:'purchasesTabs',
	width:280,
	dock:'top',
	ui: 'plain',
	layout: {
			pack: 'center',
			align: 'strech'
    },
	items:[
	  {
		  text:'Active',
		  cls: 'tab',
		  handler:function(){MegaDeal.purchasesTab.setActiveItem(0)}
	  },{
		  text:'Pending',
		  cls: 'tab',
		  handler:function(){MegaDeal.purchasesTab.setActiveItem(1)}
	  },{
		  text:'Expering Soon',
		  cls: 'tab',
		  handler:function(){MegaDeal.purchasesTab.setActiveItem(2)}
	  },{
		  text:'used',
		  cls: 'tab',
		  handler:function(){MegaDeal.purchasesTab.setActiveItem(3)}
	  }
	]
});


// layout the content panels
// these panels plus the toolbar will be part of the layout called "myLayout"

MegaDeal.purchases_p1 = new Ext.Panel({
	cls: 'purchasesPanel',
	html:'<div class="itemContainer">      <div class="item">        <div class="item-img"><img src="resources/images/item-img.jpg" width="123" height="73"></div>        <div class="title">Luxury Pizza Pasta</div>        <div class="price">€25</div>        <div class="discount">Discount<br/>          <strong>25%</strong></div>        <div class="itemText">25 instead of 50 for 2 Main Course Dishes plus a Bottle of </div>        <div class="next"><img src="resources/images/next.png" width="17" height="119"></div>      </div>      <div class="item">        <div class="item-img"><img src="resources/images/item-img.jpg" width="123" height="73"></div>        <div class="title">Luxury Pizza Pasta</div>        <div class="price">€25</div>        <div class="discount">Discount<br/>          <strong>25%</strong></div>        <div class="itemText">25 instead of 50 for 2 Main Course Dishes plus a Bottle of </div>        <div class="next"><img src="resources/images/next.png" width="17" height="119"></div>      </div>    </div>',
	//style:'background-color:#7dc892',
	
});

MegaDeal.purchases_p2 = new Ext.Panel({
	cls: 'purchasesPanel',
	html:'<div class="detailText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab </div>'
	//style:'background-color:#7db9c8',
});

MegaDeal.purchases_p3 = new Ext.Panel({
	cls: 'purchasesPanel',
	html:'<div class="detailText">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot </div>'
	//style:'background-color:#7d8bc8',
});

MegaDeal.purchases_p4 = new Ext.Panel({
	cls: 'purchasesPanel',
	html:'<div class="detailText">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot </div>'
	//style:'background-color:#7d8bc8',
});

// Here as in the first example you see everything put together - exactly the same as before
MegaDeal.purchasesTab = new Ext.Panel({
	id:'purchasesTab',
	height:305,
	items:[MegaDeal.purchases_p1,MegaDeal.purchases_p2,MegaDeal.purchases_p3,MegaDeal.purchases_p4],
	dockedItems:[MegaDeal.purchasesTabs],
	html: '<div class="border"></div>',
	layout: {
    type: 'card',
},
	cardSwitchAnimation: {type: 'fade', duration:500},
	listeners: {
                body: {
                    tap: NextStep,
                    delegate: '.next'     
               }
    }
});
