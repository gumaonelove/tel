export const BLANK = "----------";

export function htmlDecode(str?: string): string {
  if (!process.browser) return "";
  var txt = document.createElement("textarea");
  txt.innerHTML = str || "";
  return txt.value;
}

// removing empty fields in an object
export function filterOutFalsyItems(obj: any): any {
  const resObj: any = {};
  for (const i in obj) {
    if (obj[i]) {
      resObj[i] = obj[i];
    }
  }

  return resObj;
}