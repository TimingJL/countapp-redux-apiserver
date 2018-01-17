const customMiddleWare = store => next => action => {
	console.log("Middleware triggered:");
	next(action);
}