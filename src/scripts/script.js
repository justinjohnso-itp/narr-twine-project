$(document).ready(() => {
  // Setup passage rendering
  $(document).on(":passagerender", function (ev) {
    // Position fragmented text with random offsets
    $(".fragmented-text span").each(function () {
      const randomX = Math.random() * 40 - 20;
      const randomY = Math.random() * 40 - 20;
      $(this).css("transform", `translate(${randomX}px, ${randomY}px)`);
    });
  });

  // Handle window resize
  $(window).on("resize", function () {
    $(document).trigger(":passagerender");
  });
});
