var loginTopBar = [
    { ui: 'plain', text: 'CANCEL' , id: 'cancelButton'},
	]

MegaDeal.loginNavBar = new Ext.Toolbar({
	id: 'loginNavBar',
	title:'Purchase Mega Deal',
	dock : 'top',
	//html: '<div class="simpleHeader">Purchase Mega Deal</div>',
	items: [loginTopBar],
	defaults: { handler: function(btn, evt) {
		if (btn.id == "cancelButton" ) {
			 MegaDeal.Viewport.setActiveItem('itemMain',{type:'slide', direction:'right'});
			 //setActiveItem('list')
		}
	} },
});

MegaDeal.logInForm = new Ext.form.FormPanel({
		  id: 'logInForm',
		  dock : 'top',
		  hideOnMaskTap: false,
		  ui: 'plain',
		  cls: '',
          baseCls: '',
		  items: [ {
                xtype: 'textfield',
                name : 'firstName',
                label: 'First Name',
				cls: 'item',
            },{
                xtype: 'textfield',
                name : 'surname',
                label: 'Surname',
				cls: 'item',
            },{
                xtype:  'button',
				id: 'forgotten',
                text:   '(forgotten password?)',
                ui:     'plain',
				cls: 'forgotten',
            },{
                xtype:  'button',
				id: 'signup',
                text:   'Sign Up',
                ui:     'confirm',
				cls: 'loginBtn',
            },{
                xtype:  'button',
				id: 'login',
                text:   'Login',
                ui:     'confirm',
				cls: 'loginBtn',
            }],
			defaults: { handler: function(btn, evt) {
							
							if (btn.id == "signup" ) {
								 MegaDeal.Viewport.setActiveItem('siginPanel', {type:'fade'});
               					 //setActiveItem('list')
                			}
           					if (btn.id == "login" ) {
								MegaDeal.Viewport.setActiveItem('confirmationBuy', {type:'fade'});
               					 //setActiveItem('list')
                			}
							if (btn.id == "forgotten" ) {
								MegaDeal.Viewport.setActiveItem('retrievePanel', {type:'fade'});
               					 //setActiveItem('list')
                			}
                            //MegaDeal.Viewport.setActiveItem('itemMain', {type:'slide', direction:'right'});
							//MegaDeal.getLayout().prev('slide', false);
							//Ext.getCmp('Viewport').layout.setActiveItem('pigForm');
        } },
});


MegaDeal.loginFooter = new Ext.Panel({
 		id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.titlesform = new Ext.Panel({
 		id : 'titlesform',
		dock : 'top',
		layout:'fit',
		//height:'45%',
	html:'<div class="title">Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30! Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30! Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30! Instant anti-ageing Car Wash Facecream €25.20 instead of €52.30!</div><div class="subtitle">Please log in to your Pigsback.com account to purchases this Mega Deal</div>',
});

MegaDeal.loginMain = new Ext.Panel({
 	id: 'loginMain',
	width: 300,
	//html:'<div class="content"></div>',
	items:[MegaDeal.titlesform, MegaDeal.logInForm],
});


MegaDeal.loginContent = new Ext.Panel({
	id: 'loginContent',
	autoScroll: true,
	scroll: 'vertical',
	height:'80%',
	html:'<div class="content"></div>',
	items:[MegaDeal.loginMain],
});


MegaDeal.loginPanel = new Ext.Panel({
	id:'loginPanel',
	items:[],
	dockedItems:[MegaDeal.loginNavBar, MegaDeal.loginContent, MegaDeal.loginFooter],
	//html: '<div class="border"></div>',
});