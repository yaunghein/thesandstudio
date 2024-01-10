export default function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy as T;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy as T;
  }

  if (obj instanceof Object) {
    const copy = {};
    for (const attr in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) {
        (copy as { [key: string]: any })[attr] = deepClone(obj[attr]);
      }
    }
    return copy as T;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}
