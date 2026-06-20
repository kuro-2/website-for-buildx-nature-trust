interface BackgroundTextureProps {
  variant: 'leaf' | 'rangoli';
}

export function BackgroundTexture({ variant }: BackgroundTextureProps) {
  if (variant === 'rangoli') {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.11]"
        style={{
          backgroundImage: "url('/assets/images/rangoli-pattern.svg')",
          backgroundSize: '240px 240px',
          backgroundRepeat: 'repeat',
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none opacity-[0.13]"
      style={{
        backgroundImage: "url('/assets/images/leaf-pattern.svg')",
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
