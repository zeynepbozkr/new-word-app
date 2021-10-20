import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card } from "antd";
import axios from "axios";

function listPage() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [kelime, setKelime] = useState([]);

  useEffect(() => {
    console.log(router.query, "data id");

    const fetcher = async () => {
      const allData = await axios
        .get("http://localhost:5000", { params: { id: id } })
        .then((resp) => {
          console.log(resp.data[0], "data list");

          return resp.data[0];
        });

      console.log(allData, "aa");
      const _wordList = [];
      for (let index = 0; index < 150; index++) {
        _wordList.push(
          allData.words?.map((word) => {
            return (
              <p
                style={{
                  wordWrap: "break-word",
                  fontSize: Math.floor(Math.random() * 300),
                  colors:
                    allData.colors[
                      Math.floor(Math.random() * allData.colors.length)
                    ],
                }}
              >
                {word}
              </p>
            );
          })
        );

        setKelime(_wordList);
      }

      setLoading(false);
    };

    fetcher();
  }, []);

  console.log(kelime, "kel (hepsi aynı)");

  return loading ? (
    "loading "
  ) : (
    <div
      style={{
        display: "flex",
        flexdirection: "column",
        justifycontent: "center",
        wordWrap: "break-word",
        overflow: "scroll",
        width: "800px",
        height: "500px",
      }}
    >
      {kelime.map((kel) => kel)}
    </div>
  );
}

export default listPage;
