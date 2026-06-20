interface SectionDividerProps {
  flip?: boolean;
}

const TILE_WIDTH = 160;
const TILE_HEIGHT = 96;

export function SectionDivider(_props: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 h-0 overflow-visible pointer-events-none select-none"
    >
      <div
        className="absolute left-0 w-full opacity-[0.16]"
        style={{
          top: -TILE_HEIGHT / 2,
          height: TILE_HEIGHT,
          backgroundImage: "url('/assets/images/flower-divider.svg')",
          backgroundRepeat: 'repeat-x',
          backgroundSize: `${TILE_WIDTH}px ${TILE_HEIGHT}px`,
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}
