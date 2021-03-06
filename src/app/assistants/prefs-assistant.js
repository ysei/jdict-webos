function PrefsAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

PrefsAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */
	this.controller.setupWidget("orientation-selector",
			{ label: "Orientation", modelProperty: "orientation",
				labelPlacement: Mojo.Widget.labelPlacementLeft, 
				choices: [
					{label: "Portrait", value: "up"},
					{label: "Free", value: "free"} ]},
			Model.model);
	this.controller.setupWidget("fontsize-selector",
			{ label: "Font size", modelProperty: "fontSize",
				labelPlacement: Mojo.Widget.labelPlacementLeft,
				choices: [
					{label: "Largest", value: "115%"},
					{label: "Larger", value: "110%"},
					{label: "Large", value: "105%"},
					{label: "Medium", value: "100%"},
					{label: "Small", value: "95%"},
					{label: "Smaller", value: "90%"},
					{label: "Smallest", value: "85%"} ]},
			Model.model);
	this.controller.setupWidget("case-toggle",
			{ trueLabel: "Yes", falseLabel: "No", modelProperty: "caseSensitive" },
			Model.model);
		
	/* add event handlers to listen to events from widgets */
};

PrefsAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

PrefsAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

PrefsAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
