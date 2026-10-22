import { Box, Typography, Grid, Avatar } from '@mui/material';
import { ReactComponent as UaiLogo } from '../assets/icons/uai.svg';
import { ReactComponent as Hceres } from '../assets/icons/hceres.svg';
import { ReactComponent as Oca } from '../assets/icons/oca.svg';
import { ReactComponent as Ocp } from '../assets/icons/ocp.svg';

const educationData = [
  {
    logo: <UaiLogo style={{ width: 60, height: 60, background: 'transparent'  }} />, 
    title: 'Ingeniería en Sistemas Informáticos – Universidad Abierta Interamericana',
    hceresLogo: <Hceres style={{ width: 50, height: 50, background: 'transparent'  }} />,
    hceresDescription: (
      <>
        Primera universidad en Sudamérica acreditada por <strong>Hcéres </strong> (organismo oficial francés de acreditación universitaria e investigación), que certifica que la UAI cumple con los <strong>estándares de calidad educativa de la Unión Europea.</strong>
      </>
    ),
  },
];

const certificationsData = [
  {
    logo: <Oca style={{ width: 60, height: 60, background: 'transparent'  }} />, 
    title: 'Oracle Certified Associate',
    status: 'Obtenida',
  },
  {
    logo: <Ocp style={{ width: 60, height: 60, background: 'transparent'  }} />, 
    title: 'Oracle Certified Professional',
    status: 'En preparación',
  },
];

export default function EducationCertifications() {
  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto", py: 6, px: { xs: 2, sm: 6 } }}>
      <Typography variant="body1" sx={{ mb: 4 }}>
        En esta sección se presentan exclusivamente títulos universitarios emitidos por
        instituciones reconocidas y certificaciones oficiales avaladas por corporaciones líderes del sector.
      </Typography>

      <Grid container spacing={4}>
        {/* Educación */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Educación
          </Typography>
          {educationData.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 50, height: 50, mb: 1, bgcolor: "#E8D7C5", border: "1px solid #4F2928",mr: 2 }}>
                    {edu.logo}
                </Avatar>
                <Typography variant="subtitle1" fontWeight="bold">
                  {edu.title}
                </Typography>
              </Box>
              {edu.hceresLogo && (
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
                  <Avatar sx={{ width: 40, height: 40, mb: 1, bgcolor: "#E8D7C5", border: "1px solid #4F2928",mr: 2, mt: 0 }}>
                    {edu.hceresLogo}
                 </Avatar>
                  <Typography variant="caption">{edu.hceresDescription}</Typography>
                </Box>
              )}
            </Box>
          ))}
        </Grid>

        {/* Certificaciones */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Certificaciones
          </Typography>
          {certificationsData.map((cert, index) => (
            <Box key={index} sx={{ display: 'flex', mb: 2 }}>
              <Avatar sx={{ width: 50, height: 50, mb: 1, bgcolor: "#E8D7C5", border: "1px solid #4F2928",mr: 2 }}>
                    {cert.logo}
              </Avatar>  
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {cert.title}
                </Typography>
                <Typography variant="body2">{cert.status}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
