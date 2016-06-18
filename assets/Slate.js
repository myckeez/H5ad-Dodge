(function (SCOPE) {

    /**
     * @param {IVA.Context} context
     */
    SCOPE.Slate = function(context) {

        var slateContainer,btnClose,that = this;

        that.component = IVA.createSlate({

            render: function() {

                slateContainer = $('<div id="ivc-slate-container"/>')
                    .append(btnClose = $('<div id="ivc-close-btn" />')
                                .on("interact", function () {
                                    context.getIroll().getProgram()
                                        .now()
                                        .close(that.component);
                                })
                    );

                return slateContainer;
            },

            open: function () {
                slateContainer.show();
            },

            close: function () {
                slateContainer.hide();
				SCOPE.shadowVisible=SCOPE.fade1=SCOPE.fade2=SCOPE.fade3=SCOPE.fade4=false;
				$('#ivc-overlay-shadow').fadeOut();
				$('#ivc-overlay-desc1').fadeOut();
				$('#ivc-overlay-desc2').fadeOut();
				$('#ivc-overlay-desc3').fadeOut();
				$('#ivc-overlay-desc4').fadeOut();
            }
        });

    };

})(IVC);