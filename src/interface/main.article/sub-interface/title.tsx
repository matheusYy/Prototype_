import "./scss/title.css";
import { useEffect } from "react";
export const Title = (): React.ReactElement => {
  useEffect(() => {
    const obsever = new IntersectionObserver((entries) => {
      entries.forEach((entrie) => {
        console.log(entrie.intersectionRatio);

        if (entrie.isIntersecting == true) {
          entrie.target.setAttribute("is_intersecting", "true");
        } else {
          entrie.target.setAttribute("is_intersecting", "false");
        }
      });
    });
    const el: any = document.getElementById("title");
    obsever.observe(el);
  });
  return (
    <aside className="title-container-card-stock" id="title">
      <div className="container-title">
        <div className="title-container-stock">
          <span className="title-animation-stock">m</span>
          <span className="title-animation-stock">a</span>
          <span className="title-animation-stock">t</span>
          <span className="title-animation-stock">h</span>
          <span className="title-animation-stock">e</span>
        </div>
      </div>
      <div className="container-title">
        <div className="title-container-card-color" id="title">
          <span className="title-animation-color">m</span>
          <span className="title-animation-color">a</span>
          <span className="title-animation-color">t</span>
          <span className="title-animation-color">h</span>
          <span className="title-animation-color">e</span>
        </div>
      </div>
    </aside>
  );
};
