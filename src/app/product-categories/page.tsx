"use client";

import { useState, useEffect, useCallback } from "react";
import { Row, Col, Button, Tooltip, Card, Space, Table } from "antd";
import type { TableProps } from "antd";

import { getProductCategories } from "@/services/productCategoryService";
import type { ProductCategory } from "@/types/productCategory.interface";

import CreateUpdateProductCategoryModal from "@/views/apps/productCategory/CreateUpdateProductCategoryModal";

export default function ProductCategories() {
  const [loading, setLoading] = useState(false);
  const [productCategories, setProductCategories] = useState<ProductCategory[]>(
    []
  );
  const [selected, setSelected] = useState<ProductCategory>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProductCategories();
      setProductCategories(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const columns: TableProps<ProductCategory>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 120,
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Hành động",
      key: "action",
      width: 120,
      render: (_, record) =>
        record.id !== 1 && (
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
    setSelected(record);
    setIsModalVisible(true);
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
              dataSource={productCategories}
              rowKey="id"
              loading={loading}
            />
          </Card>
        </Col>
      </Row>

      <CreateUpdateProductCategoryModal
        isModelVisible={isModalVisible}
        onModelVisibleChange={(value) => setIsModalVisible(value)}
        onOk={() => {
          setIsModalVisible(false);
          void fetchData();
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        id={selected?.id}
      ></CreateUpdateProductCategoryModal>
    </div>
  );
}
