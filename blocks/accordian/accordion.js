export default function decorate(block) {
  [...block.children].forEach((row) => {
    const labelWrapper = row.children[0];
    const bodyWrapper = row.children[1];

    if (!labelWrapper || !bodyWrapper) return;

    // Create summary and move inner content only
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.innerHTML = labelWrapper.innerHTML; // safe because it's just <p> or inline

    // Create accordion body
    const body = document.createElement('div');
    body.className = 'accordion-item-body';
    body.innerHTML = bodyWrapper.innerHTML;

    // Build <details> element
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);

    // Replace row with accordion item
    row.replaceWith(details);
  });
}
