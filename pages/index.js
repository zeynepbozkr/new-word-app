import Head from "next/head";
import Image from "next/image";
import AddPost from "../components/addPost";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <AddPost></AddPost>
    </div>
  );
}
