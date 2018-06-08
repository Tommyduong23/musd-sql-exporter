const fs = require( 'fs' );

const CustomError = appRequire( 'helpers/custom-error' );

class QueryError extends CustomError {
	constructor( dir, table ) {
		super(
			'QUERY::query_not_found',
			`Query for table ${table} was not found in directory ${dir}`,
			404,
			'QueryError'
		);
	}
}

const getQuery = ( dir, fileName, template = null ) => {

	if ( !fs.existsSync( `${RootDir}/sql-queries/${dir}` ) ) {
		throw new QueryError( dir, fileName );
	}

	const path = `${RootDir}/sql-queries/${dir}/${fileName}.sql`;

	let query = fs.readFileSync( `${path}`, 'utf8' );

	if ( !query ) {
		throw new QueryError( dir, fileName );
	}

	if ( template ) {
		query = query.replace( /TEMPLATE/g, template );
	}

	return query;

};

module.exports = getQuery;
