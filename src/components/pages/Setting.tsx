import { memo, VFC } from "react";

// VFCは関数コンポーネントの型を表す
export const Setting: VFC = memo(() => {
  return <p>設定ページです</p>;
});
