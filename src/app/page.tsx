import Image from "next/image";
import Layout from "./my/page";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Layout>
        <h1>我是插入的</h1>
      </Layout>
    </div>
  );
}
