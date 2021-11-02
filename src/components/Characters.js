import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

function Houses({houseData}) {
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Card variant="outlined">{houseData.name}</Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Houses;
