import { memo, VFC } from "react";

// VFCは関数コンポーネントの型を表す
export const Page404: VFC = memo(() => {
  return <p>404ページです</p>;
});
