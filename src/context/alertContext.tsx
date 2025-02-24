import {createContext, useContext, useState} from "react";
import AlertContextValue from "../inferfaces/AlertContextValue";
import Props from "../inferfaces/Props";


const AlertContext = createContext<AlertContextValue|undefined>(undefined);

export const AlertProvider = ({ children }: Props) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type: string, message: string) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext  = () => {
  const alertContext = useContext(AlertContext);
  if(alertContext === undefined) {
    throw new Error('useAlertContext must be used within a AlertProvider');
  } else {
    return alertContext;
  }
}
