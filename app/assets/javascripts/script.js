var maxHeight = 400;
var school;
var faculty;
var course;

// write an algorithm that dynamically changes the max height for the dynamic container based on the height of the screen
$(function(){

    $(".dropdown > li").hover(function() {

         var $container = $(this),
             $list = $container.find("ul"),
             $anchor = $container.find("a"),
             height = $list.height() * 1.2 + maxHeight -1,       // make sure there is enough room at the bottom
             multiplier = height / maxHeight -1;     // needs to move faster if list is taller

        // need to save height here so it can revert on mouseout
        $container.data("origHeight", $container.height());

        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");

        // make sure dropdown appears directly below parent list item
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });

        // don't do any animation if list shorter than max
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    }
                });
        }

    }, function() {

        var $el = $(this);

        // put things back to normal
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");

    });

});



//function to trigger translation of logo and drop down bar
$(document).ready(function(){
    $(".sub_menu").click(function(){
        animateLogo();
        animateDropdown();
        showResults();
        hide("wrapperSign");
    });

    //function to replace list choice with selection
        $(".sub_menu li").click(function(){
            var parentOf = $(this).closest(".sub_menu").attr("id");
            var parent = $(this).closest(".drop").children()[0];
            var child = $(this).children()[0];
            //var id = this.id;
            // var choice = this;
            var parentId = parent.id;
            var parentText = parent.text;
            var childText = child.text;


            // if (parentId == 'school' && parentOf == 'schools') {
            //   parentText = childText;
            //   $('#' + parentId).text(parentText);
            // }
            // $(this).closest('ul').attr('id');
            // console.log("Choice: " + choice);
            //console.log("Id: " + id);
            console.log("Parent id: " + parentId);
            console.log("Parent text: " + parentText);
            console.log("Child text: " + childText);
            console.log("Parent of: " + parentOf);

            exchange(parentText, childText, parentId, parentOf);

        });
});

//an exhange function that allows for parent elements to be replaced with children in the dynamic list
function exchange(parent, child, id, parentOf){
  if (id == 'school' && parentOf == 'schools') {
    parent = child;
    $('#' + id).text(parent);
    school = parent;
  }else if (id == 'faculty' && parentOf == 'faculties') {
    parent = child;
    $('#' + id).text(parent);
    faculty = parent;
  }else if (id == 'course' && parentOf == 'courses') {
    parent = child;
    $('#' + id).text(parent);
    course = parent;
  }

  console.log("School: " + school);
  console.log("Faculty: " + faculty);
  console.log("Course: " + course);
}


function animateLogo(){
          $(".hero-nav").animate({
            float: 'left',
            right: '20px',
            height: '50px',
            width: '100px',
            margin: '1em'
        });
}

function animateDropdown(){
        $(".man").animate({
          position: 'fixed',
          top: '7.6em',
          right: '2em',
          left: '7.6em'
        });
}

function showResults(){
        $(".container").css('visibility', 'visible');
}

function hide(element){
    $("." + element).css('visibility', 'hidden');
}
