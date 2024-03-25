'use client'

import { FC } from "react";

export default function Error({error}: {error: Error}) {
  return (
    <section className="error">

      <h2>Oooppppps!!! {error.message}</h2>

    </section>
  );
}
 
// export default Error;