"use client";

import { useState, useEffect } from "react";
import { Row, Col, Button, Tooltip, Card, Space, Table } from "antd";
import type { TableProps } from "antd";

import type { ProductCategory } from "@/types/productCategory.interface";

export default function ProductCategories() {
  const [loading, setLoading] = useState(false);
  const [productCategories, setProductCategories] = useState<ProductCategory[]>(
    []
  );

  const data: ProductCategory[] = [
    {
      id: 1,
      name: "John Brown",
    },
    {
      id: 2,
      name: "Jim Green",
    },
    {
      id: 3,
      name: "Joe Black",
    },
  ];

  const columns: TableProps<ProductCategory>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 120,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: 120,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="text"
            className="text-warning"
            onClick={() => onEdit(record)}
            icon={<i className="ri-edit-box-line"></i>}
          ></Button>
          <Button
            type="text"
            className="text-danger"
            onClick={() => onDelete(record)}
            icon={<i className="ri-delete-bin-7-line"></i>}
          ></Button>
        </Space>
      ),
    },
  ];

  const onEdit = (record: ProductCategory) => {
    console.log(record);
  };

  const onDelete = (record: ProductCategory) => {
    console.log(record);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card variant="borderless">
            <div>
              <Tooltip title="Tạo danh mục mới">
                <Button
                  type="primary"
                  icon={<i className="ri-add-line"></i>}
                ></Button>
              </Tooltip>
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card variant="borderless">
            <Table<ProductCategory>
              columns={columns}
              dataSource={data}
              rowKey="id"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
