var IVC = {};

(function(SCOPE) {

    "use strict";

    /**
     * @param {IVA.Context} context
     */
    var bugSlateAd = function(context) {

        var iroll = context.getIroll();

        var slate = new SCOPE.Slate(context),
            bug = new SCOPE.BugOverlay(context, slate);

        iroll.injectCSS("main.css");

        // Show the bug 1 second into the video...
        iroll
            .getProgram()
            .after(1.0)
            .show(bug.component);

        iroll.start();
    };

    IVA.registerCreative(bugSlateAd);

})(IVC);