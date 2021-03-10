let str: string | number; // When there is no initialization, only the common method of the two types can be called

// str.toString
// str.valueOf
str = 1; // Will infer subsequent methods based on the assignment
str.toFixed();

str = 'abc';
str.toLocaleLowerCase();

let ele: HTMLElement | null = document.getElementById('#app');
ele!.style.color = 'red'; // Non-empty assertion means that there must be a value
ele?.style?.color; // => ele && ele.style && ele.style.color, chained optional operator

(ele as HTMLElement).style.color = 'red';

type Direction = 'up' | 'down' | 'left' | 'right';
let direction: Direction;
direction = 'up';

export {};
