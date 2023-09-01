import React from "react";
import "./landing.css";
import tronImg from "../../assets/images/tron.png";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { LazyMotion, domAnimation, m } from "framer-motion";

//antd imports
import { Divider, Typography } from "antd";
import { Button, Space } from "antd";
import { Card } from "antd";
import { Image } from "antd";

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;

const Landing = () => {
  // let navigate = useNavigate();

  return (
    <div>
      {/* landing image section */}
      <div className="landing-image">
        <div className="custom-center font1">
          <Typography>
            <>
              <Title
                level={1}
                className="fontH"
                style={{
                  fontWeight: 700,
                  fontSize: "3rem",
                  // color: "#52c234",
                  // color: "linear-gradient(to bottom, #11998e, #38ef7d)",
                  color: "#5C5470",
                }}
              >
                Easy Charge
              </Title>
              <Title level={3} className="font1" style={{ color: "#5C5470" }}>
                World's first public EV charging network
              </Title>
              <Title level={3} className="font1" style={{ color: "#5C5470" }}>
                Built on{" "}
                <Image
                  height={"3rem"}
                  src={tronImg}
                  alt="tron logo"
                  style={{ marginBottom: "10px" }}
                />
                &nbsp;
              </Title>
              <Space style={{ width: "50%", marginTop: "10px" }}>
                <Button
                  className="font1"
                  type="primary"
                  size={"large"}
                  style={{ minWidth: "200px" }}
                >
                  <b>SIGNUP</b>
                </Button>
                <Button
                  className="font1"
                  size={"large"}
                  style={{ minWidth: "200px", color: '#52c41a' }}
                >
                  <b>LOGIN</b>
                </Button>
              </Space>
            </>
          </Typography>
        </div>
      </div>
      {/* cities section */}
      <div style={{ textAlign: "center", margin: "4% 0" }}>
        <Typography>
          <Title className="font1" level={1} style={{ color: "#5C5470" }}>
            Currently available in three major Cities
          </Title>
          <Paragraph type="warning" style={{ margin: "0 0 4% 0" }}>
            * This is a simulation protype and we are pushing forward to the REALITY.
          </Paragraph>
        </Typography>
        <Space
          direction="horizontal"
          wrap
          size={100}
          split={<Divider type="vertical" />}
        >
          <Title className="font1" level={3}>
            Coimbatore
          </Title>
          <Title className="font1" level={3}>
            Chennai
          </Title>
          <Title className="font1" level={3}>
            Bengaluru
          </Title>
        </Space>
      </div>
      <Divider />
      {/* cards section */}
      <div style={{ textAlign: "center", margin: "4% 0" }}>
        <Space direction="horizontal" wrap split={<Divider type="vertical" />}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                style={{ width: "30%", margin: "auto", marginTop: "25px" }}
                alt="example"
                src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/512/null/external-blockchain-cryptocurrency-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png"
              />
            }
          >
            <Meta
              title="DECENTRALISED"
              description="Separated by Region - United by Service"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                style={{ width: "30%", margin: "auto", marginTop: "25px" }}
                alt="example"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/null/external-consent-cyber-security-flaticons-lineal-color-flat-icons.png"
              />
            }
          >
            <Meta
              title="TRANSPARENCY"
              description="Transaction are secure and fast"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                style={{ width: "30%", margin: "auto", marginTop: "25px" }}
                alt="example"
                src="https://img.icons8.com/ultraviolet/512/null/low-price.png"
              />
            }
          >
            <Meta title="LOW COST" description="Quick and Automatic payments" />
          </Card>
        </Space>
      </div>
      <Divider />
      <footer style={{ textAlign: "center", margin: "4% 0" }}>
        <Typography>
          <Paragraph>Made with ❤️ in INDIA</Paragraph>
        </Typography>
        <Typography>
          <Paragraph>Copyright © Then, Now & Forever - Easy Charge</Paragraph>
        </Typography>
      </footer>
    </div>
  );
};
export default React.memo(Landing);
