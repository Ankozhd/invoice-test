import { useEffect, useState } from 'react';
import {
  Button, Col, Divider, Form, Input, InputNumber, Row, Space, Table,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import createInvoices from '../service/createInvoices';
import { testProducts } from '../service/testData';

const columns = [
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'QTY',
    dataIndex: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
  },
  {
    title: 'VAT',
    dataIndex: 'vat',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];

function Cart() {
  const [products, setProducts] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    if (products) {
      setInvoices(createInvoices(products));
    }
  }, [products]);

  const onCheckout = (values) => {
    const { productsFormList } = values;
    setProducts(productsFormList);
  };

  const generateFromTestData = () => {
    setInvoices(createInvoices(testProducts));
  };

  return (
    <Col>
      <Row justify="center" style={{ margin: '40px 0 10px 0' }}>
        <Form name="dynamic_form_nest_item" onFinish={onCheckout} autoComplete="off">
          <Form.List name="productsFormList">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, 'desc']}
                      label="Description"
                    >
                      <Input placeholder="Description" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'quantity']}
                      label="QTY"
                    >
                      <InputNumber placeholder="0" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'price']}
                      label="Price"
                    >
                      <InputNumber placeholder="100" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'discount']}
                      label="Discount"
                    >
                      <InputNumber placeholder="0.1" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'vat']}
                      label="VAT"
                    >
                      <InputNumber placeholder="0.22" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add product
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Checkout
            </Button>

          </Form.Item>
        </Form>
      </Row>
      <Row justify="center">
        <Button type="primary" onClick={() => generateFromTestData()}>
          Generate from test data
        </Button>
      </Row>
      <Row justify="center">
        {invoices.map((invoice, index) => (
          <Col key={`${invoice}${index}`} span={24}>
            <Divider style={{ borderColor: '#1677ff' }}>
              Invoice&nbsp;
              {index + 1}
            </Divider>
            <Table
              columns={columns}
              dataSource={invoice.items}
              pagination={false}
              size="middle"
              bordered
              rowKey={(inv) => inv.desc}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell align="right" colSpan={5} index={0}>Subtotal</Table.Summary.Cell>
                    <Table.Summary.Cell align="left" colSpan={2} index={1}>{invoice.subtotal.toFixed(2)}</Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell align="right" colSpan={5} index={0}>VAT</Table.Summary.Cell>
                    <Table.Summary.Cell align="left" colSpan={2} index={1}>{invoice.totalVat.toFixed(2)}</Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell align="right" colSpan={5} index={0}>Total</Table.Summary.Cell>
                    <Table.Summary.Cell align="left" colSpan={2} index={1}>{invoice.total.toFixed(2)}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default Cart;
