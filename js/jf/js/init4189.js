var o = {
  init: function() {
    this.diagram();
  },
  random: function(l, u) {
    return Math.floor(Math.random() * (u - l + 1) + l);
  },
  diagram: function() {
    var r = Raphael("diagram", 350, 400),
      rad = 73,
      defaultText = "Hover Me",
      speed = 250;

    r.circle(200, 200, 85).attr({ stroke: "none", fill: "#21115E" });

    var title = r
      .text(200, 200, defaultText)
      .attr({
        font: "20px PTSansBold",
        fill: "#fff"
      })
      .toFront();

    r.customAttributes.arc = function(value, color, rad) {
      var v = 3.6 * value,
        alpha = v == 360 ? 359.99 : v,
        random = o.random(91, 240),
        a = ((random - alpha) * Math.PI) / 180,
        b = (random * Math.PI) / 180,
        sx = 200 + rad * Math.cos(b),
        sy = 200 - rad * Math.sin(b),
        x = 200 + rad * Math.cos(a),
        y = 200 - rad * Math.sin(a),
        path = [
          ["M", sx, sy],
          ["A", rad, rad, 0, +(alpha > 180), 1, x, y]
        ];
      return { path: path, stroke: color };
    };

    jQuery(".get")
      .find(".arc")
      .each(function(i) {
        var t = jQuery(this),
          color = t.find(".color").val(),
          value = t.find(".percent").val(),
          text = t.find(".text").text();

        rad += 15;
        var z = r.path().attr({ arc: [value, color, rad], "stroke-width": 10 });

        z.mouseover(function() {
          this.animate({ "stroke-width": 13, opacity: 0.75 }, 1000, "elastic");
          if (Raphael.type != "VML")
            //solves IE problem
            this.toFront();
          title.stop().animate({ opacity: 0 }, speed, ">", function() {
            this.attr({ text: text }).animate({ opacity: 1 }, speed, "<");
          });
        }).mouseout(function() {
          this.stop().animate(
            { "stroke-width": 10, opacity: 1 },
            speed * 4,
            "elastic"
          );
          title.stop().animate({ opacity: 0 }, speed, ">", function() {
            title
              .attr({ text: defaultText })
              .animate({ opacity: 1 }, speed, "<");
          });
        });
      });
  }
};
jQuery(function() {
  o.init();
});

/////////////////* NIVOSLIDER */////////////////////////

jQuery(window).load(function() {
  "use strict";
  jQuery("#slider").nivoSlider({
    effect: "fade", // Specify sets like: 'fold,fade,sliceDown'
    animSpeed: 500, // Slide transition speed
    pauseTime: 3000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: true, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false // Use thumbnails for Control Nav
  });
});
