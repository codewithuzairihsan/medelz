import React, { useState } from "react";
import { Modal } from "antd";
import {
  CategoryImageDiv,
  CategoryImageRow,
  CategoryImageCol,
  CategoryImage,
  // CategoryName,
  CategoryImageTitle,
} from "./CategoryImages.style";
import { Images } from "../competition/Data";

const CategoryImages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CategoryImageDiv>
        <CategoryImageRow>
          {Images.map((item) => {
            return (
              <CategoryImageCol>
                <CategoryImage
                  src={item.CategoryImage}
                  alt="music"
                  preview={false}
                />
                <CategoryImageTitle onClick={showModal}>
                  <h3>{item.title}</h3>
                </CategoryImageTitle>
              </CategoryImageCol>
            );
          })}
        </CategoryImageRow>
      </CategoryImageDiv>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Title</p>
      </Modal>
    </>
  );
};

export default CategoryImages;
