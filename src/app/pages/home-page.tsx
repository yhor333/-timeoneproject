import { FC, Fragment } from "react";

import { MainHeader } from "../modules/main/main-header";
import { MainForm } from "../modules/main/main-form";
import { MainAdvantages } from "../modules/main/main-advantages";
import { MainDescription } from "../modules/main/main-description";
import { MainPlan } from "../modules/main/main-plan";
import { MainComments } from "../modules/main/main-comments";
import { MainQuestions } from "../modules/main/main-questions";
import { MainDiplom } from "../modules/main/main-diplom";
import { MainFooter } from "../modules/main/main-footer";
import { MainTeacher } from "../modules/main/main-teacher";

import CookieConsent from "../modules/main/main-cookie/cookie";

const HomePage: FC = () => {
  return (
    <Fragment>
      <MainHeader />
      <MainForm />
      <MainAdvantages />
      <MainDescription />
      <MainTeacher />
      <MainPlan />
      <MainComments />
      <MainQuestions />\
      <MainDiplom />
      <MainFooter />
      <CookieConsent />
    </Fragment>
  );
};

export default HomePage;
