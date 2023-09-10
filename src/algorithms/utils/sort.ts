import { compare } from "./compare";

export const isSorted = (list: any[]): boolean => {
  let length = list.length;
  if (length === 0 || length === 1) {
    return true;
  }
  for (let index = 1; index < list.length; index++) {
    if (compare(list[index - 1], list[index]) === 1) {
      return false;
    }
  }
  return true;
};

const cloneObject = (object: any) => {
  const clonedObject: any = {};
  const keys = Object.keys(object);
  for (const key of keys) {
    clonedObject[key] = clone(object[key]);
  }
  return clonedObject;
};

const cloneArray = (array: any[]) => {
  const clonedArray: any[] = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    const element = array[index];
    clonedArray.push(clone(element));
  }
  return clonedArray;
};

export const clone = (item: any) => {
  if (
    typeof item === "number" ||
    typeof item === "string" ||
    typeof item === "boolean"
  ) {
    return item;
  } else if (Array.isArray(item)) {
    return cloneArray(item);
  } else if (typeof item === "object") {
    return cloneObject(item);
  }
};

export const swap = (item1: any, item2: any) => {
  const item1Clone = clone(item1);
  const item2Clone = clone(item2);
  return [item2Clone, item1Clone];
};
