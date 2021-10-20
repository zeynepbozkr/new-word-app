import React, { useState, useEffect } from "react";
import { Form, Input, Slider, Select, Col, Button } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import axios from "axios";

function addPost() {
  const router = useRouter();

  const { Option } = Select;
  const colorPalet = [
    ["#D4ECDD", "#345B63", "#152D35", "#112031"],
    ["#261C2C", "#3E2C41", "#5C527F", "#6E85B2"],
    ["#E2C2B9", "#BFD8B8", "#E7EAB5", "#F1F7E7"],
    ["#91091E", "#FACE7F", "#911F27", "#630A10"],
    ["#420516", "#7D1935", "#B42B51", "#E63E6D"],
  ];

  const onFinish = async (values) => {
    console.log(values, "sbbgsbsg");

    if (values.words.length <= 6) {
      console.log("dzfnxnvxn");
      const res = await axios
        .post("http://localhost:5000", {
          words: values?.words,
          font: values?.font,
          colors: values?.colors,
        })
        .then((response) => {
          console.log({ response });
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return false;
        });

      console.log(res, "data.res");
      if (res) {
        return router.push({
          pathname: "/listPage",
          query: {
            id: res,
          },
        });
      } else {
        console.log("hata");
      }
    }
  };

  return (
    <div>
      <Form
        style={{
          height: "400px",
          width: "600px",
          border: "3px solid white",
          padding: "50px",
          margin: "25px 50px 75px 10px",
          borderRadius: "10px",
          boxShadow: "3px 3px 3px 3px rgba(238, 210, 204, 0.3)",
        }}
        initialValues={{
          words: "",
          colors: "",
          font: "",
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Word" name="words">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Select  "
          ></Select>
        </Form.Item>

        <Form.Item name="font" label="Slider">
          <Slider min={100} max={1000} defaultValue={100} />
        </Form.Item>

        <Form.Item label="Color" name="colors">
          <Select>
            {colorPalet.map((palete, index) => {
              return (
                <Option value={palete}>
                  {palete.map((item, index) => {
                    return (
                      <>
                        <Col key={index} style={{ backgroundColor: item }}>
                          {item}
                        </Col>
                      </>
                    );
                  })}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item label="Submit">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default addPost;
