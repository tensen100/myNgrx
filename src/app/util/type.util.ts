/**
 * 解决命名冲突问题
 * 通过字典判断类型是否存在
 * @type {{}}
 */
const typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}
