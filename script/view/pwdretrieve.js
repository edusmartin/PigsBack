var retrieveTopBar = [
    { ui: 'plain', text: 'BACK' , id: 'backretrieveBtn'},
	]

MegaDeal.retrieveNavBar = new Ext.Toolbar({
	id: 'retrieveNavBar',
	title:'Forgotten Password',
	dock : 'top',
	//html: '<div class="simpleHeader">Purchase Mega Deal</div>',
	items: [retrieveTopBar],
	defaults: { handler: function(btn, evt) {
		if (btn.id == "backretrieveBtn" ) {
			 MegaDeal.Viewport.setActiveItem('loginPanel',{type:'slide', direction:'right'});
			 //setActiveItem('list')
		}
	} },
});

MegaDeal.retrieveForm = new Ext.form.FormPanel({
		  id: 'retrieveForm',
		  dock : 'top',
		  hideOnMaskTap: false,
		  ui: 'plain',
		  cls: '',
          baseCls: '',
		  items: [ {
                xtype: 'textfield',
                name : 'email',
                label: 'Email',
				cls: 'item',
            },{
                xtype:  'button',
				id: 'retrieve',
                text:   'Retrieve',
                ui:     'confirm',
				cls: 'retrieveBtn',
            }],
			defaults: { handler: function(btn, evt) {
							
							if (btn.id == "retrieve" ) {
								  Ext.Msg.alert('Status', 'retrieve Password');
               					 //setActiveItem('list')
                			}
           					
        } },
});


MegaDeal.retrieveFooter = new Ext.Panel({
 		id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.retrievetitle = new Ext.Panel({
 		id : 'retrievetitle',
		dock : 'top',
		layout:'fit',
		//height:'45%',
	html:'<div class="title">Forgotten Password</div><div class="subtitle">Please enter your email address below and click Retrieve. An email will be sent to you containing your password.</div>',
});

MegaDeal.retrieveMain = new Ext.Panel({
 	id: 'retrieveMain',
	width: 300,
	//html:'<div class="content"></div>',
	items:[MegaDeal.retrievetitle, MegaDeal.retrieveForm],
});


MegaDeal.retrieveContent = new Ext.Panel({
	id: 'retrieveContent',
	autoScroll: true,
	scroll: 'vertical',
	height:'80%',
	html:'<div class="content"></div>',
	items:[MegaDeal.retrieveMain],
});


MegaDeal.retrievePanel = new Ext.Panel({
	id:'retrievePanel',
	items:[],
	dockedItems:[MegaDeal.retrieveNavBar, MegaDeal.retrieveContent, MegaDeal.retrieveFooter],
	//html: '<div class="border"></div>',
});