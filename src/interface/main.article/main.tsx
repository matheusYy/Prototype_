import "./main.css";
import { useRef, useLayoutEffect, useState } from "react";
import { css } from "@stitches/react";
//sub interface
import { Title } from "./sub-interface/title";
export const Main = (): React.ReactElement => {
  const [u, setu] = useState({ x: 0, y: 0 });

  const gradient = {
    background: `radial-gradient(800px circle at ${u.x} ${u.y}, rgba(40, 230, 150, 0.06), transparent 40%)`,
  };
  const style = css({
    "&::before": {
      background: `radial-gradient(800px circle at ${u.x} ${u.y}, rgba(40, 230, 150, 0.06), transparent 40%)`,
    },
  });
  return (
    <main className="main-class">
        <Title />
      <article className="article-cards">
        <div
          onMouseMove={(e) => setu({ x: e.clientX, y: e.clientY })}
          className="card-main-article- {}"
          style={gradient}
        >
          client x: {u.x}
          client y: {u.y}
        </div>
        <div style={{}} className="card-main-article-"></div>
        <div style={gradient} className="card-main-article-"></div>
        <div style={gradient} className="card-main-article-"></div>
        <div style={gradient} className="card-main-article-"></div>
        <div style={gradient} className="card-main-article-"></div>
      </article>
    </main>
  );
};
