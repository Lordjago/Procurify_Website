import React from "react";
import Footer from "@features/Home/Footer";
import Header from "@features/Privacy & Terms/Header";
import TermOfUse from "@features/TermOfUse/TermOfUse"

const TermsAndCondition = () => {
  return (
    <div>
      <Header title={"Terms of Use"} />
      <TermOfUse
        // date={{ availability: true, date: "Last updated on 23/09/2025" }}
      />
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

export default TermsAndCondition;
