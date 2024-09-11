

import { useEffect, useRef } from 'react';


function App() {
  window.console.log("C H O R O P L E T H . . .");


  // DATA CONTAINERS
  const usEducRef = useRef("");
  const usCounRef = useRef("");


  // Run request for US Education dataset when DOM is ready. Run only once.
  useEffect(() => {
    const request = new XMLHttpRequest();
    const url = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
    request.open("GET", url, true);
    request.send();
    request.onload = () => {
      window.console.count("\nR E Q U E S T - 1    S U C C E S S F U L");
      const json = JSON.parse(request.responseText);
      // window.console.log("US Education Dataset:", json);
      usEducRef.current = json;
      window.console.log("US Education Dataset:", usEducRef.current);
    };
  }, []);
  // Run request for US Education dataset when DOM is ready. Run only once.
  useEffect(() => {
    const request = new XMLHttpRequest();
    const url = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";
    request.open("GET", url, true);
    request.send();
    request.onload = () => {
      window.console.count("\nR E Q U E S T - 2    S U C C E S S F U L");
      const json = JSON.parse(request.responseText);
      usCounRef.current = json;
      window.console.log("US Education Dataset:", usCounRef.current);
    };
  }, [])


  return (
    <>
      <header>
        <h1 id="title"></h1>
        <h2 id="description"></h2>
      </header>
      <main>
        <div id="choropleth-box"></div>
        <div id="legend-box"></div>
        <div id="tooltip"></div>
      </main>
      <footer>
        <p>
          This <a
            href="https://github.com/ericraycodes/fcc-dv-choroplethmap-1.0/"
            target="_blank"
          >project</a> is made for freeCodeCamp certification purposes. Eric Ray Saladar. 2024.
        </p>
      </footer>
    </>
  );
}

export default App;
