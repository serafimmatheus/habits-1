import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MdGroups, MdHome, MdLogin } from "react-icons/md";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  const handleExit = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontFamily: "SwingHappy, Arial" }}
          >
            Good Habits
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="medium"
              color="inherit"
              onClick={() => history.push("/dashboard")}
            >
              <MdHome />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  "@media (max-width:480px)": {
                    display: "none",
                  },
                }}
              >
                Hábitos
              </Typography>
            </IconButton>
            <IconButton
              size="medium"
              color="inherit"
              onClick={() => history.push("/dashboard/groups")}
            >
              <MdGroups />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  "@media (max-width:480px)": {
                    display: "none",
                  },
                }}
              >
                Grupos
              </Typography>
            </IconButton>
            <IconButton
              size="medium"
              color="inherit"
              onClick={() => handleExit()}
            >
              <MdLogin />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  "@media (max-width:480px)": {
                    display: "none",
                  },
                }}
              >
                Sair
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
