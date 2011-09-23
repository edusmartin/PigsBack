MegaDeal.contactHeader = new Ext.Panel({
 		id : 'contactHeader',
		dock : 'top',
		title:'Contact',
	    //layout : 'vbox',
	    html: '<div class="simpleHeader">Contact</div>'
});


MegaDeal.contactForm = new Ext.form.FormPanel({
		  id: 'contactForm',
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
                label: 'Email',
				cls: 'item',
            },{
                xtype: 'textareafield',
                name : 'query',
                label: 'Query',
				maxLength:120,
				maxRows:4,
				cls: 'itemTextfield',
            },{
                xtype:  'button',
                text:   'Send',
                ui:     'confirm',
				cls: 'sendBtn',
            }]
});

// define your toolbar - note the handler
MegaDeal.contactTab = new Ext.Toolbar({
	id:'contactTab',
	dock:'top',
	ui: 'plain',
	layout: {
			pack: 'center',
			align: 'strech'
    },
	items:[
	  {
		  text:'Support',
		  cls: 'tab1',
		  handler:function(){MegaDeal.contactMain.setActiveItem(0)}
	  },{
		  text:'Business Enquiry',
		  cls: 'tab2',
		  handler:function(){MegaDeal.contactMain.setActiveItem(1)}
	  }
	]
});

// layout the content panels

MegaDeal.contact_p1 = new Ext.Panel({
	cls: 'contactPnl',
	items:[MegaDeal.contactForm]
	//style:'background-color:#7dc892',
	
});

MegaDeal.contact_p2 = new Ext.Panel({
	cls: 'contactPnl',
	html:'<div class="detailText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab </div>'
	//style:'background-color:#7db9c8',
});

MegaDeal.contactMain = new Ext.Panel({
	id:'contactMain',
	height:330,
	items:[MegaDeal.contact_p1, MegaDeal.contact_p2],
	dockedItems:[MegaDeal.contactTab],
	//html: '<div class="border"></div>',
	layout: {
    type: 'card',
},
	cardSwitchAnimation: {type: 'fade', duration:500}
	
});

MegaDeal.contactPanel = new Ext.Panel({
	id:'contactPanel',
	items:[MegaDeal.contactHeader, MegaDeal.contactMain],
	//dockedItems:[MegaDeal.contactTab],
	//html: '<div class="border"></div>',
	
});