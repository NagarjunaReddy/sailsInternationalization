/**
 * LocalController
 *
 * @description :: Server-side logic for managing locals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

'local':function(req,res){
	//console.log(__('Welcome'));
	var locale = res.getLocale();
	if(locale === 'en'){
		//change locale to espanoil
		res.setLocale('es');
	}else{
		res.setLocale('en');
	}
	res.view();
	//req.__('Hello');
},

'index':function(req,res){
	//console.log(__('Welcome'));
	var locale = res.getLocale();
	if(locale === 'en'){
		//change locale to espanoil
		res.setLocale('es');
	}else{
		res.setLocale('en');
	}
	res.redirect('/');
	//req.__('Hello');
}

};
