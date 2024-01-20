import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./flappyBird/build/flappyBird.loader.js",
    dataUrl: "./flappyBird/build/flappyBird.data",
    frameworkUrl: "./flappyBird/build/flappyBird.framework.js",
    codeUrl: "./flappyBird/build/flappyBird.wasm",
  });

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      // Adjust dimensions as needed here
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        justifySelf: "center",
        alignSelf: "center",
      }}
    />
  );
}

export default App;
