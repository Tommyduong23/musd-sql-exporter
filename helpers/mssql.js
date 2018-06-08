// NPM package that supports accessing Microsoft SQL databases from node.
const mssql = require( 'mssql' );

const config = {
	user     : process.env.USER_MSSQL,
	password : process.env.PASSWORD_MSSQL,
	server   : process.env.SERVER_MSSQL,
	database : process.env.DATABASE_MSSQL,

	options : {
		encrypt : true // Use this if you're on Windows Azure
	}
};

const connect = () => { // eslint-disable-line

	return mssql.connect( config )
		.then( () => {

			console.log( 'Connecting to the sql database was successful' );

		} )
		.catch( ( err ) => {

			console.log( err );

		} );

};

const close = () => { // eslint-disable-line

	return mssql.close()
		.then( () => {

			console.log( 'Disconnecting from the sql database was successful' );

		} )
		.catch( ( err ) => {

			console.log( err );

		} );

};

const runQuery = ( query ) => {

	const request = new mssql.Request();
	request.stream = true;

	console.log( 'running request' );
	request.query( query );

	const results = [];

	return new Promise( ( resolve ) => {

		request.on( 'row', ( row ) => {

			// Emitted for each row in a recordset
			Object.keys( row ).forEach( ( key ) => {

				if ( typeof row[key] === 'string' ) {
					row[key] = row[key].trim(); // eslint-disable-line
				}

			} );

			results.push( row );

		} );

		request.on( 'error', ( err ) => {
			// May be emitted multiple times

			console.log( err );

		} );

		request.on( 'done', ( ) => {
			// Always emitted as the last one
			resolve( results );

		} );

	} );

};

module.exports = {
	connect,
	close,
	runQuery
};
