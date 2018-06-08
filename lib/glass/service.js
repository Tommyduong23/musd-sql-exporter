const getQuery = appRequire( 'helpers/get-query' );
const mssql    = appRequire( 'helpers/mssql' );

const getGoals = async () => {

	const goalsQuery = getQuery( 'glass', 'getGoals' );

	await mssql.connect();

	const goals = await mssql.runQuery( goalsQuery )
		.then( formatGoals );


};

const formatGoals = ( goals ) => {

};

const getActions = () => {

	const actionsQuery = getQuery( 'glass', 'getActions' );

};

const formatActions = () => {

};

const getIndicators = () => {

	const indicatorsQuery = getQuery( 'glass', 'getIndicators' );


};

const formatIndicators = () => {

};

module.exports = {
	getGoals,
	getActions,
	getIndicators,
};
