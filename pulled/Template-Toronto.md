<div class="menu_wrapper">

<div class="collapsable_menu_control">MENU ▤</div>

*   [HOME](http://2016.igem.org/Team:Toronto)
*   TEAM
    *   [Team]( http://2016.igem.org/Team:Toronto/Team)
    *   [★ Collaborations](http://2016.igem.org/Team:Toronto/Collaborations)
*   PROJECT
    *   [★ Description](http://2016.igem.org/Team:Toronto/Description)
    *   [★ Design](http://2016.igem.org/Team:Toronto/Design)
    *   [Experiments](http://2016.igem.org/Team:Toronto/Experiments)
    *   [★ Proof of Concept](http://2016.igem.org/Team:Toronto/Proof)
    *   [★ Demonstrate](http://2016.igem.org/Team:Toronto/Demonstrate)
    *   [Results](http://2016.igem.org/Team:Toronto/Results)
    *   [Notebook](http://2016.igem.org/Team:Toronto/Notebook)
*   PARTS
    *   [Parts](http://2016.igem.org/Team:Toronto/Parts)
    *   [★ Basic Parts](http://2016.igem.org/Team:Toronto/Basic_Part)
    *   [★ Composite Parts](http://2016.igem.org/Team:Toronto/Composite_Part)
    *   [★ Part Collection](http://2016.igem.org/Team:Toronto/Part_Collection)
*   [SAFETY](http://2016.igem.org/Team:Toronto/Safety)
*   [★ ATTRIBUTIONS](http://2016.igem.org/Team:Toronto/Attributions)
*   HUMAN PRACTICES
    *   [Human Practices](http://2016.igem.org/Team:Toronto/Human_Practices)
    *   [★ Silver](http://2016.igem.org/Team:Toronto/HP/Silver)
    *   [★ Gold](http://2016.igem.org/Team:Toronto/HP/Gold)
    *   [★ Integrated Practices](http://2016.igem.org/Team:Toronto/Integrated_Practices)
    *   [★ Engagement](http://2016.igem.org/Team:Toronto/Engagement)
*   AWARDS
    *   [★ Entrepreneurship](http://2016.igem.org/Team:Toronto/Entrepreneurship)
    *   [★ Hardware](http://2016.igem.org/Team:Toronto/Hardware)
    *   [★ Software](http://2016.igem.org/Team:Toronto/Software)
    *   [★ Measurement](http://2016.igem.org/Team:Toronto/Measurement)
    *   [★ Model](http://2016.igem.org/Team:Toronto/Model)

</div>

<div class="content_wrapper"><script>// This is the jquery part of your template. Try not modify any of this code since it makes your menu work. $(document).ready(function() { $("#HQ_page").attr('id',''); if ( wgPageName.substring( 0, 8) == "Template") { // if the page is a template it displays the full name in a single line $("#team_name").html( wgPageName ); } else if ( ( (wgPageName.match(/\//g) || []).length ) == 0 ) { // if it is the home page , just print the team's name $("#team_name").html( wgPageName.substring( 5, wgPageName.length ) ); } else { // this adds the team's name as an h1 $("#team_name").html( wgPageName.substring( 5 , wgPageName.indexOf("/") ) ); // this adds the page's title as an h4 $("#page_name").html ( ( wgPageName.substring( wgPageName.indexOf("/") + 1, wgPageName.length ) ).replace( /\/|_/g , " ") ); } $('#accordion').find('.menu_item').click(function(){ //Expand or collapse this panel submenu = $(this).find('.submenu'); submenu.toggle(); icon = $(this).find('.icon'); if ( !$( submenu ).is(':visible') ) { icon.removeClass("less").addClass("plus"); } else { icon.removeClass("plus").addClass("less"); } //Hide the other panels $(".submenu").not(submenu).hide(); $(".icon").not(icon).removeClass("less").addClass("plus"); }); $(".collapsable_menu_control").click(function() { $(".menu_item").toggle(); }); $( window ).resize(function() { $(".menu_item").show(); }); });</script></div>