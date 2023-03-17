import "./scss/title.css";
import { useEffect, useState } from "react";
export const Title = (): React.ReactElement => {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    const obsever = new IntersectionObserver((entries) => {
      entries.forEach((entrie) => {
        const titleStock = document.querySelectorAll('.title-animation-stock')
        const titleColor = document.querySelectorAll('.title-animation-color')
        
        if (entrie.isIntersecting == true) { 
          setOpacity(() => 1)
          titleStock.forEach((el) => {
            el.classList.add('animate-stock')
          })
          titleColor.forEach((el) => {
            el.classList.add('animate-color')
          })
        } else {
          setOpacity(() => 0)
          titleStock.forEach((el) => {
            el.classList.remove('animate-stock')
          })
          titleColor.forEach((el) => {
            el.classList.remove('animate-color')
          })
        }
      });
    });
   
    const el: any = document.querySelectorAll(".container-title");
    el.forEach((e: any) => obsever.observe(e))
  });
  return (
    <aside className="title-container-card-stock">
      <div className="container-title">
        <div className="title-container-stock" >
          <span className="title-animation-stock" style={{opacity: `${opacity}`}}>m</span>
          <span className="title-animation-stock" style={{opacity: `${opacity}`}}>a</span>
          <span className="title-animation-stock" style={{opacity: `${opacity}`}}>t</span>
          <span className="title-animation-stock" style={{opacity: `${opacity}`}}>h</span>
          <span className="title-animation-stock" style={{opacity: `${opacity}`}}>e</span>
        </div>
      </div>
      <div className="container-title">
        <div className="title-container-card-color">
          <span className="title-animation-color" style={{opacity: `${opacity}`}}>m</span>
          <span className="title-animation-color" style={{opacity: `${opacity}`}}>a</span>
          <span className="title-animation-color" style={{opacity: `${opacity}`}}>t</span>
          <span className="title-animation-color" style={{opacity: `${opacity}`}}>h</span>
          <span className="title-animation-color" style={{opacity: `${opacity}`}}>e</span>
        </div>
      </div>
    </aside>
  );
};
