import { memo, VFC } from "react";

// VFCは関数コンポーネントの型を表す
export const UserManagement: VFC = memo(() => {
  return <p>ユーザー管理ページです</p>;
});
