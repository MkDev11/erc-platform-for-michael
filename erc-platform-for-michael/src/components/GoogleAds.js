import { useEffect } from "react";

const GoogleAds = (props) => {
  useEffect(() => {
    setTimeout(() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log(window.adsbygoogle)
    }, 5000);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-7121418355222349"
      data-ad-slot={props.slot}
      style={{ display: "inline-block", height: 250, width: 300 }}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAds;
