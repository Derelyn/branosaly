import React, { useEffect } from "react";

function PageTitle(props) {
  useEffect(() => {
    document.title = `${props.title} | Branislav Saly`;
    window.scrollTo(0, 0);
  }, []);
  return <>{props.children}</>;
}

export default PageTitle;
