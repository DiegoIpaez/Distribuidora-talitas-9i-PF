import React from "react";
import Maps from "../components/Maps";
import SendEmailC from "../components/SendEmailC";

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* articulo 1 */}
        <div className="col-lg-6 col-12">
          <Maps />
        
        </div>
        {/* articulo 2 */}
        <div className="col-lg-6 col-12 ">
          <SendEmailC />
        </div>
      </div>
    </div>
  );
};

export default Contact;
