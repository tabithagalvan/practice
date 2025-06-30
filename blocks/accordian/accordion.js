export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [label, body] = row.children;

    if (!label || !body) return; // Skip if not a valid row

    // Create summary element and set label content
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.innerHTML = label.innerHTML;

    // Decorate body
    body.classList.add('accordion-item-body');

    // Create accordion item
    const details = document.createElement('details');
    details.classList.add('accordion-item');
    details.append(summary, body);

    row.replaceWith(details);
  });
}
