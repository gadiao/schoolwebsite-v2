import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PictureAsPdfOutlined from "@mui/icons-material/PictureAsPdfOutlined";

export { MoreInfo };

const MoreInfo = () => {
  return (
    <Grid container spacing={8}>
      <Grid item md={6}>
        <Card
          sx={{
            textAlign: "center",
            p: 2,
            bgcolor: "secondary.main",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Stay Informed
            </Typography>
            <Typography>
              Get Updates on CFESchool's latest events and news to stay informed
              about our community and our mission.
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "column" }}>
            {/* Remember to edit Moreinfo input */}
            <TextField
              id="outlined-basic"
              label="Enter your email here"
              variant="outlined"
              size="large"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" size="small">
              Subscribe Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card
          sx={{
            textAlign: "center",
            p: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Our School Brochure
            </Typography>
            <Typography>
              Learn more about CFGESchool and our programs by downloading our
              school brochure.
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "column" }}>
            {/* Remember to edit Moreinfo input */}
            <PictureAsPdfOutlined color="primary" sx={{ fontSize: 60 }} />
            <Button variant="contained" size="small" sx={{ mt: 2 }}>
              Download Brochure
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
