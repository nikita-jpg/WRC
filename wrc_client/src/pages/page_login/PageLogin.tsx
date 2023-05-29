import { Button, Checkbox, Form, Input } from "antd";
import { redirect, useNavigate } from "react-router-dom";

import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import validator from "validator";

import { Typography } from "antd";
import { DOMEN_SERVER } from "../../consts";

import "./PageLogin.scss";

const { Title } = Typography;

type Register = {
    username: string;
    password: string;
    remember: boolean;
};

export const PageLogin = () => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const onFinish = (values: Register) => {
        setIsButtonLoading(true);

        console.log("Success:", values);

        request(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const request = async (data: Register) => {
        try {
            const response = await axios.post(
                DOMEN_SERVER + "/auth/authorization",
                {
                    email: data.username,
                    password: data.password,
                }
            );

            console.log(response);

            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                if (err.response.status === 403) {
                    setErrorMessage("Некорректный email или пароль");
                }
                setIsButtonLoading(false);
            }
        }
    };

    return (
        <div className="page-login">
            {errorMessage && (
                <Title level={3} type="danger">
                    {errorMessage}
                </Title>
            )}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="page-login__form"
            >
                <Form.Item
                    label="Логин:"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "The name is required.",
                        },
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isButtonLoading}
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
