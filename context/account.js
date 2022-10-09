import { createContext, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';

const AccountContext = createContext();

const AccountWrapper = ({ children }) => {
  const { account, chainId } = useWeb3React();
  return (
    <AccountContext.Provider value={{ account, chainId }}>
      {children}
    </AccountContext.Provider>
  );
};

const useAccountContext = () => {
  return useContext(AccountContext);
};

export { AccountWrapper, useAccountContext };
