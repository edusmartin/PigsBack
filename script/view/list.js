Ext.regModel('deals', {
                       fields: ['firstName', 'lastName']
});

MegaDeal.store = new Ext.data.JsonStore({
								 model : 'deals',
								 root: 'images',
								 sorters: 'deal',

								 getGroupString : function(record) {
								 return record.get('deal')[0];
								 },
								 
//these coudl be deal codes/id or something
								 data: [
										{deal: 'Tommy',card: {xtype: 'aboutcard'},},
										{deal: 'Puma',card: {xtype: 'aboutcard'}, },
										{deal: 'Specs'},
										{deal: 'Burger King'},
										{deal: 'Some deal'},
										{deal: 'Deal 3'},
										{deal: 'Abacus'},
										{deal: 'Dunnes'},
										{deal: 'Paragliding'}
										]
});
MegaDeal.list = new Ext.List({
								  id:'list',
								  dock:'buttom',
								  height:'80%',
								  width: '100%',
                                  ui: 'plain',
								  store: MegaDeal.store,
                                  itemTpl : '<div class="item"><div class="item-img"><img src="resources/images/item-img.jpg" width="140" height="82"></div><div class="price">€25</div><div class="discount">Discount<br/><strong>25%</strong></div><div class="itemText">25 instead of 50 for 2 Main Course Dishes plus a Bottle of House Wine for 2 people at Il Fico Italian Restaurant, Kildare </div></div>',
                                  grouped : false,
								  listeners:{
										itemtap: function(view, index, item, e){
										//MegaDeal.itemMain.update(); // This line update the info width restore data
										MegaDeal.Viewport.setActiveItem('itemMain',{type:'slide', direction:'left'});
										
        						 }
    }
});