import { Avatar, Box, Card, CardContent, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

const avatarSx = {
  width: 56,
  height: 56,
  bgcolor: "#F0E6E2",
  color: "#4F2928",
  border: "2px solid #4F2928",
  fontWeight: 600,
};

/**
 * One recommendation card. Real recommendations and the generic examples
 * shown while there are none use exactly the same look; the only difference
 * is that an example has no link (it has no `linkedin` value).
 */
export default function RecommendationCard({ name, role, company, text, photo, linkedin }) {
  return (
    <Card
      data-testid="recommendation"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.6)",
        border: "2px solid rgba(79,41,40,0.18)",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {`“${text}”`}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar src={photo} alt={name} sx={avatarSx}>
            {getInitials(name)}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography variant="caption" component="div" sx={{ color: "text.primary" }}>
              {role}
            </Typography>
            <Typography variant="caption" component="div" sx={{ color: "text.primary" }}>
              {company}
            </Typography>
          </Box>
          {linkedin ? (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Perfil de LinkedIn de ${name}`}
              sx={{ ml: "auto", color: "#4F2928", display: "inline-flex" }}
            >
              <LinkedInIcon />
            </Link>
          ) : (
            <LinkedInIcon aria-hidden="true" sx={{ ml: "auto", color: "#4F2928" }} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
