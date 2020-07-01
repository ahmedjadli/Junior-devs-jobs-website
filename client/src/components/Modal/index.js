import React from "react";
import { Typography, Avatar, Row, Col, Divider } from "antd";
import { Drawer, Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const Modal = ({ modalProps, setModalProps }) => {
  console.log(modalProps);
  return (
    <Drawer
      width={750}
      onClose={() => {
        setModalProps({ open: false, job: {} });
      }}
      closable={false}
      visible={modalProps.open}
      keyboard
    >
      <Row gutter={32}>
        <Col style={{ padding: "20px" }} span={5}>
          <img
            style={{
              backgroundColor: "white",
              maxWidth: "120px",
            }}
            src={modalProps.job && modalProps.job.company_logo}
          />
        </Col>
        <Col style={{ padding: "20px" }} span={16}>
          <Title level={3}>{modalProps.job && modalProps.job.title}</Title>
          <Text>{modalProps.job && modalProps.job.company}</Text>
          <Divider />
          <Text strong>Type : </Text>
          <Text>{modalProps.job && modalProps.job.type}</Text>
          <Divider type="vertical" />
          <Text strong>Location : </Text>
          <Text>{modalProps.job && modalProps.job.location}</Text>
          <br />
          <br />
          <Button
            href={modalProps.job && modalProps.job.url}
            target="_blank"
            type="primary"
          >
            Apply for this job <RightCircleOutlined />
          </Button>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col>
          <Title level={3}>Description :</Title>
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: modalProps.job && modalProps.job.description,
            }}
          />
        </Col>
      </Row>
    </Drawer>
  );
};

export default Modal;
