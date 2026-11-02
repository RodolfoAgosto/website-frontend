import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecommendationCard from "./RecommendationCard";
import recommendations, {
  EXAMPLE_RECOMMENDATIONS,
  MAX_RECOMMENDATIONS,
} from "../../data/recommendations";

const SWIPE_THRESHOLD = 50;
// Time each page stays on screen before the carousel moves on by itself.
const AUTOPLAY_MS = 7000;
// Height reserved for the cards so the section does not jump between pages
// whose recommendations have different text lengths (max text is ~450 chars).
const CARDS_MIN_HEIGHT = { xs: 430, sm: 400, md: 470 };

export default function Recommendations() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  // 3 cards on desktop, 2 on tablet, 1 on phone.
  const perPage = isMd ? 3 : isSm ? 2 : 1;

  const real = recommendations.slice(0, MAX_RECOMMENDATIONS);
  // While there are no real recommendations the carousel shows generic
  // examples; as soon as there is one, only real recommendations are shown.
  const items = real.length === 0 ? EXAMPLE_RECOMMENDATIONS : real;

  const pages = Math.ceil(items.length / perPage);
  const [page, setPage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [paused, setPaused] = useState(false);
  const current = Math.min(page, pages - 1);
  const visible = items.slice(current * perPage, current * perPage + perPage);

  const goTo = (next) => setPage(Math.max(0, Math.min(pages - 1, next)));

  // Advance automatically, looping back to the first page. It stops while the
  // visitor hovers or focuses the carousel, and never runs for people who
  // asked their system to reduce motion. Changing page restarts the timer.
  useEffect(() => {
    if (pages <= 1 || paused || reducedMotion) return undefined;
    const timer = setTimeout(() => setPage((current + 1) % pages), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [current, pages, paused, reducedMotion]);

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) goTo(current + (delta < 0 ? 1 : -1));
    setTouchStartX(null);
  };

  return (
    <Box component="section" sx={{ maxWidth: "1000px", margin: "0 auto", py: 2, px: { xs: 2, sm: 2 } }}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Lo que dicen de mí quienes trabajaron o estudiaron conmigo.
      </Typography>
      {real.length === 0 && <Chip label="En construcción" size="small" sx={{ mb: 2 }} />}

      {/* Carousel */}
      <Box
        role="region"
        aria-roledescription="carrusel"
        aria-label="Recomendaciones"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => {
          setPaused(true);
          setTouchStartX(e.touches[0].clientX);
        }}
        onTouchEnd={(e) => {
          handleTouchEnd(e);
          setPaused(false);
        }}
        sx={{ mt: 2 }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
            gap: 2,
            alignItems: "stretch",
            minHeight: CARDS_MIN_HEIGHT,
          }}
        >
          {visible.map((item) => (
            <RecommendationCard key={item.name} {...item} />
          ))}
        </Box>

        {pages > 1 && (
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mt: 2 }}>
            <IconButton
              aria-label="Recomendaciones anteriores"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
            >
              <ChevronLeftIcon />
            </IconButton>
            {Array.from({ length: pages }).map((_, i) => (
              <Box
                key={i}
                component="button"
                type="button"
                aria-label={`Ir a la página ${i + 1} de ${pages}`}
                aria-current={i === current}
                onClick={() => goTo(i)}
                sx={{
                  width: 10,
                  height: 10,
                  p: 0,
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor: i === current ? "#4F2928" : "rgba(79,41,40,0.3)",
                }}
              />
            ))}
            <IconButton
              aria-label="Recomendaciones siguientes"
              onClick={() => goTo(current + 1)}
              disabled={current === pages - 1}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        )}
      </Box>
    </Box>
  );
}
