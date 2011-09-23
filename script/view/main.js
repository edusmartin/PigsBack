MegaDeal = new Ext.Application({
    name: "MegaDeal",
	icon: 'icon.png',
    glossOnIcon: false,
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',

launch: function() {
	
	var buttonsSpecTop = [
    { ui: 'plain', text: 'BACK' , id: 'backButton'},
	]
	
	var normarTopBar = [
    { ui: 'plain', text: 'BACK' , id: 'backButton'},
	{ xtype: 'spacer', id: 'spacer'},
	{ ui: 'plain', id: 'reqRefund'}
	]
	
	 MegaDeal.note = new Ext.form.FormPanel({
		  id: 'pigForm',
		  dock : 'top',
		  //floating: true,
		  //scroll:'both',
		  centered: true,
          //modal: true,
          //draggable: true,
		 // floatingCls: 'x-floating',
		  hideOnMaskTap: false,
		  ui: 'plain',
		  cls: '',
          baseCls: '',
		   //title: 'Single Select (in fieldset)',
		  items: [{
		  xtype: 'selectfield',
		  name: 'options',
		  cls: 'pigSelect',
          baseCls: 'pigSelect',
		 
		  options: [
		  {text: 'Show All',  value: '1'},
		  {text: 'Option 2', value: '2'}
		  ]
	  }
	  ]
	  });
	  
    MegaDeal.navBar = new Ext.Toolbar({
		id: 'pigToolbar',
        dock : 'top',
		html: '<div class="share"><div class="text">Share Mega Deal</div><div class="space"> </div><img src="resources/images/facebook.png" width="20" height="21" align="absmiddle" /><img src="resources/images/twitter.png" width="20" height="21" align="absmiddle" /><img src="resources/images/mail.png" width="20" height="21" align="absmiddle" /></div>',		
		items: buttonsSpecTop,
		defaults: { handler: function() {
                            MegaDeal.Viewport.setActiveItem('card1', {type:'slide', direction:'right'});
        } },
		
    });
	
	MegaDeal.normalNavBar = new Ext.Toolbar({
		id: 'normalNavBar',
        dock : 'top',
		items: [normarTopBar],
		defaults: { handler: function(btn, evt) {
							
							if (btn.id == "reqRefund" ) {
								 Ext.Msg.alert('Status', 'Buy Panel');
               					 //setActiveItem('list')
                			}
           					if (btn.id == "backButton" ) {
								 MegaDeal.Viewport.getLayout().prev('slide', false);
               					 //setActiveItem('list')
                			}
                            //MegaDeal.Viewport.setActiveItem('itemMain', {type:'slide', direction:'right'});
							//MegaDeal.getLayout().prev('slide', false);
							//Ext.getCmp('Viewport').layout.setActiveItem('pigForm');
        } },
    });
			 
	MegaDeal.footer = {
	   id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
	}
	MegaDeal.footer2 = {
	   id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
	}
	 
	MegaDeal.header = {
	      id : 'header',
		  dock : 'top',
	      //layout : 'vbox',
	   html: '<div class="detail"><div class="themegadeal"><img src="resources/images/themegadeal.png" width="320" height="54"></div></div>'
	 };
	 
	  MegaDeal.form = {
	      id : 'combo',
		  dock : 'top',
		  centered: true,
	   dockedItems: [MegaDeal.note]
	};
	
	//Deal Item Detail
	
	MegaDeal.itemContent = {
	      id : 'itemContent',
		  dock : 'top',
		  height:'97%',
		  autoScroll: true,
		  centered: true,
		  scroll: 'vertical',
		  items: [MegaDeal.itemContentPhoto, MegaDeal.itemDesc, MegaDeal.countDown, MegaDeal.buyButtonSup,  MegaDeal.myLayout, MegaDeal.buyButtonInf],
		  dockedItems: []
	};
	 
	 MegaDeal.itemMain = new Ext.Panel({
		   id: 'itemMain',
		   scroll: 'vertical',
		   autoScroll: true,
		   items: [],
		   dockedItems: [MegaDeal.navBar, MegaDeal.itemContent, MegaDeal.footer2]
    });
	
	
	
	// Main Menu
	MegaDeal.Main = {
		 id : 'card1',
		 title: 'Megadeals',
         iconCls: 'magadeals',
		 iconMask: false,
		 cls: 'card1',
		 items: [],
		 dockedItems: [MegaDeal.header, MegaDeal.list, MegaDeal.footer ],
	}
	
//purchases 
	
	MegaDeal.PurchasesContent = {
	      id : 'PurchasesContent',
		  dock : 'top',
		  height:'100%',
		  autoScroll: true,
		  centered: true,
		  scroll: 'vertical',
		  items: [MegaDeal.purchasesTab],
		  dockedItems: []
	};
	 
	 MegaDeal.PurchasesMain = new Ext.Panel({
		   id : 'card2',
		   title: 'Purchases',
		   //bodyStyle: 'margin:15px 0 0px 0;',
		   scroll: 'vertical',
           iconCls: 'euro',
		   iconMask: false,
		   cls: 'card2',
		   items: [],
		   dockedItems: [MegaDeal.purchasesSearch, MegaDeal.PurchasesContent, MegaDeal.footer]
    });
	
	MegaDeal.settings = {
		  id : 'card3',
		 title: 'Settings',
         iconCls: 'setting',
		 iconMask: false,
		 cls: 'card3',
		 items: [],
		 dockedItems: [MegaDeal.settingsPanel, MegaDeal.footer ]
	}
	
	MegaDeal.contact = {
		 id : 'card4',
		 title: 'Contacts',
         iconCls: 'contact',
		 iconMask: false,
		  cls: 'card4',
		 items: [],
		 dockedItems: [MegaDeal.contactPanel, MegaDeal.footer]
	}
	
		MegaDeal.Viewport = new Ext.TabPanel({
	     id : 'Viewport',
		 fullscreen: true,
         layout: 'card',
         cardSwitchAnimation: 'fade',
		 tabBar: {
            dock: 'bottom',
            layout: {
                pack: 'center',
				align: 'strech'
            }
         },
		 layout:'card',
		 items: [MegaDeal.Main, MegaDeal.PurchasesMain, MegaDeal.settings, MegaDeal.contact,  MegaDeal.itemMain,  MegaDeal.confirmationBuy, MegaDeal.congratulationsMsg, MegaDeal.loginPanel, MegaDeal.retrievePanel, MegaDeal.siginPanel, MegaDeal.summaryPanel, MegaDeal.voucherPanel],
		 dockedItems: [],
		 listeners: {
        afterrender: function () {
            this.getTabBar().getLayout().getLayoutItems()[4].hide();
			this.getTabBar().getLayout().getLayoutItems()[5].hide();
			this.getTabBar().getLayout().getLayoutItems()[6].hide();
			this.getTabBar().getLayout().getLayoutItems()[7].hide();
			this.getTabBar().getLayout().getLayoutItems()[8].hide();
			this.getTabBar().getLayout().getLayoutItems()[9].hide();
			this.getTabBar().getLayout().getLayoutItems()[10].hide();
			this.getTabBar().getLayout().getLayoutItems()[11].hide();
        }
     }
	 });

    
	
   }
});