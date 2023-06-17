import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import smLogo from "../../../../../assets/img/logo.svg";

const MainFormAbout: FC = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        maxWidth: "50%",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}>
        <Box
          sx={{
            position: "absolute",
            top: -50,
            left: 0,
            display: "flex",
            alignItems: "center",
            color: "secondary.main",
          }}>
          <Typography sx={{ mr: 2 }} component={"p"}>
            От партнера
          </Typography>
          <img
            style={{ width: 300, height: 50 }}
            alt="maryland-logo"
            src={smLogo}></img>
        </Box>
        <Box>
          <Typography
            color={"secondary.main"}
            component={"h3"}
            sx={{ fontSize: "30px", fontWeight: "600", mb: 3 }}
            variant="subtitle1">
            Специализация Управление проектами
          </Typography>
          <Typography color={"secondary.main"} sx={{ mb: 2 }} component={"p"}>
            Курс предоставляет участникам уникальную возможность освоить основы
            и передовые методики в области управления проектами. Этот курс
            разработан для тех, кто стремится эффективно организовывать и
            реализовывать проекты любой сложности.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainFormAbout;
