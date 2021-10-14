import React from "react";
import { useRouter } from "next/router";
import { Card } from "antd";
import styles from "./Listpage.module.css";

function listPage() {
  const router = useRouter();
  const { words, font, color } = router.query;

  console.log(words, "kelimeler");

  return (
    <div>
      <Card
        style={{
          border: "3px solid black",
          margin: "150px",
          padding: "150px",
          borderRadius: "10px",
          boxShadow: "3px 3px 3px 3px rgba(238, 210, 204, 0.3)",
        }}
      >
        <p>
          {words?.map((item) => {
            console.log(font);
            return (
              <div
                style={{
                  // `${font}px`
                  fontSize: parseInt(font),
                  color: color[Math.floor(Math.random() * color.length)],
                }}
              >
                {item}
              </div>
            );
          })}
        </p>
      </Card>
    </div>
  );
}

export default listPage;
