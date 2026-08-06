/**
 * SwellLine — the site's signature element.
 * A tide-chart style sine wave used as a section divider.
 * Animates a horizontal drift unless reduced-motion is set.
 */
export default function SwellLine({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  // Two stitched wave periods so the drift loops seamlessly (translateX -50%).
  const wave =
    "M0,24 C60,4 120,4 180,24 C240,44 300,44 360,24 C420,4 480,4 540,24 C600,44 660,44 720,24";
  return (
    <div className={`swell-line ${className}`} aria-hidden="true">
      <svg viewBox="0 0 720 48" preserveAspectRatio="none">
        <g className={animate ? "swell-anim" : ""}>
          <path d={wave} />
          <path d={wave} transform="translate(720,0)" />
        </g>
      </svg>
    </div>
  );
}
