'use strict';

module.exports = function(Users) {

	Users.simpleCount = function(cb) {
		var ds = Users.dataSource;
        var sql = "SELECT COUNT(*) FROM PUBLIC.USERS";
		var result;
        
		ds.connector.execute(sql, function (err, result) {

            if (err) {console.error(err);
			}else{
            cb(err, result);
			}
        });
	};
	
	Users.remoteMethod('simpleCount', {
		http: {path: '/simpleCount', verb: 'get'},
		returns: {root: true, type: 'number'},
		description: 'simpleCount'
	});
};
