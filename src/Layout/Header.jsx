import { Toolbar, AppBar, Typography, Link } from "@mui/material";

export const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ bgcolor: "white" }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Aji Portfolio
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};
