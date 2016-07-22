/**
 * LocalController
 *
 * @description :: Server-side logic for managing locals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

'local':function(req,res){
	console.log('app launched');
	//console.log(__('Welcome'));
	var locale = res.getLocale();
	console.log(locale);
	if(locale === 'en'){
		res.setLocale('es');
	}else{
		res.setLocale('en');
	}
	res.view();
	//req.__('Hello');
},

'home':function(req,res){
	console.log('app launched');
	//console.log(__('Welcome'));
	var locale = res.getLocale();
	console.log(locale);
	if(locale === 'en'){
		res.setLocale('es');
	}else{
		res.setLocale('en');
	}
	res.redirect('/');
	//req.__('Hello');
}

};
