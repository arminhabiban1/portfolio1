import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          'Front end Developer',
        ],
        autoStart: true,
        loop: true,
        writeSpeed:10,
        deleteSpeed:50,
      }}
    />
  );
}

export default Type;
