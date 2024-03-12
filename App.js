import StoreProvider from './src/providers/StoreProvider';
import PackageProvider from './src/providers/PackageProvider';

const App = () => {
  return (
    <StoreProvider>
      <PackageProvider />
    </StoreProvider>
  );
};

export default App;
