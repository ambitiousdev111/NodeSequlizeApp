module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: {
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		firstname: {
			type: Sequelize.STRING,
			notEmpty: true,
			validate:{
				startsWith: function(firstnameValue){
			       	var firstChar = firstnameValue.charAt(0);
			       	var startsWithUpper = firstChar === firstChar.toUpperCase();
			       	if(!startsWithUpper){
			       		//throw error	
			       	}else{
			       		//do nothing
			       	}
				}
			}
		},
		lastname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		username: {
			type: Sequelize.TEXT,
			validate:{
				len:{
					args:[4,20],
					msg: 'The length of username is invalid'
				}
			}
		},
		about: {
			type: Sequelize.TEXT
		},
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		last_login: {
			type: Sequelize.DATE
		},
		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		},
		createdAt: {
			type: Sequelize.DATE
		},
		updatedAt: {
			type: Sequelize.DATE
		},
	}, {
		freezeTableName: true
	});

	return User;
}
