import React from "react";
import styled, { keyframes } from "styled-components";
import { FcHighPriority } from "react-icons/fc";

const DeleteModal = ({ item, loading, closeModal, handleDelete }) => {
  return (
    <Modal>
      <Backdrop onClick={closeModal} />
      <Wrapper>
        <MainContainer>
          <IconContainer>
            <FcHighPriority />
          </IconContainer>
          <h2>Are you sure?</h2>
          <p>
            This action will delete all the details regarding this {item}. <br />
            You won't be able to revert this.
          </p>
          {loading && <LoadingText>Loading...</LoadingText>}
          <ButtonContainer>
            <Button onClick={closeModal} className="cancel">
              Cancel
            </Button>
            <Button onClick={handleDelete} className="delete">
              Yes, Delete It
            </Button>
          </ButtonContainer>
        </MainContainer>
      </Wrapper>
    </Modal>
  );
};

export default DeleteModal;

// Keyframe animation for modal slide-in effect
const fromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Backdrop to darken the background
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

// Modal container for positioning
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

// Wrapper to center the modal content
const Wrapper = styled.div`
  position: relative;
  z-index: 30;
`;

// Main content container
const MainContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: ${fromBottom} 0.4s ease forwards;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

// Icon container for styling the alert icon
const IconContainer = styled.div`
  display: inline-block;
  background-color: #fce4ec;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1rem;

  svg {
    font-size: 2.5rem;
    color: #d32f2f;
  }
`;

// Loading text styling
const LoadingText = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 1rem;
`;

// Button container for proper alignment
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

// Reusable button styling
const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.delete {
    background-color: #d32f2f;
    color: #fff;
    border: none;

    &:hover {
      background-color: #b71c1c;
    }
  }

  &.cancel {
    background-color: #fff;
    color: #d32f2f;
    border: 1px solid #d32f2f;

    &:hover {
      background-color: #fce4ec;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;
