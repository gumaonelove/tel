import React from "react";

export const DomLoaded = (): boolean => {
  const [domLoaded, setDomLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded;
};
