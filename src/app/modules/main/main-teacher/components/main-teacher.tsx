import { FC } from "react";

import { Box, Container, Typography } from "@mui/material";

import teacher from "../../../../../assets/img/teacher.png";

const MainTeacher: FC = () => {
  return (
    <Box id={"teacher"} sx={{ backgroundColor: "secondary.light", py: 10 }}>
      <Container sx={{ color: "secondary.main" }}>
        <Typography component={"h4"} sx={{ fontSize: 45, mb: 3 }}>
          Преподаватель
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "secondary.main",
          }}>
          <Box sx={{ mr: 2 }}>
            <img
              style={{
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                border: "4px solid #c9831a",
              }}
              alt="teacher"
              src={teacher}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography component={"h5"}>Christy Bozic, PhD, PMP</Typography>
            <Typography component={"h5"}>
              Профессор инженерного менеджмента
              <br /> компании Lockheed Martin
            </Typography>
          </Box>
        </Box>
        <Typography color={"secondary.main"} sx={{ mt: 2 }} component={"p"}>
          Кристи Бозич присоединилась к Университету Колорадо Боулдер в январе
          2015 года в качестве стипендиата и помощника директора факультета по
          обучению студентов в рамках программы инженерного менеджмента Lockheed
          Martin. Она является преподавателем-исследователем, заинтересованным в
          том, чтобы помочь студентам соединить их инженерное образование с
          карьерой в промышленности путем развития деловых качеств. В своей
          академической карьере она занимала преподавательские и
          административные должности в Университете Пердью в Вест-Лафайетте,
          штат Индонезия. В Purdue она занимала должность директора двух
          региональных кампусов и работала в сфере взаимодействия с
          университетом в качестве менеджера по бизнес-инновациям. Ее
          корпоративный опыт включает в себя работу менеджером по глобальному
          бизнесу в TDK Corporation of America и инженером по продажам в
          автомобильном подразделении Federal Mogul. Получив степень бакалавра в
          Университете Пердью и MBA в Батлере, доктор Бозич получила степень
          доктора философии в Университете Пердью в области учебных программ и
          преподавания с исследовательским акцентом на активную среду обучения,
          ориентированную на студентов, в инженерном образовании. В области
          исследований и преподавания она специализируется на инженерном
          менеджменте, уделяя особое внимание разработке учебных программ в
          области управления инновациями и инженерного предпринимательства.
        </Typography>
      </Container>
    </Box>
  );
};

export default MainTeacher;
