// Hamburger menu functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Slider functionality
function scrollSlider(wrapperId, direction) {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper) {
    console.error(`Slider wrapper with ID '${wrapperId}' not found.`);
    return;
  }

  // Get the first child of the wrapper (should be an article card)
  const firstChild = wrapper.firstElementChild;
  if (!firstChild) {
    console.warn(`No children (articles) found in slider wrapper with ID '${wrapperId}'.`);
    return;
  }

  // Measure the full width of one card
  const cardWidth = firstChild.offsetWidth; // This includes padding and border due to box-sizing

  // Get the gap between articles from the wrapper's computed style
  const wrapperStyle = getComputedStyle(wrapper);
  const articleGap = parseFloat(wrapperStyle.gap); // Parse the gap value (e.g., '1.5rem' to a number)

  // Ensure effectiveGap is a valid number, default to 0 if parsing fails
  const effectiveGap = isNaN(articleGap) ? 0 : articleGap;

  // Calculate the total step size (card width + gap) for one scroll movement
  const scrollStep = cardWidth + effectiveGap;

  // Get the current horizontal scroll position of the wrapper
  const currentScrollLeft = wrapper.scrollLeft;

  // Calculate the target scroll position based on direction and step size
  let targetScrollLeft = currentScrollLeft + (direction * scrollStep);

  // Calculate the maximum scrollable distance
  // scrollWidth is the total width of the content, clientWidth is the visible width
  const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

  // Ensure targetScrollLeft stays within valid bounds (0 to maxScrollLeft)
  targetScrollLeft = Math.max(0, targetScrollLeft); // Cannot scroll less than 0
  targetScrollLeft = Math.min(maxScrollLeft, targetScrollLeft); // Cannot scroll beyond max content width

  // --- Diagnostic Logs ---
  console.log(`--- Scrolling Debug for ${wrapperId} ---`);
  console.log(`Current scrollLeft: ${currentScrollLeft}px`);
  console.log(`Card width: ${cardWidth}px`);
  console.log(`Effective gap: ${effectiveGap}px`);
  console.log(`Calculated scroll step: ${scrollStep}px`);
  console.log(`Target scrollLeft: ${targetScrollLeft}px`);
  console.log(`Wrapper scrollWidth: ${wrapper.scrollWidth}px`);
  console.log(`Wrapper clientWidth: ${wrapper.clientWidth}px`);
  console.log(`Max scrollLeft: ${maxScrollLeft}px`);
  if (targetScrollLeft === currentScrollLeft && (direction !== 0)) {
    console.log("Note: Scroll position did not change. Likely at start/end of content or content does not overflow.");
  }
  console.log(`-------------------------------------`);
  // --- End Diagnostic Logs ---

  // Perform the scroll
  wrapper.scroll({
    left: targetScrollLeft,
    behavior: 'smooth'
  });
}
