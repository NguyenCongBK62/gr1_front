import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import {SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './SearchHeader.css';
const { Option } = Select;

const SearchHeader = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    return (
        <div className='search-header'>
            <div className='search-header-content'>
                <h1 className='slogan'>Việc làm chất cho dân IT</h1>
                <div className='search-header-area'>
                    <Form form={form} name="horizontal_login" layout="inline" size='large' style={{width: '100%'}}>
                        <Form.Item
                            name="jobsearch"
                            mode="tags"
                            rules={[
                            {
                                required: true,
                                message: 'Bạn vẫn để trống',
                            },
                            ]}
                            style={{width: '70%'}}
                        >   
                            
                            <Input prefix={<SearchOutlined className="site-form-item-icon" style={{fontSize: '24px'}}/>} placeholder="Nhập dữ liệu tìm kiếm" />
                        </Form.Item>
                        <Form.Item
                            name="place"
                            style={{width: '15%'}}
                        >   
                            
                            <Select
                                placeholder="Thành phố"
                                
                                suffixIcon={ <EnvironmentOutlined /> }
                            >
                                <Option value="male">Hà Nội</Option>
                                <Option value="female">Hồ Chí Minh</Option>
                                <Option value="other">Đà Nẵng</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item shouldUpdate style={{width: '10%'}}>
                            {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Tìm kiếm
                            </Button>
                            )}
                        </Form.Item>
                    </Form>
                </div>
                <Row style={{marginTop: '2rem'}}>
                    <Col id='link-tag-col'>
                        <a className='link-tag'>Tester</a>
                    </Col>
                    <Col id='link-tag-col'>
                        <a className='link-tag'>Java</a>
                    </Col>
                    <Col id='link-tag-col'>
                        <a className='link-tag'>PHP</a>
                    </Col>
                    <Col id='link-tag-col'>
                        <a className='link-tag'>Android</a>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SearchHeader;