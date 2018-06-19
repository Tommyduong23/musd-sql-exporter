const getQuery = appRequire( 'helpers/get-query' );
const mssql    = appRequire( 'helpers/mssql' );
const db       = appRequire( 'helpers/fb-lcap-dev' );
const indiMap  = appRequire( 'helpers/indicator-map' );

const getIndicators = async () => {

	const indicatorsQuery = getQuery( 'glass', 'getIndicators' );

	mssql.connect()
		.then( () => mssql.runQuery( indicatorsQuery ) )
		.then( formatIndicators )
		.then( saveIndicators )
		.then( () => mssql.close() )
		.catch( console.log );


};

const formatIndicators = ( indicators ) => {

	const formattedIndicators = indicators.map( ( indicator ) => {

		const num         = indicator.IndicatorNumber;
		const title       = indicator.IndicatorName;
		const description = indicator.IndicatorDescription;
		const parent      = indiMap[num];

		const newIndicator = {
			title,
			parent,
			description
		};

		return newIndicator;

	} );

	return formattedIndicators;

};

const saveIndicators = ( indicators ) => {

	db.indicatorsNode.remove();

	indicators.forEach( ( indicator ) => {
		const key = db.generateKey();

		db.indicatorsNode
			.child( key )
			.set( indicator );

	} );

};

module.exports = {
	getIndicators,
};
