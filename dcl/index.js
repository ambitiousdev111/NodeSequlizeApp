var models = require("../models");


module.exports = {

	getById: function (id, modeName, cb){
		var response = {};
		// search for known id
		models[modeName].findById(id).then(result => {
			response.status = 'success';
			response.data = result;
		  	cb(response);
		}).catch(err => {
			throw err;
			response.status = 'error';
			response.data = err;
		  	cb(response);
		});
	},

	getAllRecords: function (model, cb){
		// get all records
		var response = {};
		
		model.findAll().then(results => {
			response.status = 'success';
			response.data = results;
		  	cb(response);
		}).catch(err => {
			response.status = 'error';
			response.data = err;
		  	cb(response);
		});
	},

}
