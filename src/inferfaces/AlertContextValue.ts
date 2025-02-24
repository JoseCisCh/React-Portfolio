export default interface AlertContextValue {
  onOpen: (type: string, message:string ) => void;
  onClose: () => void;
  isOpen: boolean;
  type: string;
  message: string;
}