(function (SCOPE) {

    /**
     * @param {IVA.Context} context
     * @param {IVC.Slate} slate The attached slate
     */
    SCOPE.BugOverlay = function(context, slate) {

        var el,preloader,images,overlayHeader,overlayFooter,car1,car2,car3,
	        car4,carImg1,title1,desc1,content1,explore1,disclaimer1,type1,tagline1,
			carImg2,title2,desc2,content2,explore2,disclaimer2,type2,tagline2,
			carImg3,title3,desc3,content3,explore3,disclaimer3,type3,tagline3,
			carImg4,title4,desc4,content4,explore4,disclaimer4,type4,tagline4,
			fade1,fade2,fade3,fade4,bg1,bg2,bg3,bg4,interactNow,bgShadow,shadowVisible,
            program = context.getIroll().getProgram();

        this.component = IVA.createOverlay({

            render: function() {

                el = $('<div class="ivc-overlay-container"/>');
				overlayFooter = $('<div id="ivc-overlay-footer"/>');
				overlayHeader = $('<div id="ivc-overlay-header"/>').hide();
				//==CAR1
				carImg1 = $('<div id="ivc-overlay-carImg1"/>');
				intro1 = $('<div id="ivc-overlay-intro1"/>').hide();
				desc1 = $('<div id="ivc-overlay-desc1"/>').hide();
				
				bg1 = $("<div class='button-background1'/>");
				bg2 = $("<div class='button-background2'/>");
				bg3 = $("<div class='button-background3'/>");
				bg4 = $("<div class='button-background4'/>");
				
				title1 = $('<div id="ivc-overlay-title1"/>')
					.html("YOU ARE DART");
				content1 = $('<div id="ivc-overlay-content1"/>')
					.html("Stay ahead of the curve with the standard touchscreen media center in Dart, the most technologically advanced vehicle in its class<sup>1</sup>.");
				explore1 = $('<div id="ivc-overlay-explore1"/>');

				explore1.append(bg1);
				disclaimer1 = $('<div id="ivc-overlay-disclaimer1"/>')
					.html("<sup>1</sup> Based on 2014 Ward’s Small Upper Sedan Segment costing under $25,000.");
				
				type1 = $('<div id="ivc-overlay-type1"/>');
				tagline1 = $('<div id="ivc-overlay-tagline1"/>')
					.html("FOR THE TECH-WHIZ");
				
				desc1
					.append(disclaimer1)
					.append(title1)
					.append(content1)
					.append(explore1);
					
				intro1
					.append(type1)
					.append(tagline1);
				
                car1 = $('<div id="ivc-overlay-car1"/>')
					.append(intro1)
					.append(desc1)
					.append(carImg1);
				
				//==CAR2
				carImg2 = $('<div id="ivc-overlay-carImg2"/>');
				intro2 = $('<div id="ivc-overlay-intro2"/>').hide();
				desc2 = $('<div id="ivc-overlay-desc2"/>').hide();
				
				title2 = $('<div id="ivc-overlay-title2"/>')
					.html("YOU ARE CHALLENGER");
				content2 = $('<div id="ivc-overlay-content2"/>')
					.html("The 707 horsepower Challenger SRT® Hellcat<sup>1</sup> is the fastest, most powerful muscle car ever<sup>2</sup>. And just like you, it’s the original badass.");
				explore2 = $('<div id="ivc-overlay-explore2"/>');
				explore2.append(bg2);

				disclaimer2 = $('<div id="ivc-overlay-disclaimer2"/>')
					.html("<sup>1</sup> 392 HEMI® Scat Pack SHAKER model shown.</br><sup>2</sup> Based on 2014 Ward’s Standard Specialty Segment and Car and Driver’s ¼ mile time.");
				
				type2 = $('<div id="ivc-overlay-type2"/>');
				tagline2 = $('<div id="ivc-overlay-tagline2"/>')
					.html("FOR THE ULTIMATE THRILL-SEEKER");
				
				desc2
					.append(disclaimer2)
					.append(title2)
					.append(content2)
					.append(explore2);
					
				intro2
					.append(type2)
					.append(tagline2);
				
                car2 = $('<div id="ivc-overlay-car2"/>')
					.append(intro2)
					.append(desc2)
					.append(carImg2);
					
				//==CAR3
				carImg3 = $('<div id="ivc-overlay-carImg3"/>');
				intro3 = $('<div id="ivc-overlay-intro3"/>').hide();
				desc3 = $('<div id="ivc-overlay-desc3"/>').hide();
				
				title3 = $('<div id="ivc-overlay-title3"/>')
					.html("YOU ARE CHARGER");
				content3 = $('<div id="ivc-overlay-content3"/>')
					.html("Turn heads everywhere you go with the only four-door muscle car in America<sup>1</sup.");
				explore3 = $('<div id="ivc-overlay-explore3"/>');

				explore3.append(bg3);

				disclaimer3 = $('<div id="ivc-overlay-disclaimer3"/>')
					.html("<sup>1</sup> Based on 2014 Ward’s Large Regular Car Segment. Excludes other FCA US LLC vehicles.");
				
				type3 = $('<div id="ivc-overlay-type3"/>');
				tagline3 = $('<div id="ivc-overlay-tagline3"/>')
					.html("FOR THE SHOWSTOPPER");
				
				desc3
					.append(disclaimer3)
					.append(title3)
					.append(content3)
					.append(explore3);
					
				intro3
					.append(type3)
					.append(tagline3);
					
                car3 = $('<div id="ivc-overlay-car3"/>')
					.append(intro3)
					.append(desc3)
					.append(carImg3);
			
			//==CAR4
				carImg4 = $('<div id="ivc-overlay-carImg4"/>');
				intro4 = $('<div id="ivc-overlay-intro4"/>').hide();
				desc4 = $('<div id="ivc-overlay-desc4"/>').hide();
				
				title4 = $('<div id="ivc-overlay-title4"/>')
					.html("YOU ARE DURANGO");
				content4 = $('<div id="ivc-overlay-content4"/>')
					.html("The standard seven-passenger seating in Durango is the perfect way to lead your pack.");
				explore4 = $('<div id="ivc-overlay-explore4"/>');

				explore4.append(bg4);
					
				disclaimer4 = $('<div id="ivc-overlay-disclaimer4"/>');
				
				type4 = $('<div id="ivc-overlay-type4"/>');
				tagline4 = $('<div id="ivc-overlay-tagline4"/>')
					.html("FOR THE PACK LEADER");
				
				desc4
					.append(disclaimer4)
					.append(title4)
					.append(content4)
					.append(explore4);
					
				intro4
					.append(type4)
					.append(tagline4);
					
                car4 = $('<div id="ivc-overlay-car4"/>')
					.append(intro4)
					.append(desc4)
					.append(carImg4);
			
                bgBug = $('<div id="ivc-overlay-bg"/>');
                bgShadow = $('<div id="ivc-overlay-shadow"/>').hide();
                cta = $('<div id="ivc-overlay-cta"/>')
					.html("ARE YOU DODGE ENOUGH? TAP EACH CAR TO FIND OUT...");
                
				overlayHeader
                    .append(cta);
				
                overlayFooter
                    .append(bgBug)
                    .append(car1)
                    .append(car2)
                    .append(car3)
                    .append(car4);

                preloader = $('<div class="ivc-preloader"/>')
                    .append($('<div class="ivc-spinner"/>'));

                el
                    .append(bgShadow)
					.append(overlayHeader)
                    .append(overlayFooter)
                    .append(preloader);
				
				// Blasts
				cta.blast({
				  delimiter: 'character',
				  customClass: 'cta-letters'
				});
				tagline1.blast({
				  delimiter: 'character',
				  customClass: 'tagline1-letters'
				});
				tagline2.blast({
				  delimiter: 'character',
				  customClass: 'tagline2-letters'
				});
				tagline3.blast({
				  delimiter: 'character',
				  customClass: 'tagline3-letters'
				});
				tagline4.blast({
				  delimiter: 'character',
				  customClass: 'tagline4-letters'
				});			
				
				title1.blast({
				  delimiter: 'character',
				  customClass: 'title1-letters'
				});
				title2.blast({
				  delimiter: 'character',
				  customClass: 'title2-letters'
				});
				title3.blast({
				  delimiter: 'character',
				  customClass: 'title3-letters'
				});
				title4.blast({
				  delimiter: 'character',
				  customClass: 'title4-letters'
				});
				
                //
                // When the bug is clicked on, tell the iroll's program to open the attached slate
                //
				explore1.on("interact", function () {
                    context.getIroll().openURL("Tap_Explore_Dart");
					console.log("DART");
                });
				explore2.on("interact", function () {
                    context.getIroll().openURL("Tap_Explore_Challenger");
					console.log("CHALLENGER");
                });
               explore3.on("interact", function () {
                    context.getIroll().openURL("Tap_Explore_Charger");
					console.log("CHARGER");
                });
                explore4.on("interact", function () {
                    context.getIroll().openURL("Tap_Explore_Durango");
					console.log("DURANGO");
                });

                carImg1.on("interact", function () {
					if(interactNow && !SCOPE.fade1){
						context.getIroll().reportEvent("Tap_Dart");
						console.log("Tap_Dart");
						$('.title1-letters').velocity("transition.slideRightIn", { stagger: 25 }).velocity({ opacity: 1 }, 200);
						desc2.fadeOut();
						desc3.fadeOut();					
						desc4.fadeOut();
						if(!SCOPE.shadowVisible){ bgShadow.fadeIn(); SCOPE.shadowVisible = true; console.log(SCOPE.shadowVisible); }				
						desc1.fadeIn();
						SCOPE.fade1=true;
						SCOPE.fade4=SCOPE.fade2=SCOPE.fade3=false;
                    program
                        .now()
                        .open(slate.component);
					}
                });
				
                carImg2.on("interact", function () {
					if(interactNow && !SCOPE.fade2){
						context.getIroll().reportEvent("Tap_Challenger");
						console.log("Tap_Challenger");
						$('.title2-letters').velocity("transition.slideRightIn", { stagger: 25 }).velocity({ opacity: 1 }, 200);
						desc1.fadeOut(); desc3.fadeOut(); desc4.fadeOut();
						if(!SCOPE.shadowVisible){ bgShadow.fadeIn(); SCOPE.shadowVisible = true; }			
						desc2.fadeIn();
						SCOPE.fade2=true;
						SCOPE.fade1=SCOPE.fade4=SCOPE.fade3=false;
                    program
                        .now()
                        .open(slate.component);					
					}
                });

                carImg3.on("interact", function () {
					if(interactNow && !SCOPE.fade3){
						context.getIroll().reportEvent("Tap_Charger");
						console.log("Tap_Charger");						
						$('.title3-letters').velocity("transition.slideRightIn", { stagger: 25 }).velocity({ opacity: 1 }, 200);
						desc1.fadeOut(); desc2.fadeOut(); desc4.fadeOut();
						if(!SCOPE.shadowVisible){ bgShadow.fadeIn(); SCOPE.shadowVisible = true; }			
						desc3.fadeIn();
						SCOPE.fade3=true;
						SCOPE.fade1=SCOPE.fade2=SCOPE.fade4=false;
                    program
                        .now()
                        .open(slate.component);
					}
                });
                
				carImg4.on("interact", function () {
					if(interactNow && !SCOPE.fade4){
						context.getIroll().reportEvent("Tap_Durango");
						console.log("Tap_Durango");
						$('.title4-letters').velocity("transition.slideRightIn", { stagger: 25 }).velocity({ opacity: 1 }, 200);
						desc2.fadeOut(); desc3.fadeOut(); desc1.fadeOut();
						if(!SCOPE.shadowVisible){ bgShadow.fadeIn(); SCOPE.shadowVisible = true; }				
						desc4.fadeIn();
						SCOPE.fade4=true;
						SCOPE.fade1=SCOPE.fade2=SCOPE.fade3=false;
                    program
                        .now()
                        .open(slate.component);
					}
                });
                return el;
            },

            show: function () {
                if(!images) {
                    images = [];
                    _.each(context.getConfig().array('overlay-assets'), function (image) {
                        images.push(image);
                    });
                    if (images == 0) {
                 
						overlayFooter.velocity("transition.slideUpIn", 1000);
						   setTimeout(function(){
								$('.tagline1-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
								intro1.fadeIn();
								carImg2.animate({opacity: .6}, 500);
								carImg3.animate({opacity: .6}, 500);
								carImg4.animate({opacity: .6}, 500);
								setTimeout(function(){
									$('.tagline2-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
									intro2.fadeIn();								
									intro1.fadeOut();
									carImg1.animate({opacity: .6}, 500);
									carImg2.animate({opacity: 1}, 500);
									carImg3.animate({opacity: .6}, 500);
									carImg4.animate({opacity: .6}, 500);
									setTimeout(function(){
										$('.tagline3-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
										intro3.fadeIn();								
										intro2.fadeOut();									
										carImg1.animate({opacity: .6}, 500);
										carImg2.animate({opacity: .6}, 500);
										carImg3.animate({opacity: 1}, 500);
										carImg4.animate({opacity: .6}, 500);
										setTimeout(function(){
											$('.tagline4-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
											intro4.fadeIn();								
											intro3.fadeOut();											
											carImg1.animate({opacity: .6}, 500);
											carImg2.animate({opacity: .6}, 500);
											carImg3.animate({opacity: .6}, 500);
											carImg4.animate({opacity: 1}, 500);
											setTimeout(function(){																						
												carImg1.animate({opacity: 1}, 300);
												carImg2.animate({opacity: 1}, 300);
												carImg3.animate({opacity: 1}, 300);
												carImg4.animate({opacity: 1}, 300);
												$('.cta-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 },500);
												intro4.fadeOut();
												overlayHeader.fadeIn();
												interactNow = true;
											},1500);
										},1500);
									},1500);
								},1500);
							},1000);
							
                    } else {
                        context.getIroll().preloadAssets(images, function (failedAssets) {
                            if (!_.isEmpty(failedAssets)) {
                                console.log("assets: " + failedAssets.toString() + " failed to load");
                            }
                        
						overlayFooter.velocity("transition.slideUpIn", 1000);
						   setTimeout(function(){
								$('.tagline1-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
								intro1.fadeIn();
								carImg2.animate({opacity: .6}, 500);
								carImg3.animate({opacity: .6}, 500);
								carImg4.animate({opacity: .6}, 500);
								setTimeout(function(){
									$('.tagline2-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
									intro2.fadeIn();								
									intro1.fadeOut();
									carImg1.animate({opacity: .6}, 500);
									carImg2.animate({opacity: 1}, 500);
									carImg3.animate({opacity: .6}, 500);
									carImg4.animate({opacity: .6}, 500);
									setTimeout(function(){
										$('.tagline3-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
										intro3.fadeIn();								
										intro2.fadeOut();									
										carImg1.animate({opacity: .6}, 500);
										carImg2.animate({opacity: .6}, 500);
										carImg3.animate({opacity: 1}, 500);
										carImg4.animate({opacity: .6}, 500);
										setTimeout(function(){
											$('.tagline4-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 }, 200);
											intro4.fadeIn();								
											intro3.fadeOut();											
											carImg1.animate({opacity: .6}, 500);
											carImg2.animate({opacity: .6}, 500);
											carImg3.animate({opacity: .6}, 500);
											carImg4.animate({opacity: 1}, 500);
											setTimeout(function(){																						
												carImg1.animate({opacity: 1}, 300);
												carImg2.animate({opacity: 1}, 300);
												carImg3.animate({opacity: 1}, 300);
												carImg4.animate({opacity: 1}, 300);
												$('.cta-letters').velocity("transition.slideRightIn", { stagger: 30 }).velocity({ opacity: 1 },500);
												intro4.fadeOut();
												overlayHeader.fadeIn();
												interactNow = true;
											},1500);
										},1500);
									},1500);
								},1500);
							},1000);
							
                            preloader.hide();
                        });
                    }
                }
            },

            close: function () {
				
            }

        });

    }

})(IVC);