import { AboutCompany } from "../../components/AboutCompany";
import { PastTransactions } from "../../components/PastTransactions";
import { Question } from "../../components/Question";
import { SectionDivider } from "../../components/SectionDivider";
import { SendEmail } from "../../components/SendEmail";
import { Statistik } from "../../components/Statistik";
import { Tariffs } from "../../components/Tariffs";

const HomePage = () => {
  return (
    <>
      <div id="send-email">
        <SendEmail />
      </div>

      <SectionDivider />

      <div id="numbers">
        <Statistik />
      </div>

      <div id="deals">
        <PastTransactions />
      </div>

      <SectionDivider />

      <div id="about">
        <AboutCompany />
      </div>

      <div id="tariffs">
        <Tariffs />
      </div>

      <div id="faq">
        <Question />
      </div>
    </>
  );
};

export default HomePage;
