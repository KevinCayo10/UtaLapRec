import React from "react";

function TextWithLineBreaks({ onlyBreakFirstLine, styled, children }) {
  // Asegúrate de que 'children' sea una cadena antes de usar split
  const text = typeof children === "string" ? children : ""; // Valor predeterminado si children no es una cadena

  const stylesFirstLine = "text-sm font-semibold sm:text-base";
  const stylesOtherLines = "text-base italic font-normal";

  const lines = onlyBreakFirstLine
    ? text.split("\n").map((line, index) =>
        index === 0 ? (
          <span className={styled ? stylesFirstLine : ""} key={index}>
            {line.trim()}
            <br />
          </span>
        ) : (
          <span className={styled ? stylesOtherLines : ""} key={index}>
            {line.trim()}{" "}
          </span>
        )
      )
    : text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line.trim()}
          <br />
        </React.Fragment>
      ));

  return <>{lines}</>;
}

export default TextWithLineBreaks;
