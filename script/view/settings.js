MegaDeal.settingsHeader = new Ext.Panel({
 		id : 'settingsHeader',
		dock : 'top',
		title:'Confirmation',
	    //layout : 'vbox',
	    html: '<div class="simpleHeader">Confirmation</div>'
});

MegaDeal.settingslogout = new Ext.Panel({
		id:'settingslogout',
		//title:'Confirmation',
	    //layout : 'vbox',
	    html: '<div class="logout">Logout</div>'
});

MegaDeal.settingsTab = new Ext.form.FormPanel({
		  id: 'settingsTab',
		  hideOnMaskTap: false,
		  ui: 'plain',
		  cls: '',
          baseCls: '',
		  items: [ {
                xtype: 'togglefield',
			    inputType:'onofftoggle',
                label: 'Push Notification 1',
				cls: 'item',
            },{
                xtype: 'togglefield',
			    inputType:'onofftoggle',
                label: 'Push Notification 2',
				cls: 'item',
            },{
                xtype: 'togglefield',
			    inputType:'onofftoggle',
                label: 'Push Notification 3',
				cls: 'item',
            },{
                xtype: 'togglefield',
			    inputType:'onofftoggle',
                label: 'Pin Lock',
				cls: 'item',
            },{
                xtype: 'textfield',
                name : 'setPin',
                label: 'Set Pin',
				placeHolder: '00566075',
                useClearIcon: true,
                autoCapitalize : false,
				cls: 'item',
            },{
                xtype: 'panel',
				text:'hola',
                //name : 'setPin',
                label: 'Set Pin',
                //useClearIcon: true,
               // autoCapitalize : false,
				cls: 'item',
            },MegaDeal.settingslogout]
});

MegaDeal.settingsPanel = new Ext.Panel({
	id: 'settingsPanel',
	 dock : 'top',
	centered: true,
	items:[MegaDeal.settingsHeader, MegaDeal.settingsTab],
});