export interface EntryType {
  code: string;
  unit: string;
  desc: string;
  count: number;
  kcal: number;
  totalKcal: number;
}

export interface CodeEntryType {
  code: string;
  codedate: string;
  codetime: string;
}

let decodeLogCode = (logCode: string): EntryType => {
  let res = "";

  let entry = {
    code: "-",
    unit: "-",
    desc: "-",
    count: 0,
    kcal: 0,
    totalKcal: 0,
  };

  let parts = logCode.split(" ");
  console.log(parts);

  if (parts.length === 2) {
    if (parts[0] === "ei") {
      let count = parseInt(parts[1]);
      let unit = "Stück";
      let entryText = "Gekochtes Ei";
      let entryKcal = 100;
      let totalEntryKcal = entryKcal * count;

      entry = {
        code: logCode,
        unit: unit,
        desc: entryText,
        count: count,
        kcal: entryKcal,
        totalKcal: totalEntryKcal,
      };
    }
  }

  return entry;
};

export default decodeLogCode;
