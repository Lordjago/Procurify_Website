import React from "react";

const PageData = ({ data, date: { availability, date } }) => {
  return (
    <div className="px-8 md:px-20 pt-15">
      {availability && <p className="mb-6 text-sm">{date}</p>}
      {data.map(d => (
        <div key={d.id}>
          <h1 className="mt-10 text-2xl font-bold">
       {d.header}
      </h1>
      <div className="mt-5">
        <span className="text-lg">
          {d.text}
        </span>
        <p className="mt-5 text-xl text-justify">
          {d.subtext}
        </p>
      </div>
        </div>
      ))}
      {/* {<p className="text-xl text-justify">
        This privacy policy, which applies whatever the means or the medium used
        to access the site procurify.com or its sub-domains and its services
        (hereinafter referred to as the "Site"), describes the conditions under
        which, when using the Site, we collect, use, and store information about
        you, including your personal data, as well as your choices regarding the
        collection, use and disclosure of these informations. By accessing and /
        or using the Site, you acknowledge that you have read, understood and
        agree to be subject to all the terms and conditions of this document. If
        you do not agree with this policy, you should not use the Site and its
        related services and you should not disclose your personal information
        to us.
      </p>
      <h1 className="mt-10 text-2xl font-bold">
        Article 1. Identity of the person who collects the personal data
      </h1>
      <div className="mt-5">
        <span className="text-lg">
          The person in charge of the privacy policy is
        </span>
        <p className="mt-5 text-xl text-justify">
          The company StarOfService, a simplified joint-stock company, with
          share capital of 31521.93 euros, registered with the Register of
          Commerce and Companies of VERSAILLES under number 751 713 215, whose
          registered office is located at 128 rue La Boétie, 75008 Paris, France
          (hereinafter referred to as "StarOfService", "nous").
        </p>
      </div>} */}
    </div>
  );
};

export default PageData;
