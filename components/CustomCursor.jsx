import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);

  // const positionRef = useRef({
  //   mouseX: 0,
  //   mouseY: 0,
  //   destinationX: 0,
  //   destinationY: 0,
  //   distanceX: 0,
  //   distanceY: 0,
  //   key: -1,
  // });

  useEffect(() => {
    const mouseFunc = (event) => {
      const x = event.pageX - 10;
      const y = event.pageY - 10;
      const cursor = document.querySelector("#cursor");
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };

    document.addEventListener("mousemove", mouseFunc);

    return document.removeEventListener('mousedown', mouseFunc)
  }, []);





  return (
    <div>
      <div id="cursor"></div>
      {/* <div className="main-cursor" ref={mainCursor}></div>
      <div className="secondary-cursor" ref={secondaryCursor}></div> */}
    </div>
  );
};
export default CustomCursor;
