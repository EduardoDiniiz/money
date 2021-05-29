import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequetClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequetClose}: NewTransactionModalProps) {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequetClose}>
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}