import { memo, VFC } from "react";

// VFCは関数コンポーネントの型を表す
export const Home: VFC = memo(() => {
  return <p>HOMEページです</p>;
});
