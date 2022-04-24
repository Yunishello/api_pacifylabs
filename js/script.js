window.addEventListener("change", (e) => {
  e.preventDefault();
  var selectItem = document.getElementById("selectValue").value;
  const displayItems = document.getElementById("displayItems");

  switch (selectItem) {
    case "1":
      displayItems.innerHTML = `<button type="text" id="searchBTN" class="input-div-item input-btn-lg bg-warning text-success">
                                         Search APIs!
                                      </button>`;
      var dis = document.getElementById("searchBTN");
      var loadDisplay = document.getElementById("loadDisplay");
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

        await fetch(url)
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
    case "2":
      displayItems.innerHTML =
        '<button type="text" id="clickEvent" class="input-div-item input-btn-lg bg-warning text-success">Generate!</button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://catfact.ninja/fact"; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<button type="text" class="input-div-item input-btn-lg bg-warning text-success">Check!</button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.coindesk.com/v1/bpi/currentprice.json"; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<button type="text" class="input-div-item input-btn-lg bg-warning text-success">Ask!</button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://www.boredapi.com/api/activity"; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get You Age..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.agify.io?name=" + userName + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.genderize.io?name=" + gender + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.nationalize.io?name=" + gender + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url =
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "dog.ceo/api/breeds/images/random"; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.genderize.io?name=" + gender + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.genderize.io?name=" + gender + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.genderize.io?name=" + gender + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<input type="text" class="input-div-item input-search text-success" placeholder="Input Your Name Get Your Gender..."> <button class="input-div-item input-btn bg-warning"></button>';
      var dis = document.getElementById("clickEvent");
      var loadDisplay = document.getElementById("loadDisplay");
      let url = "https://api.genderize.io?name=" + gender + ""; //https://api.publicapis.org/entries
      dis.addEventListener("click", async function getData(e) {
        e.preventDefault();
        loadDisplay.innerHTML = `<div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line"></div>
                                         <hr>
                                         <div class="circle mb-2"></div>
                                         <div class="line">
                                         </div>`;

        await fetch(url)
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
      displayItems.innerHTML =
        '<div class="input-div-item select-item bg-white text-success">Please Select An Option...</div>';
  }
});
