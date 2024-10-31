const compareNumbers = (n1: number, n2: number) => {
  if (n1 > n2) {
    return 1;
  } else if (n1 < n2) {
    return -1;
  } else {
    return 0;
  }
};

const compareStrings = (s1: string, s2: string) => {
  return s1.toLowerCase().localeCompare(s2.toLowerCase());
};

const compareArrays = (arr1: any[], arr2: any[]) => {
  const result = true;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (
        (typeof arr1[i] === "number" &&
          typeof arr2[i] === "number" &&
          compareNumbers(arr1[i], arr2[i]) !== 0) ||
        (typeof arr1[i] === "string" &&
          typeof arr2[i] === "string" &&
          compareStrings(arr1[i], arr2[i]) !== 0) ||
        (typeof arr1[i] === "boolean" &&
          typeof arr2[i] === "boolean" &&
          arr1[i] !== arr2[i]) ||
        (Array.isArray(arr1[i]) &&
          Array.isArray(arr2[i]) &&
          !compareArrays(arr1[i], arr2[i])) ||
        (typeof arr1[i] === "object" &&
          typeof arr2[i] === "object" &&
          !compareObjects(arr1[i], arr2[i]))
      ) {
        return false;
      }
    }
  }
  return result;
};

const compareObjects = (obj1: any, obj2: any): boolean => {
  const result = true;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (
      obj2[key] == null ||
      (typeof obj1[key] === "number" &&
        typeof obj2[key] === "number" &&
        compareNumbers(obj1[key], obj2[key]) !== 0) ||
      (typeof obj1[key] === "string" &&
        typeof obj2[key] === "string" &&
        compareStrings(obj1[key], obj2[key]) !== 0) ||
      (typeof obj1[key] === "boolean" &&
        typeof obj2[key] === "boolean" &&
        obj1[key] !== obj2[key]) ||
      (Array.isArray(obj1[key]) &&
        Array.isArray(obj2[key]) &&
        !compareArrays(obj1[key], obj2[key])) ||
      (typeof obj1[key] === "object" &&
        typeof obj2[key] === "object" &&
        !compareObjects(obj1[key], obj2[key]))
    ) {
      return false;
    }
  }
  return result;
};

export const compare = (item1: any, item2: any) => {
  if (typeof item1 === "number" && typeof item2 === "number") {
    return compareNumbers(item1, item2);
  } else if (typeof item1 === "string" && typeof item2 === "string") {
    return compareStrings(item1, item2);
  } else if (typeof item1 === "boolean" && typeof item2 === "boolean") {
    return item1 === item2;
  } else if (Array.isArray(item1) && Array.isArray(item2)) {
    return compareArrays(item1, item2);
  } else if (typeof item1 === "object" && typeof item2 === "object") {
    return compareObjects(item1, item2);
  }
};
