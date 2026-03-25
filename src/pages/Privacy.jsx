import React from "react";
import Download from "@features/OtherHomes/Download";
import Footer from "@features/Home/Footer";
import Header from "@features/Privacy & Terms/Header";
import PrivacyData from "@features/Privacy & Terms/Privacy";
const Privacy = () => {
  return (
    <div>
      <Header title={"Privacy Policy"} />
      <PrivacyData />
      <div className="mx-4 md:mx-20 my-10">
        <p>Procurify Support Team</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@withprocurify.com"
            className="text-indigo-500"
          >
            support@withprocurify.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
