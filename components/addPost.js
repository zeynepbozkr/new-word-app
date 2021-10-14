import React, { useState, useEffect } from "react";
import { Form, Input, Slider, Select, Col, Button } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import styles from "./listpage.module.css";

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

  const onFinish = (values) => {
    if (values.word.length === 6) {
      router.push({
        pathname: "/listPage",
        query: {
          words: values?.word,
          font: values?.font,
          color: values?.color,
        },
      });
    }
  };

  return (
    <div>
      <Form
        style={{
          border: "3px solid white",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "3px 3px 3px 3px rgba(238, 210, 204, 0.3)",
        }}
        initialValues={{
          words: "",
          color: "",
          font: "",
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Word" name="word">
          <Select mode="tags" style={{ width: "100%" }}></Select>
        </Form.Item>

        <Form.Item name="font" label="Slider">
          <Slider min={100} max={1000} defaultValue={120} />
        </Form.Item>

        <Form.Item label="Color" name="color">
          <Select>
            {colorPalet.map((palete, index) => {
              return (
                <Option value={palete}>
                  {palete.map((item) => {
                    return (
                      <>
                        <Col style={{ backgroundColor: item }}>{item}</Col>
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
