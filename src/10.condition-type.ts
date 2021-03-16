interface Bird {
  name1: string;
}
interface Sky {
  sky: string;
}
interface Fish {
  name2: string;
}
interface Swimming {
  swim: string;
}
type MyType<T> = T extends Bird ? Sky : Swimming;
type x = MyType<Fish | Bird>;
