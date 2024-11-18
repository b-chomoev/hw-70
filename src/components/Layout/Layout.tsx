import ToolBar from '../ToolBar/ToolBar';
import * as React from 'react';
import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
     <header>
        <ToolBar />
     </header>
      <main className='container mt-4'>
        {children}
      </main>
    </>
  );
};

export default Layout;