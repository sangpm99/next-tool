"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";

interface Props {
  isModelVisible: boolean;
  onModelVisibleChange: (visible: boolean) => void;
  onOk: () => void;
  onCancel: () => void;
  id?: number;
}

export default function CreateUpdateProductCategoryModal(props: Props) {
  const showModal = () => {
    props.onModelVisibleChange(true);
  };

  const handleOk = () => {
    props.onOk();
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={props.isModelVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
