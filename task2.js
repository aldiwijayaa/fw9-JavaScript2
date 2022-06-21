const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function SearchName(search, limit, callback) {
  let dataName = "";
  let hurufAwal = "";
  name.map((nameSearch) => {
    nameSearch = nameSearch.toLowerCase();
    search = search.toLowerCase();

    if (nameSearch.includes(search)) {
      hurufAwal = nameSearch.slice(0,1).toUpperCase();
      dataName += `${nameSearch} `;
    }
  });
  dataName = dataName.split(" ");
  callback(limit, dataName);
}

function callback(limit, dataName) {
  dataName = dataName.slice(0, limit);
  if (dataName[0] == "") {
    return console.log("Data pencarian tidak ditemukan");
  }
  console.log(dataName);
}

SearchName("an", 3, callback);
