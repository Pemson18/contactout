import * as React from "react";
import "./App.css";
import "./script.js";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Education } from "@styled-icons/zondicons/Education";
import { Home } from "@styled-icons/icomoon/Home";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";
import { Folder } from "@styled-icons/boxicons-regular/Folder";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { Bin } from "@styled-icons/icomoon/Bin";
import { Export } from "@styled-icons/boxicons-regular/Export";
import { Note } from "@styled-icons/material-outlined/Note";
import { Location } from "@styled-icons/evil/Location";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { Mail } from "@styled-icons/ionicons-outline/Mail";
import { Button } from "@mui/material";
import { ChevronUpCircle } from "@styled-icons/boxicons-solid/ChevronUpCircle";

function App() {
  function myfunction(e) {
    // get the nav
    var nav = document.getElementById(`nav-acc-1`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();
      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction2(e) {
    var nav = document.getElementById(`nav-acc-2`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction3(e) {
    var nav = document.getElementById(`nav-acc-3`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction11(e) {
    var nav = document.getElementById(`nav-acc-1-1`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction12(e) {
    var nav = document.getElementById(`nav-acc-1-2`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction13(e) {
    var nav = document.getElementById(`nav-acc-1-3`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction21(e) {
    var nav = document.getElementById(`nav-acc-2-1`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction22(e) {
    var nav = document.getElementById(`nav-acc-2-2`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction23(e) {
    var nav = document.getElementById(`nav-acc-2-3`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction31(e) {
    var nav = document.getElementById(`nav-acc-3-1`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction4(e) {
    var nav = document.getElementById(`nav-acc-4`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction32(e) {
    var nav = document.getElementById(`nav-acc-3-2`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction33(e) {
    var nav = document.getElementById(`nav-acc-3-3`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction41(e) {
    var nav = document.getElementById(`nav-acc-4-1`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction42(e) {
    var nav = document.getElementById(`nav-acc-4-2`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  function myfunction43(e) {
    var nav = document.getElementById(`nav-acc-4-3`);
    if (nav.classList.contains("hide")) {
      e.preventDefault();

      nav.classList.add("show");
      nav.classList.remove("hide");
    } else {
      e.preventDefault();

      nav.classList.add("hide");
      nav.classList.remove("show");
    }
  }

  return (
    <div id="root" className="App">
      <header className="App-header">
        <table className={"table-head"}>
          <tr>
            <td>
              {" "}
              <section>
                <h1>Lead List</h1>
              </section>
            </td>
            <td>
              {" "}
              <section>
                <div className={"search"}>
                  <input
                    type="text"
                    name="search"
                    placeholder="Type to Search"
                  />
                  <Search color={"blueviolet"} size={"2rem"} />
                </div>
              </section>
            </td>
          </tr>
          <tr>
            <td>
              <section className="display-section">
                <div className={"display"}>
                  <label for="display">Display</label>
                  <select type="dropdown" name="display">
                    <option value="0">My Leads</option>
                    <option value="1">Other Leads</option>
                    <option value="2">Paid Leads</option>
                    <option value="3">Adv Leads</option>
                  </select>
                </div>
              </section>
            </td>

            <td>
              <section>
                <div className={"folder"}>
                  <label for="folder">Folder</label>
                  <select type="dropdown" name="folder">
                    <option value="0">All</option>
                    <option value="1">Current</option>
                    <option value="2">Selected</option>
                    <option value="3">My Folder</option>
                  </select>
                </div>
              </section>
            </td>
          </tr>
          <tr>
            <td>
              <section className="right-section">
                <Button>
                  <Plus color={"blueviolet"} size={"2rem"} />
                </Button>

                <Button>
                  <Export color={"blueviolet"} size={"2rem"} />
                </Button>

                <Button>
                  <Folder color={"blueviolet"} size={"2rem"} />
                </Button>

                <Button>
                  <Bin color={"blueviolet"} size={"2rem"} />
                </Button>
              </section>
            </td>
          </tr>
        </table>
      </header>
      <section>
        <table className="main-table">
          <tr>
            <td>
              <input type="checkbox" name="All" />
              All
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" name="All" />
            </td>
            <td>
              <a href="nav-acc-1" onClick={myfunction}>
                Pemson Pereira
              </a>
              <nav id="nav-acc-1" className="hide">
                <ul>
                  <li>
                    <a href="nav-acc-1-1" onClick={myfunction11}>
                      Account
                    </a>

                    <nav id="nav-acc-1-1" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-1-2" onClick={myfunction12}>
                      Your Exports
                    </a>
                    <nav id="nav-acc-1-2" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-1-3" onClick={myfunction13}>
                      Integrations
                    </a>

                    <nav id="nav-acc-1-3" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>Log Out</li>
                </ul>
              </nav>{" "}
              <a href="https://www.linkedin.com/in/pemson18">
                <Linkedin size="1rem" />
              </a>
              <p>E-commerce / Magento Developer Information Services </p>
              <Location size={"1rem"} />
              Goa India
            </td>
            <td>
              <Home size={"1rem"} color={"lightgreen"} /> Magento Developer at
              Openwave Computing
              <p>
                <Education size={"1rem"} />
                Graduated from Global Institute of Science and Technology
                2010-2012
              </p>
            </td>
            <td>
              <Mail size={"1rem"} color={"lightgreen"} />
              rob@dealsextra.au.com
              <br />
              <TelephoneFill size={"1rem"} color={"lightgreen"} />
              9049560250
            </td>
            <td>
              12.08.2021 <br />
              <Note size={"1rem"} color={"lightgreen"} />
              Notes (0)
            </td>
          </tr>

          <tr>
            {" "}
            <td>
              <input type="checkbox" name="All" />
            </td>
            <td>
              <a href="nav-acc-2" onClick={myfunction2}>
                Gavin Pereira
              </a>
              <nav id="nav-acc-2" className="hide">
                <ul>
                  <li>
                    <a href="nav-acc-2-1" onClick={myfunction21}>
                      Account
                    </a>

                    <nav id="nav-acc-2-1" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-2-2" onClick={myfunction22}>
                      Your Exports
                    </a>
                    <nav id="nav-acc-2-2" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-2-3" onClick={myfunction23}>
                      Integrations
                    </a>

                    <nav id="nav-acc-2-3" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>Log Out</li>
                </ul>
              </nav>{" "}
              <a href="https://www.linkedin.com/in/pemson18">
                <Linkedin size="1rem" />
              </a>
              <p>E-commerce / Magento Developer Information Services </p>
              <Location size={"1rem"} />
              Goa India
            </td>
            <td>
              <Home size={"1rem"} color={"lightgreen"} /> Magento Developer at
              Openwave Computing
              <p>
                <Education size={"1rem"} />
                Graduated from Global Institute of Science and Technology
                2010-2012
              </p>
            </td>
            <td>
              <Mail size={"1rem"} color={"lightgreen"} />
              rob@dealsextra.au.com
              <br />
              <TelephoneFill size={"1rem"} color={"lightgreen"} />
              9049560250
            </td>
            <td>
              12.08.2021 <br />
              <Note size={"1rem"} color={"lightgreen"} />
              Notes (0)
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" name="All" />
            </td>
            <td>
              <a href="nav-acc-3" onClick={myfunction3}>
                Jason Pereira
              </a>
              <nav id="nav-acc-3" className="hide">
                <ul>
                  <li>
                    <a href="nav-acc-1-1" onClick={myfunction11}>
                      Account
                    </a>

                    <nav id="nav-acc-3-1" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-3-2" onClick={myfunction32}>
                      Your Exports
                    </a>
                    <nav id="nav-acc-3-2" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-3-3" onClick={myfunction33}>
                      Integrations
                    </a>

                    <nav id="nav-acc-3-3" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>Log Out</li>
                </ul>
              </nav>{" "}
              <a href="https://www.linkedin.com/in/pemson18">
                <Linkedin size="1rem" />
              </a>
              <p>E-commerce / Magento Developer Information Services </p>
              <Location size={"1rem"} />
              Goa India
            </td>
            <td>
              <Home size={"1rem"} color={"lightgreen"} /> Magento Developer at
              Openwave Computing
              <p>
                <Education size={"1rem"} />
                Graduated from Global Institute of Science and Technology
                2010-2012
              </p>
            </td>
            <td>
              <Mail size={"1rem"} color={"lightgreen"} />
              rob@dealsextra.au.com
              <br />
              <TelephoneFill size={"1rem"} color={"lightgreen"} />
              9049560250
            </td>
            <td>
              12.08.2021 <br />
              <Note size={"1rem"} color={"lightgreen"} />
              Notes (0)
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" name="All" />
            </td>
            <td>
              <a href="nav-acc-4" onClick={myfunction4}>
                Ashwan Pereira
              </a>
              <nav id="nav-acc-4" className="hide">
                <ul>
                  <li>
                    <a href="nav-acc-4-1" onClick={myfunction41}>
                      Account
                    </a>
                    <nav id="nav-acc-4-1" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-4-2" onClick={myfunction42}>
                      Your Exports
                    </a>
                    <nav id="nav-acc-4-2" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <a href="nav-acc-4-3" onClick={myfunction43}>
                      Integrations
                    </a>

                    <nav id="nav-acc-4-3" className="hide">
                      <ul>
                        <li>Account</li>
                        <li>Your Exports</li>
                        <li>Integrations</li>
                      </ul>
                    </nav>
                  </li>
                  <li>Log Out</li>
                </ul>
              </nav>{" "}
              <a href="https://www.linkedin.com/in/pemson18">
                <Linkedin size="1rem" />
              </a>
              <p>E-commerce / Magento Developer Information Services </p>
              <Location size={"1rem"} />
              Goa India
            </td>
            <td>
              <Home size={"1rem"} color={"lightgreen"} /> Magento Developer at
              Openwave Computing
              <p>
                <Education size={"1rem"} />
                Graduated from Global Institute of Science and Technology
                2010-2012
              </p>
            </td>
            <td>
              <Mail size={"1rem"} color={"lightgreen"} />
              rob@dealsextra.au.com
              <br />
              <TelephoneFill size={"1rem"} color={"lightgreen"} />
              9049560250
            </td>
            <td>
              12.08.2021 <br />
              <Note size={"1rem"} color={"lightgreen"} />
              Notes (0)
            </td>
          </tr>
        </table>
      </section>
      <div className="chev">
        {" "}
        <a href="#root">
          {" "}
          <ChevronUpCircle size={"3rem"} color={"blueviolet"} />
        </a>
      </div>
    </div>
  );
}

export default App;
