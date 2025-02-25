$(document).ready(() => {
  // Initialize story variables
  State.variables.footnoteCount = 0;
  State.variables.footnotes = [];

  // Add footnote macro
  Macro.add("footnote", {
    handler: function () {
      let text = this.args[0];
      State.variables.footnotes.push(text);
      State.variables.footnoteCount++;
      $(this.output).wiki(
        `<span class="footnote-marker">[${State.variables.footnoteCount}]</span>`
      );
    },
  });

  // Setup passage rendering
  $(document).on(":passagerender", function (ev) {
    // Add random delays to fragments
    $(".fragment").each(function (i) {
      $(this).css("--delay", `${i * 0.5}s`);
    });

    // Position floating texts randomly
    $(".floating-text").each(function () {
      let rand = Math.random() * 360;
      $(this).css("transform", `rotate(${rand}deg)`);
    });

    // Fragment text into floating pieces
    $(".fragment").each(function () {
      let words = $(this).text().split(" ");
      $(this).empty();
      words.forEach((word, i) => {
        let span = $("<span>").text(word + " ");
        span.css({
          position: "relative",
          left: Math.random() * 100 - 50 + "px",
          top: Math.random() * 50 - 25 + "px",
        });
        $(this).append(span);
      });
    });

    // Add random rotations to links
    $(".link-cluster a").each(function () {
      $(this).css("--rotation", Math.random() * 20 - 10 + "deg");
    });

    // Split words in fragmented-text
    $(".fragmented-text").each(function () {
      let words = $(this).text().split(" ");
      $(this).empty();
      words.forEach((word) => {
        let span = $("<span>").text(word);
        $(this).append(span);
      });
    });

    // Add random positions to fragmented-text spans
    $(".fragmented-text span").each(function () {
      $(this).css({
        "--random-x": Math.random(),
        "--random-y": Math.random(),
      });
    });
  });
});
