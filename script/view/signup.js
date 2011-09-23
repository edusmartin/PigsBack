var signupTopBar = [
    { ui: 'plain', text: 'BACK' , id: 'backSignupBtn'},
	]

MegaDeal.signupNavBar = new Ext.Toolbar({
	id: 'signupNavBar',
	title:'Purchase Mega Deal',
	dock : 'top',
	//html: '<div class="simpleHeader">Sign Up</div>',
	items: [signupTopBar],
	defaults: { handler: function(btn, evt) {
		if (btn.id == "backSignupBtn" ) {
			 MegaDeal.Viewport.setActiveItem('loginPanel',{type:'slide', direction:'right'});
			 //setActiveItem('list')
		}
	} },
});

MegaDeal.signupForm = new Ext.form.FormPanel({
		  id: 'signupForm',
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
                xtype: 'textfield',
                name : 'email',
                label: 'Emain',
				cls: 'item',
            },{
                xtype: 'passwordfield',
                name : 'pass',
                label: 'Password',
				cls: 'item',
            },{
				xtype: 'selectfield',
				name: 'options',
				label: 'Etc.',
				cls: 'item',
				options: [
					{text: 'Please Select',  value: '1'},
					{text: 'Select this', value: '2'}
				]
			},{
                xtype: 'checkboxfield',
				name : 'details',
				label: 'Send me details of new deals',
				value: true,
				cls: 'itemCheck',
            },{
                xtype:  'button',
				id: 'register',
                text:   'Register',
                ui:     'confirm',
				cls: 'loginBtn',
            }],
			defaults: { handler: function(btn, evt) {
							
							if (btn.id == "register" ) {
								 Ext.Msg.alert('Status', 'You are registred !');
               					 //setActiveItem('list')
                			}
                            //MegaDeal.Viewport.setActiveItem('itemMain', {type:'slide', direction:'right'});
							//MegaDeal.getLayout().prev('slide', false);
							//Ext.getCmp('Viewport').layout.setActiveItem('pigForm');
        } },
});


MegaDeal.signupFooter = new Ext.Panel({
 		id : 'logo',
	   dock : 'bottom',
	      //layout : 'vbox',
	   html: '<div class="bgFooter"><div class="logo"></div></div>'
});

MegaDeal.titleSignupform = new Ext.Panel({
 		id : 'titleSignupform',
	      //layout : 'vbox',
	html:'<div class="subtitle">Join Pigsback and earn your first 50 PiggyPoints</div>',
});

MegaDeal.signupMain = new Ext.Panel({
 	id: 'signupMain',
	width: 300,
	height:380,
	//html:'<div class="content"></div>',
	items:[MegaDeal.titleSignupform, MegaDeal.signupForm],
});


MegaDeal.signupContent = new Ext.Panel({
	id: 'signupContent',
	autoScroll: true,
	scroll: 'vertical',
	height:'100%',
	html:'<div class="content"></div>',
	items:[MegaDeal.signupMain],
});


MegaDeal.siginPanel = new Ext.Panel({
	id:'siginPanel',
	items:[],
	dockedItems:[MegaDeal.signupNavBar, MegaDeal.signupContent, MegaDeal.signupFooter],
	//html: '<div class="border"></div>',
});