window.addEventListener("change", (e) => {
  e.preventDefault();

  class APIs {
    constructor() {
      var selectItem = document.getElementById("selectValue").value;
      const displayItems = document.getElementById("displayItems");

      switch (selectItem) {
        case "1":
          displayItems.innerHTML = `<button type="text" id="searchBTN" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Search APIs!
                                                </button>`;
          var dis = document.getElementById("searchBTN");
          var loadDisplay = document.getElementById("loadDisplay");

          let url = "https://api.publicapis.org/entries"; //https://api.publicapis.org/entries
          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://api.publicapis.org/entries")
              .then((res) => res.json())
              .then((data) => {
                let singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "2":
          displayItems.innerHTML = `<button type="text" id="fact" class="input-div-item input-btn-lg bg-warning text-success">
            Get Cat Facts!
        </button>`;
          var dis = document.getElementById("fact");
          var loadDisplay = document.getElementById("loadDisplay");

          //   let url = "https://api.publicapis.org/entries"; //https://api.publicapis.org/entries
          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
        <div class="line"></div>
        <hr>
        <div class="circle mb-2"></div>
        <div class="line"></div>
        <hr>
        <div class="circle mb-2"></div>
        <div class="line">
        </div>`;

            await fetch("https://catfact.ninja/fact")
              .then((res) => res.json())
              .then((data) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-success";
                loadDisplay.innerHTML =
                  `<div class="input-div-item select-item bg-white text-success">` +
                  data.fact +
                  `</div>`;
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "3":
          displayItems.innerHTML = `<button type="text" id="coin" class="input-div-item input-btn-lg bg-warning text-success">
            Search APIs!
        </button>`;
          var dis = document.getElementById("coin");
          var loadDisplay = document.getElementById("loadDisplay");

          //https://api.publicapis.org/entries
          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
        <div class="line"></div>
        <hr>
        <div class="circle mb-2"></div>
        <div class="line"></div>
        <hr>
        <div class="circle mb-2"></div>
        <div class="line">
        </div>`;

            await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
              .then((res) => res.json())
              .then((data) => {
                let eur = data.bpi.EUR;
                let gbp = data.bpi.GBP;
                let usd = data.bpi.USD;
                document.querySelector("#loadHolder").className =
                  "card-header bg-success";
                loadDisplay.innerHTML =
                  `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <br/>
                <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">symbol</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>` +
                  eur.code +
                  `</td>
                        <td>` +
                  eur.symbol +
                  `</td>
                        <td>` +
                  eur.rate +
                  `</td>
                        <td>` +
                  eur.description +
                  `</td>
                    </tr>
                    <tr>
                        <td>` +
                  gbp.code +
                  `</td>
                        <td>` +
                  gbp.symbol +
                  `</td>
                        <td>` +
                  gbp.rate +
                  `</td>
                        <td>` +
                  gbp.description +
                  `</td>
                    </tr>
                    <tr>
                    <td>` +
                  usd.code +
                  `</td>
                    <td>` +
                  usd.symbol +
                  `</td>
                    <td>` +
                  usd.rate +
                  `</td>
                    <td>` +
                  usd.description +
                  `</td>
                </tr>
                    </tbody>
                </table>
                <div>` +
                  data.disclaimer +
                  `<div/>
                  <br /><br />
                  <div>Updated:` +
                  data.time.updated +
                  `<div/>
                </div>
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                

        `;
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "4":
          displayItems.innerHTML = `<button type="text" id="bored" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Search APIs!
                                                </button>`;
          var dis = document.getElementById("bored");
          var loadDisplay = document.getElementById("loadDisplay");

          //   let url = "https://api.publicapis.org/entries"; //https://api.publicapis.org/entries
          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://www.boredapi.com/api/activity")
              .then((res) => res.json())
              .then((data) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-success";
                loadDisplay.innerHTML =
                  `<div class="input-div-item select-item bg-white text-success"> <span class="text-warning">Do this: </span>` +
                  data.activity +
                  `<br/> (:</div>`;
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "5":
          displayItems.innerHTML = `<input type="text" name="user" id="user" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Age..."> 
                                    <button id="agify" class="input-div-item input-btn bg-warning"></button>`;
          var dis = document.getElementById("agify");
          var loadDisplay = document.getElementById("loadDisplay");
          let user = document.querySelector("#user");
          console.log(user.textContent);

          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            console.log(user.value);
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://api.agify.io?name=" + user.value + "")
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                let singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "6":
          displayItems.innerHTML = `<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> 
                                    <button id="gender" class="input-div-item input-btn bg-warning"></button>`;
          var dis = document.getElementById("gender");
          var loadDisplay = document.getElementById("loadDisplay");

          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://api.genderize.io?name=" + gender + "")
              .then((res) => res.json())
              .then((data) => {
                singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "7":
          displayItems.innerHTML = `<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> 
                                    <button id="nation" class="input-div-item input-btn bg-warning"></button>`;
          var nation = document.getElementById("nation");
          var loadDisplay = document.getElementById("loadDisplay");

          nation.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://api.nationalize.io?name=" + nation + "")
              .then((res) => res.json())
              .then((data) => {
                singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "8":
          displayItems.innerHTML = `<button type="text" id="usa" class="input-div-item input-btn-lg bg-warning text-success">
                                          Get USA Population
                                    </button>`;
          var dis = document.getElementById("usa");
          var loadDisplay = document.getElementById("loadDisplay");

          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch(
              "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                let singleData = "";
                let datas = data.data;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["Nation"] +
                    `</td>
                                                <td>` +
                    da["Year"] +
                    `</td>
                                                <td>` +
                    da["Population"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Nation</th>
                                                                    <th scope="col">Year</th>
                                                                    <th scope="col">Population</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "9":
          displayItems.innerHTML = `<button type="text" id="dog" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Display Dog Pictures
                                                </button>`;
          var dis = document.getElementById("dog");
          var loadDisplay = document.getElementById("loadDisplay");

          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://dog.ceo/api/breeds/image/random")
              .then((res) => res.json())
              .then((data) => {
                let img = data.message;

                loadDisplay.innerHTML =
                  '<img src="' +
                  img +
                  '" alt="Dog Images" style="width: 100%; height: 100%">';
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "10":
          displayItems.innerHTML = `<button type="text" id="getIP" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Get Your IP Address
                                                </button>`;
          var getIP = document.getElementById("getIP");
          var loadDisplay = document.getElementById("loadDisplay");

          getIP.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://api.ipify.org?format=json")
              .then((res) => res.json())
              .then((data) => {
                loadDisplay.innerHTML =
                  `<div class="text-success">Your IP address is <span class="text-warning">` +
                  data.ip +
                  `</span></div>`;
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "11":
          displayItems.innerHTML = `<button type="text" id="ipinfo" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Get Infomation About An IP Address
                                                </button>`;
          var dis = document.getElementById("ipinfo");
          var loadDisplay = document.getElementById("loadDisplay");

          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://ipinfo.io/105.112.154.200/geo")
              .then((res) => res.json())
              .then((da) => {
                let e =
                  `<tr>
                                                <td>` +
                  da["ip"] +
                  `</td>
                                                <td>` +
                  da["city"] +
                  `</td>
                                                <td>` +
                  da["country"] +
                  `</td>
                                                <td>` +
                  da["loc"] +
                  `</td>
                                            </tr>`;
                let dataSegment =
                  `
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">IP Address</th>
                                                                    <th scope="col">City</th>
                                                                    <th scope="col">Country</th>
                                                                    <th scope="col">Location Chart</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                  e +
                  `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                `;
                loadDisplay.innerHTML = dataSegment;
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "12":
          displayItems.innerHTML = `<button type="text" id="jokes" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Let Get Some Jokes (:
                                                </button>`;
          var jokes = document.getElementById("jokes");
          var loadDisplay = document.getElementById("loadDisplay");

          //   let url = "https://api.publicapis.org/entries"; //https://api.publicapis.org/entries
          jokes.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            let option = {
              method: "GET",
              mode: "no-cors",
            };
            await fetch(
              "https://official-joke-api.appspot.com/random_joke",
              option
            )
              .then((res) => res.json())
              .then((data) => {
                let singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;
        case "13":
          displayItems.innerHTML = `<button type="text" id="users" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Get Random Users
                                                </button>`;
          var users = document.getElementById("users");
          var loadDisplay = document.getElementById("loadDisplay");

          //   let url = "https://api.publicapis.org/entries"; //https://api.publicapis.org/entries
          users.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://randomuser.me/api/")
              .then((res) => res.json())
              .then((da) => {
                let singleData = "";
                console.log(da);
                // let datas = data;
                // datas.forEach((da) => {
                let e =
                  `<tr>
                                                <td>` +
                  da["info"] +
                  `</td>
                                                <td>` +
                  da["Category"] +
                  `</td>
                                                <td>` +
                  da["Description"] +
                  `</td>
                                                <td>` +
                  da["Link"] +
                  `</td>
                                            </tr>`;
                singleData += e;
                let dataSegment =
                  `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                  singleData +
                  `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                loadDisplay.innerHTML = dataSegment;
                // });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;

        case "14":
          displayItems.innerHTML = `<button type="text" id="list" class="input-div-item input-btn-lg bg-warning text-success">
                                                    Get University List
                                                </button>`;
          var dis = document.getElementById("list");
          var loadDisplay = document.getElementById("loadDisplay");

          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch(
              "https://universities.hipolabs.com/search?country=United+State"
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                let singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;

        case "15":
          displayItems.innerHTML = `<input type="file" id="zip" class="input-div-item input-btn-lg bg-warning text-success" />`;
          var dis = document.getElementById("zip");
          var loadDisplay = document.getElementById("loadDisplay");

          //   let url = "https://api.publicapis.org/entries"; //https://api.publicapis.org/entries
          dis.addEventListener("click", async function getData(e) {
            e.preventDefault();
            document.querySelector("#loadHolder").className =
              "card-header bg-success";
            loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line"></div>
                                                <hr>
                                                <div class="circle mb-2"></div>
                                                <div class="line">
                                                </div>`;

            await fetch("https://api.zippopotam.us/us/33162")
              .then((res) => res.json())
              .then((data) => {
                singleData = "";
                let datas = data.entries;
                datas.forEach((da) => {
                  let e =
                    `<tr>
                                                <td>` +
                    da["API"] +
                    `</td>
                                                <td>` +
                    da["Category"] +
                    `</td>
                                                <td>` +
                    da["Description"] +
                    `</td>
                                                <td>` +
                    da["Link"] +
                    `</td>
                                            </tr>`;
                  singleData += e;
                  let dataSegment =
                    `<input class="form-control" id="myInput" type="text" placeholder="Search.." />
                                                        <br/>
                                                        <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Link</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ` +
                    singleData +
                    `
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item active" aria-current="page">
                                                                    <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        

                                                `;
                  loadDisplay.innerHTML = dataSegment;
                });
                // for(let x in datas) {

                // }
              })
              .catch((error) => {
                document.querySelector("#loadHolder").className =
                  "card-header bg-danger";
                loadDisplay.innerHTML =
                  '<div class="input-div-item select-item bg-white text-danger">Something Went Wrong Will Fetching Data...</div>';
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.innerHTML =
                  '<div class="card-body bg-danger text-white px-3" id="errorMessage">We are currently having issues that says ' +
                  error +
                  '<button id="message" class="btn btn-warning float-end">X</button></div>';
                let message = document.getElementById("message");
                message.addEventListener("click", () => {
                  errorMessage.style.display = "none";
                });
              });
          });
          break;

        default:
          displayItems.innerHTML = `<div class="input-div-item select-item bg-white text-success">
                                                Please Select An Option...
                                              </div>`;
          break;
      }
    }
  }

  const firstPerson = new APIs();
});
