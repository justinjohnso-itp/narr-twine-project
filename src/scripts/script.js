$(document).ready(() => {
  function positionFragments() {
    requestAnimationFrame(() => {
      $(".fragmented-text span").each(function () {
        const randomX = Math.random() * 30 - 15;
        const randomY = Math.random() * 30 - 15;
        $(this).css({
          transform: `translate(${randomX}px, ${randomY}px)`,
          opacity: "0.7",
        });
      });
    });
  }

  // Run immediately and after a short delay to ensure DOM is ready
  positionFragments();
  setTimeout(positionFragments, 50);

  // Run on passage render
  $(document).on(":passagerender", positionFragments);

  // Handle window resize with debounce
  let resizeTimeout;
  $(window).on("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(positionFragments, 100);
  });

  // No more ui bar
  UIBar.destroy();
});
